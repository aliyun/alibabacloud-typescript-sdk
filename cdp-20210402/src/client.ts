// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelOrderRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class CancelOrderResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOrderResponseBody;
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
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClusterNameRequest extends $tea.Model {
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClusterNameResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClusterNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckClusterNameResponseBody;
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
      body: CheckClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmNoticeRequest extends $tea.Model {
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmNoticeResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmNoticeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmNoticeResponseBody;
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
      body: ConfirmNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  clientToken?: string;
  clusterInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  data?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
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
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDetailRequest extends $tea.Model {
  clusterBizId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDetailResponseBody extends $tea.Model {
  data?: GetClusterDetailResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClusterDetailResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterDetailResponseBody;
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
      body: GetClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HasDefaultRoleResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HasDefaultRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HasDefaultRoleResponseBody;
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
      body: HasDefaultRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeClouderaDataPlatformResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeClouderaDataPlatformResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitializeClouderaDataPlatformResponseBody;
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
      body: InitializeClouderaDataPlatformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultComponentsRequest extends $tea.Model {
  clusterType?: string;
  securityMode?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      securityMode: 'SecurityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      securityMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultComponentsResponseBody extends $tea.Model {
  data?: string[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultComponentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDefaultComponentsResponseBody;
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
      body: ListDefaultComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupConstraintsRequest extends $tea.Model {
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupConstraintsResponseBody extends $tea.Model {
  data?: ListNodeGroupConstraintsResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodeGroupConstraintsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupConstraintsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeGroupConstraintsResponseBody;
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
      body: ListNodeGroupConstraintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  data?: ListNodesResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
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
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationsRequest extends $tea.Model {
  clusterBizId?: string;
  parentOperationNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      parentOperationNodeId: 'ParentOperationNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      parentOperationNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationsResponseBody extends $tea.Model {
  data?: ListOperationsResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOperationsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOperationsResponseBody;
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
      body: ListOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  data?: ListRegionsResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRegionsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBody extends $tea.Model {
  data?: string[];
  errMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      errMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListZonesResponseBody;
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
      body: ListZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderRequest extends $tea.Model {
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderResponseBody extends $tea.Model {
  data?: QueryOrderResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryOrderResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrderResponseBody;
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
      body: QueryOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  nodeGroupSpecs?: string;
  pricingCycle?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      nodeGroupSpecs: 'NodeGroupSpecs',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      nodeGroupSpecs: 'string',
      pricingCycle: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceResponseBody extends $tea.Model {
  data?: QueryPriceResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPriceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPriceResponseBody;
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
      body: QueryPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewOrderRequest extends $tea.Model {
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewOrderResponseBody extends $tea.Model {
  data?: number[];
  errMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      errMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRenewOrderResponseBody;
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
      body: QueryRenewOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceRequest extends $tea.Model {
  clusterBizId?: string;
  instances?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      instances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBody extends $tea.Model {
  data?: QueryRenewPriceResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryRenewPriceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRenewPriceResponseBody;
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
      body: QueryRenewPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpOrderRequest extends $tea.Model {
  clusterBizId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpOrderResponseBody extends $tea.Model {
  data?: number[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryScaleUpOrderResponseBody;
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
      body: QueryScaleUpOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpPriceRequest extends $tea.Model {
  clusterBizId?: string;
  coreNumber?: number;
  duration?: number;
  instanceId?: string;
  instanceType?: string;
  nodeGroupType?: string;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      coreNumber: 'CoreNumber',
      duration: 'Duration',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      nodeGroupType: 'NodeGroupType',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      coreNumber: 'number',
      duration: 'number',
      instanceId: 'string',
      instanceType: 'string',
      nodeGroupType: 'string',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpPriceResponseBody extends $tea.Model {
  data?: QueryScaleUpPriceResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryScaleUpPriceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryScaleUpPriceResponseBody;
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
      body: QueryScaleUpPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class ReleaseClusterResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseClusterResponseBody;
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
      body: ReleaseClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  clusterBizId?: string;
  instances?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      instances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  data?: RenewInstanceResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RenewInstanceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewInstanceResponseBody;
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
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleUpClusterRequest extends $tea.Model {
  clusterBizId?: string;
  coreNumber?: number;
  duration?: number;
  instanceId?: string;
  instanceType?: string;
  nodeGroupType?: string;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      coreNumber: 'CoreNumber',
      duration: 'Duration',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      nodeGroupType: 'NodeGroupType',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      coreNumber: 'number',
      duration: 'number',
      instanceId: 'string',
      instanceType: 'string',
      nodeGroupType: 'string',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleUpClusterResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleUpClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleUpClusterResponseBody;
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
      body: ScaleUpClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchClusterInstancesRequest extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchClusterInstancesResponseBody extends $tea.Model {
  data?: SearchClusterInstancesResponseBodyData[];
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SearchClusterInstancesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchClusterInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchClusterInstancesResponseBody;
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
      body: SearchClusterInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleOrderRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class SingleOrderResponseBody extends $tea.Model {
  data?: SingleOrderResponseBodyData;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SingleOrderResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SingleOrderResponseBody;
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
      body: SingleOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterNameRequest extends $tea.Model {
  clusterBizId?: string;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBizId: 'ClusterBizId',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBizId: 'string',
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterNameResponseBody extends $tea.Model {
  data?: boolean;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterNameResponseBody;
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
      body: UpdateClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadLicenseResponseBody extends $tea.Model {
  data?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadLicenseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadLicenseResponseBody;
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
      body: UploadLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDetailResponseBodyData extends $tea.Model {
  autoRenew?: boolean;
  beginTime?: number;
  clusterBizId?: string;
  clusterId?: string;
  clusterName?: string;
  clusterStatus?: string;
  clusterStatusValue?: number;
  clusterType?: string;
  controlCenterUrl?: string;
  deployMode?: string;
  duration?: number;
  expireTime?: number;
  gmtCreate?: number;
  gmtModified?: number;
  instanceConf?: { [key: string]: any };
  noticeConfirmed?: boolean;
  orderBizId?: string;
  packageType?: string;
  pricingCycle?: string;
  regionId?: string;
  runningTime?: number;
  version?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      beginTime: 'BeginTime',
      clusterBizId: 'ClusterBizId',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterStatusValue: 'ClusterStatusValue',
      clusterType: 'ClusterType',
      controlCenterUrl: 'ControlCenterUrl',
      deployMode: 'DeployMode',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceConf: 'InstanceConf',
      noticeConfirmed: 'NoticeConfirmed',
      orderBizId: 'OrderBizId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      runningTime: 'RunningTime',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      beginTime: 'number',
      clusterBizId: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterStatusValue: 'number',
      clusterType: 'string',
      controlCenterUrl: 'string',
      deployMode: 'string',
      duration: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      noticeConfirmed: 'boolean',
      orderBizId: 'string',
      packageType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      runningTime: 'number',
      version: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupConstraintsResponseBodyData extends $tea.Model {
  hostGroupType?: string;
  recommendedInstanceTypes?: string[];
  availableDataDiskCategories?: string[];
  availableInstanceTypes?: string[];
  availableSystemDiskCategories?: string[];
  defaultDataDiskCount?: number;
  defaultDataDiskSize?: number;
  defaultNodeCount?: number;
  defaultSystemDiskSize?: number;
  maxDataDiskCount?: number;
  maxDataDiskSize?: number;
  maxNodeCount?: number;
  maxSystemDiskSize?: number;
  minDataDiskCount?: number;
  minDataDiskSize?: number;
  minNodeCount?: number;
  minSystemDiskSize?: number;
  nodeGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupType: 'HostGroupType',
      recommendedInstanceTypes: 'RecommendedInstanceTypes',
      availableDataDiskCategories: 'availableDataDiskCategories',
      availableInstanceTypes: 'availableInstanceTypes',
      availableSystemDiskCategories: 'availableSystemDiskCategories',
      defaultDataDiskCount: 'defaultDataDiskCount',
      defaultDataDiskSize: 'defaultDataDiskSize',
      defaultNodeCount: 'defaultNodeCount',
      defaultSystemDiskSize: 'defaultSystemDiskSize',
      maxDataDiskCount: 'maxDataDiskCount',
      maxDataDiskSize: 'maxDataDiskSize',
      maxNodeCount: 'maxNodeCount',
      maxSystemDiskSize: 'maxSystemDiskSize',
      minDataDiskCount: 'minDataDiskCount',
      minDataDiskSize: 'minDataDiskSize',
      minNodeCount: 'minNodeCount',
      minSystemDiskSize: 'minSystemDiskSize',
      nodeGroupName: 'nodeGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupType: 'string',
      recommendedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      availableDataDiskCategories: { 'type': 'array', 'itemType': 'string' },
      availableInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      availableSystemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      defaultDataDiskCount: 'number',
      defaultDataDiskSize: 'number',
      defaultNodeCount: 'number',
      defaultSystemDiskSize: 'number',
      maxDataDiskCount: 'number',
      maxDataDiskSize: 'number',
      maxNodeCount: 'number',
      maxSystemDiskSize: 'number',
      minDataDiskCount: 'number',
      minDataDiskSize: 'number',
      minNodeCount: 'number',
      minSystemDiskSize: 'number',
      nodeGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyDataEcsNodeDtoList extends $tea.Model {
  beginTime?: string;
  cpuCount?: number;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  expireTime?: number;
  gmtCreate?: string;
  gmtModified?: string;
  index?: number;
  instanceType?: string;
  memorySize?: number;
  nodeGroupId?: string;
  nodeGroupName?: string;
  nodeGroupType?: string;
  nodeId?: string;
  nodeName?: string;
  nodeResourceType?: string;
  nodeStatus?: string;
  privateIp?: string;
  publicIp?: string;
  runningTime?: number;
  serialNumber?: string;
  systemDiskCapacity?: number;
  systemDiskCount?: number;
  systemDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      cpuCount: 'CpuCount',
      diskCapacity: 'DiskCapacity',
      diskCount: 'DiskCount',
      diskType: 'DiskType',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      index: 'Index',
      instanceType: 'InstanceType',
      memorySize: 'MemorySize',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeResourceType: 'NodeResourceType',
      nodeStatus: 'NodeStatus',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      runningTime: 'RunningTime',
      serialNumber: 'SerialNumber',
      systemDiskCapacity: 'SystemDiskCapacity',
      systemDiskCount: 'SystemDiskCount',
      systemDiskType: 'SystemDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      cpuCount: 'number',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      expireTime: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      index: 'number',
      instanceType: 'string',
      memorySize: 'number',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeResourceType: 'string',
      nodeStatus: 'string',
      privateIp: 'string',
      publicIp: 'string',
      runningTime: 'number',
      serialNumber: 'string',
      systemDiskCapacity: 'number',
      systemDiskCount: 'number',
      systemDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyData extends $tea.Model {
  createTime?: number;
  ecsNodeDtoList?: ListNodesResponseBodyDataEcsNodeDtoList[];
  expireTime?: number;
  instanceConf?: { [key: string]: any };
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ecsNodeDtoList: 'EcsNodeDtoList',
      expireTime: 'ExpireTime',
      instanceConf: 'InstanceConf',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      ecsNodeDtoList: { 'type': 'array', 'itemType': ListNodesResponseBodyDataEcsNodeDtoList },
      expireTime: 'number',
      instanceConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationsResponseBodyData extends $tea.Model {
  endTime?: number;
  hasChildOperationNodes?: boolean;
  hasOperationTask?: boolean;
  operationId?: string;
  operationNodeId?: string;
  operationNodeName?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      hasChildOperationNodes: 'HasChildOperationNodes',
      hasOperationTask: 'HasOperationTask',
      operationId: 'OperationId',
      operationNodeId: 'OperationNodeId',
      operationNodeName: 'OperationNodeName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      hasChildOperationNodes: 'boolean',
      hasOperationTask: 'boolean',
      operationId: 'string',
      operationNodeId: 'string',
      operationNodeName: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyData extends $tea.Model {
  description?: string;
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderResponseBodyData extends $tea.Model {
  instanceIds?: string[];
  orderId?: string;
  orderStatus?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      orderStatus: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceResponseBodyDataEcsPriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceResponseBodyDataSoftPriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceResponseBodyData extends $tea.Model {
  discountPrice?: number;
  ecsPriceInfo?: QueryPriceResponseBodyDataEcsPriceInfo;
  softPriceInfo?: QueryPriceResponseBodyDataSoftPriceInfo;
  sumPrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      ecsPriceInfo: 'EcsPriceInfo',
      softPriceInfo: 'SoftPriceInfo',
      sumPrice: 'SumPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      ecsPriceInfo: QueryPriceResponseBodyDataEcsPriceInfo,
      softPriceInfo: QueryPriceResponseBodyDataSoftPriceInfo,
      sumPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBodyDataCdpSoftPriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBodyDataEcsPriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBodyData extends $tea.Model {
  cdpSoftPriceInfo?: QueryRenewPriceResponseBodyDataCdpSoftPriceInfo;
  discountPrice?: number;
  ecsPriceInfo?: QueryRenewPriceResponseBodyDataEcsPriceInfo;
  sumPrice?: number;
  static names(): { [key: string]: string } {
    return {
      cdpSoftPriceInfo: 'CdpSoftPriceInfo',
      discountPrice: 'DiscountPrice',
      ecsPriceInfo: 'EcsPriceInfo',
      sumPrice: 'SumPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdpSoftPriceInfo: QueryRenewPriceResponseBodyDataCdpSoftPriceInfo,
      discountPrice: 'number',
      ecsPriceInfo: QueryRenewPriceResponseBodyDataEcsPriceInfo,
      sumPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpPriceResponseBodyDataEcsPriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpPriceResponseBodyDataSoftPriceInfo extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScaleUpPriceResponseBodyData extends $tea.Model {
  discountPrice?: number;
  ecsPriceInfo?: QueryScaleUpPriceResponseBodyDataEcsPriceInfo;
  softPriceInfo?: QueryScaleUpPriceResponseBodyDataSoftPriceInfo;
  sumPrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      ecsPriceInfo: 'EcsPriceInfo',
      softPriceInfo: 'SoftPriceInfo',
      sumPrice: 'SumPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      ecsPriceInfo: QueryScaleUpPriceResponseBodyDataEcsPriceInfo,
      softPriceInfo: QueryScaleUpPriceResponseBodyDataSoftPriceInfo,
      sumPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBodyData extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchClusterInstancesResponseBodyDataClusterInstanceInfo extends $tea.Model {
  controlCenterLoginName?: string;
  controlCenterUrl?: string;
  sgId?: string;
  vpcId?: string;
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      controlCenterLoginName: 'ControlCenterLoginName',
      controlCenterUrl: 'ControlCenterUrl',
      sgId: 'SgId',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlCenterLoginName: 'string',
      controlCenterUrl: 'string',
      sgId: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchClusterInstancesResponseBodyDataEcsGroupList extends $tea.Model {
  cpuCount?: number;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  hostGroupName?: string;
  hostGroupType?: string;
  instanceType?: string;
  memorySize?: number;
  nodeCount?: number;
  systemDiskCapacity?: string;
  systemDiskCount?: number;
  systemDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      diskCapacity: 'DiskCapacity',
      diskCount: 'DiskCount',
      diskType: 'DiskType',
      hostGroupName: 'HostGroupName',
      hostGroupType: 'HostGroupType',
      instanceType: 'InstanceType',
      memorySize: 'MemorySize',
      nodeCount: 'NodeCount',
      systemDiskCapacity: 'SystemDiskCapacity',
      systemDiskCount: 'SystemDiskCount',
      systemDiskType: 'SystemDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      hostGroupName: 'string',
      hostGroupType: 'string',
      instanceType: 'string',
      memorySize: 'number',
      nodeCount: 'number',
      systemDiskCapacity: 'string',
      systemDiskCount: 'number',
      systemDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchClusterInstancesResponseBodyData extends $tea.Model {
  beginTime?: number;
  clusterBizId?: string;
  clusterId?: string;
  clusterInstanceInfo?: SearchClusterInstancesResponseBodyDataClusterInstanceInfo;
  clusterName?: string;
  clusterStatus?: string;
  clusterStatusValue?: number;
  clusterType?: string;
  controlCenterUrl?: string;
  duration?: number;
  ecsGroupList?: SearchClusterInstancesResponseBodyDataEcsGroupList[];
  expireTime?: number;
  failReason?: string;
  gmtCreate?: number;
  gmtModified?: number;
  instanceConf?: { [key: string]: any };
  noticeConfirmed?: boolean;
  orderBizId?: string;
  packageType?: string;
  pricingCycle?: string;
  regionId?: string;
  runningTime?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clusterBizId: 'ClusterBizId',
      clusterId: 'ClusterId',
      clusterInstanceInfo: 'ClusterInstanceInfo',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterStatusValue: 'ClusterStatusValue',
      clusterType: 'ClusterType',
      controlCenterUrl: 'ControlCenterUrl',
      duration: 'Duration',
      ecsGroupList: 'EcsGroupList',
      expireTime: 'ExpireTime',
      failReason: 'FailReason',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceConf: 'InstanceConf',
      noticeConfirmed: 'NoticeConfirmed',
      orderBizId: 'OrderBizId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      runningTime: 'RunningTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clusterBizId: 'string',
      clusterId: 'string',
      clusterInstanceInfo: SearchClusterInstancesResponseBodyDataClusterInstanceInfo,
      clusterName: 'string',
      clusterStatus: 'string',
      clusterStatusValue: 'number',
      clusterType: 'string',
      controlCenterUrl: 'string',
      duration: 'number',
      ecsGroupList: { 'type': 'array', 'itemType': SearchClusterInstancesResponseBodyDataEcsGroupList },
      expireTime: 'number',
      failReason: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      noticeConfirmed: 'boolean',
      orderBizId: 'string',
      packageType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      runningTime: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleOrderResponseBodyDataEcsGroupList extends $tea.Model {
  cpuCount?: number;
  diskCapacity?: number;
  diskCount?: number;
  diskType?: string;
  hostGroupName?: string;
  hostGroupType?: string;
  instanceType?: string;
  memorySize?: number;
  nodeCount?: number;
  systemDiskCapacity?: number;
  systemDiskCount?: number;
  systemDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      diskCapacity: 'DiskCapacity',
      diskCount: 'DiskCount',
      diskType: 'DiskType',
      hostGroupName: 'HostGroupName',
      hostGroupType: 'HostGroupType',
      instanceType: 'InstanceType',
      memorySize: 'MemorySize',
      nodeCount: 'NodeCount',
      systemDiskCapacity: 'SystemDiskCapacity',
      systemDiskCount: 'SystemDiskCount',
      systemDiskType: 'SystemDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      diskCapacity: 'number',
      diskCount: 'number',
      diskType: 'string',
      hostGroupName: 'string',
      hostGroupType: 'string',
      instanceType: 'string',
      memorySize: 'number',
      nodeCount: 'number',
      systemDiskCapacity: 'number',
      systemDiskCount: 'number',
      systemDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleOrderResponseBodyData extends $tea.Model {
  clusterId?: string;
  clusterSize?: number;
  clusterStatus?: number;
  deployMode?: string;
  duration?: number;
  ecsGroupList?: SingleOrderResponseBodyDataEcsGroupList[];
  instanceId?: string;
  orderId?: string;
  packageType?: string;
  pricingCycle?: string;
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterSize: 'ClusterSize',
      clusterStatus: 'ClusterStatus',
      deployMode: 'DeployMode',
      duration: 'Duration',
      ecsGroupList: 'EcsGroupList',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterSize: 'number',
      clusterStatus: 'number',
      deployMode: 'string',
      duration: 'number',
      ecsGroupList: { 'type': 'array', 'itemType': SingleOrderResponseBodyDataEcsGroupList },
      instanceId: 'string',
      orderId: 'string',
      packageType: 'string',
      pricingCycle: 'string',
      storageSize: 'number',
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
    this._endpoint = this.getEndpoint("cdp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelOrderWithOptions(request: CancelOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrder",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderResponse>(await this.callApi(params, req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelOrderWithOptions(request, headers, runtime);
  }

  async checkClusterNameWithOptions(request: CheckClusterNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckClusterNameResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckClusterName",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/check/cluster_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckClusterNameResponse>(await this.callApi(params, req, runtime), new CheckClusterNameResponse({}));
  }

  async checkClusterName(request: CheckClusterNameRequest): Promise<CheckClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkClusterNameWithOptions(request, headers, runtime);
  }

  async confirmNoticeWithOptions(request: ConfirmNoticeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ConfirmNoticeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmNotice",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/confirm_notice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ConfirmNoticeResponse>(await this.callApi(params, req, runtime), new ConfirmNoticeResponse({}));
  }

  async confirmNotice(request: ConfirmNoticeRequest): Promise<ConfirmNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmNoticeWithOptions(request, headers, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterInfo)) {
      query["ClusterInfo"] = request.clusterInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  async getClusterDetailWithOptions(request: GetClusterDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClusterDetail",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterDetailResponse>(await this.callApi(params, req, runtime), new GetClusterDetailResponse({}));
  }

  async getClusterDetail(request: GetClusterDetailRequest): Promise<GetClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDetailWithOptions(request, headers, runtime);
  }

  async hasDefaultRoleWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<HasDefaultRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "HasDefaultRole",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/user/has_default_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HasDefaultRoleResponse>(await this.callApi(params, req, runtime), new HasDefaultRoleResponse({}));
  }

  async hasDefaultRole(): Promise<HasDefaultRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.hasDefaultRoleWithOptions(headers, runtime);
  }

  async initializeClouderaDataPlatformWithOptions(ClientToken: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InitializeClouderaDataPlatformResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "InitializeClouderaDataPlatform",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/user/create_default_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InitializeClouderaDataPlatformResponse>(await this.callApi(params, req, runtime), new InitializeClouderaDataPlatformResponse({}));
  }

  async initializeClouderaDataPlatform(ClientToken: string): Promise<InitializeClouderaDataPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initializeClouderaDataPlatformWithOptions(ClientToken, headers, runtime);
  }

  async listDefaultComponentsWithOptions(request: ListDefaultComponentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDefaultComponentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.securityMode)) {
      query["SecurityMode"] = request.securityMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDefaultComponents",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cdp/defaultComponents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDefaultComponentsResponse>(await this.callApi(params, req, runtime), new ListDefaultComponentsResponse({}));
  }

  async listDefaultComponents(request: ListDefaultComponentsRequest): Promise<ListDefaultComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDefaultComponentsWithOptions(request, headers, runtime);
  }

  async listNodeGroupConstraintsWithOptions(request: ListNodeGroupConstraintsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodeGroupConstraintsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeGroupConstraints",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cdp/nodeGroupConstraints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNodeGroupConstraintsResponse>(await this.callApi(params, req, runtime), new ListNodeGroupConstraintsResponse({}));
  }

  async listNodeGroupConstraints(request: ListNodeGroupConstraintsRequest): Promise<ListNodeGroupConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodeGroupConstraintsWithOptions(request, headers, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodesWithOptions(request, headers, runtime);
  }

  async listOperationsWithOptions(request: ListOperationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOperationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.parentOperationNodeId)) {
      query["ParentOperationNodeId"] = request.parentOperationNodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOperations",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOperationsResponse>(await this.callApi(params, req, runtime), new ListOperationsResponse({}));
  }

  async listOperations(request: ListOperationsRequest): Promise<ListOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationsWithOptions(request, headers, runtime);
  }

  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/region/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  async listZonesWithOptions(request: ListZonesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListZonesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListZones",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/user/zones`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListZonesResponse>(await this.callApi(params, req, runtime), new ListZonesResponse({}));
  }

  async listZones(request: ListZonesRequest): Promise<ListZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listZonesWithOptions(request, headers, runtime);
  }

  async queryOrderWithOptions(request: QueryOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrder",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderResponse>(await this.callApi(params, req, runtime), new QueryOrderResponse({}));
  }

  async queryOrder(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrderWithOptions(request, headers, runtime);
  }

  async queryPriceWithOptions(request: QueryPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryPriceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeGroupSpecs)) {
      query["NodeGroupSpecs"] = request.nodeGroupSpecs;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPrice",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/buy/query_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryPriceResponse>(await this.callApi(params, req, runtime), new QueryPriceResponse({}));
  }

  async queryPrice(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPriceWithOptions(request, headers, runtime);
  }

  async queryRenewOrderWithOptions(request: QueryRenewOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryRenewOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRenewOrder",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/query_renew_order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRenewOrderResponse>(await this.callApi(params, req, runtime), new QueryRenewOrderResponse({}));
  }

  async queryRenewOrder(request: QueryRenewOrderRequest): Promise<QueryRenewOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRenewOrderWithOptions(request, headers, runtime);
  }

  async queryRenewPriceWithOptions(request: QueryRenewPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryRenewPriceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRenewPrice",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/buy/query_renew_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRenewPriceResponse>(await this.callApi(params, req, runtime), new QueryRenewPriceResponse({}));
  }

  async queryRenewPrice(request: QueryRenewPriceRequest): Promise<QueryRenewPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRenewPriceWithOptions(request, headers, runtime);
  }

  async queryScaleUpOrderWithOptions(request: QueryScaleUpOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryScaleUpOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryScaleUpOrder",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/query_scale_up_order`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryScaleUpOrderResponse>(await this.callApi(params, req, runtime), new QueryScaleUpOrderResponse({}));
  }

  async queryScaleUpOrder(request: QueryScaleUpOrderRequest): Promise<QueryScaleUpOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryScaleUpOrderWithOptions(request, headers, runtime);
  }

  async queryScaleUpPriceWithOptions(request: QueryScaleUpPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryScaleUpPriceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.coreNumber)) {
      query["CoreNumber"] = request.coreNumber;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.nodeGroupType)) {
      query["NodeGroupType"] = request.nodeGroupType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryScaleUpPrice",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/buy/query_scale_up_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryScaleUpPriceResponse>(await this.callApi(params, req, runtime), new QueryScaleUpPriceResponse({}));
  }

  async queryScaleUpPrice(request: QueryScaleUpPriceRequest): Promise<QueryScaleUpPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryScaleUpPriceWithOptions(request, headers, runtime);
  }

  async releaseClusterWithOptions(request: ReleaseClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseCluster",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseClusterResponse>(await this.callApi(params, req, runtime), new ReleaseClusterResponse({}));
  }

  async releaseCluster(request: ReleaseClusterRequest): Promise<ReleaseClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseClusterWithOptions(request, headers, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/renew_instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(request, headers, runtime);
  }

  async scaleUpClusterWithOptions(request: ScaleUpClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleUpClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.coreNumber)) {
      query["CoreNumber"] = request.coreNumber;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.nodeGroupType)) {
      query["NodeGroupType"] = request.nodeGroupType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScaleUpCluster",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/scale_up`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleUpClusterResponse>(await this.callApi(params, req, runtime), new ScaleUpClusterResponse({}));
  }

  async scaleUpCluster(request: ScaleUpClusterRequest): Promise<ScaleUpClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleUpClusterWithOptions(request, headers, runtime);
  }

  async searchClusterInstancesWithOptions(request: SearchClusterInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchClusterInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchClusterInstances",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchClusterInstancesResponse>(await this.callApi(params, req, runtime), new SearchClusterInstancesResponse({}));
  }

  async searchClusterInstances(request: SearchClusterInstancesRequest): Promise<SearchClusterInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchClusterInstancesWithOptions(request, headers, runtime);
  }

  async singleOrderWithOptions(request: SingleOrderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SingleOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SingleOrder",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/order/single`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SingleOrderResponse>(await this.callApi(params, req, runtime), new SingleOrderResponse({}));
  }

  async singleOrder(request: SingleOrderRequest): Promise<SingleOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.singleOrderWithOptions(request, headers, runtime);
  }

  async updateClusterNameWithOptions(request: UpdateClusterNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateClusterNameResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterBizId)) {
      query["ClusterBizId"] = request.clusterBizId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClusterName",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterNameResponse>(await this.callApi(params, req, runtime), new UpdateClusterNameResponse({}));
  }

  async updateClusterName(request: UpdateClusterNameRequest): Promise<UpdateClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateClusterNameWithOptions(request, headers, runtime);
  }

  async uploadLicenseWithOptions(RegionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadLicenseResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UploadLicense",
      version: "2021-04-02",
      protocol: "HTTPS",
      pathname: `/webapi/user/upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadLicenseResponse>(await this.callApi(params, req, runtime), new UploadLicenseResponse({}));
  }

  async uploadLicense(RegionId: string): Promise<UploadLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadLicenseWithOptions(RegionId, headers, runtime);
  }

}
