// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataStreamMapping extends $tea.Model {
  caseSensitive?: boolean;
  docValues?: boolean;
  index?: boolean;
  key?: string;
  properties?: DataStreamMapping[];
  tokenizeOnChars?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      caseSensitive: 'caseSensitive',
      docValues: 'docValues',
      index: 'index',
      key: 'key',
      properties: 'properties',
      tokenizeOnChars: 'tokenizeOnChars',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseSensitive: 'boolean',
      docValues: 'boolean',
      index: 'boolean',
      key: 'string',
      properties: { 'type': 'array', 'itemType': DataStreamMapping },
      tokenizeOnChars: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  appName?: string;
  chargeType?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      chargeType: 'chargeType',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      chargeType: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResponseBody;
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

export class CreateDataStreamRequest extends $tea.Model {
  dataStreamName?: string;
  deletePhase?: string;
  dynamic?: string;
  regionId?: string;
  template?: CreateDataStreamRequestTemplate;
  timeStampKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataStreamName: 'dataStreamName',
      deletePhase: 'deletePhase',
      dynamic: 'dynamic',
      regionId: 'regionId',
      template: 'template',
      timeStampKey: 'timeStampKey',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStreamName: 'string',
      deletePhase: 'string',
      dynamic: 'string',
      regionId: 'string',
      template: CreateDataStreamRequestTemplate,
      timeStampKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDataStreamResponseBody;
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
      body: CreateDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccessTokenResponseBody;
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
      body: DeleteAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppResponseBody;
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

export class DeleteDataStreamResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDataStreamResponseBody;
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
      body: DeleteDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescibeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescibeRegionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescibeRegionsResponseBody;
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
      body: DescibeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAccessTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableAccessTokenResponseBody;
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
      body: DisableAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAccessTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableAccessTokenResponseBody;
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
      body: EnableAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAcccessTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAcccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateAcccessTokenResponseBody;
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
      body: GenerateAcccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppResponseBody;
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

export class GetDataStreamResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetDataStreamResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDataStreamResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDataStreamResponseBody;
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
      body: GetDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionInfoResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRegionInfoResponseBody;
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
      body: GetRegionInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensRequest extends $tea.Model {
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessTokensResponseBody;
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
      body: ListAccessTokensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  appName?: string;
  description?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      description: 'description',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAppsResponseBodyResult[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppsResponseBody;
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

export class ListDataStreamsRequest extends $tea.Model {
  dataStreamName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataStreamName: 'dataStreamName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStreamName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDataStreamsResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResult },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataStreamsResponseBody;
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
      body: ListDataStreamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppResponseBody;
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

export class UpdateDataStreamRequest extends $tea.Model {
  deletePhase?: string;
  dynamic?: string;
  template?: UpdateDataStreamRequestTemplate;
  timeStampKey?: string;
  static names(): { [key: string]: string } {
    return {
      deletePhase: 'deletePhase',
      dynamic: 'dynamic',
      template: 'template',
      timeStampKey: 'timeStampKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePhase: 'string',
      dynamic: 'string',
      template: UpdateDataStreamRequestTemplate,
      timeStampKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataStreamResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateDataStreamResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateDataStreamResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDataStreamResponseBody;
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
      body: UpdateDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamRequestTemplate extends $tea.Model {
  mappings?: DataStreamMapping[];
  static names(): { [key: string]: string } {
    return {
      mappings: 'mappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'array', 'itemType': DataStreamMapping },
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

export class DescibeRegionsResponseBodyResult extends $tea.Model {
  endpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      localName: 'localName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResult extends $tea.Model {
  appName?: string;
  createTime?: string;
  description?: string;
  flowQuota?: string;
  ownerId?: string;
  regionId?: string;
  status?: string;
  storageQuota?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      description: 'description',
      flowQuota: 'flowQuota',
      ownerId: 'ownerId',
      regionId: 'regionId',
      status: 'status',
      storageQuota: 'storageQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      description: 'string',
      flowQuota: 'string',
      ownerId: 'string',
      regionId: 'string',
      status: 'string',
      storageQuota: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStreamResponseBodyResultTemplate extends $tea.Model {
  mappings?: DataStreamMapping[];
  static names(): { [key: string]: string } {
    return {
      mappings: 'mappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'array', 'itemType': DataStreamMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStreamResponseBodyResult extends $tea.Model {
  appName?: string;
  createTime?: string;
  dataStreamId?: string;
  dataStreamName?: string;
  deletePhase?: string;
  regionId?: string;
  template?: GetDataStreamResponseBodyResultTemplate;
  timeStampKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      dataStreamId: 'dataStreamId',
      dataStreamName: 'dataStreamName',
      deletePhase: 'deletePhase',
      regionId: 'regionId',
      template: 'template',
      timeStampKey: 'timeStampKey',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      dataStreamId: 'string',
      dataStreamName: 'string',
      deletePhase: 'string',
      regionId: 'string',
      template: GetDataStreamResponseBodyResultTemplate,
      timeStampKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResult extends $tea.Model {
  appName?: string;
  createTime?: string;
  description?: string;
  flowQuota?: string;
  ownerId?: string;
  regionId?: string;
  status?: string;
  storageQuota?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      description: 'description',
      flowQuota: 'flowQuota',
      ownerId: 'ownerId',
      regionId: 'regionId',
      status: 'status',
      storageQuota: 'storageQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      description: 'string',
      flowQuota: 'string',
      ownerId: 'string',
      regionId: 'string',
      status: 'string',
      storageQuota: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResultTemplate extends $tea.Model {
  mappings?: DataStreamMapping[];
  static names(): { [key: string]: string } {
    return {
      mappings: 'mappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'array', 'itemType': DataStreamMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResult extends $tea.Model {
  appName?: string;
  createTime?: string;
  dataStreamId?: string;
  dataStreamName?: string;
  deletePhase?: string;
  regionId?: string;
  template?: ListDataStreamsResponseBodyResultTemplate;
  timeStampKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      dataStreamId: 'dataStreamId',
      dataStreamName: 'dataStreamName',
      deletePhase: 'deletePhase',
      regionId: 'regionId',
      template: 'template',
      timeStampKey: 'timeStampKey',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      dataStreamId: 'string',
      dataStreamName: 'string',
      deletePhase: 'string',
      regionId: 'string',
      template: ListDataStreamsResponseBodyResultTemplate,
      timeStampKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataStreamRequestTemplate extends $tea.Model {
  mappings?: DataStreamMapping[];
  static names(): { [key: string]: string } {
    return {
      mappings: 'mappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'array', 'itemType': DataStreamMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataStreamResponseBodyResult extends $tea.Model {
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
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

  async createAppWithOptions(request: CreateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["appName"] = request.appName;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(request, headers, runtime);
  }

  async createDataStreamWithOptions(appName: string, request: CreateDataStreamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataStreamResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataStreamName)) {
      body["dataStreamName"] = request.dataStreamName;
    }

    if (!Util.isUnset(request.deletePhase)) {
      body["deletePhase"] = request.deletePhase;
    }

    if (!Util.isUnset(request.dynamic)) {
      body["dynamic"] = request.dynamic;
    }

    if (!Util.isUnset(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset(request.timeStampKey)) {
      body["timeStampKey"] = request.timeStampKey;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataStream",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}/data-streams`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDataStreamResponse>(await this.callApi(params, req, runtime), new CreateDataStreamResponse({}));
  }

  async createDataStream(appName: string, request: CreateDataStreamRequest): Promise<CreateDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataStreamWithOptions(appName, request, headers, runtime);
  }

  async deleteAccessTokenWithOptions(tokenId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAccessTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessToken",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/tokens/${OpenApiUtil.getEncodeParam(tokenId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessTokenResponse>(await this.callApi(params, req, runtime), new DeleteAccessTokenResponse({}));
  }

  async deleteAccessToken(tokenId: string): Promise<DeleteAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAccessTokenWithOptions(tokenId, headers, runtime);
  }

  async deleteAppWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(appName: string): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppWithOptions(appName, headers, runtime);
  }

  async deleteDataStreamWithOptions(appName: string, dataStreamName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataStreamResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataStream",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}/data-streams/${OpenApiUtil.getEncodeParam(dataStreamName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataStreamResponse>(await this.callApi(params, req, runtime), new DeleteDataStreamResponse({}));
  }

  async deleteDataStream(appName: string, dataStreamName: string): Promise<DeleteDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataStreamWithOptions(appName, dataStreamName, headers, runtime);
  }

  async descibeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescibeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescibeRegions",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescibeRegionsResponse>(await this.callApi(params, req, runtime), new DescibeRegionsResponse({}));
  }

  async descibeRegions(): Promise<DescibeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.descibeRegionsWithOptions(headers, runtime);
  }

  async disableAccessTokenWithOptions(tokenId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableAccessTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DisableAccessToken",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/tokens/${OpenApiUtil.getEncodeParam(tokenId)}/actions/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableAccessTokenResponse>(await this.callApi(params, req, runtime), new DisableAccessTokenResponse({}));
  }

  async disableAccessToken(tokenId: string): Promise<DisableAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableAccessTokenWithOptions(tokenId, headers, runtime);
  }

  async enableAccessTokenWithOptions(tokenId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableAccessTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "EnableAccessToken",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/tokens/${OpenApiUtil.getEncodeParam(tokenId)}/actions/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableAccessTokenResponse>(await this.callApi(params, req, runtime), new EnableAccessTokenResponse({}));
  }

  async enableAccessToken(tokenId: string): Promise<EnableAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableAccessTokenWithOptions(tokenId, headers, runtime);
  }

  async generateAcccessTokenWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateAcccessTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GenerateAcccessToken",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/tokens`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateAcccessTokenResponse>(await this.callApi(params, req, runtime), new GenerateAcccessTokenResponse({}));
  }

  async generateAcccessToken(): Promise<GenerateAcccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateAcccessTokenWithOptions(headers, runtime);
  }

  async getAppWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  async getApp(appName: string): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppWithOptions(appName, headers, runtime);
  }

  async getDataStreamWithOptions(appName: string, dataStreamName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataStreamResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDataStream",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}/data-streams/${OpenApiUtil.getEncodeParam(dataStreamName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDataStreamResponse>(await this.callApi(params, req, runtime), new GetDataStreamResponse({}));
  }

  async getDataStream(appName: string, dataStreamName: string): Promise<GetDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataStreamWithOptions(appName, dataStreamName, headers, runtime);
  }

  async getRegionInfoWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRegionInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRegionInfo",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/regions/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRegionInfoResponse>(await this.callApi(params, req, runtime), new GetRegionInfoResponse({}));
  }

  async getRegionInfo(): Promise<GetRegionInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionInfoWithOptions(headers, runtime);
  }

  async listAccessTokensWithOptions(request: ListAccessTokensRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAccessTokensResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tokenId)) {
      query["tokenId"] = request.tokenId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessTokens",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAccessTokensResponse>(await this.callApi(params, req, runtime), new ListAccessTokensResponse({}));
  }

  async listAccessTokens(request: ListAccessTokensRequest): Promise<ListAccessTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAccessTokensWithOptions(request, headers, runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      query["appName"] = request.appName;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

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
      action: "ListApps",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppsWithOptions(request, headers, runtime);
  }

  async listDataStreamsWithOptions(appName: string, request: ListDataStreamsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataStreamsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataStreamName)) {
      query["dataStreamName"] = request.dataStreamName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataStreams",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}/data-streams`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataStreamsResponse>(await this.callApi(params, req, runtime), new ListDataStreamsResponse({}));
  }

  async listDataStreams(appName: string, request: ListDataStreamsRequest): Promise<ListDataStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataStreamsWithOptions(appName, request, headers, runtime);
  }

  async updateAppWithOptions(appName: string, request: UpdateAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(appName: string, request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppWithOptions(appName, request, headers, runtime);
  }

  async updateDataStreamWithOptions(dataStreamName: string, appName: string, request: UpdateDataStreamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDataStreamResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deletePhase)) {
      body["deletePhase"] = request.deletePhase;
    }

    if (!Util.isUnset(request.dynamic)) {
      body["dynamic"] = request.dynamic;
    }

    if (!Util.isUnset(request.template)) {
      body["template"] = request.template;
    }

    if (!Util.isUnset(request.timeStampKey)) {
      body["timeStampKey"] = request.timeStampKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataStream",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: `/openapi/xops/instances/${OpenApiUtil.getEncodeParam(appName)}/data-streams/${OpenApiUtil.getEncodeParam(dataStreamName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataStreamResponse>(await this.callApi(params, req, runtime), new UpdateDataStreamResponse({}));
  }

  async updateDataStream(dataStreamName: string, appName: string, request: UpdateDataStreamRequest): Promise<UpdateDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDataStreamWithOptions(dataStreamName, appName, request, headers, runtime);
  }

}
