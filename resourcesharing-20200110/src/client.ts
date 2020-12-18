// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  requestId: string;
  regions: DescribeRegionsResponseRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesRequest extends $tea.Model {
  resourceShareIds?: string[];
  resourceOwner: string;
  resourceShareName?: string;
  resourceShareStatus?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareIds: 'ResourceShareIds',
      resourceOwner: 'ResourceOwner',
      resourceShareName: 'ResourceShareName',
      resourceShareStatus: 'ResourceShareStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwner: 'string',
      resourceShareName: 'string',
      resourceShareStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  resourceShares: ListResourceSharesResponseResourceShares[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      resourceShares: 'ResourceShares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      resourceShares: { 'type': 'array', 'itemType': ListResourceSharesResponseResourceShares },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesRequest extends $tea.Model {
  resourceOwner: string;
  resourceShareIds?: string[];
  resourceType?: string;
  resourceIds?: string[];
  target?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceType: 'ResourceType',
      resourceIds: 'ResourceIds',
      target: 'Target',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      target: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  sharedResources: ListSharedResourcesResponseSharedResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      sharedResources: 'SharedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      sharedResources: { 'type': 'array', 'itemType': ListSharedResourcesResponseSharedResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsRequest extends $tea.Model {
  resourceOwner: string;
  resourceShareIds?: string[];
  targets?: string[];
  resourceType?: string;
  resourceId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      targets: 'Targets',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      targets: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      resourceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  sharedTargets: ListSharedTargetsResponseSharedTargets[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      sharedTargets: 'SharedTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      sharedTargets: { 'type': 'array', 'itemType': ListSharedTargetsResponseSharedTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareRequest extends $tea.Model {
  resourceShareId: string;
  resources?: AssociateResourceShareRequestResources[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': AssociateResourceShareRequestResources },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareResponse extends $tea.Model {
  requestId: string;
  resourceShareAssociations: AssociateResourceShareResponseResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': AssociateResourceShareResponseResourceShareAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareRequest extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponse extends $tea.Model {
  requestId: string;
  resourceShare: UpdateResourceShareResponseResourceShare;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShare: 'ResourceShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShare: UpdateResourceShareResponseResourceShare,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceShareRequest extends $tea.Model {
  resourceShareId: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceShareResponse extends $tea.Model {
  requestId: string;
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

export class DisassociateResourceShareRequest extends $tea.Model {
  resourceShareId: string;
  resources?: DisassociateResourceShareRequestResources[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': DisassociateResourceShareRequestResources },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareResponse extends $tea.Model {
  requestId: string;
  resourceShareAssociations: DisassociateResourceShareResponseResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': DisassociateResourceShareResponseResourceShareAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsRequest extends $tea.Model {
  resourceShareIds?: string[];
  resourceId?: string;
  target?: string;
  associationType: string;
  associationStatus?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareIds: 'ResourceShareIds',
      resourceId: 'ResourceId',
      target: 'Target',
      associationType: 'AssociationType',
      associationStatus: 'AssociationStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      target: 'string',
      associationType: 'string',
      associationStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  resourceShareAssociations: ListResourceShareAssociationsResponseResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': ListResourceShareAssociationsResponseResourceShareAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequest extends $tea.Model {
  resourceShareName: string;
  resources?: CreateResourceShareRequestResources[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceShareName: 'ResourceShareName',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareName: 'string',
      resources: { 'type': 'array', 'itemType': CreateResourceShareRequestResources },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareResponse extends $tea.Model {
  requestId: string;
  resourceShare: CreateResourceShareResponseResourceShare;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShare: 'ResourceShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShare: CreateResourceShareResponseResourceShare,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegions extends $tea.Model {
  regionId: string;
  localName: string;
  regionEndpoint: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      localName: 'string',
      regionEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseResourceShares extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  resourceShareOwner: string;
  resourceShareStatus: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponseSharedResources extends $tea.Model {
  resourceShareId: string;
  resourceId: string;
  resourceType: string;
  resourceStatus: string;
  resourceStatusMessage: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceStatus: 'ResourceStatus',
      resourceStatusMessage: 'ResourceStatusMessage',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      resourceStatus: 'string',
      resourceStatusMessage: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsResponseSharedTargets extends $tea.Model {
  resourceShareId: string;
  targetId: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      targetId: 'TargetId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      targetId: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareRequestResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareResponseResourceShareAssociations extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  associationType: string;
  entityId: string;
  entityType: string;
  associationStatus: string;
  associationStatusMessage: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      associationType: 'AssociationType',
      entityId: 'EntityId',
      entityType: 'EntityType',
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
      associationType: 'string',
      entityId: 'string',
      entityType: 'string',
      associationStatus: 'string',
      associationStatusMessage: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponseResourceShare extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  resourceShareOwner: string;
  resourceShareStatus: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareRequestResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareResponseResourceShareAssociations extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  associationType: string;
  entityId: string;
  entityType: string;
  associationStatus: string;
  associationStatusMessage: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      associationType: 'AssociationType',
      entityId: 'EntityId',
      entityType: 'EntityType',
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
      associationType: 'string',
      entityId: 'string',
      entityType: 'string',
      associationStatus: 'string',
      associationStatusMessage: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponseResourceShareAssociations extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  associationType: string;
  entityId: string;
  entityType: string;
  associationStatus: string;
  associationStatusMessage: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      associationType: 'AssociationType',
      entityId: 'EntityId',
      entityType: 'EntityType',
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
      associationType: 'string',
      entityId: 'string',
      entityType: 'string',
      associationStatus: 'string',
      associationStatusMessage: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequestResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareResponseResourceShare extends $tea.Model {
  resourceShareId: string;
  resourceShareName: string;
  resourceShareOwner: string;
  resourceShareStatus: string;
  createTime: string;
  updateTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resourcesharing", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRegionsResponse>(await this.doRequest("DescribeRegions", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async listResourceSharesWithOptions(request: ListResourceSharesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceSharesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListResourceSharesResponse>(await this.doRequest("ListResourceShares", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new ListResourceSharesResponse({}));
  }

  async listResourceShares(request: ListResourceSharesRequest): Promise<ListResourceSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharesWithOptions(request, runtime);
  }

  async listSharedResourcesWithOptions(request: ListSharedResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListSharedResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSharedResourcesResponse>(await this.doRequest("ListSharedResources", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new ListSharedResourcesResponse({}));
  }

  async listSharedResources(request: ListSharedResourcesRequest): Promise<ListSharedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedResourcesWithOptions(request, runtime);
  }

  async listSharedTargetsWithOptions(request: ListSharedTargetsRequest, runtime: $Util.RuntimeOptions): Promise<ListSharedTargetsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSharedTargetsResponse>(await this.doRequest("ListSharedTargets", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new ListSharedTargetsResponse({}));
  }

  async listSharedTargets(request: ListSharedTargetsRequest): Promise<ListSharedTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedTargetsWithOptions(request, runtime);
  }

  async associateResourceShareWithOptions(request: AssociateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<AssociateResourceShareResponse> {
    Util.validateModel(request);
    return $tea.cast<AssociateResourceShareResponse>(await this.doRequest("AssociateResourceShare", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new AssociateResourceShareResponse({}));
  }

  async associateResourceShare(request: AssociateResourceShareRequest): Promise<AssociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceShareWithOptions(request, runtime);
  }

  async updateResourceShareWithOptions(request: UpdateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceShareResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateResourceShareResponse>(await this.doRequest("UpdateResourceShare", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new UpdateResourceShareResponse({}));
  }

  async updateResourceShare(request: UpdateResourceShareRequest): Promise<UpdateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceShareWithOptions(request, runtime);
  }

  async deleteResourceShareWithOptions(request: DeleteResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceShareResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteResourceShareResponse>(await this.doRequest("DeleteResourceShare", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new DeleteResourceShareResponse({}));
  }

  async deleteResourceShare(request: DeleteResourceShareRequest): Promise<DeleteResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceShareWithOptions(request, runtime);
  }

  async disassociateResourceShareWithOptions(request: DisassociateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateResourceShareResponse> {
    Util.validateModel(request);
    return $tea.cast<DisassociateResourceShareResponse>(await this.doRequest("DisassociateResourceShare", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new DisassociateResourceShareResponse({}));
  }

  async disassociateResourceShare(request: DisassociateResourceShareRequest): Promise<DisassociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceShareWithOptions(request, runtime);
  }

  async listResourceShareAssociationsWithOptions(request: ListResourceShareAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceShareAssociationsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListResourceShareAssociationsResponse>(await this.doRequest("ListResourceShareAssociations", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new ListResourceShareAssociationsResponse({}));
  }

  async listResourceShareAssociations(request: ListResourceShareAssociationsRequest): Promise<ListResourceShareAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareAssociationsWithOptions(request, runtime);
  }

  async createResourceShareWithOptions(request: CreateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceShareResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateResourceShareResponse>(await this.doRequest("CreateResourceShare", "HTTPS", "POST", "2020-01-10", "AK", null, $tea.toMap(request), runtime), new CreateResourceShareResponse({}));
  }

  async createResourceShare(request: CreateResourceShareRequest): Promise<CreateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceShareWithOptions(request, runtime);
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

}
