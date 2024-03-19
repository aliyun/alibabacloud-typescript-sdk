// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachExpressConnectRouterChildInstanceRequest extends $tea.Model {
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachExpressConnectRouterChildInstanceResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class AttachExpressConnectRouterChildInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachExpressConnectRouterChildInstanceResponseBody;
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
      body: AttachExpressConnectRouterChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAddRegionToExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  freshRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      freshRegionId: 'FreshRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      freshRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAddRegionToExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  anyCrossBorderLink?: boolean;
  anyInterRegionLink?: boolean;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  isCdtCrossBorderEnabled?: boolean;
  isCdtInterRegionEnabled?: boolean;
  isUserAllowedToCreateCrossBorderLink?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      anyCrossBorderLink: 'AnyCrossBorderLink',
      anyInterRegionLink: 'AnyInterRegionLink',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      isCdtCrossBorderEnabled: 'IsCdtCrossBorderEnabled',
      isCdtInterRegionEnabled: 'IsCdtInterRegionEnabled',
      isUserAllowedToCreateCrossBorderLink: 'IsUserAllowedToCreateCrossBorderLink',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      anyCrossBorderLink: 'boolean',
      anyInterRegionLink: 'boolean',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      isCdtCrossBorderEnabled: 'boolean',
      isCdtInterRegionEnabled: 'boolean',
      isUserAllowedToCreateCrossBorderLink: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAddRegionToExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAddRegionToExpressConnectRouterResponseBody;
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
      body: CheckAddRegionToExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressConnectRouterRequest extends $tea.Model {
  alibabaSideAsn?: number;
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  name?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alibabaSideAsn: 'AlibabaSideAsn',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alibabaSideAsn: 'number',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  ecrId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      ecrId: 'EcrId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      ecrId: 'string',
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

export class CreateExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExpressConnectRouterResponseBody;
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
      body: CreateExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressConnectRouterAssociationRequest extends $tea.Model {
  allowedPrefixes?: string[];
  associationRegionId?: string;
  cenId?: string;
  clientToken?: string;
  createAttachment?: boolean;
  dryRun?: boolean;
  ecrId?: string;
  transitRouterId?: string;
  transitRouterOwnerId?: number;
  vpcId?: string;
  vpcOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      associationRegionId: 'AssociationRegionId',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      createAttachment: 'CreateAttachment',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      transitRouterId: 'TransitRouterId',
      transitRouterOwnerId: 'TransitRouterOwnerId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefixes: { 'type': 'array', 'itemType': 'string' },
      associationRegionId: 'string',
      cenId: 'string',
      clientToken: 'string',
      createAttachment: 'boolean',
      dryRun: 'boolean',
      ecrId: 'string',
      transitRouterId: 'string',
      transitRouterOwnerId: 'number',
      vpcId: 'string',
      vpcOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressConnectRouterAssociationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  associationId?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      associationId: 'AssociationId',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      associationId: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class CreateExpressConnectRouterAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExpressConnectRouterAssociationResponseBody;
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
      body: CreateExpressConnectRouterAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExpressConnectRouterResponseBody;
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
      body: DeleteExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressConnectRouterAssociationRequest extends $tea.Model {
  associationId?: string;
  clientToken?: string;
  deleteAttachment?: boolean;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      deleteAttachment: 'DeleteAttachment',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      deleteAttachment: 'boolean',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressConnectRouterAssociationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteExpressConnectRouterAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExpressConnectRouterAssociationResponseBody;
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
      body: DeleteExpressConnectRouterAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisabledExpressConnectRouterRouteEntriesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisabledExpressConnectRouterRouteEntriesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  disabledRouteEntryList?: DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList[];
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      disabledRouteEntryList: 'DisabledRouteEntryList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      disabledRouteEntryList: { 'type': 'array', 'itemType': DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisabledExpressConnectRouterRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDisabledExpressConnectRouterRouteEntriesResponseBody;
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
      body: DescribeDisabledExpressConnectRouterRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  resourceGroupId?: string;
  tagModels?: DescribeExpressConnectRouterRequestTagModels[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tagModels: 'TagModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      resourceGroupId: 'string',
      tagModels: { 'type': 'array', 'itemType': DescribeExpressConnectRouterRequestTagModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  ecrList?: DescribeExpressConnectRouterResponseBodyEcrList[];
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      ecrList: 'EcrList',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      ecrList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterResponseBodyEcrList },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterResponseBody;
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
      body: DescribeExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAllowedPrefixHistoryRequest extends $tea.Model {
  associatonId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      associatonId: 'AssociatonId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatonId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAllowedPrefixHistoryResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  allowedPrefixHistoryList?: DescribeExpressConnectRouterAllowedPrefixHistoryResponseBodyAllowedPrefixHistoryList[];
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowedPrefixHistoryList: 'AllowedPrefixHistoryList',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowedPrefixHistoryList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterAllowedPrefixHistoryResponseBodyAllowedPrefixHistoryList },
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DescribeExpressConnectRouterAllowedPrefixHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterAllowedPrefixHistoryResponseBody;
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
      body: DescribeExpressConnectRouterAllowedPrefixHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAssociationRequest extends $tea.Model {
  associationId?: string;
  associationNodeType?: string;
  associationRegionId?: string;
  cenId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  maxResults?: number;
  nextToken?: string;
  transitRouterId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      associationNodeType: 'AssociationNodeType',
      associationRegionId: 'AssociationRegionId',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      associationNodeType: 'string',
      associationRegionId: 'string',
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAssociationResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  associationList?: DescribeExpressConnectRouterAssociationResponseBodyAssociationList[];
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      associationList: 'AssociationList',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      associationList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterAssociationResponseBodyAssociationList },
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAssociationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterAssociationResponseBody;
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
      body: DescribeExpressConnectRouterAssociationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterChildInstanceRequest extends $tea.Model {
  associationId?: string;
  childInstanceId?: string;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterChildInstanceResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  childInstanceList?: DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList[];
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      childInstanceList: 'ChildInstanceList',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      childInstanceList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList },
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterChildInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterChildInstanceResponseBody;
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
      body: DescribeExpressConnectRouterChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterInterRegionTransitModeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterInterRegionTransitModeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  interRegionTransitModeList?: DescribeExpressConnectRouterInterRegionTransitModeResponseBodyInterRegionTransitModeList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      interRegionTransitModeList: 'InterRegionTransitModeList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      interRegionTransitModeList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterInterRegionTransitModeResponseBodyInterRegionTransitModeList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterInterRegionTransitModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterInterRegionTransitModeResponseBody;
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
      body: DescribeExpressConnectRouterInterRegionTransitModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRegionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRegionResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  regionIdList?: string[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      regionIdList: 'RegionIdList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      regionIdList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterRegionResponseBody;
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
      body: DescribeExpressConnectRouterRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRouteEntriesRequest extends $tea.Model {
  asPath?: string;
  clientToken?: string;
  community?: string;
  destinationCidrBlock?: string;
  dryRun?: boolean;
  ecrId?: string;
  maxResults?: number;
  nextToken?: string;
  nexthopInstanceId?: string;
  queryRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
      clientToken: 'ClientToken',
      community: 'Community',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nexthopInstanceId: 'NexthopInstanceId',
      queryRegionId: 'QueryRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: 'string',
      clientToken: 'string',
      community: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nexthopInstanceId: 'string',
      queryRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRouteEntriesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  routeEntriesList?: DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntriesList: 'RouteEntriesList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      routeEntriesList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpressConnectRouterRouteEntriesResponseBody;
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
      body: DescribeExpressConnectRouterRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceGrantedToExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  instanceId?: string;
  instanceOwnerId?: number;
  instanceRegionId?: string;
  instanceType?: string;
  maxResults?: number;
  nextToken?: string;
  resourceGroupId?: string;
  tagModels?: DescribeInstanceGrantedToExpressConnectRouterRequestTagModels[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tagModels: 'TagModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
      instanceRegionId: 'string',
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tagModels: { 'type': 'array', 'itemType': DescribeInstanceGrantedToExpressConnectRouterRequestTagModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceGrantedToExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  ecrGrantedInstanceList?: DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList[];
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      ecrGrantedInstanceList: 'EcrGrantedInstanceList',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      ecrGrantedInstanceList: { 'type': 'array', 'itemType': DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceGrantedToExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceGrantedToExpressConnectRouterResponseBody;
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
      body: DescribeInstanceGrantedToExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachExpressConnectRouterChildInstanceRequest extends $tea.Model {
  childInstanceId?: string;
  childInstanceType?: string;
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceId: 'ChildInstanceId',
      childInstanceType: 'ChildInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceId: 'string',
      childInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachExpressConnectRouterChildInstanceResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DetachExpressConnectRouterChildInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachExpressConnectRouterChildInstanceResponseBody;
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
      body: DetachExpressConnectRouterChildInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableExpressConnectRouterRouteEntriesRequest extends $tea.Model {
  clientToken?: string;
  destinationCidrBlock?: string;
  dryRun?: boolean;
  ecrId?: string;
  nexthopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      nexthopInstanceId: 'NexthopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      nexthopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableExpressConnectRouterRouteEntriesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DisableExpressConnectRouterRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableExpressConnectRouterRouteEntriesResponseBody;
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
      body: DisableExpressConnectRouterRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExpressConnectRouterRouteEntriesRequest extends $tea.Model {
  clientToken?: string;
  destinationCidrBlock?: string;
  dryRun?: boolean;
  ecrId?: string;
  nexthopInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      nexthopInstanceId: 'NexthopInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      nexthopInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableExpressConnectRouterRouteEntriesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class EnableExpressConnectRouterRouteEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableExpressConnectRouterRouteEntriesResponseBody;
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
      body: EnableExpressConnectRouterRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceDeleteExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceDeleteExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ForceDeleteExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ForceDeleteExpressConnectRouterResponseBody;
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
      body: ForceDeleteExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  ecrOwnerAliUid?: number;
  instanceId?: string;
  instanceRegionId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      ecrOwnerAliUid: 'EcrOwnerAliUid',
      instanceId: 'InstanceId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      ecrOwnerAliUid: 'number',
      instanceId: 'string',
      instanceRegionId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class GrantInstanceToExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantInstanceToExpressConnectRouterResponseBody;
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
      body: GrantInstanceToExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExpressConnectRouterSupportedRegionRequest extends $tea.Model {
  clientToken?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExpressConnectRouterSupportedRegionResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  supportedRegionIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      supportedRegionIdList: 'SupportedRegionIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      supportedRegionIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExpressConnectRouterSupportedRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExpressConnectRouterSupportedRegionResponseBody;
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
      body: ListExpressConnectRouterSupportedRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  ecrId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ModifyExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyExpressConnectRouterResponseBody;
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
      body: ModifyExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterAssociationAllowedPrefixRequest extends $tea.Model {
  allowedPrefixes?: string[];
  associationId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefixes: { 'type': 'array', 'itemType': 'string' },
      associationId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterAssociationAllowedPrefixResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ModifyExpressConnectRouterAssociationAllowedPrefixResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyExpressConnectRouterAssociationAllowedPrefixResponseBody;
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
      body: ModifyExpressConnectRouterAssociationAllowedPrefixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterInterRegionTransitModeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  transitModeList?: ModifyExpressConnectRouterInterRegionTransitModeRequestTransitModeList[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      transitModeList: 'TransitModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      transitModeList: { 'type': 'array', 'itemType': ModifyExpressConnectRouterInterRegionTransitModeRequestTransitModeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterInterRegionTransitModeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ModifyExpressConnectRouterInterRegionTransitModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyExpressConnectRouterInterRegionTransitModeResponseBody;
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
      body: ModifyExpressConnectRouterInterRegionTransitModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromExpressConnectRouterRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  ecrOwnerAliUid?: number;
  instanceId?: string;
  instanceRegionId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      ecrOwnerAliUid: 'EcrOwnerAliUid',
      instanceId: 'InstanceId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      ecrOwnerAliUid: 'number',
      instanceId: 'string',
      instanceRegionId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromExpressConnectRouterResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class RevokeInstanceFromExpressConnectRouterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeInstanceFromExpressConnectRouterResponseBody;
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
      body: RevokeInstanceFromExpressConnectRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeExpressConnectRouterInterRegionBandwidthRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ecrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeExpressConnectRouterInterRegionBandwidthResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class SynchronizeExpressConnectRouterInterRegionBandwidthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SynchronizeExpressConnectRouterInterRegionBandwidthResponseBody;
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
      body: SynchronizeExpressConnectRouterInterRegionBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisabledExpressConnectRouterRouteEntriesResponseBodyDisabledRouteEntryList extends $tea.Model {
  destinationCidrBlock?: string;
  ecrId?: string;
  gmtCreate?: string;
  nexthopInstanceId?: string;
  nexthopInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      nexthopInstanceId: 'NexthopInstanceId',
      nexthopInstanceRegionId: 'NexthopInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      nexthopInstanceId: 'string',
      nexthopInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRequestTagModels extends $tea.Model {
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

export class DescribeExpressConnectRouterResponseBodyEcrListTags extends $tea.Model {
  aliUid?: number;
  category?: number;
  id?: number;
  regionNo?: string;
  resourceId?: string;
  resuorceType?: string;
  scope?: number;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      id: 'Id',
      regionNo: 'RegionNo',
      resourceId: 'ResourceId',
      resuorceType: 'ResuorceType',
      scope: 'Scope',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'number',
      id: 'number',
      regionNo: 'string',
      resourceId: 'string',
      resuorceType: 'string',
      scope: 'number',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterResponseBodyEcrList extends $tea.Model {
  alibabaSideAsn?: number;
  bizStatus?: string;
  description?: string;
  ecrId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  name?: string;
  ownerId?: number;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeExpressConnectRouterResponseBodyEcrListTags[];
  static names(): { [key: string]: string } {
    return {
      alibabaSideAsn: 'AlibabaSideAsn',
      bizStatus: 'BizStatus',
      description: 'Description',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alibabaSideAsn: 'number',
      bizStatus: 'string',
      description: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeExpressConnectRouterResponseBodyEcrListTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAllowedPrefixHistoryResponseBodyAllowedPrefixHistoryList extends $tea.Model {
  allowedPrefix?: string[];
  gmtCreate?: string;
  static names(): { [key: string]: string } {
    return {
      allowedPrefix: 'AllowedPrefix',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefix: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAssociationResponseBodyAssociationList extends $tea.Model {
  allowedPrefixes?: string[];
  associationId?: string;
  associationNodeType?: string;
  cenId?: string;
  ecrId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  ownerId?: number;
  regionId?: string;
  status?: string;
  transitRouterId?: string;
  transitRouterOwnerId?: number;
  vpcId?: string;
  vpcOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allowedPrefixes: 'AllowedPrefixes',
      associationId: 'AssociationId',
      associationNodeType: 'AssociationNodeType',
      cenId: 'CenId',
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      status: 'Status',
      transitRouterId: 'TransitRouterId',
      transitRouterOwnerId: 'TransitRouterOwnerId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefixes: { 'type': 'array', 'itemType': 'string' },
      associationId: 'string',
      associationNodeType: 'string',
      cenId: 'string',
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerId: 'number',
      regionId: 'string',
      status: 'string',
      transitRouterId: 'string',
      transitRouterOwnerId: 'number',
      vpcId: 'string',
      vpcOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterChildInstanceResponseBodyChildInstanceList extends $tea.Model {
  associationId?: string;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  ownerId?: number;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      ownerId: 'number',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterInterRegionTransitModeResponseBodyInterRegionTransitModeList extends $tea.Model {
  mode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterRouteEntriesResponseBodyRouteEntriesList extends $tea.Model {
  asPath?: string;
  community?: string;
  destinationCidrBlock?: string;
  nexthopInstanceId?: string;
  nexthopInstanceRegionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
      community: 'Community',
      destinationCidrBlock: 'DestinationCidrBlock',
      nexthopInstanceId: 'NexthopInstanceId',
      nexthopInstanceRegionId: 'NexthopInstanceRegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: 'string',
      community: 'string',
      destinationCidrBlock: 'string',
      nexthopInstanceId: 'string',
      nexthopInstanceRegionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceGrantedToExpressConnectRouterRequestTagModels extends $tea.Model {
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

export class DescribeInstanceGrantedToExpressConnectRouterResponseBodyEcrGrantedInstanceList extends $tea.Model {
  ecrId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  grantId?: string;
  nodeId?: string;
  nodeOwnerBid?: string;
  nodeOwnerUid?: number;
  nodeRegionId?: string;
  nodeType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ecrId: 'EcrId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      grantId: 'GrantId',
      nodeId: 'NodeId',
      nodeOwnerBid: 'NodeOwnerBid',
      nodeOwnerUid: 'NodeOwnerUid',
      nodeRegionId: 'NodeRegionId',
      nodeType: 'NodeType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecrId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      grantId: 'string',
      nodeId: 'string',
      nodeOwnerBid: 'string',
      nodeOwnerUid: 'number',
      nodeRegionId: 'string',
      nodeType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressConnectRouterInterRegionTransitModeRequestTransitModeList extends $tea.Model {
  mode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      regionId: 'string',
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
    this._endpoint = this.getEndpoint("expressconnectrouter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachExpressConnectRouterChildInstanceWithOptions(request: AttachExpressConnectRouterChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AttachExpressConnectRouterChildInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceOwnerId)) {
      body["ChildInstanceOwnerId"] = request.childInstanceOwnerId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      body["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new AttachExpressConnectRouterChildInstanceResponse({}));
  }

  async attachExpressConnectRouterChildInstance(request: AttachExpressConnectRouterChildInstanceRequest): Promise<AttachExpressConnectRouterChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  async checkAddRegionToExpressConnectRouterWithOptions(request: CheckAddRegionToExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<CheckAddRegionToExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.freshRegionId)) {
      body["FreshRegionId"] = request.freshRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckAddRegionToExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAddRegionToExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new CheckAddRegionToExpressConnectRouterResponse({}));
  }

  async checkAddRegionToExpressConnectRouter(request: CheckAddRegionToExpressConnectRouterRequest): Promise<CheckAddRegionToExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAddRegionToExpressConnectRouterWithOptions(request, runtime);
  }

  async createExpressConnectRouterWithOptions(request: CreateExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<CreateExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alibabaSideAsn)) {
      body["AlibabaSideAsn"] = request.alibabaSideAsn;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new CreateExpressConnectRouterResponse({}));
  }

  async createExpressConnectRouter(request: CreateExpressConnectRouterRequest): Promise<CreateExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExpressConnectRouterWithOptions(request, runtime);
  }

  async createExpressConnectRouterAssociationWithOptions(request: CreateExpressConnectRouterAssociationRequest, runtime: $Util.RuntimeOptions): Promise<CreateExpressConnectRouterAssociationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowedPrefixes)) {
      body["AllowedPrefixes"] = request.allowedPrefixes;
    }

    if (!Util.isUnset(request.associationRegionId)) {
      body["AssociationRegionId"] = request.associationRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createAttachment)) {
      body["CreateAttachment"] = request.createAttachment;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      body["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.transitRouterOwnerId)) {
      body["TransitRouterOwnerId"] = request.transitRouterOwnerId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcOwnerId)) {
      body["VpcOwnerId"] = request.vpcOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new CreateExpressConnectRouterAssociationResponse({}));
  }

  async createExpressConnectRouterAssociation(request: CreateExpressConnectRouterAssociationRequest): Promise<CreateExpressConnectRouterAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  async deleteExpressConnectRouterWithOptions(request: DeleteExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new DeleteExpressConnectRouterResponse({}));
  }

  async deleteExpressConnectRouter(request: DeleteExpressConnectRouterRequest): Promise<DeleteExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExpressConnectRouterWithOptions(request, runtime);
  }

  async deleteExpressConnectRouterAssociationWithOptions(request: DeleteExpressConnectRouterAssociationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExpressConnectRouterAssociationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteAttachment)) {
      body["DeleteAttachment"] = request.deleteAttachment;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new DeleteExpressConnectRouterAssociationResponse({}));
  }

  async deleteExpressConnectRouterAssociation(request: DeleteExpressConnectRouterAssociationRequest): Promise<DeleteExpressConnectRouterAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  async describeDisabledExpressConnectRouterRouteEntriesWithOptions(request: DescribeDisabledExpressConnectRouterRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisabledExpressConnectRouterRouteEntriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDisabledExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDisabledExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new DescribeDisabledExpressConnectRouterRouteEntriesResponse({}));
  }

  async describeDisabledExpressConnectRouterRouteEntries(request: DescribeDisabledExpressConnectRouterRouteEntriesRequest): Promise<DescribeDisabledExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisabledExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  async describeExpressConnectRouterWithOptions(request: DescribeExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagModels)) {
      body["TagModels"] = request.tagModels;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterResponse({}));
  }

  async describeExpressConnectRouter(request: DescribeExpressConnectRouterRequest): Promise<DescribeExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterWithOptions(request, runtime);
  }

  async describeExpressConnectRouterAllowedPrefixHistoryWithOptions(request: DescribeExpressConnectRouterAllowedPrefixHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterAllowedPrefixHistoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.associatonId)) {
      body["AssociatonId"] = request.associatonId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouterAllowedPrefixHistory",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterAllowedPrefixHistoryResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterAllowedPrefixHistoryResponse({}));
  }

  async describeExpressConnectRouterAllowedPrefixHistory(request: DescribeExpressConnectRouterAllowedPrefixHistoryRequest): Promise<DescribeExpressConnectRouterAllowedPrefixHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterAllowedPrefixHistoryWithOptions(request, runtime);
  }

  async describeExpressConnectRouterAssociationWithOptions(request: DescribeExpressConnectRouterAssociationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterAssociationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!Util.isUnset(request.associationNodeType)) {
      body["AssociationNodeType"] = request.associationNodeType;
    }

    if (!Util.isUnset(request.associationRegionId)) {
      body["AssociationRegionId"] = request.associationRegionId;
    }

    if (!Util.isUnset(request.cenId)) {
      body["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.transitRouterId)) {
      body["TransitRouterId"] = request.transitRouterId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouterAssociation",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterAssociationResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterAssociationResponse({}));
  }

  async describeExpressConnectRouterAssociation(request: DescribeExpressConnectRouterAssociationRequest): Promise<DescribeExpressConnectRouterAssociationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterAssociationWithOptions(request, runtime);
  }

  async describeExpressConnectRouterChildInstanceWithOptions(request: DescribeExpressConnectRouterChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterChildInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!Util.isUnset(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceRegionId)) {
      body["ChildInstanceRegionId"] = request.childInstanceRegionId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterChildInstanceResponse({}));
  }

  async describeExpressConnectRouterChildInstance(request: DescribeExpressConnectRouterChildInstanceRequest): Promise<DescribeExpressConnectRouterChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  async describeExpressConnectRouterInterRegionTransitModeWithOptions(request: DescribeExpressConnectRouterInterRegionTransitModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterInterRegionTransitModeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouterInterRegionTransitMode",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterInterRegionTransitModeResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterInterRegionTransitModeResponse({}));
  }

  async describeExpressConnectRouterInterRegionTransitMode(request: DescribeExpressConnectRouterInterRegionTransitModeRequest): Promise<DescribeExpressConnectRouterInterRegionTransitModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterInterRegionTransitModeWithOptions(request, runtime);
  }

  async describeExpressConnectRouterRegionWithOptions(request: DescribeExpressConnectRouterRegionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterRegionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouterRegion",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterRegionResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterRegionResponse({}));
  }

  async describeExpressConnectRouterRegion(request: DescribeExpressConnectRouterRegionRequest): Promise<DescribeExpressConnectRouterRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterRegionWithOptions(request, runtime);
  }

  async describeExpressConnectRouterRouteEntriesWithOptions(request: DescribeExpressConnectRouterRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressConnectRouterRouteEntriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.asPath)) {
      body["AsPath"] = request.asPath;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.community)) {
      body["Community"] = request.community;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.nexthopInstanceId)) {
      body["NexthopInstanceId"] = request.nexthopInstanceId;
    }

    if (!Util.isUnset(request.queryRegionId)) {
      body["QueryRegionId"] = request.queryRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new DescribeExpressConnectRouterRouteEntriesResponse({}));
  }

  async describeExpressConnectRouterRouteEntries(request: DescribeExpressConnectRouterRouteEntriesRequest): Promise<DescribeExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  async describeInstanceGrantedToExpressConnectRouterWithOptions(request: DescribeInstanceGrantedToExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceGrantedToExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      body["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      body["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagModels)) {
      body["TagModels"] = request.tagModels;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceGrantedToExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceGrantedToExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new DescribeInstanceGrantedToExpressConnectRouterResponse({}));
  }

  async describeInstanceGrantedToExpressConnectRouter(request: DescribeInstanceGrantedToExpressConnectRouterRequest): Promise<DescribeInstanceGrantedToExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceGrantedToExpressConnectRouterWithOptions(request, runtime);
  }

  async detachExpressConnectRouterChildInstanceWithOptions(request: DetachExpressConnectRouterChildInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DetachExpressConnectRouterChildInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.childInstanceId)) {
      body["ChildInstanceId"] = request.childInstanceId;
    }

    if (!Util.isUnset(request.childInstanceType)) {
      body["ChildInstanceType"] = request.childInstanceType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachExpressConnectRouterChildInstance",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachExpressConnectRouterChildInstanceResponse>(await this.callApi(params, req, runtime), new DetachExpressConnectRouterChildInstanceResponse({}));
  }

  async detachExpressConnectRouterChildInstance(request: DetachExpressConnectRouterChildInstanceRequest): Promise<DetachExpressConnectRouterChildInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachExpressConnectRouterChildInstanceWithOptions(request, runtime);
  }

  async disableExpressConnectRouterRouteEntriesWithOptions(request: DisableExpressConnectRouterRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DisableExpressConnectRouterRouteEntriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.nexthopInstanceId)) {
      body["NexthopInstanceId"] = request.nexthopInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new DisableExpressConnectRouterRouteEntriesResponse({}));
  }

  async disableExpressConnectRouterRouteEntries(request: DisableExpressConnectRouterRouteEntriesRequest): Promise<DisableExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  async enableExpressConnectRouterRouteEntriesWithOptions(request: EnableExpressConnectRouterRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<EnableExpressConnectRouterRouteEntriesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationCidrBlock)) {
      body["DestinationCidrBlock"] = request.destinationCidrBlock;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.nexthopInstanceId)) {
      body["NexthopInstanceId"] = request.nexthopInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableExpressConnectRouterRouteEntries",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableExpressConnectRouterRouteEntriesResponse>(await this.callApi(params, req, runtime), new EnableExpressConnectRouterRouteEntriesResponse({}));
  }

  async enableExpressConnectRouterRouteEntries(request: EnableExpressConnectRouterRouteEntriesRequest): Promise<EnableExpressConnectRouterRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableExpressConnectRouterRouteEntriesWithOptions(request, runtime);
  }

  async forceDeleteExpressConnectRouterWithOptions(request: ForceDeleteExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<ForceDeleteExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ForceDeleteExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ForceDeleteExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new ForceDeleteExpressConnectRouterResponse({}));
  }

  async forceDeleteExpressConnectRouter(request: ForceDeleteExpressConnectRouterRequest): Promise<ForceDeleteExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forceDeleteExpressConnectRouterWithOptions(request, runtime);
  }

  async grantInstanceToExpressConnectRouterWithOptions(request: GrantInstanceToExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<GrantInstanceToExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.ecrOwnerAliUid)) {
      body["EcrOwnerAliUid"] = request.ecrOwnerAliUid;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      body["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantInstanceToExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantInstanceToExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new GrantInstanceToExpressConnectRouterResponse({}));
  }

  async grantInstanceToExpressConnectRouter(request: GrantInstanceToExpressConnectRouterRequest): Promise<GrantInstanceToExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantInstanceToExpressConnectRouterWithOptions(request, runtime);
  }

  async listExpressConnectRouterSupportedRegionWithOptions(request: ListExpressConnectRouterSupportedRegionRequest, runtime: $Util.RuntimeOptions): Promise<ListExpressConnectRouterSupportedRegionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.nodeType)) {
      body["NodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListExpressConnectRouterSupportedRegion",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExpressConnectRouterSupportedRegionResponse>(await this.callApi(params, req, runtime), new ListExpressConnectRouterSupportedRegionResponse({}));
  }

  async listExpressConnectRouterSupportedRegion(request: ListExpressConnectRouterSupportedRegionRequest): Promise<ListExpressConnectRouterSupportedRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExpressConnectRouterSupportedRegionWithOptions(request, runtime);
  }

  async modifyExpressConnectRouterWithOptions(request: ModifyExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new ModifyExpressConnectRouterResponse({}));
  }

  async modifyExpressConnectRouter(request: ModifyExpressConnectRouterRequest): Promise<ModifyExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterWithOptions(request, runtime);
  }

  async modifyExpressConnectRouterAssociationAllowedPrefixWithOptions(request: ModifyExpressConnectRouterAssociationAllowedPrefixRequest, runtime: $Util.RuntimeOptions): Promise<ModifyExpressConnectRouterAssociationAllowedPrefixResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowedPrefixes)) {
      body["AllowedPrefixes"] = request.allowedPrefixes;
    }

    if (!Util.isUnset(request.associationId)) {
      body["AssociationId"] = request.associationId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      body["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyExpressConnectRouterAssociationAllowedPrefix",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyExpressConnectRouterAssociationAllowedPrefixResponse>(await this.callApi(params, req, runtime), new ModifyExpressConnectRouterAssociationAllowedPrefixResponse({}));
  }

  async modifyExpressConnectRouterAssociationAllowedPrefix(request: ModifyExpressConnectRouterAssociationAllowedPrefixRequest): Promise<ModifyExpressConnectRouterAssociationAllowedPrefixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterAssociationAllowedPrefixWithOptions(request, runtime);
  }

  async modifyExpressConnectRouterInterRegionTransitModeWithOptions(request: ModifyExpressConnectRouterInterRegionTransitModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyExpressConnectRouterInterRegionTransitModeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.transitModeList)) {
      body["TransitModeList"] = request.transitModeList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyExpressConnectRouterInterRegionTransitMode",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyExpressConnectRouterInterRegionTransitModeResponse>(await this.callApi(params, req, runtime), new ModifyExpressConnectRouterInterRegionTransitModeResponse({}));
  }

  async modifyExpressConnectRouterInterRegionTransitMode(request: ModifyExpressConnectRouterInterRegionTransitModeRequest): Promise<ModifyExpressConnectRouterInterRegionTransitModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyExpressConnectRouterInterRegionTransitModeWithOptions(request, runtime);
  }

  async revokeInstanceFromExpressConnectRouterWithOptions(request: RevokeInstanceFromExpressConnectRouterRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromExpressConnectRouterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    if (!Util.isUnset(request.ecrOwnerAliUid)) {
      body["EcrOwnerAliUid"] = request.ecrOwnerAliUid;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      body["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeInstanceFromExpressConnectRouter",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeInstanceFromExpressConnectRouterResponse>(await this.callApi(params, req, runtime), new RevokeInstanceFromExpressConnectRouterResponse({}));
  }

  async revokeInstanceFromExpressConnectRouter(request: RevokeInstanceFromExpressConnectRouterRequest): Promise<RevokeInstanceFromExpressConnectRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromExpressConnectRouterWithOptions(request, runtime);
  }

  async synchronizeExpressConnectRouterInterRegionBandwidthWithOptions(request: SynchronizeExpressConnectRouterInterRegionBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeExpressConnectRouterInterRegionBandwidthResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ecrId)) {
      body["EcrId"] = request.ecrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SynchronizeExpressConnectRouterInterRegionBandwidth",
      version: "2023-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SynchronizeExpressConnectRouterInterRegionBandwidthResponse>(await this.callApi(params, req, runtime), new SynchronizeExpressConnectRouterInterRegionBandwidthResponse({}));
  }

  async synchronizeExpressConnectRouterInterRegionBandwidth(request: SynchronizeExpressConnectRouterInterRegionBandwidthRequest): Promise<SynchronizeExpressConnectRouterInterRegionBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeExpressConnectRouterInterRegionBandwidthWithOptions(request, runtime);
  }

}
