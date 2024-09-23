import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hvc44_list = createAsyncThunk(
  "hvc44s/api_v1_hvc44_list",
  async payload => {
    const response = await apiService.api_v1_hvc44_list(payload)
    return response.data
  }
)
export const api_v1_hvc44_create = createAsyncThunk(
  "hvc44s/api_v1_hvc44_create",
  async payload => {
    const response = await apiService.api_v1_hvc44_create(payload)
    return response.data
  }
)
export const api_v1_hvc44_retrieve = createAsyncThunk(
  "hvc44s/api_v1_hvc44_retrieve",
  async payload => {
    const response = await apiService.api_v1_hvc44_retrieve(payload)
    return response.data
  }
)
export const api_v1_hvc44_update = createAsyncThunk(
  "hvc44s/api_v1_hvc44_update",
  async payload => {
    const response = await apiService.api_v1_hvc44_update(payload)
    return response.data
  }
)
export const api_v1_hvc44_partial_update = createAsyncThunk(
  "hvc44s/api_v1_hvc44_partial_update",
  async payload => {
    const response = await apiService.api_v1_hvc44_partial_update(payload)
    return response.data
  }
)
export const api_v1_hvc44_destroy = createAsyncThunk(
  "hvc44s/api_v1_hvc44_destroy",
  async payload => {
    const response = await apiService.api_v1_hvc44_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hvc44sSlice = createSlice({
  name: "hvc44s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_hvc44_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hvc44_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hvc44_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hvc44_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hvc44_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hvc44_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_hvc44_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_hvc44_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_hvc44_list,
  api_v1_hvc44_create,
  api_v1_hvc44_retrieve,
  api_v1_hvc44_update,
  api_v1_hvc44_partial_update,
  api_v1_hvc44_destroy,
  slice: hvc44sSlice
}
