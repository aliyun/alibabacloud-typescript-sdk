// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyDataModelConfigInfoRequest extends $tea.Model {
  apiVersion?: string;
  configuration?: string;
  dataModelCode?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      configuration: 'Configuration',
      dataModelCode: 'DataModelCode',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      configuration: 'string',
      dataModelCode: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataModelConfigInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyDataModelConfigInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyDataModelConfigInfoResponseBody;
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
      body: ApplyDataModelConfigInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDataRequest extends $tea.Model {
  apiVersion?: string;
  businessId?: string;
  key?: string;
  productKey?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      businessId: 'BusinessId',
      key: 'Key',
      productKey: 'ProductKey',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      businessId: 'string',
      key: 'string',
      productKey: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDataResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachDataResponseBody;
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
      body: AttachDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDataWithSignatureRequest extends $tea.Model {
  apiVersion?: string;
  businessId?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  key?: string;
  productKey?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      businessId: 'BusinessId',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      key: 'Key',
      productKey: 'ProductKey',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      businessId: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      key: 'string',
      productKey: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDataWithSignatureResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDataWithSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachDataWithSignatureResponseBody;
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
      body: AttachDataWithSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  deviceGroupId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeDeviceResponseBody;
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
      body: AuthorizeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeDeviceGroupRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeDeviceGroupResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AuthorizeDeviceGroupResponseBody;
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
      body: AuthorizeDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  phaseDataList?: { [key: string]: any };
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      phaseDataList: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      phaseDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  phaseDataListShrink?: string;
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      phaseDataListShrink: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      phaseDataListShrink: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchUploadMPCoSPhaseDigestInfoResponseBody;
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
      body: BatchUploadMPCoSPhaseDigestInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoByDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseDataList?: { [key: string]: any };
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseDataList: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoByDeviceShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseDataListShrink?: string;
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseDataListShrink: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseDataListShrink: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoByDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseDigestInfoByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchUploadMPCoSPhaseDigestInfoByDeviceResponseBody;
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
      body: BatchUploadMPCoSPhaseDigestInfoByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  phaseDataList?: { [key: string]: any };
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      phaseDataList: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      phaseDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  phaseDataListShrink?: string;
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      phaseDataListShrink: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      phaseDataListShrink: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchUploadMPCoSPhaseTextInfoResponseBody;
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
      body: BatchUploadMPCoSPhaseTextInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoByDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseDataList?: { [key: string]: any };
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseDataList: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoByDeviceShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseDataListShrink?: string;
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseDataListShrink: 'PhaseDataList',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseDataListShrink: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoByDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUploadMPCoSPhaseTextInfoByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchUploadMPCoSPhaseTextInfoByDeviceResponseBody;
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
      body: BatchUploadMPCoSPhaseTextInfoByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPCoSPhaseRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  name?: string;
  phaseGroupId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      name: 'Name',
      phaseGroupId: 'PhaseGroupId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      name: 'string',
      phaseGroupId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPCoSPhaseResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPCoSPhaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMPCoSPhaseResponseBody;
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
      body: CreateMPCoSPhaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPCoSPhaseGroupRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  name?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPCoSPhaseGroupResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPCoSPhaseGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMPCoSPhaseGroupResponseBody;
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
      body: CreateMPCoSPhaseGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberContact?: string;
  memberName?: string;
  memberPhone?: string;
  memberUid?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberContact: 'MemberContact',
      memberName: 'MemberName',
      memberPhone: 'MemberPhone',
      memberUid: 'MemberUid',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberContact: 'string',
      memberName: 'string',
      memberPhone: 'string',
      memberUid: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMemberResponseBody;
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
      body: CreateMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeCapacityInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCapacityInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCapacityInfoResponseBody;
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
      body: DescribeCapacityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSAuthorizedInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberId?: string;
  phaseGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberId: 'MemberId',
      phaseGroupId: 'PhaseGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberId: 'string',
      phaseGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSAuthorizedInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeMPCoSAuthorizedInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeMPCoSAuthorizedInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSAuthorizedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMPCoSAuthorizedInfoResponseBody;
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
      body: DescribeMPCoSAuthorizedInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSPhaseInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  phaseGroupId?: string;
  phaseId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSPhaseInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeMPCoSPhaseInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeMPCoSPhaseInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSPhaseInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMPCoSPhaseInfoResponseBody;
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
      body: DescribeMPCoSPhaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSResourceInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSResourceInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeMPCoSResourceInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeMPCoSResourceInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSResourceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMPCoSResourceInfoResponseBody;
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
      body: DescribeMPCoSResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberCapacityInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberCapacityInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeMemberCapacityInfoResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeMemberCapacityInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberCapacityInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMemberCapacityInfoResponseBody;
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
      body: DescribeMemberCapacityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeResourceInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeResourceInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResourceInfoResponseBody;
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
      body: DescribeResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockChainInfoRequest extends $tea.Model {
  apiVersion?: string;
  businessId?: string;
  key?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      businessId: 'BusinessId',
      key: 'Key',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      businessId: 'string',
      key: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockChainInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlockChainInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBlockChainInfoResponseBody;
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
      body: GetBlockChainInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataRequest extends $tea.Model {
  apiVersion?: string;
  businessId?: string;
  key?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      businessId: 'BusinessId',
      key: 'Key',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      businessId: 'string',
      key: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDataResponseBody;
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
      body: GetDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataModelConfigInfoRequest extends $tea.Model {
  apiVersion?: string;
  dataModelCode?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      dataModelCode: 'DataModelCode',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      dataModelCode: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataModelConfigInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataModelConfigInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDataModelConfigInfoResponseBody;
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
      body: GetDataModelConfigInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataCountRequest extends $tea.Model {
  apiVersion?: string;
  endTime?: number;
  key?: string;
  productKey?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      endTime: 'EndTime',
      key: 'Key',
      productKey: 'ProductKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      endTime: 'number',
      key: 'string',
      productKey: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataCountResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHistoryDataCountResponseBody;
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
      body: GetHistoryDataCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataListRequest extends $tea.Model {
  apiVersion?: string;
  currentPage?: number;
  endTime?: number;
  key?: string;
  pageSize?: number;
  productKey?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      key: 'Key',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      currentPage: 'number',
      endTime: 'number',
      key: 'string',
      pageSize: 'number',
      productKey: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataListResponseBody extends $tea.Model {
  code?: number;
  data?: GetHistoryDataListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetHistoryDataListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHistoryDataListResponseBody;
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
      body: GetHistoryDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentDataModelsRequest extends $tea.Model {
  apiVersion?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentDataModelsResponseBody extends $tea.Model {
  code?: number;
  data?: ListDependentDataModelsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDependentDataModelsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentDataModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDependentDataModelsResponseBody;
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
      body: ListDependentDataModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  deviceGroupId?: string;
  iotId?: string;
  num?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      deviceGroupId: 'DeviceGroupId',
      iotId: 'IotId',
      num: 'Num',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      deviceGroupId: 'string',
      iotId: 'string',
      num: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: ListDeviceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDeviceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceResponseBody;
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
      body: ListDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  num?: number;
  productKey?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      num: 'Num',
      productKey: 'ProductKey',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      num: 'number',
      productKey: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupResponseBody extends $tea.Model {
  code?: number;
  data?: ListDeviceGroupResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListDeviceGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceGroupResponseBody;
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
      body: ListDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  name?: string;
  num?: number;
  phaseGroupId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      name: 'Name',
      num: 'Num',
      phaseGroupId: 'PhaseGroupId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      name: 'string',
      num: 'number',
      phaseGroupId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseResponseBody extends $tea.Model {
  code?: number;
  data?: ListMPCoSPhaseResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListMPCoSPhaseResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMPCoSPhaseResponseBody;
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
      body: ListMPCoSPhaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseGroupRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  name?: string;
  num?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      name: 'Name',
      num: 'Num',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      name: 'string',
      num: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseGroupResponseBody extends $tea.Model {
  code?: number;
  data?: ListMPCoSPhaseGroupResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListMPCoSPhaseGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMPCoSPhaseGroupResponseBody;
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
      body: ListMPCoSPhaseGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseHistoryRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  endTime?: number;
  num?: number;
  phaseGroupId?: string;
  phaseId?: string;
  size?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      endTime: 'EndTime',
      num: 'Num',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      endTime: 'number',
      num: 'number',
      phaseGroupId: 'string',
      phaseId: 'string',
      size: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseHistoryResponseBody extends $tea.Model {
  code?: number;
  data?: ListMPCoSPhaseHistoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListMPCoSPhaseHistoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMPCoSPhaseHistoryResponseBody;
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
      body: ListMPCoSPhaseHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberUid?: string;
  num?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberUid: 'MemberUid',
      num: 'Num',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberUid: 'string',
      num: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberResponseBody extends $tea.Model {
  code?: number;
  data?: ListMemberResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListMemberResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMemberResponseBody;
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
      body: ListMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiPartyCollaborationChainRequest extends $tea.Model {
  apiVersion?: string;
  name?: string;
  num?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      name: 'Name',
      num: 'Num',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      name: 'string',
      num: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiPartyCollaborationChainResponseBody extends $tea.Model {
  code?: number;
  data?: ListMultiPartyCollaborationChainResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListMultiPartyCollaborationChainResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiPartyCollaborationChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMultiPartyCollaborationChainResponseBody;
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
      body: ListMultiPartyCollaborationChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPSMemberDataTypeCodeRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberUid?: string;
  num?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberUid: 'MemberUid',
      num: 'Num',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberUid: 'string',
      num: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPSMemberDataTypeCodeResponseBody extends $tea.Model {
  code?: number;
  data?: ListPSMemberDataTypeCodeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListPSMemberDataTypeCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPSMemberDataTypeCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPSMemberDataTypeCodeResponseBody;
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
      body: ListPSMemberDataTypeCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProofChainRequest extends $tea.Model {
  apiVersion?: string;
  name?: string;
  num?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      name: 'Name',
      num: 'Num',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      name: 'string',
      num: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProofChainResponseBody extends $tea.Model {
  code?: number;
  data?: ListProofChainResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListProofChainResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProofChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProofChainResponseBody;
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
      body: ListProofChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMemberRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMemberResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockMemberResponseBody;
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
      body: LockMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPCoSPhaseRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  name?: string;
  phaseId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      name: 'Name',
      phaseId: 'PhaseId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      name: 'string',
      phaseId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPCoSPhaseResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPCoSPhaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyMPCoSPhaseResponseBody;
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
      body: ModifyMPCoSPhaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPCoSPhaseGroupRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  name?: string;
  phaseGroupId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      name: 'Name',
      phaseGroupId: 'PhaseGroupId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      name: 'string',
      phaseGroupId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPCoSPhaseGroupResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPCoSPhaseGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyMPCoSPhaseGroupResponseBody;
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
      body: ModifyMPCoSPhaseGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberContact?: string;
  memberId?: string;
  memberName?: string;
  memberPhone?: string;
  memberUid?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberContact: 'MemberContact',
      memberId: 'MemberId',
      memberName: 'MemberName',
      memberPhone: 'MemberPhone',
      memberUid: 'MemberUid',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberContact: 'string',
      memberId: 'string',
      memberName: 'string',
      memberPhone: 'string',
      memberUid: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyMemberResponseBody;
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
      body: ModifyMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceGroupRequest extends $tea.Model {
  apiVersion?: string;
  authorizeType?: string;
  bizChainId?: string;
  deviceGroupName?: string;
  productKey?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authorizeType: 'AuthorizeType',
      bizChainId: 'BizChainId',
      deviceGroupName: 'DeviceGroupName',
      productKey: 'ProductKey',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authorizeType: 'string',
      bizChainId: 'string',
      deviceGroupName: 'string',
      productKey: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceGroupResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterDeviceGroupResponseBody;
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
      body: RegisterDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataRequest extends $tea.Model {
  apiVersion?: string;
  key?: string;
  productKey?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      key: 'Key',
      productKey: 'ProductKey',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      key: 'string',
      productKey: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDataResponseBody;
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
      body: SetDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataWithSignatureRequest extends $tea.Model {
  apiVersion?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  key?: string;
  productKey?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      key: 'Key',
      productKey: 'ProductKey',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      key: 'string',
      productKey: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataWithSignatureResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataWithSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDataWithSignatureResponseBody;
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
      body: SetDataWithSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAuthorizeDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  deviceGroupId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAuthorizeDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAuthorizeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnAuthorizeDeviceResponseBody;
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
      body: UnAuthorizeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAuthorizeDeviceGroupRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAuthorizeDeviceGroupResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnAuthorizeDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnAuthorizeDeviceGroupResponseBody;
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
      body: UnAuthorizeDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockMemberRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockMemberResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnLockMemberResponseBody;
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
      body: UnLockMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPCoSAuthorizedInfoRequest extends $tea.Model {
  apiVersion?: string;
  authorizedPhaseList?: { [key: string]: any };
  bizChainId?: string;
  memberId?: string;
  phaseGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authorizedPhaseList: 'AuthorizedPhaseList',
      bizChainId: 'BizChainId',
      memberId: 'MemberId',
      phaseGroupId: 'PhaseGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authorizedPhaseList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bizChainId: 'string',
      memberId: 'string',
      phaseGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPCoSAuthorizedInfoShrinkRequest extends $tea.Model {
  apiVersion?: string;
  authorizedPhaseListShrink?: string;
  bizChainId?: string;
  memberId?: string;
  phaseGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authorizedPhaseListShrink: 'AuthorizedPhaseList',
      bizChainId: 'BizChainId',
      memberId: 'MemberId',
      phaseGroupId: 'PhaseGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authorizedPhaseListShrink: 'string',
      bizChainId: 'string',
      memberId: 'string',
      phaseGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPCoSAuthorizedInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPCoSAuthorizedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMPCoSAuthorizedInfoResponseBody;
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
      body: UpdateMPCoSAuthorizedInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataList: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataListShrink: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMPCoSPhaseDigestInfoResponseBody;
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
      body: UploadMPCoSPhaseDigestInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoByDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataList: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoByDeviceShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataListShrink: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoByDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseDigestInfoByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMPCoSPhaseDigestInfoByDeviceResponseBody;
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
      body: UploadMPCoSPhaseDigestInfoByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataList: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataListShrink: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMPCoSPhaseTextInfoResponseBody;
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
      body: UploadMPCoSPhaseTextInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoByDeviceRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataList: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoByDeviceShrinkRequest extends $tea.Model {
  apiVersion?: string;
  bizChainId?: string;
  dataKey?: string;
  dataSeq?: string;
  iotAuthType?: string;
  iotDataDigest?: string;
  iotId?: string;
  iotIdServiceProvider?: string;
  iotIdSource?: string;
  iotSignature?: string;
  phaseData?: string;
  phaseGroupId?: string;
  phaseId?: string;
  relatedDataListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      bizChainId: 'BizChainId',
      dataKey: 'DataKey',
      dataSeq: 'DataSeq',
      iotAuthType: 'IotAuthType',
      iotDataDigest: 'IotDataDigest',
      iotId: 'IotId',
      iotIdServiceProvider: 'IotIdServiceProvider',
      iotIdSource: 'IotIdSource',
      iotSignature: 'IotSignature',
      phaseData: 'PhaseData',
      phaseGroupId: 'PhaseGroupId',
      phaseId: 'PhaseId',
      relatedDataListShrink: 'RelatedDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      bizChainId: 'string',
      dataKey: 'string',
      dataSeq: 'string',
      iotAuthType: 'string',
      iotDataDigest: 'string',
      iotId: 'string',
      iotIdServiceProvider: 'string',
      iotIdSource: 'string',
      iotSignature: 'string',
      phaseData: 'string',
      phaseGroupId: 'string',
      phaseId: 'string',
      relatedDataListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoByDeviceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMPCoSPhaseTextInfoByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMPCoSPhaseTextInfoByDeviceResponseBody;
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
      body: UploadMPCoSPhaseTextInfoByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapacityInfoResponseBodyData extends $tea.Model {
  capacityQuota?: number;
  countQuota?: number;
  memberUsedCapacity?: number;
  memberUsedCount?: number;
  usedCapacity?: number;
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityQuota: 'CapacityQuota',
      countQuota: 'CountQuota',
      memberUsedCapacity: 'MemberUsedCapacity',
      memberUsedCount: 'MemberUsedCount',
      usedCapacity: 'UsedCapacity',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityQuota: 'number',
      countQuota: 'number',
      memberUsedCapacity: 'number',
      memberUsedCount: 'number',
      usedCapacity: 'number',
      usedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSAuthorizedInfoResponseBodyDataAuthorizedPhaseList extends $tea.Model {
  phaseId?: string;
  phaseName?: string;
  static names(): { [key: string]: string } {
    return {
      phaseId: 'PhaseId',
      phaseName: 'PhaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phaseId: 'string',
      phaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSAuthorizedInfoResponseBodyDataUnAuthorizedPhaseList extends $tea.Model {
  phaseId?: string;
  phaseName?: string;
  static names(): { [key: string]: string } {
    return {
      phaseId: 'PhaseId',
      phaseName: 'PhaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phaseId: 'string',
      phaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSAuthorizedInfoResponseBodyData extends $tea.Model {
  authorizedPhaseList?: DescribeMPCoSAuthorizedInfoResponseBodyDataAuthorizedPhaseList[];
  unAuthorizedPhaseList?: DescribeMPCoSAuthorizedInfoResponseBodyDataUnAuthorizedPhaseList[];
  static names(): { [key: string]: string } {
    return {
      authorizedPhaseList: 'AuthorizedPhaseList',
      unAuthorizedPhaseList: 'UnAuthorizedPhaseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedPhaseList: { 'type': 'array', 'itemType': DescribeMPCoSAuthorizedInfoResponseBodyDataAuthorizedPhaseList },
      unAuthorizedPhaseList: { 'type': 'array', 'itemType': DescribeMPCoSAuthorizedInfoResponseBodyDataUnAuthorizedPhaseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSPhaseInfoResponseBodyDataRelatedDataList extends $tea.Model {
  relatedDataKey?: string;
  relatedDataSeq?: string;
  relatedPhaseDataHash?: string;
  relatedPhaseId?: string;
  relatedPhaseName?: string;
  static names(): { [key: string]: string } {
    return {
      relatedDataKey: 'RelatedDataKey',
      relatedDataSeq: 'RelatedDataSeq',
      relatedPhaseDataHash: 'RelatedPhaseDataHash',
      relatedPhaseId: 'RelatedPhaseId',
      relatedPhaseName: 'RelatedPhaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedDataKey: 'string',
      relatedDataSeq: 'string',
      relatedPhaseDataHash: 'string',
      relatedPhaseId: 'string',
      relatedPhaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSPhaseInfoResponseBodyData extends $tea.Model {
  blockHash?: string;
  blockNumber?: number;
  dataHash?: string;
  dataValue?: string;
  iotId?: string;
  previousHash?: string;
  productKey?: string;
  relatedDataList?: DescribeMPCoSPhaseInfoResponseBodyDataRelatedDataList[];
  timestamp?: number;
  transactionHash?: string;
  static names(): { [key: string]: string } {
    return {
      blockHash: 'BlockHash',
      blockNumber: 'BlockNumber',
      dataHash: 'DataHash',
      dataValue: 'DataValue',
      iotId: 'IotId',
      previousHash: 'PreviousHash',
      productKey: 'ProductKey',
      relatedDataList: 'RelatedDataList',
      timestamp: 'Timestamp',
      transactionHash: 'TransactionHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHash: 'string',
      blockNumber: 'number',
      dataHash: 'string',
      dataValue: 'string',
      iotId: 'string',
      previousHash: 'string',
      productKey: 'string',
      relatedDataList: { 'type': 'array', 'itemType': DescribeMPCoSPhaseInfoResponseBodyDataRelatedDataList },
      timestamp: 'number',
      transactionHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSResourceInfoResponseBodyDataPhaseQuotaInfoList extends $tea.Model {
  phaseGroupId?: string;
  phaseGroupName?: string;
  phaseQuota?: number;
  usedPhase?: number;
  static names(): { [key: string]: string } {
    return {
      phaseGroupId: 'PhaseGroupId',
      phaseGroupName: 'PhaseGroupName',
      phaseQuota: 'PhaseQuota',
      usedPhase: 'UsedPhase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phaseGroupId: 'string',
      phaseGroupName: 'string',
      phaseQuota: 'number',
      usedPhase: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPCoSResourceInfoResponseBodyData extends $tea.Model {
  memberQuota?: number;
  phaseGroupQuota?: number;
  phaseQuotaInfoList?: DescribeMPCoSResourceInfoResponseBodyDataPhaseQuotaInfoList[];
  usedMember?: number;
  usedPhaseGroup?: number;
  static names(): { [key: string]: string } {
    return {
      memberQuota: 'MemberQuota',
      phaseGroupQuota: 'PhaseGroupQuota',
      phaseQuotaInfoList: 'PhaseQuotaInfoList',
      usedMember: 'UsedMember',
      usedPhaseGroup: 'UsedPhaseGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberQuota: 'number',
      phaseGroupQuota: 'number',
      phaseQuotaInfoList: { 'type': 'array', 'itemType': DescribeMPCoSResourceInfoResponseBodyDataPhaseQuotaInfoList },
      usedMember: 'number',
      usedPhaseGroup: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMemberCapacityInfoResponseBodyData extends $tea.Model {
  memberId?: string;
  memberName?: string;
  memberUid?: string;
  usedCapacity?: string;
  usedCount?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberName: 'MemberName',
      memberUid: 'MemberUid',
      usedCapacity: 'UsedCapacity',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberName: 'string',
      memberUid: 'string',
      usedCapacity: 'string',
      usedCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInfoResponseBodyData extends $tea.Model {
  authorizeType?: string;
  effectiveTime?: number;
  expiredTime?: number;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeType: 'AuthorizeType',
      effectiveTime: 'EffectiveTime',
      expiredTime: 'ExpiredTime',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeType: 'string',
      effectiveTime: 'number',
      expiredTime: 'number',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryDataListResponseBodyData extends $tea.Model {
  data?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentDataModelsResponseBodyDataDataModelInfo extends $tea.Model {
  dataModelCode?: string;
  dataModelName?: string;
  static names(): { [key: string]: string } {
    return {
      dataModelCode: 'DataModelCode',
      dataModelName: 'DataModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModelCode: 'string',
      dataModelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDependentDataModelsResponseBodyData extends $tea.Model {
  dataModelInfo?: ListDependentDataModelsResponseBodyDataDataModelInfo[];
  static names(): { [key: string]: string } {
    return {
      dataModelInfo: 'DataModelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModelInfo: { 'type': 'array', 'itemType': ListDependentDataModelsResponseBodyDataDataModelInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResponseBodyDataPageData extends $tea.Model {
  deviceId?: string;
  iotId?: string;
  lastSaveTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      iotId: 'IotId',
      lastSaveTime: 'LastSaveTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      iotId: 'string',
      lastSaveTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListDeviceResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListDeviceResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupResponseBodyDataPageData extends $tea.Model {
  authorizeType?: string;
  deviceGroupId?: string;
  ownerName?: string;
  ownerUid?: string;
  productKey?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeType: 'AuthorizeType',
      deviceGroupId: 'DeviceGroupId',
      ownerName: 'OwnerName',
      ownerUid: 'OwnerUid',
      productKey: 'ProductKey',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeType: 'string',
      deviceGroupId: 'string',
      ownerName: 'string',
      ownerUid: 'string',
      productKey: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListDeviceGroupResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListDeviceGroupResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseResponseBodyDataPageData extends $tea.Model {
  accessPermission?: number;
  name?: string;
  phaseId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      accessPermission: 'AccessPermission',
      name: 'Name',
      phaseId: 'PhaseId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPermission: 'number',
      name: 'string',
      phaseId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListMPCoSPhaseResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListMPCoSPhaseResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseGroupResponseBodyDataPageData extends $tea.Model {
  name?: string;
  phaseGroupId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      phaseGroupId: 'PhaseGroupId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phaseGroupId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseGroupResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListMPCoSPhaseGroupResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListMPCoSPhaseGroupResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseHistoryResponseBodyDataPageData extends $tea.Model {
  blockHash?: string;
  blockNumber?: number;
  dataHash?: string;
  dataSeq?: string;
  dataValue?: string;
  iotId?: string;
  previousHash?: string;
  productKey?: string;
  timestamp?: number;
  transactionHash?: string;
  static names(): { [key: string]: string } {
    return {
      blockHash: 'BlockHash',
      blockNumber: 'BlockNumber',
      dataHash: 'DataHash',
      dataSeq: 'DataSeq',
      dataValue: 'DataValue',
      iotId: 'IotId',
      previousHash: 'PreviousHash',
      productKey: 'ProductKey',
      timestamp: 'Timestamp',
      transactionHash: 'TransactionHash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHash: 'string',
      blockNumber: 'number',
      dataHash: 'string',
      dataSeq: 'string',
      dataValue: 'string',
      iotId: 'string',
      previousHash: 'string',
      productKey: 'string',
      timestamp: 'number',
      transactionHash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMPCoSPhaseHistoryResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListMPCoSPhaseHistoryResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListMPCoSPhaseHistoryResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberResponseBodyDataPageData extends $tea.Model {
  memberContact?: string;
  memberId?: string;
  memberName?: string;
  memberPhone?: string;
  memberUid?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      memberContact: 'MemberContact',
      memberId: 'MemberId',
      memberName: 'MemberName',
      memberPhone: 'MemberPhone',
      memberUid: 'MemberUid',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberContact: 'string',
      memberId: 'string',
      memberName: 'string',
      memberPhone: 'string',
      memberUid: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemberResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListMemberResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListMemberResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiPartyCollaborationChainResponseBodyDataPageData extends $tea.Model {
  bizChainId?: string;
  name?: string;
  remark?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      name: 'Name',
      remark: 'Remark',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      name: 'string',
      remark: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMultiPartyCollaborationChainResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListMultiPartyCollaborationChainResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListMultiPartyCollaborationChainResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPSMemberDataTypeCodeResponseBodyDataPageData extends $tea.Model {
  dataTypeCode?: string;
  memberId?: string;
  memberName?: string;
  memberUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataTypeCode: 'DataTypeCode',
      memberId: 'MemberId',
      memberName: 'MemberName',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTypeCode: 'string',
      memberId: 'string',
      memberName: 'string',
      memberUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPSMemberDataTypeCodeResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListPSMemberDataTypeCodeResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListPSMemberDataTypeCodeResponseBodyDataPageData },
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProofChainResponseBodyDataPageData extends $tea.Model {
  bizChainCode?: string;
  bizChainId?: string;
  dataTypeCode?: string;
  name?: string;
  remark?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainCode: 'BizChainCode',
      bizChainId: 'BizChainId',
      dataTypeCode: 'DataTypeCode',
      name: 'Name',
      remark: 'Remark',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainCode: 'string',
      bizChainId: 'string',
      dataTypeCode: 'string',
      name: 'string',
      remark: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProofChainResponseBodyData extends $tea.Model {
  num?: number;
  pageData?: ListProofChainResponseBodyDataPageData[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      pageData: 'PageData',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: 'number',
      pageData: { 'type': 'array', 'itemType': ListProofChainResponseBodyDataPageData },
      size: 'number',
      total: 'number',
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
      'ap-northeast-1': "ltl.aliyuncs.com",
      'ap-northeast-2-pop': "ltl.aliyuncs.com",
      'ap-south-1': "ltl.aliyuncs.com",
      'ap-southeast-1': "ltl.aliyuncs.com",
      'ap-southeast-2': "ltl.aliyuncs.com",
      'ap-southeast-3': "ltl.aliyuncs.com",
      'ap-southeast-5': "ltl.aliyuncs.com",
      'cn-beijing': "ltl.aliyuncs.com",
      'cn-beijing-finance-1': "ltl.aliyuncs.com",
      'cn-beijing-finance-pop': "ltl.aliyuncs.com",
      'cn-beijing-gov-1': "ltl.aliyuncs.com",
      'cn-beijing-nu16-b01': "ltl.aliyuncs.com",
      'cn-chengdu': "ltl.aliyuncs.com",
      'cn-edge-1': "ltl.aliyuncs.com",
      'cn-fujian': "ltl.aliyuncs.com",
      'cn-haidian-cm12-c01': "ltl.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ltl.aliyuncs.com",
      'cn-hangzhou-finance': "ltl.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ltl.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ltl.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ltl.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ltl.aliyuncs.com",
      'cn-hangzhou-test-306': "ltl.aliyuncs.com",
      'cn-hongkong': "ltl.aliyuncs.com",
      'cn-hongkong-finance-pop': "ltl.aliyuncs.com",
      'cn-huhehaote': "ltl.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ltl.aliyuncs.com",
      'cn-north-2-gov-1': "ltl.aliyuncs.com",
      'cn-qingdao': "ltl.aliyuncs.com",
      'cn-qingdao-nebula': "ltl.aliyuncs.com",
      'cn-shanghai-et15-b01': "ltl.aliyuncs.com",
      'cn-shanghai-et2-b01': "ltl.aliyuncs.com",
      'cn-shanghai-finance-1': "ltl.aliyuncs.com",
      'cn-shanghai-inner': "ltl.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ltl.aliyuncs.com",
      'cn-shenzhen': "ltl.aliyuncs.com",
      'cn-shenzhen-finance-1': "ltl.aliyuncs.com",
      'cn-shenzhen-inner': "ltl.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ltl.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ltl.aliyuncs.com",
      'cn-wuhan': "ltl.aliyuncs.com",
      'cn-wulanchabu': "ltl.aliyuncs.com",
      'cn-yushanfang': "ltl.aliyuncs.com",
      'cn-zhangbei': "ltl.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ltl.aliyuncs.com",
      'cn-zhangjiakou': "ltl.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ltl.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ltl.aliyuncs.com",
      'eu-central-1': "ltl.aliyuncs.com",
      'eu-west-1': "ltl.aliyuncs.com",
      'eu-west-1-oxs': "ltl.aliyuncs.com",
      'me-east-1': "ltl.aliyuncs.com",
      'rus-west-1-pop': "ltl.aliyuncs.com",
      'us-east-1': "ltl.aliyuncs.com",
      'us-west-1': "ltl.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ltl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async applyDataModelConfigInfoWithOptions(request: ApplyDataModelConfigInfoRequest, runtime: $Util.RuntimeOptions): Promise<ApplyDataModelConfigInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.configuration)) {
      query["Configuration"] = request.configuration;
    }

    if (!Util.isUnset(request.dataModelCode)) {
      query["DataModelCode"] = request.dataModelCode;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyDataModelConfigInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyDataModelConfigInfoResponse>(await this.callApi(params, req, runtime), new ApplyDataModelConfigInfoResponse({}));
  }

  async applyDataModelConfigInfo(request: ApplyDataModelConfigInfoRequest): Promise<ApplyDataModelConfigInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyDataModelConfigInfoWithOptions(request, runtime);
  }

  async attachDataWithOptions(request: AttachDataRequest, runtime: $Util.RuntimeOptions): Promise<AttachDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachData",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachDataResponse>(await this.callApi(params, req, runtime), new AttachDataResponse({}));
  }

  async attachData(request: AttachDataRequest): Promise<AttachDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDataWithOptions(request, runtime);
  }

  async attachDataWithSignatureWithOptions(request: AttachDataWithSignatureRequest, runtime: $Util.RuntimeOptions): Promise<AttachDataWithSignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!Util.isUnset(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!Util.isUnset(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!Util.isUnset(request.iotSignature)) {
      query["IotSignature"] = request.iotSignature;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachDataWithSignature",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachDataWithSignatureResponse>(await this.callApi(params, req, runtime), new AttachDataWithSignatureResponse({}));
  }

  async attachDataWithSignature(request: AttachDataWithSignatureRequest): Promise<AttachDataWithSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDataWithSignatureWithOptions(request, runtime);
  }

  async authorizeDeviceWithOptions(request: AuthorizeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeDeviceResponse>(await this.callApi(params, req, runtime), new AuthorizeDeviceResponse({}));
  }

  async authorizeDevice(request: AuthorizeDeviceRequest): Promise<AuthorizeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeDeviceWithOptions(request, runtime);
  }

  async authorizeDeviceGroupWithOptions(request: AuthorizeDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeDeviceGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeDeviceGroupResponse>(await this.callApi(params, req, runtime), new AuthorizeDeviceGroupResponse({}));
  }

  async authorizeDeviceGroup(request: AuthorizeDeviceGroupRequest): Promise<AuthorizeDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeDeviceGroupWithOptions(request, runtime);
  }

  async batchUploadMPCoSPhaseDigestInfoWithOptions(tmpReq: BatchUploadMPCoSPhaseDigestInfoRequest, runtime: $Util.RuntimeOptions): Promise<BatchUploadMPCoSPhaseDigestInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchUploadMPCoSPhaseDigestInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phaseDataList)) {
      request.phaseDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phaseDataList, "PhaseDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.phaseDataListShrink)) {
      query["PhaseDataList"] = request.phaseDataListShrink;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchUploadMPCoSPhaseDigestInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUploadMPCoSPhaseDigestInfoResponse>(await this.callApi(params, req, runtime), new BatchUploadMPCoSPhaseDigestInfoResponse({}));
  }

  async batchUploadMPCoSPhaseDigestInfo(request: BatchUploadMPCoSPhaseDigestInfoRequest): Promise<BatchUploadMPCoSPhaseDigestInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUploadMPCoSPhaseDigestInfoWithOptions(request, runtime);
  }

  async batchUploadMPCoSPhaseDigestInfoByDeviceWithOptions(tmpReq: BatchUploadMPCoSPhaseDigestInfoByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BatchUploadMPCoSPhaseDigestInfoByDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchUploadMPCoSPhaseDigestInfoByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phaseDataList)) {
      request.phaseDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phaseDataList, "PhaseDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!Util.isUnset(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!Util.isUnset(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!Util.isUnset(request.iotSignature)) {
      query["IotSignature"] = request.iotSignature;
    }

    if (!Util.isUnset(request.phaseDataListShrink)) {
      query["PhaseDataList"] = request.phaseDataListShrink;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchUploadMPCoSPhaseDigestInfoByDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUploadMPCoSPhaseDigestInfoByDeviceResponse>(await this.callApi(params, req, runtime), new BatchUploadMPCoSPhaseDigestInfoByDeviceResponse({}));
  }

  async batchUploadMPCoSPhaseDigestInfoByDevice(request: BatchUploadMPCoSPhaseDigestInfoByDeviceRequest): Promise<BatchUploadMPCoSPhaseDigestInfoByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUploadMPCoSPhaseDigestInfoByDeviceWithOptions(request, runtime);
  }

  async batchUploadMPCoSPhaseTextInfoWithOptions(tmpReq: BatchUploadMPCoSPhaseTextInfoRequest, runtime: $Util.RuntimeOptions): Promise<BatchUploadMPCoSPhaseTextInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchUploadMPCoSPhaseTextInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phaseDataList)) {
      request.phaseDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phaseDataList, "PhaseDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.phaseDataListShrink)) {
      query["PhaseDataList"] = request.phaseDataListShrink;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchUploadMPCoSPhaseTextInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUploadMPCoSPhaseTextInfoResponse>(await this.callApi(params, req, runtime), new BatchUploadMPCoSPhaseTextInfoResponse({}));
  }

  async batchUploadMPCoSPhaseTextInfo(request: BatchUploadMPCoSPhaseTextInfoRequest): Promise<BatchUploadMPCoSPhaseTextInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUploadMPCoSPhaseTextInfoWithOptions(request, runtime);
  }

  async batchUploadMPCoSPhaseTextInfoByDeviceWithOptions(tmpReq: BatchUploadMPCoSPhaseTextInfoByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BatchUploadMPCoSPhaseTextInfoByDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchUploadMPCoSPhaseTextInfoByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.phaseDataList)) {
      request.phaseDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phaseDataList, "PhaseDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!Util.isUnset(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!Util.isUnset(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!Util.isUnset(request.iotSignature)) {
      query["IotSignature"] = request.iotSignature;
    }

    if (!Util.isUnset(request.phaseDataListShrink)) {
      query["PhaseDataList"] = request.phaseDataListShrink;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchUploadMPCoSPhaseTextInfoByDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUploadMPCoSPhaseTextInfoByDeviceResponse>(await this.callApi(params, req, runtime), new BatchUploadMPCoSPhaseTextInfoByDeviceResponse({}));
  }

  async batchUploadMPCoSPhaseTextInfoByDevice(request: BatchUploadMPCoSPhaseTextInfoByDeviceRequest): Promise<BatchUploadMPCoSPhaseTextInfoByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUploadMPCoSPhaseTextInfoByDeviceWithOptions(request, runtime);
  }

  async createMPCoSPhaseWithOptions(request: CreateMPCoSPhaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateMPCoSPhaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMPCoSPhase",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMPCoSPhaseResponse>(await this.callApi(params, req, runtime), new CreateMPCoSPhaseResponse({}));
  }

  async createMPCoSPhase(request: CreateMPCoSPhaseRequest): Promise<CreateMPCoSPhaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMPCoSPhaseWithOptions(request, runtime);
  }

  async createMPCoSPhaseGroupWithOptions(request: CreateMPCoSPhaseGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMPCoSPhaseGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMPCoSPhaseGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMPCoSPhaseGroupResponse>(await this.callApi(params, req, runtime), new CreateMPCoSPhaseGroupResponse({}));
  }

  async createMPCoSPhaseGroup(request: CreateMPCoSPhaseGroupRequest): Promise<CreateMPCoSPhaseGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMPCoSPhaseGroupWithOptions(request, runtime);
  }

  async createMemberWithOptions(request: CreateMemberRequest, runtime: $Util.RuntimeOptions): Promise<CreateMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberContact)) {
      query["MemberContact"] = request.memberContact;
    }

    if (!Util.isUnset(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!Util.isUnset(request.memberPhone)) {
      query["MemberPhone"] = request.memberPhone;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMember",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
  }

  async createMember(request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMemberWithOptions(request, runtime);
  }

  async describeCapacityInfoWithOptions(request: DescribeCapacityInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapacityInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCapacityInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCapacityInfoResponse>(await this.callApi(params, req, runtime), new DescribeCapacityInfoResponse({}));
  }

  async describeCapacityInfo(request: DescribeCapacityInfoRequest): Promise<DescribeCapacityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapacityInfoWithOptions(request, runtime);
  }

  async describeMPCoSAuthorizedInfoWithOptions(request: DescribeMPCoSAuthorizedInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPCoSAuthorizedInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMPCoSAuthorizedInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMPCoSAuthorizedInfoResponse>(await this.callApi(params, req, runtime), new DescribeMPCoSAuthorizedInfoResponse({}));
  }

  async describeMPCoSAuthorizedInfo(request: DescribeMPCoSAuthorizedInfoRequest): Promise<DescribeMPCoSAuthorizedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPCoSAuthorizedInfoWithOptions(request, runtime);
  }

  async describeMPCoSPhaseInfoWithOptions(request: DescribeMPCoSPhaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPCoSPhaseInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.dataKey)) {
      query["DataKey"] = request.dataKey;
    }

    if (!Util.isUnset(request.dataSeq)) {
      query["DataSeq"] = request.dataSeq;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMPCoSPhaseInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMPCoSPhaseInfoResponse>(await this.callApi(params, req, runtime), new DescribeMPCoSPhaseInfoResponse({}));
  }

  async describeMPCoSPhaseInfo(request: DescribeMPCoSPhaseInfoRequest): Promise<DescribeMPCoSPhaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPCoSPhaseInfoWithOptions(request, runtime);
  }

  async describeMPCoSResourceInfoWithOptions(request: DescribeMPCoSResourceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMPCoSResourceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMPCoSResourceInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMPCoSResourceInfoResponse>(await this.callApi(params, req, runtime), new DescribeMPCoSResourceInfoResponse({}));
  }

  async describeMPCoSResourceInfo(request: DescribeMPCoSResourceInfoRequest): Promise<DescribeMPCoSResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMPCoSResourceInfoWithOptions(request, runtime);
  }

  async describeMemberCapacityInfoWithOptions(request: DescribeMemberCapacityInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMemberCapacityInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMemberCapacityInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMemberCapacityInfoResponse>(await this.callApi(params, req, runtime), new DescribeMemberCapacityInfoResponse({}));
  }

  async describeMemberCapacityInfo(request: DescribeMemberCapacityInfoRequest): Promise<DescribeMemberCapacityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMemberCapacityInfoWithOptions(request, runtime);
  }

  async describeResourceInfoWithOptions(request: DescribeResourceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceInfoResponse>(await this.callApi(params, req, runtime), new DescribeResourceInfoResponse({}));
  }

  async describeResourceInfo(request: DescribeResourceInfoRequest): Promise<DescribeResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceInfoWithOptions(request, runtime);
  }

  async getBlockChainInfoWithOptions(request: GetBlockChainInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetBlockChainInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBlockChainInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBlockChainInfoResponse>(await this.callApi(params, req, runtime), new GetBlockChainInfoResponse({}));
  }

  async getBlockChainInfo(request: GetBlockChainInfoRequest): Promise<GetBlockChainInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBlockChainInfoWithOptions(request, runtime);
  }

  async getDataWithOptions(request: GetDataRequest, runtime: $Util.RuntimeOptions): Promise<GetDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetData",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataResponse>(await this.callApi(params, req, runtime), new GetDataResponse({}));
  }

  async getData(request: GetDataRequest): Promise<GetDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataWithOptions(request, runtime);
  }

  async getDataModelConfigInfoWithOptions(request: GetDataModelConfigInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDataModelConfigInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.dataModelCode)) {
      query["DataModelCode"] = request.dataModelCode;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataModelConfigInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataModelConfigInfoResponse>(await this.callApi(params, req, runtime), new GetDataModelConfigInfoResponse({}));
  }

  async getDataModelConfigInfo(request: GetDataModelConfigInfoRequest): Promise<GetDataModelConfigInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataModelConfigInfoWithOptions(request, runtime);
  }

  async getHistoryDataCountWithOptions(request: GetHistoryDataCountRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoryDataCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoryDataCount",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoryDataCountResponse>(await this.callApi(params, req, runtime), new GetHistoryDataCountResponse({}));
  }

  async getHistoryDataCount(request: GetHistoryDataCountRequest): Promise<GetHistoryDataCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoryDataCountWithOptions(request, runtime);
  }

  async getHistoryDataListWithOptions(request: GetHistoryDataListRequest, runtime: $Util.RuntimeOptions): Promise<GetHistoryDataListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHistoryDataList",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHistoryDataListResponse>(await this.callApi(params, req, runtime), new GetHistoryDataListResponse({}));
  }

  async getHistoryDataList(request: GetHistoryDataListRequest): Promise<GetHistoryDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHistoryDataListWithOptions(request, runtime);
  }

  async listDependentDataModelsWithOptions(request: ListDependentDataModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListDependentDataModelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDependentDataModels",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDependentDataModelsResponse>(await this.callApi(params, req, runtime), new ListDependentDataModelsResponse({}));
  }

  async listDependentDataModels(request: ListDependentDataModelsRequest): Promise<ListDependentDataModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDependentDataModelsWithOptions(request, runtime);
  }

  async listDeviceWithOptions(request: ListDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceResponse>(await this.callApi(params, req, runtime), new ListDeviceResponse({}));
  }

  async listDevice(request: ListDeviceRequest): Promise<ListDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceWithOptions(request, runtime);
  }

  async listDeviceGroupWithOptions(request: ListDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceGroupResponse>(await this.callApi(params, req, runtime), new ListDeviceGroupResponse({}));
  }

  async listDeviceGroup(request: ListDeviceGroupRequest): Promise<ListDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceGroupWithOptions(request, runtime);
  }

  async listMPCoSPhaseWithOptions(request: ListMPCoSPhaseRequest, runtime: $Util.RuntimeOptions): Promise<ListMPCoSPhaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMPCoSPhase",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMPCoSPhaseResponse>(await this.callApi(params, req, runtime), new ListMPCoSPhaseResponse({}));
  }

  async listMPCoSPhase(request: ListMPCoSPhaseRequest): Promise<ListMPCoSPhaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMPCoSPhaseWithOptions(request, runtime);
  }

  async listMPCoSPhaseGroupWithOptions(request: ListMPCoSPhaseGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListMPCoSPhaseGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMPCoSPhaseGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMPCoSPhaseGroupResponse>(await this.callApi(params, req, runtime), new ListMPCoSPhaseGroupResponse({}));
  }

  async listMPCoSPhaseGroup(request: ListMPCoSPhaseGroupRequest): Promise<ListMPCoSPhaseGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMPCoSPhaseGroupWithOptions(request, runtime);
  }

  async listMPCoSPhaseHistoryWithOptions(request: ListMPCoSPhaseHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListMPCoSPhaseHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.dataKey)) {
      query["DataKey"] = request.dataKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMPCoSPhaseHistory",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMPCoSPhaseHistoryResponse>(await this.callApi(params, req, runtime), new ListMPCoSPhaseHistoryResponse({}));
  }

  async listMPCoSPhaseHistory(request: ListMPCoSPhaseHistoryRequest): Promise<ListMPCoSPhaseHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMPCoSPhaseHistoryWithOptions(request, runtime);
  }

  async listMemberWithOptions(request: ListMemberRequest, runtime: $Util.RuntimeOptions): Promise<ListMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMember",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMemberResponse>(await this.callApi(params, req, runtime), new ListMemberResponse({}));
  }

  async listMember(request: ListMemberRequest): Promise<ListMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMemberWithOptions(request, runtime);
  }

  async listMultiPartyCollaborationChainWithOptions(request: ListMultiPartyCollaborationChainRequest, runtime: $Util.RuntimeOptions): Promise<ListMultiPartyCollaborationChainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMultiPartyCollaborationChain",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMultiPartyCollaborationChainResponse>(await this.callApi(params, req, runtime), new ListMultiPartyCollaborationChainResponse({}));
  }

  async listMultiPartyCollaborationChain(request: ListMultiPartyCollaborationChainRequest): Promise<ListMultiPartyCollaborationChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMultiPartyCollaborationChainWithOptions(request, runtime);
  }

  async listPSMemberDataTypeCodeWithOptions(request: ListPSMemberDataTypeCodeRequest, runtime: $Util.RuntimeOptions): Promise<ListPSMemberDataTypeCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPSMemberDataTypeCode",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPSMemberDataTypeCodeResponse>(await this.callApi(params, req, runtime), new ListPSMemberDataTypeCodeResponse({}));
  }

  async listPSMemberDataTypeCode(request: ListPSMemberDataTypeCodeRequest): Promise<ListPSMemberDataTypeCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPSMemberDataTypeCodeWithOptions(request, runtime);
  }

  async listProofChainWithOptions(request: ListProofChainRequest, runtime: $Util.RuntimeOptions): Promise<ListProofChainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.num)) {
      query["Num"] = request.num;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProofChain",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProofChainResponse>(await this.callApi(params, req, runtime), new ListProofChainResponse({}));
  }

  async listProofChain(request: ListProofChainRequest): Promise<ListProofChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProofChainWithOptions(request, runtime);
  }

  async lockMemberWithOptions(request: LockMemberRequest, runtime: $Util.RuntimeOptions): Promise<LockMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockMember",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockMemberResponse>(await this.callApi(params, req, runtime), new LockMemberResponse({}));
  }

  async lockMember(request: LockMemberRequest): Promise<LockMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockMemberWithOptions(request, runtime);
  }

  async modifyMPCoSPhaseWithOptions(request: ModifyMPCoSPhaseRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMPCoSPhaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMPCoSPhase",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMPCoSPhaseResponse>(await this.callApi(params, req, runtime), new ModifyMPCoSPhaseResponse({}));
  }

  async modifyMPCoSPhase(request: ModifyMPCoSPhaseRequest): Promise<ModifyMPCoSPhaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMPCoSPhaseWithOptions(request, runtime);
  }

  async modifyMPCoSPhaseGroupWithOptions(request: ModifyMPCoSPhaseGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMPCoSPhaseGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMPCoSPhaseGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMPCoSPhaseGroupResponse>(await this.callApi(params, req, runtime), new ModifyMPCoSPhaseGroupResponse({}));
  }

  async modifyMPCoSPhaseGroup(request: ModifyMPCoSPhaseGroupRequest): Promise<ModifyMPCoSPhaseGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMPCoSPhaseGroupWithOptions(request, runtime);
  }

  async modifyMemberWithOptions(request: ModifyMemberRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberContact)) {
      query["MemberContact"] = request.memberContact;
    }

    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!Util.isUnset(request.memberPhone)) {
      query["MemberPhone"] = request.memberPhone;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMember",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMemberResponse>(await this.callApi(params, req, runtime), new ModifyMemberResponse({}));
  }

  async modifyMember(request: ModifyMemberRequest): Promise<ModifyMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMemberWithOptions(request, runtime);
  }

  async registerDeviceGroupWithOptions(request: RegisterDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.authorizeType)) {
      query["AuthorizeType"] = request.authorizeType;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.deviceGroupName)) {
      query["DeviceGroupName"] = request.deviceGroupName;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDeviceGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDeviceGroupResponse>(await this.callApi(params, req, runtime), new RegisterDeviceGroupResponse({}));
  }

  async registerDeviceGroup(request: RegisterDeviceGroupRequest): Promise<RegisterDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceGroupWithOptions(request, runtime);
  }

  async setDataWithOptions(request: SetDataRequest, runtime: $Util.RuntimeOptions): Promise<SetDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetData",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDataResponse>(await this.callApi(params, req, runtime), new SetDataResponse({}));
  }

  async setData(request: SetDataRequest): Promise<SetDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataWithOptions(request, runtime);
  }

  async setDataWithSignatureWithOptions(request: SetDataWithSignatureRequest, runtime: $Util.RuntimeOptions): Promise<SetDataWithSignatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!Util.isUnset(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!Util.isUnset(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!Util.isUnset(request.iotSignature)) {
      query["IotSignature"] = request.iotSignature;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDataWithSignature",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDataWithSignatureResponse>(await this.callApi(params, req, runtime), new SetDataWithSignatureResponse({}));
  }

  async setDataWithSignature(request: SetDataWithSignatureRequest): Promise<SetDataWithSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDataWithSignatureWithOptions(request, runtime);
  }

  async unAuthorizeDeviceWithOptions(request: UnAuthorizeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnAuthorizeDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnAuthorizeDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnAuthorizeDeviceResponse>(await this.callApi(params, req, runtime), new UnAuthorizeDeviceResponse({}));
  }

  async unAuthorizeDevice(request: UnAuthorizeDeviceRequest): Promise<UnAuthorizeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unAuthorizeDeviceWithOptions(request, runtime);
  }

  async unAuthorizeDeviceGroupWithOptions(request: UnAuthorizeDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UnAuthorizeDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnAuthorizeDeviceGroup",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnAuthorizeDeviceGroupResponse>(await this.callApi(params, req, runtime), new UnAuthorizeDeviceGroupResponse({}));
  }

  async unAuthorizeDeviceGroup(request: UnAuthorizeDeviceGroupRequest): Promise<UnAuthorizeDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unAuthorizeDeviceGroupWithOptions(request, runtime);
  }

  async unLockMemberWithOptions(request: UnLockMemberRequest, runtime: $Util.RuntimeOptions): Promise<UnLockMemberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnLockMember",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnLockMemberResponse>(await this.callApi(params, req, runtime), new UnLockMemberResponse({}));
  }

  async unLockMember(request: UnLockMemberRequest): Promise<UnLockMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unLockMemberWithOptions(request, runtime);
  }

  async updateMPCoSAuthorizedInfoWithOptions(tmpReq: UpdateMPCoSAuthorizedInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMPCoSAuthorizedInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateMPCoSAuthorizedInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authorizedPhaseList)) {
      request.authorizedPhaseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authorizedPhaseList, "AuthorizedPhaseList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.authorizedPhaseListShrink)) {
      query["AuthorizedPhaseList"] = request.authorizedPhaseListShrink;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMPCoSAuthorizedInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMPCoSAuthorizedInfoResponse>(await this.callApi(params, req, runtime), new UpdateMPCoSAuthorizedInfoResponse({}));
  }

  async updateMPCoSAuthorizedInfo(request: UpdateMPCoSAuthorizedInfoRequest): Promise<UpdateMPCoSAuthorizedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMPCoSAuthorizedInfoWithOptions(request, runtime);
  }

  async uploadMPCoSPhaseDigestInfoWithOptions(tmpReq: UploadMPCoSPhaseDigestInfoRequest, runtime: $Util.RuntimeOptions): Promise<UploadMPCoSPhaseDigestInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadMPCoSPhaseDigestInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedDataList)) {
      request.relatedDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedDataList, "RelatedDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.dataKey)) {
      query["DataKey"] = request.dataKey;
    }

    if (!Util.isUnset(request.dataSeq)) {
      query["DataSeq"] = request.dataSeq;
    }

    if (!Util.isUnset(request.phaseData)) {
      query["PhaseData"] = request.phaseData;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    if (!Util.isUnset(request.relatedDataListShrink)) {
      query["RelatedDataList"] = request.relatedDataListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadMPCoSPhaseDigestInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMPCoSPhaseDigestInfoResponse>(await this.callApi(params, req, runtime), new UploadMPCoSPhaseDigestInfoResponse({}));
  }

  async uploadMPCoSPhaseDigestInfo(request: UploadMPCoSPhaseDigestInfoRequest): Promise<UploadMPCoSPhaseDigestInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMPCoSPhaseDigestInfoWithOptions(request, runtime);
  }

  async uploadMPCoSPhaseDigestInfoByDeviceWithOptions(tmpReq: UploadMPCoSPhaseDigestInfoByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UploadMPCoSPhaseDigestInfoByDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadMPCoSPhaseDigestInfoByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedDataList)) {
      request.relatedDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedDataList, "RelatedDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.dataKey)) {
      query["DataKey"] = request.dataKey;
    }

    if (!Util.isUnset(request.dataSeq)) {
      query["DataSeq"] = request.dataSeq;
    }

    if (!Util.isUnset(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!Util.isUnset(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!Util.isUnset(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!Util.isUnset(request.iotSignature)) {
      query["IotSignature"] = request.iotSignature;
    }

    if (!Util.isUnset(request.phaseData)) {
      query["PhaseData"] = request.phaseData;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    if (!Util.isUnset(request.relatedDataListShrink)) {
      query["RelatedDataList"] = request.relatedDataListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadMPCoSPhaseDigestInfoByDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMPCoSPhaseDigestInfoByDeviceResponse>(await this.callApi(params, req, runtime), new UploadMPCoSPhaseDigestInfoByDeviceResponse({}));
  }

  async uploadMPCoSPhaseDigestInfoByDevice(request: UploadMPCoSPhaseDigestInfoByDeviceRequest): Promise<UploadMPCoSPhaseDigestInfoByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMPCoSPhaseDigestInfoByDeviceWithOptions(request, runtime);
  }

  async uploadMPCoSPhaseTextInfoWithOptions(tmpReq: UploadMPCoSPhaseTextInfoRequest, runtime: $Util.RuntimeOptions): Promise<UploadMPCoSPhaseTextInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadMPCoSPhaseTextInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedDataList)) {
      request.relatedDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedDataList, "RelatedDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.dataKey)) {
      query["DataKey"] = request.dataKey;
    }

    if (!Util.isUnset(request.dataSeq)) {
      query["DataSeq"] = request.dataSeq;
    }

    if (!Util.isUnset(request.phaseData)) {
      query["PhaseData"] = request.phaseData;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    if (!Util.isUnset(request.relatedDataListShrink)) {
      query["RelatedDataList"] = request.relatedDataListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadMPCoSPhaseTextInfo",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMPCoSPhaseTextInfoResponse>(await this.callApi(params, req, runtime), new UploadMPCoSPhaseTextInfoResponse({}));
  }

  async uploadMPCoSPhaseTextInfo(request: UploadMPCoSPhaseTextInfoRequest): Promise<UploadMPCoSPhaseTextInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMPCoSPhaseTextInfoWithOptions(request, runtime);
  }

  async uploadMPCoSPhaseTextInfoByDeviceWithOptions(tmpReq: UploadMPCoSPhaseTextInfoByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UploadMPCoSPhaseTextInfoByDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new UploadMPCoSPhaseTextInfoByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.relatedDataList)) {
      request.relatedDataListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relatedDataList, "RelatedDataList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.bizChainId)) {
      query["BizChainId"] = request.bizChainId;
    }

    if (!Util.isUnset(request.dataKey)) {
      query["DataKey"] = request.dataKey;
    }

    if (!Util.isUnset(request.dataSeq)) {
      query["DataSeq"] = request.dataSeq;
    }

    if (!Util.isUnset(request.iotAuthType)) {
      query["IotAuthType"] = request.iotAuthType;
    }

    if (!Util.isUnset(request.iotDataDigest)) {
      query["IotDataDigest"] = request.iotDataDigest;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotIdServiceProvider)) {
      query["IotIdServiceProvider"] = request.iotIdServiceProvider;
    }

    if (!Util.isUnset(request.iotIdSource)) {
      query["IotIdSource"] = request.iotIdSource;
    }

    if (!Util.isUnset(request.iotSignature)) {
      query["IotSignature"] = request.iotSignature;
    }

    if (!Util.isUnset(request.phaseData)) {
      query["PhaseData"] = request.phaseData;
    }

    if (!Util.isUnset(request.phaseGroupId)) {
      query["PhaseGroupId"] = request.phaseGroupId;
    }

    if (!Util.isUnset(request.phaseId)) {
      query["PhaseId"] = request.phaseId;
    }

    if (!Util.isUnset(request.relatedDataListShrink)) {
      query["RelatedDataList"] = request.relatedDataListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadMPCoSPhaseTextInfoByDevice",
      version: "2019-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMPCoSPhaseTextInfoByDeviceResponse>(await this.callApi(params, req, runtime), new UploadMPCoSPhaseTextInfoByDeviceResponse({}));
  }

  async uploadMPCoSPhaseTextInfoByDevice(request: UploadMPCoSPhaseTextInfoByDeviceRequest): Promise<UploadMPCoSPhaseTextInfoByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMPCoSPhaseTextInfoByDeviceWithOptions(request, runtime);
  }

}
