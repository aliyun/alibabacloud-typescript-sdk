// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class ListIoTCloudConnectorsRequest extends $tea.Model {
  APN?: string[];
  ISP?: string[];
  ioTCloudConnectorIds?: string[];
  ioTCloudConnectorName?: string[];
  ioTCloudConnectorStatus?: string[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      APN: 'APN',
      ISP: 'ISP',
      ioTCloudConnectorIds: 'IoTCloudConnectorIds',
      ioTCloudConnectorName: 'IoTCloudConnectorName',
      ioTCloudConnectorStatus: 'IoTCloudConnectorStatus',
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
      ioTCloudConnectorIds: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorName: { 'type': 'array', 'itemType': 'string' },
      ioTCloudConnectorStatus: { 'type': 'array', 'itemType': 'string' },
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

export class ListIoTCloudConnectorsResponseBodyIoTCloudConnectors extends $tea.Model {
  APN?: string;
  createTime?: number;
  ISP?: string;
  ioTCloudConnectorBusinessStatus?: string;
  ioTCloudConnectorDescription?: string;
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

  async associateIpWithConnectionPoolWithOptions(request: AssociateIpWithConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<AssociateIpWithConnectionPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateIpWithConnectionPoolResponse>(await this.doRPCRequest("AssociateIpWithConnectionPool", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateIpWithConnectionPoolResponse({}));
  }

  async associateIpWithConnectionPool(request: AssociateIpWithConnectionPoolRequest): Promise<AssociateIpWithConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateIpWithConnectionPoolWithOptions(request, runtime);
  }

  async associateVSwitchWithIoTCloudConnectorWithOptions(request: AssociateVSwitchWithIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<AssociateVSwitchWithIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateVSwitchWithIoTCloudConnectorResponse>(await this.doRPCRequest("AssociateVSwitchWithIoTCloudConnector", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateVSwitchWithIoTCloudConnectorResponse({}));
  }

  async associateVSwitchWithIoTCloudConnector(request: AssociateVSwitchWithIoTCloudConnectorRequest): Promise<AssociateVSwitchWithIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateVSwitchWithIoTCloudConnectorWithOptions(request, runtime);
  }

  async createAuthorizationRuleWithOptions(request: CreateAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthorizationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAuthorizationRuleResponse>(await this.doRPCRequest("CreateAuthorizationRule", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAuthorizationRuleResponse({}));
  }

  async createAuthorizationRule(request: CreateAuthorizationRuleRequest): Promise<CreateAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthorizationRuleWithOptions(request, runtime);
  }

  async createConnectionPoolWithOptions(request: CreateConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnectionPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConnectionPoolResponse>(await this.doRPCRequest("CreateConnectionPool", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConnectionPoolResponse({}));
  }

  async createConnectionPool(request: CreateConnectionPoolRequest): Promise<CreateConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnectionPoolWithOptions(request, runtime);
  }

  async createIoTCloudConnectorWithOptions(request: CreateIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<CreateIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIoTCloudConnectorResponse>(await this.doRPCRequest("CreateIoTCloudConnector", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIoTCloudConnectorResponse({}));
  }

  async createIoTCloudConnector(request: CreateIoTCloudConnectorRequest): Promise<CreateIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIoTCloudConnectorWithOptions(request, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceResponse>(await this.doRPCRequest("CreateService", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceWithOptions(request, runtime);
  }

  async createServiceEntryWithOptions(request: CreateServiceEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceEntryResponse>(await this.doRPCRequest("CreateServiceEntry", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceEntryResponse({}));
  }

  async createServiceEntry(request: CreateServiceEntryRequest): Promise<CreateServiceEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceEntryWithOptions(request, runtime);
  }

  async deleteAuthorizationRuleWithOptions(request: DeleteAuthorizationRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAuthorizationRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAuthorizationRuleResponse>(await this.doRPCRequest("DeleteAuthorizationRule", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAuthorizationRuleResponse({}));
  }

  async deleteAuthorizationRule(request: DeleteAuthorizationRuleRequest): Promise<DeleteAuthorizationRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAuthorizationRuleWithOptions(request, runtime);
  }

  async deleteConnectionPoolWithOptions(request: DeleteConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConnectionPoolResponse>(await this.doRPCRequest("DeleteConnectionPool", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConnectionPoolResponse({}));
  }

  async deleteConnectionPool(request: DeleteConnectionPoolRequest): Promise<DeleteConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnectionPoolWithOptions(request, runtime);
  }

  async deleteIoTCloudConnectorWithOptions(request: DeleteIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIoTCloudConnectorResponse>(await this.doRPCRequest("DeleteIoTCloudConnector", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIoTCloudConnectorResponse({}));
  }

  async deleteIoTCloudConnector(request: DeleteIoTCloudConnectorRequest): Promise<DeleteIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIoTCloudConnectorWithOptions(request, runtime);
  }

  async deleteServiceWithOptions(request: DeleteServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServiceResponse>(await this.doRPCRequest("DeleteService", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(request: DeleteServiceRequest): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceWithOptions(request, runtime);
  }

  async deleteServiceEntryWithOptions(request: DeleteServiceEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServiceEntryResponse>(await this.doRPCRequest("DeleteServiceEntry", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServiceEntryResponse({}));
  }

  async deleteServiceEntry(request: DeleteServiceEntryRequest): Promise<DeleteServiceEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceEntryWithOptions(request, runtime);
  }

  async disableIoTCloudConnectorAccessLogWithOptions(request: DisableIoTCloudConnectorAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<DisableIoTCloudConnectorAccessLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableIoTCloudConnectorAccessLogResponse>(await this.doRPCRequest("DisableIoTCloudConnectorAccessLog", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DisableIoTCloudConnectorAccessLogResponse({}));
  }

  async disableIoTCloudConnectorAccessLog(request: DisableIoTCloudConnectorAccessLogRequest): Promise<DisableIoTCloudConnectorAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableIoTCloudConnectorAccessLogWithOptions(request, runtime);
  }

  async dissociateIpFromConnectionPoolWithOptions(request: DissociateIpFromConnectionPoolRequest, runtime: $Util.RuntimeOptions): Promise<DissociateIpFromConnectionPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateIpFromConnectionPoolResponse>(await this.doRPCRequest("DissociateIpFromConnectionPool", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateIpFromConnectionPoolResponse({}));
  }

  async dissociateIpFromConnectionPool(request: DissociateIpFromConnectionPoolRequest): Promise<DissociateIpFromConnectionPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateIpFromConnectionPoolWithOptions(request, runtime);
  }

  async dissociateVSwitchFromIoTCloudConnectorWithOptions(request: DissociateVSwitchFromIoTCloudConnectorRequest, runtime: $Util.RuntimeOptions): Promise<DissociateVSwitchFromIoTCloudConnectorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateVSwitchFromIoTCloudConnectorResponse>(await this.doRPCRequest("DissociateVSwitchFromIoTCloudConnector", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateVSwitchFromIoTCloudConnectorResponse({}));
  }

  async dissociateVSwitchFromIoTCloudConnector(request: DissociateVSwitchFromIoTCloudConnectorRequest): Promise<DissociateVSwitchFromIoTCloudConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateVSwitchFromIoTCloudConnectorWithOptions(request, runtime);
  }

  async enableIoTCloudConnectorAccessLogWithOptions(request: EnableIoTCloudConnectorAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<EnableIoTCloudConnectorAccessLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableIoTCloudConnectorAccessLogResponse>(await this.doRPCRequest("EnableIoTCloudConnectorAccessLog", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new EnableIoTCloudConnectorAccessLogResponse({}));
  }

  async enableIoTCloudConnectorAccessLog(request: EnableIoTCloudConnectorAccessLogRequest): Promise<EnableIoTCloudConnectorAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableIoTCloudConnectorAccessLogWithOptions(request, runtime);
  }

  async getConnectionPoolIpOperationResultWithOptions(request: GetConnectionPoolIpOperationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionPoolIpOperationResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConnectionPoolIpOperationResultResponse>(await this.doRPCRequest("GetConnectionPoolIpOperationResult", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetConnectionPoolIpOperationResultResponse({}));
  }

  async getConnectionPoolIpOperationResult(request: GetConnectionPoolIpOperationResultRequest): Promise<GetConnectionPoolIpOperationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionPoolIpOperationResultWithOptions(request, runtime);
  }

  async getIoTCloudConnectorAccessLogWithOptions(request: GetIoTCloudConnectorAccessLogRequest, runtime: $Util.RuntimeOptions): Promise<GetIoTCloudConnectorAccessLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIoTCloudConnectorAccessLogResponse>(await this.doRPCRequest("GetIoTCloudConnectorAccessLog", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetIoTCloudConnectorAccessLogResponse({}));
  }

  async getIoTCloudConnectorAccessLog(request: GetIoTCloudConnectorAccessLogRequest): Promise<GetIoTCloudConnectorAccessLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIoTCloudConnectorAccessLogWithOptions(request, runtime);
  }

  async getStsInfoAndOssPathWithOptions(request: GetStsInfoAndOssPathRequest, runtime: $Util.RuntimeOptions): Promise<GetStsInfoAndOssPathResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStsInfoAndOssPathResponse>(await this.doRPCRequest("GetStsInfoAndOssPath", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetStsInfoAndOssPathResponse({}));
  }

  async getStsInfoAndOssPath(request: GetStsInfoAndOssPathRequest): Promise<GetStsInfoAndOssPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStsInfoAndOssPathWithOptions(request, runtime);
  }

  async grantVirtualBorderRouterWithOptions(request: GrantVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<GrantVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantVirtualBorderRouterResponse>(await this.doRPCRequest("GrantVirtualBorderRouter", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new GrantVirtualBorderRouterResponse({}));
  }

  async grantVirtualBorderRouter(request: GrantVirtualBorderRouterRequest): Promise<GrantVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantVirtualBorderRouterWithOptions(request, runtime);
  }

  async listAPNsWithOptions(request: ListAPNsRequest, runtime: $Util.RuntimeOptions): Promise<ListAPNsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAPNsResponse>(await this.doRPCRequest("ListAPNs", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListAPNsResponse({}));
  }

  async listAPNs(request: ListAPNsRequest): Promise<ListAPNsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAPNsWithOptions(request, runtime);
  }

  async listAuthorizationRulesWithOptions(request: ListAuthorizationRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAuthorizationRulesResponse>(await this.doRPCRequest("ListAuthorizationRules", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListAuthorizationRulesResponse({}));
  }

  async listAuthorizationRules(request: ListAuthorizationRulesRequest): Promise<ListAuthorizationRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizationRulesWithOptions(request, runtime);
  }

  async listConnectionPoolIpsWithOptions(request: ListConnectionPoolIpsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoolIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectionPoolIpsResponse>(await this.doRPCRequest("ListConnectionPoolIps", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectionPoolIpsResponse({}));
  }

  async listConnectionPoolIps(request: ListConnectionPoolIpsRequest): Promise<ListConnectionPoolIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoolIpsWithOptions(request, runtime);
  }

  async listConnectionPoolsWithOptions(request: ListConnectionPoolsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionPoolsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectionPoolsResponse>(await this.doRPCRequest("ListConnectionPools", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectionPoolsResponse({}));
  }

  async listConnectionPools(request: ListConnectionPoolsRequest): Promise<ListConnectionPoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionPoolsWithOptions(request, runtime);
  }

  async listIoTCloudConnectorAvailableZonesWithOptions(request: ListIoTCloudConnectorAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListIoTCloudConnectorAvailableZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIoTCloudConnectorAvailableZonesResponse>(await this.doRPCRequest("ListIoTCloudConnectorAvailableZones", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListIoTCloudConnectorAvailableZonesResponse({}));
  }

  async listIoTCloudConnectorAvailableZones(request: ListIoTCloudConnectorAvailableZonesRequest): Promise<ListIoTCloudConnectorAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIoTCloudConnectorAvailableZonesWithOptions(request, runtime);
  }

  async listIoTCloudConnectorsWithOptions(request: ListIoTCloudConnectorsRequest, runtime: $Util.RuntimeOptions): Promise<ListIoTCloudConnectorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIoTCloudConnectorsResponse>(await this.doRPCRequest("ListIoTCloudConnectors", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListIoTCloudConnectorsResponse({}));
  }

  async listIoTCloudConnectors(request: ListIoTCloudConnectorsRequest): Promise<ListIoTCloudConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIoTCloudConnectorsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(request: ListRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRegionsResponse>(await this.doRPCRequest("ListRegions", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(request: ListRegionsRequest): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  async listServiceWithOptions(request: ListServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceResponse>(await this.doRPCRequest("ListService", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceResponse({}));
  }

  async listService(request: ListServiceRequest): Promise<ListServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceWithOptions(request, runtime);
  }

  async listServiceEntriesWithOptions(request: ListServiceEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListServiceEntriesResponse>(await this.doRPCRequest("ListServiceEntries", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListServiceEntriesResponse({}));
  }

  async listServiceEntries(request: ListServiceEntriesRequest): Promise<ListServiceEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceEntriesWithOptions(request, runtime);
  }

  async openIoTCloudConnectorServiceWithOptions(request: OpenIoTCloudConnectorServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenIoTCloudConnectorServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenIoTCloudConnectorServiceResponse>(await this.doRPCRequest("OpenIoTCloudConnectorService", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new OpenIoTCloudConnectorServiceResponse({}));
  }

  async openIoTCloudConnectorService(request: OpenIoTCloudConnectorServiceRequest): Promise<OpenIoTCloudConnectorServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openIoTCloudConnectorServiceWithOptions(request, runtime);
  }

  async updateAuthorizationRuleAttributeWithOptions(request: UpdateAuthorizationRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuthorizationRuleAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAuthorizationRuleAttributeResponse>(await this.doRPCRequest("UpdateAuthorizationRuleAttribute", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAuthorizationRuleAttributeResponse({}));
  }

  async updateAuthorizationRuleAttribute(request: UpdateAuthorizationRuleAttributeRequest): Promise<UpdateAuthorizationRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuthorizationRuleAttributeWithOptions(request, runtime);
  }

  async updateConnectionPoolAttributeWithOptions(request: UpdateConnectionPoolAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionPoolAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConnectionPoolAttributeResponse>(await this.doRPCRequest("UpdateConnectionPoolAttribute", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConnectionPoolAttributeResponse({}));
  }

  async updateConnectionPoolAttribute(request: UpdateConnectionPoolAttributeRequest): Promise<UpdateConnectionPoolAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionPoolAttributeWithOptions(request, runtime);
  }

  async updateIoTCloudConnectorAttributeWithOptions(request: UpdateIoTCloudConnectorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIoTCloudConnectorAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIoTCloudConnectorAttributeResponse>(await this.doRPCRequest("UpdateIoTCloudConnectorAttribute", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIoTCloudConnectorAttributeResponse({}));
  }

  async updateIoTCloudConnectorAttribute(request: UpdateIoTCloudConnectorAttributeRequest): Promise<UpdateIoTCloudConnectorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIoTCloudConnectorAttributeWithOptions(request, runtime);
  }

  async updateServiceAttributeWithOptions(request: UpdateServiceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServiceAttributeResponse>(await this.doRPCRequest("UpdateServiceAttribute", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServiceAttributeResponse({}));
  }

  async updateServiceAttribute(request: UpdateServiceAttributeRequest): Promise<UpdateServiceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceAttributeWithOptions(request, runtime);
  }

  async updateServiceEntryAttributeWithOptions(request: UpdateServiceEntryAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceEntryAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateServiceEntryAttributeResponse>(await this.doRPCRequest("UpdateServiceEntryAttribute", "2021-05-13", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateServiceEntryAttributeResponse({}));
  }

  async updateServiceEntryAttribute(request: UpdateServiceEntryAttributeRequest): Promise<UpdateServiceEntryAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceEntryAttributeWithOptions(request, runtime);
  }

}
