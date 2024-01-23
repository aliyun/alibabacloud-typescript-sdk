// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptResourceShareInvitationRequest extends $tea.Model {
  resourceShareInvitationId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareInvitationId: 'ResourceShareInvitationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareInvitationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptResourceShareInvitationResponseBody extends $tea.Model {
  requestId?: string;
  resourceShareInvitation?: AcceptResourceShareInvitationResponseBodyResourceShareInvitation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareInvitation: 'ResourceShareInvitation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareInvitation: AcceptResourceShareInvitationResponseBodyResourceShareInvitation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptResourceShareInvitationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AcceptResourceShareInvitationResponseBody;
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
      body: AcceptResourceShareInvitationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareRequest extends $tea.Model {
  permissionNames?: string[];
  resourceShareId?: string;
  resources?: AssociateResourceShareRequestResources[];
  targetProperties?: AssociateResourceShareRequestTargetProperties[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      permissionNames: 'PermissionNames',
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targetProperties: 'TargetProperties',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': AssociateResourceShareRequestResources },
      targetProperties: { 'type': 'array', 'itemType': AssociateResourceShareRequestTargetProperties },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareResponseBody extends $tea.Model {
  requestId?: string;
  resourceShareAssociations?: AssociateResourceShareResponseBodyResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': AssociateResourceShareResponseBodyResourceShareAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateResourceShareResponseBody;
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
      body: AssociateResourceShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceSharePermissionRequest extends $tea.Model {
  permissionName?: string;
  replace?: boolean;
  resourceShareId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionName: 'PermissionName',
      replace: 'Replace',
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionName: 'string',
      replace: 'boolean',
      resourceShareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceSharePermissionResponseBody extends $tea.Model {
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

export class AssociateResourceSharePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateResourceSharePermissionResponseBody;
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
      body: AssociateResourceSharePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
  resourceId?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSharingWithResourceDirectoryStatusResponseBody extends $tea.Model {
  enableSharingWithRd?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSharingWithRd: 'EnableSharingWithRd',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSharingWithRd: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSharingWithResourceDirectoryStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckSharingWithResourceDirectoryStatusResponseBody;
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
      body: CheckSharingWithResourceDirectoryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequest extends $tea.Model {
  allowExternalTargets?: boolean;
  permissionNames?: string[];
  resourceShareName?: string;
  resources?: CreateResourceShareRequestResources[];
  targetProperties?: CreateResourceShareRequestTargetProperties[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      permissionNames: 'PermissionNames',
      resourceShareName: 'ResourceShareName',
      resources: 'Resources',
      targetProperties: 'TargetProperties',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceShareName: 'string',
      resources: { 'type': 'array', 'itemType': CreateResourceShareRequestResources },
      targetProperties: { 'type': 'array', 'itemType': CreateResourceShareRequestTargetProperties },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareResponseBody extends $tea.Model {
  requestId?: string;
  resourceShare?: CreateResourceShareResponseBodyResourceShare;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShare: 'ResourceShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShare: CreateResourceShareResponseBodyResourceShare,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateResourceShareResponseBody;
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
      body: CreateResourceShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceShareRequest extends $tea.Model {
  resourceShareId?: string;
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

export class DeleteResourceShareResponseBody extends $tea.Model {
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

export class DeleteResourceShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResourceShareResponseBody;
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
      body: DeleteResourceShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareRequest extends $tea.Model {
  resourceOwner?: string;
  resourceShareId?: string;
  resources?: DisassociateResourceShareRequestResources[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwner: 'ResourceOwner',
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwner: 'string',
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': DisassociateResourceShareRequestResources },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareResponseBody extends $tea.Model {
  requestId?: string;
  resourceShareAssociations?: DisassociateResourceShareResponseBodyResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': DisassociateResourceShareResponseBodyResourceShareAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisassociateResourceShareResponseBody;
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
      body: DisassociateResourceShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceSharePermissionRequest extends $tea.Model {
  permissionName?: string;
  resourceShareId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionName: 'PermissionName',
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionName: 'string',
      resourceShareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateResourceSharePermissionResponseBody extends $tea.Model {
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

export class DisassociateResourceSharePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisassociateResourceSharePermissionResponseBody;
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
      body: DisassociateResourceSharePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSharingWithResourceDirectoryResponseBody extends $tea.Model {
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

export class EnableSharingWithResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSharingWithResourceDirectoryResponseBody;
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
      body: EnableSharingWithResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionRequest extends $tea.Model {
  permissionName?: string;
  permissionVersion?: string;
  static names(): { [key: string]: string } {
    return {
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionName: 'string',
      permissionVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponseBody extends $tea.Model {
  permission?: GetPermissionResponseBodyPermission;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: GetPermissionResponseBodyPermission,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPermissionResponseBody;
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
      body: GetPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionVersionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  permissionName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permissionName: 'PermissionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      permissionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionVersionsResponseBody extends $tea.Model {
  nextToken?: string;
  permissions?: ListPermissionVersionsResponseBodyPermissions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      permissions: { 'type': 'array', 'itemType': ListPermissionVersionsResponseBodyPermissions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPermissionVersionsResponseBody;
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
      body: ListPermissionVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBody extends $tea.Model {
  nextToken?: string;
  permissions?: ListPermissionsResponseBodyPermissions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPermissionsResponseBody;
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
      body: ListPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsRequest extends $tea.Model {
  associationStatus?: string;
  associationType?: string;
  maxResults?: number;
  nextToken?: string;
  resourceId?: string;
  resourceShareIds?: string[];
  target?: string;
  static names(): { [key: string]: string } {
    return {
      associationStatus: 'AssociationStatus',
      associationType: 'AssociationType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceShareIds: 'ResourceShareIds',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationStatus: 'string',
      associationType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resourceShareAssociations?: ListResourceShareAssociationsResponseBodyResourceShareAssociations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceShareAssociations: 'ResourceShareAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceShareAssociations: { 'type': 'array', 'itemType': ListResourceShareAssociationsResponseBodyResourceShareAssociations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceShareAssociationsResponseBody;
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
      body: ListResourceShareAssociationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceShareIds?: string[];
  resourceShareInvitationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceShareIds: 'ResourceShareIds',
      resourceShareInvitationIds: 'ResourceShareInvitationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceShareInvitationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resourceShareInvitations?: ListResourceShareInvitationsResponseBodyResourceShareInvitations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceShareInvitations: 'ResourceShareInvitations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceShareInvitations: { 'type': 'array', 'itemType': ListResourceShareInvitationsResponseBodyResourceShareInvitations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceShareInvitationsResponseBody;
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
      body: ListResourceShareInvitationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharePermissionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceOwner?: string;
  resourceShareId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceOwner: 'ResourceOwner',
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceOwner: 'string',
      resourceShareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharePermissionsResponseBody extends $tea.Model {
  nextToken?: string;
  permissions?: ListResourceSharePermissionsResponseBodyPermissions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      permissions: 'Permissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      permissions: { 'type': 'array', 'itemType': ListResourceSharePermissionsResponseBodyPermissions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharePermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceSharePermissionsResponseBody;
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
      body: ListResourceSharePermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  permissionName?: string;
  resourceOwner?: string;
  resourceShareIds?: string[];
  resourceShareName?: string;
  resourceShareStatus?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permissionName: 'PermissionName',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceShareName: 'ResourceShareName',
      resourceShareStatus: 'ResourceShareStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      permissionName: 'string',
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceShareName: 'string',
      resourceShareStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resourceShares?: ListResourceSharesResponseBodyResourceShares[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceShares: 'ResourceShares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceShares: { 'type': 'array', 'itemType': ListResourceSharesResponseBodyResourceShares },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceSharesResponseBody;
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
      body: ListResourceSharesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceIds?: string[];
  resourceOwner?: string;
  resourceShareIds?: string[];
  resourceType?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceType: 'ResourceType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  sharedResources?: ListSharedResourcesResponseBodySharedResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sharedResources: 'SharedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sharedResources: { 'type': 'array', 'itemType': ListSharedResourcesResponseBodySharedResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSharedResourcesResponseBody;
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
      body: ListSharedResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceId?: string;
  resourceOwner?: string;
  resourceShareIds?: string[];
  resourceType?: string;
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceType: 'ResourceType',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceId: 'string',
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  sharedTargets?: ListSharedTargetsResponseBodySharedTargets[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sharedTargets: 'SharedTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sharedTargets: { 'type': 'array', 'itemType': ListSharedTargetsResponseBodySharedTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSharedTargetsResponseBody;
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
      body: ListSharedTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationRequest extends $tea.Model {
  resourceShareInvitationId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareInvitationId: 'ResourceShareInvitationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareInvitationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationResponseBody extends $tea.Model {
  requestId?: string;
  resourceShareInvitation?: RejectResourceShareInvitationResponseBodyResourceShareInvitation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShareInvitation: 'ResourceShareInvitation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShareInvitation: RejectResourceShareInvitationResponseBodyResourceShareInvitation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RejectResourceShareInvitationResponseBody;
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
      body: RejectResourceShareInvitationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareRequest extends $tea.Model {
  allowExternalTargets?: boolean;
  resourceShareId?: string;
  resourceShareName?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      resourceShareId: 'string',
      resourceShareName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponseBody extends $tea.Model {
  requestId?: string;
  resourceShare?: UpdateResourceShareResponseBodyResourceShare;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShare: 'ResourceShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShare: UpdateResourceShareResponseBodyResourceShare,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResourceShareResponseBody;
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
      body: UpdateResourceShareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails extends $tea.Model {
  associateType?: string;
  resourceId?: string;
  resourceType?: string;
  status?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptResourceShareInvitationResponseBodyResourceShareInvitation extends $tea.Model {
  acceptInvitationFailedDetails?: AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails[];
  createTime?: string;
  receiverAccountId?: string;
  resourceShareId?: string;
  resourceShareInvitationId?: string;
  resourceShareName?: string;
  senderAccountId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceptInvitationFailedDetails: 'AcceptInvitationFailedDetails',
      createTime: 'CreateTime',
      receiverAccountId: 'ReceiverAccountId',
      resourceShareId: 'ResourceShareId',
      resourceShareInvitationId: 'ResourceShareInvitationId',
      resourceShareName: 'ResourceShareName',
      senderAccountId: 'SenderAccountId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptInvitationFailedDetails: { 'type': 'array', 'itemType': AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails },
      createTime: 'string',
      receiverAccountId: 'string',
      resourceShareId: 'string',
      resourceShareInvitationId: 'string',
      resourceShareName: 'string',
      senderAccountId: 'string',
      status: 'string',
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

export class AssociateResourceShareRequestTargetProperties extends $tea.Model {
  property?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateResourceShareResponseBodyResourceShareAssociations extends $tea.Model {
  associationStatus?: string;
  associationStatusMessage?: string;
  associationType?: string;
  createTime?: string;
  entityId?: string;
  entityType?: string;
  resourceShareId?: string;
  resourceShareName?: string;
  targetProperty?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      associationType: 'AssociationType',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityType: 'EntityType',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationStatus: 'string',
      associationStatusMessage: 'string',
      associationType: 'string',
      createTime: 'string',
      entityId: 'string',
      entityType: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      targetProperty: 'string',
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

export class CreateResourceShareRequestTargetProperties extends $tea.Model {
  property?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      targetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareResponseBodyResourceShare extends $tea.Model {
  allowExternalTargets?: boolean;
  createTime?: string;
  resourceShareId?: string;
  resourceShareName?: string;
  resourceShareOwner?: string;
  resourceShareStatus?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      createTime: 'CreateTime',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      createTime: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
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

export class DisassociateResourceShareResponseBodyResourceShareAssociations extends $tea.Model {
  associationStatus?: string;
  associationStatusMessage?: string;
  associationType?: string;
  createTime?: string;
  entityId?: string;
  entityType?: string;
  resourceShareId?: string;
  resourceShareName?: string;
  targetProperty?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      associationType: 'AssociationType',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityType: 'EntityType',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationStatus: 'string',
      associationStatusMessage: 'string',
      associationType: 'string',
      createTime: 'string',
      entityId: 'string',
      entityType: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      targetProperty: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponseBodyPermission extends $tea.Model {
  createTime?: string;
  defaultPermission?: boolean;
  defaultVersion?: boolean;
  permission?: string;
  permissionName?: string;
  permissionVersion?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultPermission: 'DefaultPermission',
      defaultVersion: 'DefaultVersion',
      permission: 'Permission',
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultPermission: 'boolean',
      defaultVersion: 'boolean',
      permission: 'string',
      permissionName: 'string',
      permissionVersion: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionVersionsResponseBodyPermissions extends $tea.Model {
  createTime?: string;
  defaultPermission?: boolean;
  defaultVersion?: boolean;
  permissionName?: string;
  permissionVersion?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultPermission: 'DefaultPermission',
      defaultVersion: 'DefaultVersion',
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultPermission: 'boolean',
      defaultVersion: 'boolean',
      permissionName: 'string',
      permissionVersion: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissions extends $tea.Model {
  createTime?: string;
  defaultPermission?: boolean;
  defaultVersion?: boolean;
  permissionName?: string;
  permissionVersion?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultPermission: 'DefaultPermission',
      defaultVersion: 'DefaultVersion',
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultPermission: 'boolean',
      defaultVersion: 'boolean',
      permissionName: 'string',
      permissionVersion: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails extends $tea.Model {
  associateType?: string;
  entityId?: string;
  entityType?: string;
  status?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      entityId: 'EntityId',
      entityType: 'EntityType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      entityId: 'string',
      entityType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponseBodyResourceShareAssociations extends $tea.Model {
  associationFailedDetails?: ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails[];
  associationStatus?: string;
  associationStatusMessage?: string;
  associationType?: string;
  createTime?: string;
  entityId?: string;
  entityType?: string;
  external?: boolean;
  resourceShareId?: string;
  resourceShareName?: string;
  targetProperty?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      associationFailedDetails: 'AssociationFailedDetails',
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      associationType: 'AssociationType',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityType: 'EntityType',
      external: 'External',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationFailedDetails: { 'type': 'array', 'itemType': ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails },
      associationStatus: 'string',
      associationStatusMessage: 'string',
      associationType: 'string',
      createTime: 'string',
      entityId: 'string',
      entityType: 'string',
      external: 'boolean',
      resourceShareId: 'string',
      resourceShareName: 'string',
      targetProperty: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails extends $tea.Model {
  associateType?: string;
  resourceId?: string;
  resourceType?: string;
  status?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsResponseBodyResourceShareInvitations extends $tea.Model {
  createTime?: string;
  invitationFailedDetails?: ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails[];
  receiverAccountId?: string;
  resourceShareId?: string;
  resourceShareInvitationId?: string;
  resourceShareName?: string;
  senderAccountId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      invitationFailedDetails: 'InvitationFailedDetails',
      receiverAccountId: 'ReceiverAccountId',
      resourceShareId: 'ResourceShareId',
      resourceShareInvitationId: 'ResourceShareInvitationId',
      resourceShareName: 'ResourceShareName',
      senderAccountId: 'SenderAccountId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      invitationFailedDetails: { 'type': 'array', 'itemType': ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails },
      receiverAccountId: 'string',
      resourceShareId: 'string',
      resourceShareInvitationId: 'string',
      resourceShareName: 'string',
      senderAccountId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharePermissionsResponseBodyPermissions extends $tea.Model {
  createTime?: string;
  defaultPermission?: boolean;
  defaultVersion?: boolean;
  permissionName?: string;
  permissionVersion?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultPermission: 'DefaultPermission',
      defaultVersion: 'DefaultVersion',
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultPermission: 'boolean',
      defaultVersion: 'boolean',
      permissionName: 'string',
      permissionVersion: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseBodyResourceShares extends $tea.Model {
  allowExternalTargets?: boolean;
  createTime?: string;
  resourceShareId?: string;
  resourceShareName?: string;
  resourceShareOwner?: string;
  resourceShareStatus?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      createTime: 'CreateTime',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      createTime: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponseBodySharedResources extends $tea.Model {
  createTime?: string;
  resourceId?: string;
  resourceShareId?: string;
  resourceStatus?: string;
  resourceStatusMessage?: string;
  resourceType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      resourceId: 'ResourceId',
      resourceShareId: 'ResourceShareId',
      resourceStatus: 'ResourceStatus',
      resourceStatusMessage: 'ResourceStatusMessage',
      resourceType: 'ResourceType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceId: 'string',
      resourceShareId: 'string',
      resourceStatus: 'string',
      resourceStatusMessage: 'string',
      resourceType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedTargetsResponseBodySharedTargets extends $tea.Model {
  createTime?: string;
  external?: boolean;
  resourceShareId?: string;
  targetId?: string;
  targetProperty?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      external: 'External',
      resourceShareId: 'ResourceShareId',
      targetId: 'TargetId',
      targetProperty: 'TargetProperty',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      external: 'boolean',
      resourceShareId: 'string',
      targetId: 'string',
      targetProperty: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationResponseBodyResourceShareInvitation extends $tea.Model {
  createTime?: string;
  receiverAccountId?: string;
  resourceShareId?: string;
  resourceShareInvitationId?: string;
  resourceShareName?: string;
  senderAccountId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      receiverAccountId: 'ReceiverAccountId',
      resourceShareId: 'ResourceShareId',
      resourceShareInvitationId: 'ResourceShareInvitationId',
      resourceShareName: 'ResourceShareName',
      senderAccountId: 'SenderAccountId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      receiverAccountId: 'string',
      resourceShareId: 'string',
      resourceShareInvitationId: 'string',
      resourceShareName: 'string',
      senderAccountId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponseBodyResourceShare extends $tea.Model {
  allowExternalTargets?: boolean;
  createTime?: string;
  resourceShareId?: string;
  resourceShareName?: string;
  resourceShareOwner?: string;
  resourceShareStatus?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      createTime: 'CreateTime',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      createTime: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      updateTime: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resourcesharing", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * ### [](#)
    * *   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with an object in a resource directory, the system automatically accepts the resource sharing invitation for the object.
    * *   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
    * This topic provides an example on how to call the API operation to accept the resource sharing invitation whose ID is `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.
    *
    * @param request AcceptResourceShareInvitationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AcceptResourceShareInvitationResponse
   */
  async acceptResourceShareInvitationWithOptions(request: AcceptResourceShareInvitationRequest, runtime: $Util.RuntimeOptions): Promise<AcceptResourceShareInvitationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceShareInvitationId)) {
      query["ResourceShareInvitationId"] = request.resourceShareInvitationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AcceptResourceShareInvitation",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AcceptResourceShareInvitationResponse>(await this.callApi(params, req, runtime), new AcceptResourceShareInvitationResponse({}));
  }

  /**
    * ### [](#)
    * *   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with an object in a resource directory, the system automatically accepts the resource sharing invitation for the object.
    * *   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
    * This topic provides an example on how to call the API operation to accept the resource sharing invitation whose ID is `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.
    *
    * @param request AcceptResourceShareInvitationRequest
    * @return AcceptResourceShareInvitationResponse
   */
  async acceptResourceShareInvitation(request: AcceptResourceShareInvitationRequest): Promise<AcceptResourceShareInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptResourceShareInvitationWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to associate the vSwitch `vsw-bp183p93qs667muql****` and the member `172050525300****` with the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the association, the vSwitch is shared with the member.
    *
    * @param request AssociateResourceShareRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateResourceShareResponse
   */
  async associateResourceShareWithOptions(request: AssociateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<AssociateResourceShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.permissionNames)) {
      query["PermissionNames"] = request.permissionNames;
    }

    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.targetProperties)) {
      query["TargetProperties"] = request.targetProperties;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateResourceShareResponse>(await this.callApi(params, req, runtime), new AssociateResourceShareResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to associate the vSwitch `vsw-bp183p93qs667muql****` and the member `172050525300****` with the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the association, the vSwitch is shared with the member.
    *
    * @param request AssociateResourceShareRequest
    * @return AssociateResourceShareResponse
   */
  async associateResourceShare(request: AssociateResourceShareRequest): Promise<AssociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceShareWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
    *
    * @param request AssociateResourceSharePermissionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AssociateResourceSharePermissionResponse
   */
  async associateResourceSharePermissionWithOptions(request: AssociateResourceSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<AssociateResourceSharePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!Util.isUnset(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateResourceSharePermission",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateResourceSharePermissionResponse>(await this.callApi(params, req, runtime), new AssociateResourceSharePermissionResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
    *
    * @param request AssociateResourceSharePermissionRequest
    * @return AssociateResourceSharePermissionResponse
   */
  async associateResourceSharePermission(request: AssociateResourceSharePermissionRequest): Promise<AssociateResourceSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceSharePermissionWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async checkSharingWithResourceDirectoryStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckSharingWithResourceDirectoryStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CheckSharingWithResourceDirectoryStatus",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSharingWithResourceDirectoryStatusResponse>(await this.callApi(params, req, runtime), new CheckSharingWithResourceDirectoryStatusResponse({}));
  }

  async checkSharingWithResourceDirectoryStatus(): Promise<CheckSharingWithResourceDirectoryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSharingWithResourceDirectoryStatusWithOptions(runtime);
  }

  /**
    * Resource Sharing allows you to share your resources with one or more accounts and access the resources shared by other accounts. For more information, see [Resource Sharing overview](~~160622~~).
    * This topic provides an example on how to call the API operation to create a resource share named `test` in the `cn-hangzhou` region to share the vSwitch `vsw-bp183p93qs667muql****` with the member `172050525300****`. In this example, the management account of a resource directory is used to call this API operation.
    *
    * @param request CreateResourceShareRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateResourceShareResponse
   */
  async createResourceShareWithOptions(request: CreateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowExternalTargets)) {
      query["AllowExternalTargets"] = request.allowExternalTargets;
    }

    if (!Util.isUnset(request.permissionNames)) {
      query["PermissionNames"] = request.permissionNames;
    }

    if (!Util.isUnset(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.targetProperties)) {
      query["TargetProperties"] = request.targetProperties;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceShareResponse>(await this.callApi(params, req, runtime), new CreateResourceShareResponse({}));
  }

  /**
    * Resource Sharing allows you to share your resources with one or more accounts and access the resources shared by other accounts. For more information, see [Resource Sharing overview](~~160622~~).
    * This topic provides an example on how to call the API operation to create a resource share named `test` in the `cn-hangzhou` region to share the vSwitch `vsw-bp183p93qs667muql****` with the member `172050525300****`. In this example, the management account of a resource directory is used to call this API operation.
    *
    * @param request CreateResourceShareRequest
    * @return CreateResourceShareResponse
   */
  async createResourceShare(request: CreateResourceShareRequest): Promise<CreateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceShareWithOptions(request, runtime);
  }

  /**
    * After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.
    * A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.
    * This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.
    *
    * @param request DeleteResourceShareRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteResourceShareResponse
   */
  async deleteResourceShareWithOptions(request: DeleteResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceShareResponse>(await this.callApi(params, req, runtime), new DeleteResourceShareResponse({}));
  }

  /**
    * After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.
    * A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.
    * This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.
    *
    * @param request DeleteResourceShareRequest
    * @return DeleteResourceShareResponse
   */
  async deleteResourceShare(request: DeleteResourceShareRequest): Promise<DeleteResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceShareWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * *   A resource owner can call this API operation to remove shared resources or principals from a resource share.
    * *   If an Alibaba Cloud account that is not the management account or a member of a resource directory is added to a resource share as a principal, you can use the Alibaba Cloud account to call this API operation to exit the resource share. For more information, see [Exit a resource share](~~440614~~).
    * This topic provides an example on how to use the management account of a resource directory to call the API operation to remove the member `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the member is removed from the resource share, the member cannot share the resources in the resource share.
    *
    * @param request DisassociateResourceShareRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisassociateResourceShareResponse
   */
  async disassociateResourceShareWithOptions(request: DisassociateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateResourceShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateResourceShareResponse>(await this.callApi(params, req, runtime), new DisassociateResourceShareResponse({}));
  }

  /**
    * *   A resource owner can call this API operation to remove shared resources or principals from a resource share.
    * *   If an Alibaba Cloud account that is not the management account or a member of a resource directory is added to a resource share as a principal, you can use the Alibaba Cloud account to call this API operation to exit the resource share. For more information, see [Exit a resource share](~~440614~~).
    * This topic provides an example on how to use the management account of a resource directory to call the API operation to remove the member `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the member is removed from the resource share, the member cannot share the resources in the resource share.
    *
    * @param request DisassociateResourceShareRequest
    * @return DisassociateResourceShareResponse
   */
  async disassociateResourceShare(request: DisassociateResourceShareRequest): Promise<DisassociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceShareWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
    *
    * @param request DisassociateResourceSharePermissionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisassociateResourceSharePermissionResponse
   */
  async disassociateResourceSharePermissionWithOptions(request: DisassociateResourceSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateResourceSharePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateResourceSharePermission",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateResourceSharePermissionResponse>(await this.callApi(params, req, runtime), new DisassociateResourceSharePermissionResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
    *
    * @param request DisassociateResourceSharePermissionRequest
    * @return DisassociateResourceSharePermissionResponse
   */
  async disassociateResourceSharePermission(request: DisassociateResourceSharePermissionRequest): Promise<DisassociateResourceSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceSharePermissionWithOptions(request, runtime);
  }

  /**
    * You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.
    * You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.
    *
    * @param request EnableSharingWithResourceDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableSharingWithResourceDirectoryResponse
   */
  async enableSharingWithResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<EnableSharingWithResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EnableSharingWithResourceDirectory",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSharingWithResourceDirectoryResponse>(await this.callApi(params, req, runtime), new EnableSharingWithResourceDirectoryResponse({}));
  }

  /**
    * You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.
    * You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.
    *
    * @return EnableSharingWithResourceDirectoryResponse
   */
  async enableSharingWithResourceDirectory(): Promise<EnableSharingWithResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSharingWithResourceDirectoryWithOptions(runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the information about the `AliyunRSDefaultPermissionVSwitch` permission whose version is `v1` in the `cn-hangzhou` region.
    *
    * @param request GetPermissionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPermissionResponse
   */
  async getPermissionWithOptions(request: GetPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GetPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!Util.isUnset(request.permissionVersion)) {
      query["PermissionVersion"] = request.permissionVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPermission",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPermissionResponse>(await this.callApi(params, req, runtime), new GetPermissionResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the information about the `AliyunRSDefaultPermissionVSwitch` permission whose version is `v1` in the `cn-hangzhou` region.
    *
    * @param request GetPermissionRequest
    * @return GetPermissionResponse
   */
  async getPermission(request: GetPermissionRequest): Promise<GetPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the versions of the `AliyunRSDefaultPermissionVSwitch` permission in the `cn-hangzhou` region.
    *
    * @param request ListPermissionVersionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListPermissionVersionsResponse
   */
  async listPermissionVersionsWithOptions(request: ListPermissionVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPermissionVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPermissionVersions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionVersionsResponse>(await this.callApi(params, req, runtime), new ListPermissionVersionsResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the versions of the `AliyunRSDefaultPermissionVSwitch` permission in the `cn-hangzhou` region.
    *
    * @param request ListPermissionVersionsRequest
    * @return ListPermissionVersionsResponse
   */
  async listPermissionVersions(request: ListPermissionVersionsRequest): Promise<ListPermissionVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionVersionsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.
    *
    * @param request ListPermissionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListPermissionsResponse
   */
  async listPermissionsWithOptions(request: ListPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPermissions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionsResponse>(await this.callApi(params, req, runtime), new ListPermissionsResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.
    *
    * @param request ListPermissionsRequest
    * @return ListPermissionsResponse
   */
  async listPermissions(request: ListPermissionsRequest): Promise<ListPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the association records of the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows the following records:
    * *   The resource `vsw-bp1upw03qyz8n7us9****` of the `VSwitch` type has been associated with the resource share `rs-6GRmdD3X****`. The resource is in the `Associated` state. This indicates that the resource is being shared.
    * *   The resource `vsw-bp183p93qs667muql****` of the `VSwitch` type has been disassociated from the resource share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state. This indicates that the sharing of the resource is stopped.
    *
    * @param request ListResourceShareAssociationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListResourceShareAssociationsResponse
   */
  async listResourceShareAssociationsWithOptions(request: ListResourceShareAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceShareAssociationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.associationStatus)) {
      query["AssociationStatus"] = request.associationStatus;
    }

    if (!Util.isUnset(request.associationType)) {
      query["AssociationType"] = request.associationType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceShareAssociations",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceShareAssociationsResponse>(await this.callApi(params, req, runtime), new ListResourceShareAssociationsResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the association records of the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows the following records:
    * *   The resource `vsw-bp1upw03qyz8n7us9****` of the `VSwitch` type has been associated with the resource share `rs-6GRmdD3X****`. The resource is in the `Associated` state. This indicates that the resource is being shared.
    * *   The resource `vsw-bp183p93qs667muql****` of the `VSwitch` type has been disassociated from the resource share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state. This indicates that the sharing of the resource is stopped.
    *
    * @param request ListResourceShareAssociationsRequest
    * @return ListResourceShareAssociationsResponse
   */
  async listResourceShareAssociations(request: ListResourceShareAssociationsRequest): Promise<ListResourceShareAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareAssociationsWithOptions(request, runtime);
  }

  /**
    * ### [](#)
    * This topic provides an example on how to call the API operation to query the resource sharing invitations that are received by the current account in the `cn-hangzhou` region. The response shows that one invitation is received by the current account and is waiting for confirmation.
    *
    * @param request ListResourceShareInvitationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListResourceShareInvitationsResponse
   */
  async listResourceShareInvitationsWithOptions(request: ListResourceShareInvitationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceShareInvitationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!Util.isUnset(request.resourceShareInvitationIds)) {
      query["ResourceShareInvitationIds"] = request.resourceShareInvitationIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceShareInvitations",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceShareInvitationsResponse>(await this.callApi(params, req, runtime), new ListResourceShareInvitationsResponse({}));
  }

  /**
    * ### [](#)
    * This topic provides an example on how to call the API operation to query the resource sharing invitations that are received by the current account in the `cn-hangzhou` region. The response shows that one invitation is received by the current account and is waiting for confirmation.
    *
    * @param request ListResourceShareInvitationsRequest
    * @return ListResourceShareInvitationsResponse
   */
  async listResourceShareInvitations(request: ListResourceShareInvitationsRequest): Promise<ListResourceShareInvitationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareInvitationsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.
    *
    * @param request ListResourceSharePermissionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListResourceSharePermissionsResponse
   */
  async listResourceSharePermissionsWithOptions(request: ListResourceSharePermissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceSharePermissionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceSharePermissions",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceSharePermissionsResponse>(await this.callApi(params, req, runtime), new ListResourceSharePermissionsResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.
    *
    * @param request ListResourceSharePermissionsRequest
    * @return ListResourceSharePermissionsResponse
   */
  async listResourceSharePermissions(request: ListResourceSharePermissionsRequest): Promise<ListResourceSharePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharePermissionsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created by using the account whose ID is `151266687691****`:
    * *   `rs-hX9wC5jO****`, which is in the `Deleted` state
    * *   `rs-PqysnzIj****`, which is in the `Active` state
    *
    * @param request ListResourceSharesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListResourceSharesResponse
   */
  async listResourceSharesWithOptions(request: ListResourceSharesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceSharesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.permissionName)) {
      query["PermissionName"] = request.permissionName;
    }

    if (!Util.isUnset(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!Util.isUnset(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!Util.isUnset(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    if (!Util.isUnset(request.resourceShareStatus)) {
      query["ResourceShareStatus"] = request.resourceShareStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceShares",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceSharesResponse>(await this.callApi(params, req, runtime), new ListResourceSharesResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created by using the account whose ID is `151266687691****`:
    * *   `rs-hX9wC5jO****`, which is in the `Deleted` state
    * *   `rs-PqysnzIj****`, which is in the `Active` state
    *
    * @param request ListResourceSharesRequest
    * @return ListResourceSharesResponse
   */
  async listResourceShares(request: ListResourceSharesRequest): Promise<ListResourceSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharesWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the resources that you share with other accounts in the `cn-hangzhou` region. The response shows that in the resource share `rs-6GRmdD3X****`, you share the `vsw-bp1upw03qyz8n7us9****` resource of the `VSwitch` type with other accounts.
    *
    * @param request ListSharedResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSharedResourcesResponse
   */
  async listSharedResourcesWithOptions(request: ListSharedResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListSharedResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!Util.isUnset(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSharedResources",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSharedResourcesResponse>(await this.callApi(params, req, runtime), new ListSharedResourcesResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the resources that you share with other accounts in the `cn-hangzhou` region. The response shows that in the resource share `rs-6GRmdD3X****`, you share the `vsw-bp1upw03qyz8n7us9****` resource of the `VSwitch` type with other accounts.
    *
    * @param request ListSharedResourcesRequest
    * @return ListSharedResourcesResponse
   */
  async listSharedResources(request: ListSharedResourcesRequest): Promise<ListSharedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedResourcesWithOptions(request, runtime);
  }

  /**
    * If you are a resource owner, you can query the principals with which you share your resources.
    * If you are a principal, you can query the resources that are shared with you.
    * This topic provides an example on how to call the API operation to query the principals with which you share your resources in the `cn-hangzhou` region. The response shows that you share your resources with the principals `114240524784****` and `172050525300****`.
    *
    * @param request ListSharedTargetsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSharedTargetsResponse
   */
  async listSharedTargetsWithOptions(request: ListSharedTargetsRequest, runtime: $Util.RuntimeOptions): Promise<ListSharedTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwner)) {
      query["ResourceOwner"] = request.resourceOwner;
    }

    if (!Util.isUnset(request.resourceShareIds)) {
      query["ResourceShareIds"] = request.resourceShareIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSharedTargets",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSharedTargetsResponse>(await this.callApi(params, req, runtime), new ListSharedTargetsResponse({}));
  }

  /**
    * If you are a resource owner, you can query the principals with which you share your resources.
    * If you are a principal, you can query the resources that are shared with you.
    * This topic provides an example on how to call the API operation to query the principals with which you share your resources in the `cn-hangzhou` region. The response shows that you share your resources with the principals `114240524784****` and `172050525300****`.
    *
    * @param request ListSharedTargetsRequest
    * @return ListSharedTargetsResponse
   */
  async listSharedTargets(request: ListSharedTargetsRequest): Promise<ListSharedTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedTargetsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.
    *
    * @param request RejectResourceShareInvitationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RejectResourceShareInvitationResponse
   */
  async rejectResourceShareInvitationWithOptions(request: RejectResourceShareInvitationRequest, runtime: $Util.RuntimeOptions): Promise<RejectResourceShareInvitationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceShareInvitationId)) {
      query["ResourceShareInvitationId"] = request.resourceShareInvitationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RejectResourceShareInvitation",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RejectResourceShareInvitationResponse>(await this.callApi(params, req, runtime), new RejectResourceShareInvitationResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.
    *
    * @param request RejectResourceShareInvitationRequest
    * @return RejectResourceShareInvitationResponse
   */
  async rejectResourceShareInvitation(request: RejectResourceShareInvitationRequest): Promise<RejectResourceShareInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectResourceShareInvitationWithOptions(request, runtime);
  }

  /**
    * You can call this API operation to change the name or resource sharing scope of a resource share.
    * This topic provides an example on how to call the API operation to change the name of the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region from `test` to `new`.
    *
    * @param request UpdateResourceShareRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateResourceShareResponse
   */
  async updateResourceShareWithOptions(request: UpdateResourceShareRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceShareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowExternalTargets)) {
      query["AllowExternalTargets"] = request.allowExternalTargets;
    }

    if (!Util.isUnset(request.resourceShareId)) {
      query["ResourceShareId"] = request.resourceShareId;
    }

    if (!Util.isUnset(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceShare",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceShareResponse>(await this.callApi(params, req, runtime), new UpdateResourceShareResponse({}));
  }

  /**
    * You can call this API operation to change the name or resource sharing scope of a resource share.
    * This topic provides an example on how to call the API operation to change the name of the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region from `test` to `new`.
    *
    * @param request UpdateResourceShareRequest
    * @return UpdateResourceShareResponse
   */
  async updateResourceShare(request: UpdateResourceShareRequest): Promise<UpdateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceShareWithOptions(request, runtime);
  }

}
