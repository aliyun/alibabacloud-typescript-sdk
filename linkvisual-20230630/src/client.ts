// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindStorageOrderRequest extends $tea.Model {
  deviceName?: string;
  enableDefaultPlan?: boolean;
  eventRecordDuration?: number;
  eventRecordProlong?: boolean;
  iotId?: string;
  maxRecordFileDuration?: number;
  orderId?: string;
  preRecordDuration?: number;
  productKey?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      enableDefaultPlan: 'EnableDefaultPlan',
      eventRecordDuration: 'EventRecordDuration',
      eventRecordProlong: 'EventRecordProlong',
      iotId: 'IotId',
      maxRecordFileDuration: 'MaxRecordFileDuration',
      orderId: 'OrderId',
      preRecordDuration: 'PreRecordDuration',
      productKey: 'ProductKey',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      enableDefaultPlan: 'boolean',
      eventRecordDuration: 'number',
      eventRecordProlong: 'boolean',
      iotId: 'string',
      maxRecordFileDuration: 'number',
      orderId: 'string',
      preRecordDuration: 'number',
      productKey: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindStorageOrderResponseBody extends $tea.Model {
  code?: string;
  data?: BindStorageOrderResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BindStorageOrderResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindStorageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindStorageOrderResponseBody;
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
      body: BindStorageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFreeStorageValidRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFreeStorageValidResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFreeStorageValidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckFreeStorageValidResponseBody;
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
      body: CheckFreeStorageValidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumeFreeStorageRequest extends $tea.Model {
  deviceName?: string;
  enableDefaultPlan?: boolean;
  eventRecordDuration?: number;
  eventRecordProlong?: boolean;
  immediateUse?: boolean;
  iotId?: string;
  preRecordDuration?: number;
  productKey?: string;
  quota?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      enableDefaultPlan: 'EnableDefaultPlan',
      eventRecordDuration: 'EventRecordDuration',
      eventRecordProlong: 'EventRecordProlong',
      immediateUse: 'ImmediateUse',
      iotId: 'IotId',
      preRecordDuration: 'PreRecordDuration',
      productKey: 'ProductKey',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      enableDefaultPlan: 'boolean',
      eventRecordDuration: 'number',
      eventRecordProlong: 'boolean',
      immediateUse: 'boolean',
      iotId: 'string',
      preRecordDuration: 'number',
      productKey: 'string',
      quota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumeFreeStorageResponseBody extends $tea.Model {
  code?: string;
  data?: ConsumeFreeStorageResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ConsumeFreeStorageResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumeFreeStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConsumeFreeStorageResponseBody;
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
      body: ConsumeFreeStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPayStorageOrderRequest extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  deviceName?: string;
  deviceNoOwner?: boolean;
  enableDefaultPlan?: boolean;
  eventRecordDuration?: number;
  eventRecordProlong?: boolean;
  immediateUse?: boolean;
  iotId?: string;
  maxRecordFileDuration?: number;
  preRecordDuration?: number;
  productKey?: string;
  specification?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      deviceName: 'DeviceName',
      deviceNoOwner: 'DeviceNoOwner',
      enableDefaultPlan: 'EnableDefaultPlan',
      eventRecordDuration: 'EventRecordDuration',
      eventRecordProlong: 'EventRecordProlong',
      immediateUse: 'ImmediateUse',
      iotId: 'IotId',
      maxRecordFileDuration: 'MaxRecordFileDuration',
      preRecordDuration: 'PreRecordDuration',
      productKey: 'ProductKey',
      specification: 'Specification',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      deviceName: 'string',
      deviceNoOwner: 'boolean',
      enableDefaultPlan: 'boolean',
      eventRecordDuration: 'number',
      eventRecordProlong: 'boolean',
      immediateUse: 'boolean',
      iotId: 'string',
      maxRecordFileDuration: 'number',
      preRecordDuration: 'number',
      productKey: 'string',
      specification: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPayStorageOrderResponseBody extends $tea.Model {
  code?: string;
  data?: CreateAndPayStorageOrderResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAndPayStorageOrderResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPayStorageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAndPayStorageOrderResponseBody;
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
      body: CreateAndPayStorageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFreeStorageRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFreeStorageResponseBody extends $tea.Model {
  code?: string;
  data?: EnableFreeStorageResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnableFreeStorageResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFreeStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableFreeStorageResponseBody;
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
      body: EnableFreeStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableStorageOrderRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  orderId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      orderId: 'OrderId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      orderId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableStorageOrderResponseBody extends $tea.Model {
  code?: string;
  data?: EnableStorageOrderResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnableStorageOrderResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableStorageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableStorageOrderResponseBody;
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
      body: EnableStorageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeFreeStorageRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeFreeStorageResponseBody extends $tea.Model {
  code?: string;
  data?: FreezeFreeStorageResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: FreezeFreeStorageResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeFreeStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FreezeFreeStorageResponseBody;
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
      body: FreezeFreeStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeStorageOrderRequest extends $tea.Model {
  deviceName?: string;
  deviceNoOwner?: boolean;
  iotId?: string;
  orderId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceNoOwner: 'DeviceNoOwner',
      iotId: 'IotId',
      orderId: 'OrderId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceNoOwner: 'boolean',
      iotId: 'string',
      orderId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeStorageOrderResponseBody extends $tea.Model {
  code?: string;
  data?: FreezeStorageOrderResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: FreezeStorageOrderResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeStorageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FreezeStorageOrderResponseBody;
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
      body: FreezeStorageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceRequest extends $tea.Model {
  amount?: number;
  productKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      productKey: 'ProductKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      productKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateDeviceResponseBody;
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
      body: GenerateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceByBatchIdRequest extends $tea.Model {
  batchId?: string;
  productKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      productKey: 'ProductKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      productKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceByBatchIdResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateDeviceByBatchIdResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateDeviceByBatchIdResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceByBatchIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateDeviceByBatchIdResponseBody;
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
      body: GenerateDeviceByBatchIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchStatusRequest extends $tea.Model {
  batchId?: string;
  productKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      productKey: 'ProductKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      productKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchStatusResponseBody extends $tea.Model {
  code?: string;
  data?: QueryBatchStatusResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBatchStatusResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBatchStatusResponseBody;
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
      body: QueryBatchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesDownloadUrlRequest extends $tea.Model {
  batchId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDevicesDownloadUrlResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDevicesDownloadUrlResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDevicesDownloadUrlResponseBody;
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
      body: QueryDevicesDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFreeStorageRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFreeStorageResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFreeStorageResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFreeStorageResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFreeStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFreeStorageResponseBody;
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
      body: QueryFreeStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesInfoListRequest extends $tea.Model {
  batchId?: string;
  pageNo?: number;
  pageSize?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesInfoListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryGenerateDevicesInfoListResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryGenerateDevicesInfoListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGenerateDevicesInfoListResponseBody;
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
      body: QueryGenerateDevicesInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesRecordRequest extends $tea.Model {
  endTime?: number;
  pageNo?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesRecordResponseBody extends $tea.Model {
  code?: string;
  data?: QueryGenerateDevicesRecordResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryGenerateDevicesRecordResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGenerateDevicesRecordResponseBody;
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
      body: QueryGenerateDevicesRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageCommodityListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryStorageCommodityListResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryStorageCommodityListResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageCommodityListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryStorageCommodityListResponseBody;
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
      body: QueryStorageCommodityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderRequest extends $tea.Model {
  deviceName?: string;
  deviceNoOwner?: boolean;
  iotId?: string;
  orderId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceNoOwner: 'DeviceNoOwner',
      iotId: 'IotId',
      orderId: 'OrderId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceNoOwner: 'boolean',
      iotId: 'string',
      orderId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderResponseBody extends $tea.Model {
  code?: string;
  data?: QueryStorageOrderResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryStorageOrderResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryStorageOrderResponseBody;
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
      body: QueryStorageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderListRequest extends $tea.Model {
  deviceName?: string;
  deviceNoOwner?: boolean;
  iotId?: string;
  pageNo?: number;
  pageSize?: number;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceNoOwner: 'DeviceNoOwner',
      iotId: 'IotId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceNoOwner: 'boolean',
      iotId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryStorageOrderListResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryStorageOrderListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryStorageOrderListResponseBody;
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
      body: QueryStorageOrderListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferStorageOrderRequest extends $tea.Model {
  dstIotId?: string;
  enableDefaultPlan?: boolean;
  eventRecordDuration?: number;
  eventRecordProlong?: boolean;
  immediateUse?: boolean;
  preRecordDuration?: number;
  srcIotId?: string;
  srcOrderId?: string;
  supportCrossIdentityTransfer?: boolean;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dstIotId: 'DstIotId',
      enableDefaultPlan: 'EnableDefaultPlan',
      eventRecordDuration: 'EventRecordDuration',
      eventRecordProlong: 'EventRecordProlong',
      immediateUse: 'ImmediateUse',
      preRecordDuration: 'PreRecordDuration',
      srcIotId: 'SrcIotId',
      srcOrderId: 'SrcOrderId',
      supportCrossIdentityTransfer: 'SupportCrossIdentityTransfer',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIotId: 'string',
      enableDefaultPlan: 'boolean',
      eventRecordDuration: 'number',
      eventRecordProlong: 'boolean',
      immediateUse: 'boolean',
      preRecordDuration: 'number',
      srcIotId: 'string',
      srcOrderId: 'string',
      supportCrossIdentityTransfer: 'boolean',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferStorageOrderResponseBody extends $tea.Model {
  code?: string;
  data?: TransferStorageOrderResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TransferStorageOrderResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferStorageOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransferStorageOrderResponseBody;
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
      body: TransferStorageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceNameListRequest extends $tea.Model {
  deviceNames?: string[];
  productKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNames: 'DeviceNames',
      productKey: 'ProductKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNames: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceNameListResponseBody extends $tea.Model {
  code?: string;
  data?: UploadDeviceNameListResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadDeviceNameListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceNameListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadDeviceNameListResponseBody;
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
      body: UploadDeviceNameListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindStorageOrderResponseBodyData extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumeFreeStorageResponseBodyData extends $tea.Model {
  consumed?: number;
  endTime?: string;
  endTimeUTC?: string;
  expired?: number;
  lifecycle?: number;
  months?: number;
  remainQuota?: number;
  startTime?: string;
  startTimeUTC?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      consumed: 'Consumed',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      expired: 'Expired',
      lifecycle: 'Lifecycle',
      months: 'Months',
      remainQuota: 'RemainQuota',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      expired: 'number',
      lifecycle: 'number',
      months: 'number',
      remainQuota: 'number',
      startTime: 'string',
      startTimeUTC: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndPayStorageOrderResponseBodyData extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFreeStorageResponseBodyData extends $tea.Model {
  consumed?: number;
  endTime?: string;
  endTimeUTC?: string;
  expired?: number;
  lifecycle?: number;
  months?: number;
  remainQuota?: number;
  startTime?: string;
  startTimeUTC?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      consumed: 'Consumed',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      expired: 'Expired',
      lifecycle: 'Lifecycle',
      months: 'Months',
      remainQuota: 'RemainQuota',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      expired: 'number',
      lifecycle: 'number',
      months: 'number',
      remainQuota: 'number',
      startTime: 'string',
      startTimeUTC: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableStorageOrderResponseBodyData extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeFreeStorageResponseBodyData extends $tea.Model {
  consumed?: number;
  endTime?: string;
  endTimeUTC?: string;
  expired?: number;
  lifecycle?: number;
  months?: number;
  remainQuota?: number;
  startTime?: string;
  startTimeUTC?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      consumed: 'Consumed',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      expired: 'Expired',
      lifecycle: 'Lifecycle',
      months: 'Months',
      remainQuota: 'RemainQuota',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      expired: 'number',
      lifecycle: 'number',
      months: 'number',
      remainQuota: 'number',
      startTime: 'string',
      startTimeUTC: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeStorageOrderResponseBodyData extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceResponseBodyData extends $tea.Model {
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceByBatchIdResponseBodyData extends $tea.Model {
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchStatusResponseBodyDataInvalidDetailList extends $tea.Model {
  deviceName?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchStatusResponseBodyData extends $tea.Model {
  invalidDetailList?: QueryBatchStatusResponseBodyDataInvalidDetailList[];
  invalidList?: string[];
  status?: string;
  validList?: string[];
  static names(): { [key: string]: string } {
    return {
      invalidDetailList: 'InvalidDetailList',
      invalidList: 'InvalidList',
      status: 'Status',
      validList: 'ValidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDetailList: { 'type': 'array', 'itemType': QueryBatchStatusResponseBodyDataInvalidDetailList },
      invalidList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      validList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesDownloadUrlResponseBodyData extends $tea.Model {
  ossDownloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      ossDownloadUrl: 'OssDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDownloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFreeStorageResponseBodyData extends $tea.Model {
  consumed?: number;
  endTime?: string;
  endTimeUTC?: string;
  expired?: number;
  lifecycle?: number;
  months?: number;
  remainQuota?: number;
  startTime?: string;
  startTimeUTC?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      consumed: 'Consumed',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      expired: 'Expired',
      lifecycle: 'Lifecycle',
      months: 'Months',
      remainQuota: 'RemainQuota',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      expired: 'number',
      lifecycle: 'number',
      months: 'number',
      remainQuota: 'number',
      startTime: 'string',
      startTimeUTC: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesInfoListResponseBodyDataListData extends $tea.Model {
  deviceName?: string;
  deviceSecret?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceSecret: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesInfoListResponseBodyData extends $tea.Model {
  listData?: QueryGenerateDevicesInfoListResponseBodyDataListData[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listData: 'ListData',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listData: { 'type': 'array', 'itemType': QueryGenerateDevicesInfoListResponseBodyDataListData },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesRecordResponseBodyDataListData extends $tea.Model {
  applyDeviceCount?: number;
  batchId?: string;
  batchStatus?: string;
  createTime?: number;
  networkType?: string;
  operateUid?: number;
  productKey?: string;
  productName?: string;
  specCode?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      applyDeviceCount: 'ApplyDeviceCount',
      batchId: 'BatchId',
      batchStatus: 'BatchStatus',
      createTime: 'CreateTime',
      networkType: 'NetworkType',
      operateUid: 'OperateUid',
      productKey: 'ProductKey',
      productName: 'ProductName',
      specCode: 'SpecCode',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDeviceCount: 'number',
      batchId: 'string',
      batchStatus: 'string',
      createTime: 'number',
      networkType: 'string',
      operateUid: 'number',
      productKey: 'string',
      productName: 'string',
      specCode: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGenerateDevicesRecordResponseBodyData extends $tea.Model {
  listData?: QueryGenerateDevicesRecordResponseBodyDataListData[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listData: 'ListData',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listData: { 'type': 'array', 'itemType': QueryGenerateDevicesRecordResponseBodyDataListData },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageCommodityListResponseBodyData extends $tea.Model {
  commodityCode?: string;
  commodityName?: string;
  lifecycle?: number;
  months?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      lifecycle: 'Lifecycle',
      months: 'Months',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      lifecycle: 'number',
      months: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderResponseBodyData extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderListResponseBodyDataStorageOrderList extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStorageOrderListResponseBodyData extends $tea.Model {
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  storageOrderList?: QueryStorageOrderListResponseBodyDataStorageOrderList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      storageOrderList: 'StorageOrderList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      storageOrderList: { 'type': 'array', 'itemType': QueryStorageOrderListResponseBodyDataStorageOrderList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferStorageOrderResponseBodyData extends $tea.Model {
  commodityCode?: string;
  copies?: number;
  endTime?: string;
  endTimeUTC?: string;
  identityId?: string;
  iotId?: string;
  orderId?: string;
  orderType?: number;
  outOrderNo?: string;
  paymentStatus?: number;
  preConsume?: number;
  price?: string;
  recordType?: number;
  specification?: string;
  startTime?: string;
  startTimeUTC?: string;
  status?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      copies: 'Copies',
      endTime: 'EndTime',
      endTimeUTC: 'EndTimeUTC',
      identityId: 'IdentityId',
      iotId: 'IotId',
      orderId: 'OrderId',
      orderType: 'OrderType',
      outOrderNo: 'OutOrderNo',
      paymentStatus: 'PaymentStatus',
      preConsume: 'PreConsume',
      price: 'Price',
      recordType: 'RecordType',
      specification: 'Specification',
      startTime: 'StartTime',
      startTimeUTC: 'StartTimeUTC',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      copies: 'number',
      endTime: 'string',
      endTimeUTC: 'string',
      identityId: 'string',
      iotId: 'string',
      orderId: 'string',
      orderType: 'number',
      outOrderNo: 'string',
      paymentStatus: 'number',
      preConsume: 'number',
      price: 'string',
      recordType: 'number',
      specification: 'string',
      startTime: 'string',
      startTimeUTC: 'string',
      status: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceNameListResponseBodyDataInvalidDetailList extends $tea.Model {
  deviceName?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceNameListResponseBodyData extends $tea.Model {
  batchId?: string;
  invalidDetailList?: UploadDeviceNameListResponseBodyDataInvalidDetailList[];
  invalidDeviceNameList?: string[];
  repeatedDeviceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      invalidDetailList: 'InvalidDetailList',
      invalidDeviceNameList: 'InvalidDeviceNameList',
      repeatedDeviceNameList: 'RepeatedDeviceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      invalidDetailList: { 'type': 'array', 'itemType': UploadDeviceNameListResponseBodyDataInvalidDetailList },
      invalidDeviceNameList: { 'type': 'array', 'itemType': 'string' },
      repeatedDeviceNameList: { 'type': 'array', 'itemType': 'string' },
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
      'ap-northeast-1': "linkvisual.aliyuncs.com",
      'ap-northeast-2-pop': "linkvisual.aliyuncs.com",
      'ap-south-1': "linkvisual.aliyuncs.com",
      'ap-southeast-1': "linkvisual.aliyuncs.com",
      'ap-southeast-2': "linkvisual.aliyuncs.com",
      'ap-southeast-3': "linkvisual.aliyuncs.com",
      'ap-southeast-5': "linkvisual.aliyuncs.com",
      'cn-beijing': "linkvisual.aliyuncs.com",
      'cn-beijing-finance-1': "linkvisual.aliyuncs.com",
      'cn-beijing-finance-pop': "linkvisual.aliyuncs.com",
      'cn-beijing-gov-1': "linkvisual.aliyuncs.com",
      'cn-beijing-nu16-b01': "linkvisual.aliyuncs.com",
      'cn-chengdu': "linkvisual.aliyuncs.com",
      'cn-edge-1': "linkvisual.aliyuncs.com",
      'cn-fujian': "linkvisual.aliyuncs.com",
      'cn-haidian-cm12-c01': "linkvisual.aliyuncs.com",
      'cn-hangzhou-bj-b01': "linkvisual.aliyuncs.com",
      'cn-hangzhou-finance': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "linkvisual.aliyuncs.com",
      'cn-hangzhou-test-306': "linkvisual.aliyuncs.com",
      'cn-hongkong': "linkvisual.aliyuncs.com",
      'cn-hongkong-finance-pop': "linkvisual.aliyuncs.com",
      'cn-huhehaote': "linkvisual.aliyuncs.com",
      'cn-north-2-gov-1': "linkvisual.aliyuncs.com",
      'cn-qingdao': "linkvisual.aliyuncs.com",
      'cn-qingdao-nebula': "linkvisual.aliyuncs.com",
      'cn-shanghai-et15-b01': "linkvisual.aliyuncs.com",
      'cn-shanghai-et2-b01': "linkvisual.aliyuncs.com",
      'cn-shanghai-finance-1': "linkvisual.aliyuncs.com",
      'cn-shanghai-inner': "linkvisual.aliyuncs.com",
      'cn-shanghai-internal-test-1': "linkvisual.aliyuncs.com",
      'cn-shenzhen': "linkvisual.aliyuncs.com",
      'cn-shenzhen-finance-1': "linkvisual.aliyuncs.com",
      'cn-shenzhen-inner': "linkvisual.aliyuncs.com",
      'cn-shenzhen-st4-d01': "linkvisual.aliyuncs.com",
      'cn-shenzhen-su18-b01': "linkvisual.aliyuncs.com",
      'cn-wuhan': "linkvisual.aliyuncs.com",
      'cn-yushanfang': "linkvisual.aliyuncs.com",
      'cn-zhangbei-na61-b01': "linkvisual.aliyuncs.com",
      'cn-zhangjiakou': "linkvisual.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "linkvisual.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "linkvisual.aliyuncs.com",
      'eu-central-1': "linkvisual.aliyuncs.com",
      'eu-west-1': "linkvisual.aliyuncs.com",
      'eu-west-1-oxs': "linkvisual.aliyuncs.com",
      'me-east-1': "linkvisual.aliyuncs.com",
      'rus-west-1-pop': "linkvisual.aliyuncs.com",
      'us-east-1': "linkvisual.aliyuncs.com",
      'us-west-1': "linkvisual.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkvisual", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async bindStorageOrderWithOptions(request: BindStorageOrderRequest, runtime: $Util.RuntimeOptions): Promise<BindStorageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.enableDefaultPlan)) {
      query["EnableDefaultPlan"] = request.enableDefaultPlan;
    }

    if (!Util.isUnset(request.eventRecordDuration)) {
      query["EventRecordDuration"] = request.eventRecordDuration;
    }

    if (!Util.isUnset(request.eventRecordProlong)) {
      query["EventRecordProlong"] = request.eventRecordProlong;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.maxRecordFileDuration)) {
      query["MaxRecordFileDuration"] = request.maxRecordFileDuration;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindStorageOrder",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindStorageOrderResponse>(await this.callApi(params, req, runtime), new BindStorageOrderResponse({}));
  }

  async bindStorageOrder(request: BindStorageOrderRequest): Promise<BindStorageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindStorageOrderWithOptions(request, runtime);
  }

  async checkFreeStorageValidWithOptions(request: CheckFreeStorageValidRequest, runtime: $Util.RuntimeOptions): Promise<CheckFreeStorageValidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckFreeStorageValid",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckFreeStorageValidResponse>(await this.callApi(params, req, runtime), new CheckFreeStorageValidResponse({}));
  }

  async checkFreeStorageValid(request: CheckFreeStorageValidRequest): Promise<CheckFreeStorageValidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFreeStorageValidWithOptions(request, runtime);
  }

  async consumeFreeStorageWithOptions(request: ConsumeFreeStorageRequest, runtime: $Util.RuntimeOptions): Promise<ConsumeFreeStorageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.enableDefaultPlan)) {
      query["EnableDefaultPlan"] = request.enableDefaultPlan;
    }

    if (!Util.isUnset(request.eventRecordDuration)) {
      query["EventRecordDuration"] = request.eventRecordDuration;
    }

    if (!Util.isUnset(request.eventRecordProlong)) {
      query["EventRecordProlong"] = request.eventRecordProlong;
    }

    if (!Util.isUnset(request.immediateUse)) {
      query["ImmediateUse"] = request.immediateUse;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.quota)) {
      query["Quota"] = request.quota;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConsumeFreeStorage",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConsumeFreeStorageResponse>(await this.callApi(params, req, runtime), new ConsumeFreeStorageResponse({}));
  }

  async consumeFreeStorage(request: ConsumeFreeStorageRequest): Promise<ConsumeFreeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.consumeFreeStorageWithOptions(request, runtime);
  }

  async createAndPayStorageOrderWithOptions(request: CreateAndPayStorageOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateAndPayStorageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.copies)) {
      query["Copies"] = request.copies;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceNoOwner)) {
      query["DeviceNoOwner"] = request.deviceNoOwner;
    }

    if (!Util.isUnset(request.enableDefaultPlan)) {
      query["EnableDefaultPlan"] = request.enableDefaultPlan;
    }

    if (!Util.isUnset(request.eventRecordDuration)) {
      query["EventRecordDuration"] = request.eventRecordDuration;
    }

    if (!Util.isUnset(request.eventRecordProlong)) {
      query["EventRecordProlong"] = request.eventRecordProlong;
    }

    if (!Util.isUnset(request.immediateUse)) {
      query["ImmediateUse"] = request.immediateUse;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.maxRecordFileDuration)) {
      query["MaxRecordFileDuration"] = request.maxRecordFileDuration;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndPayStorageOrder",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAndPayStorageOrderResponse>(await this.callApi(params, req, runtime), new CreateAndPayStorageOrderResponse({}));
  }

  async createAndPayStorageOrder(request: CreateAndPayStorageOrderRequest): Promise<CreateAndPayStorageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAndPayStorageOrderWithOptions(request, runtime);
  }

  async enableFreeStorageWithOptions(request: EnableFreeStorageRequest, runtime: $Util.RuntimeOptions): Promise<EnableFreeStorageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableFreeStorage",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableFreeStorageResponse>(await this.callApi(params, req, runtime), new EnableFreeStorageResponse({}));
  }

  async enableFreeStorage(request: EnableFreeStorageRequest): Promise<EnableFreeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableFreeStorageWithOptions(request, runtime);
  }

  async enableStorageOrderWithOptions(request: EnableStorageOrderRequest, runtime: $Util.RuntimeOptions): Promise<EnableStorageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableStorageOrder",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableStorageOrderResponse>(await this.callApi(params, req, runtime), new EnableStorageOrderResponse({}));
  }

  async enableStorageOrder(request: EnableStorageOrderRequest): Promise<EnableStorageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableStorageOrderWithOptions(request, runtime);
  }

  async freezeFreeStorageWithOptions(request: FreezeFreeStorageRequest, runtime: $Util.RuntimeOptions): Promise<FreezeFreeStorageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FreezeFreeStorage",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FreezeFreeStorageResponse>(await this.callApi(params, req, runtime), new FreezeFreeStorageResponse({}));
  }

  async freezeFreeStorage(request: FreezeFreeStorageRequest): Promise<FreezeFreeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.freezeFreeStorageWithOptions(request, runtime);
  }

  async freezeStorageOrderWithOptions(request: FreezeStorageOrderRequest, runtime: $Util.RuntimeOptions): Promise<FreezeStorageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceNoOwner)) {
      query["DeviceNoOwner"] = request.deviceNoOwner;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FreezeStorageOrder",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FreezeStorageOrderResponse>(await this.callApi(params, req, runtime), new FreezeStorageOrderResponse({}));
  }

  async freezeStorageOrder(request: FreezeStorageOrderRequest): Promise<FreezeStorageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.freezeStorageOrderWithOptions(request, runtime);
  }

  async generateDeviceWithOptions(request: GenerateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDevice",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateDeviceResponse>(await this.callApi(params, req, runtime), new GenerateDeviceResponse({}));
  }

  async generateDevice(request: GenerateDeviceRequest): Promise<GenerateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDeviceWithOptions(request, runtime);
  }

  async generateDeviceByBatchIdWithOptions(request: GenerateDeviceByBatchIdRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDeviceByBatchIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDeviceByBatchId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateDeviceByBatchIdResponse>(await this.callApi(params, req, runtime), new GenerateDeviceByBatchIdResponse({}));
  }

  async generateDeviceByBatchId(request: GenerateDeviceByBatchIdRequest): Promise<GenerateDeviceByBatchIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDeviceByBatchIdWithOptions(request, runtime);
  }

  async queryBatchStatusWithOptions(request: QueryBatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryBatchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBatchStatus",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBatchStatusResponse>(await this.callApi(params, req, runtime), new QueryBatchStatusResponse({}));
  }

  async queryBatchStatus(request: QueryBatchStatusRequest): Promise<QueryBatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBatchStatusWithOptions(request, runtime);
  }

  async queryDevicesDownloadUrlWithOptions(request: QueryDevicesDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicesDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDevicesDownloadUrl",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDevicesDownloadUrlResponse>(await this.callApi(params, req, runtime), new QueryDevicesDownloadUrlResponse({}));
  }

  async queryDevicesDownloadUrl(request: QueryDevicesDownloadUrlRequest): Promise<QueryDevicesDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesDownloadUrlWithOptions(request, runtime);
  }

  async queryFreeStorageWithOptions(request: QueryFreeStorageRequest, runtime: $Util.RuntimeOptions): Promise<QueryFreeStorageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFreeStorage",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFreeStorageResponse>(await this.callApi(params, req, runtime), new QueryFreeStorageResponse({}));
  }

  async queryFreeStorage(request: QueryFreeStorageRequest): Promise<QueryFreeStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFreeStorageWithOptions(request, runtime);
  }

  async queryGenerateDevicesInfoListWithOptions(request: QueryGenerateDevicesInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryGenerateDevicesInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGenerateDevicesInfoList",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGenerateDevicesInfoListResponse>(await this.callApi(params, req, runtime), new QueryGenerateDevicesInfoListResponse({}));
  }

  async queryGenerateDevicesInfoList(request: QueryGenerateDevicesInfoListRequest): Promise<QueryGenerateDevicesInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGenerateDevicesInfoListWithOptions(request, runtime);
  }

  async queryGenerateDevicesRecordWithOptions(request: QueryGenerateDevicesRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryGenerateDevicesRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryGenerateDevicesRecord",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGenerateDevicesRecordResponse>(await this.callApi(params, req, runtime), new QueryGenerateDevicesRecordResponse({}));
  }

  async queryGenerateDevicesRecord(request: QueryGenerateDevicesRecordRequest): Promise<QueryGenerateDevicesRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGenerateDevicesRecordWithOptions(request, runtime);
  }

  async queryStorageCommodityListWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryStorageCommodityListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryStorageCommodityList",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryStorageCommodityListResponse>(await this.callApi(params, req, runtime), new QueryStorageCommodityListResponse({}));
  }

  async queryStorageCommodityList(): Promise<QueryStorageCommodityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStorageCommodityListWithOptions(runtime);
  }

  async queryStorageOrderWithOptions(request: QueryStorageOrderRequest, runtime: $Util.RuntimeOptions): Promise<QueryStorageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceNoOwner)) {
      query["DeviceNoOwner"] = request.deviceNoOwner;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryStorageOrder",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryStorageOrderResponse>(await this.callApi(params, req, runtime), new QueryStorageOrderResponse({}));
  }

  async queryStorageOrder(request: QueryStorageOrderRequest): Promise<QueryStorageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStorageOrderWithOptions(request, runtime);
  }

  async queryStorageOrderListWithOptions(request: QueryStorageOrderListRequest, runtime: $Util.RuntimeOptions): Promise<QueryStorageOrderListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.deviceNoOwner)) {
      query["DeviceNoOwner"] = request.deviceNoOwner;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryStorageOrderList",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryStorageOrderListResponse>(await this.callApi(params, req, runtime), new QueryStorageOrderListResponse({}));
  }

  async queryStorageOrderList(request: QueryStorageOrderListRequest): Promise<QueryStorageOrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStorageOrderListWithOptions(request, runtime);
  }

  async transferStorageOrderWithOptions(request: TransferStorageOrderRequest, runtime: $Util.RuntimeOptions): Promise<TransferStorageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dstIotId)) {
      query["DstIotId"] = request.dstIotId;
    }

    if (!Util.isUnset(request.enableDefaultPlan)) {
      query["EnableDefaultPlan"] = request.enableDefaultPlan;
    }

    if (!Util.isUnset(request.eventRecordDuration)) {
      query["EventRecordDuration"] = request.eventRecordDuration;
    }

    if (!Util.isUnset(request.eventRecordProlong)) {
      query["EventRecordProlong"] = request.eventRecordProlong;
    }

    if (!Util.isUnset(request.immediateUse)) {
      query["ImmediateUse"] = request.immediateUse;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.srcIotId)) {
      query["SrcIotId"] = request.srcIotId;
    }

    if (!Util.isUnset(request.srcOrderId)) {
      query["SrcOrderId"] = request.srcOrderId;
    }

    if (!Util.isUnset(request.supportCrossIdentityTransfer)) {
      query["SupportCrossIdentityTransfer"] = request.supportCrossIdentityTransfer;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferStorageOrder",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferStorageOrderResponse>(await this.callApi(params, req, runtime), new TransferStorageOrderResponse({}));
  }

  async transferStorageOrder(request: TransferStorageOrderRequest): Promise<TransferStorageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferStorageOrderWithOptions(request, runtime);
  }

  async uploadDeviceNameListWithOptions(request: UploadDeviceNameListRequest, runtime: $Util.RuntimeOptions): Promise<UploadDeviceNameListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceNames)) {
      body["DeviceNames"] = request.deviceNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadDeviceNameList",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDeviceNameListResponse>(await this.callApi(params, req, runtime), new UploadDeviceNameListResponse({}));
  }

  async uploadDeviceNameList(request: UploadDeviceNameListRequest): Promise<UploadDeviceNameListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDeviceNameListWithOptions(request, runtime);
  }

}
