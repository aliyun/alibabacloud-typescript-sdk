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
  extraParams?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      extraParams: 'ExtraParams',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      extraParams: 'string',
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
  clientToken?: string;
  extraParams?: string;
  remark?: string;
  serialNumber?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      clientToken: 'ClientToken',
      extraParams: 'ExtraParams',
      remark: 'Remark',
      serialNumber: 'SerialNumber',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      clientToken: 'string',
      extraParams: 'string',
      remark: 'string',
      serialNumber: 'string',
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

export class AddCompanyTemplateRequest extends $tea.Model {
  deviceType?: string;
  eslSize?: string;
  extraParams?: string;
  groupId?: string;
  ifDefault?: boolean;
  ifMember?: boolean;
  ifOutOfInventory?: boolean;
  ifPromotion?: boolean;
  ifSourceCode?: boolean;
  layout?: number;
  scene?: string;
  templateName?: string;
  templateSceneId?: string;
  templateType?: string;
  templateVersion?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      eslSize: 'EslSize',
      extraParams: 'ExtraParams',
      groupId: 'GroupId',
      ifDefault: 'IfDefault',
      ifMember: 'IfMember',
      ifOutOfInventory: 'IfOutOfInventory',
      ifPromotion: 'IfPromotion',
      ifSourceCode: 'IfSourceCode',
      layout: 'Layout',
      scene: 'Scene',
      templateName: 'TemplateName',
      templateSceneId: 'TemplateSceneId',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      eslSize: 'string',
      extraParams: 'string',
      groupId: 'string',
      ifDefault: 'boolean',
      ifMember: 'boolean',
      ifOutOfInventory: 'boolean',
      ifPromotion: 'boolean',
      ifSourceCode: 'boolean',
      layout: 'number',
      scene: 'string',
      templateName: 'string',
      templateSceneId: 'string',
      templateType: 'string',
      templateVersion: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCompanyTemplateResponseBody extends $tea.Model {
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

export class AddCompanyTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCompanyTemplateResponseBody;
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
      body: AddCompanyTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserRequest extends $tea.Model {
  clientToken?: string;
  extraParams?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      extraParams: 'ExtraParams',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      extraParams: 'string',
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

export class ApplyCompanyTemplateVersionToStoresRequest extends $tea.Model {
  stores?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      stores: 'Stores',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stores: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCompanyTemplateVersionToStoresResponseBody extends $tea.Model {
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

export class ApplyCompanyTemplateVersionToStoresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyCompanyTemplateVersionToStoresResponseBody;
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
      body: ApplyCompanyTemplateVersionToStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignUserRequest extends $tea.Model {
  extraParams?: string;
  stores?: string;
  userId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      stores: 'Stores',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
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
  extraParams?: string;
  itemInfo?: BatchInsertItemsRequestItemInfo[];
  storeId?: string;
  syncByItemId?: boolean;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      itemInfo: 'ItemInfo',
      storeId: 'StoreId',
      syncByItemId: 'SyncByItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      itemInfo: { 'type': 'array', 'itemType': BatchInsertItemsRequestItemInfo },
      storeId: 'string',
      syncByItemId: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsResponseBody extends $tea.Model {
  batchResults?: BatchInsertItemsResponseBodyBatchResults[];
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
      batchResults: { 'type': 'array', 'itemType': BatchInsertItemsResponseBodyBatchResults },
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
  column?: string;
  containerId?: string;
  containerName?: string;
  eslBarCode?: string;
  extraParams?: string;
  itemBarCode?: string;
  layer?: number;
  layoutId?: string;
  layoutName?: string;
  shelf?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      eslBarCode: 'EslBarCode',
      extraParams: 'ExtraParams',
      itemBarCode: 'ItemBarCode',
      layer: 'Layer',
      layoutId: 'LayoutId',
      layoutName: 'LayoutName',
      shelf: 'Shelf',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      containerId: 'string',
      containerName: 'string',
      eslBarCode: 'string',
      extraParams: 'string',
      itemBarCode: 'string',
      layer: 'number',
      layoutId: 'string',
      layoutName: 'string',
      shelf: 'string',
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

export class CreateStoreRequest extends $tea.Model {
  autoUnbindDays?: number;
  autoUnbindOfflineEsl?: boolean;
  barCodeEncode?: number;
  clientToken?: string;
  extraParams?: string;
  parentId?: string;
  phone?: string;
  storeName?: string;
  timeZone?: string;
  userStoreCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoUnbindDays: 'AutoUnbindDays',
      autoUnbindOfflineEsl: 'AutoUnbindOfflineEsl',
      barCodeEncode: 'BarCodeEncode',
      clientToken: 'ClientToken',
      extraParams: 'ExtraParams',
      parentId: 'ParentId',
      phone: 'Phone',
      storeName: 'StoreName',
      timeZone: 'TimeZone',
      userStoreCode: 'UserStoreCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUnbindDays: 'number',
      autoUnbindOfflineEsl: 'boolean',
      barCodeEncode: 'number',
      clientToken: 'string',
      extraParams: 'string',
      parentId: 'string',
      phone: 'string',
      storeName: 'string',
      timeZone: 'string',
      userStoreCode: 'string',
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
  extraParams?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      extraParams: 'ExtraParams',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      extraParams: 'string',
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

export class DeleteCompanyTemplateRequest extends $tea.Model {
  extraParams?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompanyTemplateResponseBody extends $tea.Model {
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

export class DeleteCompanyTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCompanyTemplateResponseBody;
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
      body: DeleteCompanyTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemRequest extends $tea.Model {
  itemBarCode?: string;
  storeId?: string;
  unbindEslDevice?: boolean;
  static names(): { [key: string]: string } {
    return {
      itemBarCode: 'ItemBarCode',
      storeId: 'StoreId',
      unbindEslDevice: 'UnbindEslDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemBarCode: 'string',
      storeId: 'string',
      unbindEslDevice: 'boolean',
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

export class DeleteStoreRequest extends $tea.Model {
  extraParams?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
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
  extraParams?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
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

export class DescribeApDevicesRequest extends $tea.Model {
  apMac?: string;
  beActivate?: boolean;
  extraParams?: string;
  model?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: boolean;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      beActivate: 'BeActivate',
      extraParams: 'ExtraParams',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      beActivate: 'boolean',
      extraParams: 'string',
      model: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'boolean',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApDevicesResponseBody extends $tea.Model {
  apDevices?: DescribeApDevicesResponseBodyApDevices[];
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
      apDevices: { 'type': 'array', 'itemType': DescribeApDevicesResponseBodyApDevices },
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

export class DescribeAvailableEslModelsRequest extends $tea.Model {
  modelId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEslModelsResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  eslModels?: DescribeAvailableEslModelsResponseBodyEslModels[];
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
      eslModels: 'EslModels',
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
      eslModels: { 'type': 'array', 'itemType': DescribeAvailableEslModelsResponseBodyEslModels },
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

export class DescribeAvailableEslModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableEslModelsResponseBody;
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
      body: DescribeAvailableEslModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindersRequest extends $tea.Model {
  eslBarCode?: string;
  extraParams?: string;
  itemBarCode?: string;
  itemTitle?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      extraParams: 'ExtraParams',
      itemBarCode: 'ItemBarCode',
      itemTitle: 'ItemTitle',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      extraParams: 'string',
      itemBarCode: 'string',
      itemTitle: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindersResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  eslItemBindInfos?: DescribeBindersResponseBodyEslItemBindInfos[];
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
      eslItemBindInfos: 'EslItemBindInfos',
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
      eslItemBindInfos: { 'type': 'array', 'itemType': DescribeBindersResponseBodyEslItemBindInfos },
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

export class DescribeBindersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBindersResponseBody;
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
      body: DescribeBindersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCompanyTemplateVersionsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCompanyTemplateVersionsResponseBody extends $tea.Model {
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
  versions?: DescribeCompanyTemplateVersionsResponseBodyVersions[];
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
      versions: 'Versions',
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
      versions: { 'type': 'array', 'itemType': DescribeCompanyTemplateVersionsResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCompanyTemplateVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCompanyTemplateVersionsResponseBody;
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
      body: DescribeCompanyTemplateVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDeviceRequest extends $tea.Model {
  fromDate?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  toDate?: string;
  static names(): { [key: string]: string } {
    return {
      fromDate: 'FromDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      toDate: 'ToDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
      toDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDeviceResponseBody extends $tea.Model {
  eslDetails?: DescribeEslDeviceResponseBodyEslDetails[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eslDetails: 'EslDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslDetails: { 'type': 'array', 'itemType': DescribeEslDeviceResponseBodyEslDetails },
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

export class DescribeEslDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEslDeviceResponseBody;
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
      body: DescribeEslDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesRequest extends $tea.Model {
  eslBarCode?: string;
  eslStatus?: string;
  extraParams?: string;
  fromBatteryLevel?: number;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  toBatteryLevel?: number;
  type?: string;
  typeEncode?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      eslStatus: 'EslStatus',
      extraParams: 'ExtraParams',
      fromBatteryLevel: 'FromBatteryLevel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      toBatteryLevel: 'ToBatteryLevel',
      type: 'Type',
      typeEncode: 'TypeEncode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      eslStatus: 'string',
      extraParams: 'string',
      fromBatteryLevel: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
      toBatteryLevel: 'number',
      type: 'string',
      typeEncode: 'string',
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
  eslDevices?: DescribeEslDevicesResponseBodyEslDevices[];
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
      eslDevices: { 'type': 'array', 'itemType': DescribeEslDevicesResponseBodyEslDevices },
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

export class DescribeEslModelByTemplateVersionRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslModelByTemplateVersionResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  eslModels?: DescribeEslModelByTemplateVersionResponseBodyEslModels[];
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
      eslModels: 'EslModels',
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
      eslModels: { 'type': 'array', 'itemType': DescribeEslModelByTemplateVersionResponseBodyEslModels },
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

export class DescribeEslModelByTemplateVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEslModelByTemplateVersionResponseBody;
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
      body: DescribeEslModelByTemplateVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsRequest extends $tea.Model {
  bePromotion?: boolean;
  extraParams?: string;
  itemBarCode?: string;
  itemId?: string;
  itemTitle?: string;
  pageNumber?: number;
  pageSize?: number;
  skuId?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      bePromotion: 'BePromotion',
      extraParams: 'ExtraParams',
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
      extraParams: 'string',
      itemBarCode: 'string',
      itemId: 'string',
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
  items?: DescribeItemsResponseBodyItems[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  templateSceneId?: string;
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
      templateSceneId: 'TemplateSceneId',
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
      items: { 'type': 'array', 'itemType': DescribeItemsResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      templateSceneId: 'string',
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

export class DescribeStoreByTemplateVersionRequest extends $tea.Model {
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreByTemplateVersionResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  stores?: DescribeStoreByTemplateVersionResponseBodyStores[];
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
      stores: 'Stores',
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
      stores: { 'type': 'array', 'itemType': DescribeStoreByTemplateVersionResponseBodyStores },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreByTemplateVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStoreByTemplateVersionResponseBody;
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
      body: DescribeStoreByTemplateVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreConfigRequest extends $tea.Model {
  extraParams?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreConfigResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  storeConfigInfo?: DescribeStoreConfigResponseBodyStoreConfigInfo;
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
      storeConfigInfo: 'StoreConfigInfo',
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
      storeConfigInfo: DescribeStoreConfigResponseBodyStoreConfigInfo,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStoreConfigResponseBody;
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
      body: DescribeStoreConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresRequest extends $tea.Model {
  extraParams?: string;
  fromDate?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  storeName?: string;
  templateVersion?: string;
  toDate?: string;
  userStoreCode?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      fromDate: 'FromDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      storeName: 'StoreName',
      templateVersion: 'TemplateVersion',
      toDate: 'ToDate',
      userStoreCode: 'UserStoreCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      fromDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
      storeName: 'string',
      templateVersion: 'string',
      toDate: 'string',
      userStoreCode: 'string',
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
  stores?: DescribeStoresResponseBodyStores[];
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
      stores: { 'type': 'array', 'itemType': DescribeStoresResponseBodyStores },
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

export class DescribeTemplateByModelRequest extends $tea.Model {
  deviceType?: string;
  eslSize?: string;
  pageNumber?: number;
  pageSize?: number;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      eslSize: 'EslSize',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      eslSize: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateByModelResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  items?: DescribeTemplateByModelResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeTemplateByModelResponseBodyItems },
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

export class DescribeTemplateByModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateByModelResponseBody;
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
      body: DescribeTemplateByModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogRequest extends $tea.Model {
  eslBarCode?: string;
  extraParams?: string;
  fromDate?: string;
  itemBarCode?: string;
  itemShortTitle?: string;
  logId?: string;
  operationStatus?: string;
  operationType?: string;
  pageNumber?: number;
  pageSize?: number;
  storeId?: string;
  toDate?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      extraParams: 'ExtraParams',
      fromDate: 'FromDate',
      itemBarCode: 'ItemBarCode',
      itemShortTitle: 'ItemShortTitle',
      logId: 'LogId',
      operationStatus: 'OperationStatus',
      operationType: 'OperationType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storeId: 'StoreId',
      toDate: 'ToDate',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      extraParams: 'string',
      fromDate: 'string',
      itemBarCode: 'string',
      itemShortTitle: 'string',
      logId: 'string',
      operationStatus: 'string',
      operationType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storeId: 'string',
      toDate: 'string',
      userId: 'string',
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
  userLogs?: DescribeUserLogResponseBodyUserLogs[];
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
      userLogs: { 'type': 'array', 'itemType': DescribeUserLogResponseBodyUserLogs },
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
  extraParams?: string;
  pageNumber?: number;
  pageSize?: number;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
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
  users?: DescribeUsersResponseBodyUsers[];
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
      users: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsers },
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

export class GetUserRequest extends $tea.Model {
  extraParams?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
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

export class QueryTemplateListByGroupIdRequest extends $tea.Model {
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListByGroupIdResponseBody extends $tea.Model {
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
  templateList?: QueryTemplateListByGroupIdResponseBodyTemplateList[];
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
      success: 'Success',
      templateList: 'TemplateList',
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
      success: 'boolean',
      templateList: { 'type': 'array', 'itemType': QueryTemplateListByGroupIdResponseBodyTemplateList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateListByGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTemplateListByGroupIdResponseBody;
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
      body: QueryTemplateListByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAddMaterialRequest extends $tea.Model {
  content?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAddMaterialResponseBody extends $tea.Model {
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  result?: SyncAddMaterialResponseBodyResult;
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
      result: 'Result',
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
      result: SyncAddMaterialResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAddMaterialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncAddMaterialResponseBody;
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
      body: SyncAddMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassignUserRequest extends $tea.Model {
  extraParams?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
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
  column?: string;
  containerName?: string;
  eslBarCode?: string;
  extraParams?: string;
  itemBarCode?: string;
  layer?: number;
  shelf?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      containerName: 'ContainerName',
      eslBarCode: 'EslBarCode',
      extraParams: 'ExtraParams',
      itemBarCode: 'ItemBarCode',
      layer: 'Layer',
      shelf: 'Shelf',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      containerName: 'string',
      eslBarCode: 'string',
      extraParams: 'string',
      itemBarCode: 'string',
      layer: 'number',
      shelf: 'string',
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

export class UpdateEslDeviceLightRequest extends $tea.Model {
  eslBarCode?: string;
  extraParams?: string;
  frequency?: string;
  itemBarCode?: string;
  ledColor?: string;
  lightUpTime?: number;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      extraParams: 'ExtraParams',
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
      extraParams: 'string',
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
  lightFailEslInfos?: UpdateEslDeviceLightResponseBodyLightFailEslInfos[];
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
      lightFailEslInfos: 'LightFailEslInfos',
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
      lightFailEslInfos: { 'type': 'array', 'itemType': UpdateEslDeviceLightResponseBodyLightFailEslInfos },
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
  autoUnbindDays?: number;
  autoUnbindOfflineEsl?: boolean;
  barCodeEncode?: number;
  extraParams?: string;
  phone?: string;
  storeId?: string;
  storeName?: string;
  templateVersion?: string;
  timezone?: string;
  userStoreCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoUnbindDays: 'AutoUnbindDays',
      autoUnbindOfflineEsl: 'AutoUnbindOfflineEsl',
      barCodeEncode: 'BarCodeEncode',
      extraParams: 'ExtraParams',
      phone: 'Phone',
      storeId: 'StoreId',
      storeName: 'StoreName',
      templateVersion: 'TemplateVersion',
      timezone: 'Timezone',
      userStoreCode: 'UserStoreCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUnbindDays: 'number',
      autoUnbindOfflineEsl: 'boolean',
      barCodeEncode: 'number',
      extraParams: 'string',
      phone: 'string',
      storeId: 'string',
      storeName: 'string',
      templateVersion: 'string',
      timezone: 'string',
      userStoreCode: 'string',
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

export class UpdateStoreConfigRequest extends $tea.Model {
  enableNotification?: boolean;
  extraParams?: string;
  notificationSilentTimes?: string;
  notificationWebHook?: string;
  storeId?: string;
  subscribeContents?: string;
  static names(): { [key: string]: string } {
    return {
      enableNotification: 'EnableNotification',
      extraParams: 'ExtraParams',
      notificationSilentTimes: 'NotificationSilentTimes',
      notificationWebHook: 'NotificationWebHook',
      storeId: 'StoreId',
      subscribeContents: 'SubscribeContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableNotification: 'boolean',
      extraParams: 'string',
      notificationSilentTimes: 'string',
      notificationWebHook: 'string',
      storeId: 'string',
      subscribeContents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoreConfigResponseBody extends $tea.Model {
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

export class UpdateStoreConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStoreConfigResponseBody;
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
      body: UpdateStoreConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsRequestItemInfo extends $tea.Model {
  actionPrice?: number;
  beClearance?: boolean;
  beMember?: boolean;
  bePromotion?: boolean;
  beSourceCode?: boolean;
  brandName?: string;
  categoryName?: string;
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
  customizeFeatureK?: string;
  customizeFeatureL?: string;
  customizeFeatureM?: string;
  customizeFeatureN?: string;
  customizeFeatureO?: string;
  customizeFeatureP?: string;
  customizeFeatureQ?: string;
  customizeFeatureR?: string;
  customizeFeatureS?: string;
  customizeFeatureT?: string;
  customizeFeatureU?: string;
  customizeFeatureV?: string;
  customizeFeatureW?: string;
  customizeFeatureX?: string;
  customizeFeatureY?: string;
  customizeFeatureZ?: string;
  energyEfficiency?: string;
  forestFirstId?: string;
  forestSecondId?: string;
  inventoryStatus?: string;
  itemBarCode?: string;
  itemId?: string;
  itemInfoIndex?: number;
  itemPicUrl?: string;
  itemQrCode?: string;
  itemShortTitle?: string;
  itemTitle?: string;
  manufacturer?: string;
  material?: string;
  memberPrice?: number;
  modelNumber?: string;
  originalPrice?: number;
  priceUnit?: string;
  productionPlace?: string;
  promotionEnd?: string;
  promotionReason?: string;
  promotionStart?: string;
  promotionText?: string;
  rank?: string;
  saleSpec?: string;
  salesPrice?: number;
  skuId?: string;
  sourceCode?: string;
  suggestPrice?: number;
  supplierName?: string;
  taxFee?: string;
  templateSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      actionPrice: 'ActionPrice',
      beClearance: 'BeClearance',
      beMember: 'BeMember',
      bePromotion: 'BePromotion',
      beSourceCode: 'BeSourceCode',
      brandName: 'BrandName',
      categoryName: 'CategoryName',
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
      customizeFeatureK: 'CustomizeFeatureK',
      customizeFeatureL: 'CustomizeFeatureL',
      customizeFeatureM: 'CustomizeFeatureM',
      customizeFeatureN: 'CustomizeFeatureN',
      customizeFeatureO: 'CustomizeFeatureO',
      customizeFeatureP: 'CustomizeFeatureP',
      customizeFeatureQ: 'CustomizeFeatureQ',
      customizeFeatureR: 'CustomizeFeatureR',
      customizeFeatureS: 'CustomizeFeatureS',
      customizeFeatureT: 'CustomizeFeatureT',
      customizeFeatureU: 'CustomizeFeatureU',
      customizeFeatureV: 'CustomizeFeatureV',
      customizeFeatureW: 'CustomizeFeatureW',
      customizeFeatureX: 'CustomizeFeatureX',
      customizeFeatureY: 'CustomizeFeatureY',
      customizeFeatureZ: 'CustomizeFeatureZ',
      energyEfficiency: 'EnergyEfficiency',
      forestFirstId: 'ForestFirstId',
      forestSecondId: 'ForestSecondId',
      inventoryStatus: 'InventoryStatus',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemInfoIndex: 'ItemInfoIndex',
      itemPicUrl: 'ItemPicUrl',
      itemQrCode: 'ItemQrCode',
      itemShortTitle: 'ItemShortTitle',
      itemTitle: 'ItemTitle',
      manufacturer: 'Manufacturer',
      material: 'Material',
      memberPrice: 'MemberPrice',
      modelNumber: 'ModelNumber',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      productionPlace: 'ProductionPlace',
      promotionEnd: 'PromotionEnd',
      promotionReason: 'PromotionReason',
      promotionStart: 'PromotionStart',
      promotionText: 'PromotionText',
      rank: 'Rank',
      saleSpec: 'SaleSpec',
      salesPrice: 'SalesPrice',
      skuId: 'SkuId',
      sourceCode: 'SourceCode',
      suggestPrice: 'SuggestPrice',
      supplierName: 'SupplierName',
      taxFee: 'TaxFee',
      templateSceneId: 'TemplateSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPrice: 'number',
      beClearance: 'boolean',
      beMember: 'boolean',
      bePromotion: 'boolean',
      beSourceCode: 'boolean',
      brandName: 'string',
      categoryName: 'string',
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
      customizeFeatureK: 'string',
      customizeFeatureL: 'string',
      customizeFeatureM: 'string',
      customizeFeatureN: 'string',
      customizeFeatureO: 'string',
      customizeFeatureP: 'string',
      customizeFeatureQ: 'string',
      customizeFeatureR: 'string',
      customizeFeatureS: 'string',
      customizeFeatureT: 'string',
      customizeFeatureU: 'string',
      customizeFeatureV: 'string',
      customizeFeatureW: 'string',
      customizeFeatureX: 'string',
      customizeFeatureY: 'string',
      customizeFeatureZ: 'string',
      energyEfficiency: 'string',
      forestFirstId: 'string',
      forestSecondId: 'string',
      inventoryStatus: 'string',
      itemBarCode: 'string',
      itemId: 'string',
      itemInfoIndex: 'number',
      itemPicUrl: 'string',
      itemQrCode: 'string',
      itemShortTitle: 'string',
      itemTitle: 'string',
      manufacturer: 'string',
      material: 'string',
      memberPrice: 'number',
      modelNumber: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      productionPlace: 'string',
      promotionEnd: 'string',
      promotionReason: 'string',
      promotionStart: 'string',
      promotionText: 'string',
      rank: 'string',
      saleSpec: 'string',
      salesPrice: 'number',
      skuId: 'string',
      sourceCode: 'string',
      suggestPrice: 'number',
      supplierName: 'string',
      taxFee: 'string',
      templateSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchInsertItemsResponseBodyBatchResults extends $tea.Model {
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

export class DescribeApDevicesResponseBodyApDevices extends $tea.Model {
  beActivate?: boolean;
  mac?: string;
  model?: string;
  remark?: string;
  status?: boolean;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      beActivate: 'BeActivate',
      mac: 'Mac',
      model: 'Model',
      remark: 'Remark',
      status: 'Status',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beActivate: 'boolean',
      mac: 'string',
      model: 'string',
      remark: 'string',
      status: 'boolean',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEslModelsResponseBodyEslModels extends $tea.Model {
  deviceType?: string;
  eslSize?: string;
  modelId?: string;
  name?: string;
  screenHeight?: number;
  screenWidth?: number;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      eslSize: 'EslSize',
      modelId: 'ModelId',
      name: 'Name',
      screenHeight: 'ScreenHeight',
      screenWidth: 'ScreenWidth',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      eslSize: 'string',
      modelId: 'string',
      name: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindersResponseBodyEslItemBindInfos extends $tea.Model {
  actionPrice?: string;
  bePromotion?: boolean;
  bindId?: string;
  containerName?: string;
  eslBarCode?: string;
  eslConnectAp?: string;
  eslModel?: string;
  eslPic?: string;
  eslStatus?: string;
  gmtModified?: string;
  itemBarCode?: string;
  itemId?: string;
  itemShortTitle?: string;
  itemTitle?: string;
  originalPrice?: string;
  priceUnit?: string;
  promotionEnd?: string;
  promotionStart?: string;
  promotionText?: string;
  skuId?: string;
  storeId?: string;
  templateId?: string;
  templateSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      actionPrice: 'ActionPrice',
      bePromotion: 'BePromotion',
      bindId: 'BindId',
      containerName: 'ContainerName',
      eslBarCode: 'EslBarCode',
      eslConnectAp: 'EslConnectAp',
      eslModel: 'EslModel',
      eslPic: 'EslPic',
      eslStatus: 'EslStatus',
      gmtModified: 'GmtModified',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemShortTitle: 'ItemShortTitle',
      itemTitle: 'ItemTitle',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      promotionEnd: 'PromotionEnd',
      promotionStart: 'PromotionStart',
      promotionText: 'PromotionText',
      skuId: 'SkuId',
      storeId: 'StoreId',
      templateId: 'TemplateId',
      templateSceneId: 'TemplateSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPrice: 'string',
      bePromotion: 'boolean',
      bindId: 'string',
      containerName: 'string',
      eslBarCode: 'string',
      eslConnectAp: 'string',
      eslModel: 'string',
      eslPic: 'string',
      eslStatus: 'string',
      gmtModified: 'string',
      itemBarCode: 'string',
      itemId: 'string',
      itemShortTitle: 'string',
      itemTitle: 'string',
      originalPrice: 'string',
      priceUnit: 'string',
      promotionEnd: 'string',
      promotionStart: 'string',
      promotionText: 'string',
      skuId: 'string',
      storeId: 'string',
      templateId: 'string',
      templateSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCompanyTemplateVersionsResponseBodyVersions extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDeviceResponseBodyEslDetails extends $tea.Model {
  eslBarCode?: string;
  itemBarCode?: number;
  itemId?: number;
  itemShortTitle?: string;
  lastUpdateTime?: string;
  status?: string;
  storeId?: string;
  static names(): { [key: string]: string } {
    return {
      eslBarCode: 'EslBarCode',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemShortTitle: 'ItemShortTitle',
      lastUpdateTime: 'LastUpdateTime',
      status: 'Status',
      storeId: 'StoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eslBarCode: 'string',
      itemBarCode: 'number',
      itemId: 'number',
      itemShortTitle: 'string',
      lastUpdateTime: 'string',
      status: 'string',
      storeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslDevicesResponseBodyEslDevices extends $tea.Model {
  batteryLevel?: number;
  eslBarCode?: string;
  eslSignal?: number;
  eslStatus?: string;
  lastCommunicateTime?: string;
  layoutId?: string;
  layoutName?: string;
  mac?: string;
  model?: string;
  screenHeight?: number;
  screenWidth?: number;
  storeId?: string;
  type?: string;
  typeEncode?: string;
  static names(): { [key: string]: string } {
    return {
      batteryLevel: 'BatteryLevel',
      eslBarCode: 'EslBarCode',
      eslSignal: 'EslSignal',
      eslStatus: 'EslStatus',
      lastCommunicateTime: 'LastCommunicateTime',
      layoutId: 'LayoutId',
      layoutName: 'LayoutName',
      mac: 'Mac',
      model: 'Model',
      screenHeight: 'ScreenHeight',
      screenWidth: 'ScreenWidth',
      storeId: 'StoreId',
      type: 'Type',
      typeEncode: 'TypeEncode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batteryLevel: 'number',
      eslBarCode: 'string',
      eslSignal: 'number',
      eslStatus: 'string',
      lastCommunicateTime: 'string',
      layoutId: 'string',
      layoutName: 'string',
      mac: 'string',
      model: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
      storeId: 'string',
      type: 'string',
      typeEncode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEslModelByTemplateVersionResponseBodyEslModels extends $tea.Model {
  deviceType?: string;
  eslPhysicalSize?: string;
  eslSize?: string;
  image?: string;
  modelId?: string;
  name?: string;
  screenHeight?: number;
  screenWidth?: number;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      eslPhysicalSize: 'EslPhysicalSize',
      eslSize: 'EslSize',
      image: 'Image',
      modelId: 'ModelId',
      name: 'Name',
      screenHeight: 'ScreenHeight',
      screenWidth: 'ScreenWidth',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      eslPhysicalSize: 'string',
      eslSize: 'string',
      image: 'string',
      modelId: 'string',
      name: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeItemsResponseBodyItems extends $tea.Model {
  actionPrice?: number;
  beClearance?: boolean;
  beMember?: boolean;
  bePromotion?: boolean;
  beSourceCode?: boolean;
  brandName?: string;
  categoryName?: string;
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
  customizeFeatureK?: string;
  customizeFeatureL?: string;
  customizeFeatureM?: string;
  customizeFeatureN?: string;
  customizeFeatureO?: string;
  customizeFeatureP?: string;
  customizeFeatureQ?: string;
  customizeFeatureR?: string;
  customizeFeatureS?: string;
  customizeFeatureT?: string;
  customizeFeatureU?: string;
  customizeFeatureV?: string;
  customizeFeatureW?: string;
  customizeFeatureX?: string;
  customizeFeatureY?: string;
  customizeFeatureZ?: string;
  energyEfficiency?: string;
  forestFirstId?: string;
  forestSecondId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  inventoryStatus?: string;
  itemBarCode?: string;
  itemId?: string;
  itemInfoIndex?: number;
  itemPicUrl?: string;
  itemQrCode?: string;
  itemShortTitle?: string;
  itemTitle?: string;
  manufacturer?: string;
  material?: string;
  memberPrice?: number;
  modelNumber?: string;
  originalPrice?: number;
  priceUnit?: string;
  productionPlace?: string;
  promotionEnd?: string;
  promotionReason?: string;
  promotionStart?: string;
  promotionText?: string;
  rank?: string;
  saleSpec?: string;
  salesPrice?: number;
  skuId?: string;
  sourceCode?: string;
  suggestPrice?: number;
  supplierName?: string;
  taxFee?: string;
  templateSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      actionPrice: 'ActionPrice',
      beClearance: 'BeClearance',
      beMember: 'BeMember',
      bePromotion: 'BePromotion',
      beSourceCode: 'BeSourceCode',
      brandName: 'BrandName',
      categoryName: 'CategoryName',
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
      customizeFeatureK: 'CustomizeFeatureK',
      customizeFeatureL: 'CustomizeFeatureL',
      customizeFeatureM: 'CustomizeFeatureM',
      customizeFeatureN: 'CustomizeFeatureN',
      customizeFeatureO: 'CustomizeFeatureO',
      customizeFeatureP: 'CustomizeFeatureP',
      customizeFeatureQ: 'CustomizeFeatureQ',
      customizeFeatureR: 'CustomizeFeatureR',
      customizeFeatureS: 'CustomizeFeatureS',
      customizeFeatureT: 'CustomizeFeatureT',
      customizeFeatureU: 'CustomizeFeatureU',
      customizeFeatureV: 'CustomizeFeatureV',
      customizeFeatureW: 'CustomizeFeatureW',
      customizeFeatureX: 'CustomizeFeatureX',
      customizeFeatureY: 'CustomizeFeatureY',
      customizeFeatureZ: 'CustomizeFeatureZ',
      energyEfficiency: 'EnergyEfficiency',
      forestFirstId: 'ForestFirstId',
      forestSecondId: 'ForestSecondId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inventoryStatus: 'InventoryStatus',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemInfoIndex: 'ItemInfoIndex',
      itemPicUrl: 'ItemPicUrl',
      itemQrCode: 'ItemQrCode',
      itemShortTitle: 'ItemShortTitle',
      itemTitle: 'ItemTitle',
      manufacturer: 'Manufacturer',
      material: 'Material',
      memberPrice: 'MemberPrice',
      modelNumber: 'ModelNumber',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      productionPlace: 'ProductionPlace',
      promotionEnd: 'PromotionEnd',
      promotionReason: 'PromotionReason',
      promotionStart: 'PromotionStart',
      promotionText: 'PromotionText',
      rank: 'Rank',
      saleSpec: 'SaleSpec',
      salesPrice: 'SalesPrice',
      skuId: 'SkuId',
      sourceCode: 'SourceCode',
      suggestPrice: 'SuggestPrice',
      supplierName: 'SupplierName',
      taxFee: 'TaxFee',
      templateSceneId: 'TemplateSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPrice: 'number',
      beClearance: 'boolean',
      beMember: 'boolean',
      bePromotion: 'boolean',
      beSourceCode: 'boolean',
      brandName: 'string',
      categoryName: 'string',
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
      customizeFeatureK: 'string',
      customizeFeatureL: 'string',
      customizeFeatureM: 'string',
      customizeFeatureN: 'string',
      customizeFeatureO: 'string',
      customizeFeatureP: 'string',
      customizeFeatureQ: 'string',
      customizeFeatureR: 'string',
      customizeFeatureS: 'string',
      customizeFeatureT: 'string',
      customizeFeatureU: 'string',
      customizeFeatureV: 'string',
      customizeFeatureW: 'string',
      customizeFeatureX: 'string',
      customizeFeatureY: 'string',
      customizeFeatureZ: 'string',
      energyEfficiency: 'string',
      forestFirstId: 'string',
      forestSecondId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      inventoryStatus: 'string',
      itemBarCode: 'string',
      itemId: 'string',
      itemInfoIndex: 'number',
      itemPicUrl: 'string',
      itemQrCode: 'string',
      itemShortTitle: 'string',
      itemTitle: 'string',
      manufacturer: 'string',
      material: 'string',
      memberPrice: 'number',
      modelNumber: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      productionPlace: 'string',
      promotionEnd: 'string',
      promotionReason: 'string',
      promotionStart: 'string',
      promotionText: 'string',
      rank: 'string',
      saleSpec: 'string',
      salesPrice: 'number',
      skuId: 'string',
      sourceCode: 'string',
      suggestPrice: 'number',
      supplierName: 'string',
      taxFee: 'string',
      templateSceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreByTemplateVersionResponseBodyStores extends $tea.Model {
  gmtModified?: string;
  level?: string;
  parentId?: string;
  phone?: string;
  storeId?: string;
  storeName?: string;
  templateVersion?: string;
  timeZone?: string;
  userStoreCode?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      level: 'Level',
      parentId: 'ParentId',
      phone: 'Phone',
      storeId: 'StoreId',
      storeName: 'StoreName',
      templateVersion: 'TemplateVersion',
      timeZone: 'TimeZone',
      userStoreCode: 'UserStoreCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      level: 'string',
      parentId: 'string',
      phone: 'string',
      storeId: 'string',
      storeName: 'string',
      templateVersion: 'string',
      timeZone: 'string',
      userStoreCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreConfigResponseBodyStoreConfigInfoSubscribeContents extends $tea.Model {
  atAll?: boolean;
  atMobileList?: string;
  category?: string;
  enable?: boolean;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      atAll: 'AtAll',
      atMobileList: 'AtMobileList',
      category: 'Category',
      enable: 'Enable',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atAll: 'boolean',
      atMobileList: 'string',
      category: 'string',
      enable: 'boolean',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoreConfigResponseBodyStoreConfigInfo extends $tea.Model {
  enableNotification?: boolean;
  notificationSilentTimes?: string;
  notificationWebHook?: string;
  storeId?: string;
  subscribeContents?: DescribeStoreConfigResponseBodyStoreConfigInfoSubscribeContents[];
  static names(): { [key: string]: string } {
    return {
      enableNotification: 'EnableNotification',
      notificationSilentTimes: 'NotificationSilentTimes',
      notificationWebHook: 'NotificationWebHook',
      storeId: 'StoreId',
      subscribeContents: 'SubscribeContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableNotification: 'boolean',
      notificationSilentTimes: 'string',
      notificationWebHook: 'string',
      storeId: 'string',
      subscribeContents: { 'type': 'array', 'itemType': DescribeStoreConfigResponseBodyStoreConfigInfoSubscribeContents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStoresResponseBodyStores extends $tea.Model {
  autoUnbindDays?: number;
  autoUnbindOfflineEsl?: boolean;
  barCodeEncode?: number;
  gmtCreate?: string;
  gmtModified?: string;
  level?: string;
  parentId?: string;
  phone?: string;
  storeId?: string;
  storeName?: string;
  templateVersion?: string;
  timeZone?: string;
  userStoreCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoUnbindDays: 'AutoUnbindDays',
      autoUnbindOfflineEsl: 'AutoUnbindOfflineEsl',
      barCodeEncode: 'BarCodeEncode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      level: 'Level',
      parentId: 'ParentId',
      phone: 'Phone',
      storeId: 'StoreId',
      storeName: 'StoreName',
      templateVersion: 'TemplateVersion',
      timeZone: 'TimeZone',
      userStoreCode: 'UserStoreCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUnbindDays: 'number',
      autoUnbindOfflineEsl: 'boolean',
      barCodeEncode: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      level: 'string',
      parentId: 'string',
      phone: 'string',
      storeId: 'string',
      storeName: 'string',
      templateVersion: 'string',
      timeZone: 'string',
      userStoreCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateByModelResponseBodyItems extends $tea.Model {
  basePicture?: string;
  brand?: string;
  eslSize?: string;
  eslType?: string;
  height?: number;
  layout?: string;
  scene?: string;
  templateId?: string;
  templateName?: string;
  templateSceneId?: string;
  templateVersion?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      basePicture: 'BasePicture',
      brand: 'Brand',
      eslSize: 'EslSize',
      eslType: 'EslType',
      height: 'Height',
      layout: 'Layout',
      scene: 'Scene',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateSceneId: 'TemplateSceneId',
      templateVersion: 'TemplateVersion',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePicture: 'string',
      brand: 'string',
      eslSize: 'string',
      eslType: 'string',
      height: 'number',
      layout: 'string',
      scene: 'string',
      templateId: 'string',
      templateName: 'string',
      templateSceneId: 'string',
      templateVersion: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLogResponseBodyUserLogs extends $tea.Model {
  actionPrice?: string;
  bePromotion?: boolean;
  eslBarCode?: string;
  eslSignal?: number;
  gmtCreate?: string;
  gmtModified?: string;
  i18nResultKey?: string;
  itemBarCode?: string;
  itemId?: string;
  itemShortTitle?: string;
  logId?: string;
  operationResponseTime?: string;
  operationSendTime?: string;
  operationStatus?: string;
  operationType?: string;
  priceUnit?: string;
  resultCode?: string;
  spendTime?: string;
  storeId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionPrice: 'ActionPrice',
      bePromotion: 'BePromotion',
      eslBarCode: 'EslBarCode',
      eslSignal: 'EslSignal',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      i18nResultKey: 'I18nResultKey',
      itemBarCode: 'ItemBarCode',
      itemId: 'ItemId',
      itemShortTitle: 'ItemShortTitle',
      logId: 'LogId',
      operationResponseTime: 'OperationResponseTime',
      operationSendTime: 'OperationSendTime',
      operationStatus: 'OperationStatus',
      operationType: 'OperationType',
      priceUnit: 'PriceUnit',
      resultCode: 'ResultCode',
      spendTime: 'SpendTime',
      storeId: 'StoreId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPrice: 'string',
      bePromotion: 'boolean',
      eslBarCode: 'string',
      eslSignal: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      i18nResultKey: 'string',
      itemBarCode: 'string',
      itemId: 'string',
      itemShortTitle: 'string',
      logId: 'string',
      operationResponseTime: 'string',
      operationSendTime: 'string',
      operationStatus: 'string',
      operationType: 'string',
      priceUnit: 'string',
      resultCode: 'string',
      spendTime: 'string',
      storeId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersDingTalkInfos extends $tea.Model {
  dingTalkCompanyId?: string;
  dingTalkUserId?: string;
  static names(): { [key: string]: string } {
    return {
      dingTalkCompanyId: 'DingTalkCompanyId',
      dingTalkUserId: 'DingTalkUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTalkCompanyId: 'string',
      dingTalkUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsers extends $tea.Model {
  bid?: string;
  dingTalkInfos?: DescribeUsersResponseBodyUsersDingTalkInfos[];
  ownerId?: string;
  stores?: string;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      dingTalkInfos: 'DingTalkInfos',
      ownerId: 'OwnerId',
      stores: 'Stores',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      dingTalkInfos: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersDingTalkInfos },
      ownerId: 'string',
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

export class GetUserResponseBodyUserDingTalkInfos extends $tea.Model {
  dingTalkCompanyId?: string;
  dingTalkUserId?: string;
  static names(): { [key: string]: string } {
    return {
      dingTalkCompanyId: 'DingTalkCompanyId',
      dingTalkUserId: 'DingTalkUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTalkCompanyId: 'string',
      dingTalkUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  bid?: string;
  dingTalkInfos?: GetUserResponseBodyUserDingTalkInfos[];
  ownerId?: string;
  stores?: string;
  userId?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      dingTalkInfos: 'DingTalkInfos',
      ownerId: 'OwnerId',
      stores: 'Stores',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      dingTalkInfos: { 'type': 'array', 'itemType': GetUserResponseBodyUserDingTalkInfos },
      ownerId: 'string',
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

export class QueryTemplateListByGroupIdResponseBodyTemplateList extends $tea.Model {
  basePicture?: string;
  brand?: string;
  eslSize?: string;
  eslType?: string;
  groupId?: string;
  height?: number;
  layout?: string;
  relation?: boolean;
  scene?: string;
  templateId?: string;
  templateName?: string;
  templateSceneId?: string;
  templateVersion?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      basePicture: 'BasePicture',
      brand: 'Brand',
      eslSize: 'EslSize',
      eslType: 'EslType',
      groupId: 'GroupId',
      height: 'Height',
      layout: 'Layout',
      relation: 'Relation',
      scene: 'Scene',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateSceneId: 'TemplateSceneId',
      templateVersion: 'TemplateVersion',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePicture: 'string',
      brand: 'string',
      eslSize: 'string',
      eslType: 'string',
      groupId: 'string',
      height: 'number',
      layout: 'string',
      relation: 'boolean',
      scene: 'string',
      templateId: 'string',
      templateName: 'string',
      templateSceneId: 'string',
      templateVersion: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAddMaterialResponseBodyResult extends $tea.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEslDeviceLightResponseBodyLightFailEslInfos extends $tea.Model {
  errorMessage?: string;
  eslBarCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      eslBarCode: 'EslBarCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      eslBarCode: 'string',
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

  async activateApDeviceWithOptions(request: ActivateApDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ActivateApDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActivateApDevice",
      version: "2020-02-01",
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

  async activateApDevice(request: ActivateApDeviceRequest): Promise<ActivateApDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateApDeviceWithOptions(request, runtime);
  }

  async addApDeviceWithOptions(request: AddApDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddApDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddApDevice",
      version: "2020-02-01",
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

  async addApDevice(request: AddApDeviceRequest): Promise<AddApDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addApDeviceWithOptions(request, runtime);
  }

  async addCompanyTemplateWithOptions(request: AddCompanyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<AddCompanyTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.eslSize)) {
      body["EslSize"] = request.eslSize;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ifDefault)) {
      body["IfDefault"] = request.ifDefault;
    }

    if (!Util.isUnset(request.ifMember)) {
      body["IfMember"] = request.ifMember;
    }

    if (!Util.isUnset(request.ifOutOfInventory)) {
      body["IfOutOfInventory"] = request.ifOutOfInventory;
    }

    if (!Util.isUnset(request.ifPromotion)) {
      body["IfPromotion"] = request.ifPromotion;
    }

    if (!Util.isUnset(request.ifSourceCode)) {
      body["IfSourceCode"] = request.ifSourceCode;
    }

    if (!Util.isUnset(request.layout)) {
      body["Layout"] = request.layout;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateSceneId)) {
      body["TemplateSceneId"] = request.templateSceneId;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCompanyTemplate",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCompanyTemplateResponse>(await this.callApi(params, req, runtime), new AddCompanyTemplateResponse({}));
  }

  async addCompanyTemplate(request: AddCompanyTemplateRequest): Promise<AddCompanyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCompanyTemplateWithOptions(request, runtime);
  }

  async addUserWithOptions(request: AddUserRequest, runtime: $Util.RuntimeOptions): Promise<AddUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddUser",
      version: "2020-02-01",
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

  async addUser(request: AddUserRequest): Promise<AddUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserWithOptions(request, runtime);
  }

  async applyCompanyTemplateVersionToStoresWithOptions(request: ApplyCompanyTemplateVersionToStoresRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCompanyTemplateVersionToStoresResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.stores)) {
      body["Stores"] = request.stores;
    }

    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyCompanyTemplateVersionToStores",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyCompanyTemplateVersionToStoresResponse>(await this.callApi(params, req, runtime), new ApplyCompanyTemplateVersionToStoresResponse({}));
  }

  async applyCompanyTemplateVersionToStores(request: ApplyCompanyTemplateVersionToStoresRequest): Promise<ApplyCompanyTemplateVersionToStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCompanyTemplateVersionToStoresWithOptions(request, runtime);
  }

  async assignUserWithOptions(request: AssignUserRequest, runtime: $Util.RuntimeOptions): Promise<AssignUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

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
      version: "2020-02-01",
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

  async assignUser(request: AssignUserRequest): Promise<AssignUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignUserWithOptions(request, runtime);
  }

  async batchInsertItemsWithOptions(request: BatchInsertItemsRequest, runtime: $Util.RuntimeOptions): Promise<BatchInsertItemsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.itemInfo)) {
      body["ItemInfo"] = request.itemInfo;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.syncByItemId)) {
      body["SyncByItemId"] = request.syncByItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchInsertItems",
      version: "2020-02-01",
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

  async batchInsertItems(request: BatchInsertItemsRequest): Promise<BatchInsertItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchInsertItemsWithOptions(request, runtime);
  }

  async bindEslDeviceWithOptions(request: BindEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.column)) {
      body["Column"] = request.column;
    }

    if (!Util.isUnset(request.containerId)) {
      body["ContainerId"] = request.containerId;
    }

    if (!Util.isUnset(request.containerName)) {
      body["ContainerName"] = request.containerName;
    }

    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.layer)) {
      body["Layer"] = request.layer;
    }

    if (!Util.isUnset(request.layoutId)) {
      body["LayoutId"] = request.layoutId;
    }

    if (!Util.isUnset(request.layoutName)) {
      body["LayoutName"] = request.layoutName;
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
      action: "BindEslDevice",
      version: "2020-02-01",
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

  async bindEslDevice(request: BindEslDeviceRequest): Promise<BindEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindEslDeviceWithOptions(request, runtime);
  }

  async createStoreWithOptions(request: CreateStoreRequest, runtime: $Util.RuntimeOptions): Promise<CreateStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoUnbindDays)) {
      body["AutoUnbindDays"] = request.autoUnbindDays;
    }

    if (!Util.isUnset(request.autoUnbindOfflineEsl)) {
      body["AutoUnbindOfflineEsl"] = request.autoUnbindOfflineEsl;
    }

    if (!Util.isUnset(request.barCodeEncode)) {
      body["BarCodeEncode"] = request.barCodeEncode;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
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

    if (!Util.isUnset(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!Util.isUnset(request.userStoreCode)) {
      body["UserStoreCode"] = request.userStoreCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStore",
      version: "2020-02-01",
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

  async createStore(request: CreateStoreRequest): Promise<CreateStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStoreWithOptions(request, runtime);
  }

  async deleteApDeviceWithOptions(request: DeleteApDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApDevice",
      version: "2020-02-01",
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

  async deleteApDevice(request: DeleteApDeviceRequest): Promise<DeleteApDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApDeviceWithOptions(request, runtime);
  }

  async deleteCompanyTemplateWithOptions(request: DeleteCompanyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCompanyTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCompanyTemplate",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCompanyTemplateResponse>(await this.callApi(params, req, runtime), new DeleteCompanyTemplateResponse({}));
  }

  async deleteCompanyTemplate(request: DeleteCompanyTemplateRequest): Promise<DeleteCompanyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCompanyTemplateWithOptions(request, runtime);
  }

  async deleteItemWithOptions(request: DeleteItemRequest, runtime: $Util.RuntimeOptions): Promise<DeleteItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.unbindEslDevice)) {
      body["UnbindEslDevice"] = request.unbindEslDevice;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteItem",
      version: "2020-02-01",
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

  async deleteItem(request: DeleteItemRequest): Promise<DeleteItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteItemWithOptions(request, runtime);
  }

  async deleteStoreWithOptions(request: DeleteStoreRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStore",
      version: "2020-02-01",
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

  async deleteStore(request: DeleteStoreRequest): Promise<DeleteStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStoreWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2020-02-01",
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

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async describeApDevicesWithOptions(request: DescribeApDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apMac)) {
      body["ApMac"] = request.apMac;
    }

    if (!Util.isUnset(request.beActivate)) {
      body["BeActivate"] = request.beActivate;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApDevices",
      version: "2020-02-01",
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

  async describeApDevices(request: DescribeApDevicesRequest): Promise<DescribeApDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApDevicesWithOptions(request, runtime);
  }

  async describeAvailableEslModelsWithOptions(request: DescribeAvailableEslModelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableEslModelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableEslModels",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableEslModelsResponse>(await this.callApi(params, req, runtime), new DescribeAvailableEslModelsResponse({}));
  }

  async describeAvailableEslModels(request: DescribeAvailableEslModelsRequest): Promise<DescribeAvailableEslModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableEslModelsWithOptions(request, runtime);
  }

  async describeBindersWithOptions(request: DescribeBindersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBindersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
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

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBinders",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBindersResponse>(await this.callApi(params, req, runtime), new DescribeBindersResponse({}));
  }

  async describeBinders(request: DescribeBindersRequest): Promise<DescribeBindersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBindersWithOptions(request, runtime);
  }

  async describeCompanyTemplateVersionsWithOptions(request: DescribeCompanyTemplateVersionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCompanyTemplateVersionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCompanyTemplateVersions",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCompanyTemplateVersionsResponse>(await this.callApi(params, req, runtime), new DescribeCompanyTemplateVersionsResponse({}));
  }

  async describeCompanyTemplateVersions(request: DescribeCompanyTemplateVersionsRequest): Promise<DescribeCompanyTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCompanyTemplateVersionsWithOptions(request, runtime);
  }

  async describeEslDeviceWithOptions(request: DescribeEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEslDevice",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEslDeviceResponse>(await this.callApi(params, req, runtime), new DescribeEslDeviceResponse({}));
  }

  async describeEslDevice(request: DescribeEslDeviceRequest): Promise<DescribeEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEslDeviceWithOptions(request, runtime);
  }

  async describeEslDevicesWithOptions(request: DescribeEslDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEslDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.eslStatus)) {
      body["EslStatus"] = request.eslStatus;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.fromBatteryLevel)) {
      body["FromBatteryLevel"] = request.fromBatteryLevel;
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

    if (!Util.isUnset(request.toBatteryLevel)) {
      body["ToBatteryLevel"] = request.toBatteryLevel;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.typeEncode)) {
      body["TypeEncode"] = request.typeEncode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEslDevices",
      version: "2020-02-01",
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

  async describeEslDevices(request: DescribeEslDevicesRequest): Promise<DescribeEslDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEslDevicesWithOptions(request, runtime);
  }

  async describeEslModelByTemplateVersionWithOptions(request: DescribeEslModelByTemplateVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEslModelByTemplateVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEslModelByTemplateVersion",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEslModelByTemplateVersionResponse>(await this.callApi(params, req, runtime), new DescribeEslModelByTemplateVersionResponse({}));
  }

  async describeEslModelByTemplateVersion(request: DescribeEslModelByTemplateVersionRequest): Promise<DescribeEslModelByTemplateVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEslModelByTemplateVersionWithOptions(request, runtime);
  }

  async describeItemsWithOptions(request: DescribeItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeItemsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bePromotion)) {
      body["BePromotion"] = request.bePromotion;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
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
      version: "2020-02-01",
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

  async describeItems(request: DescribeItemsRequest): Promise<DescribeItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeItemsWithOptions(request, runtime);
  }

  async describeStoreByTemplateVersionWithOptions(request: DescribeStoreByTemplateVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStoreByTemplateVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStoreByTemplateVersion",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStoreByTemplateVersionResponse>(await this.callApi(params, req, runtime), new DescribeStoreByTemplateVersionResponse({}));
  }

  async describeStoreByTemplateVersion(request: DescribeStoreByTemplateVersionRequest): Promise<DescribeStoreByTemplateVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStoreByTemplateVersionWithOptions(request, runtime);
  }

  async describeStoreConfigWithOptions(request: DescribeStoreConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStoreConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStoreConfig",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStoreConfigResponse>(await this.callApi(params, req, runtime), new DescribeStoreConfigResponse({}));
  }

  async describeStoreConfig(request: DescribeStoreConfigRequest): Promise<DescribeStoreConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStoreConfigWithOptions(request, runtime);
  }

  async describeStoresWithOptions(request: DescribeStoresRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStoresResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
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

    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    if (!Util.isUnset(request.userStoreCode)) {
      body["UserStoreCode"] = request.userStoreCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStores",
      version: "2020-02-01",
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

  async describeStores(request: DescribeStoresRequest): Promise<DescribeStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStoresWithOptions(request, runtime);
  }

  async describeTemplateByModelWithOptions(request: DescribeTemplateByModelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateByModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.eslSize)) {
      body["EslSize"] = request.eslSize;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTemplateByModel",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTemplateByModelResponse>(await this.callApi(params, req, runtime), new DescribeTemplateByModelResponse({}));
  }

  async describeTemplateByModel(request: DescribeTemplateByModelRequest): Promise<DescribeTemplateByModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateByModelWithOptions(request, runtime);
  }

  async describeUserLogWithOptions(request: DescribeUserLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.fromDate)) {
      body["FromDate"] = request.fromDate;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.itemShortTitle)) {
      body["ItemShortTitle"] = request.itemShortTitle;
    }

    if (!Util.isUnset(request.logId)) {
      body["LogId"] = request.logId;
    }

    if (!Util.isUnset(request.operationStatus)) {
      body["OperationStatus"] = request.operationStatus;
    }

    if (!Util.isUnset(request.operationType)) {
      body["OperationType"] = request.operationType;
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

    if (!Util.isUnset(request.toDate)) {
      body["ToDate"] = request.toDate;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserLog",
      version: "2020-02-01",
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

  async describeUserLog(request: DescribeUserLogRequest): Promise<DescribeUserLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserLogWithOptions(request, runtime);
  }

  async describeUsersWithOptions(request: DescribeUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

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
      version: "2020-02-01",
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

  async describeUsers(request: DescribeUsersRequest): Promise<DescribeUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2020-02-01",
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

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async queryTemplateListByGroupIdWithOptions(request: QueryTemplateListByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryTemplateListByGroupIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTemplateListByGroupId",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTemplateListByGroupIdResponse>(await this.callApi(params, req, runtime), new QueryTemplateListByGroupIdResponse({}));
  }

  async queryTemplateListByGroupId(request: QueryTemplateListByGroupIdRequest): Promise<QueryTemplateListByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTemplateListByGroupIdWithOptions(request, runtime);
  }

  async syncAddMaterialWithOptions(request: SyncAddMaterialRequest, runtime: $Util.RuntimeOptions): Promise<SyncAddMaterialResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncAddMaterial",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncAddMaterialResponse>(await this.callApi(params, req, runtime), new SyncAddMaterialResponse({}));
  }

  async syncAddMaterial(request: SyncAddMaterialRequest): Promise<SyncAddMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncAddMaterialWithOptions(request, runtime);
  }

  async unassignUserWithOptions(request: UnassignUserRequest, runtime: $Util.RuntimeOptions): Promise<UnassignUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnassignUser",
      version: "2020-02-01",
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

  async unassignUser(request: UnassignUserRequest): Promise<UnassignUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassignUserWithOptions(request, runtime);
  }

  async unbindEslDeviceWithOptions(request: UnbindEslDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindEslDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.column)) {
      body["Column"] = request.column;
    }

    if (!Util.isUnset(request.containerName)) {
      body["ContainerName"] = request.containerName;
    }

    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.itemBarCode)) {
      body["ItemBarCode"] = request.itemBarCode;
    }

    if (!Util.isUnset(request.layer)) {
      body["Layer"] = request.layer;
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
      action: "UnbindEslDevice",
      version: "2020-02-01",
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

  async unbindEslDevice(request: UnbindEslDeviceRequest): Promise<UnbindEslDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindEslDeviceWithOptions(request, runtime);
  }

  async updateEslDeviceLightWithOptions(request: UpdateEslDeviceLightRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEslDeviceLightResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eslBarCode)) {
      body["EslBarCode"] = request.eslBarCode;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
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
      version: "2020-02-01",
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

  async updateEslDeviceLight(request: UpdateEslDeviceLightRequest): Promise<UpdateEslDeviceLightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEslDeviceLightWithOptions(request, runtime);
  }

  async updateStoreWithOptions(request: UpdateStoreRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStoreResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoUnbindDays)) {
      body["AutoUnbindDays"] = request.autoUnbindDays;
    }

    if (!Util.isUnset(request.autoUnbindOfflineEsl)) {
      body["AutoUnbindOfflineEsl"] = request.autoUnbindOfflineEsl;
    }

    if (!Util.isUnset(request.barCodeEncode)) {
      body["BarCodeEncode"] = request.barCodeEncode;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
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

    if (!Util.isUnset(request.templateVersion)) {
      body["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.userStoreCode)) {
      body["UserStoreCode"] = request.userStoreCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStore",
      version: "2020-02-01",
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

  async updateStore(request: UpdateStoreRequest): Promise<UpdateStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStoreWithOptions(request, runtime);
  }

  async updateStoreConfigWithOptions(request: UpdateStoreConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStoreConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableNotification)) {
      body["EnableNotification"] = request.enableNotification;
    }

    if (!Util.isUnset(request.extraParams)) {
      body["ExtraParams"] = request.extraParams;
    }

    if (!Util.isUnset(request.notificationSilentTimes)) {
      body["NotificationSilentTimes"] = request.notificationSilentTimes;
    }

    if (!Util.isUnset(request.notificationWebHook)) {
      body["NotificationWebHook"] = request.notificationWebHook;
    }

    if (!Util.isUnset(request.storeId)) {
      body["StoreId"] = request.storeId;
    }

    if (!Util.isUnset(request.subscribeContents)) {
      body["SubscribeContents"] = request.subscribeContents;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStoreConfig",
      version: "2020-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStoreConfigResponse>(await this.callApi(params, req, runtime), new UpdateStoreConfigResponse({}));
  }

  async updateStoreConfig(request: UpdateStoreConfigRequest): Promise<UpdateStoreConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStoreConfigWithOptions(request, runtime);
  }

}
