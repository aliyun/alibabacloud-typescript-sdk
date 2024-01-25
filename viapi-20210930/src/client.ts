// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AiStoreApiNode extends $tea.Model {
  apis?: AiStoreUserTask[];
  product?: string;
  productDesc?: string;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      product: 'Product',
      productDesc: 'ProductDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'array', 'itemType': AiStoreUserTask },
      product: 'string',
      productDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfig extends $tea.Model {
  custom?: string;
  dingTalk?: AiStoreReceiveConfigDingTalk;
  eventBridge?: AiStoreReceiveConfigEventBridge;
  http?: AiStoreReceiveConfigHttp;
  https?: AiStoreReceiveConfigHttps;
  mns?: AiStoreReceiveConfigMns;
  rocketMQ?: AiStoreReceiveConfigRocketMQ;
  static names(): { [key: string]: string } {
    return {
      custom: 'Custom',
      dingTalk: 'DingTalk',
      eventBridge: 'EventBridge',
      http: 'Http',
      https: 'Https',
      mns: 'Mns',
      rocketMQ: 'RocketMQ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custom: 'string',
      dingTalk: AiStoreReceiveConfigDingTalk,
      eventBridge: AiStoreReceiveConfigEventBridge,
      http: AiStoreReceiveConfigHttp,
      https: AiStoreReceiveConfigHttps,
      mns: AiStoreReceiveConfigMns,
      rocketMQ: AiStoreReceiveConfigRocketMQ,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreTemplate extends $tea.Model {
  templateContext?: string;
  templateVariable?: string;
  static names(): { [key: string]: string } {
    return {
      templateContext: 'TemplateContext',
      templateVariable: 'TemplateVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateContext: 'string',
      templateVariable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreUserTask extends $tea.Model {
  apiDesc?: string;
  apiName?: string;
  bucketKeyPrefix?: string;
  bucketName?: string;
  disableTime?: string;
  enableTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  paramInfo?: string;
  product?: string;
  productDesc?: string;
  receiveConfig?: string;
  region?: string;
  regionDesc?: string;
  remark?: string;
  status?: string;
  taskVersion?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiDesc: 'ApiDesc',
      apiName: 'ApiName',
      bucketKeyPrefix: 'BucketKeyPrefix',
      bucketName: 'BucketName',
      disableTime: 'DisableTime',
      enableTime: 'EnableTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      paramInfo: 'ParamInfo',
      product: 'Product',
      productDesc: 'ProductDesc',
      receiveConfig: 'ReceiveConfig',
      region: 'Region',
      regionDesc: 'RegionDesc',
      remark: 'Remark',
      status: 'Status',
      taskVersion: 'TaskVersion',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDesc: 'string',
      apiName: 'string',
      bucketKeyPrefix: 'string',
      bucketName: 'string',
      disableTime: 'string',
      enableTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      paramInfo: 'string',
      product: 'string',
      productDesc: 'string',
      receiveConfig: 'string',
      region: 'string',
      regionDesc: 'string',
      remark: 'string',
      status: 'string',
      taskVersion: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingRequest extends $tea.Model {
  accountId?: string;
  deletionTaskId?: string;
  roleArn?: string;
  SPIRegionId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      deletionTaskId: 'DeletionTaskId',
      roleArn: 'RoleArn',
      SPIRegionId: 'SPIRegionId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      deletionTaskId: 'string',
      roleArn: 'string',
      SPIRegionId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBody extends $tea.Model {
  deletable?: boolean;
  requestId?: string;
  roleUsages?: CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      requestId: 'RequestId',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      requestId: 'string',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckServiceLinkedRoleForDeletingResponseBody;
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
      body: CheckServiceLinkedRoleForDeletingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreBucketRequest extends $tea.Model {
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreBucketResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreBucketResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAiStoreBucketResponseBody;
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
      body: CreateAiStoreBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreReceiveConfigRequest extends $tea.Model {
  apiName?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreReceiveConfigResponseBody extends $tea.Model {
  data?: AiStoreReceiveConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AiStoreReceiveConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreReceiveConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAiStoreReceiveConfigResponseBody;
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
      body: CreateAiStoreReceiveConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreUserTaskRequest extends $tea.Model {
  apiName?: string;
  bucketKeyPrefix?: string;
  bucketName?: string;
  createConfig?: string;
  name?: string;
  paramInfo?: string;
  product?: string;
  receiveConfig?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      bucketKeyPrefix: 'BucketKeyPrefix',
      bucketName: 'BucketName',
      createConfig: 'CreateConfig',
      name: 'Name',
      paramInfo: 'ParamInfo',
      product: 'Product',
      receiveConfig: 'ReceiveConfig',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      bucketKeyPrefix: 'string',
      bucketName: 'string',
      createConfig: 'string',
      name: 'string',
      paramInfo: 'string',
      product: 'string',
      receiveConfig: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreUserTaskResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreUserTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAiStoreUserTaskResponseBody;
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
      body: CreateAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiStoreUserTaskRequest extends $tea.Model {
  aistoreVersion?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      aistoreVersion: 'AistoreVersion',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aistoreVersion: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiStoreUserTaskResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiStoreUserTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAiStoreUserTaskResponseBody;
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
      body: DeleteAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAiStoreUserTaskRequest extends $tea.Model {
  aistoreVersion?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      aistoreVersion: 'AistoreVersion',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aistoreVersion: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAiStoreUserTaskResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAiStoreUserTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAiStoreUserTaskResponseBody;
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
      body: DisableAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAiStoreUserTaskRequest extends $tea.Model {
  aistoreVersion?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      aistoreVersion: 'AistoreVersion',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aistoreVersion: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAiStoreUserTaskResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAiStoreUserTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAiStoreUserTaskResponseBody;
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
      body: EnableAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreReceiveConfigRequest extends $tea.Model {
  apiName?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreReceiveConfigResponseBody extends $tea.Model {
  data?: AiStoreReceiveConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AiStoreReceiveConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreReceiveConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiStoreReceiveConfigResponseBody;
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
      body: GetAiStoreReceiveConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskResponseBody extends $tea.Model {
  data?: AiStoreUserTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AiStoreUserTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiStoreUserTaskResponseBody;
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
      body: GetAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskByNameRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskByNameResponseBody extends $tea.Model {
  data?: AiStoreUserTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AiStoreUserTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskByNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiStoreUserTaskByNameResponseBody;
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
      body: GetAiStoreUserTaskByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiStoreBucketsRequest extends $tea.Model {
  apiName?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiStoreBucketsResponseBody extends $tea.Model {
  data?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiStoreBucketsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAiStoreBucketsResponseBody;
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
      body: ListAiStoreBucketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreApiTreeResponseBody extends $tea.Model {
  data?: AiStoreApiNode[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AiStoreApiNode },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreApiTreeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAiStoreApiTreeResponseBody;
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
      body: QueryAiStoreApiTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreRegionsResponseBody extends $tea.Model {
  data?: AiStoreUserTask[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AiStoreUserTask },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAiStoreRegionsResponseBody;
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
      body: QueryAiStoreRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageRequest extends $tea.Model {
  apiName?: string;
  bucketName?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  product?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      bucketName: 'BucketName',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      product: 'Product',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      bucketName: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      product: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageResponseBody extends $tea.Model {
  data?: QueryAiStoreUserTaskPageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryAiStoreUserTaskPageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAiStoreUserTaskPageResponseBody;
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
      body: QueryAiStoreUserTaskPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiStoreUserTaskRequest extends $tea.Model {
  apiName?: string;
  bucketKeyPrefix?: string;
  bucketName?: string;
  id?: number;
  name?: string;
  paramInfo?: string;
  product?: string;
  receiveConfig?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      bucketKeyPrefix: 'BucketKeyPrefix',
      bucketName: 'BucketName',
      id: 'Id',
      name: 'Name',
      paramInfo: 'ParamInfo',
      product: 'Product',
      receiveConfig: 'ReceiveConfig',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      bucketKeyPrefix: 'string',
      bucketName: 'string',
      id: 'number',
      name: 'string',
      paramInfo: 'string',
      product: 'string',
      receiveConfig: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiStoreUserTaskResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiStoreUserTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAiStoreUserTaskResponseBody;
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
      body: UpdateAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfigDingTalk extends $tea.Model {
  address?: string;
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      secret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfigEventBridge extends $tea.Model {
  eventBus?: string;
  eventRule?: string;
  static names(): { [key: string]: string } {
    return {
      eventBus: 'EventBus',
      eventRule: 'EventRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBus: 'string',
      eventRule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfigHttp extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfigHttps extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfigMns extends $tea.Model {
  queue?: string;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfigRocketMQ extends $tea.Model {
  instanceId?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages extends $tea.Model {
  region?: string;
  resources?: Buffer[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: { 'type': 'array', 'itemType': 'Buffer' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageResponseBodyData extends $tea.Model {
  taskList?: AiStoreUserTask[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': AiStoreUserTask },
      totalCount: 'number',
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
    this._endpoint = this.getEndpoint("viapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkServiceLinkedRoleForDeletingWithOptions(request: CheckServiceLinkedRoleForDeletingRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.SPIRegionId)) {
      query["SPIRegionId"] = request.SPIRegionId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckServiceLinkedRoleForDeleting",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckServiceLinkedRoleForDeletingResponse>(await this.callApi(params, req, runtime), new CheckServiceLinkedRoleForDeletingResponse({}));
  }

  async checkServiceLinkedRoleForDeleting(request: CheckServiceLinkedRoleForDeletingRequest): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
  }

  async createAiStoreBucketWithOptions(request: CreateAiStoreBucketRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiStoreBucketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bucketName)) {
      body["BucketName"] = request.bucketName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAiStoreBucket",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAiStoreBucketResponse>(await this.callApi(params, req, runtime), new CreateAiStoreBucketResponse({}));
  }

  async createAiStoreBucket(request: CreateAiStoreBucketRequest): Promise<CreateAiStoreBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiStoreBucketWithOptions(request, runtime);
  }

  async createAiStoreReceiveConfigWithOptions(request: CreateAiStoreReceiveConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiStoreReceiveConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.product)) {
      body["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAiStoreReceiveConfig",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAiStoreReceiveConfigResponse>(await this.callApi(params, req, runtime), new CreateAiStoreReceiveConfigResponse({}));
  }

  async createAiStoreReceiveConfig(request: CreateAiStoreReceiveConfigRequest): Promise<CreateAiStoreReceiveConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiStoreReceiveConfigWithOptions(request, runtime);
  }

  async createAiStoreUserTaskWithOptions(request: CreateAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.bucketKeyPrefix)) {
      body["BucketKeyPrefix"] = request.bucketKeyPrefix;
    }

    if (!Util.isUnset(request.bucketName)) {
      body["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.createConfig)) {
      body["CreateConfig"] = request.createConfig;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.paramInfo)) {
      body["ParamInfo"] = request.paramInfo;
    }

    if (!Util.isUnset(request.product)) {
      body["Product"] = request.product;
    }

    if (!Util.isUnset(request.receiveConfig)) {
      body["ReceiveConfig"] = request.receiveConfig;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAiStoreUserTask",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAiStoreUserTaskResponse>(await this.callApi(params, req, runtime), new CreateAiStoreUserTaskResponse({}));
  }

  async createAiStoreUserTask(request: CreateAiStoreUserTaskRequest): Promise<CreateAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiStoreUserTaskWithOptions(request, runtime);
  }

  async deleteAiStoreUserTaskWithOptions(request: DeleteAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aistoreVersion)) {
      body["AistoreVersion"] = request.aistoreVersion;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAiStoreUserTask",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAiStoreUserTaskResponse>(await this.callApi(params, req, runtime), new DeleteAiStoreUserTaskResponse({}));
  }

  async deleteAiStoreUserTask(request: DeleteAiStoreUserTaskRequest): Promise<DeleteAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAiStoreUserTaskWithOptions(request, runtime);
  }

  async disableAiStoreUserTaskWithOptions(request: DisableAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<DisableAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aistoreVersion)) {
      body["AistoreVersion"] = request.aistoreVersion;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableAiStoreUserTask",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableAiStoreUserTaskResponse>(await this.callApi(params, req, runtime), new DisableAiStoreUserTaskResponse({}));
  }

  async disableAiStoreUserTask(request: DisableAiStoreUserTaskRequest): Promise<DisableAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAiStoreUserTaskWithOptions(request, runtime);
  }

  async enableAiStoreUserTaskWithOptions(request: EnableAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<EnableAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aistoreVersion)) {
      body["AistoreVersion"] = request.aistoreVersion;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableAiStoreUserTask",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableAiStoreUserTaskResponse>(await this.callApi(params, req, runtime), new EnableAiStoreUserTaskResponse({}));
  }

  async enableAiStoreUserTask(request: EnableAiStoreUserTaskRequest): Promise<EnableAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAiStoreUserTaskWithOptions(request, runtime);
  }

  async getAiStoreReceiveConfigWithOptions(request: GetAiStoreReceiveConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAiStoreReceiveConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.product)) {
      body["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAiStoreReceiveConfig",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiStoreReceiveConfigResponse>(await this.callApi(params, req, runtime), new GetAiStoreReceiveConfigResponse({}));
  }

  async getAiStoreReceiveConfig(request: GetAiStoreReceiveConfigRequest): Promise<GetAiStoreReceiveConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiStoreReceiveConfigWithOptions(request, runtime);
  }

  async getAiStoreUserTaskWithOptions(request: GetAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAiStoreUserTask",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiStoreUserTaskResponse>(await this.callApi(params, req, runtime), new GetAiStoreUserTaskResponse({}));
  }

  async getAiStoreUserTask(request: GetAiStoreUserTaskRequest): Promise<GetAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiStoreUserTaskWithOptions(request, runtime);
  }

  async getAiStoreUserTaskByNameWithOptions(request: GetAiStoreUserTaskByNameRequest, runtime: $Util.RuntimeOptions): Promise<GetAiStoreUserTaskByNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAiStoreUserTaskByName",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiStoreUserTaskByNameResponse>(await this.callApi(params, req, runtime), new GetAiStoreUserTaskByNameResponse({}));
  }

  async getAiStoreUserTaskByName(request: GetAiStoreUserTaskByNameRequest): Promise<GetAiStoreUserTaskByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiStoreUserTaskByNameWithOptions(request, runtime);
  }

  async listAiStoreBucketsWithOptions(request: ListAiStoreBucketsRequest, runtime: $Util.RuntimeOptions): Promise<ListAiStoreBucketsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.product)) {
      body["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAiStoreBuckets",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAiStoreBucketsResponse>(await this.callApi(params, req, runtime), new ListAiStoreBucketsResponse({}));
  }

  async listAiStoreBuckets(request: ListAiStoreBucketsRequest): Promise<ListAiStoreBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAiStoreBucketsWithOptions(request, runtime);
  }

  async queryAiStoreApiTreeWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAiStoreApiTreeResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryAiStoreApiTree",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAiStoreApiTreeResponse>(await this.callApi(params, req, runtime), new QueryAiStoreApiTreeResponse({}));
  }

  async queryAiStoreApiTree(): Promise<QueryAiStoreApiTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAiStoreApiTreeWithOptions(runtime);
  }

  async queryAiStoreRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAiStoreRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryAiStoreRegions",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAiStoreRegionsResponse>(await this.callApi(params, req, runtime), new QueryAiStoreRegionsResponse({}));
  }

  async queryAiStoreRegions(): Promise<QueryAiStoreRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAiStoreRegionsWithOptions(runtime);
  }

  async queryAiStoreUserTaskPageWithOptions(request: QueryAiStoreUserTaskPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryAiStoreUserTaskPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAiStoreUserTaskPage",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAiStoreUserTaskPageResponse>(await this.callApi(params, req, runtime), new QueryAiStoreUserTaskPageResponse({}));
  }

  async queryAiStoreUserTaskPage(request: QueryAiStoreUserTaskPageRequest): Promise<QueryAiStoreUserTaskPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAiStoreUserTaskPageWithOptions(request, runtime);
  }

  async updateAiStoreUserTaskWithOptions(request: UpdateAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!Util.isUnset(request.bucketKeyPrefix)) {
      body["BucketKeyPrefix"] = request.bucketKeyPrefix;
    }

    if (!Util.isUnset(request.bucketName)) {
      body["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.paramInfo)) {
      body["ParamInfo"] = request.paramInfo;
    }

    if (!Util.isUnset(request.product)) {
      body["Product"] = request.product;
    }

    if (!Util.isUnset(request.receiveConfig)) {
      body["ReceiveConfig"] = request.receiveConfig;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAiStoreUserTask",
      version: "2021-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAiStoreUserTaskResponse>(await this.callApi(params, req, runtime), new UpdateAiStoreUserTaskResponse({}));
  }

  async updateAiStoreUserTask(request: UpdateAiStoreUserTaskRequest): Promise<UpdateAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAiStoreUserTaskWithOptions(request, runtime);
  }

}
