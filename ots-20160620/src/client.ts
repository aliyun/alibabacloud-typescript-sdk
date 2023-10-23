// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindInstance2VpcRequest extends $tea.Model {
  instanceName?: string;
  instanceVpcName?: string;
  network?: string;
  regionNo?: string;
  resourceOwnerId?: number;
  virtualSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceVpcName: 'InstanceVpcName',
      network: 'Network',
      regionNo: 'RegionNo',
      resourceOwnerId: 'ResourceOwnerId',
      virtualSwitchId: 'VirtualSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceVpcName: 'string',
      network: 'string',
      regionNo: 'string',
      resourceOwnerId: 'number',
      virtualSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstance2VpcResponseBody extends $tea.Model {
  domain?: string;
  endpoint?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endpoint: 'Endpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endpoint: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstance2VpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindInstance2VpcResponseBody;
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
      body: BindInstance2VpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceName?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagsRequest extends $tea.Model {
  instanceName?: string;
  resourceOwnerId?: number;
  tagInfo?: DeleteTagsRequestTagInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      resourceOwnerId: 'ResourceOwnerId',
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      resourceOwnerId: 'number',
      tagInfo: { 'type': 'array', 'itemType': DeleteTagsRequestTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTagsResponseBody;
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
      body: DeleteTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  instanceName?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  instanceInfo?: GetInstanceResponseBodyInstanceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: GetInstanceResponseBodyInstanceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResponseBody;
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
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOtsServiceStatusRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOtsServiceStatusResponseBody extends $tea.Model {
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOtsServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOtsServiceStatusResponseBody;
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
      body: GetOtsServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInstanceRequest extends $tea.Model {
  clusterType?: string;
  description?: string;
  instanceName?: string;
  network?: string;
  resourceOwnerId?: number;
  tagInfo?: InsertInstanceRequestTagInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      description: 'Description',
      instanceName: 'InstanceName',
      network: 'Network',
      resourceOwnerId: 'ResourceOwnerId',
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      description: 'string',
      instanceName: 'string',
      network: 'string',
      resourceOwnerId: 'number',
      tagInfo: { 'type': 'array', 'itemType': InsertInstanceRequestTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class InsertInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertInstanceResponseBody;
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
      body: InsertInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTagsRequest extends $tea.Model {
  instanceName?: string;
  resourceOwnerId?: number;
  tagInfo?: InsertTagsRequestTagInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      resourceOwnerId: 'ResourceOwnerId',
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      resourceOwnerId: 'number',
      tagInfo: { 'type': 'array', 'itemType': InsertTagsRequestTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTagsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class InsertTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertTagsResponseBody;
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
      body: InsertTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeRequest extends $tea.Model {
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeResponseBody extends $tea.Model {
  clusterTypeDetailList?: ListClusterTypeResponseBodyClusterTypeDetailList;
  clusterTypeInfos?: ListClusterTypeResponseBodyClusterTypeInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTypeDetailList: 'ClusterTypeDetailList',
      clusterTypeInfos: 'ClusterTypeInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeDetailList: ListClusterTypeResponseBodyClusterTypeDetailList,
      clusterTypeInfos: ListClusterTypeResponseBodyClusterTypeInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterTypeResponseBody;
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
      body: ListClusterTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  resourceOwnerId?: number;
  tagInfo?: ListInstanceRequestTagInfo[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      tagInfo: { 'type': 'array', 'itemType': ListInstanceRequestTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  instanceInfos?: ListInstanceResponseBodyInstanceInfos;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceInfos: 'InstanceInfos',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfos: ListInstanceResponseBodyInstanceInfos,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceResponseBody;
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
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  instanceName?: string;
  pageNum?: number;
  pageSize?: number;
  resourceOwnerId?: number;
  tagInfo?: ListTagsRequestTagInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      tagInfo: { 'type': 'array', 'itemType': ListTagsRequestTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  tagInfos?: ListTagsResponseBodyTagInfos;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagInfos: ListTagsResponseBodyTagInfos,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagsResponseBody;
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
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByInstanceRequest extends $tea.Model {
  instanceName?: string;
  pageNum?: number;
  pageSize?: number;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByInstanceResponseBody extends $tea.Model {
  instanceName?: string;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vpcInfos?: ListVpcInfoByInstanceResponseBodyVpcInfos;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcInfos: ListVpcInfoByInstanceResponseBodyVpcInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcInfoByInstanceResponseBody;
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
      body: ListVpcInfoByInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  resourceOwnerId?: number;
  tagInfo?: ListVpcInfoByVpcRequestTagInfo[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      tagInfo: 'TagInfo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      tagInfo: { 'type': 'array', 'itemType': ListVpcInfoByVpcRequestTagInfo },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcResponseBody extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vpcId?: string;
  vpcInfos?: ListVpcInfoByVpcResponseBodyVpcInfos;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcId: 'VpcId',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcId: 'string',
      vpcInfos: ListVpcInfoByVpcResponseBodyVpcInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVpcInfoByVpcResponseBody;
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
      body: ListVpcInfoByVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOtsServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOtsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenOtsServiceResponseBody;
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
      body: OpenOtsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstance2VpcRequest extends $tea.Model {
  instanceName?: string;
  instanceVpcName?: string;
  regionNo?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceVpcName: 'InstanceVpcName',
      regionNo: 'RegionNo',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceVpcName: 'string',
      regionNo: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstance2VpcResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UnbindInstance2VpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindInstance2VpcResponseBody;
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
      body: UnbindInstance2VpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  instanceName?: string;
  network?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      network: 'Network',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      network: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UpdateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceResponseBody;
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
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagsRequestTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceInfoQuota extends $tea.Model {
  entityQuota?: number;
  static names(): { [key: string]: string } {
    return {
      entityQuota: 'EntityQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceInfoTagInfosTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceInfoTagInfos extends $tea.Model {
  tagInfo?: GetInstanceResponseBodyInstanceInfoTagInfosTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceInfoTagInfosTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceInfo extends $tea.Model {
  clusterType?: string;
  createTime?: string;
  description?: string;
  instanceName?: string;
  network?: string;
  quota?: GetInstanceResponseBodyInstanceInfoQuota;
  readCapacity?: number;
  status?: number;
  tagInfos?: GetInstanceResponseBodyInstanceInfoTagInfos;
  userId?: string;
  writeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      description: 'Description',
      instanceName: 'InstanceName',
      network: 'Network',
      quota: 'Quota',
      readCapacity: 'ReadCapacity',
      status: 'Status',
      tagInfos: 'TagInfos',
      userId: 'UserId',
      writeCapacity: 'WriteCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      createTime: 'string',
      description: 'string',
      instanceName: 'string',
      network: 'string',
      quota: GetInstanceResponseBodyInstanceInfoQuota,
      readCapacity: 'number',
      status: 'number',
      tagInfos: GetInstanceResponseBodyInstanceInfoTagInfos,
      userId: 'string',
      writeCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInstanceRequestTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTagsRequestTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeResponseBodyClusterTypeDetailListClusterTypeDetail extends $tea.Model {
  clusterType?: string;
  isMultiAZ?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      isMultiAZ: 'IsMultiAZ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      isMultiAZ: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeResponseBodyClusterTypeDetailList extends $tea.Model {
  clusterTypeDetail?: ListClusterTypeResponseBodyClusterTypeDetailListClusterTypeDetail[];
  static names(): { [key: string]: string } {
    return {
      clusterTypeDetail: 'ClusterTypeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeDetail: { 'type': 'array', 'itemType': ListClusterTypeResponseBodyClusterTypeDetailListClusterTypeDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeResponseBodyClusterTypeInfos extends $tea.Model {
  clusterType?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequestTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstanceInfosInstanceInfo extends $tea.Model {
  instanceName?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstanceInfos extends $tea.Model {
  instanceInfo?: ListInstanceResponseBodyInstanceInfosInstanceInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstanceInfosInstanceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequestTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagInfosTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagInfos extends $tea.Model {
  tagInfo?: ListTagsResponseBodyTagInfosTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': ListTagsResponseBodyTagInfosTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByInstanceResponseBodyVpcInfosVpcInfo extends $tea.Model {
  domain?: string;
  endpoint?: string;
  instanceVpcName?: string;
  regionNo?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endpoint: 'Endpoint',
      instanceVpcName: 'InstanceVpcName',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endpoint: 'string',
      instanceVpcName: 'string',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByInstanceResponseBodyVpcInfos extends $tea.Model {
  vpcInfo?: ListVpcInfoByInstanceResponseBodyVpcInfosVpcInfo[];
  static names(): { [key: string]: string } {
    return {
      vpcInfo: 'VpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInfo: { 'type': 'array', 'itemType': ListVpcInfoByInstanceResponseBodyVpcInfosVpcInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcRequestTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcResponseBodyVpcInfosVpcInfo extends $tea.Model {
  domain?: string;
  endpoint?: string;
  instanceName?: string;
  instanceVpcName?: string;
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endpoint: 'Endpoint',
      instanceName: 'InstanceName',
      instanceVpcName: 'InstanceVpcName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endpoint: 'string',
      instanceName: 'string',
      instanceVpcName: 'string',
      regionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcInfoByVpcResponseBodyVpcInfos extends $tea.Model {
  vpcInfo?: ListVpcInfoByVpcResponseBodyVpcInfosVpcInfo[];
  static names(): { [key: string]: string } {
    return {
      vpcInfo: 'VpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInfo: { 'type': 'array', 'itemType': ListVpcInfoByVpcResponseBodyVpcInfosVpcInfo },
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
    this._endpoint = this.getEndpoint("ots", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async bindInstance2VpcWithOptions(request: BindInstance2VpcRequest, runtime: $Util.RuntimeOptions): Promise<BindInstance2VpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceVpcName)) {
      query["InstanceVpcName"] = request.instanceVpcName;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.virtualSwitchId)) {
      query["VirtualSwitchId"] = request.virtualSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindInstance2Vpc",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindInstance2VpcResponse>(await this.callApi(params, req, runtime), new BindInstance2VpcResponse({}));
  }

  async bindInstance2Vpc(request: BindInstance2VpcRequest): Promise<BindInstance2VpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInstance2VpcWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteTagsWithOptions(request: DeleteTagsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagInfo)) {
      query["TagInfo"] = request.tagInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTags",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagsResponse>(await this.callApi(params, req, runtime), new DeleteTagsResponse({}));
  }

  async deleteTags(request: DeleteTagsRequest): Promise<DeleteTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagsWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  async getOtsServiceStatusWithOptions(request: GetOtsServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetOtsServiceStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOtsServiceStatus",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOtsServiceStatusResponse>(await this.callApi(params, req, runtime), new GetOtsServiceStatusResponse({}));
  }

  async getOtsServiceStatus(request: GetOtsServiceStatusRequest): Promise<GetOtsServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOtsServiceStatusWithOptions(request, runtime);
  }

  async insertInstanceWithOptions(request: InsertInstanceRequest, runtime: $Util.RuntimeOptions): Promise<InsertInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagInfo)) {
      query["TagInfo"] = request.tagInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertInstance",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertInstanceResponse>(await this.callApi(params, req, runtime), new InsertInstanceResponse({}));
  }

  async insertInstance(request: InsertInstanceRequest): Promise<InsertInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertInstanceWithOptions(request, runtime);
  }

  async insertTagsWithOptions(request: InsertTagsRequest, runtime: $Util.RuntimeOptions): Promise<InsertTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagInfo)) {
      query["TagInfo"] = request.tagInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertTags",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertTagsResponse>(await this.callApi(params, req, runtime), new InsertTagsResponse({}));
  }

  async insertTags(request: InsertTagsRequest): Promise<InsertTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertTagsWithOptions(request, runtime);
  }

  async listClusterTypeWithOptions(request: ListClusterTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterTypeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterType",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterTypeResponse>(await this.callApi(params, req, runtime), new ListClusterTypeResponse({}));
  }

  async listClusterType(request: ListClusterTypeRequest): Promise<ListClusterTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterTypeWithOptions(request, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstance",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagInfo)) {
      query["TagInfo"] = request.tagInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTags",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsResponse>(await this.callApi(params, req, runtime), new ListTagsResponse({}));
  }

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  async listVpcInfoByInstanceWithOptions(request: ListVpcInfoByInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcInfoByInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVpcInfoByInstance",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVpcInfoByInstanceResponse>(await this.callApi(params, req, runtime), new ListVpcInfoByInstanceResponse({}));
  }

  async listVpcInfoByInstance(request: ListVpcInfoByInstanceRequest): Promise<ListVpcInfoByInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcInfoByInstanceWithOptions(request, runtime);
  }

  async listVpcInfoByVpcWithOptions(request: ListVpcInfoByVpcRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcInfoByVpcResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVpcInfoByVpc",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVpcInfoByVpcResponse>(await this.callApi(params, req, runtime), new ListVpcInfoByVpcResponse({}));
  }

  async listVpcInfoByVpc(request: ListVpcInfoByVpcRequest): Promise<ListVpcInfoByVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcInfoByVpcWithOptions(request, runtime);
  }

  async openOtsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenOtsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenOtsService",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenOtsServiceResponse>(await this.callApi(params, req, runtime), new OpenOtsServiceResponse({}));
  }

  async openOtsService(): Promise<OpenOtsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openOtsServiceWithOptions(runtime);
  }

  async unbindInstance2VpcWithOptions(request: UnbindInstance2VpcRequest, runtime: $Util.RuntimeOptions): Promise<UnbindInstance2VpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceVpcName)) {
      query["InstanceVpcName"] = request.instanceVpcName;
    }

    if (!Util.isUnset(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindInstance2Vpc",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindInstance2VpcResponse>(await this.callApi(params, req, runtime), new UnbindInstance2VpcResponse({}));
  }

  async unbindInstance2Vpc(request: UnbindInstance2VpcRequest): Promise<UnbindInstance2VpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindInstance2VpcWithOptions(request, runtime);
  }

  async updateInstanceWithOptions(request: UpdateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.network)) {
      query["Network"] = request.network;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2016-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  async updateInstance(request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

}
