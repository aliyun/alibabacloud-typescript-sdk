// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptResourceShareInvitationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource sharing invitation.
   * 
   * You can call the [ListResourceShareInvitations](https://help.aliyun.com/document_detail/450564.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-pMnItMX19fBJ****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08F18B04-47CB-5C0E-A6D2-37DEF5C2A961
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource sharing invitation.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptResourceShareInvitationResponseBody;
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
  /**
   * @remarks
   * The information about the permissions. If you do not configure this parameter, the system automatically associates the default permission for the specified resource type with the resource share. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   */
  permissionNames?: string[];
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: AssociateResourceShareRequestResources[];
  /**
   * @remarks
   * The properties of the principal.
   * 
   * >  This parameter is available only when you specify an Alibaba Cloud service as a principal.
   */
  targetProperties?: AssociateResourceShareRequestTargetProperties[];
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 172050525300****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 111FB84A-60A9-403E-9067-E55D7EE95BD1
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the entities that are associated with the resource share.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateResourceShareResponseBody;
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
  /**
   * @remarks
   * The name of the permission.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * Specifies whether to use the specified permission to replace an existing permission. Valid values:
   * 
   * *   false: does not use the specified permission to replace an existing permission. This is the default value. If you set the value to false for a resource share that does not have associated permissions, the system associates the specified permission with the resource share. In a resource share, one resource type can have only one permission. If you set the value to false for a resource share that already has a permission for the resource type indicated by the specified permission, the system reports an error. This prevents you from replacing the existing permission by mistake.
   * *   true: uses the specified permission to replace an existing permission of the same resource type.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 111FB84A-60A9-403E-9067-E55D7EE95BD1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateResourceSharePermissionResponseBody;
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
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2nb47ueqk***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-dz3Ek1iiO***
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A900114-22D3-5E9D-87A2-48E5EB5BF310
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
  /**
   * @remarks
   * Indicates whether resource sharing within a resource directory is enabled. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  enableSharingWithRd?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819545D0-C97A-5DB3-BD73-A1B17E9A4BC1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSharingWithResourceDirectoryStatusResponseBody;
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
  /**
   * @remarks
   * Specifies whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false (default): Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The information about the permissions. If you do not configure this parameter, the system automatically associates the default permission for the specified resource type with the resource share. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   */
  permissionNames?: string[];
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The information about the shared resources.
   */
  resources?: CreateResourceShareRequestResources[];
  tag?: CreateResourceShareRequestTag[];
  /**
   * @remarks
   * The properties of the principal.
   * 
   * >  This parameter is available only when you specify an Alibaba Cloud service as a principal.
   */
  targetProperties?: CreateResourceShareRequestTargetProperties[];
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 172050525300****
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      permissionNames: 'PermissionNames',
      resourceGroupId: 'ResourceGroupId',
      resourceShareName: 'ResourceShareName',
      resources: 'Resources',
      tag: 'Tag',
      targetProperties: 'TargetProperties',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceShareName: 'string',
      resources: { 'type': 'array', 'itemType': CreateResourceShareRequestResources },
      tag: { 'type': 'array', 'itemType': CreateResourceShareRequestTag },
      targetProperties: { 'type': 'array', 'itemType': CreateResourceShareRequestTargetProperties },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C3FA051-61DC-4F3E-81E9-E4830524DF4B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource share.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceShareResponseBody;
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
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-qSkW1HBY****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A627EE2A-223D-4E1F-A954-394686AEA916
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceShareResponseBody;
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
  /**
   * @remarks
   * The supported natural language. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
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
  /**
   * @remarks
   * The information of the regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0D64A198-5842-4570-8E26-5E540CDC84CD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
  /**
   * @remarks
   * The owner of the resource share. Valid values:
   * 
   * *   Self: The resource share belongs to the current account. This is the default value. For resource sharing within a resource directory, if you are a resource owner and you want to disassociate resources or principals from a resource share, set this parameter to Self.
   * *   OtherAccounts: The resource share belongs to another account. For resource sharing outside a resource directory, if you are a principal and you want to exit a resource share, set this parameter to OtherAccounts.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: DisassociateResourceShareRequestResources[];
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 172050525300****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95230BC9-A8E8-4493-96BD-4F0C758E37F8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the entities that are associated with the resource share.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateResourceShareResponseBody;
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
  /**
   * @remarks
   * The name of the permission. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 111FB84A-60A9-403E-9067-E55D7EE95BD1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateResourceSharePermissionResponseBody;
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSharingWithResourceDirectoryResponseBody;
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
  /**
   * @remarks
   * The name of the permission.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
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
  /**
   * @remarks
   * The information about the permission.
   */
  permission?: GetPermissionResponseBodyPermission;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPermissionResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
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
  /**
   * @remarks
   * The token that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the permission.
   */
  permissions?: ListPermissionVersionsResponseBodyPermissions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04677DCA-7C33-464B-8811-1B1DA3C3D197
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPermissionVersionsResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
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
  /**
   * @remarks
   * The token that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the permission.
   */
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04677DCA-7C33-464B-8811-1B1DA3C3D197
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPermissionsResponseBody;
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
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   Associating: The entity is being associated.
   * *   Associated: The entity is associated.
   * *   Failed: The entity fails to be associated.
   * *   Disassociating: The entity is being disassociated.
   * *   Disassociated: The entity is disassociated.
   * 
   * >  The system deletes the records of entities in the `Failed` or `Disassociated` state within 48 hours to 96 hours.
   * 
   * @example
   * Associated
   */
  associationStatus?: string;
  /**
   * @remarks
   * The association type. Valid values:
   * 
   * *   Resource
   * *   Target
   * 
   * This parameter is required.
   * 
   * @example
   * Resource
   */
  associationType?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * >  This parameter is unavailable if you set the `AssociationType` parameter to `Target`.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The IDs of the resource shares.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five resource shares can be specified at a time.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The ID of the principal.
   * 
   * >  This parameter is unavailable if you set the `AssociationType` parameter to `Resource`.
   * 
   * @example
   * 172050525300****
   */
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
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11BA57B5-7301-4E2F-BBA5-2AE4C2F4FCDB
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the entities.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceShareAssociationsResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of the resource shares.
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The IDs of the resource sharing invitations.
   */
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
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30EC8328-1BDE-51D5-BFAB-039508BD91A1
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource sharing invitations.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceShareInvitationsResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The owner of the resource share. Valid values:
   * 
   * *   Self: the current account
   * *   OtherAccounts: an account other than the current account
   * 
   * This parameter is required.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
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
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the permissions.
   */
  permissions?: ListResourceSharePermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceSharePermissionsResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the permission. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The owner of the resource shares. Valid values:
   * 
   * *   Self: the current account
   * *   OtherAccounts: an account other than the current account
   * 
   * This parameter is required.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of a resource share.
   * 
   * @example
   * rs-PqysnzIj****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The status of the resource share. Valid values:
   * 
   * *   Active: The resource share is enabled.
   * *   Pending: The resource share is associated with one or more resource sharing invitations that are waiting for confirmation.
   * *   Deleting: The resource share is being deleted.
   * *   Deleted: The resource share is deleted.
   * 
   * >  The system deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  tag?: ListResourceSharesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permissionName: 'PermissionName',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      resourceShareIds: 'ResourceShareIds',
      resourceShareName: 'ResourceShareName',
      resourceShareStatus: 'ResourceShareStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      permissionName: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'string',
      resourceShareIds: { 'type': 'array', 'itemType': 'string' },
      resourceShareName: 'string',
      resourceShareStatus: 'string',
      tag: { 'type': 'array', 'itemType': ListResourceSharesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource shares.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceSharesResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of a shared resource.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The owner of the resource shares. Valid values:
   * 
   * *   Self: your account. If you set the value to Self, the resources you share with other accounts are queried.
   * *   OtherAccounts: another account. If you set the value to OtherAccounts, the resources other accounts share with you are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of a resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the principal or resource owner.
   * 
   * *   If the value of `ResourceOwner` is `Self`, set this parameter to the ID of a principal.
   * *   If the value of `ResourceOwner` is `OtherAccounts`, set this parameter to the ID of a resource owner.
   * 
   * @example
   * 172050525300****
   */
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
  /**
   * @remarks
   * The token that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04677DCA-7C33-464B-8811-1B1DA3C3D197
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the shared resources.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSharedResourcesResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * *   Self: your account. If you set the value to Self, the principals that are associated with your resource shares are queried.
   * *   OtherAccounts: another account. If you set the value to OtherAccounts, the resource shares with which your account is associated and the owners of the resource shares are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * Self
   */
  resourceOwner?: string;
  /**
   * @remarks
   * The ID of a resource share.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five resource shares can be specified at a time.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareIds?: string[];
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 114240524784****
   */
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
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04677DCA-7C33-464B-8811-1B1DA3C3D197
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the principals.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSharedTargetsResponseBody;
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

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ResourceShare
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @example
   * 8054B059-6B36-53BF-AA45-B8C9A0ED05AB
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource sharing invitation.
   * 
   * You can call the [ListResourceShareInvitations](https://help.aliyun.com/document_detail/450564.html) operation to obtain the ID of a resource sharing invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * i-yyTWbkjHArYh****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E446D6DE-BFC8-5F37-A494-33D7B118147D
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource sharing invitation.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RejectResourceShareInvitationResponseBody;
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

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ResourceShare
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C
   */
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ResourceShare
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C
   */
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-qSkW1HBY****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The new name of the resource share.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * new
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2860A3A4-D8C1-4EF4-954E-84A3945E26E5
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource share.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceShareResponseBody;
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
  /**
   * @remarks
   * This parameter is deprecated. The OperationType parameter is used instead.
   * 
   * @example
   * Associate
   */
  associateType?: string;
  /**
   * @remarks
   * The failure description.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  failureDescription?: string;
  /**
   * @remarks
   * The failure cause. Valid values:
   * 
   * *   Unavailable: The resource cannot be shared.
   * *   LimitExceeded: The number of shared resources within the Alibaba Cloud account exceeds the upper limit.
   * *   ZonalResourceInaccessible: The resource is unavailable in this region.
   * *   InternalError: An internal error occurred during the check.
   * 
   * @example
   * Unavailable
   */
  failureReason?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   Associate
   * 
   * @example
   * Associate
   */
  operationType?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * s-7xvh46nx5oqlre0wv***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the shared resource.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * Snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureReason parameter is used instead.
   * 
   * @example
   * Unavailable
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureDescription parameter is used instead.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      failureDescription: 'FailureDescription',
      failureReason: 'FailureReason',
      operationType: 'OperationType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      failureDescription: 'string',
      failureReason: 'string',
      operationType: 'string',
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
  /**
   * @remarks
   * The information about the failure.
   */
  acceptInvitationFailedDetails?: AcceptResourceShareInvitationResponseBodyResourceShareInvitationAcceptInvitationFailedDetails[];
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-02T06:43:12.353Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the invitee.
   * 
   * This parameter is required.
   * 
   * @example
   * 134254031178****
   */
  receiverAccountId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-ysGRci9z****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the resource sharing invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * i-pMnItMX19fBJ****
   */
  resourceShareInvitationId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the inviter.
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
   */
  senderAccountId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending
   * *   Accepted
   * *   Cancelled
   * *   Rejected
   * *   Expired
   * *   AcceptFailed
   * 
   * This parameter is required.
   * 
   * @example
   * AcceptFailed
   */
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
  /**
   * @remarks
   * The ID of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * >  Resources.N.ResourceId and Resources.N.ResourceType must be used in pairs.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * >  `Resources.N.ResourceId` and `Resources.N.ResourceType` must be used in pairs.
   * 
   * @example
   * VSwitch
   */
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
  /**
   * @remarks
   * The property parameter of the principal. For example, you can specify a parameter that indicates the time range for resource sharing. Valid values of `timeRangeType`:
   * 
   * *   timeRange: a specific time range
   * *   day: all day
   * 
   * >  `TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be used in pairs.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  property?: string;
  /**
   * @remarks
   * The ID of the principal.
   * 
   * >  `TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be used in pairs.
   * 
   * @example
   * 172050525300****
   */
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
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   Associating: The entity is being associated.
   * *   Associated: The entity is associated.
   * *   Failed: The entity fails to be associated.
   * *   Disassociating: The entity is being disassociated.
   * *   Disassociated: The entity is disassociated.
   * 
   * >  The system deletes the records of entities in the `Failed` or `Disassociated` state within 48 hours to 96 hours.
   * 
   * @example
   * Associating
   */
  associationStatus?: string;
  /**
   * @remarks
   * The cause of the association failure.
   * 
   * @example
   * The reason for the association failure.
   */
  associationStatusMessage?: string;
  /**
   * @remarks
   * The association type. Valid values:
   * 
   * *   Resource
   * *   Target
   * 
   * @example
   * Resource
   */
  associationType?: string;
  /**
   * @remarks
   * The time when the association of the entity was created. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the shared resource was associated with the resource share.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the principal was associated with the resource share.
   * 
   * @example
   * 2020-12-04T09:40:41.246Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the ID of the shared resource.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the ID of the principal.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the shared resource. For information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * *   If the value of AssociationType is Target, the value of this parameter is `Account`.
   * 
   * @example
   * VSwitch
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The properties of the principal, such as the time range within which the resource is shared.
   * 
   * >  This parameter is returned only if the principal is an Alibaba Cloud service.
   * 
   * @example
   * {
   *     "plan":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  targetProperty?: string;
  /**
   * @remarks
   * The time when the association of the entity was updated. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the association of the shared resource was updated.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the association of the principal was updated.
   * 
   * @example
   * 2020-12-04T09:40:41.246Z
   */
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
  /**
   * @remarks
   * The ID of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * >  `Resources.N.ResourceId` and `Resources.N.ResourceType` must be used in pairs.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * >  `Resources.N.ResourceId` and `Resources.N.ResourceType` must be used in pairs.
   * 
   * @example
   * VSwitch
   */
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

export class CreateResourceShareRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequestTargetProperties extends $tea.Model {
  /**
   * @remarks
   * The property parameter of the principal. For example, you can specify a parameter that indicates the time range for resource sharing. Valid values of `timeRangeType`:
   * 
   * *   timeRange: a specific time range
   * *   day: all day
   * 
   * >  `TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be used in pairs.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  property?: string;
  /**
   * @remarks
   * The ID of the principal.
   * 
   * >  `TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be used in pairs.
   * 
   * @example
   * 172050525300****
   */
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
  /**
   * @remarks
   * Indicates whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The time when the resource share was created.
   * 
   * @example
   * 2020-12-03T08:02:22.413Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-qSkW1HBY****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * @example
   * 151266687691****
   */
  resourceShareOwner?: string;
  /**
   * @remarks
   * The status of the resource share. Valid values:
   * 
   * *   Active: The resource share is enabled.
   * *   Pending: The resource share is associated with one or more resource sharing invitations that are waiting for confirmation.
   * *   Deleting: The resource share is being deleted.
   * *   Deleted: The resource share is deleted.
   * 
   * >  The system automatically deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  /**
   * @remarks
   * The time when the resource share was updated.
   * 
   * @example
   * 2020-12-03T08:02:22.413Z
   */
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
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the Resource Sharing service in the region.
   * 
   * @example
   * resourcesharing.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * >  Resources.N.ResourceId and Resources.N.ResourceType must be used in pairs.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * >  Resources.N.ResourceId and Resources.N.ResourceType must be used in pairs.
   * 
   * @example
   * VSwitch
   */
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
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   Associating: The entity is being associated.
   * *   Associated: The entity is associated.
   * *   Failed: The entity fails to be associated.
   * *   Disassociating: The entity is being disassociated.
   * *   Disassociated: The entity is disassociated.
   * 
   * >  The system deletes the records of entities in the `Failed` or `Disassociated` state within 48 hours to 96 hours.
   * 
   * @example
   * Disassociating
   */
  associationStatus?: string;
  /**
   * @remarks
   * The cause of the disassociation failure.
   * 
   * @example
   * The Resources is invalid.
   */
  associationStatusMessage?: string;
  /**
   * @remarks
   * The association type. Valid values:
   * 
   * *   Resource
   * *   Target
   * 
   * @example
   * Target
   */
  associationType?: string;
  /**
   * @remarks
   * The time when the disassociation of the entity was performed. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the resource was disassociated from the resource share.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the principal was disassociated from the resource share.
   * 
   * @example
   * 2020-12-04T09:40:41.250Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the ID of the resource.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the ID of the resource directory, folder, member, or Alibaba Cloud service.
   * 
   * @example
   * 172050525300****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the resource. For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * *   If the value of AssociationType is Target, the value of this parameter is Account.
   * 
   * @example
   * Account
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The properties of the principal, such as the time range within which the resource is shared.
   * 
   * >  This parameter is returned only if the principal is an Alibaba Cloud service.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  targetProperty?: string;
  /**
   * @remarks
   * The time when the disassociation of the entity was updated. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the disassociation of the resource was updated.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the disassociation of the principal was updated.
   * 
   * @example
   * 2020-12-04T09:40:45.556Z
   */
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
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the permission is the default permission. Valid values:
   * 
   * *   false: The permission is not the default permission.
   * *   true: The permission is the default permission.
   * 
   * @example
   * true
   */
  defaultPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false: The version is not the default version.
   * *   true: The version is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The document of the policy related to the permission.
   * 
   * @example
   * {"Effect":"Allow","Action":["vpc:DescribeVSwitches","vpc:DescribeVSwitchAttributes"]}
   */
  permission?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
  permissionVersion?: string;
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
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
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the permission is the default permission. Valid values:
   * 
   * *   false: The permission is not the default permission.
   * *   true: The permission is the default permission.
   * 
   * @example
   * true
   */
  defaultPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false: The version is not the default version.
   * *   true: The version is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
  permissionVersion?: string;
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
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
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the permission is the default permission. Valid values:
   * 
   * *   false: The permission is not the default permission.
   * *   true: The permission is the default permission.
   * 
   * @example
   * true
   */
  defaultPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false: The version is not the default version.
   * *   true: The version is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
  permissionVersion?: string;
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
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
  /**
   * @remarks
   * This parameter is deprecated. The OperationType parameter is used instead.
   * 
   * @example
   * None
   */
  associateType?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the ID of the principal.
   * *   If the value of AssociationType is Target, the value of this parameter is the ID of the resource.
   * 
   * @example
   * 172050525300****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the resource. For information about the types of resources that can be shared, see Services that work with Resource Sharing.
   * *   If the value of AssociationType is Target, the value of this parameter is `ResourceDirectory`, `Folder`, `Account`, or `Service`.
   * 
   * @example
   * Account
   */
  entityType?: string;
  /**
   * @remarks
   * The failure description.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  failureDescription?: string;
  /**
   * @remarks
   * The failure cause. Valid values:
   * 
   * *   Unavailable: The resource does not exist.
   * *   LimitExceeded: The number of principals for the resource exceeds the upper limit.
   * *   ZonalResourceInaccessible: The resource is unavailable in this region.
   * *   InternalError: An internal error occurred.
   * *   UnsupportedOperation: You cannot perform this operation.
   * 
   * @example
   * Unavailable
   */
  failureReason?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   Associate
   * *   Disassociate
   * 
   * @example
   * Associate
   */
  operationType?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureReason parameter is used instead.
   * 
   * @example
   * None
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureDescription parameter is used instead.
   * 
   * @example
   * None
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      entityId: 'EntityId',
      entityType: 'EntityType',
      failureDescription: 'FailureDescription',
      failureReason: 'FailureReason',
      operationType: 'OperationType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      entityId: 'string',
      entityType: 'string',
      failureDescription: 'string',
      failureReason: 'string',
      operationType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceShareAssociationsResponseBodyResourceShareAssociations extends $tea.Model {
  /**
   * @remarks
   * The information about the failure.
   */
  associationFailedDetails?: ListResourceShareAssociationsResponseBodyResourceShareAssociationsAssociationFailedDetails[];
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   Associating: The entity is being associated.
   * *   Associated: The entity is associated.
   * *   Failed: The entity fails to be associated.
   * *   Disassociating: The entity is being disassociated.
   * *   Disassociated: The entity is disassociated.
   * 
   * >  The system deletes the records of entities in the `Failed` or `Disassociated` state within 48 hours to 96 hours.
   * 
   * @example
   * Associated
   */
  associationStatus?: string;
  /**
   * @remarks
   * The cause of the association failure.
   * 
   * @example
   * The reason for the association failure.
   */
  associationStatusMessage?: string;
  /**
   * @remarks
   * The association type. Valid values:
   * 
   * *   Resource
   * *   Target
   * 
   * @example
   * Resource
   */
  associationType?: string;
  /**
   * @remarks
   * The time when the association of the entity was created. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the shared resource was associated with or disassociated from the resource share.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the principal was associated with or disassociated from the resource share.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the ID of the resource.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the ID of the principal.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  entityId?: string;
  /**
   * @remarks
   * The type of the entity. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of AssociationType is Resource, the value of this parameter is the type of the resource. For information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * *   If the value of AssociationType is Target, the value of this parameter is `Account`.
   * 
   * @example
   * VSwitch
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the principal is outside the resource directory. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  external?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * example
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The properties of the principal, such as the time range within which the resource is shared. Valid values of `timeRangeType`:
   * 
   * *   timeRange: a specific time range
   * *   day: all day
   * 
   * >  This parameter is returned only if the principal is an Alibaba Cloud service.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  targetProperty?: string;
  /**
   * @remarks
   * The time when the association of the entity was updated. The value of this parameter depends on the value of the AssociationType parameter:
   * 
   * *   If the value of `AssociationType` is `Resource`, the value of this parameter is the time when the association of the shared resource was updated.
   * *   If the value of `AssociationType` is `Target`, the value of this parameter is the time when the association of the principal was updated.
   * 
   * @example
   * 2020-12-07T07:39:02.920Z
   */
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
  /**
   * @remarks
   * This parameter is deprecated. The OperationType parameter is used instead.
   * 
   * @example
   * Associate
   */
  associateType?: string;
  /**
   * @remarks
   * The failure description.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  failureDescription?: string;
  /**
   * @remarks
   * The failure cause. Valid values:
   * 
   * *   Unavailable: The resource cannot be shared.
   * *   LimitExceeded: The number of shared resources within the Alibaba Cloud account exceeds the upper limit.
   * *   ZonalResourceInaccessible: The resource is unavailable in this region.
   * *   InternalError: An internal error occurred during the check.
   * *   UnsupportedOperation: You cannot perform this operation.
   * 
   * @example
   * Unavailable
   */
  failureReason?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * *   Associate
   * *   Disassociate
   * 
   * @example
   * Associate
   */
  operationType?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * s-7xvh46nx5oqlre0wv***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the shared resource.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * Snapshot
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureReason parameter is used instead.
   * 
   * @example
   * Unavailable
   */
  status?: string;
  /**
   * @remarks
   * This parameter is deprecated. The FailureDescription parameter is used instead.
   * 
   * @example
   * You cannot access the specified resource at this time.
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      failureDescription: 'FailureDescription',
      failureReason: 'FailureReason',
      operationType: 'OperationType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      failureDescription: 'string',
      failureReason: 'string',
      operationType: 'string',
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
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-18T05:36:45.024Z
   */
  createTime?: string;
  /**
   * @remarks
   * The information about the failure.
   */
  invitationFailedDetails?: ListResourceShareInvitationsResponseBodyResourceShareInvitationsInvitationFailedDetails[];
  /**
   * @remarks
   * The Alibaba Cloud account ID of the invitee.
   * 
   * @example
   * 134254031178****
   */
  receiverAccountId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-ysGRci9z****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * i-p6eRytrkjVvM****
   */
  resourceShareInvitationId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * example
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the inviter.
   * 
   * @example
   * 151266687691****
   */
  senderAccountId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending
   * *   Accepted
   * *   Cancelled
   * *   Rejected
   * *   Expired
   * *   AcceptFailed
   * 
   * @example
   * Pending
   */
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
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the permission is the default permission. Valid values:
   * 
   * *   false: The permission is not the default permission.
   * *   true: The permission is the default permission.
   * 
   * @example
   * true
   */
  defaultPermission?: boolean;
  /**
   * @remarks
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false: The version is not the default version.
   * *   true: The version is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
  permissionVersion?: string;
  /**
   * @remarks
   * The type of the shared resources.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-12-07T07:39:01.818Z
   */
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

export class ListResourceSharesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseBodyResourceSharesTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseBodyResourceShares extends $tea.Model {
  /**
   * @remarks
   * Indicates whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The time when the resource share was created.
   * 
   * @example
   * 2020-12-03T02:20:31.292Z
   */
  createTime?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-PqysnzIj****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * @example
   * 151266687691****
   */
  resourceShareOwner?: string;
  /**
   * @remarks
   * The status of the resource share. Valid values:
   * 
   * *   Active: The resource share is enabled.
   * *   Pending: The resource share is associated with one or more resource sharing invitations that are waiting for confirmation.
   * *   Deleting: The resource share is being deleted.
   * *   Deleted: The resource share is deleted.
   * 
   * >  The system deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  tags?: ListResourceSharesResponseBodyResourceSharesTags[];
  /**
   * @remarks
   * The time when the resource share was updated.
   * 
   * @example
   * 2020-12-03T08:01:43.638Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      createTime: 'string',
      resourceGroupId: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListResourceSharesResponseBodyResourceSharesTags },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedResourcesResponseBodySharedResources extends $tea.Model {
  /**
   * @remarks
   * The time when the shared resource was associated with the resource share.
   * 
   * @example
   * 2020-12-07T07:39:02.921Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the shared resource.
   * 
   * @example
   * vsw-bp1upw03qyz8n7us9****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The status of the shared resource. This parameter is returned only when you query the resources that other accounts share with you.
   * 
   * Valid values:
   * 
   * *   Available: The resource is available.
   * *   ZonalResourceInaccessible: The resource is unavailable in the current zone.
   * *   LimitExceeded: The resource is unavailable because the maximum number of resources that other accounts can share with you exceeds the upper limit.
   * *   Unavailable: The resource is unavailable.
   * 
   * @example
   * Available
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The cause of the association failure.
   * 
   * @example
   * The reason for the association failure.
   */
  resourceStatusMessage?: string;
  /**
   * @remarks
   * The type of the shared resource.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  /**
   * @remarks
   * The time when the association of the shared resource was updated.
   * 
   * @example
   * 2020-12-07T07:39:02.921Z
   */
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
  /**
   * @remarks
   * The time when the principal was associated with the resource share.
   * 
   * @example
   * 2020-12-07T09:16:59.905Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the principal is outside the resource directory. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  external?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the principal or resource owner.
   * 
   * *   If the value of `ResourceOwner` is `Self`, the value of this parameter is the ID of a principal.
   * *   If the value of `ResourceOwner` is `OtherAccounts`, the value of this parameter is the ID of a resource owner.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The properties of the principal, such as the time range within which the resource is shared.
   * 
   * >  This parameter is returned only if the principal is an Alibaba Cloud service.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  targetProperty?: string;
  /**
   * @remarks
   * The time when the association of the principal was updated.
   * 
   * @example
   * 2020-12-07T09:16:59.905Z
   */
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

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @example
   * rs-PqysnzIj****
   */
  resourceId?: string;
  /**
   * @example
   * ResourceShare
   */
  resourceType?: string;
  /**
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @example
   * v1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RejectResourceShareInvitationResponseBodyResourceShareInvitation extends $tea.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-02T07:07:30.809Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the invitee.
   * 
   * This parameter is required.
   * 
   * @example
   * 134254031178****
   */
  receiverAccountId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-JoA1Ayjm****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * i-yyTWbkjHArYh****
   */
  resourceShareInvitationId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the inviter.
   * 
   * This parameter is required.
   * 
   * @example
   * 151266687691****
   */
  senderAccountId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Rejected: The invitation is rejected.
   * *   Expired: The invitation has expired.
   * 
   * This parameter is required.
   * 
   * @example
   * Rejected
   */
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

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponseBodyResourceShare extends $tea.Model {
  /**
   * @remarks
   * Indicates whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The time when the resource share was created.
   * 
   * @example
   * 2020-12-03T08:02:22.413Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-qSkW1HBY****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * new
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * @example
   * 151266687691****
   */
  resourceShareOwner?: string;
  /**
   * @remarks
   * The status of the resource share. Valid values:
   * 
   * *   Active: The resource share is enabled.
   * *   Pending: The resource share is associated with one or more resource sharing invitations that are waiting for confirmation.
   * *   Deleting: The resource share is being deleted.
   * *   Deleted: The resource share is deleted.
   * 
   * >  The system deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  /**
   * @remarks
   * The time when the resource share was updated.
   * 
   * @example
   * 2020-12-04T08:55:25.382Z
   */
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
   * Accepts a resource sharing invitation.
   * 
   * @remarks
   * ### [](#)
   * *   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with an object in a resource directory, the system automatically accepts the resource sharing invitation for the object.
   * *   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
   * This topic provides an example on how to call the API operation to accept the resource sharing invitation whose ID is `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.
   * 
   * @param request - AcceptResourceShareInvitationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptResourceShareInvitationResponse
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
   * Accepts a resource sharing invitation.
   * 
   * @remarks
   * ### [](#)
   * *   A principal needs to accept or reject a resource sharing invitation only if the principal is not the management account or a member of a resource directory. If you share resources with an object in a resource directory, the system automatically accepts the resource sharing invitation for the object.
   * *   A resource sharing invitation is valid for seven days. A principal must accept or reject the invitation within the validity period.
   * This topic provides an example on how to call the API operation to accept the resource sharing invitation whose ID is `i-pMnItMX19fBJ****` in the `cn-hangzhou` region.
   * 
   * @param request - AcceptResourceShareInvitationRequest
   * @returns AcceptResourceShareInvitationResponse
   */
  async acceptResourceShareInvitation(request: AcceptResourceShareInvitationRequest): Promise<AcceptResourceShareInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptResourceShareInvitationWithOptions(request, runtime);
  }

  /**
   * Associates resources or principals with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the vSwitch `vsw-bp183p93qs667muql****` and the member `172050525300****` with the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the association, the vSwitch is shared with the member.
   * 
   * @param request - AssociateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResourceShareResponse
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
   * Associates resources or principals with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the vSwitch `vsw-bp183p93qs667muql****` and the member `172050525300****` with the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the association, the vSwitch is shared with the member.
   * 
   * @param request - AssociateResourceShareRequest
   * @returns AssociateResourceShareResponse
   */
  async associateResourceShare(request: AssociateResourceShareRequest): Promise<AssociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceShareWithOptions(request, runtime);
  }

  /**
   * Associates permissions with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - AssociateResourceSharePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateResourceSharePermissionResponse
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
   * Associates permissions with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to associate the `AliyunRSDefaultPermissionVSwitch` permission with the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - AssociateResourceSharePermissionRequest
   * @returns AssociateResourceSharePermissionResponse
   */
  async associateResourceSharePermission(request: AssociateResourceSharePermissionRequest): Promise<AssociateResourceSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateResourceSharePermissionWithOptions(request, runtime);
  }

  /**
   * Transfers a resource share from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
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

  /**
   * Transfers a resource share from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Checks the status of resource sharing within a resource directory.
   * 
   * @param request - CheckSharingWithResourceDirectoryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSharingWithResourceDirectoryStatusResponse
   */
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

  /**
   * Checks the status of resource sharing within a resource directory.
   * @returns CheckSharingWithResourceDirectoryStatusResponse
   */
  async checkSharingWithResourceDirectoryStatus(): Promise<CheckSharingWithResourceDirectoryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSharingWithResourceDirectoryStatusWithOptions(runtime);
  }

  /**
   * Creates a resource share.
   * 
   * @remarks
   * Resource Sharing allows you to share your resources with one or more accounts and access the resources shared by other accounts. For more information, see [Resource Sharing overview](https://help.aliyun.com/document_detail/160622.html).
   * This topic provides an example on how to call the API operation to create a resource share named `test` in the `cn-hangzhou` region to share the vSwitch `vsw-bp183p93qs667muql****` with the member `172050525300****` in a resource directory. In this example, the management account of the resource directory is used to call this API operation.
   * 
   * @param request - CreateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceShareResponse
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceShareName)) {
      query["ResourceShareName"] = request.resourceShareName;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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
   * Creates a resource share.
   * 
   * @remarks
   * Resource Sharing allows you to share your resources with one or more accounts and access the resources shared by other accounts. For more information, see [Resource Sharing overview](https://help.aliyun.com/document_detail/160622.html).
   * This topic provides an example on how to call the API operation to create a resource share named `test` in the `cn-hangzhou` region to share the vSwitch `vsw-bp183p93qs667muql****` with the member `172050525300****` in a resource directory. In this example, the management account of the resource directory is used to call this API operation.
   * 
   * @param request - CreateResourceShareRequest
   * @returns CreateResourceShareResponse
   */
  async createResourceShare(request: CreateResourceShareRequest): Promise<CreateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceShareWithOptions(request, runtime);
  }

  /**
   * 调用DeleteResourceShare删除共享单元。
   * 
   * @remarks
   * After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.
   * A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.
   * This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.
   * 
   * @param request - DeleteResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceShareResponse
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
   * 调用DeleteResourceShare删除共享单元。
   * 
   * @remarks
   * After a resource share is deleted, all principals in the resource share can no longer access the resources in the resource share. However, the resources are not deleted with the resource share.
   * A resource share that is deleted is in the `Deleted` state. The system deletes the record of the resource share within 48 hours to 96 hours.
   * This topic provides an example on how to call the API operation to delete the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region.
   * 
   * @param request - DeleteResourceShareRequest
   * @returns DeleteResourceShareResponse
   */
  async deleteResourceShare(request: DeleteResourceShareRequest): Promise<DeleteResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceShareWithOptions(request, runtime);
  }

  /**
   * Queries the regions where the Resource Sharing service is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
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

  /**
   * Queries the regions where the Resource Sharing service is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Disassociates resources or principals from a resource share.
   * 
   * @remarks
   *   A resource owner can call this API operation to disassociate shared resources or principals from a resource share.
   * *   If a principal does not belong to a resource directory, the principal can call this API operation to exit the resource share. For more information, see [Exit a resource share](https://help.aliyun.com/document_detail/440614.html).
   * This topic provides an example on how to use the management account of a resource directory to call the API operation to disassociate the member `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the member is disassociated from the resource share, the member cannot share the resources in the resource share.
   * 
   * @param request - DisassociateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateResourceShareResponse
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
   * Disassociates resources or principals from a resource share.
   * 
   * @remarks
   *   A resource owner can call this API operation to disassociate shared resources or principals from a resource share.
   * *   If a principal does not belong to a resource directory, the principal can call this API operation to exit the resource share. For more information, see [Exit a resource share](https://help.aliyun.com/document_detail/440614.html).
   * This topic provides an example on how to use the management account of a resource directory to call the API operation to disassociate the member `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. After the member is disassociated from the resource share, the member cannot share the resources in the resource share.
   * 
   * @param request - DisassociateResourceShareRequest
   * @returns DisassociateResourceShareResponse
   */
  async disassociateResourceShare(request: DisassociateResourceShareRequest): Promise<DisassociateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceShareWithOptions(request, runtime);
  }

  /**
   * Disassociates a permission from a resource share. You can disassociate a permission from a resource share only if the resource share does not contain resources of the type indicated by the permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - DisassociateResourceSharePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateResourceSharePermissionResponse
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
   * Disassociates a permission from a resource share. You can disassociate a permission from a resource share only if the resource share does not contain resources of the type indicated by the permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to disassociate the `AliyunRSDefaultPermissionVSwitch` permission from the `rs-6GRmdD3X****` resource share in the `cn-hangzhou` region.
   * 
   * @param request - DisassociateResourceSharePermissionRequest
   * @returns DisassociateResourceSharePermissionResponse
   */
  async disassociateResourceSharePermission(request: DisassociateResourceSharePermissionRequest): Promise<DisassociateResourceSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateResourceSharePermissionWithOptions(request, runtime);
  }

  /**
   * Enables resource sharing for a resource directory.
   * 
   * @remarks
   * You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.
   * You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.
   * 
   * @param request - EnableSharingWithResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSharingWithResourceDirectoryResponse
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
   * Enables resource sharing for a resource directory.
   * 
   * @remarks
   * You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory as a resource owner only after you enable resource sharing for your resource directory.
   * You can call this API operation only by using the management account of your resource directory or a RAM user or RAM role to which the required permissions are granted within the management account.
   * @returns EnableSharingWithResourceDirectoryResponse
   */
  async enableSharingWithResourceDirectory(): Promise<EnableSharingWithResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSharingWithResourceDirectoryWithOptions(runtime);
  }

  /**
   * Queries the information about a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the `AliyunRSDefaultPermissionVSwitch` permission whose version is `v1` in the `cn-hangzhou` region.
   * 
   * @param request - GetPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionResponse
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
   * Queries the information about a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the `AliyunRSDefaultPermissionVSwitch` permission whose version is `v1` in the `cn-hangzhou` region.
   * 
   * @param request - GetPermissionRequest
   * @returns GetPermissionResponse
   */
  async getPermission(request: GetPermissionRequest): Promise<GetPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the versions of the `AliyunRSDefaultPermissionVSwitch` permission in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionVersionsResponse
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
   * Queries the versions of a permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the versions of the `AliyunRSDefaultPermissionVSwitch` permission in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionVersionsRequest
   * @returns ListPermissionVersionsResponse
   */
  async listPermissionVersions(request: ListPermissionVersionsRequest): Promise<ListPermissionVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionVersionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the default permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
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
   * Queries the information about the default permission.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.
   * 
   * @param request - ListPermissionsRequest
   * @returns ListPermissionsResponse
   */
  async listPermissions(request: ListPermissionsRequest): Promise<ListPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the association records of resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the association records of the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows the following records:
   * *   The resource `vsw-bp1upw03qyz8n7us9****` of the `VSwitch` type has been associated with the resource share `rs-6GRmdD3X****`. The resource is in the `Associated` state. This indicates that the resource is being shared.
   * *   The resource `vsw-bp183p93qs667muql****` of the `VSwitch` type has been disassociated from the resource share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state. This indicates that the sharing of the resource is stopped.
   * 
   * @param request - ListResourceShareAssociationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceShareAssociationsResponse
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
   * Queries the association records of resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the association records of the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows the following records:
   * *   The resource `vsw-bp1upw03qyz8n7us9****` of the `VSwitch` type has been associated with the resource share `rs-6GRmdD3X****`. The resource is in the `Associated` state. This indicates that the resource is being shared.
   * *   The resource `vsw-bp183p93qs667muql****` of the `VSwitch` type has been disassociated from the resource share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state. This indicates that the sharing of the resource is stopped.
   * 
   * @param request - ListResourceShareAssociationsRequest
   * @returns ListResourceShareAssociationsResponse
   */
  async listResourceShareAssociations(request: ListResourceShareAssociationsRequest): Promise<ListResourceShareAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareAssociationsWithOptions(request, runtime);
  }

  /**
   * Queries the resource sharing invitations that are received.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to call the API operation to query the resource sharing invitations that are received by the current account in the `cn-hangzhou` region. The response shows that one invitation is received by the current account and is waiting for confirmation.
   * 
   * @param request - ListResourceShareInvitationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceShareInvitationsResponse
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
   * Queries the resource sharing invitations that are received.
   * 
   * @remarks
   * ### [](#)
   * This topic provides an example on how to call the API operation to query the resource sharing invitations that are received by the current account in the `cn-hangzhou` region. The response shows that one invitation is received by the current account and is waiting for confirmation.
   * 
   * @param request - ListResourceShareInvitationsRequest
   * @returns ListResourceShareInvitationsResponse
   */
  async listResourceShareInvitations(request: ListResourceShareInvitationsRequest): Promise<ListResourceShareInvitationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceShareInvitationsWithOptions(request, runtime);
  }

  /**
   * Queries the permissions that are associated with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.
   * 
   * @param request - ListResourceSharePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceSharePermissionsResponse
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
   * Queries the permissions that are associated with a resource share.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the permissions that are associated with the resource share created by using the current Alibaba Cloud account in the `cn-hangzhou` region.
   * 
   * @param request - ListResourceSharePermissionsRequest
   * @returns ListResourceSharePermissionsResponse
   */
  async listResourceSharePermissions(request: ListResourceSharePermissionsRequest): Promise<ListResourceSharePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharePermissionsWithOptions(request, runtime);
  }

  /**
   * Queries resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created by using the account whose ID is `151266687691****`:
   * *   `rs-hX9wC5jO****`, which is in the `Deleted` state
   * *   `rs-PqysnzIj****`, which is in the `Active` state
   * 
   * @param request - ListResourceSharesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceSharesResponse
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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
   * Queries resource shares.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resource shares that are created by using the current Alibaba Cloud account in the `cn-hangzhou` region. The response shows that the following resource shares are created by using the account whose ID is `151266687691****`:
   * *   `rs-hX9wC5jO****`, which is in the `Deleted` state
   * *   `rs-PqysnzIj****`, which is in the `Active` state
   * 
   * @param request - ListResourceSharesRequest
   * @returns ListResourceSharesResponse
   */
  async listResourceShares(request: ListResourceSharesRequest): Promise<ListResourceSharesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceSharesWithOptions(request, runtime);
  }

  /**
   * Queries the resources you share with other accounts or the resources other accounts share with you.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resources that you share with other accounts in the `cn-hangzhou` region. The response shows that in the resource share `rs-6GRmdD3X****`, you share the `vsw-bp1upw03qyz8n7us9****` resource of the `VSwitch` type with other accounts.
   * 
   * @param request - ListSharedResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedResourcesResponse
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
   * Queries the resources you share with other accounts or the resources other accounts share with you.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the resources that you share with other accounts in the `cn-hangzhou` region. The response shows that in the resource share `rs-6GRmdD3X****`, you share the `vsw-bp1upw03qyz8n7us9****` resource of the `VSwitch` type with other accounts.
   * 
   * @param request - ListSharedResourcesRequest
   * @returns ListSharedResourcesResponse
   */
  async listSharedResources(request: ListSharedResourcesRequest): Promise<ListSharedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedResourcesWithOptions(request, runtime);
  }

  /**
   * Queries principals.
   * 
   * @remarks
   * If you are a resource owner, you can query the principals with which you share your resources. If you are a principal, you can query the resources that are shared with you.
   * This topic provides an example on how to call the API operation to query the principals with which you share your resources in the `cn-hangzhou` region. The response shows that you share your resources with the principals `114240524784****` and `172050525300****`.
   * 
   * @param request - ListSharedTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedTargetsResponse
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
   * Queries principals.
   * 
   * @remarks
   * If you are a resource owner, you can query the principals with which you share your resources. If you are a principal, you can query the resources that are shared with you.
   * This topic provides an example on how to call the API operation to query the principals with which you share your resources in the `cn-hangzhou` region. The response shows that you share your resources with the principals `114240524784****` and `172050525300****`.
   * 
   * @param request - ListSharedTargetsRequest
   * @returns ListSharedTargetsResponse
   */
  async listSharedTargets(request: ListSharedTargetsRequest): Promise<ListSharedTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedTargetsWithOptions(request, runtime);
  }

  /**
   * 查询资源标签
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询资源标签
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 拒绝组织外共享邀请
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.
   * 
   * @param request - RejectResourceShareInvitationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectResourceShareInvitationResponse
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
   * 拒绝组织外共享邀请
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to reject the resource sharing invitation `i-yyTWbkjHArYh****` in the `cn-hangzhou` region.
   * 
   * @param request - RejectResourceShareInvitationRequest
   * @returns RejectResourceShareInvitationResponse
   */
  async rejectResourceShareInvitation(request: RejectResourceShareInvitationRequest): Promise<RejectResourceShareInvitationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rejectResourceShareInvitationWithOptions(request, runtime);
  }

  /**
   * 资源打用户标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 资源打用户标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 资源去除用户标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-01-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 资源去除用户标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 调用UpdateResourceShare修改共享单元基本信息。
   * 
   * @remarks
   * You can call this API operation to change the name or resource sharing scope of a resource share.
   * This topic provides an example on how to call the API operation to change the name of the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region from `test` to `new`.
   * 
   * @param request - UpdateResourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceShareResponse
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
   * 调用UpdateResourceShare修改共享单元基本信息。
   * 
   * @remarks
   * You can call this API operation to change the name or resource sharing scope of a resource share.
   * This topic provides an example on how to call the API operation to change the name of the resource share `rs-qSkW1HBY****` in the `cn-hangzhou` region from `test` to `new`.
   * 
   * @param request - UpdateResourceShareRequest
   * @returns UpdateResourceShareResponse
   */
  async updateResourceShare(request: UpdateResourceShareRequest): Promise<UpdateResourceShareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceShareWithOptions(request, runtime);
  }

}
