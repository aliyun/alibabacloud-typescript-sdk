// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddResolverEndpointRequest extends $tea.Model {
  ipConfig?: AddResolverEndpointRequestIpConfig[];
  lang?: string;
  name?: string;
  securityGroupId?: string;
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipConfig: { 'type': 'array', 'itemType': AddResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointResponseBody extends $tea.Model {
  endpointId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddResolverEndpointResponseBody;
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
      body: AddResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequest extends $tea.Model {
  endpointId?: string;
  forwardIp?: AddResolverRuleRequestForwardIp[];
  lang?: string;
  name?: string;
  type?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      type: 'Type',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      forwardIp: { 'type': 'array', 'itemType': AddResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      type: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleResponseBody extends $tea.Model {
  requestId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddResolverRuleResponseBody;
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
      body: AddResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserVpcAuthorizationRequest extends $tea.Model {
  authChannel?: string;
  authCode?: string;
  authType?: string;
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      authChannel: 'AuthChannel',
      authCode: 'AuthCode',
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authChannel: 'string',
      authCode: 'string',
      authType: 'string',
      authorizedUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserVpcAuthorizationResponseBody extends $tea.Model {
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

export class AddUserVpcAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserVpcAuthorizationResponseBody;
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
      body: AddUserVpcAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  proxyPattern?: string;
  resourceGroupId?: string;
  zoneName?: string;
  zoneTag?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      proxyPattern: 'ProxyPattern',
      resourceGroupId: 'ResourceGroupId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      proxyPattern: 'string',
      resourceGroupId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddZoneResponseBody;
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
      body: AddZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  line?: string;
  priority?: number;
  remark?: string;
  rr?: string;
  ttl?: number;
  type?: string;
  userClientIp?: string;
  value?: string;
  weight?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      remark: 'Remark',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      remark: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordResponseBody extends $tea.Model {
  recordId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddZoneRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddZoneRecordResponseBody;
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
      body: AddZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcRequest extends $tea.Model {
  lang?: string;
  ruleId?: string;
  vpc?: BindResolverRuleVpcRequestVpc[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
      vpc: { 'type': 'array', 'itemType': BindResolverRuleVpcRequestVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcResponseBody extends $tea.Model {
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

export class BindResolverRuleVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindResolverRuleVpcResponseBody;
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
      body: BindResolverRuleVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  userClientIp?: string;
  vpcs?: BindZoneVpcRequestVpcs[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      vpcs: 'Vpcs',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      userClientIp: 'string',
      vpcs: { 'type': 'array', 'itemType': BindZoneVpcRequestVpcs },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcResponseBody extends $tea.Model {
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

export class BindZoneVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindZoneVpcResponseBody;
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
      body: BindZoneVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameResponseBody extends $tea.Model {
  check?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckZoneNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckZoneNameResponseBody;
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
      body: CheckZoneNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverEndpointRequest extends $tea.Model {
  endpointId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverEndpointResponseBody extends $tea.Model {
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

export class DeleteResolverEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResolverEndpointResponseBody;
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
      body: DeleteResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverRuleRequest extends $tea.Model {
  lang?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResolverRuleResponseBody extends $tea.Model {
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

export class DeleteResolverRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResolverRuleResponseBody;
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
      body: DeleteResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVpcAuthorizationRequest extends $tea.Model {
  authType?: string;
  authorizedUserId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserVpcAuthorizationResponseBody extends $tea.Model {
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

export class DeleteUserVpcAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserVpcAuthorizationResponseBody;
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
      body: DeleteUserVpcAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  userClientIp?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneResponseBody extends $tea.Model {
  requestId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteZoneResponseBody;
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
      body: DeleteZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  recordId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordResponseBody extends $tea.Model {
  recordId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZoneRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteZoneRecordResponseBody;
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
      body: DeleteZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsRequest extends $tea.Model {
  endTimestamp?: number;
  entityType?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startTimestamp?: number;
  userClientIp?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      entityType: 'EntityType',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      entityType: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBody extends $tea.Model {
  changeLogs?: DescribeChangeLogsResponseBodyChangeLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      changeLogs: 'ChangeLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLogs: DescribeChangeLogsResponseBodyChangeLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeChangeLogsResponseBody;
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
      body: DescribeChangeLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  authorizedUserId?: number;
  lang?: string;
  scene?: string;
  userClientIp?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authorizedUserId: 'AuthorizedUserId',
      lang: 'Lang',
      scene: 'Scene',
      userClientIp: 'UserClientIp',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authorizedUserId: 'number',
      lang: 'string',
      scene: 'string',
      userClientIp: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeRequestGraphRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  endTimestamp?: number;
  lang?: string;
  startTimestamp?: number;
  userClientIp?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      endTimestamp: 'EndTimestamp',
      lang: 'Lang',
      startTimestamp: 'StartTimestamp',
      userClientIp: 'UserClientIp',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      endTimestamp: 'number',
      lang: 'string',
      startTimestamp: 'number',
      userClientIp: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBody extends $tea.Model {
  requestDetails?: DescribeRequestGraphResponseBodyRequestDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestDetails: 'RequestDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDetails: DescribeRequestGraphResponseBodyRequestDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRequestGraphResponseBody;
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
      body: DescribeRequestGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesRequest extends $tea.Model {
  azId?: string;
  lang?: string;
  resolverRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      lang: 'Lang',
      resolverRegionId: 'ResolverRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      lang: 'string',
      resolverRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponseBody extends $tea.Model {
  availableZones?: DescribeResolverAvailableZonesResponseBodyAvailableZones[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeResolverAvailableZonesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResolverAvailableZonesResponseBody;
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
      body: DescribeResolverAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointRequest extends $tea.Model {
  endpointId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointResponseBody extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  id?: string;
  ipConfigs?: DescribeResolverEndpointResponseBodyIpConfigs[];
  name?: string;
  requestId?: string;
  securityGroupId?: string;
  status?: string;
  updateTime?: string;
  updateTimestamp?: number;
  vpcId?: string;
  vpcName?: string;
  vpcRegionId?: string;
  vpcRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ipConfigs: 'IpConfigs',
      name: 'Name',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcRegionName: 'VpcRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      id: 'string',
      ipConfigs: { 'type': 'array', 'itemType': DescribeResolverEndpointResponseBodyIpConfigs },
      name: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcRegionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResolverEndpointResponseBody;
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
      body: DescribeResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBody extends $tea.Model {
  endpoints?: DescribeResolverEndpointsResponseBodyEndpoints[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpoints },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResolverEndpointsResponseBody;
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
      body: DescribeResolverEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleRequest extends $tea.Model {
  lang?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponseBody extends $tea.Model {
  bindVpcs?: DescribeResolverRuleResponseBodyBindVpcs[];
  createTime?: string;
  createTimestamp?: number;
  endpointId?: string;
  endpointName?: string;
  forwardIps?: DescribeResolverRuleResponseBodyForwardIps[];
  id?: string;
  name?: string;
  requestId?: string;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      forwardIps: 'ForwardIps',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRuleResponseBodyForwardIps },
      id: 'string',
      name: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResolverRuleResponseBody;
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
      body: DescribeResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesRequest extends $tea.Model {
  endpointId?: string;
  keyword?: string;
  lang?: string;
  needDetailAttributes?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      keyword: 'Keyword',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      keyword: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  rules?: DescribeResolverRulesResponseBodyRules[];
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRules },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResolverRulesResponseBody;
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
      body: DescribeResolverRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  vpcRequestTops?: DescribeStatisticSummaryResponseBodyVpcRequestTops;
  zoneRequestTops?: DescribeStatisticSummaryResponseBodyZoneRequestTops;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcRequestTops: 'VpcRequestTops',
      zoneRequestTops: 'ZoneRequestTops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcRequestTops: DescribeStatisticSummaryResponseBodyVpcRequestTops,
      zoneRequestTops: DescribeStatisticSummaryResponseBodyZoneRequestTops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeStatisticSummaryResponseBody;
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
      body: DescribeStatisticSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBody extends $tea.Model {
  ecsRegions?: DescribeSyncEcsHostTaskResponseBodyEcsRegions;
  regions?: DescribeSyncEcsHostTaskResponseBodyRegions;
  requestId?: string;
  status?: string;
  success?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsRegions: 'EcsRegions',
      regions: 'Regions',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsRegions: DescribeSyncEcsHostTaskResponseBodyEcsRegions,
      regions: DescribeSyncEcsHostTaskResponseBodyRegions,
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSyncEcsHostTaskResponseBody;
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
      body: DescribeSyncEcsHostTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tags?: DescribeTagsResponseBodyTags[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tags: 'Tags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTagsResponseBody;
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
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsRequest extends $tea.Model {
  authType?: string;
  authorizedUserId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedUserId: 'AuthorizedUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedUserId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  users?: DescribeUserVpcAuthorizationsResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
      users: { 'type': 'array', 'itemType': DescribeUserVpcAuthorizationsResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserVpcAuthorizationsResponseBody;
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
      body: DescribeUserVpcAuthorizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoRequest extends $tea.Model {
  lang?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBody extends $tea.Model {
  bindVpcs?: DescribeZoneInfoResponseBodyBindVpcs;
  createTime?: string;
  createTimestamp?: number;
  creator?: string;
  creatorType?: string;
  dnsGroup?: string;
  dnsGroupChanging?: boolean;
  isPtr?: boolean;
  proxyPattern?: string;
  recordCount?: number;
  remark?: string;
  requestId?: string;
  resourceGroupId?: string;
  slaveDns?: boolean;
  updateTime?: string;
  updateTimestamp?: number;
  zoneId?: string;
  zoneName?: string;
  zoneTag?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDns: 'SlaveDns',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: DescribeZoneInfoResponseBodyBindVpcs,
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDns: 'boolean',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeZoneInfoResponseBody;
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
      body: DescribeZoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  searchMode?: string;
  tag?: string;
  userClientIp?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      tag: 'Tag',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      tag: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  records?: DescribeZoneRecordsResponseBodyRecords;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: DescribeZoneRecordsResponseBodyRecords,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeZoneRecordsResponseBody;
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
      body: DescribeZoneRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZoneVpcTreeResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZoneVpcTreeResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeZoneVpcTreeResponseBody;
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
      body: DescribeZoneVpcTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  queryRegionId?: string;
  queryVpcId?: string;
  resourceGroupId?: string;
  resourceTag?: DescribeZonesRequestResourceTag[];
  searchMode?: string;
  zoneTag?: string[];
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryRegionId: 'QueryRegionId',
      queryVpcId: 'QueryVpcId',
      resourceGroupId: 'ResourceGroupId',
      resourceTag: 'ResourceTag',
      searchMode: 'SearchMode',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryRegionId: 'string',
      queryVpcId: 'string',
      resourceGroupId: 'string',
      resourceTag: { 'type': 'array', 'itemType': DescribeZonesRequestResourceTag },
      searchMode: 'string',
      zoneTag: { 'type': 'array', 'itemType': 'string' },
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeZonesResponseBody;
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
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  lang?: string;
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  size?: number;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      size: 'Size',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class MoveResourceGroupRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  newResourceGroupId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveResourceGroupResponseBody;
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
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  proxyPattern?: string;
  userClientIp?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      proxyPattern: 'ProxyPattern',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      proxyPattern: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternResponseBody extends $tea.Model {
  requestId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProxyPatternResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetProxyPatternResponseBody;
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
      body: SetProxyPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  recordId?: number;
  status?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      status: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusResponseBody extends $tea.Model {
  recordId?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetZoneRecordStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetZoneRecordStatusResponseBody;
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
      body: SetZoneRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  lang?: string;
  overWrite?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      overWrite: 'OverWrite',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      overWrite: 'boolean',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
  all?: boolean;
  lang?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      lang: 'Lang',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      lang: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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

export class UpdateRecordRemarkRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  recordId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkResponseBody extends $tea.Model {
  recordId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRecordRemarkResponseBody;
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
      body: UpdateRecordRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverEndpointRequest extends $tea.Model {
  endpointId?: string;
  ipConfig?: UpdateResolverEndpointRequestIpConfig[];
  lang?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      ipConfig: { 'type': 'array', 'itemType': UpdateResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverEndpointResponseBody extends $tea.Model {
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

export class UpdateResolverEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResolverEndpointResponseBody;
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
      body: UpdateResolverEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleRequest extends $tea.Model {
  forwardIp?: UpdateResolverRuleRequestForwardIp[];
  lang?: string;
  name?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardIp: { 'type': 'array', 'itemType': UpdateResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleResponseBody extends $tea.Model {
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

export class UpdateResolverRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResolverRuleResponseBody;
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
      body: UpdateResolverRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskRequest extends $tea.Model {
  lang?: string;
  region?: UpdateSyncEcsHostTaskRequestRegion[];
  status?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      region: 'Region',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      region: { 'type': 'array', 'itemType': UpdateSyncEcsHostTaskRequestRegion },
      status: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSyncEcsHostTaskResponseBody;
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
      body: UpdateSyncEcsHostTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  line?: string;
  priority?: number;
  recordId?: number;
  rr?: string;
  ttl?: number;
  type?: string;
  userClientIp?: string;
  value?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordResponseBody extends $tea.Model {
  recordId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateZoneRecordResponseBody;
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
      body: UpdateZoneRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  remark?: string;
  userClientIp?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      remark: 'string',
      userClientIp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkResponseBody extends $tea.Model {
  requestId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZoneRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateZoneRemarkResponseBody;
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
      body: UpdateZoneRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverEndpointRequestIpConfig extends $tea.Model {
  azId?: string;
  cidrBlock?: string;
  ip?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResolverRuleRequestForwardIp extends $tea.Model {
  ip?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResolverRuleVpcRequestVpc extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindZoneVpcRequestVpcs extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBodyChangeLogsChangeLog extends $tea.Model {
  content?: string;
  creatorId?: string;
  creatorSubType?: string;
  creatorType?: string;
  entityId?: string;
  entityName?: string;
  id?: number;
  operAction?: string;
  operIp?: string;
  operObject?: string;
  operTime?: string;
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      entityId: 'EntityId',
      entityName: 'EntityName',
      id: 'Id',
      operAction: 'OperAction',
      operIp: 'OperIp',
      operObject: 'OperObject',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creatorId: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      entityId: 'string',
      entityName: 'string',
      id: 'number',
      operAction: 'string',
      operIp: 'string',
      operObject: 'string',
      operTime: 'string',
      operTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeLogsResponseBodyChangeLogs extends $tea.Model {
  changeLog?: DescribeChangeLogsResponseBodyChangeLogsChangeLog[];
  static names(): { [key: string]: string } {
    return {
      changeLog: 'ChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLog: { 'type': 'array', 'itemType': DescribeChangeLogsResponseBodyChangeLogsChangeLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop extends $tea.Model {
  requestCount?: number;
  time?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      requestCount: 'RequestCount',
      time: 'Time',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCount: 'number',
      time: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBodyRequestDetails extends $tea.Model {
  zoneRequestTop?: DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverAvailableZonesResponseBodyAvailableZones extends $tea.Model {
  azId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointResponseBodyIpConfigs extends $tea.Model {
  azId?: string;
  cidrBlock?: string;
  ip?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBodyEndpointsIpConfigs extends $tea.Model {
  azId?: string;
  cidrBlock?: string;
  ip?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBodyEndpoints extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  id?: string;
  ipConfigs?: DescribeResolverEndpointsResponseBodyEndpointsIpConfigs[];
  name?: string;
  securityGroupId?: string;
  status?: string;
  updateTime?: string;
  updateTimestamp?: number;
  vpcId?: string;
  vpcName?: string;
  vpcRegionId?: string;
  vpcRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ipConfigs: 'IpConfigs',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcRegionName: 'VpcRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      id: 'string',
      ipConfigs: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpointsIpConfigs },
      name: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcRegionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponseBodyBindVpcs extends $tea.Model {
  regionId?: string;
  regionName?: string;
  vpcId?: string;
  vpcName?: string;
  vpcType?: string;
  vpcUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRuleResponseBodyForwardIps extends $tea.Model {
  ip?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesBindVpcs extends $tea.Model {
  regionId?: string;
  regionName?: string;
  vpcId?: string;
  vpcName?: string;
  vpcType?: string;
  vpcUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRulesForwardIps extends $tea.Model {
  ip?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverRulesResponseBodyRules extends $tea.Model {
  bindVpcs?: DescribeResolverRulesResponseBodyRulesBindVpcs[];
  createTime?: string;
  createTimestamp?: number;
  endpointId?: string;
  endpointName?: string;
  forwardIps?: DescribeResolverRulesResponseBodyRulesForwardIps[];
  id?: string;
  name?: string;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      forwardIps: 'ForwardIps',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesBindVpcs },
      createTime: 'string',
      createTimestamp: 'number',
      endpointId: 'string',
      endpointName: 'string',
      forwardIps: { 'type': 'array', 'itemType': DescribeResolverRulesResponseBodyRulesForwardIps },
      id: 'string',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop extends $tea.Model {
  regionId?: string;
  regionName?: string;
  requestCount?: number;
  tunnelId?: string;
  vpcId?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      requestCount: 'RequestCount',
      tunnelId: 'TunnelId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      requestCount: 'number',
      tunnelId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyVpcRequestTops extends $tea.Model {
  vpcRequestTop?: DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop[];
  static names(): { [key: string]: string } {
    return {
      vpcRequestTop: 'VpcRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyVpcRequestTopsVpcRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop extends $tea.Model {
  bizType?: string;
  requestCount?: number;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      requestCount: 'RequestCount',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      requestCount: 'number',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticSummaryResponseBodyZoneRequestTops extends $tea.Model {
  zoneRequestTop?: DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds extends $tea.Model {
  regionId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion extends $tea.Model {
  regionIds?: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionIds: 'RegionIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIds: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds,
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyEcsRegions extends $tea.Model {
  ecsRegion?: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion[];
  static names(): { [key: string]: string } {
    return {
      ecsRegion: 'EcsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsRegion: { 'type': 'array', 'itemType': DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncEcsHostTaskResponseBodyRegions extends $tea.Model {
  regionId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserVpcAuthorizationsResponseBodyUsers extends $tea.Model {
  authType?: string;
  authorizedAliyunId?: string;
  authorizedUserId?: number;
  createTime?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      authorizedAliyunId: 'AuthorizedAliyunId',
      authorizedUserId: 'AuthorizedUserId',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      authorizedAliyunId: 'string',
      authorizedUserId: 'number',
      createTime: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcsVpc extends $tea.Model {
  regionId?: string;
  regionName?: string;
  vpcId?: string;
  vpcName?: string;
  vpcType?: string;
  vpcUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneInfoResponseBodyBindVpcs extends $tea.Model {
  vpc?: DescribeZoneInfoResponseBodyBindVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBodyRecordsRecord extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  line?: string;
  priority?: number;
  recordId?: number;
  remark?: string;
  rr?: string;
  status?: string;
  ttl?: number;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  value?: string;
  weight?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      line: 'Line',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      rr: 'Rr',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      line: 'string',
      priority: 'number',
      recordId: 'number',
      remark: 'string',
      rr: 'string',
      status: 'string',
      ttl: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneRecordsResponseBodyRecords extends $tea.Model {
  record?: DescribeZoneRecordsResponseBodyRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeZoneRecordsResponseBodyRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc extends $tea.Model {
  regionId?: string;
  regionName?: string;
  vpcId?: string;
  vpcName?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcs extends $tea.Model {
  vpc?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZonesZone extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  creator?: string;
  creatorType?: string;
  dnsGroup?: string;
  dnsGroupChanging?: boolean;
  isPtr?: boolean;
  recordCount?: number;
  remark?: string;
  updateTime?: string;
  updateTimestamp?: number;
  vpcs?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs;
  zoneId?: string;
  zoneName?: string;
  zoneTag?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorType: 'CreatorType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      recordCount: 'RecordCount',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcs: 'Vpcs',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      recordCount: 'number',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcs: DescribeZoneVpcTreeResponseBodyZonesZoneVpcs,
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZoneVpcTreeResponseBodyZones extends $tea.Model {
  zone?: DescribeZoneVpcTreeResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequestResourceTag extends $tea.Model {
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

export class DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag extends $tea.Model {
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

export class DescribeZonesResponseBodyZonesZoneResourceTags extends $tea.Model {
  resourceTag?: DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag[];
  static names(): { [key: string]: string } {
    return {
      resourceTag: 'ResourceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTag: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneResourceTagsResourceTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  creator?: string;
  creatorSubType?: string;
  dnsGroup?: string;
  dnsGroupChanging?: boolean;
  isPtr?: boolean;
  proxyPattern?: string;
  recordCount?: number;
  remark?: string;
  resourceGroupId?: string;
  resourceTags?: DescribeZonesResponseBodyZonesZoneResourceTags;
  updateTime?: string;
  updateTimestamp?: number;
  zoneId?: string;
  zoneName?: string;
  zoneTag?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      dnsGroup: 'DnsGroup',
      dnsGroupChanging: 'DnsGroupChanging',
      isPtr: 'IsPtr',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      resourceTags: 'ResourceTags',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      dnsGroup: 'string',
      dnsGroupChanging: 'boolean',
      isPtr: 'boolean',
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      resourceTags: DescribeZonesResponseBodyZonesZoneResourceTags,
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
      zoneTag: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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

export class TagResourcesRequestTag extends $tea.Model {
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

export class UpdateResolverEndpointRequestIpConfig extends $tea.Model {
  azId?: string;
  cidrBlock?: string;
  ip?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleRequestForwardIp extends $tea.Model {
  ip?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncEcsHostTaskRequestRegion extends $tea.Model {
  regionId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pvtz", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addResolverEndpointWithOptions(request: AddResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<AddResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipConfig)) {
      query["IpConfig"] = request.ipConfig;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddResolverEndpointResponse>(await this.callApi(params, req, runtime), new AddResolverEndpointResponse({}));
  }

  async addResolverEndpoint(request: AddResolverEndpointRequest): Promise<AddResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addResolverEndpointWithOptions(request, runtime);
  }

  async addResolverRuleWithOptions(request: AddResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.forwardIp)) {
      query["ForwardIp"] = request.forwardIp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddResolverRuleResponse>(await this.callApi(params, req, runtime), new AddResolverRuleResponse({}));
  }

  async addResolverRule(request: AddResolverRuleRequest): Promise<AddResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addResolverRuleWithOptions(request, runtime);
  }

  async addUserVpcAuthorizationWithOptions(request: AddUserVpcAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<AddUserVpcAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authChannel)) {
      query["AuthChannel"] = request.authChannel;
    }

    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserVpcAuthorization",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserVpcAuthorizationResponse>(await this.callApi(params, req, runtime), new AddUserVpcAuthorizationResponse({}));
  }

  async addUserVpcAuthorization(request: AddUserVpcAuthorizationRequest): Promise<AddUserVpcAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserVpcAuthorizationWithOptions(request, runtime);
  }

  async addZoneWithOptions(request: AddZoneRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    if (!Util.isUnset(request.zoneTag)) {
      query["ZoneTag"] = request.zoneTag;
    }

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddZone",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddZoneResponse>(await this.callApi(params, req, runtime), new AddZoneResponse({}));
  }

  async addZone(request: AddZoneRequest): Promise<AddZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneWithOptions(request, runtime);
  }

  async addZoneRecordWithOptions(request: AddZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<AddZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddZoneRecordResponse>(await this.callApi(params, req, runtime), new AddZoneRecordResponse({}));
  }

  async addZoneRecord(request: AddZoneRecordRequest): Promise<AddZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addZoneRecordWithOptions(request, runtime);
  }

  async bindResolverRuleVpcWithOptions(request: BindResolverRuleVpcRequest, runtime: $Util.RuntimeOptions): Promise<BindResolverRuleVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.vpc)) {
      query["Vpc"] = request.vpc;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindResolverRuleVpc",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindResolverRuleVpcResponse>(await this.callApi(params, req, runtime), new BindResolverRuleVpcResponse({}));
  }

  async bindResolverRuleVpc(request: BindResolverRuleVpcRequest): Promise<BindResolverRuleVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindResolverRuleVpcWithOptions(request, runtime);
  }

  async bindZoneVpcWithOptions(request: BindZoneVpcRequest, runtime: $Util.RuntimeOptions): Promise<BindZoneVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.vpcs)) {
      query["Vpcs"] = request.vpcs;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindZoneVpc",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindZoneVpcResponse>(await this.callApi(params, req, runtime), new BindZoneVpcResponse({}));
  }

  async bindZoneVpc(request: BindZoneVpcRequest): Promise<BindZoneVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindZoneVpcWithOptions(request, runtime);
  }

  async checkZoneNameWithOptions(request: CheckZoneNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckZoneNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneName)) {
      query["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckZoneName",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckZoneNameResponse>(await this.callApi(params, req, runtime), new CheckZoneNameResponse({}));
  }

  async checkZoneName(request: CheckZoneNameRequest): Promise<CheckZoneNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkZoneNameWithOptions(request, runtime);
  }

  async deleteResolverEndpointWithOptions(request: DeleteResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResolverEndpointResponse>(await this.callApi(params, req, runtime), new DeleteResolverEndpointResponse({}));
  }

  async deleteResolverEndpoint(request: DeleteResolverEndpointRequest): Promise<DeleteResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResolverEndpointWithOptions(request, runtime);
  }

  async deleteResolverRuleWithOptions(request: DeleteResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResolverRuleResponse>(await this.callApi(params, req, runtime), new DeleteResolverRuleResponse({}));
  }

  async deleteResolverRule(request: DeleteResolverRuleRequest): Promise<DeleteResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResolverRuleWithOptions(request, runtime);
  }

  async deleteUserVpcAuthorizationWithOptions(request: DeleteUserVpcAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserVpcAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserVpcAuthorization",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserVpcAuthorizationResponse>(await this.callApi(params, req, runtime), new DeleteUserVpcAuthorizationResponse({}));
  }

  async deleteUserVpcAuthorization(request: DeleteUserVpcAuthorizationRequest): Promise<DeleteUserVpcAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserVpcAuthorizationWithOptions(request, runtime);
  }

  async deleteZoneWithOptions(request: DeleteZoneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteZone",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteZoneResponse>(await this.callApi(params, req, runtime), new DeleteZoneResponse({}));
  }

  async deleteZone(request: DeleteZoneRequest): Promise<DeleteZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZoneWithOptions(request, runtime);
  }

  async deleteZoneRecordWithOptions(request: DeleteZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteZoneRecordResponse>(await this.callApi(params, req, runtime), new DeleteZoneRecordResponse({}));
  }

  async deleteZoneRecord(request: DeleteZoneRecordRequest): Promise<DeleteZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZoneRecordWithOptions(request, runtime);
  }

  async describeChangeLogsWithOptions(request: DescribeChangeLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeChangeLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeChangeLogs",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeChangeLogsResponse>(await this.callApi(params, req, runtime), new DescribeChangeLogsResponse({}));
  }

  async describeChangeLogs(request: DescribeChangeLogsRequest): Promise<DescribeChangeLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeChangeLogsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.vpcType)) {
      query["VpcType"] = request.vpcType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-01-01",
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

  async describeRequestGraphWithOptions(request: DescribeRequestGraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRequestGraphResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRequestGraph",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRequestGraphResponse>(await this.callApi(params, req, runtime), new DescribeRequestGraphResponse({}));
  }

  async describeRequestGraph(request: DescribeRequestGraphRequest): Promise<DescribeRequestGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRequestGraphWithOptions(request, runtime);
  }

  async describeResolverAvailableZonesWithOptions(request: DescribeResolverAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverAvailableZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.azId)) {
      query["AzId"] = request.azId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resolverRegionId)) {
      query["ResolverRegionId"] = request.resolverRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverAvailableZones",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverAvailableZonesResponse>(await this.callApi(params, req, runtime), new DescribeResolverAvailableZonesResponse({}));
  }

  async describeResolverAvailableZones(request: DescribeResolverAvailableZonesRequest): Promise<DescribeResolverAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverAvailableZonesWithOptions(request, runtime);
  }

  async describeResolverEndpointWithOptions(request: DescribeResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverEndpointResponse>(await this.callApi(params, req, runtime), new DescribeResolverEndpointResponse({}));
  }

  async describeResolverEndpoint(request: DescribeResolverEndpointRequest): Promise<DescribeResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverEndpointWithOptions(request, runtime);
  }

  async describeResolverEndpointsWithOptions(request: DescribeResolverEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverEndpoints",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeResolverEndpointsResponse({}));
  }

  async describeResolverEndpoints(request: DescribeResolverEndpointsRequest): Promise<DescribeResolverEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverEndpointsWithOptions(request, runtime);
  }

  async describeResolverRuleWithOptions(request: DescribeResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverRuleResponse>(await this.callApi(params, req, runtime), new DescribeResolverRuleResponse({}));
  }

  async describeResolverRule(request: DescribeResolverRuleRequest): Promise<DescribeResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverRuleWithOptions(request, runtime);
  }

  async describeResolverRulesWithOptions(request: DescribeResolverRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResolverRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResolverRules",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResolverRulesResponse>(await this.callApi(params, req, runtime), new DescribeResolverRulesResponse({}));
  }

  async describeResolverRules(request: DescribeResolverRulesRequest): Promise<DescribeResolverRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResolverRulesWithOptions(request, runtime);
  }

  async describeStatisticSummaryWithOptions(request: DescribeStatisticSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStatisticSummary",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStatisticSummaryResponse>(await this.callApi(params, req, runtime), new DescribeStatisticSummaryResponse({}));
  }

  async describeStatisticSummary(request: DescribeStatisticSummaryRequest): Promise<DescribeStatisticSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticSummaryWithOptions(request, runtime);
  }

  async describeSyncEcsHostTaskWithOptions(request: DescribeSyncEcsHostTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSyncEcsHostTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSyncEcsHostTask",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSyncEcsHostTaskResponse>(await this.callApi(params, req, runtime), new DescribeSyncEcsHostTaskResponse({}));
  }

  async describeSyncEcsHostTask(request: DescribeSyncEcsHostTaskRequest): Promise<DescribeSyncEcsHostTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSyncEcsHostTaskWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeUserVpcAuthorizationsWithOptions(request: DescribeUserVpcAuthorizationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserVpcAuthorizationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.authorizedUserId)) {
      query["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserVpcAuthorizations",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserVpcAuthorizationsResponse>(await this.callApi(params, req, runtime), new DescribeUserVpcAuthorizationsResponse({}));
  }

  async describeUserVpcAuthorizations(request: DescribeUserVpcAuthorizationsRequest): Promise<DescribeUserVpcAuthorizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserVpcAuthorizationsWithOptions(request, runtime);
  }

  async describeZoneInfoWithOptions(request: DescribeZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneInfo",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneInfoResponse>(await this.callApi(params, req, runtime), new DescribeZoneInfoResponse({}));
  }

  async describeZoneInfo(request: DescribeZoneInfoRequest): Promise<DescribeZoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneInfoWithOptions(request, runtime);
  }

  async describeZoneRecordsWithOptions(request: DescribeZoneRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneRecords",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneRecordsResponse>(await this.callApi(params, req, runtime), new DescribeZoneRecordsResponse({}));
  }

  async describeZoneRecords(request: DescribeZoneRecordsRequest): Promise<DescribeZoneRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneRecordsWithOptions(request, runtime);
  }

  async describeZoneVpcTreeWithOptions(request: DescribeZoneVpcTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZoneVpcTreeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZoneVpcTree",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZoneVpcTreeResponse>(await this.callApi(params, req, runtime), new DescribeZoneVpcTreeResponse({}));
  }

  async describeZoneVpcTree(request: DescribeZoneVpcTreeRequest): Promise<DescribeZoneVpcTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZoneVpcTreeWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryRegionId)) {
      query["QueryRegionId"] = request.queryRegionId;
    }

    if (!Util.isUnset(request.queryVpcId)) {
      query["QueryVpcId"] = request.queryVpcId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceTag)) {
      query["ResourceTag"] = request.resourceTag;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.zoneTag)) {
      query["ZoneTag"] = request.zoneTag;
    }

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2018-01-01",
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

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async setProxyPatternWithOptions(request: SetProxyPatternRequest, runtime: $Util.RuntimeOptions): Promise<SetProxyPatternResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.proxyPattern)) {
      query["ProxyPattern"] = request.proxyPattern;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetProxyPattern",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetProxyPatternResponse>(await this.callApi(params, req, runtime), new SetProxyPatternResponse({}));
  }

  async setProxyPattern(request: SetProxyPatternRequest): Promise<SetProxyPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setProxyPatternWithOptions(request, runtime);
  }

  async setZoneRecordStatusWithOptions(request: SetZoneRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetZoneRecordStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetZoneRecordStatus",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetZoneRecordStatusResponse>(await this.callApi(params, req, runtime), new SetZoneRecordStatusResponse({}));
  }

  async setZoneRecordStatus(request: SetZoneRecordStatusRequest): Promise<SetZoneRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setZoneRecordStatusWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.overWrite)) {
      query["OverWrite"] = request.overWrite;
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
      version: "2018-01-01",
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

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
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
      version: "2018-01-01",
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

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateRecordRemarkWithOptions(request: UpdateRecordRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecordRemark",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordRemarkResponse>(await this.callApi(params, req, runtime), new UpdateRecordRemarkResponse({}));
  }

  async updateRecordRemark(request: UpdateRecordRemarkRequest): Promise<UpdateRecordRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordRemarkWithOptions(request, runtime);
  }

  async updateResolverEndpointWithOptions(request: UpdateResolverEndpointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResolverEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.ipConfig)) {
      query["IpConfig"] = request.ipConfig;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResolverEndpoint",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResolverEndpointResponse>(await this.callApi(params, req, runtime), new UpdateResolverEndpointResponse({}));
  }

  async updateResolverEndpoint(request: UpdateResolverEndpointRequest): Promise<UpdateResolverEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResolverEndpointWithOptions(request, runtime);
  }

  async updateResolverRuleWithOptions(request: UpdateResolverRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResolverRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forwardIp)) {
      query["ForwardIp"] = request.forwardIp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResolverRule",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResolverRuleResponse>(await this.callApi(params, req, runtime), new UpdateResolverRuleResponse({}));
  }

  async updateResolverRule(request: UpdateResolverRuleRequest): Promise<UpdateResolverRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResolverRuleWithOptions(request, runtime);
  }

  async updateSyncEcsHostTaskWithOptions(request: UpdateSyncEcsHostTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSyncEcsHostTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSyncEcsHostTask",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSyncEcsHostTaskResponse>(await this.callApi(params, req, runtime), new UpdateSyncEcsHostTaskResponse({}));
  }

  async updateSyncEcsHostTask(request: UpdateSyncEcsHostTaskRequest): Promise<UpdateSyncEcsHostTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSyncEcsHostTaskWithOptions(request, runtime);
  }

  async updateZoneRecordWithOptions(request: UpdateZoneRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZoneRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateZoneRecord",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateZoneRecordResponse>(await this.callApi(params, req, runtime), new UpdateZoneRecordResponse({}));
  }

  async updateZoneRecord(request: UpdateZoneRecordRequest): Promise<UpdateZoneRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZoneRecordWithOptions(request, runtime);
  }

  async updateZoneRemarkWithOptions(request: UpdateZoneRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZoneRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateZoneRemark",
      version: "2018-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateZoneRemarkResponse>(await this.callApi(params, req, runtime), new UpdateZoneRemarkResponse({}));
  }

  async updateZoneRemark(request: UpdateZoneRemarkRequest): Promise<UpdateZoneRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZoneRemarkWithOptions(request, runtime);
  }

}
