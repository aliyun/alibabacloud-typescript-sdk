// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateApDeviceRequest extends $tea.Model {
  apMac?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateApDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateApDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateApDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateApDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddApDeviceRequest extends $tea.Model {
  apMac?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddApDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddApDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddApDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddApDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEslDeviceRequest extends $tea.Model {
  eslBarCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEslDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEslDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddEslDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddEslDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUserRequest extends $tea.Model {
  stores?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      stores: 'Stores',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stores: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUserResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsRequest extends $tea.Model {
  itemInfo?: BatchInsertItemsRequestItemInfo[];
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      itemInfo: 'ItemInfo',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemInfo: { 'type': 'array', 'itemType': BatchInsertItemsRequestItemInfo },
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsResponseBody extends $tea.Model {
  batchResults?: BatchInsertItemsResponseBodyBatchResults;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchResults: 'BatchResults',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResults: BatchInsertItemsResponseBodyBatchResults,
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchInsertItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchInsertItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEslDeviceRequest extends $tea.Model {
  eslBarCode?: string;
  itemBarCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      itemBarCode: 'ItemBarCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      itemBarCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEslDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEslDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindEslDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindEslDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEslDeviceShelfRequest extends $tea.Model {
  eslBarCode?: string;
  shelfCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      shelfCode: 'ShelfCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      shelfCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEslDeviceShelfResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEslDeviceShelfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindEslDeviceShelfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindEslDeviceShelfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmLogisticsRequest extends $tea.Model {
  logisticsDocuments?: string;
  poNumber?: string;
  prNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsDocuments: 'LogisticsDocuments',
      poNumber: 'PoNumber',
      prNumber: 'PrNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsDocuments: 'string',
      poNumber: 'string',
      prNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmLogisticsResponseBody extends $tea.Model {
  acceptance?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptance: 'Acceptance',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptance: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmLogisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmLogisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfirmLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoreRequest extends $tea.Model {
  brand?: string;
  comments?: string;
  companyId?: string;
  groups?: string;
  outId?: string;
  parentId?: string;
  phone?: string;
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      comments: 'Comments',
      companyId: 'CompanyId',
      groups: 'Groups',
      outId: 'OutId',
      parentId: 'ParentId',
      phone: 'Phone',
      storeName: 'StoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      comments: 'string',
      companyId: 'string',
      groups: 'string',
      outId: 'string',
      parentId: 'string',
      phone: 'string',
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoreResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  storeId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      storeId: 'StoreId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      storeId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApDeviceRequest extends $tea.Model {
  apMac?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEslDeviceRequest extends $tea.Model {
  eslBarCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEslDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEslDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEslDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEslDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemRequest extends $tea.Model {
  itemBarCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      itemBarCode: 'ItemBarCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemBarCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemBySkuIdRequest extends $tea.Model {
  skuId?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemBySkuIdResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemBySkuIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteItemBySkuIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteItemBySkuIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoreRequest extends $tea.Model {
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoreResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsRequest extends $tea.Model {
  alarmId?: string;
  alarmStatus?: string;
  alarmType?: string;
  errorType?: string;
  fromAlarmTime?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  toAlarmTime?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmStatus: 'AlarmStatus',
      alarmType: 'AlarmType',
      errorType: 'ErrorType',
      fromAlarmTime: 'FromAlarmTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      toAlarmTime: 'ToAlarmTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmStatus: 'string',
      alarmType: 'string',
      errorType: 'string',
      fromAlarmTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
      toAlarmTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBody extends $tea.Model {
  alarms?: DescribeAlarmsResponseBodyAlarms;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: DescribeAlarmsResponseBodyAlarms,
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApDevicesRequest extends $tea.Model {
  activated?: boolean;
  apMac?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      apMac: 'ApMac',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      apMac: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApDevicesResponseBody extends $tea.Model {
  apDevices?: DescribeApDevicesResponseBodyApDevices;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apDevices: 'ApDevices',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apDevices: DescribeApDevicesResponseBodyApDevices,
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesRequest extends $tea.Model {
  beBind?: boolean;
  eslBarCode?: string;
  eslStatus?: string;
  fromBatteryLevel?: number;
  itemBarCode?: string;
  mac?: string;
  pageNumber?: number;
  pageSize?: number;
  shelfCode?: string;
  storeId?: string;
  toBatteryLevel?: number;
  type?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      beBind: 'BeBind',
      eslBarCode: 'EslBarCode',
      eslStatus: 'EslStatus',
      fromBatteryLevel: 'FromBatteryLevel',
      itemBarCode: 'ItemBarCode',
      mac: 'Mac',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      shelfCode: 'ShelfCode',
      storeId: 'StoreId',
      toBatteryLevel: 'ToBatteryLevel',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beBind: 'boolean',
      eslBarCode: 'string',
      eslStatus: 'string',
      fromBatteryLevel: 'number',
      itemBarCode: 'string',
      mac: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      shelfCode: 'string',
      storeId: 'string',
      toBatteryLevel: 'number',
      type: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  eslDevices?: DescribeEslDevicesResponseBodyEslDevices;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      eslDevices: 'EslDevices',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      eslDevices: DescribeEslDevicesResponseBodyEslDevices,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEslDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEslDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsRequest extends $tea.Model {
  bePromotion?: boolean;
  itemBarCode?: string;
  itemId?: number;
  itemTitle?: string;
  pageNumber?: number;
  pageSize?: number;
  skuId?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      bePromotion: 'BePromotion',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skuId: 'SkuId',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bePromotion: 'boolean',
      itemBarCode: 'string',
      itemId: 'number',
      itemTitle: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skuId: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  items?: DescribeItemsResponseBodyItems;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      items: DescribeItemsResponseBodyItems,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogisticsRequest extends $tea.Model {
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogisticsResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  logistics?: DescribeLogisticsResponseBodyLogistics;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logistics: 'Logistics',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      logistics: DescribeLogisticsResponseBodyLogistics,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayOrdersRequest extends $tea.Model {
  fromDate?: string;
  orderId?: string;
  pageNumber?: number;
  pageSize?: number;
  toDate?: string;
  static names(): { [key: string]: string } {
    return {
      fromDate: 'FromDate',
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      toDate: 'ToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromDate: 'string',
      orderId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      toDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayOrdersResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  payOrders?: DescribePayOrdersResponseBodyPayOrders;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payOrders: 'PayOrders',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      payOrders: DescribePayOrdersResponseBodyPayOrders,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePayOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePayOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlanogramRailsRequest extends $tea.Model {
  layer?: string;
  pageNumber?: number;
  pageSize?: number;
  railCode?: string;
  shelf?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      layer: 'Layer',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      railCode: 'RailCode',
      shelf: 'Shelf',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      railCode: 'string',
      shelf: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlanogramRailsResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  planogramRailInfos?: DescribePlanogramRailsResponseBodyPlanogramRailInfos[];
  requestId?: string;
  storeId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planogramRailInfos: 'PlanogramRailInfos',
      requestId: 'RequestId',
      storeId: 'StoreId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planogramRailInfos: { 'type': 'array', 'itemType': DescribePlanogramRailsResponseBodyPlanogramRailInfos },
      requestId: 'string',
      storeId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlanogramRailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlanogramRailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlanogramRailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresRequest extends $tea.Model {
  brand?: string;
  companyId?: string;
  fromDate?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  storeName?: string;
  toDate?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      companyId: 'CompanyId',
      fromDate: 'FromDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      storeName: 'StoreName',
      toDate: 'ToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      companyId: 'string',
      fromDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
      storeName: 'string',
      toDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  stores?: DescribeStoresResponseBodyStores;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stores: 'Stores',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stores: DescribeStoresResponseBodyStores,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogRequest extends $tea.Model {
  eslBarCode?: string;
  fromDate?: string;
  itemBarCode?: string;
  itemId?: number;
  itemTitle?: string;
  operateStatus?: string;
  operateType?: string;
  operateUserId?: number;
  pageNumber?: number;
  pageSize?: number;
  reverse?: boolean;
  storeId?: string;
  toDate?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      fromDate: 'FromDate',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      operateStatus: 'OperateStatus',
      operateType: 'OperateType',
      operateUserId: 'OperateUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      storeId: 'StoreId',
      toDate: 'ToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      fromDate: 'string',
      itemBarCode: 'string',
      itemId: 'number',
      itemTitle: 'string',
      operateStatus: 'string',
      operateType: 'string',
      operateUserId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      storeId: 'string',
      toDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  userLogs?: DescribeUserLogResponseBodyUserLogs;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userLogs: 'UserLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userLogs: DescribeUserLogResponseBodyUserLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  users?: DescribeUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      users: DescribeUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompanyResponseBody extends $tea.Model {
  bid?: number;
  code?: string;
  companyId?: string;
  companyType?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  ownerId?: number;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      code: 'Code',
      companyId: 'CompanyId',
      companyType: 'CompanyType',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      code: 'string',
      companyId: 'string',
      companyType: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      ownerId: 'number',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompanyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCompanyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCompanyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      user: GetUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MapPlanogramRailRequest extends $tea.Model {
  layer?: string;
  railCode?: string;
  shelf?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      layer: 'Layer',
      railCode: 'RailCode',
      shelf: 'Shelf',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer: 'string',
      railCode: 'string',
      shelf: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MapPlanogramRailResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MapPlanogramRailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MapPlanogramRailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MapPlanogramRailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTaobaoItemRequest extends $tea.Model {
  outerId?: string;
  skuId?: string;
  storeId?: string;
  taobaoItemId?: string;
  static names(): { [key: string]: string } {
    return {
      outerId: 'OuterId',
      skuId: 'SkuId',
      storeId: 'StoreId',
      taobaoItemId: 'TaobaoItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerId: 'string',
      skuId: 'string',
      storeId: 'string',
      taobaoItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTaobaoItemResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshTaobaoItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshTaobaoItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshTaobaoItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignUserRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignUserResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnassignUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnassignUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEslDeviceRequest extends $tea.Model {
  eslBarCode?: string;
  itemBarCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      itemBarCode: 'ItemBarCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      itemBarCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEslDeviceResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEslDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindEslDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindEslDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEslDeviceShelfRequest extends $tea.Model {
  eslBarCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEslDeviceShelfResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEslDeviceShelfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindEslDeviceShelfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindEslDeviceShelfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmapPlanogramRailRequest extends $tea.Model {
  railCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      railCode: 'RailCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      railCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmapPlanogramRailResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnmapPlanogramRailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnmapPlanogramRailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnmapPlanogramRailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEslDeviceLightRequest extends $tea.Model {
  eslBarCode?: string;
  frequency?: string;
  itemBarCode?: string;
  ledColor?: string;
  lightUpTime?: number;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      frequency: 'Frequency',
      itemBarCode: 'ItemBarCode',
      ledColor: 'LedColor',
      lightUpTime: 'LightUpTime',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      frequency: 'string',
      itemBarCode: 'string',
      ledColor: 'string',
      lightUpTime: 'number',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEslDeviceLightResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  failCount?: number;
  failEslBarCodes?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      failCount: 'FailCount',
      failEslBarCodes: 'FailEslBarCodes',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      failCount: 'number',
      failEslBarCodes: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEslDeviceLightResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEslDeviceLightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEslDeviceLightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoreRequest extends $tea.Model {
  brand?: string;
  comments?: string;
  groups?: string;
  outId?: string;
  phone?: string;
  storeId?: string;
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      comments: 'Comments',
      groups: 'Groups',
      outId: 'OutId',
      phone: 'Phone',
      storeId: 'StoreId',
      storeName: 'StoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      comments: 'string',
      groups: 'string',
      outId: 'string',
      phone: 'string',
      storeId: 'string',
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoreResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsRequestItemInfo extends $tea.Model {
  actionPrice?: number;
  bePromotion?: boolean;
  beSourceCode?: boolean;
  brandName?: string;
  categoryName?: string;
  companyId?: string;
  customizeFeatureA?: string;
  customizeFeatureB?: string;
  customizeFeatureC?: string;
  customizeFeatureD?: string;
  customizeFeatureE?: string;
  customizeFeatureF?: string;
  customizeFeatureG?: string;
  customizeFeatureH?: string;
  customizeFeatureI?: string;
  customizeFeatureJ?: string;
  energyEfficiency?: string;
  extraAttribute?: string;
  forestFirstId?: string;
  forestSecondId?: string;
  itemBarCode?: string;
  itemId?: number;
  itemInfoIndex?: number;
  itemQrCode?: string;
  itemShortTitle?: string;
  itemTitle?: string;
  memberPrice?: number;
  modelNumber?: string;
  optionGroups?: string;
  originalPrice?: number;
  priceUnit?: string;
  productionPlace?: string;
  promotionEnd?: string;
  promotionReason?: string;
  promotionStart?: string;
  promotionText?: string;
  rank?: string;
  saleSpec?: string;
  skuId?: string;
  sourceCode?: string;
  storeId?: string;
  suggestPrice?: number;
  static names(): { [key: string]: string } {
    return {
      actionPrice: 'ActionPrice',
      bePromotion: 'BePromotion',
      beSourceCode: 'BeSourceCode',
      brandName: 'BrandName',
      categoryName: 'CategoryName',
      companyId: 'CompanyId',
      customizeFeatureA: 'CustomizeFeatureA',
      customizeFeatureB: 'CustomizeFeatureB',
      customizeFeatureC: 'CustomizeFeatureC',
      customizeFeatureD: 'CustomizeFeatureD',
      customizeFeatureE: 'CustomizeFeatureE',
      customizeFeatureF: 'CustomizeFeatureF',
      customizeFeatureG: 'CustomizeFeatureG',
      customizeFeatureH: 'CustomizeFeatureH',
      customizeFeatureI: 'CustomizeFeatureI',
      customizeFeatureJ: 'CustomizeFeatureJ',
      energyEfficiency: 'EnergyEfficiency',
      extraAttribute: 'ExtraAttribute',
      forestFirstId: 'ForestFirstId',
      forestSecondId: 'ForestSecondId',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemInfoIndex: 'ItemInfoIndex',
      itemQrCode: 'ItemQrCode',
      itemShortTitle: 'ItemShortTitle',
      itemTitle: 'ItemTitle',
      memberPrice: 'MemberPrice',
      modelNumber: 'ModelNumber',
      optionGroups: 'OptionGroups',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      productionPlace: 'ProductionPlace',
      promotionEnd: 'PromotionEnd',
      promotionReason: 'PromotionReason',
      promotionStart: 'PromotionStart',
      promotionText: 'PromotionText',
      rank: 'Rank',
      saleSpec: 'SaleSpec',
      skuId: 'SkuId',
      sourceCode: 'SourceCode',
      storeId: 'StoreId',
      suggestPrice: 'SuggestPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPrice: 'number',
      bePromotion: 'boolean',
      beSourceCode: 'boolean',
      brandName: 'string',
      categoryName: 'string',
      companyId: 'string',
      customizeFeatureA: 'string',
      customizeFeatureB: 'string',
      customizeFeatureC: 'string',
      customizeFeatureD: 'string',
      customizeFeatureE: 'string',
      customizeFeatureF: 'string',
      customizeFeatureG: 'string',
      customizeFeatureH: 'string',
      customizeFeatureI: 'string',
      customizeFeatureJ: 'string',
      energyEfficiency: 'string',
      extraAttribute: 'string',
      forestFirstId: 'string',
      forestSecondId: 'string',
      itemBarCode: 'string',
      itemId: 'number',
      itemInfoIndex: 'number',
      itemQrCode: 'string',
      itemShortTitle: 'string',
      itemTitle: 'string',
      memberPrice: 'number',
      modelNumber: 'string',
      optionGroups: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      productionPlace: 'string',
      promotionEnd: 'string',
      promotionReason: 'string',
      promotionStart: 'string',
      promotionText: 'string',
      rank: 'string',
      saleSpec: 'string',
      skuId: 'string',
      sourceCode: 'string',
      storeId: 'string',
      suggestPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsResponseBodyBatchResultsBatchResult extends $tea.Model {
  errorCode?: string;
  index?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      index: 'Index',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      index: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsResponseBodyBatchResults extends $tea.Model {
  batchResult?: BatchInsertItemsResponseBodyBatchResultsBatchResult[];
  static names(): { [key: string]: string } {
    return {
      batchResult: 'BatchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResult: { 'type': 'array', 'itemType': BatchInsertItemsResponseBodyBatchResultsBatchResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarmsAlarmInfo extends $tea.Model {
  alarmId?: string;
  alarmStatus?: string;
  alarmTime?: string;
  alarmType?: string;
  companyId?: string;
  dealTime?: string;
  dealUserId?: number;
  deviceBarCode?: string;
  deviceMac?: string;
  deviceType?: string;
  errorType?: string;
  itemBarCode?: string;
  itemTitle?: string;
  model?: string;
  storeId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmStatus: 'AlarmStatus',
      alarmTime: 'AlarmTime',
      alarmType: 'AlarmType',
      companyId: 'CompanyId',
      dealTime: 'DealTime',
      dealUserId: 'DealUserId',
      deviceBarCode: 'DeviceBarCode',
      deviceMac: 'DeviceMac',
      deviceType: 'DeviceType',
      errorType: 'ErrorType',
      itemBarCode: 'ItemBarCode',
      itemTitle: 'ItemTitle',
      model: 'Model',
      storeId: 'StoreId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmStatus: 'string',
      alarmTime: 'string',
      alarmType: 'string',
      companyId: 'string',
      dealTime: 'string',
      dealUserId: 'number',
      deviceBarCode: 'string',
      deviceMac: 'string',
      deviceType: 'string',
      errorType: 'string',
      itemBarCode: 'string',
      itemTitle: 'string',
      model: 'string',
      storeId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmsResponseBodyAlarms extends $tea.Model {
  alarmInfo?: DescribeAlarmsResponseBodyAlarmsAlarmInfo[];
  static names(): { [key: string]: string } {
    return {
      alarmInfo: 'AlarmInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmInfo: { 'type': 'array', 'itemType': DescribeAlarmsResponseBodyAlarmsAlarmInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApDevicesResponseBodyApDevicesApInfo extends $tea.Model {
  isActivate?: boolean;
  mac?: string;
  model?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      isActivate: 'IsActivate',
      mac: 'Mac',
      model: 'Model',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActivate: 'boolean',
      mac: 'string',
      model: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApDevicesResponseBodyApDevices extends $tea.Model {
  apInfo?: DescribeApDevicesResponseBodyApDevicesApInfo[];
  static names(): { [key: string]: string } {
    return {
      apInfo: 'ApInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apInfo: { 'type': 'array', 'itemType': DescribeApDevicesResponseBodyApDevicesApInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesResponseBodyEslDevicesEslDeviceInfo extends $tea.Model {
  batteryLevel?: number;
  beBind?: boolean;
  companyId?: string;
  connectAp?: string;
  eslBarCode?: string;
  eslStatus?: string;
  itemActionPrice?: number;
  itemBarCode?: string;
  itemId?: number;
  itemPriceUnit?: string;
  itemTitle?: string;
  lastCommunicateTime?: string;
  mac?: string;
  model?: string;
  positionCode?: string;
  screenHeight?: number;
  screenWidth?: number;
  shelfCode?: string;
  storeId?: string;
  type?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      batteryLevel: 'BatteryLevel',
      beBind: 'BeBind',
      companyId: 'CompanyId',
      connectAp: 'ConnectAp',
      eslBarCode: 'EslBarCode',
      eslStatus: 'EslStatus',
      itemActionPrice: 'ItemActionPrice',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemPriceUnit: 'ItemPriceUnit',
      itemTitle: 'ItemTitle',
      lastCommunicateTime: 'LastCommunicateTime',
      mac: 'Mac',
      model: 'Model',
      positionCode: 'PositionCode',
      screenHeight: 'ScreenHeight',
      screenWidth: 'ScreenWidth',
      shelfCode: 'ShelfCode',
      storeId: 'StoreId',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batteryLevel: 'number',
      beBind: 'boolean',
      companyId: 'string',
      connectAp: 'string',
      eslBarCode: 'string',
      eslStatus: 'string',
      itemActionPrice: 'number',
      itemBarCode: 'string',
      itemId: 'number',
      itemPriceUnit: 'string',
      itemTitle: 'string',
      lastCommunicateTime: 'string',
      mac: 'string',
      model: 'string',
      positionCode: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
      shelfCode: 'string',
      storeId: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesResponseBodyEslDevices extends $tea.Model {
  eslDeviceInfo?: DescribeEslDevicesResponseBodyEslDevicesEslDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      eslDeviceInfo: 'EslDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslDeviceInfo: { 'type': 'array', 'itemType': DescribeEslDevicesResponseBodyEslDevicesEslDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsResponseBodyItemsItemInfo extends $tea.Model {
  actionPrice?: number;
  bePromotion?: boolean;
  beSourceCode?: boolean;
  brandName?: string;
  categoryName?: string;
  companyId?: string;
  customizeFeatureA?: string;
  customizeFeatureB?: string;
  customizeFeatureC?: string;
  customizeFeatureD?: string;
  customizeFeatureE?: string;
  customizeFeatureF?: string;
  customizeFeatureG?: string;
  customizeFeatureH?: string;
  customizeFeatureI?: string;
  customizeFeatureJ?: string;
  energyEfficiency?: string;
  extraAttribute?: string;
  forestFirstId?: string;
  forestSecondId?: string;
  itemBarCode?: string;
  itemId?: number;
  itemInfoIndex?: number;
  itemQrCode?: string;
  itemShortTitle?: string;
  itemTitle?: string;
  memberPrice?: number;
  modelNumber?: string;
  optionGroups?: string;
  originalPrice?: number;
  priceUnit?: string;
  productionPlace?: string;
  promotionEnd?: string;
  promotionReason?: string;
  promotionStart?: string;
  promotionText?: string;
  rank?: string;
  saleSpec?: string;
  skuId?: string;
  sourceCode?: string;
  storeId?: string;
  suggestPrice?: number;
  static names(): { [key: string]: string } {
    return {
      actionPrice: 'ActionPrice',
      bePromotion: 'BePromotion',
      beSourceCode: 'BeSourceCode',
      brandName: 'BrandName',
      categoryName: 'CategoryName',
      companyId: 'CompanyId',
      customizeFeatureA: 'CustomizeFeatureA',
      customizeFeatureB: 'CustomizeFeatureB',
      customizeFeatureC: 'CustomizeFeatureC',
      customizeFeatureD: 'CustomizeFeatureD',
      customizeFeatureE: 'CustomizeFeatureE',
      customizeFeatureF: 'CustomizeFeatureF',
      customizeFeatureG: 'CustomizeFeatureG',
      customizeFeatureH: 'CustomizeFeatureH',
      customizeFeatureI: 'CustomizeFeatureI',
      customizeFeatureJ: 'CustomizeFeatureJ',
      energyEfficiency: 'EnergyEfficiency',
      extraAttribute: 'ExtraAttribute',
      forestFirstId: 'ForestFirstId',
      forestSecondId: 'ForestSecondId',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemInfoIndex: 'ItemInfoIndex',
      itemQrCode: 'ItemQrCode',
      itemShortTitle: 'ItemShortTitle',
      itemTitle: 'ItemTitle',
      memberPrice: 'MemberPrice',
      modelNumber: 'ModelNumber',
      optionGroups: 'OptionGroups',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      productionPlace: 'ProductionPlace',
      promotionEnd: 'PromotionEnd',
      promotionReason: 'PromotionReason',
      promotionStart: 'PromotionStart',
      promotionText: 'PromotionText',
      rank: 'Rank',
      saleSpec: 'SaleSpec',
      skuId: 'SkuId',
      sourceCode: 'SourceCode',
      storeId: 'StoreId',
      suggestPrice: 'SuggestPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPrice: 'number',
      bePromotion: 'boolean',
      beSourceCode: 'boolean',
      brandName: 'string',
      categoryName: 'string',
      companyId: 'string',
      customizeFeatureA: 'string',
      customizeFeatureB: 'string',
      customizeFeatureC: 'string',
      customizeFeatureD: 'string',
      customizeFeatureE: 'string',
      customizeFeatureF: 'string',
      customizeFeatureG: 'string',
      customizeFeatureH: 'string',
      customizeFeatureI: 'string',
      customizeFeatureJ: 'string',
      energyEfficiency: 'string',
      extraAttribute: 'string',
      forestFirstId: 'string',
      forestSecondId: 'string',
      itemBarCode: 'string',
      itemId: 'number',
      itemInfoIndex: 'number',
      itemQrCode: 'string',
      itemShortTitle: 'string',
      itemTitle: 'string',
      memberPrice: 'number',
      modelNumber: 'string',
      optionGroups: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      productionPlace: 'string',
      promotionEnd: 'string',
      promotionReason: 'string',
      promotionStart: 'string',
      promotionText: 'string',
      rank: 'string',
      saleSpec: 'string',
      skuId: 'string',
      sourceCode: 'string',
      storeId: 'string',
      suggestPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsResponseBodyItems extends $tea.Model {
  itemInfo?: DescribeItemsResponseBodyItemsItemInfo[];
  static names(): { [key: string]: string } {
    return {
      itemInfo: 'ItemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemInfo: { 'type': 'array', 'itemType': DescribeItemsResponseBodyItemsItemInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogisticsResponseBodyLogisticsLogisticsInfo extends $tea.Model {
  acceptStatus?: boolean;
  apMacList?: string;
  description?: string;
  eslMacList?: string;
  hasSend?: string;
  logisticsDocuments?: string;
  orderId?: string;
  poNumber?: string;
  prNumber?: string;
  static names(): { [key: string]: string } {
    return {
      acceptStatus: 'AcceptStatus',
      apMacList: 'ApMacList',
      description: 'Description',
      eslMacList: 'EslMacList',
      hasSend: 'HasSend',
      logisticsDocuments: 'LogisticsDocuments',
      orderId: 'OrderId',
      poNumber: 'PoNumber',
      prNumber: 'PrNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptStatus: 'boolean',
      apMacList: 'string',
      description: 'string',
      eslMacList: 'string',
      hasSend: 'string',
      logisticsDocuments: 'string',
      orderId: 'string',
      poNumber: 'string',
      prNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogisticsResponseBodyLogistics extends $tea.Model {
  logisticsInfo?: DescribeLogisticsResponseBodyLogisticsLogisticsInfo[];
  static names(): { [key: string]: string } {
    return {
      logisticsInfo: 'LogisticsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsInfo: { 'type': 'array', 'itemType': DescribeLogisticsResponseBodyLogisticsLogisticsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayOrdersResponseBodyPayOrdersPayOrderInfo extends $tea.Model {
  commodityCode?: string;
  commodityName?: string;
  detailName?: string;
  gmtCreate?: string;
  gmtPay?: string;
  isAccepted?: boolean;
  orderId?: string;
  orderStatus?: string;
  orderType?: string;
  originalAmount?: number;
  payAmount?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      detailName: 'DetailName',
      gmtCreate: 'GmtCreate',
      gmtPay: 'GmtPay',
      isAccepted: 'IsAccepted',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalAmount: 'OriginalAmount',
      payAmount: 'PayAmount',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      detailName: 'string',
      gmtCreate: 'string',
      gmtPay: 'string',
      isAccepted: 'boolean',
      orderId: 'string',
      orderStatus: 'string',
      orderType: 'string',
      originalAmount: 'number',
      payAmount: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePayOrdersResponseBodyPayOrders extends $tea.Model {
  payOrderInfo?: DescribePayOrdersResponseBodyPayOrdersPayOrderInfo[];
  static names(): { [key: string]: string } {
    return {
      payOrderInfo: 'PayOrderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payOrderInfo: { 'type': 'array', 'itemType': DescribePayOrdersResponseBodyPayOrdersPayOrderInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlanogramRailsResponseBodyPlanogramRailInfos extends $tea.Model {
  gapUnit?: number;
  layer?: string;
  railCode?: string;
  shelf?: string;
  static names(): { [key: string]: string } {
    return {
      gapUnit: 'GapUnit',
      layer: 'Layer',
      railCode: 'RailCode',
      shelf: 'Shelf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gapUnit: 'number',
      layer: 'string',
      railCode: 'string',
      shelf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresResponseBodyStoresStoreInfo extends $tea.Model {
  brand?: string;
  comments?: string;
  companyId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groups?: string;
  level?: string;
  outId?: string;
  parentId?: string;
  phone?: string;
  storeId?: string;
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      comments: 'Comments',
      companyId: 'CompanyId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groups: 'Groups',
      level: 'Level',
      outId: 'OutId',
      parentId: 'ParentId',
      phone: 'Phone',
      storeId: 'StoreId',
      storeName: 'StoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      comments: 'string',
      companyId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groups: 'string',
      level: 'string',
      outId: 'string',
      parentId: 'string',
      phone: 'string',
      storeId: 'string',
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresResponseBodyStores extends $tea.Model {
  storeInfo?: DescribeStoresResponseBodyStoresStoreInfo[];
  static names(): { [key: string]: string } {
    return {
      storeInfo: 'StoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeInfo: { 'type': 'array', 'itemType': DescribeStoresResponseBodyStoresStoreInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogResponseBodyUserLogsUserLogInfo extends $tea.Model {
  eslBarCode?: string;
  itemActionPrice?: number;
  itemBarCode?: string;
  itemId?: number;
  itemTitle?: string;
  mac?: string;
  operateStatus?: string;
  operateTime?: string;
  operateType?: string;
  operateUserId?: number;
  shelfCode?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      itemActionPrice: 'ItemActionPrice',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      mac: 'Mac',
      operateStatus: 'OperateStatus',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
      operateUserId: 'OperateUserId',
      shelfCode: 'ShelfCode',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      itemActionPrice: 'number',
      itemBarCode: 'string',
      itemId: 'number',
      itemTitle: 'string',
      mac: 'string',
      operateStatus: 'string',
      operateTime: 'string',
      operateType: 'string',
      operateUserId: 'number',
      shelfCode: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogResponseBodyUserLogs extends $tea.Model {
  userLogInfo?: DescribeUserLogResponseBodyUserLogsUserLogInfo[];
  static names(): { [key: string]: string } {
    return {
      userLogInfo: 'UserLogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userLogInfo: { 'type': 'array', 'itemType': DescribeUserLogResponseBodyUserLogsUserLogInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersUserInfo extends $tea.Model {
  stores?: string;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      stores: 'Stores',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stores: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsers extends $tea.Model {
  userInfo?: DescribeUsersResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersUserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  stores?: string;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      stores: 'Stores',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stores: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "cloudesl.aliyuncs.com",
      'ap-northeast-2-pop': "cloudesl.aliyuncs.com",
      'ap-south-1': "cloudesl.aliyuncs.com",
      'ap-southeast-1': "cloudesl.aliyuncs.com",
      'ap-southeast-2': "cloudesl.aliyuncs.com",
      'ap-southeast-3': "cloudesl.aliyuncs.com",
      'ap-southeast-5': "cloudesl.aliyuncs.com",
      'cn-beijing': "cloudesl.aliyuncs.com",
      'cn-beijing-finance-1': "cloudesl.aliyuncs.com",
      'cn-beijing-finance-pop': "cloudesl.aliyuncs.com",
      'cn-beijing-gov-1': "cloudesl.aliyuncs.com",
      'cn-beijing-nu16-b01': "cloudesl.aliyuncs.com",
      'cn-chengdu': "cloudesl.aliyuncs.com",
      'cn-edge-1': "cloudesl.aliyuncs.com",
      'cn-fujian': "cloudesl.aliyuncs.com",
      'cn-haidian-cm12-c01': "cloudesl.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cloudesl.aliyuncs.com",
      'cn-hangzhou-finance': "cloudesl.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cloudesl.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cloudesl.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cloudesl.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cloudesl.aliyuncs.com",
      'cn-hangzhou-test-306': "cloudesl.aliyuncs.com",
      'cn-hongkong': "cloudesl.aliyuncs.com",
      'cn-hongkong-finance-pop': "cloudesl.aliyuncs.com",
      'cn-huhehaote': "cloudesl.aliyuncs.com",
      'cn-north-2-gov-1': "cloudesl.aliyuncs.com",
      'cn-qingdao': "cloudesl.aliyuncs.com",
      'cn-qingdao-nebula': "cloudesl.aliyuncs.com",
      'cn-shanghai': "cloudesl.aliyuncs.com",
      'cn-shanghai-et15-b01': "cloudesl.aliyuncs.com",
      'cn-shanghai-et2-b01': "cloudesl.aliyuncs.com",
      'cn-shanghai-finance-1': "cloudesl.aliyuncs.com",
      'cn-shanghai-inner': "cloudesl.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cloudesl.aliyuncs.com",
      'cn-shenzhen': "cloudesl.aliyuncs.com",
      'cn-shenzhen-finance-1': "cloudesl.aliyuncs.com",
      'cn-shenzhen-inner': "cloudesl.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cloudesl.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cloudesl.aliyuncs.com",
      'cn-wuhan': "cloudesl.aliyuncs.com",
      'cn-yushanfang': "cloudesl.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cloudesl.aliyuncs.com",
      'cn-zhangjiakou': "cloudesl.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cloudesl.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cloudesl.aliyuncs.com",
      'eu-central-1': "cloudesl.aliyuncs.com",
      'eu-west-1': "cloudesl.aliyuncs.com",
      'eu-west-1-oxs': "cloudesl.aliyuncs.com",
      'me-east-1': "cloudesl.aliyuncs.com",
      'rus-west-1-pop': "cloudesl.aliyuncs.com",
      'us-east-1': "cloudesl.aliyuncs.com",
      'us-west-1': "cloudesl.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudesl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request ActivateApDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ActivateApDeviceResponse
   */
  async activateApDeviceWithOptions(request: ActivateApDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ActivateApDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActivateApDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateApDeviceResponse>(await this.callApi(params, req, runtime), new ActivateApDeviceResponse({}));
  }

  /**
   * @param request ActivateApDeviceRequest
   * @return ActivateApDeviceResponse
   */
  async activateApDevice(request: ActivateApDeviceRequest): Promise<ActivateApDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateApDeviceWithOptions(request, runtime);
  }

  /**
   * @param request AddApDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddApDeviceResponse
   */
  async addApDeviceWithOptions(request: AddApDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddApDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddApDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddApDeviceResponse>(await this.callApi(params, req, runtime), new AddApDeviceResponse({}));
  }

  /**
   * @param request AddApDeviceRequest
   * @return AddApDeviceResponse
   */
  async addApDevice(request: AddApDeviceRequest): Promise<AddApDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addApDeviceWithOptions(request, runtime);
  }

  /**
   * @param request AddEslDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddEslDeviceResponse
   */
  async addEslDeviceWithOptions(request: AddEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddEslDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddEslDeviceResponse>(await this.callApi(params, req, runtime), new AddEslDeviceResponse({}));
  }

  /**
   * @param request AddEslDeviceRequest
   * @return AddEslDeviceResponse
   */
  async addEslDevice(request: AddEslDeviceRequest): Promise<AddEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEslDeviceWithOptions(request, runtime);
  }

  /**
   * @param request AddUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddUserResponse
   */
  async addUserWithOptions(request: AddUserRequest, runtime: $Util.RuntimeOptions): Promise<AddUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddUser",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserResponse>(await this.callApi(params, req, runtime), new AddUserResponse({}));
  }

  /**
   * @param request AddUserRequest
   * @return AddUserResponse
   */
  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  /**
   * @param request AssignUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AssignUserResponse
   */
  async assignUserWithOptions(request: AssignUserRequest, runtime: $Util.RuntimeOptions): Promise<AssignUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.stores)) {
      body["Stores"] = request.stores;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssignUser",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignUserResponse>(await this.callApi(params, req, runtime), new AssignUserResponse({}));
  }

  /**
   * @param request AssignUserRequest
   * @return AssignUserResponse
   */
  async assignUser(request: AssignUserRequest): Promise<AssignUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignUserWithOptions(request, runtime);
  }

  /**
   * @param request BatchInsertItemsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchInsertItemsResponse
   */
  async batchInsertItemsWithOptions(request: BatchInsertItemsRequest, runtime: $Util.RuntimeOptions): Promise<BatchInsertItemsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemInfo)) {
      body["ItemInfo"] = request.itemInfo;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchInsertItems",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchInsertItemsResponse>(await this.callApi(params, req, runtime), new BatchInsertItemsResponse({}));
  }

  /**
   * @param request BatchInsertItemsRequest
   * @return BatchInsertItemsResponse
   */
  async batchInsertItems(request: BatchInsertItemsRequest): Promise<BatchInsertItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchInsertItemsWithOptions(request, runtime);
  }

  /**
   * @param request BindEslDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindEslDeviceResponse
   */
  async bindEslDeviceWithOptions(request: BindEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindEslDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindEslDeviceResponse>(await this.callApi(params, req, runtime), new BindEslDeviceResponse({}));
  }

  /**
   * @param request BindEslDeviceRequest
   * @return BindEslDeviceResponse
   */
  async bindEslDevice(request: BindEslDeviceRequest): Promise<BindEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindEslDeviceWithOptions(request, runtime);
  }

  /**
   * @param request BindEslDeviceShelfRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindEslDeviceShelfResponse
   */
  async bindEslDeviceShelfWithOptions(request: BindEslDeviceShelfRequest, runtime: $Util.RuntimeOptions): Promise<BindEslDeviceShelfResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.shelfCode)) {
      body["ShelfCode"] = request.shelfCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindEslDeviceShelf",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindEslDeviceShelfResponse>(await this.callApi(params, req, runtime), new BindEslDeviceShelfResponse({}));
  }

  /**
   * @param request BindEslDeviceShelfRequest
   * @return BindEslDeviceShelfResponse
   */
  async bindEslDeviceShelf(request: BindEslDeviceShelfRequest): Promise<BindEslDeviceShelfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindEslDeviceShelfWithOptions(request, runtime);
  }

  /**
   * @param request ConfirmLogisticsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConfirmLogisticsResponse
   */
  async confirmLogisticsWithOptions(request: ConfirmLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmLogisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logisticsDocuments)) {
      body["LogisticsDocuments"] = request.logisticsDocuments;
    }

    if (!Util.isUnset(request.poNumber)) {
      body["PoNumber"] = request.poNumber;
    }

    if (!Util.isUnset(request.prNumber)) {
      body["PrNumber"] = request.prNumber;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmLogistics",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmLogisticsResponse>(await this.callApi(params, req, runtime), new ConfirmLogisticsResponse({}));
  }

  /**
   * @param request ConfirmLogisticsRequest
   * @return ConfirmLogisticsResponse
   */
  async confirmLogistics(request: ConfirmLogisticsRequest): Promise<ConfirmLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmLogisticsWithOptions(request, runtime);
  }

  /**
   * @param request CreateStoreRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateStoreResponse
   */
  async createStoreWithOptions(request: CreateStoreRequest, runtime: $Util.RuntimeOptions): Promise<CreateStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!Util.isUnset(request.comments)) {
      body["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.companyId)) {
      body["CompanyId"] = request.companyId;
    }

    if (!Util.isUnset(request.groups)) {
      body["Groups"] = request.groups;
    }

    if (!Util.isUnset(request.outId)) {
      body["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.storeName)) {
      body["StoreName"] = request.storeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStore",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStoreResponse>(await this.callApi(params, req, runtime), new CreateStoreResponse({}));
  }

  /**
   * @param request CreateStoreRequest
   * @return CreateStoreResponse
   */
  async createStore(request: CreateStoreRequest): Promise<CreateStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStoreWithOptions(request, runtime);
  }

  /**
   * @param request DeleteApDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApDeviceResponse
   */
  async deleteApDeviceWithOptions(request: DeleteApDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApDeviceResponse>(await this.callApi(params, req, runtime), new DeleteApDeviceResponse({}));
  }

  /**
   * @param request DeleteApDeviceRequest
   * @return DeleteApDeviceResponse
   */
  async deleteApDevice(request: DeleteApDeviceRequest): Promise<DeleteApDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApDeviceWithOptions(request, runtime);
  }

  /**
   * @param request DeleteEslDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEslDeviceResponse
   */
  async deleteEslDeviceWithOptions(request: DeleteEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEslDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEslDeviceResponse>(await this.callApi(params, req, runtime), new DeleteEslDeviceResponse({}));
  }

  /**
   * @param request DeleteEslDeviceRequest
   * @return DeleteEslDeviceResponse
   */
  async deleteEslDevice(request: DeleteEslDeviceRequest): Promise<DeleteEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEslDeviceWithOptions(request, runtime);
  }

  /**
   * @param request DeleteItemRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteItemResponse
   */
  async deleteItemWithOptions(request: DeleteItemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteItem",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteItemResponse>(await this.callApi(params, req, runtime), new DeleteItemResponse({}));
  }

  /**
   * @param request DeleteItemRequest
   * @return DeleteItemResponse
   */
  async deleteItem(request: DeleteItemRequest): Promise<DeleteItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteItemWithOptions(request, runtime);
  }

  /**
   * @param request DeleteItemBySkuIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteItemBySkuIdResponse
   */
  async deleteItemBySkuIdWithOptions(request: DeleteItemBySkuIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteItemBySkuIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.skuId)) {
      body["SkuId"] = request.skuId;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteItemBySkuId",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteItemBySkuIdResponse>(await this.callApi(params, req, runtime), new DeleteItemBySkuIdResponse({}));
  }

  /**
   * @param request DeleteItemBySkuIdRequest
   * @return DeleteItemBySkuIdResponse
   */
  async deleteItemBySkuId(request: DeleteItemBySkuIdRequest): Promise<DeleteItemBySkuIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteItemBySkuIdWithOptions(request, runtime);
  }

  /**
   * @param request DeleteStoreRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteStoreResponse
   */
  async deleteStoreWithOptions(request: DeleteStoreRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStore",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStoreResponse>(await this.callApi(params, req, runtime), new DeleteStoreResponse({}));
  }

  /**
   * @param request DeleteStoreRequest
   * @return DeleteStoreResponse
   */
  async deleteStore(request: DeleteStoreRequest): Promise<DeleteStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStoreWithOptions(request, runtime);
  }

  /**
   * @param request DeleteUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * @param request DeleteUserRequest
   * @return DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * @param request DescribeAlarmsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAlarmsResponse
   */
  async describeAlarmsWithOptions(request: DescribeAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmId)) {
      body["AlarmId"] = request.alarmId;
    }

    if (!Util.isUnset(request.alarmStatus)) {
      body["AlarmStatus"] = request.alarmStatus;
    }

    if (!Util.isUnset(request.alarmType)) {
      body["AlarmType"] = request.alarmType;
    }

    if (!Util.isUnset(request.errorType)) {
      body["ErrorType"] = request.errorType;
    }

    if (!Util.isUnset(request.fromAlarmTime)) {
      body["FromAlarmTime"] = request.fromAlarmTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.toAlarmTime)) {
      body["ToAlarmTime"] = request.toAlarmTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlarms",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlarmsResponse>(await this.callApi(params, req, runtime), new DescribeAlarmsResponse({}));
  }

  /**
   * @param request DescribeAlarmsRequest
   * @return DescribeAlarmsResponse
   */
  async describeAlarms(request: DescribeAlarmsRequest): Promise<DescribeAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeApDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApDevicesResponse
   */
  async describeApDevicesWithOptions(request: DescribeApDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activated)) {
      body["Activated"] = request.activated;
    }

    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApDevices",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApDevicesResponse>(await this.callApi(params, req, runtime), new DescribeApDevicesResponse({}));
  }

  /**
   * @param request DescribeApDevicesRequest
   * @return DescribeApDevicesResponse
   */
  async describeApDevices(request: DescribeApDevicesRequest): Promise<DescribeApDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeEslDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEslDevicesResponse
   */
  async describeEslDevicesWithOptions(request: DescribeEslDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEslDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beBind)) {
      body["BeBind"] = request.beBind;
    }

    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.eslStatus)) {
      body["EslStatus"] = request.eslStatus;
    }

    if (!Util.isUnset(request.fromBatteryLevel)) {
      body["FromBatteryLevel"] = request.fromBatteryLevel;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.shelfCode)) {
      body["ShelfCode"] = request.shelfCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.toBatteryLevel)) {
      body["ToBatteryLevel"] = request.toBatteryLevel;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEslDevices",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEslDevicesResponse>(await this.callApi(params, req, runtime), new DescribeEslDevicesResponse({}));
  }

  /**
   * @param request DescribeEslDevicesRequest
   * @return DescribeEslDevicesResponse
   */
  async describeEslDevices(request: DescribeEslDevicesRequest): Promise<DescribeEslDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEslDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeItemsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeItemsResponse
   */
  async describeItemsWithOptions(request: DescribeItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeItemsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bePromotion)) {
      body["BePromotion"] = request.bePromotion;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemTitle)) {
      body["ItemTitle"] = request.itemTitle;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.skuId)) {
      body["SkuId"] = request.skuId;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeItems",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeItemsResponse>(await this.callApi(params, req, runtime), new DescribeItemsResponse({}));
  }

  /**
   * @param request DescribeItemsRequest
   * @return DescribeItemsResponse
   */
  async describeItems(request: DescribeItemsRequest): Promise<DescribeItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeItemsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeLogisticsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLogisticsResponse
   */
  async describeLogisticsWithOptions(request: DescribeLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogistics",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogisticsResponse>(await this.callApi(params, req, runtime), new DescribeLogisticsResponse({}));
  }

  /**
   * @param request DescribeLogisticsRequest
   * @return DescribeLogisticsResponse
   */
  async describeLogistics(request: DescribeLogisticsRequest): Promise<DescribeLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogisticsWithOptions(request, runtime);
  }

  /**
   * @param request DescribePayOrdersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePayOrdersResponse
   */
  async describePayOrdersWithOptions(request: DescribePayOrdersRequest, runtime: $Util.RuntimeOptions): Promise<DescribePayOrdersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fromDate)) {
      body["FromDate"] = request.fromDate;
    }

    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribePayOrders",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePayOrdersResponse>(await this.callApi(params, req, runtime), new DescribePayOrdersResponse({}));
  }

  /**
   * @param request DescribePayOrdersRequest
   * @return DescribePayOrdersResponse
   */
  async describePayOrders(request: DescribePayOrdersRequest): Promise<DescribePayOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePayOrdersWithOptions(request, runtime);
  }

  /**
   * @param request DescribePlanogramRailsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePlanogramRailsResponse
   */
  async describePlanogramRailsWithOptions(request: DescribePlanogramRailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePlanogramRailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.layer)) {
      body["Layer"] = request.layer;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.railCode)) {
      body["RailCode"] = request.railCode;
    }

    if (!Util.isUnset(request.shelf)) {
      body["Shelf"] = request.shelf;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribePlanogramRails",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePlanogramRailsResponse>(await this.callApi(params, req, runtime), new DescribePlanogramRailsResponse({}));
  }

  /**
   * @param request DescribePlanogramRailsRequest
   * @return DescribePlanogramRailsResponse
   */
  async describePlanogramRails(request: DescribePlanogramRailsRequest): Promise<DescribePlanogramRailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePlanogramRailsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeStoresRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeStoresResponse
   */
  async describeStoresWithOptions(request: DescribeStoresRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStoresResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!Util.isUnset(request.companyId)) {
      body["CompanyId"] = request.companyId;
    }

    if (!Util.isUnset(request.fromDate)) {
      body["FromDate"] = request.fromDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.storeName)) {
      body["StoreName"] = request.storeName;
    }

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStores",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStoresResponse>(await this.callApi(params, req, runtime), new DescribeStoresResponse({}));
  }

  /**
   * @param request DescribeStoresRequest
   * @return DescribeStoresResponse
   */
  async describeStores(request: DescribeStoresRequest): Promise<DescribeStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStoresWithOptions(request, runtime);
  }

  /**
   * @param request DescribeUserLogRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserLogResponse
   */
  async describeUserLogWithOptions(request: DescribeUserLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.fromDate)) {
      body["FromDate"] = request.fromDate;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemTitle)) {
      body["ItemTitle"] = request.itemTitle;
    }

    if (!Util.isUnset(request.operateStatus)) {
      body["OperateStatus"] = request.operateStatus;
    }

    if (!Util.isUnset(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.operateUserId)) {
      body["OperateUserId"] = request.operateUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      body["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserLog",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserLogResponse>(await this.callApi(params, req, runtime), new DescribeUserLogResponse({}));
  }

  /**
   * @param request DescribeUserLogRequest
   * @return DescribeUserLogResponse
   */
  async describeUserLog(request: DescribeUserLogRequest): Promise<DescribeUserLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserLogWithOptions(request, runtime);
  }

  /**
   * @param request DescribeUsersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUsersResponse
   */
  async describeUsersWithOptions(request: DescribeUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsers",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsersResponse>(await this.callApi(params, req, runtime), new DescribeUsersResponse({}));
  }

  /**
   * @param request DescribeUsersRequest
   * @return DescribeUsersResponse
   */
  async describeUsers(request: DescribeUsersRequest): Promise<DescribeUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersWithOptions(request, runtime);
  }

  /**
   * @param request GetCompanyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCompanyResponse
   */
  async getCompanyWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCompanyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCompany",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCompanyResponse>(await this.callApi(params, req, runtime), new GetCompanyResponse({}));
  }

  /**
   * @return GetCompanyResponse
   */
  async getCompany(): Promise<GetCompanyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCompanyWithOptions(runtime);
  }

  /**
   * @param request GetUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * @param request GetUserRequest
   * @return GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * @param request MapPlanogramRailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MapPlanogramRailResponse
   */
  async mapPlanogramRailWithOptions(request: MapPlanogramRailRequest, runtime: $Util.RuntimeOptions): Promise<MapPlanogramRailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.layer)) {
      body["Layer"] = request.layer;
    }

    if (!Util.isUnset(request.railCode)) {
      body["RailCode"] = request.railCode;
    }

    if (!Util.isUnset(request.shelf)) {
      body["Shelf"] = request.shelf;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MapPlanogramRail",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MapPlanogramRailResponse>(await this.callApi(params, req, runtime), new MapPlanogramRailResponse({}));
  }

  /**
   * @param request MapPlanogramRailRequest
   * @return MapPlanogramRailResponse
   */
  async mapPlanogramRail(request: MapPlanogramRailRequest): Promise<MapPlanogramRailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mapPlanogramRailWithOptions(request, runtime);
  }

  /**
   * @param request RefreshTaobaoItemRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RefreshTaobaoItemResponse
   */
  async refreshTaobaoItemWithOptions(request: RefreshTaobaoItemRequest, runtime: $Util.RuntimeOptions): Promise<RefreshTaobaoItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outerId)) {
      body["OuterId"] = request.outerId;
    }

    if (!Util.isUnset(request.skuId)) {
      body["SkuId"] = request.skuId;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.taobaoItemId)) {
      body["TaobaoItemId"] = request.taobaoItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefreshTaobaoItem",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshTaobaoItemResponse>(await this.callApi(params, req, runtime), new RefreshTaobaoItemResponse({}));
  }

  /**
   * @param request RefreshTaobaoItemRequest
   * @return RefreshTaobaoItemResponse
   */
  async refreshTaobaoItem(request: RefreshTaobaoItemRequest): Promise<RefreshTaobaoItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshTaobaoItemWithOptions(request, runtime);
  }

  /**
   * @param request UnassignUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnassignUserResponse
   */
  async unassignUserWithOptions(request: UnassignUserRequest, runtime: $Util.RuntimeOptions): Promise<UnassignUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnassignUser",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnassignUserResponse>(await this.callApi(params, req, runtime), new UnassignUserResponse({}));
  }

  /**
   * @param request UnassignUserRequest
   * @return UnassignUserResponse
   */
  async unassignUser(request: UnassignUserRequest): Promise<UnassignUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassignUserWithOptions(request, runtime);
  }

  /**
   * @param request UnbindEslDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindEslDeviceResponse
   */
  async unbindEslDeviceWithOptions(request: UnbindEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindEslDevice",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindEslDeviceResponse>(await this.callApi(params, req, runtime), new UnbindEslDeviceResponse({}));
  }

  /**
   * @param request UnbindEslDeviceRequest
   * @return UnbindEslDeviceResponse
   */
  async unbindEslDevice(request: UnbindEslDeviceRequest): Promise<UnbindEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindEslDeviceWithOptions(request, runtime);
  }

  /**
   * @param request UnbindEslDeviceShelfRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindEslDeviceShelfResponse
   */
  async unbindEslDeviceShelfWithOptions(request: UnbindEslDeviceShelfRequest, runtime: $Util.RuntimeOptions): Promise<UnbindEslDeviceShelfResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindEslDeviceShelf",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindEslDeviceShelfResponse>(await this.callApi(params, req, runtime), new UnbindEslDeviceShelfResponse({}));
  }

  /**
   * @param request UnbindEslDeviceShelfRequest
   * @return UnbindEslDeviceShelfResponse
   */
  async unbindEslDeviceShelf(request: UnbindEslDeviceShelfRequest): Promise<UnbindEslDeviceShelfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindEslDeviceShelfWithOptions(request, runtime);
  }

  /**
   * @param request UnmapPlanogramRailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnmapPlanogramRailResponse
   */
  async unmapPlanogramRailWithOptions(request: UnmapPlanogramRailRequest, runtime: $Util.RuntimeOptions): Promise<UnmapPlanogramRailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.railCode)) {
      body["RailCode"] = request.railCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnmapPlanogramRail",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnmapPlanogramRailResponse>(await this.callApi(params, req, runtime), new UnmapPlanogramRailResponse({}));
  }

  /**
   * @param request UnmapPlanogramRailRequest
   * @return UnmapPlanogramRailResponse
   */
  async unmapPlanogramRail(request: UnmapPlanogramRailRequest): Promise<UnmapPlanogramRailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unmapPlanogramRailWithOptions(request, runtime);
  }

  /**
   * @param request UpdateEslDeviceLightRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEslDeviceLightResponse
   */
  async updateEslDeviceLightWithOptions(request: UpdateEslDeviceLightRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEslDeviceLightResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.frequency)) {
      body["Frequency"] = request.frequency;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.ledColor)) {
      body["LedColor"] = request.ledColor;
    }

    if (!Util.isUnset(request.lightUpTime)) {
      body["LightUpTime"] = request.lightUpTime;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEslDeviceLight",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEslDeviceLightResponse>(await this.callApi(params, req, runtime), new UpdateEslDeviceLightResponse({}));
  }

  /**
   * @param request UpdateEslDeviceLightRequest
   * @return UpdateEslDeviceLightResponse
   */
  async updateEslDeviceLight(request: UpdateEslDeviceLightRequest): Promise<UpdateEslDeviceLightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEslDeviceLightWithOptions(request, runtime);
  }

  /**
   * @param request UpdateStoreRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateStoreResponse
   */
  async updateStoreWithOptions(request: UpdateStoreRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!Util.isUnset(request.comments)) {
      body["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.groups)) {
      body["Groups"] = request.groups;
    }

    if (!Util.isUnset(request.outId)) {
      body["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.storeName)) {
      body["StoreName"] = request.storeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStore",
      version: "2019-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStoreResponse>(await this.callApi(params, req, runtime), new UpdateStoreResponse({}));
  }

  /**
   * @param request UpdateStoreRequest
   * @return UpdateStoreResponse
   */
  async updateStore(request: UpdateStoreRequest): Promise<UpdateStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStoreWithOptions(request, runtime);
  }

}
