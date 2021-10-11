// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AiStoreUserTask extends $tea.Model {
  id?: number;
  gmtCreate?: string;
  gmtModified?: string;
  region?: string;
  regionDesc?: string;
  name?: string;
  product?: string;
  productDesc?: string;
  apiName?: string;
  apiDesc?: string;
  version?: string;
  paramInfo?: string;
  bucketName?: string;
  bucketKeyPrefix?: string;
  remark?: string;
  receiveConfig?: string;
  status?: string;
  enableTime?: string;
  disableTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      region: 'Region',
      regionDesc: 'RegionDesc',
      name: 'Name',
      product: 'Product',
      productDesc: 'ProductDesc',
      apiName: 'ApiName',
      apiDesc: 'ApiDesc',
      version: 'Version',
      paramInfo: 'ParamInfo',
      bucketName: 'BucketName',
      bucketKeyPrefix: 'BucketKeyPrefix',
      remark: 'Remark',
      receiveConfig: 'ReceiveConfig',
      status: 'Status',
      enableTime: 'EnableTime',
      disableTime: 'DisableTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      region: 'string',
      regionDesc: 'string',
      name: 'string',
      product: 'string',
      productDesc: 'string',
      apiName: 'string',
      apiDesc: 'string',
      version: 'string',
      paramInfo: 'string',
      bucketName: 'string',
      bucketKeyPrefix: 'string',
      remark: 'string',
      receiveConfig: 'string',
      status: 'string',
      enableTime: 'string',
      disableTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreReceiveConfig extends $tea.Model {
  eventBridge?: AiStoreReceiveConfigEventBridge;
  mns?: AiStoreReceiveConfigMns;
  static names(): { [key: string]: string } {
    return {
      eventBridge: 'EventBridge',
      mns: 'Mns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridge: AiStoreReceiveConfigEventBridge,
      mns: AiStoreReceiveConfigMns,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStoreApiNode extends $tea.Model {
  product?: string;
  productDesc?: string;
  apis?: AiStoreUserTask[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      productDesc: 'ProductDesc',
      apis: 'Apis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      productDesc: 'string',
      apis: { 'type': 'array', 'itemType': AiStoreUserTask },
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
  requestId?: string;
  data?: AiStoreUserTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AiStoreUserTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAiStoreUserTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageRequest extends $tea.Model {
  product?: string;
  apiName?: string;
  status?: string;
  pageNo?: number;
  pageSize?: number;
  name?: string;
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      apiName: 'ApiName',
      status: 'Status',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      name: 'Name',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      apiName: 'string',
      status: 'string',
      pageNo: 'number',
      pageSize: 'number',
      name: 'string',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryAiStoreUserTaskPageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: QueryAiStoreUserTaskPageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreUserTaskPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAiStoreUserTaskPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAiStoreUserTaskPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreRegionsResponseBody extends $tea.Model {
  requestId?: string;
  data?: AiStoreUserTask[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': AiStoreUserTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAiStoreRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAiStoreRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiStoreBucketsRequest extends $tea.Model {
  product?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiStoreBucketsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiStoreBucketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAiStoreBucketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAiStoreBucketsResponseBody,
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
  requestId?: string;
  data?: AiStoreUserTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AiStoreUserTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreUserTaskByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAiStoreUserTaskByNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAiStoreUserTaskByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiStoreUserTaskRequest extends $tea.Model {
  product?: string;
  apiName?: string;
  bucketName?: string;
  bucketKeyPrefix?: string;
  name?: string;
  paramInfo?: string;
  remark?: string;
  receiveConfig?: string;
  status?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      apiName: 'ApiName',
      bucketName: 'BucketName',
      bucketKeyPrefix: 'BucketKeyPrefix',
      name: 'Name',
      paramInfo: 'ParamInfo',
      remark: 'Remark',
      receiveConfig: 'ReceiveConfig',
      status: 'Status',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      apiName: 'string',
      bucketName: 'string',
      bucketKeyPrefix: 'string',
      name: 'string',
      paramInfo: 'string',
      remark: 'string',
      receiveConfig: 'string',
      status: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiStoreUserTaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiStoreUserTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAiStoreUserTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAiStoreUserTaskRequest extends $tea.Model {
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

export class DisableAiStoreUserTaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAiStoreUserTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableAiStoreUserTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreApiTreeResponseBody extends $tea.Model {
  requestId?: string;
  data?: AiStoreApiNode[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': AiStoreApiNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiStoreApiTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAiStoreApiTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAiStoreApiTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiStoreUserTaskRequest extends $tea.Model {
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

export class DeleteAiStoreUserTaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAiStoreUserTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAiStoreUserTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreUserTaskRequest extends $tea.Model {
  product?: string;
  apiName?: string;
  bucketName?: string;
  bucketKeyPrefix?: string;
  name?: string;
  paramInfo?: string;
  remark?: string;
  receiveConfig?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      apiName: 'ApiName',
      bucketName: 'BucketName',
      bucketKeyPrefix: 'BucketKeyPrefix',
      name: 'Name',
      paramInfo: 'ParamInfo',
      remark: 'Remark',
      receiveConfig: 'ReceiveConfig',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      apiName: 'string',
      bucketName: 'string',
      bucketKeyPrefix: 'string',
      name: 'string',
      paramInfo: 'string',
      remark: 'string',
      receiveConfig: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreUserTaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreUserTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAiStoreUserTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAiStoreUserTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreReceiveConfigRequest extends $tea.Model {
  product?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreReceiveConfigResponseBody extends $tea.Model {
  requestId?: string;
  data?: AiStoreReceiveConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AiStoreReceiveConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreReceiveConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAiStoreReceiveConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAiStoreReceiveConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreReceiveConfigRequest extends $tea.Model {
  product?: string;
  apiName?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      apiName: 'ApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      apiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreReceiveConfigResponseBody extends $tea.Model {
  requestId?: string;
  data?: AiStoreReceiveConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AiStoreReceiveConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiStoreReceiveConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAiStoreReceiveConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAiStoreReceiveConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAiStoreUserTaskRequest extends $tea.Model {
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

export class EnableAiStoreUserTaskResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAiStoreUserTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableAiStoreUserTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableAiStoreUserTaskResponseBody,
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
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAiStoreBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAiStoreBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAiStoreBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingRequest extends $tea.Model {
  roleArn?: string;
  serviceName?: string;
  SPIRegionId?: string;
  deletionTaskId?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      SPIRegionId: 'SPIRegionId',
      deletionTaskId: 'DeletionTaskId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      serviceName: 'string',
      SPIRegionId: 'string',
      deletionTaskId: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBody extends $tea.Model {
  requestId?: string;
  deletable?: boolean;
  roleUsages?: CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deletable: 'Deletable',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deletable: 'boolean',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckServiceLinkedRoleForDeletingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckServiceLinkedRoleForDeletingResponseBody,
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

  async getAiStoreUserTaskWithOptions(request: GetAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAiStoreUserTaskResponse>(await this.doRPCRequest("GetAiStoreUserTask", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAiStoreUserTaskResponse({}));
  }

  async getAiStoreUserTask(request: GetAiStoreUserTaskRequest): Promise<GetAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiStoreUserTaskWithOptions(request, runtime);
  }

  async queryAiStoreUserTaskPageWithOptions(request: QueryAiStoreUserTaskPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryAiStoreUserTaskPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAiStoreUserTaskPageResponse>(await this.doRPCRequest("QueryAiStoreUserTaskPage", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAiStoreUserTaskPageResponse({}));
  }

  async queryAiStoreUserTaskPage(request: QueryAiStoreUserTaskPageRequest): Promise<QueryAiStoreUserTaskPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAiStoreUserTaskPageWithOptions(request, runtime);
  }

  async queryAiStoreRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAiStoreRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryAiStoreRegionsResponse>(await this.doRPCRequest("QueryAiStoreRegions", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAiStoreRegionsResponse({}));
  }

  async queryAiStoreRegions(): Promise<QueryAiStoreRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAiStoreRegionsWithOptions(runtime);
  }

  async listAiStoreBucketsWithOptions(request: ListAiStoreBucketsRequest, runtime: $Util.RuntimeOptions): Promise<ListAiStoreBucketsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAiStoreBucketsResponse>(await this.doRPCRequest("ListAiStoreBuckets", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListAiStoreBucketsResponse({}));
  }

  async listAiStoreBuckets(request: ListAiStoreBucketsRequest): Promise<ListAiStoreBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAiStoreBucketsWithOptions(request, runtime);
  }

  async getAiStoreUserTaskByNameWithOptions(request: GetAiStoreUserTaskByNameRequest, runtime: $Util.RuntimeOptions): Promise<GetAiStoreUserTaskByNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAiStoreUserTaskByNameResponse>(await this.doRPCRequest("GetAiStoreUserTaskByName", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAiStoreUserTaskByNameResponse({}));
  }

  async getAiStoreUserTaskByName(request: GetAiStoreUserTaskByNameRequest): Promise<GetAiStoreUserTaskByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiStoreUserTaskByNameWithOptions(request, runtime);
  }

  async updateAiStoreUserTaskWithOptions(request: UpdateAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAiStoreUserTaskResponse>(await this.doRPCRequest("UpdateAiStoreUserTask", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAiStoreUserTaskResponse({}));
  }

  async updateAiStoreUserTask(request: UpdateAiStoreUserTaskRequest): Promise<UpdateAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAiStoreUserTaskWithOptions(request, runtime);
  }

  async disableAiStoreUserTaskWithOptions(request: DisableAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<DisableAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableAiStoreUserTaskResponse>(await this.doRPCRequest("DisableAiStoreUserTask", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DisableAiStoreUserTaskResponse({}));
  }

  async disableAiStoreUserTask(request: DisableAiStoreUserTaskRequest): Promise<DisableAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAiStoreUserTaskWithOptions(request, runtime);
  }

  async queryAiStoreApiTreeWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAiStoreApiTreeResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryAiStoreApiTreeResponse>(await this.doRPCRequest("QueryAiStoreApiTree", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAiStoreApiTreeResponse({}));
  }

  async queryAiStoreApiTree(): Promise<QueryAiStoreApiTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAiStoreApiTreeWithOptions(runtime);
  }

  async deleteAiStoreUserTaskWithOptions(request: DeleteAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAiStoreUserTaskResponse>(await this.doRPCRequest("DeleteAiStoreUserTask", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAiStoreUserTaskResponse({}));
  }

  async deleteAiStoreUserTask(request: DeleteAiStoreUserTaskRequest): Promise<DeleteAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAiStoreUserTaskWithOptions(request, runtime);
  }

  async createAiStoreUserTaskWithOptions(request: CreateAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAiStoreUserTaskResponse>(await this.doRPCRequest("CreateAiStoreUserTask", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAiStoreUserTaskResponse({}));
  }

  async createAiStoreUserTask(request: CreateAiStoreUserTaskRequest): Promise<CreateAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiStoreUserTaskWithOptions(request, runtime);
  }

  async createAiStoreReceiveConfigWithOptions(request: CreateAiStoreReceiveConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiStoreReceiveConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAiStoreReceiveConfigResponse>(await this.doRPCRequest("CreateAiStoreReceiveConfig", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAiStoreReceiveConfigResponse({}));
  }

  async createAiStoreReceiveConfig(request: CreateAiStoreReceiveConfigRequest): Promise<CreateAiStoreReceiveConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiStoreReceiveConfigWithOptions(request, runtime);
  }

  async getAiStoreReceiveConfigWithOptions(request: GetAiStoreReceiveConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAiStoreReceiveConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAiStoreReceiveConfigResponse>(await this.doRPCRequest("GetAiStoreReceiveConfig", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetAiStoreReceiveConfigResponse({}));
  }

  async getAiStoreReceiveConfig(request: GetAiStoreReceiveConfigRequest): Promise<GetAiStoreReceiveConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiStoreReceiveConfigWithOptions(request, runtime);
  }

  async enableAiStoreUserTaskWithOptions(request: EnableAiStoreUserTaskRequest, runtime: $Util.RuntimeOptions): Promise<EnableAiStoreUserTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableAiStoreUserTaskResponse>(await this.doRPCRequest("EnableAiStoreUserTask", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new EnableAiStoreUserTaskResponse({}));
  }

  async enableAiStoreUserTask(request: EnableAiStoreUserTaskRequest): Promise<EnableAiStoreUserTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAiStoreUserTaskWithOptions(request, runtime);
  }

  async createAiStoreBucketWithOptions(request: CreateAiStoreBucketRequest, runtime: $Util.RuntimeOptions): Promise<CreateAiStoreBucketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAiStoreBucketResponse>(await this.doRPCRequest("CreateAiStoreBucket", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAiStoreBucketResponse({}));
  }

  async createAiStoreBucket(request: CreateAiStoreBucketRequest): Promise<CreateAiStoreBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAiStoreBucketWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleForDeletingWithOptions(request: CheckServiceLinkedRoleForDeletingRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckServiceLinkedRoleForDeletingResponse>(await this.doRPCRequest("CheckServiceLinkedRoleForDeleting", "2021-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CheckServiceLinkedRoleForDeletingResponse({}));
  }

  async checkServiceLinkedRoleForDeleting(request: CheckServiceLinkedRoleForDeletingRequest): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
  }

}
