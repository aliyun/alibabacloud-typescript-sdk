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
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      permissionNames: 'PermissionNames',
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': AssociateResourceShareRequestResources },
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

export class CreateResourceShareRequest extends $tea.Model {
  allowExternalTargets?: boolean;
  permissionNames?: string[];
  resourceShareName?: string;
  resources?: CreateResourceShareRequestResources[];
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      permissionNames: 'PermissionNames',
      resourceShareName: 'ResourceShareName',
      resources: 'Resources',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceShareName: 'string',
      resources: { 'type': 'array', 'itemType': CreateResourceShareRequestResources },
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

export class AcceptResourceShareInvitationResponseBodyResourceShareInvitation extends $tea.Model {
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

export class AssociateResourceShareResponseBodyResourceShareAssociations extends $tea.Model {
  associationStatus?: string;
  associationStatusMessage?: string;
  associationType?: string;
  createTime?: string;
  entityId?: string;
  entityType?: string;
  resourceShareId?: string;
  resourceShareName?: string;
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

export class ListResourceShareAssociationsResponseBodyResourceShareAssociations extends $tea.Model {
  associationStatus?: string;
  associationStatusMessage?: string;
  associationType?: string;
  createTime?: string;
  entityId?: string;
  entityType?: string;
  external?: boolean;
  resourceShareId?: string;
  resourceShareName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      associationStatus: 'AssociationStatus',
      associationStatusMessage: 'AssociationStatusMessage',
      associationType: 'AssociationType',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityType: 'EntityType',
      external: 'External',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
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
      external: 'boolean',
      resourceShareId: 'string',
      resourceShareName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareInvitationsResponseBodyResourceShareInvitations extends $tea.Model {
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
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      external: 'External',
      resourceShareId: 'ResourceShareId',
      targetId: 'TargetId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      external: 'boolean',
      resourceShareId: 'string',
      targetId: 'string',
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

  async acceptResourceShareInvitation(request: AcceptResourceShareInvitationRequest): Promise<AcceptResourceShareInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptResourceShareInvitationWithOptions(request, runtime);
  }

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

  async associateResourceShare(request: AssociateResourceShareRequest): Promise<AssociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceShareWithOptions(request, runtime);
  }

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

  async associateResourceSharePermission(request: AssociateResourceSharePermissionRequest): Promise<AssociateResourceSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceSharePermissionWithOptions(request, runtime);
  }

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

  async createResourceShare(request: CreateResourceShareRequest): Promise<CreateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceShareWithOptions(request, runtime);
  }

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

  async disassociateResourceShare(request: DisassociateResourceShareRequest): Promise<DisassociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceShareWithOptions(request, runtime);
  }

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

  async disassociateResourceSharePermission(request: DisassociateResourceSharePermissionRequest): Promise<DisassociateResourceSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceSharePermissionWithOptions(request, runtime);
  }

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

  async enableSharingWithResourceDirectory(): Promise<EnableSharingWithResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSharingWithResourceDirectoryWithOptions(runtime);
  }

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

  async getPermission(request: GetPermissionRequest): Promise<GetPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionWithOptions(request, runtime);
  }

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

  async listPermissionVersions(request: ListPermissionVersionsRequest): Promise<ListPermissionVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionVersionsWithOptions(request, runtime);
  }

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

  async listPermissions(request: ListPermissionsRequest): Promise<ListPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionsWithOptions(request, runtime);
  }

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

  async listResourceShareAssociations(request: ListResourceShareAssociationsRequest): Promise<ListResourceShareAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareAssociationsWithOptions(request, runtime);
  }

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

  async listResourceShareInvitations(request: ListResourceShareInvitationsRequest): Promise<ListResourceShareInvitationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareInvitationsWithOptions(request, runtime);
  }

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

  async listResourceSharePermissions(request: ListResourceSharePermissionsRequest): Promise<ListResourceSharePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharePermissionsWithOptions(request, runtime);
  }

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

  async listResourceShares(request: ListResourceSharesRequest): Promise<ListResourceSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharesWithOptions(request, runtime);
  }

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

  async listSharedResources(request: ListSharedResourcesRequest): Promise<ListSharedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedResourcesWithOptions(request, runtime);
  }

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

  async listSharedTargets(request: ListSharedTargetsRequest): Promise<ListSharedTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedTargetsWithOptions(request, runtime);
  }

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

  async rejectResourceShareInvitation(request: RejectResourceShareInvitationRequest): Promise<RejectResourceShareInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectResourceShareInvitationWithOptions(request, runtime);
  }

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

  async updateResourceShare(request: UpdateResourceShareRequest): Promise<UpdateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceShareWithOptions(request, runtime);
  }

}
