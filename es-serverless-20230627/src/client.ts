// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelSpecReviewTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 1B64F3E0-25D5-5043-B5C8-4FF22BB12CCD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSpecReviewTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelSpecReviewTaskResponseBody;
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
      body: CancelSpecReviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  /**
   * @remarks
   * 应用名
   * 
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authentication?: CreateAppRequestAuthentication;
  /**
   * @remarks
   * This parameter is required.
   */
  chargeType?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  network?: CreateAppRequestNetwork[];
  privateNetwork?: CreateAppRequestPrivateNetwork[];
  quotaInfo?: CreateAppRequestQuotaInfo;
  regionId?: string;
  scenario?: string;
  version?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      authentication: 'authentication',
      chargeType: 'chargeType',
      description: 'description',
      network: 'network',
      privateNetwork: 'privateNetwork',
      quotaInfo: 'quotaInfo',
      regionId: 'regionId',
      scenario: 'scenario',
      version: 'version',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authentication: CreateAppRequestAuthentication,
      chargeType: 'string',
      description: 'string',
      network: { 'type': 'array', 'itemType': CreateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetwork },
      quotaInfo: CreateAppRequestQuotaInfo,
      regionId: 'string',
      scenario: 'string',
      version: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointZones?: CreateEndpointRequestEndpointZones[];
  /**
   * @example
   * testendpoint
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-uf664nyle5khp5***
   */
  vpcId?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpointZones: 'endpointZones',
      name: 'name',
      vpcId: 'vpcId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointZones: { 'type': 'array', 'itemType': CreateEndpointRequestEndpointZones },
      name: 'string',
      vpcId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: CreateEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateEndpointResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEndpointResponseBody;
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
      body: CreateEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product_info
   */
  indices?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qingning
   */
  snapshot?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      indices: 'indices',
      snapshot: 'snapshot',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: 'string',
      snapshot: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  /**
   * @example
   * 03761BE5-D12F-55B4-9C93-0255C11DE44A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSnapshotResponseBody;
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
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: DeleteAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDictRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a.dic
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDictResponseBody extends $tea.Model {
  /**
   * @example
   * 2BF6B57E-5AAD-5389-80CD-E200BBF91FF9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDictResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDictResponseBody;
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
      body: DeleteDictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointResponseBody extends $tea.Model {
  /**
   * @example
   * 1305A3E0-A291-54BA-A3B2-7D1C12EC4112
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEndpointResponseBody;
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
      body: DeleteEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $tea.Model {
  /**
   * @example
   * 16484F36-A2A3-5A05-B242-0BF2BF6AA326
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
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
      body: DeleteSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  detailed?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailed: 'detailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppResponseBody;
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
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBody extends $tea.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetAppQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAppQuotaResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppQuotaResponseBody;
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
      body: GetAppQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataRequest extends $tea.Model {
  /**
   * @example
   * {"start":1689245180581,"end":1689246950582,"queries":[{"metric":"aliyunes.elasticsearch.index.docs.count","aggregator":"sum","downsample":"avg","tags":{"resource":"{appName}"},"filters":[],"granularity":"auto"}]}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponseBody extends $tea.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * internal server error
   */
  message?: string;
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetMonitorDataResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetMonitorDataResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMonitorDataResponseBody;
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
      body: GetMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotSettingResponseBody extends $tea.Model {
  /**
   * @example
   * 7B6CE6E1-5BA0-56DA-BFFD-8D90692F1EFC
   */
  requestId?: string;
  result?: GetSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSnapshotSettingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSnapshotSettingResponseBody;
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
      body: GetSnapshotSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpecReviewTaskResponseBody extends $tea.Model {
  /**
   * @example
   * E310AC54-957A-5FD5-B85B-E972B2BDA8DE
   */
  requestId?: string;
  result?: GetSpecReviewTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSpecReviewTaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpecReviewTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSpecReviewTaskResponseBody;
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
      body: GetSpecReviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  /**
   * @example
   * 2023-08-29T02:37:22Z
   */
  createTime?: string;
  /**
   * @example
   * metrics-logs-online
   */
  description?: string;
  /**
   * @example
   * desc
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      description: 'description',
      orderType: 'orderType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      description: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: ListAppsResponseBodyResult[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAppsResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
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
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
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

export class ListDictsResponseBody extends $tea.Model {
  /**
   * @example
   * E92BCBB9-3CFE-58DD-8D8C-56DF46AB3BF3
   */
  requestId?: string;
  result?: ListDictsResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDictsResponseBody;
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
      body: ListDictsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ep-bp1id41dd116e52e****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * vpc-bp1212sb7cj2j4e6x****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceId: 'resourceId',
      type: 'type',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      type: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBody extends $tea.Model {
  /**
   * @example
   * D6030CE6-9FEB-5B2F-84AC-3ADE3CBA89E5
   */
  requestId?: string;
  result?: ListEndpointsResponseBodyResult[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEndpointsResponseBody;
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
      body: ListEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8C85CCB3-C0C9-521C-B599-F903E14A8793
   */
  requestId?: string;
  result?: any[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndicesResponseBody;
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
      body: ListIndicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotRepositoriesResponseBody extends $tea.Model {
  /**
   * @example
   * 56E0591D-7D62-56A2-993E-952FB2026C69
   */
  requestId?: string;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotRepositoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotRepositoriesResponseBody;
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
      body: ListSnapshotRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * aliyun_auto_snapshot
   */
  repository?: string;
  /**
   * @example
   * qingning
   */
  snapshot?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      repository: 'repository',
      snapshot: 'snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      repository: 'string',
      snapshot: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $tea.Model {
  /**
   * @example
   * ODgyObrnP3
   */
  nextToken?: string;
  /**
   * @example
   * 22E9EE78-F567-550A-8F7C-20E9CD3DE489
   */
  requestId?: string;
  result?: { [key: string]: any }[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotsResponseBody;
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
      body: ListSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 55F7B3FE-05D8-5F0F-BD55-A18967D447DC
   */
  requestId?: string;
  result?: ListSpecReviewTasksResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSpecReviewTasksResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSpecReviewTasksResponseBody;
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
      body: ListSpecReviewTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  applyReason?: string;
  authentication?: UpdateAppRequestAuthentication;
  contactInfo?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  limiterInfo?: UpdateAppRequestLimiterInfo;
  network?: UpdateAppRequestNetwork[];
  privateNetwork?: UpdateAppRequestPrivateNetwork[];
  static names(): { [key: string]: string } {
    return {
      applyReason: 'applyReason',
      authentication: 'authentication',
      contactInfo: 'contactInfo',
      description: 'description',
      limiterInfo: 'limiterInfo',
      network: 'network',
      privateNetwork: 'privateNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      authentication: UpdateAppRequestAuthentication,
      contactInfo: 'string',
      description: 'string',
      limiterInfo: UpdateAppRequestLimiterInfo,
      network: { 'type': 'array', 'itemType': UpdateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetwork },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: UpdateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateAppResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppResponseBody;
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
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  allowCover?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  files?: UpdateDictRequestFiles[];
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * MAIN
   */
  type?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCover: 'allowCover',
      files: 'files',
      sourceType: 'sourceType',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCover: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateDictRequestFiles },
      sourceType: 'string',
      type: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponseBody extends $tea.Model {
  /**
   * @example
   * 12797BCC-E0B5-5A47-B4B9-A14DDF0B0200
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDictResponseBody;
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
      body: UpdateDictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointZones?: UpdateEndpointRequestEndpointZones[];
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointZones: 'endpointZones',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointZones: { 'type': 'array', 'itemType': UpdateEndpointRequestEndpointZones },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointResponseBody extends $tea.Model {
  /**
   * @example
   * FBAD8493-87FA-583E-8A4C-D487F2DE90FC
   */
  requestId?: string;
  result?: UpdateEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateEndpointResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEndpointResponseBody;
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
      body: UpdateEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0 0 01 ? * * *
   */
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      quartzRegex: 'quartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponseBody extends $tea.Model {
  /**
   * @example
   * A7B03723-AA73-5A5F-B71C-270792614DD8
   */
  requestId?: string;
  /**
   * @example
   * {
   *     "quartzRegex": "0 0 01 ? * * *",
   *     "enable": true
   *   }
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSnapshotSettingResponseBody;
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
      body: UpdateSnapshotSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestAuthenticationBasicAuth extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestAuthentication extends $tea.Model {
  basicAuth?: CreateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': CreateAppRequestAuthenticationBasicAuth },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestNetworkWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestNetwork extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: CreateAppRequestNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': CreateAppRequestNetworkWhiteIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestPrivateNetworkWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestPrivateNetwork extends $tea.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: CreateAppRequestPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetworkWhiteIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestQuotaInfo extends $tea.Model {
  appType?: string;
  cu?: number;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      cu: 'cu',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cu: 'number',
      storage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResult extends $tea.Model {
  /**
   * @example
   * es-serverless-cn-xxx
   */
  instaneId?: string;
  static names(): { [key: string]: string } {
    return {
      instaneId: 'instaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instaneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointRequestEndpointZones extends $tea.Model {
  /**
   * @example
   * vsw-uf6qmfkqdcw*****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointResponseBodyResult extends $tea.Model {
  /**
   * @example
   * essep-abd***dks
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBodyResult extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultNetworkWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultNetwork extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: GetAppResponseBodyResultNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetworkWhiteIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultPrivateNetworkWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultPrivateNetwork extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: GetAppResponseBodyResultPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetworkWhiteIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResult extends $tea.Model {
  /**
   * @example
   * test-app-abc
   */
  appId?: string;
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  /**
   * @example
   * 2022-08-15T11:20:52.370Z
   */
  createTime?: string;
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-08-15T11:21:50.000Z
   */
  modifiedTime?: string;
  network?: GetAppResponseBodyResultNetwork[];
  /**
   * @example
   * *******7595
   */
  ownerId?: string;
  privateNetwork?: GetAppResponseBodyResultPrivateNetwork[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      network: 'network',
      ownerId: 'ownerId',
      privateNetwork: 'privateNetwork',
      regionId: 'regionId',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      network: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetwork },
      ownerId: 'string',
      privateNetwork: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetwork },
      regionId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResultLimiterInfoLimiters extends $tea.Model {
  /**
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @example
   * 1
   */
  minValue?: number;
  /**
   * @example
   * INDEX_NUMBER_OF_SHARDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      immutable: 'immutable',
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immutable: 'boolean',
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResultLimiterInfo extends $tea.Model {
  limiters?: GetAppQuotaResponseBodyResultLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': GetAppQuotaResponseBodyResultLimiterInfoLimiters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResult extends $tea.Model {
  limiterInfo?: GetAppQuotaResponseBodyResultLimiterInfo;
  quotaInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      limiterInfo: 'limiterInfo',
      quotaInfo: 'quotaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiterInfo: GetAppQuotaResponseBodyResultLimiterInfo,
      quotaInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponseBodyResult extends $tea.Model {
  /**
   * @example
   * {
   *     "1689480600":28676235.104761902
   * }
   */
  dps?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  integrity?: number;
  /**
   * @example
   * 1689566839447
   */
  messageWatermark?: number;
  /**
   * @example
   * elasticsearch-server.logic_cpu.cpu
   */
  metric?: string;
  /**
   * @example
   * 172455913.18935508
   */
  summary?: number;
  /**
   * @example
   * {
   *                 "indexName":"test"
   *             }
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dps: 'dps',
      integrity: 'integrity',
      messageWatermark: 'messageWatermark',
      metric: 'metric',
      summary: 'summary',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrity: 'number',
      messageWatermark: 'number',
      metric: 'string',
      summary: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotSettingResponseBodyResult extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 0 0 01 ? * * *
   */
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      quartzRegex: 'quartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpecReviewTaskResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 339
   */
  id?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  applyLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 4,
   *                "storage": 100
   *           }
   */
  applyQuota?: { [key: string]: any };
  applyReason?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  effectiveLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 4,
   *                "storage": 100
   *           }
   */
  effectiveQuota?: { [key: string]: any };
  /**
   * @example
   * 2024-05-30T06:28:07.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-05-30T06:28:07.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  oldLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 2,
   *                "storage": 1
   *           }
   */
  oldQuota?: { [key: string]: any };
  /**
   * @example
   * USER
   */
  source?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appName: 'appName',
      applyLimiter: 'applyLimiter',
      applyQuota: 'applyQuota',
      applyReason: 'applyReason',
      effectiveLimiter: 'effectiveLimiter',
      effectiveQuota: 'effectiveQuota',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      oldLimiter: 'oldLimiter',
      oldQuota: 'oldQuota',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      appName: 'string',
      applyLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      applyQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      applyReason: 'string',
      effectiveLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      oldLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      oldQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * test-abc
   */
  appId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 2022-12-27T07:09:11.000Z
   */
  createTime?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-12-27T07:09:11.000Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * OwnerID账号ID
   * 
   * @example
   * *********7595
   */
  ownerId?: string;
  /**
   * @remarks
   * 代表region的资源属性字段
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 代表资源状态的资源属性字段
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      ownerId: 'ownerId',
      regionId: 'regionId',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      ownerId: 'string',
      regionId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * http://es-serverless-****.oss-cn-hangzhou.aliyuncs.com/app/es7**190/0/config/analysis-ik/stopword.dic?Expires=1705923089&OSSAccessKeyId=STS.NV18q****UkVp6LNj&Signat
   */
  downloadUrl?: string;
  /**
   * @example
   * a.dic
   */
  name?: string;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBodyResultEndpointZones extends $tea.Model {
  /**
   * @example
   * vsw-bp194pz9iez****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBodyResult extends $tea.Model {
  /**
   * @example
   * Pending
   */
  connectionStatus?: string;
  /**
   * @example
   * 1701259721
   */
  created?: number;
  /**
   * @example
   * ep-bp1i522d****a3.epsrv-bp1f****gei.cn-hangzhou.privatelink.aliyuncs.com
   */
  domain?: string;
  /**
   * @example
   * essep-2f46b743f60****
   */
  endpointId?: string;
  endpointZones?: ListEndpointsResponseBodyResultEndpointZones[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ep-bp1id41dd116e52e****
   */
  resourceId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * 1701259721
   */
  updated?: number;
  /**
   * @example
   * vpc-uf6gykvwcirp886ef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      created: 'created',
      domain: 'domain',
      endpointId: 'endpointId',
      endpointZones: 'endpointZones',
      name: 'name',
      resourceId: 'resourceId',
      securityGroupIds: 'securityGroupIds',
      status: 'status',
      type: 'type',
      updated: 'updated',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      created: 'number',
      domain: 'string',
      endpointId: 'string',
      endpointZones: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResultEndpointZones },
      name: 'string',
      resourceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      type: 'string',
      updated: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksResponseBodyResult extends $tea.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 339
   */
  id?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  applyReason?: string;
  /**
   * @example
   * 2024-05-27T10:13:22.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * USER
   */
  source?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appName: 'appName',
      applyReason: 'applyReason',
      gmtCreate: 'gmtCreate',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      appName: 'string',
      applyReason: 'string',
      gmtCreate: 'string',
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestAuthenticationBasicAuth extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestAuthentication extends $tea.Model {
  basicAuth?: UpdateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': UpdateAppRequestAuthenticationBasicAuth },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestLimiterInfoLimiters extends $tea.Model {
  maxValue?: number;
  minValue?: number;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestLimiterInfo extends $tea.Model {
  limiters?: UpdateAppRequestLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': UpdateAppRequestLimiterInfoLimiters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestNetworkWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestNetwork extends $tea.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: UpdateAppRequestNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestNetworkWhiteIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestPrivateNetworkWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestPrivateNetwork extends $tea.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: UpdateAppRequestPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetworkWhiteIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBodyResult extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequestFilesOssObject extends $tea.Model {
  /**
   * @example
   * bucket1
   */
  bucketName?: string;
  /**
   * @example
   * oss/dic_0.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequestFiles extends $tea.Model {
  /**
   * @example
   * dic_0.dic
   */
  name?: string;
  ossObject?: UpdateDictRequestFilesOssObject;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ossObject: 'ossObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossObject: UpdateDictRequestFilesOssObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointRequestEndpointZones extends $tea.Model {
  /**
   * @example
   * vsw-bp18r8uwnukv3rvi9****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointResponseBodyResult extends $tea.Model {
  /**
   * @example
   * ep-bp1i98bcbb1540d0****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("es-serverless", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 撤销规格审批
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSpecReviewTaskResponse
   */
  async cancelSpecReviewTaskWithOptions(appName: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelSpecReviewTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelSpecReviewTask",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/spec-review-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelSpecReviewTaskResponse>(await this.callApi(params, req, runtime), new CancelSpecReviewTaskResponse({}));
  }

  /**
   * 撤销规格审批
   * @returns CancelSpecReviewTaskResponse
   */
  async cancelSpecReviewTask(appName: string, taskId: string): Promise<CancelSpecReviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelSpecReviewTaskWithOptions(appName, taskId, headers, runtime);
  }

  /**
   * 创建Serverless应用
   * 
   * @param request - CreateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["appName"] = request.appName;
    }

    if (!Util.isUnset(request.authentication)) {
      body["authentication"] = request.authentication;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.network)) {
      body["network"] = request.network;
    }

    if (!Util.isUnset(request.privateNetwork)) {
      body["privateNetwork"] = request.privateNetwork;
    }

    if (!Util.isUnset(request.quotaInfo)) {
      body["quotaInfo"] = request.quotaInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  /**
   * 创建Serverless应用
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(request, headers, runtime);
  }

  /**
   * 创建端点
   * 
   * @param request - CreateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointResponse
   */
  async createEndpointWithOptions(request: CreateEndpointRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateEndpointResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endpointZones)) {
      body["endpointZones"] = request.endpointZones;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEndpointResponse>(await this.callApi(params, req, runtime), new CreateEndpointResponse({}));
  }

  /**
   * 创建端点
   * 
   * @param request - CreateEndpointRequest
   * @returns CreateEndpointResponse
   */
  async createEndpoint(request: CreateEndpointRequest): Promise<CreateEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEndpointWithOptions(request, headers, runtime);
  }

  /**
   * 创建快照
   * 
   * @param request - CreateSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(appName: string, repository: string, request: CreateSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indices)) {
      body["indices"] = request.indices;
    }

    if (!Util.isUnset(request.snapshot)) {
      body["snapshot"] = request.snapshot;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSnapshot",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/snapshot-repositories/${OpenApiUtil.getEncodeParam(repository)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
  }

  /**
   * 创建快照
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(appName: string, repository: string, request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSnapshotWithOptions(appName, repository, request, headers, runtime);
  }

  /**
   * 删除Serverless应用。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  /**
   * 删除Serverless应用。
   * @returns DeleteAppResponse
   */
  async deleteApp(appName: string): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppWithOptions(appName, headers, runtime);
  }

  /**
   * 删除词典
   * 
   * @param request - DeleteDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDictResponse
   */
  async deleteDictWithOptions(appName: string, request: DeleteDictRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDictResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDict",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/dicts/actions/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDictResponse>(await this.callApi(params, req, runtime), new DeleteDictResponse({}));
  }

  /**
   * 删除词典
   * 
   * @param request - DeleteDictRequest
   * @returns DeleteDictResponse
   */
  async deleteDict(appName: string, request: DeleteDictRequest): Promise<DeleteDictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDictWithOptions(appName, request, headers, runtime);
  }

  /**
   * 删除端点
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointResponse
   */
  async deleteEndpointWithOptions(endpointId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEndpointResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints/${OpenApiUtil.getEncodeParam(endpointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEndpointResponse>(await this.callApi(params, req, runtime), new DeleteEndpointResponse({}));
  }

  /**
   * 删除端点
   * @returns DeleteEndpointResponse
   */
  async deleteEndpoint(endpointId: string): Promise<DeleteEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEndpointWithOptions(endpointId, headers, runtime);
  }

  /**
   * 删除快照
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(appName: string, repository: string, snapshot: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnapshot",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/snapshot-repositories/${OpenApiUtil.getEncodeParam(repository)}/snapshots/${OpenApiUtil.getEncodeParam(snapshot)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
  }

  /**
   * 删除快照
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(appName: string, repository: string, snapshot: string): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSnapshotWithOptions(appName, repository, snapshot, headers, runtime);
  }

  /**
   * 获取Serverless应用详情
   * 
   * @param request - GetAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppResponse
   */
  async getAppWithOptions(appName: string, request: GetAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.detailed)) {
      query["detailed"] = request.detailed;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  /**
   * 获取Serverless应用详情
   * 
   * @param request - GetAppRequest
   * @returns GetAppResponse
   */
  async getApp(appName: string, request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取Serverless应用配额详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppQuotaResponse
   */
  async getAppQuotaWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAppQuota",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/quota`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppQuotaResponse>(await this.callApi(params, req, runtime), new GetAppQuotaResponse({}));
  }

  /**
   * 获取Serverless应用配额详情
   * @returns GetAppQuotaResponse
   */
  async getAppQuota(appName: string): Promise<GetAppQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppQuotaWithOptions(appName, headers, runtime);
  }

  /**
   * 获取监控数据
   * 
   * @param request - GetMonitorDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorDataResponse
   */
  async getMonitorDataWithOptions(request: GetMonitorDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMonitorDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "GetMonitorData",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/emon/metrics/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMonitorDataResponse>(await this.callApi(params, req, runtime), new GetMonitorDataResponse({}));
  }

  /**
   * 获取监控数据
   * 
   * @param request - GetMonitorDataRequest
   * @returns GetMonitorDataResponse
   */
  async getMonitorData(request: GetMonitorDataRequest): Promise<GetMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取自动备份配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSnapshotSettingResponse
   */
  async getSnapshotSettingWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSnapshotSettingResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSnapshotSetting",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/auto-snapshot-setting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSnapshotSettingResponse>(await this.callApi(params, req, runtime), new GetSnapshotSettingResponse({}));
  }

  /**
   * 获取自动备份配置
   * @returns GetSnapshotSettingResponse
   */
  async getSnapshotSetting(appName: string): Promise<GetSnapshotSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSnapshotSettingWithOptions(appName, headers, runtime);
  }

  /**
   * 获取配额审批详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpecReviewTaskResponse
   */
  async getSpecReviewTaskWithOptions(appName: string, taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSpecReviewTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSpecReviewTask",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/spec-review-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSpecReviewTaskResponse>(await this.callApi(params, req, runtime), new GetSpecReviewTaskResponse({}));
  }

  /**
   * 获取配额审批详情
   * @returns GetSpecReviewTaskResponse
   */
  async getSpecReviewTask(appName: string, taskId: string): Promise<GetSpecReviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSpecReviewTaskWithOptions(appName, taskId, headers, runtime);
  }

  /**
   * 查看Serverless应用列表
   * 
   * @param request - ListAppsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: ListAppsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["appName"] = request.appName;
    }

    if (!Util.isUnset(request.createTime)) {
      query["createTime"] = request.createTime;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.orderType)) {
      query["orderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApps",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  /**
   * 查看Serverless应用列表
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppsWithOptions(request, headers, runtime);
  }

  /**
   * 获取词典列表
   * 
   * @param request - ListDictsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDictsResponse
   */
  async listDictsWithOptions(appName: string, request: ListDictsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDictsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDicts",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/dicts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDictsResponse>(await this.callApi(params, req, runtime), new ListDictsResponse({}));
  }

  /**
   * 获取词典列表
   * 
   * @param request - ListDictsRequest
   * @returns ListDictsResponse
   */
  async listDicts(appName: string, request: ListDictsRequest): Promise<ListDictsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取端点信息列表
   * 
   * @param request - ListEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEndpointsResponse
   */
  async listEndpointsWithOptions(request: ListEndpointsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEndpointsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEndpoints",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEndpointsResponse>(await this.callApi(params, req, runtime), new ListEndpointsResponse({}));
  }

  /**
   * 获取端点信息列表
   * 
   * @param request - ListEndpointsRequest
   * @returns ListEndpointsResponse
   */
  async listEndpoints(request: ListEndpointsRequest): Promise<ListEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEndpointsWithOptions(request, headers, runtime);
  }

  /**
   * 查看索引列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
   */
  async listIndicesWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndicesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListIndices",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIndicesResponse>(await this.callApi(params, req, runtime), new ListIndicesResponse({}));
  }

  /**
   * 查看索引列表
   * @returns ListIndicesResponse
   */
  async listIndices(appName: string): Promise<ListIndicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(appName, headers, runtime);
  }

  /**
   * 获取快照仓库列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotRepositoriesResponse
   */
  async listSnapshotRepositoriesWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSnapshotRepositoriesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSnapshotRepositories",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/snapshot-repositories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotRepositoriesResponse>(await this.callApi(params, req, runtime), new ListSnapshotRepositoriesResponse({}));
  }

  /**
   * 获取快照仓库列表
   * @returns ListSnapshotRepositoriesResponse
   */
  async listSnapshotRepositories(appName: string): Promise<ListSnapshotRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotRepositoriesWithOptions(appName, headers, runtime);
  }

  /**
   * 获取仓库的快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(appName: string, request: ListSnapshotsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSnapshotsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.repository)) {
      query["repository"] = request.repository;
    }

    if (!Util.isUnset(request.snapshot)) {
      query["snapshot"] = request.snapshot;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSnapshots",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotsResponse>(await this.callApi(params, req, runtime), new ListSnapshotsResponse({}));
  }

  /**
   * 获取仓库的快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(appName: string, request: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取规格审批列表
   * 
   * @param request - ListSpecReviewTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSpecReviewTasksResponse
   */
  async listSpecReviewTasksWithOptions(appName: string, request: ListSpecReviewTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSpecReviewTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSpecReviewTasks",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/spec-review-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSpecReviewTasksResponse>(await this.callApi(params, req, runtime), new ListSpecReviewTasksResponse({}));
  }

  /**
   * 获取规格审批列表
   * 
   * @param request - ListSpecReviewTasksRequest
   * @returns ListSpecReviewTasksResponse
   */
  async listSpecReviewTasks(appName: string, request: ListSpecReviewTasksRequest): Promise<ListSpecReviewTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSpecReviewTasksWithOptions(appName, request, headers, runtime);
  }

  /**
   * 编辑Serverless应用
   * 
   * @param request - UpdateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppResponse
   */
  async updateAppWithOptions(appName: string, request: UpdateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyReason)) {
      body["applyReason"] = request.applyReason;
    }

    if (!Util.isUnset(request.authentication)) {
      body["authentication"] = request.authentication;
    }

    if (!Util.isUnset(request.contactInfo)) {
      body["contactInfo"] = request.contactInfo;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.limiterInfo)) {
      body["limiterInfo"] = request.limiterInfo;
    }

    if (!Util.isUnset(request.network)) {
      body["network"] = request.network;
    }

    if (!Util.isUnset(request.privateNetwork)) {
      body["privateNetwork"] = request.privateNetwork;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  /**
   * 编辑Serverless应用
   * 
   * @param request - UpdateAppRequest
   * @returns UpdateAppResponse
   */
  async updateApp(appName: string, request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppWithOptions(appName, request, headers, runtime);
  }

  /**
   * 创建或更新词典
   * 
   * @param request - UpdateDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDictResponse
   */
  async updateDictWithOptions(appName: string, request: UpdateDictRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDictResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowCover)) {
      query["allowCover"] = request.allowCover;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.files)) {
      body["files"] = request.files;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["sourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDict",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/dicts`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDictResponse>(await this.callApi(params, req, runtime), new UpdateDictResponse({}));
  }

  /**
   * 创建或更新词典
   * 
   * @param request - UpdateDictRequest
   * @returns UpdateDictResponse
   */
  async updateDict(appName: string, request: UpdateDictRequest): Promise<UpdateDictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDictWithOptions(appName, request, headers, runtime);
  }

  /**
   * 修改端点信息
   * 
   * @param request - UpdateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEndpointResponse
   */
  async updateEndpointWithOptions(endpointId: string, request: UpdateEndpointRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endpointZones)) {
      body["endpointZones"] = request.endpointZones;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints/${OpenApiUtil.getEncodeParam(endpointId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEndpointResponse>(await this.callApi(params, req, runtime), new UpdateEndpointResponse({}));
  }

  /**
   * 修改端点信息
   * 
   * @param request - UpdateEndpointRequest
   * @returns UpdateEndpointResponse
   */
  async updateEndpoint(endpointId: string, request: UpdateEndpointRequest): Promise<UpdateEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEndpointWithOptions(endpointId, request, headers, runtime);
  }

  /**
   * 修改自动备份配置
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSettingWithOptions(appName: string, request: UpdateSnapshotSettingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSnapshotSettingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!Util.isUnset(request.quartzRegex)) {
      body["quartzRegex"] = request.quartzRegex;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSnapshotSetting",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${OpenApiUtil.getEncodeParam(appName)}/auto-snapshot-setting`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSnapshotSettingResponse>(await this.callApi(params, req, runtime), new UpdateSnapshotSettingResponse({}));
  }

  /**
   * 修改自动备份配置
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSetting(appName: string, request: UpdateSnapshotSettingRequest): Promise<UpdateSnapshotSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSnapshotSettingWithOptions(appName, request, headers, runtime);
  }

}
