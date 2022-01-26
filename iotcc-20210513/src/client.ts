// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCidrToConnectionPoolRequest extends $tea.Model {
  cidrs?: string[];
  clientToken?: string;
  connectionPoolId?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      clientToken: 'ClientToken',
      connectionPoolId: 'ConnectionPoolId',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      connectionPoolId: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCidrToConnectionPoolResponseBody extends $tea.Model {
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

export class AddCidrToConnectionPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCidrToConnectionPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCidrToConnectionPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIoTCloudConnectorToGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  ioTCloudConnectorId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      ioTCloudConnectorId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIoTCloudConnectorToGroupResponseBody extends $tea.Model {
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

export class AddIoTCloudConnectorToGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddIoTCloudConnectorToGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddIoTCloudConnectorToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateIpWithConnectionPoolRequest extends $tea.Model {
  clientToken?: string;
  connectionPoolId?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  ips?: string[];
  ipsFilePath?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionPoolId: 'ConnectionPoolId',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ips: 'Ips',
      ipsFilePath: 'IpsFilePath',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionPoolId: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      ipsFilePath: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateIpWithConnectionPoolResponseBody extends $tea.Model {
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

export class AssociateIpWithConnectionPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateIpWithConnectionPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateIpWithConnectionPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVSwitchWithIoTCloudConnectorRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  vSwitchList?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      vSwitchList: 'VSwitchList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      vSwitchList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVSwitchWithIoTCloudConnectorResponseBody extends $tea.Model {
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

export class AssociateVSwitchWithIoTCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateVSwitchWithIoTCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateVSwitchWithIoTCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleDescription?: string;
  authorizationRuleName?: string;
  clientToken?: string;
  destination?: string;
  destinationType?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  policy?: string;
  regionId?: string;
  sourceCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationRuleDescription: 'AuthorizationRuleDescription',
      authorizationRuleName: 'AuthorizationRuleName',
      clientToken: 'ClientToken',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      policy: 'Policy',
      regionId: 'RegionId',
      sourceCidrs: 'SourceCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleDescription: 'string',
      authorizationRuleName: 'string',
      clientToken: 'string',
      destination: 'string',
      destinationType: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      policy: 'string',
      regionId: 'string',
      sourceCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRuleResponseBody extends $tea.Model {
  authorizationRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionPoolRequest extends $tea.Model {
  cidrs?: string[];
  clientToken?: string;
  connectionPoolDescription?: string;
  connectionPoolName?: string;
  count?: number;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      clientToken: 'ClientToken',
      connectionPoolDescription: 'ConnectionPoolDescription',
      connectionPoolName: 'ConnectionPoolName',
      count: 'Count',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      connectionPoolDescription: 'string',
      connectionPoolName: 'string',
      count: 'number',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionPoolResponseBody extends $tea.Model {
  connectionPoolId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolId: 'ConnectionPoolId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConnectionPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConnectionPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleDescription?: string;
  authorizationRuleName?: string;
  clientToken?: string;
  destination?: string;
  destinationType?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  policy?: string;
  regionId?: string;
  sourceCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationRuleDescription: 'AuthorizationRuleDescription',
      authorizationRuleName: 'AuthorizationRuleName',
      clientToken: 'ClientToken',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      policy: 'Policy',
      regionId: 'RegionId',
      sourceCidrs: 'SourceCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleDescription: 'string',
      authorizationRuleName: 'string',
      clientToken: 'string',
      destination: 'string',
      destinationType: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      policy: 'string',
      regionId: 'string',
      sourceCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupAuthorizationRuleResponseBody extends $tea.Model {
  authorizationRuleId?: string;
  ioTCloudConnectorGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      ioTCloudConnectorGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorRequest extends $tea.Model {
  APN?: string;
  clientToken?: string;
  dryRun?: boolean;
  ISP?: string;
  ioTCloudConnectorDescription?: string;
  ioTCloudConnectorName?: string;
  regionId?: string;
  resourceUid?: number;
  wildcardDomainEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ISP: 'ISP',
      ioTCloudConnectorDescription: 'IoTCloudConnectorDescription',
      ioTCloudConnectorName: 'IoTCloudConnectorName',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      wildcardDomainEnabled: 'WildcardDomainEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ISP: 'string',
      ioTCloudConnectorDescription: 'string',
      ioTCloudConnectorName: 'string',
      regionId: 'string',
      resourceUid: 'number',
      wildcardDomainEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorResponseBody extends $tea.Model {
  ioTCloudConnectorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIoTCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIoTCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorGroupRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorGroupResponseBody extends $tea.Model {
  ioTCloudConnectorGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIoTCloudConnectorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIoTCloudConnectorGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIoTCloudConnectorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  serviceDescription?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      serviceDescription: 'ServiceDescription',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      serviceDescription: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceEntryRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  serviceEntryDescription?: string;
  serviceEntryName?: string;
  serviceId?: string;
  target?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      serviceEntryDescription: 'ServiceEntryDescription',
      serviceEntryName: 'ServiceEntryName',
      serviceId: 'ServiceId',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      serviceEntryDescription: 'string',
      serviceEntryName: 'string',
      serviceId: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceEntryResponseBody extends $tea.Model {
  requestId?: string;
  serviceEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceEntryId: 'ServiceEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationRuleResponseBody extends $tea.Model {
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

export class DeleteAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionPoolRequest extends $tea.Model {
  clientToken?: string;
  connectionPoolId?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionPoolId: 'ConnectionPoolId',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionPoolId: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionPoolResponseBody extends $tea.Model {
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

export class DeleteConnectionPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConnectionPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConnectionPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupAuthorizationRuleRequest extends $tea.Model {
  authorizationRuleId?: string;
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupAuthorizationRuleResponseBody extends $tea.Model {
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

export class DeleteGroupAuthorizationRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupAuthorizationRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupAuthorizationRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIoTCloudConnectorRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIoTCloudConnectorResponseBody extends $tea.Model {
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

export class DeleteIoTCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIoTCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIoTCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIoTCloudConnectorGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIoTCloudConnectorGroupResponseBody extends $tea.Model {
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

export class DeleteIoTCloudConnectorGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIoTCloudConnectorGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIoTCloudConnectorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
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

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceEntryRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  serviceEntryId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      serviceEntryId: 'ServiceEntryId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      serviceEntryId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceEntryResponseBody extends $tea.Model {
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

export class DeleteServiceEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIoTCloudConnectorAccessLogRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIoTCloudConnectorAccessLogResponseBody extends $tea.Model {
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

export class DisableIoTCloudConnectorAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableIoTCloudConnectorAccessLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableIoTCloudConnectorAccessLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateIpFromConnectionPoolRequest extends $tea.Model {
  clientToken?: string;
  connectionPoolId?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  ips?: string[];
  ipsFilePath?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionPoolId: 'ConnectionPoolId',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ips: 'Ips',
      ipsFilePath: 'IpsFilePath',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionPoolId: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      ipsFilePath: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateIpFromConnectionPoolResponseBody extends $tea.Model {
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

export class DissociateIpFromConnectionPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateIpFromConnectionPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateIpFromConnectionPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateVSwitchFromIoTCloudConnectorRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateVSwitchFromIoTCloudConnectorResponseBody extends $tea.Model {
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

export class DissociateVSwitchFromIoTCloudConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateVSwitchFromIoTCloudConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateVSwitchFromIoTCloudConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIoTCloudConnectorAccessLogRequest extends $tea.Model {
  accessLogSlsLogStore?: string;
  accessLogSlsProject?: string;
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogSlsLogStore: 'AccessLogSlsLogStore',
      accessLogSlsProject: 'AccessLogSlsProject',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogSlsLogStore: 'string',
      accessLogSlsProject: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIoTCloudConnectorAccessLogResponseBody extends $tea.Model {
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

export class EnableIoTCloudConnectorAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableIoTCloudConnectorAccessLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableIoTCloudConnectorAccessLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionPoolIpOperationResultRequest extends $tea.Model {
  connectionPoolId?: string;
  ioTCloudConnectorId?: string;
  queryRequestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolId: 'ConnectionPoolId',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      queryRequestId: 'QueryRequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolId: 'string',
      ioTCloudConnectorId: 'string',
      queryRequestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionPoolIpOperationResultResponseBody extends $tea.Model {
  requestId?: string;
  resultFilePaths?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultFilePaths: 'ResultFilePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultFilePaths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionPoolIpOperationResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConnectionPoolIpOperationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConnectionPoolIpOperationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardRequest extends $tea.Model {
  diagnoseTaskId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseTaskId: 'DiagnoseTaskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseTaskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponseBody extends $tea.Model {
  beginTime?: number;
  cardIp?: string;
  destination?: string;
  diagnoseItem?: GetDiagnoseResultForSingleCardResponseBodyDiagnoseItem[];
  endTime?: number;
  errorResult?: GetDiagnoseResultForSingleCardResponseBodyErrorResult[];
  iccid?: string;
  ioTCloudConnectorId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      cardIp: 'CardIp',
      destination: 'Destination',
      diagnoseItem: 'DiagnoseItem',
      endTime: 'EndTime',
      errorResult: 'ErrorResult',
      iccid: 'Iccid',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      cardIp: 'string',
      destination: 'string',
      diagnoseItem: { 'type': 'array', 'itemType': GetDiagnoseResultForSingleCardResponseBodyDiagnoseItem },
      endTime: 'number',
      errorResult: { 'type': 'array', 'itemType': GetDiagnoseResultForSingleCardResponseBodyErrorResult },
      iccid: 'string',
      ioTCloudConnectorId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDiagnoseResultForSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDiagnoseResultForSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIoTCloudConnectorAccessLogRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIoTCloudConnectorAccessLogResponseBody extends $tea.Model {
  accessLogSlsLogStore?: string;
  accessLogSlsProject?: string;
  accessLogStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogSlsLogStore: 'AccessLogSlsLogStore',
      accessLogSlsProject: 'AccessLogSlsProject',
      accessLogStatus: 'AccessLogStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogSlsLogStore: 'string',
      accessLogSlsProject: 'string',
      accessLogStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIoTCloudConnectorAccessLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIoTCloudConnectorAccessLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIoTCloudConnectorAccessLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsInfoAndOssPathRequest extends $tea.Model {
  clientToken?: string;
  connectionPoolId?: string;
  dryRun?: boolean;
  fileName?: string;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionPoolId: 'ConnectionPoolId',
      dryRun: 'DryRun',
      fileName: 'FileName',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionPoolId: 'string',
      dryRun: 'boolean',
      fileName: 'string',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsInfoAndOssPathResponseBody extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  ossPath?: string;
  requestId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      ossPath: 'OssPath',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      ossPath: 'string',
      requestId: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsInfoAndOssPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStsInfoAndOssPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStsInfoAndOssPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantVirtualBorderRouterRequest extends $tea.Model {
  regionId?: string;
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantVirtualBorderRouterResponseBody extends $tea.Model {
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

export class GrantVirtualBorderRouterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantVirtualBorderRouterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantVirtualBorderRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPNsRequest extends $tea.Model {
  APN?: string;
  ISP?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      ISP: 'ISP',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      ISP: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPNsResponseBody extends $tea.Model {
  APNs?: ListAPNsResponseBodyAPNs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      APNs: 'APNs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APNs: { 'type': 'array', 'itemType': ListAPNsResponseBodyAPNs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPNsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAPNsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAPNsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesRequest extends $tea.Model {
  authorizationRuleIds?: string[];
  authorizationRuleName?: string[];
  authorizationRuleStatus?: string[];
  destination?: string[];
  destinationType?: string[];
  ioTCloudConnectorId?: string;
  maxResults?: number;
  nextToken?: string;
  policy?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleIds: 'AuthorizationRuleIds',
      authorizationRuleName: 'AuthorizationRuleName',
      authorizationRuleStatus: 'AuthorizationRuleStatus',
      destination: 'Destination',
      destinationType: 'DestinationType',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policy: 'Policy',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      authorizationRuleName: { 'type': 'array', 'itemType': 'string' },
      authorizationRuleStatus: { 'type': 'array', 'itemType': 'string' },
      destination: { 'type': 'array', 'itemType': 'string' },
      destinationType: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policy: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesResponseBody extends $tea.Model {
  authorizationRules?: ListAuthorizationRulesResponseBodyAuthorizationRules[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationRules: 'AuthorizationRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRules: { 'type': 'array', 'itemType': ListAuthorizationRulesResponseBodyAuthorizationRules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAuthorizationRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAuthorizationRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolAllIpsRequest extends $tea.Model {
  connectionPoolId?: string;
  ioTCloudConnectorId?: string;
  ip?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolId: 'ConnectionPoolId',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ip: 'Ip',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolId: 'string',
      ioTCloudConnectorId: 'string',
      ip: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolAllIpsResponseBody extends $tea.Model {
  connectionPoolIps?: ListConnectionPoolAllIpsResponseBodyConnectionPoolIps[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalIpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      connectionPoolIps: 'ConnectionPoolIps',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalIpsCount: 'TotalIpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolIps: { 'type': 'array', 'itemType': ListConnectionPoolAllIpsResponseBodyConnectionPoolIps },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalIpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolAllIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectionPoolAllIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectionPoolAllIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolIpsRequest extends $tea.Model {
  connectionPoolId?: string;
  ioTCloudConnectorId?: string;
  ip?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolId: 'ConnectionPoolId',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ip: 'Ip',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolId: 'string',
      ioTCloudConnectorId: 'string',
      ip: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolIpsResponseBody extends $tea.Model {
  connectionPoolIps?: ListConnectionPoolIpsResponseBodyConnectionPoolIps[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      connectionPoolIps: 'ConnectionPoolIps',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolIps: { 'type': 'array', 'itemType': ListConnectionPoolIpsResponseBodyConnectionPoolIps },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectionPoolIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectionPoolIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolsRequest extends $tea.Model {
  connectionPoolIds?: string[];
  connectionPoolName?: string[];
  connectionPoolStatus?: string[];
  ioTCloudConnectorId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolIds: 'ConnectionPoolIds',
      connectionPoolName: 'ConnectionPoolName',
      connectionPoolStatus: 'ConnectionPoolStatus',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolIds: { 'type': 'array', 'itemType': 'string' },
      connectionPoolName: { 'type': 'array', 'itemType': 'string' },
      connectionPoolStatus: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolsResponseBody extends $tea.Model {
  connectionPools?: ListConnectionPoolsResponseBodyConnectionPools[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      connectionPools: 'ConnectionPools',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPools: { 'type': 'array', 'itemType': ListConnectionPoolsResponseBodyConnectionPools },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectionPoolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectionPoolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseInfoForSingleCardRequest extends $tea.Model {
  ioTCloudConnectorId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  source?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      source: 'Source',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      source: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseInfoForSingleCardResponseBody extends $tea.Model {
  diagnoseInfo?: ListDiagnoseInfoForSingleCardResponseBodyDiagnoseInfo[];
  maxResults?: number;
  nextToken?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseInfo: 'DiagnoseInfo',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseInfo: { 'type': 'array', 'itemType': ListDiagnoseInfoForSingleCardResponseBodyDiagnoseInfo },
      maxResults: 'number',
      nextToken: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseInfoForSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDiagnoseInfoForSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDiagnoseInfoForSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAuthorizationRulesRequest extends $tea.Model {
  authorizationRuleIds?: string[];
  authorizationRuleName?: string[];
  authorizationRuleStatus?: string[];
  destination?: string[];
  destinationType?: string[];
  ioTCloudConnectorGroupId?: string;
  maxResults?: number;
  nextToken?: string;
  policy?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleIds: 'AuthorizationRuleIds',
      authorizationRuleName: 'AuthorizationRuleName',
      authorizationRuleStatus: 'AuthorizationRuleStatus',
      destination: 'Destination',
      destinationType: 'DestinationType',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policy: 'Policy',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleIds: { 'type': 'array', 'itemType': 'string' },
      authorizationRuleName: { 'type': 'array', 'itemType': 'string' },
      authorizationRuleStatus: { 'type': 'array', 'itemType': 'string' },
      destination: { 'type': 'array', 'itemType': 'string' },
      destinationType: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policy: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAuthorizationRulesResponseBody extends $tea.Model {
  groupAuthorizationRules?: ListGroupAuthorizationRulesResponseBodyGroupAuthorizationRules[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupAuthorizationRules: 'GroupAuthorizationRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupAuthorizationRules: { 'type': 'array', 'itemType': ListGroupAuthorizationRulesResponseBodyGroupAuthorizationRules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAuthorizationRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupAuthorizationRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupAuthorizationRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorAvailableZonesRequest extends $tea.Model {
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorAvailableZonesResponseBody extends $tea.Model {
  availableZoneList?: string[];
  ioTCloudConnectorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneList: 'AvailableZoneList',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneList: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorAvailableZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIoTCloudConnectorAvailableZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIoTCloudConnectorAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorGroupsRequest extends $tea.Model {
  ioTCloudConnectorGroupIds?: string[];
  ioTCloudConnectorGroupName?: string[];
  ioTCloudConnectorGroupStatus?: string[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorGroupIds: 'IoTCloudConnectorGroupIds',
      ioTCloudConnectorGroupName: 'IoTCloudConnectorGroupName',
      ioTCloudConnectorGroupStatus: 'IoTCloudConnectorGroupStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorGroupIds: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorGroupName: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorGroupStatus: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorGroupsResponseBody extends $tea.Model {
  ioTCloudConnectorGroups?: ListIoTCloudConnectorGroupsResponseBodyIoTCloudConnectorGroups[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorGroups: 'IoTCloudConnectorGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorGroups: { 'type': 'array', 'itemType': ListIoTCloudConnectorGroupsResponseBodyIoTCloudConnectorGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIoTCloudConnectorGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIoTCloudConnectorGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorsRequest extends $tea.Model {
  APN?: string[];
  ISP?: string[];
  ioTCloudConnectorGroupId?: string;
  ioTCloudConnectorIds?: string[];
  ioTCloudConnectorName?: string[];
  ioTCloudConnectorStatus?: string[];
  isInGroup?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      ISP: 'ISP',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      ioTCloudConnectorIds: 'IoTCloudConnectorIds',
      ioTCloudConnectorName: 'IoTCloudConnectorName',
      ioTCloudConnectorStatus: 'IoTCloudConnectorStatus',
      isInGroup: 'IsInGroup',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: { 'type': 'array', 'itemType': 'string' },
      ISP: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorGroupId: 'string',
      ioTCloudConnectorIds: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorName: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorStatus: { 'type': 'array', 'itemType': 'string' },
      isInGroup: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorsResponseBody extends $tea.Model {
  ioTCloudConnectors?: ListIoTCloudConnectorsResponseBodyIoTCloudConnectors[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectors: 'IoTCloudConnectors',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectors: { 'type': 'array', 'itemType': ListIoTCloudConnectorsResponseBodyIoTCloudConnectors },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIoTCloudConnectorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIoTCloudConnectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRequest extends $tea.Model {
  ioTCloudConnectorId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceStatuses?: string[];
  serviceIds?: string[];
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceStatuses: 'ResourceStatuses',
      serviceIds: 'ServiceIds',
      serviceNames: 'ServiceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceStatuses: { 'type': 'array', 'itemType': 'string' },
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  services?: ListServiceResponseBodyServices[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServiceResponseBodyServices },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEntriesRequest extends $tea.Model {
  ioTCloudConnectorId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  serviceEntryIds?: string[];
  serviceEntryName?: string[];
  serviceEntryStatus?: string[];
  serviceId?: string;
  target?: string[];
  targetType?: string[];
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceEntryIds: 'ServiceEntryIds',
      serviceEntryName: 'ServiceEntryName',
      serviceEntryStatus: 'ServiceEntryStatus',
      serviceId: 'ServiceId',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceEntryIds: { 'type': 'array', 'itemType': 'string' },
      serviceEntryName: { 'type': 'array', 'itemType': 'string' },
      serviceEntryStatus: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      target: { 'type': 'array', 'itemType': 'string' },
      targetType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEntriesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  serviceEntries?: ListServiceEntriesResponseBodyServiceEntries[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceEntries: 'ServiceEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceEntries: { 'type': 'array', 'itemType': ListServiceEntriesResponseBodyServiceEntries },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenIoTCloudConnectorServiceRequest extends $tea.Model {
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

export class OpenIoTCloudConnectorServiceResponseBody extends $tea.Model {
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

export class OpenIoTCloudConnectorServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenIoTCloudConnectorServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenIoTCloudConnectorServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIoTCloudConnectorFromGroupRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  ioTCloudConnectorId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      ioTCloudConnectorId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIoTCloudConnectorFromGroupResponseBody extends $tea.Model {
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

export class RemoveIoTCloudConnectorFromGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveIoTCloudConnectorFromGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveIoTCloudConnectorFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDiagnoseTaskForSingleCardRequest extends $tea.Model {
  beginTime?: number;
  destination?: string;
  destinationType?: string;
  endTime?: number;
  ioTCloudConnectorId?: string;
  regionId?: string;
  resourceUid?: number;
  source?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      destination: 'Destination',
      destinationType: 'DestinationType',
      endTime: 'EndTime',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      source: 'Source',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      destination: 'string',
      destinationType: 'string',
      endTime: 'number',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      resourceUid: 'number',
      source: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDiagnoseTaskForSingleCardResponseBody extends $tea.Model {
  diagnoseTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseTaskId: 'DiagnoseTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDiagnoseTaskForSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitDiagnoseTaskForSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitDiagnoseTaskForSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationRuleAttributeRequest extends $tea.Model {
  authorizationRuleDescription?: string;
  authorizationRuleId?: string;
  authorizationRuleName?: string;
  clientToken?: string;
  destination?: string;
  destinationType?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  policy?: string;
  regionId?: string;
  sourceCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationRuleDescription: 'AuthorizationRuleDescription',
      authorizationRuleId: 'AuthorizationRuleId',
      authorizationRuleName: 'AuthorizationRuleName',
      clientToken: 'ClientToken',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      policy: 'Policy',
      regionId: 'RegionId',
      sourceCidrs: 'SourceCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleDescription: 'string',
      authorizationRuleId: 'string',
      authorizationRuleName: 'string',
      clientToken: 'string',
      destination: 'string',
      destinationType: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      policy: 'string',
      regionId: 'string',
      sourceCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationRuleAttributeResponseBody extends $tea.Model {
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

export class UpdateAuthorizationRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAuthorizationRuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAuthorizationRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionPoolAttributeRequest extends $tea.Model {
  cidrs?: string[];
  clientToken?: string;
  connectionPoolDescription?: string;
  connectionPoolId?: string;
  connectionPoolName?: string;
  count?: number;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      clientToken: 'ClientToken',
      connectionPoolDescription: 'ConnectionPoolDescription',
      connectionPoolId: 'ConnectionPoolId',
      connectionPoolName: 'ConnectionPoolName',
      count: 'Count',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      connectionPoolDescription: 'string',
      connectionPoolId: 'string',
      connectionPoolName: 'string',
      count: 'number',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionPoolAttributeResponseBody extends $tea.Model {
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

export class UpdateConnectionPoolAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConnectionPoolAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConnectionPoolAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupAuthorizationRuleAttributeRequest extends $tea.Model {
  authorizationRuleDescription?: string;
  authorizationRuleId?: string;
  authorizationRuleName?: string;
  clientToken?: string;
  destination?: string;
  destinationType?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  policy?: string;
  regionId?: string;
  sourceCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationRuleDescription: 'AuthorizationRuleDescription',
      authorizationRuleId: 'AuthorizationRuleId',
      authorizationRuleName: 'AuthorizationRuleName',
      clientToken: 'ClientToken',
      destination: 'Destination',
      destinationType: 'DestinationType',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      policy: 'Policy',
      regionId: 'RegionId',
      sourceCidrs: 'SourceCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleDescription: 'string',
      authorizationRuleId: 'string',
      authorizationRuleName: 'string',
      clientToken: 'string',
      destination: 'string',
      destinationType: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      policy: 'string',
      regionId: 'string',
      sourceCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupAuthorizationRuleAttributeResponseBody extends $tea.Model {
  authorizationRuleId?: string;
  ioTCloudConnectorGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      ioTCloudConnectorGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupAuthorizationRuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGroupAuthorizationRuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGroupAuthorizationRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIoTCloudConnectorAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorDescription?: string;
  ioTCloudConnectorId?: string;
  ioTCloudConnectorName?: string;
  regionId?: string;
  wildcardDomainEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorDescription: 'IoTCloudConnectorDescription',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ioTCloudConnectorName: 'IoTCloudConnectorName',
      regionId: 'RegionId',
      wildcardDomainEnabled: 'WildcardDomainEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorDescription: 'string',
      ioTCloudConnectorId: 'string',
      ioTCloudConnectorName: 'string',
      regionId: 'string',
      wildcardDomainEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIoTCloudConnectorAttributeResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIoTCloudConnectorAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIoTCloudConnectorAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIoTCloudConnectorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIoTCloudConnectorGroupAttributeRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  dryRun?: boolean;
  ioTCloudConnectorGroupId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorGroupId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIoTCloudConnectorGroupAttributeResponseBody extends $tea.Model {
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

export class UpdateIoTCloudConnectorGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIoTCloudConnectorGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIoTCloudConnectorGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  serviceDescription?: string;
  serviceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAttributeResponseBody extends $tea.Model {
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

export class UpdateServiceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServiceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEntryAttributeRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ioTCloudConnectorId?: string;
  regionId?: string;
  serviceEntryDescription?: string;
  serviceEntryId?: string;
  serviceEntryName?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      regionId: 'RegionId',
      serviceEntryDescription: 'ServiceEntryDescription',
      serviceEntryId: 'ServiceEntryId',
      serviceEntryName: 'ServiceEntryName',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ioTCloudConnectorId: 'string',
      regionId: 'string',
      serviceEntryDescription: 'string',
      serviceEntryId: 'string',
      serviceEntryName: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEntryAttributeResponseBody extends $tea.Model {
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

export class UpdateServiceEntryAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateServiceEntryAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceEntryAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponseBodyDiagnoseItem extends $tea.Model {
  part?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      part: 'Part',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      part: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnoseResultForSingleCardResponseBodyErrorResult extends $tea.Model {
  errorDesc?: string;
  errorLevel?: string;
  errorPart?: string;
  errorSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      errorDesc: 'ErrorDesc',
      errorLevel: 'ErrorLevel',
      errorPart: 'ErrorPart',
      errorSuggestion: 'ErrorSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDesc: 'string',
      errorLevel: 'string',
      errorPart: 'string',
      errorSuggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPNsResponseBodyAPNs extends $tea.Model {
  APN?: string;
  description?: string;
  featureList?: string[];
  ISP?: string;
  name?: string;
  zoneList?: string[];
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      description: 'Description',
      featureList: 'FeatureList',
      ISP: 'ISP',
      name: 'Name',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      description: 'string',
      featureList: { 'type': 'array', 'itemType': 'string' },
      ISP: 'string',
      name: 'string',
      zoneList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationRulesResponseBodyAuthorizationRules extends $tea.Model {
  authorizationRuleDescription?: string;
  authorizationRuleId?: string;
  authorizationRuleName?: string;
  authorizationRuleStatus?: string;
  destination?: string;
  destinationType?: string;
  ioTCloudConnectorId?: string;
  policy?: string;
  sourceCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationRuleDescription: 'AuthorizationRuleDescription',
      authorizationRuleId: 'AuthorizationRuleId',
      authorizationRuleName: 'AuthorizationRuleName',
      authorizationRuleStatus: 'AuthorizationRuleStatus',
      destination: 'Destination',
      destinationType: 'DestinationType',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      policy: 'Policy',
      sourceCidrs: 'SourceCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleDescription: 'string',
      authorizationRuleId: 'string',
      authorizationRuleName: 'string',
      authorizationRuleStatus: 'string',
      destination: 'string',
      destinationType: 'string',
      ioTCloudConnectorId: 'string',
      policy: 'string',
      sourceCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolAllIpsResponseBodyConnectionPoolIps extends $tea.Model {
  connectionPoolId?: string;
  ip?: string;
  ipNum?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolId: 'ConnectionPoolId',
      ip: 'Ip',
      ipNum: 'IpNum',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolId: 'string',
      ip: 'string',
      ipNum: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolIpsResponseBodyConnectionPoolIps extends $tea.Model {
  connectionPoolId?: string;
  ip?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPoolId: 'ConnectionPoolId',
      ip: 'Ip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPoolId: 'string',
      ip: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionPoolsResponseBodyConnectionPools extends $tea.Model {
  cidrs?: string[];
  connectionPoolDescription?: string;
  connectionPoolId?: string;
  connectionPoolName?: string;
  connectionPoolStatus?: string;
  operateResultRequestID?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      connectionPoolDescription: 'ConnectionPoolDescription',
      connectionPoolId: 'ConnectionPoolId',
      connectionPoolName: 'ConnectionPoolName',
      connectionPoolStatus: 'ConnectionPoolStatus',
      operateResultRequestID: 'OperateResultRequestID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      connectionPoolDescription: 'string',
      connectionPoolId: 'string',
      connectionPoolName: 'string',
      connectionPoolStatus: 'string',
      operateResultRequestID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseInfoForSingleCardResponseBodyDiagnoseInfo extends $tea.Model {
  beginTime?: number;
  cardIp?: string;
  destination?: string;
  endTime?: number;
  iccid?: string;
  ioTCloudConnectorId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      cardIp: 'CardIp',
      destination: 'Destination',
      endTime: 'EndTime',
      iccid: 'Iccid',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      cardIp: 'string',
      destination: 'string',
      endTime: 'number',
      iccid: 'string',
      ioTCloudConnectorId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupAuthorizationRulesResponseBodyGroupAuthorizationRules extends $tea.Model {
  authorizationRuleDescription?: string;
  authorizationRuleId?: string;
  authorizationRuleName?: string;
  authorizationRuleStatus?: string;
  destination?: string;
  destinationType?: string;
  ioTCloudConnectorGroupId?: string;
  policy?: string;
  sourceCidrs?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationRuleDescription: 'AuthorizationRuleDescription',
      authorizationRuleId: 'AuthorizationRuleId',
      authorizationRuleName: 'AuthorizationRuleName',
      authorizationRuleStatus: 'AuthorizationRuleStatus',
      destination: 'Destination',
      destinationType: 'DestinationType',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      policy: 'Policy',
      sourceCidrs: 'SourceCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleDescription: 'string',
      authorizationRuleId: 'string',
      authorizationRuleName: 'string',
      authorizationRuleStatus: 'string',
      destination: 'string',
      destinationType: 'string',
      ioTCloudConnectorGroupId: 'string',
      policy: 'string',
      sourceCidrs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorGroupsResponseBodyIoTCloudConnectorGroupsIoTCloudConnectors extends $tea.Model {
  APN?: string;
  createTime?: number;
  ISP?: string;
  ioTCloudConnectorDescription?: string;
  ioTCloudConnectorId?: string;
  ioTCloudConnectorName?: string;
  ioTCloudConnectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      createTime: 'CreateTime',
      ISP: 'ISP',
      ioTCloudConnectorDescription: 'IoTCloudConnectorDescription',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ioTCloudConnectorName: 'IoTCloudConnectorName',
      ioTCloudConnectorStatus: 'IoTCloudConnectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      createTime: 'number',
      ISP: 'string',
      ioTCloudConnectorDescription: 'string',
      ioTCloudConnectorId: 'string',
      ioTCloudConnectorName: 'string',
      ioTCloudConnectorStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorGroupsResponseBodyIoTCloudConnectorGroups extends $tea.Model {
  createTime?: number;
  description?: string;
  ioTCloudConnectorGroupId?: string;
  ioTCloudConnectorGroupStatus?: string;
  ioTCloudConnectors?: ListIoTCloudConnectorGroupsResponseBodyIoTCloudConnectorGroupsIoTCloudConnectors[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      ioTCloudConnectorGroupStatus: 'IoTCloudConnectorGroupStatus',
      ioTCloudConnectors: 'IoTCloudConnectors',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      ioTCloudConnectorGroupId: 'string',
      ioTCloudConnectorGroupStatus: 'string',
      ioTCloudConnectors: { 'type': 'array', 'itemType': ListIoTCloudConnectorGroupsResponseBodyIoTCloudConnectorGroupsIoTCloudConnectors },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIoTCloudConnectorsResponseBodyIoTCloudConnectors extends $tea.Model {
  APN?: string;
  createTime?: number;
  ISP?: string;
  ioTCloudConnectorBusinessStatus?: string;
  ioTCloudConnectorDescription?: string;
  ioTCloudConnectorGroupId?: string;
  ioTCloudConnectorId?: string;
  ioTCloudConnectorName?: string;
  ioTCloudConnectorStatus?: string;
  modifyTime?: number;
  rateLimit?: number;
  vSwitchList?: string[];
  vpcId?: string;
  wildcardDomainEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      createTime: 'CreateTime',
      ISP: 'ISP',
      ioTCloudConnectorBusinessStatus: 'IoTCloudConnectorBusinessStatus',
      ioTCloudConnectorDescription: 'IoTCloudConnectorDescription',
      ioTCloudConnectorGroupId: 'IoTCloudConnectorGroupId',
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      ioTCloudConnectorName: 'IoTCloudConnectorName',
      ioTCloudConnectorStatus: 'IoTCloudConnectorStatus',
      modifyTime: 'ModifyTime',
      rateLimit: 'RateLimit',
      vSwitchList: 'VSwitchList',
      vpcId: 'VpcId',
      wildcardDomainEnabled: 'WildcardDomainEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APN: 'string',
      createTime: 'number',
      ISP: 'string',
      ioTCloudConnectorBusinessStatus: 'string',
      ioTCloudConnectorDescription: 'string',
      ioTCloudConnectorGroupId: 'string',
      ioTCloudConnectorId: 'string',
      ioTCloudConnectorName: 'string',
      ioTCloudConnectorStatus: 'string',
      modifyTime: 'number',
      rateLimit: 'number',
      vSwitchList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      wildcardDomainEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
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

export class ListServiceResponseBodyServices extends $tea.Model {
  ioTCloudConnectorId?: string;
  serviceDescription?: string;
  serviceId?: string;
  serviceName?: string;
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ioTCloudConnectorId: 'IoTCloudConnectorId',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ioTCloudConnectorId: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEntriesResponseBodyServiceEntries extends $tea.Model {
  serviceEntryDescription?: string;
  serviceEntryId?: string;
  serviceEntryName?: string;
  serviceEntryStatus?: string;
  serviceId?: string;
  target?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceEntryDescription: 'ServiceEntryDescription',
      serviceEntryId: 'ServiceEntryId',
      serviceEntryName: 'ServiceEntryName',
      serviceEntryStatus: 'ServiceEntryStatus',
      serviceId: 'ServiceId',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceEntryDescription: 'string',
      serviceEntryId: 'string',
      serviceEntryName: 'string',
      serviceEntryStatus: 'string',
      serviceId: 'string',
      target: 'string',
      targetType: 'string',
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
    this._endpoint = this.getEndpoint("iotcc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCidrToConnectionPoolWithOptions(request: AddCidrToConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<AddCidrToConnectionPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddCidrToConnectionPool",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCidrToConnectionPoolResponse>(await this.callApi(params, req, runtime), new AddCidrToConnectionPoolResponse({}));
  }

  async addCidrToConnectionPool(request: AddCidrToConnectionPoolRequest): Promise<AddCidrToConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCidrToConnectionPoolWithOptions(request, runtime);
  }

  async addIoTCloudConnectorToGroupWithOptions(request: AddIoTCloudConnectorToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddIoTCloudConnectorToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddIoTCloudConnectorToGroup",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddIoTCloudConnectorToGroupResponse>(await this.callApi(params, req, runtime), new AddIoTCloudConnectorToGroupResponse({}));
  }

  async addIoTCloudConnectorToGroup(request: AddIoTCloudConnectorToGroupRequest): Promise<AddIoTCloudConnectorToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIoTCloudConnectorToGroupWithOptions(request, runtime);
  }

  async associateIpWithConnectionPoolWithOptions(request: AssociateIpWithConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<AssociateIpWithConnectionPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.ips)) {
      query["Ips"] = request.ips;
    }

    if (!Util.isUnset(request.ipsFilePath)) {
      query["IpsFilePath"] = request.ipsFilePath;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateIpWithConnectionPool",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateIpWithConnectionPoolResponse>(await this.callApi(params, req, runtime), new AssociateIpWithConnectionPoolResponse({}));
  }

  async associateIpWithConnectionPool(request: AssociateIpWithConnectionPoolRequest): Promise<AssociateIpWithConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateIpWithConnectionPoolWithOptions(request, runtime);
  }

  async associateVSwitchWithIoTCloudConnectorWithOptions(request: AssociateVSwitchWithIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<AssociateVSwitchWithIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchList)) {
      query["VSwitchList"] = request.vSwitchList;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateVSwitchWithIoTCloudConnector",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateVSwitchWithIoTCloudConnectorResponse>(await this.callApi(params, req, runtime), new AssociateVSwitchWithIoTCloudConnectorResponse({}));
  }

  async associateVSwitchWithIoTCloudConnector(request: AssociateVSwitchWithIoTCloudConnectorRequest): Promise<AssociateVSwitchWithIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateVSwitchWithIoTCloudConnectorWithOptions(request, runtime);
  }

  async createAuthorizationRuleWithOptions(request: CreateAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleDescription)) {
      query["AuthorizationRuleDescription"] = request.authorizationRuleDescription;
    }

    if (!Util.isUnset(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceCidrs)) {
      query["SourceCidrs"] = request.sourceCidrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAuthorizationRule",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new CreateAuthorizationRuleResponse({}));
  }

  async createAuthorizationRule(request: CreateAuthorizationRuleRequest): Promise<CreateAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthorizationRuleWithOptions(request, runtime);
  }

  async createConnectionPoolWithOptions(request: CreateConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnectionPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolDescription)) {
      query["ConnectionPoolDescription"] = request.connectionPoolDescription;
    }

    if (!Util.isUnset(request.connectionPoolName)) {
      query["ConnectionPoolName"] = request.connectionPoolName;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConnectionPool",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConnectionPoolResponse>(await this.callApi(params, req, runtime), new CreateConnectionPoolResponse({}));
  }

  async createConnectionPool(request: CreateConnectionPoolRequest): Promise<CreateConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnectionPoolWithOptions(request, runtime);
  }

  async createGroupAuthorizationRuleWithOptions(request: CreateGroupAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleDescription)) {
      query["AuthorizationRuleDescription"] = request.authorizationRuleDescription;
    }

    if (!Util.isUnset(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceCidrs)) {
      query["SourceCidrs"] = request.sourceCidrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupAuthorizationRule",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new CreateGroupAuthorizationRuleResponse({}));
  }

  async createGroupAuthorizationRule(request: CreateGroupAuthorizationRuleRequest): Promise<CreateGroupAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupAuthorizationRuleWithOptions(request, runtime);
  }

  async createIoTCloudConnectorWithOptions(request: CreateIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<CreateIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.APN)) {
      query["APN"] = request.APN;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.ioTCloudConnectorDescription)) {
      query["IoTCloudConnectorDescription"] = request.ioTCloudConnectorDescription;
    }

    if (!Util.isUnset(request.ioTCloudConnectorName)) {
      query["IoTCloudConnectorName"] = request.ioTCloudConnectorName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.wildcardDomainEnabled)) {
      query["WildcardDomainEnabled"] = request.wildcardDomainEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIoTCloudConnector",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIoTCloudConnectorResponse>(await this.callApi(params, req, runtime), new CreateIoTCloudConnectorResponse({}));
  }

  async createIoTCloudConnector(request: CreateIoTCloudConnectorRequest): Promise<CreateIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIoTCloudConnectorWithOptions(request, runtime);
  }

  async createIoTCloudConnectorGroupWithOptions(request: CreateIoTCloudConnectorGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateIoTCloudConnectorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIoTCloudConnectorGroup",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIoTCloudConnectorGroupResponse>(await this.callApi(params, req, runtime), new CreateIoTCloudConnectorGroupResponse({}));
  }

  async createIoTCloudConnectorGroup(request: CreateIoTCloudConnectorGroupRequest): Promise<CreateIoTCloudConnectorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIoTCloudConnectorGroupWithOptions(request, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  async createServiceEntryWithOptions(request: CreateServiceEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceEntryDescription)) {
      query["ServiceEntryDescription"] = request.serviceEntryDescription;
    }

    if (!Util.isUnset(request.serviceEntryName)) {
      query["ServiceEntryName"] = request.serviceEntryName;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceEntry",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceEntryResponse>(await this.callApi(params, req, runtime), new CreateServiceEntryResponse({}));
  }

  async createServiceEntry(request: CreateServiceEntryRequest): Promise<CreateServiceEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceEntryWithOptions(request, runtime);
  }

  async deleteAuthorizationRuleWithOptions(request: DeleteAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAuthorizationRule",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new DeleteAuthorizationRuleResponse({}));
  }

  async deleteAuthorizationRule(request: DeleteAuthorizationRuleRequest): Promise<DeleteAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAuthorizationRuleWithOptions(request, runtime);
  }

  async deleteConnectionPoolWithOptions(request: DeleteConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConnectionPool",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConnectionPoolResponse>(await this.callApi(params, req, runtime), new DeleteConnectionPoolResponse({}));
  }

  async deleteConnectionPool(request: DeleteConnectionPoolRequest): Promise<DeleteConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnectionPoolWithOptions(request, runtime);
  }

  async deleteGroupAuthorizationRuleWithOptions(request: DeleteGroupAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupAuthorizationRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupAuthorizationRule",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new DeleteGroupAuthorizationRuleResponse({}));
  }

  async deleteGroupAuthorizationRule(request: DeleteGroupAuthorizationRuleRequest): Promise<DeleteGroupAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupAuthorizationRuleWithOptions(request, runtime);
  }

  async deleteIoTCloudConnectorWithOptions(request: DeleteIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIoTCloudConnector",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIoTCloudConnectorResponse>(await this.callApi(params, req, runtime), new DeleteIoTCloudConnectorResponse({}));
  }

  async deleteIoTCloudConnector(request: DeleteIoTCloudConnectorRequest): Promise<DeleteIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIoTCloudConnectorWithOptions(request, runtime);
  }

  async deleteIoTCloudConnectorGroupWithOptions(request: DeleteIoTCloudConnectorGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIoTCloudConnectorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIoTCloudConnectorGroup",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIoTCloudConnectorGroupResponse>(await this.callApi(params, req, runtime), new DeleteIoTCloudConnectorGroupResponse({}));
  }

  async deleteIoTCloudConnectorGroup(request: DeleteIoTCloudConnectorGroupRequest): Promise<DeleteIoTCloudConnectorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIoTCloudConnectorGroupWithOptions(request, runtime);
  }

  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  async deleteServiceEntryWithOptions(request: DeleteServiceEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceEntryId)) {
      query["ServiceEntryId"] = request.serviceEntryId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceEntry",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceEntryResponse>(await this.callApi(params, req, runtime), new DeleteServiceEntryResponse({}));
  }

  async deleteServiceEntry(request: DeleteServiceEntryRequest): Promise<DeleteServiceEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceEntryWithOptions(request, runtime);
  }

  async disableIoTCloudConnectorAccessLogWithOptions(request: DisableIoTCloudConnectorAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<DisableIoTCloudConnectorAccessLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableIoTCloudConnectorAccessLog",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableIoTCloudConnectorAccessLogResponse>(await this.callApi(params, req, runtime), new DisableIoTCloudConnectorAccessLogResponse({}));
  }

  async disableIoTCloudConnectorAccessLog(request: DisableIoTCloudConnectorAccessLogRequest): Promise<DisableIoTCloudConnectorAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableIoTCloudConnectorAccessLogWithOptions(request, runtime);
  }

  async dissociateIpFromConnectionPoolWithOptions(request: DissociateIpFromConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<DissociateIpFromConnectionPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.ips)) {
      query["Ips"] = request.ips;
    }

    if (!Util.isUnset(request.ipsFilePath)) {
      query["IpsFilePath"] = request.ipsFilePath;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateIpFromConnectionPool",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateIpFromConnectionPoolResponse>(await this.callApi(params, req, runtime), new DissociateIpFromConnectionPoolResponse({}));
  }

  async dissociateIpFromConnectionPool(request: DissociateIpFromConnectionPoolRequest): Promise<DissociateIpFromConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateIpFromConnectionPoolWithOptions(request, runtime);
  }

  async dissociateVSwitchFromIoTCloudConnectorWithOptions(request: DissociateVSwitchFromIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<DissociateVSwitchFromIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateVSwitchFromIoTCloudConnector",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateVSwitchFromIoTCloudConnectorResponse>(await this.callApi(params, req, runtime), new DissociateVSwitchFromIoTCloudConnectorResponse({}));
  }

  async dissociateVSwitchFromIoTCloudConnector(request: DissociateVSwitchFromIoTCloudConnectorRequest): Promise<DissociateVSwitchFromIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateVSwitchFromIoTCloudConnectorWithOptions(request, runtime);
  }

  async enableIoTCloudConnectorAccessLogWithOptions(request: EnableIoTCloudConnectorAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<EnableIoTCloudConnectorAccessLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLogSlsLogStore)) {
      query["AccessLogSlsLogStore"] = request.accessLogSlsLogStore;
    }

    if (!Util.isUnset(request.accessLogSlsProject)) {
      query["AccessLogSlsProject"] = request.accessLogSlsProject;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableIoTCloudConnectorAccessLog",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableIoTCloudConnectorAccessLogResponse>(await this.callApi(params, req, runtime), new EnableIoTCloudConnectorAccessLogResponse({}));
  }

  async enableIoTCloudConnectorAccessLog(request: EnableIoTCloudConnectorAccessLogRequest): Promise<EnableIoTCloudConnectorAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableIoTCloudConnectorAccessLogWithOptions(request, runtime);
  }

  async getConnectionPoolIpOperationResultWithOptions(request: GetConnectionPoolIpOperationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionPoolIpOperationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.queryRequestId)) {
      query["QueryRequestId"] = request.queryRequestId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConnectionPoolIpOperationResult",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionPoolIpOperationResultResponse>(await this.callApi(params, req, runtime), new GetConnectionPoolIpOperationResultResponse({}));
  }

  async getConnectionPoolIpOperationResult(request: GetConnectionPoolIpOperationResultRequest): Promise<GetConnectionPoolIpOperationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionPoolIpOperationResultWithOptions(request, runtime);
  }

  async getDiagnoseResultForSingleCardWithOptions(request: GetDiagnoseResultForSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagnoseResultForSingleCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diagnoseTaskId)) {
      query["DiagnoseTaskId"] = request.diagnoseTaskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnoseResultForSingleCard",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnoseResultForSingleCardResponse>(await this.callApi(params, req, runtime), new GetDiagnoseResultForSingleCardResponse({}));
  }

  async getDiagnoseResultForSingleCard(request: GetDiagnoseResultForSingleCardRequest): Promise<GetDiagnoseResultForSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagnoseResultForSingleCardWithOptions(request, runtime);
  }

  async getIoTCloudConnectorAccessLogWithOptions(request: GetIoTCloudConnectorAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<GetIoTCloudConnectorAccessLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIoTCloudConnectorAccessLog",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIoTCloudConnectorAccessLogResponse>(await this.callApi(params, req, runtime), new GetIoTCloudConnectorAccessLogResponse({}));
  }

  async getIoTCloudConnectorAccessLog(request: GetIoTCloudConnectorAccessLogRequest): Promise<GetIoTCloudConnectorAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIoTCloudConnectorAccessLogWithOptions(request, runtime);
  }

  async getStsInfoAndOssPathWithOptions(request: GetStsInfoAndOssPathRequest, runtime: $Util.RuntimeOptions): Promise<GetStsInfoAndOssPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStsInfoAndOssPath",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStsInfoAndOssPathResponse>(await this.callApi(params, req, runtime), new GetStsInfoAndOssPathResponse({}));
  }

  async getStsInfoAndOssPath(request: GetStsInfoAndOssPathRequest): Promise<GetStsInfoAndOssPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStsInfoAndOssPathWithOptions(request, runtime);
  }

  async grantVirtualBorderRouterWithOptions(request: GrantVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<GrantVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.virtualBorderRouterId)) {
      query["VirtualBorderRouterId"] = request.virtualBorderRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantVirtualBorderRouter",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantVirtualBorderRouterResponse>(await this.callApi(params, req, runtime), new GrantVirtualBorderRouterResponse({}));
  }

  async grantVirtualBorderRouter(request: GrantVirtualBorderRouterRequest): Promise<GrantVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantVirtualBorderRouterWithOptions(request, runtime);
  }

  async listAPNsWithOptions(request: ListAPNsRequest, runtime: $Util.RuntimeOptions): Promise<ListAPNsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.APN)) {
      query["APN"] = request.APN;
    }

    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAPNs",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAPNsResponse>(await this.callApi(params, req, runtime), new ListAPNsResponse({}));
  }

  async listAPNs(request: ListAPNsRequest): Promise<ListAPNsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAPNsWithOptions(request, runtime);
  }

  async listAuthorizationRulesWithOptions(request: ListAuthorizationRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleIds)) {
      query["AuthorizationRuleIds"] = request.authorizationRuleIds;
    }

    if (!Util.isUnset(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!Util.isUnset(request.authorizationRuleStatus)) {
      query["AuthorizationRuleStatus"] = request.authorizationRuleStatus;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizationRules",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new ListAuthorizationRulesResponse({}));
  }

  async listAuthorizationRules(request: ListAuthorizationRulesRequest): Promise<ListAuthorizationRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizationRulesWithOptions(request, runtime);
  }

  async listConnectionPoolAllIpsWithOptions(request: ListConnectionPoolAllIpsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoolAllIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConnectionPoolAllIps",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionPoolAllIpsResponse>(await this.callApi(params, req, runtime), new ListConnectionPoolAllIpsResponse({}));
  }

  async listConnectionPoolAllIps(request: ListConnectionPoolAllIpsRequest): Promise<ListConnectionPoolAllIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoolAllIpsWithOptions(request, runtime);
  }

  async listConnectionPoolIpsWithOptions(request: ListConnectionPoolIpsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoolIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConnectionPoolIps",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionPoolIpsResponse>(await this.callApi(params, req, runtime), new ListConnectionPoolIpsResponse({}));
  }

  async listConnectionPoolIps(request: ListConnectionPoolIpsRequest): Promise<ListConnectionPoolIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoolIpsWithOptions(request, runtime);
  }

  async listConnectionPoolsWithOptions(request: ListConnectionPoolsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoolsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionPoolIds)) {
      query["ConnectionPoolIds"] = request.connectionPoolIds;
    }

    if (!Util.isUnset(request.connectionPoolName)) {
      query["ConnectionPoolName"] = request.connectionPoolName;
    }

    if (!Util.isUnset(request.connectionPoolStatus)) {
      query["ConnectionPoolStatus"] = request.connectionPoolStatus;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConnectionPools",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionPoolsResponse>(await this.callApi(params, req, runtime), new ListConnectionPoolsResponse({}));
  }

  async listConnectionPools(request: ListConnectionPoolsRequest): Promise<ListConnectionPoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoolsWithOptions(request, runtime);
  }

  async listDiagnoseInfoForSingleCardWithOptions(request: ListDiagnoseInfoForSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<ListDiagnoseInfoForSingleCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDiagnoseInfoForSingleCard",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDiagnoseInfoForSingleCardResponse>(await this.callApi(params, req, runtime), new ListDiagnoseInfoForSingleCardResponse({}));
  }

  async listDiagnoseInfoForSingleCard(request: ListDiagnoseInfoForSingleCardRequest): Promise<ListDiagnoseInfoForSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDiagnoseInfoForSingleCardWithOptions(request, runtime);
  }

  async listGroupAuthorizationRulesWithOptions(request: ListGroupAuthorizationRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupAuthorizationRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleIds)) {
      query["AuthorizationRuleIds"] = request.authorizationRuleIds;
    }

    if (!Util.isUnset(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!Util.isUnset(request.authorizationRuleStatus)) {
      query["AuthorizationRuleStatus"] = request.authorizationRuleStatus;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupAuthorizationRules",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new ListGroupAuthorizationRulesResponse({}));
  }

  async listGroupAuthorizationRules(request: ListGroupAuthorizationRulesRequest): Promise<ListGroupAuthorizationRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupAuthorizationRulesWithOptions(request, runtime);
  }

  async listIoTCloudConnectorAvailableZonesWithOptions(request: ListIoTCloudConnectorAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListIoTCloudConnectorAvailableZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIoTCloudConnectorAvailableZones",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIoTCloudConnectorAvailableZonesResponse>(await this.callApi(params, req, runtime), new ListIoTCloudConnectorAvailableZonesResponse({}));
  }

  async listIoTCloudConnectorAvailableZones(request: ListIoTCloudConnectorAvailableZonesRequest): Promise<ListIoTCloudConnectorAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIoTCloudConnectorAvailableZonesWithOptions(request, runtime);
  }

  async listIoTCloudConnectorGroupsWithOptions(request: ListIoTCloudConnectorGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListIoTCloudConnectorGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ioTCloudConnectorGroupIds)) {
      query["IoTCloudConnectorGroupIds"] = request.ioTCloudConnectorGroupIds;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupName)) {
      query["IoTCloudConnectorGroupName"] = request.ioTCloudConnectorGroupName;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupStatus)) {
      query["IoTCloudConnectorGroupStatus"] = request.ioTCloudConnectorGroupStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIoTCloudConnectorGroups",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIoTCloudConnectorGroupsResponse>(await this.callApi(params, req, runtime), new ListIoTCloudConnectorGroupsResponse({}));
  }

  async listIoTCloudConnectorGroups(request: ListIoTCloudConnectorGroupsRequest): Promise<ListIoTCloudConnectorGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIoTCloudConnectorGroupsWithOptions(request, runtime);
  }

  async listIoTCloudConnectorsWithOptions(request: ListIoTCloudConnectorsRequest, runtime: $Util.RuntimeOptions): Promise<ListIoTCloudConnectorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.APN)) {
      query["APN"] = request.APN;
    }

    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorIds)) {
      query["IoTCloudConnectorIds"] = request.ioTCloudConnectorIds;
    }

    if (!Util.isUnset(request.ioTCloudConnectorName)) {
      query["IoTCloudConnectorName"] = request.ioTCloudConnectorName;
    }

    if (!Util.isUnset(request.ioTCloudConnectorStatus)) {
      query["IoTCloudConnectorStatus"] = request.ioTCloudConnectorStatus;
    }

    if (!Util.isUnset(request.isInGroup)) {
      query["IsInGroup"] = request.isInGroup;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIoTCloudConnectors",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIoTCloudConnectorsResponse>(await this.callApi(params, req, runtime), new ListIoTCloudConnectorsResponse({}));
  }

  async listIoTCloudConnectors(request: ListIoTCloudConnectorsRequest): Promise<ListIoTCloudConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIoTCloudConnectorsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(request: ListRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(request: ListRegionsRequest): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  async listServiceWithOptions(request: ListServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceStatuses)) {
      query["ResourceStatuses"] = request.resourceStatuses;
    }

    if (!Util.isUnset(request.serviceIds)) {
      query["ServiceIds"] = request.serviceIds;
    }

    if (!Util.isUnset(request.serviceNames)) {
      query["ServiceNames"] = request.serviceNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListService",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceResponse>(await this.callApi(params, req, runtime), new ListServiceResponse({}));
  }

  async listService(request: ListServiceRequest): Promise<ListServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceWithOptions(request, runtime);
  }

  async listServiceEntriesWithOptions(request: ListServiceEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceEntryIds)) {
      query["ServiceEntryIds"] = request.serviceEntryIds;
    }

    if (!Util.isUnset(request.serviceEntryName)) {
      query["ServiceEntryName"] = request.serviceEntryName;
    }

    if (!Util.isUnset(request.serviceEntryStatus)) {
      query["ServiceEntryStatus"] = request.serviceEntryStatus;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceEntries",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceEntriesResponse>(await this.callApi(params, req, runtime), new ListServiceEntriesResponse({}));
  }

  async listServiceEntries(request: ListServiceEntriesRequest): Promise<ListServiceEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceEntriesWithOptions(request, runtime);
  }

  async openIoTCloudConnectorServiceWithOptions(request: OpenIoTCloudConnectorServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenIoTCloudConnectorServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenIoTCloudConnectorService",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenIoTCloudConnectorServiceResponse>(await this.callApi(params, req, runtime), new OpenIoTCloudConnectorServiceResponse({}));
  }

  async openIoTCloudConnectorService(request: OpenIoTCloudConnectorServiceRequest): Promise<OpenIoTCloudConnectorServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openIoTCloudConnectorServiceWithOptions(request, runtime);
  }

  async removeIoTCloudConnectorFromGroupWithOptions(request: RemoveIoTCloudConnectorFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveIoTCloudConnectorFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveIoTCloudConnectorFromGroup",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveIoTCloudConnectorFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveIoTCloudConnectorFromGroupResponse({}));
  }

  async removeIoTCloudConnectorFromGroup(request: RemoveIoTCloudConnectorFromGroupRequest): Promise<RemoveIoTCloudConnectorFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIoTCloudConnectorFromGroupWithOptions(request, runtime);
  }

  async submitDiagnoseTaskForSingleCardWithOptions(request: SubmitDiagnoseTaskForSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<SubmitDiagnoseTaskForSingleCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitDiagnoseTaskForSingleCard",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitDiagnoseTaskForSingleCardResponse>(await this.callApi(params, req, runtime), new SubmitDiagnoseTaskForSingleCardResponse({}));
  }

  async submitDiagnoseTaskForSingleCard(request: SubmitDiagnoseTaskForSingleCardRequest): Promise<SubmitDiagnoseTaskForSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitDiagnoseTaskForSingleCardWithOptions(request, runtime);
  }

  async updateAuthorizationRuleAttributeWithOptions(request: UpdateAuthorizationRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuthorizationRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleDescription)) {
      query["AuthorizationRuleDescription"] = request.authorizationRuleDescription;
    }

    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceCidrs)) {
      query["SourceCidrs"] = request.sourceCidrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuthorizationRuleAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuthorizationRuleAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAuthorizationRuleAttributeResponse({}));
  }

  async updateAuthorizationRuleAttribute(request: UpdateAuthorizationRuleAttributeRequest): Promise<UpdateAuthorizationRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuthorizationRuleAttributeWithOptions(request, runtime);
  }

  async updateConnectionPoolAttributeWithOptions(request: UpdateConnectionPoolAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionPoolAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionPoolDescription)) {
      query["ConnectionPoolDescription"] = request.connectionPoolDescription;
    }

    if (!Util.isUnset(request.connectionPoolId)) {
      query["ConnectionPoolId"] = request.connectionPoolId;
    }

    if (!Util.isUnset(request.connectionPoolName)) {
      query["ConnectionPoolName"] = request.connectionPoolName;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConnectionPoolAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConnectionPoolAttributeResponse>(await this.callApi(params, req, runtime), new UpdateConnectionPoolAttributeResponse({}));
  }

  async updateConnectionPoolAttribute(request: UpdateConnectionPoolAttributeRequest): Promise<UpdateConnectionPoolAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionPoolAttributeWithOptions(request, runtime);
  }

  async updateGroupAuthorizationRuleAttributeWithOptions(request: UpdateGroupAuthorizationRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupAuthorizationRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizationRuleDescription)) {
      query["AuthorizationRuleDescription"] = request.authorizationRuleDescription;
    }

    if (!Util.isUnset(request.authorizationRuleId)) {
      query["AuthorizationRuleId"] = request.authorizationRuleId;
    }

    if (!Util.isUnset(request.authorizationRuleName)) {
      query["AuthorizationRuleName"] = request.authorizationRuleName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destination)) {
      query["Destination"] = request.destination;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceCidrs)) {
      query["SourceCidrs"] = request.sourceCidrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupAuthorizationRuleAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupAuthorizationRuleAttributeResponse>(await this.callApi(params, req, runtime), new UpdateGroupAuthorizationRuleAttributeResponse({}));
  }

  async updateGroupAuthorizationRuleAttribute(request: UpdateGroupAuthorizationRuleAttributeRequest): Promise<UpdateGroupAuthorizationRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupAuthorizationRuleAttributeWithOptions(request, runtime);
  }

  async updateIoTCloudConnectorAttributeWithOptions(request: UpdateIoTCloudConnectorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIoTCloudConnectorAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorDescription)) {
      query["IoTCloudConnectorDescription"] = request.ioTCloudConnectorDescription;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.ioTCloudConnectorName)) {
      query["IoTCloudConnectorName"] = request.ioTCloudConnectorName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.wildcardDomainEnabled)) {
      query["WildcardDomainEnabled"] = request.wildcardDomainEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIoTCloudConnectorAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIoTCloudConnectorAttributeResponse>(await this.callApi(params, req, runtime), new UpdateIoTCloudConnectorAttributeResponse({}));
  }

  async updateIoTCloudConnectorAttribute(request: UpdateIoTCloudConnectorAttributeRequest): Promise<UpdateIoTCloudConnectorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIoTCloudConnectorAttributeWithOptions(request, runtime);
  }

  async updateIoTCloudConnectorGroupAttributeWithOptions(request: UpdateIoTCloudConnectorGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIoTCloudConnectorGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorGroupId)) {
      query["IoTCloudConnectorGroupId"] = request.ioTCloudConnectorGroupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIoTCloudConnectorGroupAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIoTCloudConnectorGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateIoTCloudConnectorGroupAttributeResponse({}));
  }

  async updateIoTCloudConnectorGroupAttribute(request: UpdateIoTCloudConnectorGroupAttributeRequest): Promise<UpdateIoTCloudConnectorGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIoTCloudConnectorGroupAttributeWithOptions(request, runtime);
  }

  async updateServiceAttributeWithOptions(request: UpdateServiceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServiceAttributeResponse({}));
  }

  async updateServiceAttribute(request: UpdateServiceAttributeRequest): Promise<UpdateServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceAttributeWithOptions(request, runtime);
  }

  async updateServiceEntryAttributeWithOptions(request: UpdateServiceEntryAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceEntryAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ioTCloudConnectorId)) {
      query["IoTCloudConnectorId"] = request.ioTCloudConnectorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceEntryDescription)) {
      query["ServiceEntryDescription"] = request.serviceEntryDescription;
    }

    if (!Util.isUnset(request.serviceEntryId)) {
      query["ServiceEntryId"] = request.serviceEntryId;
    }

    if (!Util.isUnset(request.serviceEntryName)) {
      query["ServiceEntryName"] = request.serviceEntryName;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceEntryAttribute",
      version: "2021-05-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceEntryAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServiceEntryAttributeResponse({}));
  }

  async updateServiceEntryAttribute(request: UpdateServiceEntryAttributeRequest): Promise<UpdateServiceEntryAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceEntryAttributeWithOptions(request, runtime);
  }

}
