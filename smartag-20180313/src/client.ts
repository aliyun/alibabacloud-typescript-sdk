// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateSmartAccessGatewayResponseBody extends $tea.Model {
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

export class ActivateSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ActivateSmartAccessGatewayResponseBody;
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
      body: ActivateSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogRequest extends $tea.Model {
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogResponseBody extends $tea.Model {
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

export class ActiveFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ActiveFlowLogResponseBody;
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
      body: ActiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleRequest extends $tea.Model {
  aclId?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: string[];
  dpiSignatureIds?: string[];
  ipProtocol?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  policy?: string;
  priority?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceCidr?: string;
  sourcePortRange?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policy: 'Policy',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      ipProtocol: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policy: 'string',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBody extends $tea.Model {
  aclId?: string;
  acrId?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: AddACLRuleResponseBodyDpiGroupIds;
  dpiSignatureIds?: AddACLRuleResponseBodyDpiSignatureIds;
  gmtCreate?: number;
  ipProtocol?: string;
  name?: string;
  policy?: string;
  priority?: number;
  requestId?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      acrId: 'AcrId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      policy: 'Policy',
      priority: 'Priority',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      acrId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: AddACLRuleResponseBodyDpiGroupIds,
      dpiSignatureIds: AddACLRuleResponseBodyDpiSignatureIds,
      gmtCreate: 'number',
      ipProtocol: 'string',
      name: 'string',
      policy: 'string',
      priority: 'number',
      requestId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddACLRuleResponseBody;
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
      body: AddACLRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnatEntryRequest extends $tea.Model {
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sagId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnatEntryResponseBody extends $tea.Model {
  dnatEntryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dnatEntryId: 'DnatEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDnatEntryResponseBody;
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
      body: AddDnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmartAccessGatewayDnsForwardRequest extends $tea.Model {
  domain?: string;
  masterIp?: string;
  mode?: string;
  outboundPortIndex?: string;
  outboundPortName?: string;
  outboundPortType?: string;
  regionId?: string;
  sagInsId?: string;
  sagSn?: string;
  slaveIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      masterIp: 'MasterIp',
      mode: 'Mode',
      outboundPortIndex: 'OutboundPortIndex',
      outboundPortName: 'OutboundPortName',
      outboundPortType: 'OutboundPortType',
      regionId: 'RegionId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      slaveIp: 'SlaveIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      masterIp: 'string',
      mode: 'string',
      outboundPortIndex: 'string',
      outboundPortName: 'string',
      outboundPortType: 'string',
      regionId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      slaveIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmartAccessGatewayDnsForwardResponseBody extends $tea.Model {
  code?: string;
  data?: AddSmartAccessGatewayDnsForwardResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddSmartAccessGatewayDnsForwardResponseBodyData,
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

export class AddSmartAccessGatewayDnsForwardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSmartAccessGatewayDnsForwardResponseBody;
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
      body: AddSmartAccessGatewayDnsForwardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnatEntryRequest extends $tea.Model {
  cidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      snatIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnatEntryResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSnatEntryResponseBody;
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
      body: AddSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateACLRequest extends $tea.Model {
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateACLResponseBody extends $tea.Model {
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

export class AssociateACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateACLResponseBody;
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
      body: AssociateACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateFlowLogRequest extends $tea.Model {
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateFlowLogResponseBody extends $tea.Model {
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

export class AssociateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateFlowLogResponseBody;
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
      body: AssociateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateQosResponseBody extends $tea.Model {
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

export class AssociateQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateQosResponseBody;
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
      body: AssociateQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateSmartAGWithApplicationBandwidthPackageRequest extends $tea.Model {
  applicationBandwidthPackageId?: string;
  associateConfigs?: AssociateSmartAGWithApplicationBandwidthPackageRequestAssociateConfigs[];
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      associateConfigs: 'AssociateConfigs',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationBandwidthPackageId: 'string',
      associateConfigs: { 'type': 'array', 'itemType': AssociateSmartAGWithApplicationBandwidthPackageRequestAssociateConfigs },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateSmartAGWithApplicationBandwidthPackageResponseBody extends $tea.Model {
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

export class AssociateSmartAGWithApplicationBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateSmartAGWithApplicationBandwidthPackageResponseBody;
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
      body: AssociateSmartAGWithApplicationBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSerialNumberRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSerialNumberResponseBody extends $tea.Model {
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

export class BindSerialNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindSerialNumberResponseBody;
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
      body: BindSerialNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSmartAccessGatewayRequest extends $tea.Model {
  ccnId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSmartAccessGatewayResponseBody extends $tea.Model {
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

export class BindSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindSmartAccessGatewayResponseBody;
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
      body: BindSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGUid?: number;
  vbrId?: string;
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      vbrId: 'VbrId',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGUid: 'number',
      vbrId: 'string',
      vbrRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindVbrResponseBody extends $tea.Model {
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

export class BindVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindVbrResponseBody;
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
      body: BindVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagCipherRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sagId?: string;
  snNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
      snNumber: 'SnNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
      snNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagCipherResponseBody extends $tea.Model {
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

export class ClearSagCipherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClearSagCipherResponseBody;
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
      body: ClearSagCipherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagRouteableAddressRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearSagRouteableAddressResponseBody extends $tea.Model {
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

export class ClearSagRouteableAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClearSagRouteableAddressResponseBody;
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
      body: ClearSagRouteableAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateACLRequest extends $tea.Model {
  aclType?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateACLResponseBody extends $tea.Model {
  aclId?: string;
  aclType?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateACLResponseBody;
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
      body: CreateACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudConnectNetworkRequest extends $tea.Model {
  cidrBlock?: string;
  description?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  snatCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snatCidrBlock: 'SnatCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snatCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudConnectNetworkResponseBody extends $tea.Model {
  ccnId?: string;
  cidrBlock?: string;
  description?: string;
  name?: string;
  requestId?: string;
  resourceGroupId?: string;
  snatCidrBlock?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      snatCidrBlock: 'SnatCidrBlock',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cidrBlock: 'string',
      description: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      snatCidrBlock: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudConnectNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCloudConnectNetworkResponseBody;
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
      body: CreateCloudConnectNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseCodeRequest extends $tea.Model {
  clientToken?: string;
  enterpriseCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enterpriseCode: 'EnterpriseCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enterpriseCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseCodeResponseBody extends $tea.Model {
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

export class CreateEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEnterpriseCodeResponseBody;
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
      body: CreateEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogRequest extends $tea.Model {
  activeAging?: number;
  description?: string;
  inactiveAging?: number;
  logstoreName?: string;
  name?: string;
  netflowServerIp?: string;
  netflowServerPort?: number;
  netflowVersion?: string;
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAging: 'ActiveAging',
      description: 'Description',
      inactiveAging: 'InactiveAging',
      logstoreName: 'LogstoreName',
      name: 'Name',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
      outputType: 'OutputType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAging: 'number',
      description: 'string',
      inactiveAging: 'number',
      logstoreName: 'string',
      name: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'number',
      netflowVersion: 'string',
      outputType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slsRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogResponseBody extends $tea.Model {
  flowLogId?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFlowLogResponseBody;
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
      body: CreateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckRequest extends $tea.Model {
  description?: string;
  dstIpAddr?: string;
  dstPort?: number;
  failCountThreshold?: number;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  probeCount?: number;
  probeInterval?: number;
  probeTimeout?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  rttFailThreshold?: number;
  rttThreshold?: number;
  smartAGId?: string;
  srcIpAddr?: string;
  srcPort?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rttFailThreshold: 'RttFailThreshold',
      rttThreshold: 'RttThreshold',
      smartAGId: 'SmartAGId',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rttFailThreshold: 'number',
      rttThreshold: 'number',
      smartAGId: 'string',
      srcIpAddr: 'string',
      srcPort: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateHealthCheckResponseBody;
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
      body: CreateHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProbeTaskRequest extends $tea.Model {
  domain?: string;
  enable?: boolean;
  packetNumber?: number;
  port?: number;
  probeTaskSourceAddress?: string;
  protocol?: string;
  regionId?: string;
  sagId?: string;
  sn?: string;
  taskName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      packetNumber: 'number',
      port: 'number',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProbeTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProbeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProbeTaskResponseBody;
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
      body: CreateProbeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosDescription?: string;
  qosName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosDescription: 'QosDescription',
      qosName: 'QosName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosDescription: 'string',
      qosName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosResponseBody extends $tea.Model {
  qosId?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQosResponseBody;
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
      body: CreateQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosCarRequest extends $tea.Model {
  description?: string;
  limitType?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  minBandwidthAbs?: number;
  minBandwidthPercent?: number;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  percentSourceType?: string;
  priority?: number;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosCarResponseBody extends $tea.Model {
  description?: string;
  limitType?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  minBandwidthAbs?: number;
  minBandwidthPercent?: number;
  percentSourceType?: string;
  priority?: number;
  qosCarId?: string;
  qosId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosCarId: 'string',
      qosId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosCarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQosCarResponseBody;
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
      body: CreateQosCarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyRequest extends $tea.Model {
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  dpiGroupIds?: string[];
  dpiSignatureIds?: string[];
  endTime?: string;
  ipProtocol?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  priority?: number;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceCidr?: string;
  sourcePortRange?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBody extends $tea.Model {
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  dpiGroupIds?: CreateQosPolicyResponseBodyDpiGroupIds;
  dpiSignatureIds?: CreateQosPolicyResponseBodyDpiSignatureIds;
  endTime?: string;
  ipProtocol?: string;
  name?: string;
  priority?: number;
  qosId?: string;
  qosPolicyId?: string;
  requestId?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: CreateQosPolicyResponseBodyDpiGroupIds,
      dpiSignatureIds: CreateQosPolicyResponseBodyDpiSignatureIds,
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      requestId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQosPolicyResponseBody;
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
      body: CreateQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagExpressConnectInterfaceRequest extends $tea.Model {
  IP?: string;
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagExpressConnectInterfaceResponseBody extends $tea.Model {
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

export class CreateSagExpressConnectInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSagExpressConnectInterfaceResponseBody;
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
      body: CreateSagExpressConnectInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagStaticRouteRequest extends $tea.Model {
  destinationCidr?: string;
  nextHop?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHop: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSagStaticRouteResponseBody extends $tea.Model {
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

export class CreateSagStaticRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSagStaticRouteResponseBody;
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
      body: CreateSagStaticRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAddressRequest extends $tea.Model {
  address?: string;
  addressType?: string;
  regionId?: string;
  sagId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAddressResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceAddressResponseBody;
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
      body: CreateServiceAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayRequest extends $tea.Model {
  alreadyHaveSag?: boolean;
  autoPay?: boolean;
  buyerMessage?: string;
  CPEVersion?: string;
  chargeType?: string;
  description?: string;
  haType?: string;
  hardWareSpec?: string;
  maxBandWidth?: number;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: number;
  receiverAddress?: string;
  receiverCity?: string;
  receiverCountry?: string;
  receiverDistrict?: string;
  receiverEmail?: string;
  receiverMobile?: string;
  receiverName?: string;
  receiverPhone?: string;
  receiverState?: string;
  receiverTown?: string;
  receiverZip?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyHaveSag: 'AlreadyHaveSag',
      autoPay: 'AutoPay',
      buyerMessage: 'BuyerMessage',
      CPEVersion: 'CPEVersion',
      chargeType: 'ChargeType',
      description: 'Description',
      haType: 'HaType',
      hardWareSpec: 'HardWareSpec',
      maxBandWidth: 'MaxBandWidth',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      receiverAddress: 'ReceiverAddress',
      receiverCity: 'ReceiverCity',
      receiverCountry: 'ReceiverCountry',
      receiverDistrict: 'ReceiverDistrict',
      receiverEmail: 'ReceiverEmail',
      receiverMobile: 'ReceiverMobile',
      receiverName: 'ReceiverName',
      receiverPhone: 'ReceiverPhone',
      receiverState: 'ReceiverState',
      receiverTown: 'ReceiverTown',
      receiverZip: 'ReceiverZip',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyHaveSag: 'boolean',
      autoPay: 'boolean',
      buyerMessage: 'string',
      CPEVersion: 'string',
      chargeType: 'string',
      description: 'string',
      haType: 'string',
      hardWareSpec: 'string',
      maxBandWidth: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      receiverAddress: 'string',
      receiverCity: 'string',
      receiverCountry: 'string',
      receiverDistrict: 'string',
      receiverEmail: 'string',
      receiverMobile: 'string',
      receiverName: 'string',
      receiverPhone: 'string',
      receiverState: 'string',
      receiverTown: 'string',
      receiverZip: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayResponseBody extends $tea.Model {
  description?: string;
  name?: string;
  orderId?: string;
  requestId?: string;
  resourceGroupId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      orderId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSmartAccessGatewayResponseBody;
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
      body: CreateSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayClientUserRequest extends $tea.Model {
  bandwidth?: number;
  clientIp?: string;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userMail?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientIp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userMail: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayClientUserResponseBody extends $tea.Model {
  bandwidth?: number;
  clientIp?: string;
  requestId?: string;
  userMail?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      requestId: 'RequestId',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientIp: 'string',
      requestId: 'string',
      userMail: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewayClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSmartAccessGatewayClientUserResponseBody;
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
      body: CreateSmartAccessGatewayClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewaySoftwareRequest extends $tea.Model {
  autoPay?: boolean;
  chargeType?: string;
  dataPlan?: number;
  ownerAccount?: string;
  ownerId?: number;
  period?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      dataPlan: 'DataPlan',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      dataPlan: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewaySoftwareResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  resourceGroupId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSmartAccessGatewaySoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSmartAccessGatewaySoftwareResponseBody;
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
      body: CreateSmartAccessGatewaySoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogRequest extends $tea.Model {
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogResponseBody extends $tea.Model {
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

export class DeactiveFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeactiveFlowLogResponseBody;
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
      body: DeactiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLRequest extends $tea.Model {
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLResponseBody extends $tea.Model {
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

export class DeleteACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteACLResponseBody;
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
      body: DeleteACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLRuleRequest extends $tea.Model {
  aclId?: string;
  acrId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      acrId: 'AcrId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      acrId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteACLRuleResponseBody extends $tea.Model {
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

export class DeleteACLRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteACLRuleResponseBody;
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
      body: DeleteACLRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudConnectNetworkRequest extends $tea.Model {
  ccnId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudConnectNetworkResponseBody extends $tea.Model {
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

export class DeleteCloudConnectNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCloudConnectNetworkResponseBody;
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
      body: DeleteCloudConnectNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnatEntryRequest extends $tea.Model {
  dnatEntryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      dnatEntryId: 'DnatEntryId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntryId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnatEntryResponseBody extends $tea.Model {
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

export class DeleteDnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDnatEntryResponseBody;
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
      body: DeleteDnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseCodeRequest extends $tea.Model {
  clientToken?: string;
  enterpriseCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enterpriseCode: 'EnterpriseCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enterpriseCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseCodeResponseBody extends $tea.Model {
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

export class DeleteEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnterpriseCodeResponseBody;
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
      body: DeleteEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogRequest extends $tea.Model {
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogResponseBody extends $tea.Model {
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

export class DeleteFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFlowLogResponseBody;
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
      body: DeleteFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckRequest extends $tea.Model {
  hcInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      hcInstanceId: 'HcInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hcInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHealthCheckResponseBody extends $tea.Model {
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

export class DeleteHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteHealthCheckResponseBody;
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
      body: DeleteHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProbeTaskRequest extends $tea.Model {
  probeTaskId?: string;
  regionId?: string;
  sagId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      probeTaskId: 'ProbeTaskId',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probeTaskId: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProbeTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProbeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProbeTaskResponseBody;
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
      body: DeleteProbeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosResponseBody extends $tea.Model {
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

export class DeleteQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQosResponseBody;
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
      body: DeleteQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosCarRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosCarId?: string;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosCarId: 'string',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosCarResponseBody extends $tea.Model {
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

export class DeleteQosCarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQosCarResponseBody;
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
      body: DeleteQosCarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosId?: string;
  qosPolicyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQosPolicyResponseBody extends $tea.Model {
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

export class DeleteQosPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQosPolicyResponseBody;
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
      body: DeleteQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteDistributionStrategyRequest extends $tea.Model {
  destCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeSource?: string;
  smartAGId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrBlock: 'DestCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeSource: 'RouteSource',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeSource: 'string',
      smartAGId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteDistributionStrategyResponseBody extends $tea.Model {
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

export class DeleteRouteDistributionStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRouteDistributionStrategyResponseBody;
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
      body: DeleteRouteDistributionStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagExpressConnectInterfaceRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagExpressConnectInterfaceResponseBody extends $tea.Model {
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

export class DeleteSagExpressConnectInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSagExpressConnectInterfaceResponseBody;
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
      body: DeleteSagExpressConnectInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagStaticRouteRequest extends $tea.Model {
  destinationCidr?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSagStaticRouteResponseBody extends $tea.Model {
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

export class DeleteSagStaticRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSagStaticRouteResponseBody;
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
      body: DeleteSagStaticRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAddressRequest extends $tea.Model {
  address?: string;
  addressType?: string;
  regionId?: string;
  sagId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAddressResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceAddressResponseBody;
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
      body: DeleteServiceAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayResponseBody extends $tea.Model {
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

export class DeleteSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSmartAccessGatewayResponseBody;
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
      body: DeleteSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayClientUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayClientUserResponseBody extends $tea.Model {
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

export class DeleteSmartAccessGatewayClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSmartAccessGatewayClientUserResponseBody;
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
      body: DeleteSmartAccessGatewayClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayDnsForwardRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayDnsForwardResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSmartAccessGatewayDnsForwardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSmartAccessGatewayDnsForwardResponseBody;
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
      body: DeleteSmartAccessGatewayDnsForwardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryRequest extends $tea.Model {
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryResponseBody extends $tea.Model {
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

export class DeleteSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSnatEntryResponseBody;
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
      body: DeleteSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeRequest extends $tea.Model {
  aclId?: string;
  direction?: string;
  name?: string;
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      direction: 'Direction',
      name: 'Name',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      direction: 'string',
      name: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBody extends $tea.Model {
  acrs?: DescribeACLAttributeResponseBodyAcrs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acrs: 'Acrs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrs: DescribeACLAttributeResponseBodyAcrs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeACLAttributeResponseBody;
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
      body: DescribeACLAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsRequest extends $tea.Model {
  aclIds?: string;
  aclType?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclType: 'AclType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: 'string',
      aclType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBody extends $tea.Model {
  acls?: DescribeACLsResponseBodyAcls;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: DescribeACLsResponseBodyAcls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeACLsResponseBody;
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
      body: DescribeACLsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysRequest extends $tea.Model {
  ccnId?: string;
  crossAccount?: boolean;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      crossAccount: 'CrossAccount',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      crossAccount: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  smartAccessGateways?: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      smartAccessGateways: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBindableSmartAccessGatewaysResponseBody;
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
      body: DescribeBindableSmartAccessGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientUserDNSRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientUserDNSResponseBody extends $tea.Model {
  appDNS?: string[];
  recoveredDNS?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appDNS: 'AppDNS',
      recoveredDNS: 'RecoveredDNS',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDNS: { 'type': 'array', 'itemType': 'string' },
      recoveredDNS: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientUserDNSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClientUserDNSResponseBody;
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
      body: DescribeClientUserDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksRequest extends $tea.Model {
  ccnId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: DescribeCloudConnectNetworksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBody extends $tea.Model {
  cloudConnectNetworks?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudConnectNetworks: 'CloudConnectNetworks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudConnectNetworks: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudConnectNetworksResponseBody;
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
      body: DescribeCloudConnectNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceAutoUpgradePolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceAutoUpgradePolicyResponseBody extends $tea.Model {
  cronExpression?: string;
  duration?: string;
  jitter?: string;
  requestId?: string;
  serialNumber?: string;
  smartAGId?: string;
  timeZone?: string;
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      duration: 'Duration',
      jitter: 'Jitter',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      timeZone: 'TimeZone',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      duration: 'string',
      jitter: 'string',
      requestId: 'string',
      serialNumber: 'string',
      smartAGId: 'string',
      timeZone: 'string',
      upgradeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceAutoUpgradePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDeviceAutoUpgradePolicyResponseBody;
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
      body: DescribeDeviceAutoUpgradePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sagId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBody extends $tea.Model {
  dnatEntries?: DescribeDnatEntriesResponseBodyDnatEntries;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dnatEntries: 'DnatEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntries: DescribeDnatEntriesResponseBodyDnatEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnatEntriesResponseBody;
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
      body: DescribeDnatEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsRequest extends $tea.Model {
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  sags?: DescribeFlowLogSagsResponseBodySags;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sags: 'Sags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sags: DescribeFlowLogSagsResponseBodySags,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFlowLogSagsResponseBody;
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
      body: DescribeFlowLogSagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsRequest extends $tea.Model {
  description?: string;
  flowLogId?: string;
  flowLogName?: string;
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      outputType: 'OutputType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      outputType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBody extends $tea.Model {
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      flowLogs: 'FlowLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogs: DescribeFlowLogsResponseBodyFlowLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFlowLogsResponseBody;
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
      body: DescribeFlowLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesRequest extends $tea.Model {
  associatedCcnId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      associatedCcnId: 'AssociatedCcnId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCcnId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBody extends $tea.Model {
  grantRules?: DescribeGrantRulesResponseBodyGrantRules;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: DescribeGrantRulesResponseBodyGrantRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGrantRulesResponseBody;
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
      body: DescribeGrantRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBody extends $tea.Model {
  grantRules?: DescribeGrantSagRulesResponseBodyGrantRules;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: DescribeGrantSagRulesResponseBodyGrantRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGrantSagRulesResponseBody;
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
      body: DescribeGrantSagRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  vbrInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      vbrInstanceId: 'VbrInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      vbrInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBody extends $tea.Model {
  grantRules?: DescribeGrantSagVbrRulesResponseBodyGrantRules;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      grantRules: 'GrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRules: DescribeGrantSagVbrRulesResponseBodyGrantRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGrantSagVbrRulesResponseBody;
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
      body: DescribeGrantSagVbrRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckAttributeRequest extends $tea.Model {
  hcInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      hcInstanceId: 'HcInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hcInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckAttributeResponseBody extends $tea.Model {
  createTime?: number;
  description?: string;
  dstIpAddr?: string;
  dstPort?: number;
  failCountThreshold?: number;
  hcInstanceId?: string;
  name?: string;
  probeCount?: number;
  probeInterval?: number;
  probeTimeout?: number;
  requestId?: string;
  rttFailThreshold?: number;
  rttThreshold?: number;
  smartAGId?: string;
  srcIpAddr?: string;
  srcPort?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      requestId: 'RequestId',
      rttFailThreshold: 'RttFailThreshold',
      rttThreshold: 'RttThreshold',
      smartAGId: 'SmartAGId',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      hcInstanceId: 'string',
      name: 'string',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      requestId: 'string',
      rttFailThreshold: 'number',
      rttThreshold: 'number',
      smartAGId: 'string',
      srcIpAddr: 'string',
      srcPort: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHealthCheckAttributeResponseBody;
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
      body: DescribeHealthCheckAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksRequest extends $tea.Model {
  hcInstanceId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hcInstanceId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBody extends $tea.Model {
  healthChecks?: DescribeHealthChecksResponseBodyHealthChecks;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthChecks: 'HealthChecks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthChecks: DescribeHealthChecksResponseBodyHealthChecks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHealthChecksResponseBody;
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
      body: DescribeHealthChecksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsRequest extends $tea.Model {
  description?: string;
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  qosCarId?: string;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      qosCarId: 'string',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  qosCars?: DescribeQosCarsResponseBodyQosCars;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosCars: 'QosCars',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      qosCars: DescribeQosCarsResponseBodyQosCars,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeQosCarsResponseBody;
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
      body: DescribeQosCarsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesRequest extends $tea.Model {
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  priority?: number;
  qosId?: string;
  qosPolicyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  qosPolicies?: DescribeQosPoliciesResponseBodyQosPolicies;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosPolicies: 'QosPolicies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      qosPolicies: DescribeQosPoliciesResponseBodyQosPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeQosPoliciesResponseBody;
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
      body: DescribeQosPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  qosIds?: string;
  qosName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosIds: 'QosIds',
      qosName: 'QosName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      qosIds: 'string',
      qosName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  qoses?: DescribeQosesResponseBodyQoses;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qoses: 'Qoses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      qoses: DescribeQosesResponseBodyQoses,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeQosesResponseBody;
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
      body: DescribeQosesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class DescribeRouteDistributionStrategiesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  strategies?: DescribeRouteDistributionStrategiesResponseBodyStrategies;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeRouteDistributionStrategiesResponseBodyStrategies,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRouteDistributionStrategiesResponseBody;
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
      body: DescribeRouteDistributionStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSAGDeviceInfoRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSAGDeviceInfoResponseBody extends $tea.Model {
  controllerState?: string;
  lastConnectedControllerTime?: string;
  requestId?: string;
  resettableStatus?: string;
  serviceIP?: string;
  smartAGType?: string;
  startupTime?: string;
  synStatus?: string;
  version?: string;
  vpnState?: string;
  static names(): { [key: string]: string } {
    return {
      controllerState: 'ControllerState',
      lastConnectedControllerTime: 'LastConnectedControllerTime',
      requestId: 'RequestId',
      resettableStatus: 'ResettableStatus',
      serviceIP: 'ServiceIP',
      smartAGType: 'SmartAGType',
      startupTime: 'StartupTime',
      synStatus: 'SynStatus',
      version: 'Version',
      vpnState: 'VpnState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controllerState: 'string',
      lastConnectedControllerTime: 'string',
      requestId: 'string',
      resettableStatus: 'string',
      serviceIP: 'string',
      smartAGType: 'string',
      startupTime: 'string',
      synStatus: 'string',
      version: 'string',
      vpnState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSAGDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSAGDeviceInfoResponseBody;
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
      body: DescribeSAGDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagCurrentDnsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagCurrentDnsResponseBody extends $tea.Model {
  masterDns?: string;
  requestId?: string;
  slaveDns?: string;
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      requestId: 'string',
      slaveDns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagCurrentDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagCurrentDnsResponseBody;
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
      body: DescribeSagCurrentDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponseBody extends $tea.Model {
  dropTopN?: DescribeSagDropTopNResponseBodyDropTopN[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dropTopN: 'DropTopN',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropTopN: { 'type': 'array', 'itemType': DescribeSagDropTopNResponseBodyDropTopN },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagDropTopNResponseBody;
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
      body: DescribeSagDropTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBody extends $tea.Model {
  interfaces?: DescribeSagExpressConnectInterfaceListResponseBodyInterfaces[];
  requestId?: string;
  taskStates?: DescribeSagExpressConnectInterfaceListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyInterfaces },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagExpressConnectInterfaceListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagExpressConnectInterfaceListResponseBody;
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
      body: DescribeSagExpressConnectInterfaceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolResponseBody extends $tea.Model {
  requestId?: string;
  routeProtocol?: string;
  taskStates?: DescribeSagGlobalRouteProtocolResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeProtocol: 'RouteProtocol',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeProtocol: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagGlobalRouteProtocolResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagGlobalRouteProtocolResponseBody;
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
      body: DescribeSagGlobalRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBody extends $tea.Model {
  mode?: string;
  ports?: DescribeSagHaResponseBodyPorts[];
  requestId?: string;
  taskStates?: DescribeSagHaResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      ports: { 'type': 'array', 'itemType': DescribeSagHaResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagHaResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagHaResponseBody;
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
      body: DescribeSagHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBody extends $tea.Model {
  lans?: DescribeSagLanListResponseBodyLans[];
  requestId?: string;
  taskStates?: DescribeSagLanListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      lans: 'Lans',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lans: { 'type': 'array', 'itemType': DescribeSagLanListResponseBodyLans },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagLanListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagLanListResponseBody;
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
      body: DescribeSagLanListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortResponseBody extends $tea.Model {
  gateway?: string;
  IP?: string;
  mask?: string;
  requestId?: string;
  taskStates?: DescribeSagManagementPortResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
      IP: 'IP',
      mask: 'Mask',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: 'string',
      IP: 'string',
      mask: 'string',
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagManagementPortResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagManagementPortResponseBody;
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
      body: DescribeSagManagementPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGIds: 'SmartAGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  sagStatistics?: DescribeSagOnlineClientStatisticsResponseBodySagStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagStatistics: 'SagStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagStatistics: DescribeSagOnlineClientStatisticsResponseBodySagStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagOnlineClientStatisticsResponseBody;
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
      body: DescribeSagOnlineClientStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBody extends $tea.Model {
  ports?: DescribeSagPortListResponseBodyPorts[];
  requestId?: string;
  taskStates?: DescribeSagPortListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeSagPortListResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagPortListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagPortListResponseBody;
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
      body: DescribeSagPortListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponseBody extends $tea.Model {
  ports?: DescribeSagPortRouteProtocolListResponseBodyPorts[];
  requestId?: string;
  taskStates?: DescribeSagPortRouteProtocolListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeSagPortRouteProtocolListResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagPortRouteProtocolListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagPortRouteProtocolListResponseBody;
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
      body: DescribeSagPortRouteProtocolListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  remoteAccesses?: DescribeSagRemoteAccessResponseBodyRemoteAccesses;
  requestId?: string;
  smartAGId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      remoteAccesses: 'RemoteAccesses',
      requestId: 'RequestId',
      smartAGId: 'SmartAGId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      remoteAccesses: DescribeSagRemoteAccessResponseBodyRemoteAccesses,
      requestId: 'string',
      smartAGId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagRemoteAccessResponseBody;
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
      body: DescribeSagRemoteAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponseBody extends $tea.Model {
  requestId?: string;
  routes?: DescribeSagRouteListResponseBodyRoutes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': DescribeSagRouteListResponseBodyRoutes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagRouteListResponseBody;
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
      body: DescribeSagRouteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpResponseBody extends $tea.Model {
  holdTime?: number;
  keepAlive?: number;
  localAs?: number;
  requestId?: string;
  routerId?: string;
  taskStates?: DescribeSagRouteProtocolBgpResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      requestId: 'RequestId',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      requestId: 'string',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagRouteProtocolBgpResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagRouteProtocolBgpResponseBody;
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
      body: DescribeSagRouteProtocolBgpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfResponseBody extends $tea.Model {
  areaId?: string;
  areaType?: string;
  authenticationType?: string;
  deadTime?: number;
  helloTime?: number;
  md5Key?: string;
  md5KeyId?: number;
  requestId?: string;
  routerId?: string;
  taskStates?: DescribeSagRouteProtocolOspfResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaType: 'AreaType',
      authenticationType: 'AuthenticationType',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      requestId: 'RequestId',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      areaType: 'string',
      authenticationType: 'string',
      deadTime: 'number',
      helloTime: 'number',
      md5Key: 'string',
      md5KeyId: 'number',
      requestId: 'string',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagRouteProtocolOspfResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagRouteProtocolOspfResponseBody;
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
      body: DescribeSagRouteProtocolOspfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponseBody extends $tea.Model {
  requestId?: string;
  staticRoutes?: DescribeSagStaticRouteListResponseBodyStaticRoutes[];
  taskStates?: DescribeSagStaticRouteListResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      staticRoutes: 'StaticRoutes',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      staticRoutes: { 'type': 'array', 'itemType': DescribeSagStaticRouteListResponseBodyStaticRoutes },
      taskStates: { 'type': 'array', 'itemType': DescribeSagStaticRouteListResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagStaticRouteListResponseBody;
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
      body: DescribeSagStaticRouteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponseBody extends $tea.Model {
  requestId?: string;
  trafficTopN?: DescribeSagTrafficTopNResponseBodyTrafficTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficTopN: 'TrafficTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficTopN: { 'type': 'array', 'itemType': DescribeSagTrafficTopNResponseBodyTrafficTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagTrafficTopNResponseBody;
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
      body: DescribeSagTrafficTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsResponseBody extends $tea.Model {
  masterDns?: string;
  requestId?: string;
  slaveDns?: string;
  taskStates?: DescribeSagUserDnsResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      requestId: 'string',
      slaveDns: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagUserDnsResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagUserDnsResponseBody;
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
      body: DescribeSagUserDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vbrInstanceIds?: string[];
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceIds: 'VbrInstanceIds',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceIds: { 'type': 'array', 'itemType': 'string' },
      vbrRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponseBody extends $tea.Model {
  requestId?: string;
  sagVbrRelations?: DescribeSagVbrRelationsResponseBodySagVbrRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagVbrRelations: 'SagVbrRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagVbrRelations: { 'type': 'array', 'itemType': DescribeSagVbrRelationsResponseBodySagVbrRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagVbrRelationsResponseBody;
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
      body: DescribeSagVbrRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWan4GRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWan4GResponseBody extends $tea.Model {
  ip?: string;
  mac?: string;
  priority?: number;
  requestId?: string;
  status?: string;
  strength?: string;
  trafficState?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      mac: 'Mac',
      priority: 'Priority',
      requestId: 'RequestId',
      status: 'Status',
      strength: 'Strength',
      trafficState: 'TrafficState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      mac: 'string',
      priority: 'number',
      requestId: 'string',
      status: 'string',
      strength: 'string',
      trafficState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWan4GResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagWan4GResponseBody;
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
      body: DescribeSagWan4GResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBody extends $tea.Model {
  requestId?: string;
  taskStates?: DescribeSagWanListResponseBodyTaskStates[];
  wans?: DescribeSagWanListResponseBodyWans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStates: 'TaskStates',
      wans: 'Wans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWanListResponseBodyTaskStates },
      wans: { 'type': 'array', 'itemType': DescribeSagWanListResponseBodyWans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagWanListResponseBody;
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
      body: DescribeSagWanListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatResponseBody extends $tea.Model {
  requestId?: string;
  snat?: string;
  taskStates?: DescribeSagWanSnatResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snat: 'Snat',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snat: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWanSnatResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagWanSnatResponseBody;
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
      body: DescribeSagWanSnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiResponseBody extends $tea.Model {
  authenticationType?: string;
  bandwidth?: string;
  channel?: string;
  encryptAlgorithm?: string;
  isAuth?: string;
  isBroadcast?: string;
  isEnable?: string;
  requestId?: string;
  ssid?: string;
  taskStates?: DescribeSagWifiResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      bandwidth: 'Bandwidth',
      channel: 'Channel',
      encryptAlgorithm: 'EncryptAlgorithm',
      isAuth: 'IsAuth',
      isBroadcast: 'IsBroadcast',
      isEnable: 'IsEnable',
      requestId: 'RequestId',
      ssid: 'Ssid',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      bandwidth: 'string',
      channel: 'string',
      encryptAlgorithm: 'string',
      isAuth: 'string',
      isBroadcast: 'string',
      isEnable: 'string',
      requestId: 'string',
      ssid: 'string',
      taskStates: { 'type': 'array', 'itemType': DescribeSagWifiResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSagWifiResponseBody;
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
      body: DescribeSagWifiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBody extends $tea.Model {
  accelerateBandwidth?: number;
  accessPointId?: string;
  aclIds?: DescribeSmartAccessGatewayAttributeResponseBodyAclIds;
  applicationBandwidthPackageBussinessStatus?: string;
  applicationBandwidthPackageId?: string;
  applicationBandwidthPackageName?: string;
  applicationBandwidthPackageOperationLocks?: DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks;
  associatedCcnId?: string;
  associatedCcnName?: string;
  backupBoxControllerIp?: string;
  boxControllerIp?: string;
  cidrBlock?: string;
  city?: string;
  createTime?: number;
  dataPlan?: number;
  description?: string;
  devices?: DescribeSmartAccessGatewayAttributeResponseBodyDevices;
  enableOptimization?: boolean;
  enableSoftwareConnectionAudit?: boolean;
  endTime?: number;
  flowLogIds?: DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds;
  IRIds?: DescribeSmartAccessGatewayAttributeResponseBodyIRIds;
  instanceType?: string;
  ipsecStatus?: string;
  links?: DescribeSmartAccessGatewayAttributeResponseBodyLinks;
  maxBandwidth?: string;
  name?: string;
  optimizationType?: boolean;
  position?: string;
  qosIds?: DescribeSmartAccessGatewayAttributeResponseBodyQosIds;
  requestId?: string;
  resellerInstanceId?: string;
  resellerUid?: string;
  resourceGroupId?: string;
  routingStrategy?: string;
  securityLockThreshold?: number;
  serialNumber?: string;
  smartAGId?: string;
  status?: string;
  trafficMasterSn?: string;
  upBandwidth4G?: number;
  upBandwidthWan?: number;
  userCount?: number;
  vpnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateBandwidth: 'AccelerateBandwidth',
      accessPointId: 'AccessPointId',
      aclIds: 'AclIds',
      applicationBandwidthPackageBussinessStatus: 'ApplicationBandwidthPackageBussinessStatus',
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      applicationBandwidthPackageName: 'ApplicationBandwidthPackageName',
      applicationBandwidthPackageOperationLocks: 'ApplicationBandwidthPackageOperationLocks',
      associatedCcnId: 'AssociatedCcnId',
      associatedCcnName: 'AssociatedCcnName',
      backupBoxControllerIp: 'BackupBoxControllerIp',
      boxControllerIp: 'BoxControllerIp',
      cidrBlock: 'CidrBlock',
      city: 'City',
      createTime: 'CreateTime',
      dataPlan: 'DataPlan',
      description: 'Description',
      devices: 'Devices',
      enableOptimization: 'EnableOptimization',
      enableSoftwareConnectionAudit: 'EnableSoftwareConnectionAudit',
      endTime: 'EndTime',
      flowLogIds: 'FlowLogIds',
      IRIds: 'IRIds',
      instanceType: 'InstanceType',
      ipsecStatus: 'IpsecStatus',
      links: 'Links',
      maxBandwidth: 'MaxBandwidth',
      name: 'Name',
      optimizationType: 'OptimizationType',
      position: 'Position',
      qosIds: 'QosIds',
      requestId: 'RequestId',
      resellerInstanceId: 'ResellerInstanceId',
      resellerUid: 'ResellerUid',
      resourceGroupId: 'ResourceGroupId',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      status: 'Status',
      trafficMasterSn: 'TrafficMasterSn',
      upBandwidth4G: 'UpBandwidth4G',
      upBandwidthWan: 'UpBandwidthWan',
      userCount: 'UserCount',
      vpnStatus: 'VpnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateBandwidth: 'number',
      accessPointId: 'string',
      aclIds: DescribeSmartAccessGatewayAttributeResponseBodyAclIds,
      applicationBandwidthPackageBussinessStatus: 'string',
      applicationBandwidthPackageId: 'string',
      applicationBandwidthPackageName: 'string',
      applicationBandwidthPackageOperationLocks: DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks,
      associatedCcnId: 'string',
      associatedCcnName: 'string',
      backupBoxControllerIp: 'string',
      boxControllerIp: 'string',
      cidrBlock: 'string',
      city: 'string',
      createTime: 'number',
      dataPlan: 'number',
      description: 'string',
      devices: DescribeSmartAccessGatewayAttributeResponseBodyDevices,
      enableOptimization: 'boolean',
      enableSoftwareConnectionAudit: 'boolean',
      endTime: 'number',
      flowLogIds: DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds,
      IRIds: DescribeSmartAccessGatewayAttributeResponseBodyIRIds,
      instanceType: 'string',
      ipsecStatus: 'string',
      links: DescribeSmartAccessGatewayAttributeResponseBodyLinks,
      maxBandwidth: 'string',
      name: 'string',
      optimizationType: 'boolean',
      position: 'string',
      qosIds: DescribeSmartAccessGatewayAttributeResponseBodyQosIds,
      requestId: 'string',
      resellerInstanceId: 'string',
      resellerUid: 'string',
      resourceGroupId: 'string',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      status: 'string',
      trafficMasterSn: 'string',
      upBandwidth4G: 'number',
      upBandwidthWan: 'number',
      userCount: 'number',
      vpnStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmartAccessGatewayAttributeResponseBody;
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
      body: DescribeSmartAccessGatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userMail?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userMail: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  users?: DescribeSmartAccessGatewayClientUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: DescribeSmartAccessGatewayClientUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmartAccessGatewayClientUsersResponseBody;
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
      body: DescribeSmartAccessGatewayClientUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBody extends $tea.Model {
  backupDeviceId?: string;
  deviceLevelBackupState?: string;
  deviceLevelBackupType?: string;
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList;
  mainDeviceId?: string;
  requestId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDeviceId: 'BackupDeviceId',
      deviceLevelBackupState: 'DeviceLevelBackupState',
      deviceLevelBackupType: 'DeviceLevelBackupType',
      linkBackupInfoList: 'LinkBackupInfoList',
      mainDeviceId: 'MainDeviceId',
      requestId: 'RequestId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDeviceId: 'string',
      deviceLevelBackupState: 'string',
      deviceLevelBackupType: 'string',
      linkBackupInfoList: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList,
      mainDeviceId: 'string',
      requestId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmartAccessGatewayHaResponseBody;
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
      body: DescribeSmartAccessGatewayHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBody extends $tea.Model {
  requestId?: string;
  smartAGVersions?: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartAGVersions: 'SmartAGVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartAGVersions: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmartAccessGatewayVersionsResponseBody;
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
      body: DescribeSmartAccessGatewayVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysRequest extends $tea.Model {
  aclIds?: string;
  associatedCcnId?: string;
  associatedCcnName?: string;
  businessState?: string;
  canAssociateQos?: boolean;
  hardwareType?: string;
  instanceType?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  smartAGIds?: string[];
  softwareVersion?: string;
  status?: string;
  unboundAclIds?: string;
  versionComparator?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      associatedCcnId: 'AssociatedCcnId',
      associatedCcnName: 'AssociatedCcnName',
      businessState: 'BusinessState',
      canAssociateQos: 'CanAssociateQos',
      hardwareType: 'HardwareType',
      instanceType: 'InstanceType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      smartAGIds: 'SmartAGIds',
      softwareVersion: 'SoftwareVersion',
      status: 'Status',
      unboundAclIds: 'UnboundAclIds',
      versionComparator: 'VersionComparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: 'string',
      associatedCcnId: 'string',
      associatedCcnName: 'string',
      businessState: 'string',
      canAssociateQos: 'boolean',
      hardwareType: 'string',
      instanceType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      smartAGIds: { 'type': 'array', 'itemType': 'string' },
      softwareVersion: 'string',
      status: 'string',
      unboundAclIds: 'string',
      versionComparator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  smartAccessGateways?: DescribeSmartAccessGatewaysResponseBodySmartAccessGateways;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      smartAccessGateways: DescribeSmartAccessGatewaysResponseBodySmartAccessGateways,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSmartAccessGatewaysResponseBody;
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
      body: DescribeSmartAccessGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snatEntries?: DescribeSnatEntriesResponseBodySnatEntries;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snatEntries: 'SnatEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snatEntries: DescribeSnatEntriesResponseBodySnatEntries,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSnatEntriesResponseBody;
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
      body: DescribeSnatEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBody extends $tea.Model {
  count?: number;
  requestId?: string;
  sags?: DescribeUnbindFlowLogSagsResponseBodySags;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      sags: 'Sags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      sags: DescribeUnbindFlowLogSagsResponseBodySags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUnbindFlowLogSagsResponseBody;
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
      body: DescribeUnbindFlowLogSagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  statisticsDate?: string;
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      statisticsDate: 'StatisticsDate',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      statisticsDate: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  sagStatistics?: DescribeUserFlowStatisticsResponseBodySagStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagStatistics: 'SagStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagStatistics: DescribeUserFlowStatisticsResponseBodySagStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserFlowStatisticsResponseBody;
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
      body: DescribeUserFlowStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  userStatistics?: DescribeUserOnlineClientStatisticsResponseBodyUserStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userStatistics: DescribeUserOnlineClientStatisticsResponseBodyUserStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserOnlineClientStatisticsResponseBody;
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
      body: DescribeUserOnlineClientStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBody extends $tea.Model {
  requestId?: string;
  users?: DescribeUserOnlineClientsResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: DescribeUserOnlineClientsResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserOnlineClientsResponseBody;
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
      body: DescribeUserOnlineClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseSmartAccessGatewayResponseBody extends $tea.Model {
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

export class DiagnoseSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DiagnoseSmartAccessGatewayResponseBody;
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
      body: DiagnoseSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAGDpiMonitorRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAGDpiMonitorResponseBody extends $tea.Model {
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

export class DisableSmartAGDpiMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableSmartAGDpiMonitorResponseBody;
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
      body: DisableSmartAGDpiMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAccessGatewayUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSmartAccessGatewayUserResponseBody extends $tea.Model {
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

export class DisableSmartAccessGatewayUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableSmartAccessGatewayUserResponseBody;
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
      body: DisableSmartAccessGatewayUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateACLRequest extends $tea.Model {
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateACLResponseBody extends $tea.Model {
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

export class DisassociateACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisassociateACLResponseBody;
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
      body: DisassociateACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateFlowLogRequest extends $tea.Model {
  flowLogId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateFlowLogResponseBody extends $tea.Model {
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

export class DisassociateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisassociateFlowLogResponseBody;
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
      body: DisassociateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateQosResponseBody extends $tea.Model {
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

export class DisassociateQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisassociateQosResponseBody;
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
      body: DisassociateQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBody extends $tea.Model {
  diagnoseResult?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseResult: 'DiagnoseResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseResult: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DiscribeSmartAccessGatewayDiagnosisReportResponseBody;
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
      body: DiscribeSmartAccessGatewayDiagnosisReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateSmartAGFromApplicationBandwidthPackageRequest extends $tea.Model {
  applicationBandwidthPackageId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  smartAGId?: string;
  smartAGIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      smartAGIdList: 'SmartAGIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationBandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      smartAGId: 'string',
      smartAGIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateSmartAGFromApplicationBandwidthPackageResponseBody extends $tea.Model {
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

export class DissociateSmartAGFromApplicationBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateSmartAGFromApplicationBandwidthPackageResponseBody;
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
      body: DissociateSmartAGFromApplicationBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewayRequest extends $tea.Model {
  autoPay?: boolean;
  bandWidthSpec?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandWidthSpec: 'BandWidthSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandWidthSpec: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewayResponseBody extends $tea.Model {
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

export class DowngradeSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DowngradeSmartAccessGatewayResponseBody;
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
      body: DowngradeSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewaySoftwareRequest extends $tea.Model {
  autoPay?: boolean;
  dataPlan?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      dataPlan: 'DataPlan',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      dataPlan: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DowngradeSmartAccessGatewaySoftwareResponseBody extends $tea.Model {
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

export class DowngradeSmartAccessGatewaySoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DowngradeSmartAccessGatewaySoftwareResponseBody;
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
      body: DowngradeSmartAccessGatewaySoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAGDpiMonitorRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  slsLogStore?: string;
  slsProjectName?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slsLogStore: 'SlsLogStore',
      slsProjectName: 'SlsProjectName',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slsLogStore: 'string',
      slsProjectName: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAGDpiMonitorResponseBody extends $tea.Model {
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

export class EnableSmartAGDpiMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSmartAGDpiMonitorResponseBody;
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
      body: EnableSmartAGDpiMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAccessGatewayUserRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSmartAccessGatewayUserResponseBody extends $tea.Model {
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

export class EnableSmartAccessGatewayUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSmartAccessGatewayUserResponseBody;
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
      body: EnableSmartAccessGatewayUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclAttributeRequest extends $tea.Model {
  aclId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclAttributeResponseBody extends $tea.Model {
  aclId?: string;
  aclName?: string;
  errorConfigSmartAGCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      errorConfigSmartAGCount: 'ErrorConfigSmartAGCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      errorConfigSmartAGCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAclAttributeResponseBody;
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
      body: GetAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedMonitorStateRequest extends $tea.Model {
  regionId?: string;
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedMonitorStateResponseBody extends $tea.Model {
  code?: string;
  data?: GetAdvancedMonitorStateResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAdvancedMonitorStateResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedMonitorStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAdvancedMonitorStateResponseBody;
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
      body: GetAdvancedMonitorStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudConnectNetworkUseLimitRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudConnectNetworkUseLimitResponseBody extends $tea.Model {
  requestId?: string;
  totalAmount?: number;
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudConnectNetworkUseLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCloudConnectNetworkUseLimitResponseBody;
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
      body: GetCloudConnectNetworkUseLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeRequest extends $tea.Model {
  qosId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBody extends $tea.Model {
  errorConfigSmartAGCount?: number;
  qosCars?: GetQosAttributeResponseBodyQosCars[];
  qosDescription?: string;
  qosName?: string;
  qosPolicies?: GetQosAttributeResponseBodyQosPolicies[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorConfigSmartAGCount: 'ErrorConfigSmartAGCount',
      qosCars: 'QosCars',
      qosDescription: 'QosDescription',
      qosName: 'QosName',
      qosPolicies: 'QosPolicies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorConfigSmartAGCount: 'number',
      qosCars: { 'type': 'array', 'itemType': GetQosAttributeResponseBodyQosCars },
      qosDescription: 'string',
      qosName: 'string',
      qosPolicies: { 'type': 'array', 'itemType': GetQosAttributeResponseBodyQosPolicies },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQosAttributeResponseBody;
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
      body: GetQosAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAGDpiAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAGDpiAttributeResponseBody extends $tea.Model {
  dpiMonitorStatus?: string;
  dpiStatus?: string;
  logstoreName?: string;
  projectName?: string;
  requestId?: string;
  slsRegion?: string;
  static names(): { [key: string]: string } {
    return {
      dpiMonitorStatus: 'DpiMonitorStatus',
      dpiStatus: 'DpiStatus',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      slsRegion: 'SlsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiMonitorStatus: 'string',
      dpiStatus: 'string',
      logstoreName: 'string',
      projectName: 'string',
      requestId: 'string',
      slsRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAGDpiAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSmartAGDpiAttributeResponseBody;
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
      body: GetSmartAGDpiAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAccessGatewayUseLimitRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAccessGatewayUseLimitResponseBody extends $tea.Model {
  requestId?: string;
  totalAmount?: number;
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartAccessGatewayUseLimitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSmartAccessGatewayUseLimitResponseBody;
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
      body: GetSmartAccessGatewayUseLimitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToCbnRequest extends $tea.Model {
  ccnInstanceId?: string;
  cenInstanceId?: string;
  cenUid?: number;
  grantTrafficService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      cenInstanceId: 'CenInstanceId',
      cenUid: 'CenUid',
      grantTrafficService: 'GrantTrafficService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      cenInstanceId: 'string',
      cenUid: 'number',
      grantTrafficService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToCbnResponseBody extends $tea.Model {
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

export class GrantInstanceToCbnResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantInstanceToCbnResponseBody;
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
      body: GrantInstanceToCbnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToCcnRequest extends $tea.Model {
  ccnInstanceId?: string;
  ccnUid?: number;
  grantTrafficService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      grantTrafficService: 'GrantTrafficService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ccnUid: 'number',
      grantTrafficService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToCcnResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToCcnResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantSagInstanceToCcnResponseBody;
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
      body: GrantSagInstanceToCcnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  vbrInstanceId?: string;
  vbrRegionId?: string;
  vbrUid?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      vbrInstanceId: 'VbrInstanceId',
      vbrRegionId: 'VbrRegionId',
      vbrUid: 'VbrUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      vbrInstanceId: 'string',
      vbrRegionId: 'string',
      vbrUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToVbrResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantSagInstanceToVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantSagInstanceToVbrResponseBody;
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
      body: GrantSagInstanceToVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOutClientsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KickOutClientsResponseBody extends $tea.Model {
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

export class KickOutClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KickOutClientsResponseBody;
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
      body: KickOutClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponseBody extends $tea.Model {
  accessPointNetworkQualities?: ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointNetworkQualities: 'AccessPointNetworkQualities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointNetworkQualities: { 'type': 'array', 'itemType': ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessPointNetworkQualitiesResponseBody;
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
      body: ListAccessPointNetworkQualitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponseBody extends $tea.Model {
  accessPoints?: ListAccessPointsResponseBodyAccessPoints[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': ListAccessPointsResponseBodyAccessPoints },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessPointsResponseBody;
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
      body: ListAccessPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableServiceAddressRequest extends $tea.Model {
  addressType?: string;
  regionId?: string;
  sagId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableServiceAddressResponseBody extends $tea.Model {
  code?: string;
  data?: ListAvailableServiceAddressResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAvailableServiceAddressResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableServiceAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAvailableServiceAddressResponseBody;
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
      body: ListAvailableServiceAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorRequest extends $tea.Model {
  dpiConfigType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  ruleInstanceId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      dpiConfigType: 'DpiConfigType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      ruleInstanceId: 'RuleInstanceId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiConfigType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      ruleInstanceId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBody extends $tea.Model {
  dpiConfigError?: ListDpiConfigErrorResponseBodyDpiConfigError[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dpiConfigError: 'DpiConfigError',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiConfigError: { 'type': 'array', 'itemType': ListDpiConfigErrorResponseBodyDpiConfigError },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDpiConfigErrorResponseBody;
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
      body: ListDpiConfigErrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsRequest extends $tea.Model {
  dpiGroupIds?: string[];
  dpiGroupNames?: string[];
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dpiGroupIds: 'DpiGroupIds',
      dpiGroupNames: 'DpiGroupNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiGroupNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponseBody extends $tea.Model {
  dpiGroup?: ListDpiGroupsResponseBodyDpiGroup[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dpiGroup: 'DpiGroup',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroup: { 'type': 'array', 'itemType': ListDpiGroupsResponseBodyDpiGroup },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDpiGroupsResponseBody;
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
      body: ListDpiGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesRequest extends $tea.Model {
  dpiGroupId?: string;
  dpiSignatureIds?: string[];
  dpiSignatureNames?: string[];
  maxResults?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiSignatureNames: 'DpiSignatureNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponseBody extends $tea.Model {
  dpiSignature?: ListDpiSignaturesResponseBodyDpiSignature[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dpiSignature: 'DpiSignature',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignature: { 'type': 'array', 'itemType': ListDpiSignaturesResponseBodyDpiSignature },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDpiSignaturesResponseBody;
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
      body: ListDpiSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeRequest extends $tea.Model {
  enterpriseCode?: string;
  isDefault?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseCode: 'string',
      isDefault: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeResponseBody extends $tea.Model {
  enterpriseCodes?: ListEnterpriseCodeResponseBodyEnterpriseCodes[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseCodes: 'EnterpriseCodes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseCodes: { 'type': 'array', 'itemType': ListEnterpriseCodeResponseBodyEnterpriseCodes },
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

export class ListEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEnterpriseCodeResponseBody;
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
      body: ListEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProbeTaskRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  probeTaskId?: string;
  protocol?: string;
  regionId?: string;
  sagId?: string;
  sagName?: string;
  sn?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      probeTaskId: 'ProbeTaskId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sagName: 'SagName',
      sn: 'Sn',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      probeTaskId: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sagName: 'string',
      sn: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProbeTaskResponseBody extends $tea.Model {
  code?: string;
  data?: ListProbeTaskResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListProbeTaskResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProbeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProbeTaskResponseBody;
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
      body: ListProbeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureRequest extends $tea.Model {
  openApiName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      openApiName: 'OpenApiName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openApiName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponseBody extends $tea.Model {
  features?: ListSmartAGApiUnsupportedFeatureResponseBodyFeatures[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListSmartAGApiUnsupportedFeatureResponseBodyFeatures },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSmartAGApiUnsupportedFeatureResponseBody;
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
      body: ListSmartAGApiUnsupportedFeatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointRequest extends $tea.Model {
  accessPointId?: number;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGStatus: 'SmartAGStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponseBody extends $tea.Model {
  requestId?: string;
  smartAccessGateways?: ListSmartAGByAccessPointResponseBodySmartAccessGateways[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartAccessGateways: { 'type': 'array', 'itemType': ListSmartAGByAccessPointResponseBodySmartAccessGateways },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSmartAGByAccessPointResponseBody;
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
      body: ListSmartAGByAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRequest extends $tea.Model {
  aclId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLResponseBody extends $tea.Model {
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

export class ModifyACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyACLResponseBody;
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
      body: ModifyACLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleRequest extends $tea.Model {
  aclId?: string;
  acrId?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: string[];
  dpiSignatureIds?: string[];
  ipProtocol?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  policy?: string;
  priority?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceCidr?: string;
  sourcePortRange?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      acrId: 'AcrId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policy: 'Policy',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      acrId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      ipProtocol: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policy: 'string',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponseBody extends $tea.Model {
  aclId?: string;
  acrId?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: ModifyACLRuleResponseBodyDpiGroupIds;
  dpiSignatureIds?: ModifyACLRuleResponseBodyDpiSignatureIds;
  gmtCreate?: number;
  ipProtocol?: string;
  name?: string;
  policy?: string;
  priority?: number;
  requestId?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      acrId: 'AcrId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      policy: 'Policy',
      priority: 'Priority',
      requestId: 'RequestId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      acrId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: ModifyACLRuleResponseBodyDpiGroupIds,
      dpiSignatureIds: ModifyACLRuleResponseBodyDpiSignatureIds,
      gmtCreate: 'number',
      ipProtocol: 'string',
      name: 'string',
      policy: 'string',
      priority: 'number',
      requestId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyACLRuleResponseBody;
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
      body: ModifyACLRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClientUserDNSRequest extends $tea.Model {
  appDNS?: string[];
  ownerAccount?: string;
  ownerId?: number;
  recoveredDNS?: string[];
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      appDNS: 'AppDNS',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      recoveredDNS: 'RecoveredDNS',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDNS: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      recoveredDNS: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClientUserDNSResponseBody extends $tea.Model {
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

export class ModifyClientUserDNSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyClientUserDNSResponseBody;
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
      body: ModifyClientUserDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudConnectNetworkRequest extends $tea.Model {
  ccnId?: string;
  cidrBlock?: string;
  description?: string;
  interworkingStatus?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      interworkingStatus: 'InterworkingStatus',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      cidrBlock: 'string',
      description: 'string',
      interworkingStatus: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudConnectNetworkResponseBody extends $tea.Model {
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

export class ModifyCloudConnectNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyCloudConnectNetworkResponseBody;
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
      body: ModifyCloudConnectNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAutoUpgradePolicyRequest extends $tea.Model {
  cronExpression?: string;
  duration?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  timeZone?: string;
  upgradeType?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      timeZone: 'TimeZone',
      upgradeType: 'UpgradeType',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      duration: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      timeZone: 'string',
      upgradeType: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAutoUpgradePolicyResponseBody extends $tea.Model {
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

export class ModifyDeviceAutoUpgradePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDeviceAutoUpgradePolicyResponseBody;
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
      body: ModifyDeviceAutoUpgradePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeRequest extends $tea.Model {
  activeAging?: number;
  description?: string;
  flowLogId?: string;
  inactiveAging?: number;
  logstoreName?: string;
  name?: string;
  netflowServerIp?: string;
  netflowServerPort?: number;
  netflowVersion?: string;
  outputType?: string;
  ownerAccount?: string;
  ownerId?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAging: 'ActiveAging',
      description: 'Description',
      flowLogId: 'FlowLogId',
      inactiveAging: 'InactiveAging',
      logstoreName: 'LogstoreName',
      name: 'Name',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
      outputType: 'OutputType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAging: 'number',
      description: 'string',
      flowLogId: 'string',
      inactiveAging: 'number',
      logstoreName: 'string',
      name: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'number',
      netflowVersion: 'string',
      outputType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slsRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeResponseBody extends $tea.Model {
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

export class ModifyFlowLogAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyFlowLogAttributeResponseBody;
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
      body: ModifyFlowLogAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckRequest extends $tea.Model {
  description?: string;
  dstIpAddr?: string;
  dstPort?: number;
  failCountThreshold?: number;
  hcInstanceId?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  probeCount?: number;
  probeInterval?: number;
  probeTimeout?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  rttFailThreshold?: number;
  rttThreshold?: number;
  smartAGId?: string;
  srcIpAddr?: string;
  srcPort?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rttFailThreshold: 'RttFailThreshold',
      rttThreshold: 'RttThreshold',
      smartAGId: 'SmartAGId',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      hcInstanceId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rttFailThreshold: 'number',
      rttThreshold: 'number',
      smartAGId: 'string',
      srcIpAddr: 'string',
      srcPort: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckResponseBody extends $tea.Model {
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

export class ModifyHealthCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyHealthCheckResponseBody;
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
      body: ModifyHealthCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  qosDescription?: string;
  qosId?: string;
  qosName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      qosDescription: 'QosDescription',
      qosId: 'QosId',
      qosName: 'QosName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      qosDescription: 'string',
      qosId: 'string',
      qosName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosResponseBody extends $tea.Model {
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

export class ModifyQosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyQosResponseBody;
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
      body: ModifyQosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosCarRequest extends $tea.Model {
  description?: string;
  limitType?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  minBandwidthAbs?: number;
  minBandwidthPercent?: number;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  percentSourceType?: string;
  priority?: number;
  qosCarId?: string;
  qosId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosCarId: 'string',
      qosId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosCarResponseBody extends $tea.Model {
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

export class ModifyQosCarResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyQosCarResponseBody;
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
      body: ModifyQosCarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosPolicyRequest extends $tea.Model {
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  dpiGroupIds?: string[];
  dpiSignatureIds?: string[];
  endTime?: string;
  ipProtocol?: string;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  priority?: number;
  qosId?: string;
  qosPolicyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceCidr?: string;
  sourcePortRange?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyQosPolicyResponseBody extends $tea.Model {
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

export class ModifyQosPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyQosPolicyResponseBody;
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
      body: ModifyQosPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteDistributionStrategyRequest extends $tea.Model {
  destCidrBlock?: string;
  hcInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeDistribution?: string;
  routeSource?: string;
  smartAGId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrBlock: 'DestCidrBlock',
      hcInstanceId: 'HcInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeDistribution: 'RouteDistribution',
      routeSource: 'RouteSource',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrBlock: 'string',
      hcInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeDistribution: 'string',
      routeSource: 'string',
      smartAGId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteDistributionStrategyResponseBody extends $tea.Model {
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

export class ModifyRouteDistributionStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyRouteDistributionStrategyResponseBody;
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
      body: ModifyRouteDistributionStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySAGAdminPasswordRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySAGAdminPasswordResponseBody extends $tea.Model {
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

export class ModifySAGAdminPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySAGAdminPasswordResponseBody;
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
      body: ModifySAGAdminPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagExpressConnectInterfaceRequest extends $tea.Model {
  IP?: string;
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagExpressConnectInterfaceResponseBody extends $tea.Model {
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

export class ModifySagExpressConnectInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagExpressConnectInterfaceResponseBody;
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
      body: ModifySagExpressConnectInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagGlobalRouteProtocolRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeProtocol?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeProtocol: 'RouteProtocol',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeProtocol: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagGlobalRouteProtocolResponseBody extends $tea.Model {
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

export class ModifySagGlobalRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagGlobalRouteProtocolResponseBody;
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
      body: ModifySagGlobalRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagHaRequest extends $tea.Model {
  mode?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  virtualIp?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      virtualIp: 'VirtualIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      virtualIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagHaResponseBody extends $tea.Model {
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

export class ModifySagHaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagHaResponseBody;
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
      body: ModifySagHaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagLanRequest extends $tea.Model {
  endIp?: string;
  IP?: string;
  IPType?: string;
  lease?: string;
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      IP: 'IP',
      IPType: 'IPType',
      lease: 'Lease',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      IP: 'string',
      IPType: 'string',
      lease: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      startIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagLanResponseBody extends $tea.Model {
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

export class ModifySagLanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagLanResponseBody;
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
      body: ModifySagLanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagManagementPortRequest extends $tea.Model {
  gateway?: string;
  IP?: string;
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
      IP: 'IP',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: 'string',
      IP: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagManagementPortResponseBody extends $tea.Model {
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

export class ModifySagManagementPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagManagementPortResponseBody;
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
      body: ModifySagManagementPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRoleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  role?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRoleResponseBody extends $tea.Model {
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

export class ModifySagPortRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagPortRoleResponseBody;
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
      body: ModifySagPortRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRouteProtocolRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  remoteAs?: string;
  remoteIp?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeProtocol?: string;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeProtocol: 'RouteProtocol',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeProtocol: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagPortRouteProtocolResponseBody extends $tea.Model {
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

export class ModifySagPortRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagPortRouteProtocolResponseBody;
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
      body: ModifySagPortRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRemoteAccessRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  remoteAccessIp?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      remoteAccessIp: 'RemoteAccessIp',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      remoteAccessIp: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRemoteAccessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  remoteAccessIp?: string;
  requestId?: string;
  serialNumber?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      remoteAccessIp: 'RemoteAccessIp',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      remoteAccessIp: 'string',
      requestId: 'string',
      serialNumber: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRemoteAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagRemoteAccessResponseBody;
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
      body: ModifySagRemoteAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolBgpRequest extends $tea.Model {
  holdTime?: number;
  keepAlive?: number;
  localAs?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routerId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolBgpResponseBody extends $tea.Model {
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

export class ModifySagRouteProtocolBgpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagRouteProtocolBgpResponseBody;
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
      body: ModifySagRouteProtocolBgpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolOspfRequest extends $tea.Model {
  areaId?: number;
  authenticationType?: string;
  deadTime?: number;
  helloTime?: number;
  md5Key?: string;
  md5KeyId?: number;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routerId?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      authenticationType: 'AuthenticationType',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      authenticationType: 'string',
      deadTime: 'number',
      helloTime: 'number',
      md5Key: 'string',
      md5KeyId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagRouteProtocolOspfResponseBody extends $tea.Model {
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

export class ModifySagRouteProtocolOspfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagRouteProtocolOspfResponseBody;
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
      body: ModifySagRouteProtocolOspfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagStaticRouteRequest extends $tea.Model {
  destinationCidr?: string;
  nextHop?: string;
  ownerAccount?: string;
  ownerId?: number;
  portName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portName: 'PortName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHop: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagStaticRouteResponseBody extends $tea.Model {
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

export class ModifySagStaticRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagStaticRouteResponseBody;
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
      body: ModifySagStaticRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagUserDnsRequest extends $tea.Model {
  masterDns?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  slaveDns?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slaveDns: 'SlaveDns',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slaveDns: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagUserDnsResponseBody extends $tea.Model {
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

export class ModifySagUserDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagUserDnsResponseBody;
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
      body: ModifySagUserDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanRequest extends $tea.Model {
  bandwidth?: number;
  gateway?: string;
  IP?: string;
  IPType?: string;
  ISP?: string;
  mask?: string;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  portName?: string;
  priority?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  username?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      gateway: 'Gateway',
      IP: 'IP',
      IPType: 'IPType',
      ISP: 'ISP',
      mask: 'Mask',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      portName: 'PortName',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      username: 'Username',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      gateway: 'string',
      IP: 'string',
      IPType: 'string',
      ISP: 'string',
      mask: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      portName: 'string',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      username: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanResponseBody extends $tea.Model {
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

export class ModifySagWanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagWanResponseBody;
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
      body: ModifySagWanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanSnatRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  snat?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
      snat: 'Snat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
      snat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWanSnatResponseBody extends $tea.Model {
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

export class ModifySagWanSnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagWanSnatResponseBody;
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
      body: ModifySagWanSnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWifiRequest extends $tea.Model {
  authenticationType?: string;
  bandwidth?: string;
  channel?: string;
  encryptAlgorithm?: string;
  isAuth?: string;
  isBroadcast?: string;
  isEnable?: string;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  SSID?: string;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      bandwidth: 'Bandwidth',
      channel: 'Channel',
      encryptAlgorithm: 'EncryptAlgorithm',
      isAuth: 'IsAuth',
      isBroadcast: 'IsBroadcast',
      isEnable: 'IsEnable',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSID: 'SSID',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      bandwidth: 'string',
      channel: 'string',
      encryptAlgorithm: 'string',
      isAuth: 'string',
      isBroadcast: 'string',
      isEnable: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSID: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySagWifiResponseBody extends $tea.Model {
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

export class ModifySagWifiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySagWifiResponseBody;
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
      body: ModifySagWifiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayRequest extends $tea.Model {
  cidrBlock?: string;
  description?: string;
  enableSoftwareConnectionAudit?: boolean;
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  position?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routingStrategy?: string;
  securityLockThreshold?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      enableSoftwareConnectionAudit: 'EnableSoftwareConnectionAudit',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      position: 'Position',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      enableSoftwareConnectionAudit: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      position: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayResponseBody extends $tea.Model {
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

export class ModifySmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySmartAccessGatewayResponseBody;
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
      body: ModifySmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayClientUserRequest extends $tea.Model {
  bandwidth?: number;
  email?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      email: 'Email',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      email: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayClientUserResponseBody extends $tea.Model {
  bandwidth?: number;
  clientIp?: string;
  requestId?: string;
  userMail?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      requestId: 'RequestId',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientIp: 'string',
      requestId: 'string',
      userMail: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySmartAccessGatewayClientUserResponseBody;
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
      body: ModifySmartAccessGatewayClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayUpBandwidthRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  upBandwidth4G?: number;
  upBandwidthWan?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      upBandwidth4G: 'UpBandwidth4G',
      upBandwidthWan: 'UpBandwidthWan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      upBandwidth4G: 'number',
      upBandwidthWan: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySmartAccessGatewayUpBandwidthResponseBody extends $tea.Model {
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

export class ModifySmartAccessGatewayUpBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySmartAccessGatewayUpBandwidthResponseBody;
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
      body: ModifySmartAccessGatewayUpBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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

export class ProbeAccessPointNetworkQualityRequest extends $tea.Model {
  accessPointIds?: number[];
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointIds: 'AccessPointIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointIds: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeAccessPointNetworkQualityResponseBody extends $tea.Model {
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

export class ProbeAccessPointNetworkQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProbeAccessPointNetworkQualityResponseBody;
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
      body: ProbeAccessPointNetworkQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootSmartAccessGatewayResponseBody extends $tea.Model {
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

export class RebootSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebootSmartAccessGatewayResponseBody;
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
      body: RebootSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSmartAccessGatewayClientUserPasswordRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSmartAccessGatewayClientUserPasswordResponseBody extends $tea.Model {
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

export class ResetSmartAccessGatewayClientUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetSmartAccessGatewayClientUserPasswordResponseBody;
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
      body: ResetSmartAccessGatewayClientUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromCbnRequest extends $tea.Model {
  ccnInstanceId?: string;
  cenInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      cenInstanceId: 'CenInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      cenInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromCbnResponseBody extends $tea.Model {
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

export class RevokeInstanceFromCbnResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeInstanceFromCbnResponseBody;
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
      body: RevokeInstanceFromCbnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  vbrInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      vbrInstanceId: 'VbrInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      vbrInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromVbrResponseBody extends $tea.Model {
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

export class RevokeInstanceFromVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeInstanceFromVbrResponseBody;
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
      body: RevokeInstanceFromVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSagInstanceFromCcnRequest extends $tea.Model {
  ccnInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSagInstanceFromCcnResponseBody extends $tea.Model {
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

export class RevokeSagInstanceFromCcnResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeSagInstanceFromCcnResponseBody;
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
      body: RevokeSagInstanceFromCcnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoamClientUserRequest extends $tea.Model {
  originRegionId?: string;
  originSmartAGId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  targetSmartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      originRegionId: 'OriginRegionId',
      originSmartAGId: 'OriginSmartAGId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetSmartAGId: 'TargetSmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originRegionId: 'string',
      originSmartAGId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetSmartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoamClientUserResponseBody extends $tea.Model {
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

export class RoamClientUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RoamClientUserResponseBody;
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
      body: RoamClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdvancedMonitorStateRequest extends $tea.Model {
  enable?: boolean;
  regionId?: string;
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      regionId: 'RegionId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      regionId: 'string',
      sagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdvancedMonitorStateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAdvancedMonitorStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetAdvancedMonitorStateResponseBody;
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
      body: SetAdvancedMonitorStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeSmartAGWebConfigRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SynchronizeSmartAGWebConfigResponseBody extends $tea.Model {
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

export class SynchronizeSmartAGWebConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SynchronizeSmartAGWebConfigResponseBody;
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
      body: SynchronizeSmartAGWebConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSerialNumberRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSerialNumberResponseBody extends $tea.Model {
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

export class UnbindSerialNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindSerialNumberResponseBody;
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
      body: UnbindSerialNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSmartAccessGatewayRequest extends $tea.Model {
  ccnId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      ccnId: 'CcnId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSmartAccessGatewayResponseBody extends $tea.Model {
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

export class UnbindSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindSmartAccessGatewayResponseBody;
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
      body: UnbindSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindVbrRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  smartAGUid?: number;
  vbrId?: string;
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      vbrId: 'VbrId',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGUid: 'number',
      vbrId: 'string',
      vbrRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindVbrResponseBody extends $tea.Model {
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

export class UnbindVbrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindVbrResponseBody;
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
      body: UnbindVbrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSmartAccessGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockSmartAccessGatewayResponseBody extends $tea.Model {
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

export class UnlockSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockSmartAccessGatewayResponseBody;
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
      body: UnlockSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseCodeRequest extends $tea.Model {
  clientToken?: string;
  enterpriseCode?: string;
  isDefault?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enterpriseCode: 'string',
      isDefault: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseCodeResponseBody extends $tea.Model {
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

export class UpdateEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEnterpriseCodeResponseBody;
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
      body: UpdateEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProbeTaskRequest extends $tea.Model {
  domain?: string;
  enable?: boolean;
  packetNumber?: number;
  port?: number;
  probeTaskId?: string;
  probeTaskSourceAddress?: string;
  protocol?: string;
  regionId?: string;
  sagId?: string;
  sn?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskId: 'ProbeTaskId',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      packetNumber: 'number',
      port: 'number',
      probeTaskId: 'string',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      regionId: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProbeTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProbeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProbeTaskResponseBody;
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
      body: UpdateProbeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGAccessPointRequest extends $tea.Model {
  accessPointId?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGAccessPointResponseBody extends $tea.Model {
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

export class UpdateSmartAGAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAGAccessPointResponseBody;
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
      body: UpdateSmartAGAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGDpiAttributeRequest extends $tea.Model {
  clientToken?: string;
  dpiEnabled?: boolean;
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dpiEnabled: 'DpiEnabled',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dpiEnabled: 'boolean',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGDpiAttributeResponseBody extends $tea.Model {
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

export class UpdateSmartAGDpiAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAGDpiAttributeResponseBody;
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
      body: UpdateSmartAGDpiAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGEnterpriseCodeRequest extends $tea.Model {
  clientToken?: string;
  enterpriseCode?: string;
  regionId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enterpriseCode: 'EnterpriseCode',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enterpriseCode: 'string',
      regionId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGEnterpriseCodeResponseBody extends $tea.Model {
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

export class UpdateSmartAGEnterpriseCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAGEnterpriseCodeResponseBody;
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
      body: UpdateSmartAGEnterpriseCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGUserAccelerateConfigRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  smartAGId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAGUserAccelerateConfigResponseBody extends $tea.Model {
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

export class UpdateSmartAGUserAccelerateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAGUserAccelerateConfigResponseBody;
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
      body: UpdateSmartAGUserAccelerateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayAdminPasswordRequest extends $tea.Model {
  crossAccount?: boolean;
  password?: string;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      password: 'Password',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      password: 'string',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayAdminPasswordResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayAdminPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayAdminPasswordResponseBody;
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
      body: UpdateSmartAccessGatewayAdminPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayBgpRouteRequest extends $tea.Model {
  crossAccount?: boolean;
  holdTime?: number;
  keepAlive?: number;
  localAs?: number;
  regionId?: string;
  resourceUid?: string;
  routerId?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      routerId: 'RouterId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      regionId: 'string',
      resourceUid: 'string',
      routerId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayBgpRouteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayBgpRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayBgpRouteResponseBody;
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
      body: UpdateSmartAccessGatewayBgpRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayDnsRequest extends $tea.Model {
  crossAccount?: boolean;
  masterDns?: string;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  slaveDns?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      masterDns: 'MasterDns',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      slaveDns: 'SlaveDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      masterDns: 'string',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      slaveDns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayDnsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayDnsResponseBody;
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
      body: UpdateSmartAccessGatewayDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayDnsForwardRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  masterIp?: string;
  mode?: string;
  outboundPortIndex?: number;
  outboundPortName?: string;
  outboundPortType?: string;
  regionId?: string;
  sagInsId?: string;
  sagSn?: string;
  slaveIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      masterIp: 'MasterIp',
      mode: 'Mode',
      outboundPortIndex: 'OutboundPortIndex',
      outboundPortName: 'OutboundPortName',
      outboundPortType: 'OutboundPortType',
      regionId: 'RegionId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      slaveIp: 'SlaveIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      masterIp: 'string',
      mode: 'string',
      outboundPortIndex: 'number',
      outboundPortName: 'string',
      outboundPortType: 'string',
      regionId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      slaveIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayDnsForwardResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayDnsForwardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayDnsForwardResponseBody;
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
      body: UpdateSmartAccessGatewayDnsForwardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayGlobalRouteProtocolRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  routeProtocol?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      routeProtocol: 'RouteProtocol',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      routeProtocol: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayGlobalRouteProtocolResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayGlobalRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayGlobalRouteProtocolResponseBody;
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
      body: UpdateSmartAccessGatewayGlobalRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayOspfRouteRequest extends $tea.Model {
  areaId?: number;
  authenticationType?: string;
  crossAccount?: boolean;
  deadTime?: number;
  helloTime?: number;
  interfaceName?: string;
  md5Key?: string;
  md5KeyId?: number;
  networks?: string;
  ospfCost?: number;
  ospfNetworkType?: string;
  password?: string;
  redistributeProtocol?: string;
  regionId?: string;
  resourceUid?: string;
  routerId?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      authenticationType: 'AuthenticationType',
      crossAccount: 'CrossAccount',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      interfaceName: 'InterfaceName',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      networks: 'Networks',
      ospfCost: 'OspfCost',
      ospfNetworkType: 'OspfNetworkType',
      password: 'Password',
      redistributeProtocol: 'RedistributeProtocol',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      routerId: 'RouterId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      authenticationType: 'string',
      crossAccount: 'boolean',
      deadTime: 'number',
      helloTime: 'number',
      interfaceName: 'string',
      md5Key: 'string',
      md5KeyId: 'number',
      networks: 'string',
      ospfCost: 'number',
      ospfNetworkType: 'string',
      password: 'string',
      redistributeProtocol: 'string',
      regionId: 'string',
      resourceUid: 'string',
      routerId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayOspfRouteResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayOspfRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayOspfRouteResponseBody;
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
      body: UpdateSmartAccessGatewayOspfRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayPortRouteProtocolRequest extends $tea.Model {
  crossAccount?: boolean;
  portName?: string;
  regionId?: string;
  remoteAs?: string;
  remoteIp?: string;
  resourceUid?: string;
  routeProtocol?: string;
  sagInsId?: string;
  sagSn?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      portName: 'PortName',
      regionId: 'RegionId',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      resourceUid: 'ResourceUid',
      routeProtocol: 'RouteProtocol',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      portName: 'string',
      regionId: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      resourceUid: 'string',
      routeProtocol: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayPortRouteProtocolResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayPortRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayPortRouteProtocolResponseBody;
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
      body: UpdateSmartAccessGatewayPortRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayVersionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serialNumber?: string;
  smartAGId?: string;
  versionCode?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      versionCode: 'VersionCode',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      versionCode: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayVersionResponseBody extends $tea.Model {
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

export class UpdateSmartAccessGatewayVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayVersionResponseBody;
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
      body: UpdateSmartAccessGatewayVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayWanSnatRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  snat?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      snat: 'Snat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      snat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayWanSnatResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSmartAccessGatewayWanSnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSmartAccessGatewayWanSnatResponseBody;
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
      body: UpdateSmartAccessGatewayWanSnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewayRequest extends $tea.Model {
  autoPay?: boolean;
  bandWidthSpec?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandWidthSpec: 'BandWidthSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandWidthSpec: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewayResponseBody extends $tea.Model {
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

export class UpgradeSmartAccessGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeSmartAccessGatewayResponseBody;
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
      body: UpgradeSmartAccessGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewaySoftwareRequest extends $tea.Model {
  autoPay?: boolean;
  dataPlan?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  smartAGId?: string;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      dataPlan: 'DataPlan',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      dataPlan: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeSmartAccessGatewaySoftwareResponseBody extends $tea.Model {
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

export class UpgradeSmartAccessGatewaySoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeSmartAccessGatewaySoftwareResponseBody;
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
      body: UpgradeSmartAccessGatewaySoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayBgpRouteRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayBgpRouteResponseBody extends $tea.Model {
  holdTime?: number;
  keepAlive?: number;
  localAs?: number;
  requestId?: string;
  routerId?: string;
  taskStates?: ViewSmartAccessGatewayBgpRouteResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      requestId: 'RequestId',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      requestId: 'string',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayBgpRouteResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayBgpRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayBgpRouteResponseBody;
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
      body: ViewSmartAccessGatewayBgpRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsResponseBody extends $tea.Model {
  masterDns?: string;
  requestId?: string;
  slaveDns?: string;
  taskStates?: ViewSmartAccessGatewayDnsResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      masterDns: 'MasterDns',
      requestId: 'RequestId',
      slaveDns: 'SlaveDns',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDns: 'string',
      requestId: 'string',
      slaveDns: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayDnsResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayDnsResponseBody;
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
      body: ViewSmartAccessGatewayDnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsForwardsRequest extends $tea.Model {
  regionId?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsForwardsResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ViewSmartAccessGatewayDnsForwardsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ViewSmartAccessGatewayDnsForwardsResponseBodyData },
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

export class ViewSmartAccessGatewayDnsForwardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayDnsForwardsResponseBody;
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
      body: ViewSmartAccessGatewayDnsForwardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayGlobalRouteProtocolRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayGlobalRouteProtocolResponseBody extends $tea.Model {
  requestId?: string;
  routeProtocol?: string;
  taskStates?: ViewSmartAccessGatewayGlobalRouteProtocolResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeProtocol: 'RouteProtocol',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeProtocol: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayGlobalRouteProtocolResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayGlobalRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayGlobalRouteProtocolResponseBody;
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
      body: ViewSmartAccessGatewayGlobalRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayOspfRouteRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayOspfRouteResponseBody extends $tea.Model {
  areaId?: number;
  authenticationType?: string;
  deadTime?: number;
  helloTime?: number;
  md5Key?: string;
  md5KeyId?: number;
  requestId?: string;
  routerId?: string;
  taskStates?: ViewSmartAccessGatewayOspfRouteResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      authenticationType: 'AuthenticationType',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      requestId: 'RequestId',
      routerId: 'RouterId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      authenticationType: 'string',
      deadTime: 'number',
      helloTime: 'number',
      md5Key: 'string',
      md5KeyId: 'number',
      requestId: 'string',
      routerId: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayOspfRouteResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayOspfRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayOspfRouteResponseBody;
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
      body: ViewSmartAccessGatewayOspfRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayPortRouteProtocolRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayPortRouteProtocolResponseBody extends $tea.Model {
  ports?: ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts[];
  requestId?: string;
  taskStates?: ViewSmartAccessGatewayPortRouteProtocolResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      requestId: 'RequestId',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts },
      requestId: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayPortRouteProtocolResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayPortRouteProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayPortRouteProtocolResponseBody;
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
      body: ViewSmartAccessGatewayPortRouteProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayRoutesRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayRoutesResponseBody extends $tea.Model {
  requestId?: string;
  routes?: ViewSmartAccessGatewayRoutesResponseBodyRoutes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': ViewSmartAccessGatewayRoutesResponseBodyRoutes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayRoutesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayRoutesResponseBody;
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
      body: ViewSmartAccessGatewayRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayWanSnatRequest extends $tea.Model {
  crossAccount?: boolean;
  regionId?: string;
  resourceUid?: string;
  sagInsId?: string;
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayWanSnatResponseBody extends $tea.Model {
  requestId?: string;
  snat?: string;
  taskStates?: ViewSmartAccessGatewayWanSnatResponseBodyTaskStates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snat: 'Snat',
      taskStates: 'TaskStates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snat: 'string',
      taskStates: { 'type': 'array', 'itemType': ViewSmartAccessGatewayWanSnatResponseBodyTaskStates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayWanSnatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ViewSmartAccessGatewayWanSnatResponseBody;
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
      body: ViewSmartAccessGatewayWanSnatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBodyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddACLRuleResponseBodyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSmartAccessGatewayDnsForwardResponseBodyData extends $tea.Model {
  domain?: string;
  instanceId?: string;
  masterIp?: string;
  mode?: string;
  outboundPortIndex?: number;
  outboundPortName?: string;
  outboundPortType?: string;
  slaveIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      masterIp: 'MasterIp',
      mode: 'Mode',
      outboundPortIndex: 'OutboundPortIndex',
      outboundPortName: 'OutboundPortName',
      outboundPortType: 'OutboundPortType',
      slaveIp: 'SlaveIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      masterIp: 'string',
      mode: 'string',
      outboundPortIndex: 'number',
      outboundPortName: 'string',
      outboundPortType: 'string',
      slaveIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateSmartAGWithApplicationBandwidthPackageRequestAssociateConfigs extends $tea.Model {
  bandwidth?: number;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBodyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQosPolicyResponseBodyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrsAcr extends $tea.Model {
  aclId?: string;
  aclType?: string;
  acrId?: string;
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  direction?: string;
  dpiGroupIds?: DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds;
  dpiSignatureIds?: DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds;
  gmtCreate?: number;
  ipProtocol?: string;
  name?: string;
  policy?: string;
  priority?: number;
  sourceCidr?: string;
  sourcePortRange?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      acrId: 'AcrId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      gmtCreate: 'GmtCreate',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      policy: 'Policy',
      priority: 'Priority',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      acrId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: DescribeACLAttributeResponseBodyAcrsAcrDpiGroupIds,
      dpiSignatureIds: DescribeACLAttributeResponseBodyAcrsAcrDpiSignatureIds,
      gmtCreate: 'number',
      ipProtocol: 'string',
      name: 'string',
      policy: 'string',
      priority: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLAttributeResponseBodyAcrs extends $tea.Model {
  acr?: DescribeACLAttributeResponseBodyAcrsAcr[];
  static names(): { [key: string]: string } {
    return {
      acr: 'Acr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acr: { 'type': 'array', 'itemType': DescribeACLAttributeResponseBodyAcrsAcr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBodyAclsAcl extends $tea.Model {
  aclId?: string;
  aclType?: string;
  name?: string;
  resourceGroupId?: string;
  sagCount?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclType: 'AclType',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      sagCount: 'SagCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclType: 'string',
      name: 'string',
      resourceGroupId: 'string',
      sagCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLsResponseBodyAcls extends $tea.Model {
  acl?: DescribeACLsResponseBodyAclsAcl[];
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: { 'type': 'array', 'itemType': DescribeACLsResponseBodyAclsAcl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway extends $tea.Model {
  name?: string;
  smartAGId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      smartAGId: 'string',
      smartAGUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways extends $tea.Model {
  smartAccessGateway?: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway[];
  static names(): { [key: string]: string } {
    return {
      smartAccessGateway: 'SmartAccessGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAccessGateway: { 'type': 'array', 'itemType': DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksRequestTag extends $tea.Model {
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

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag extends $tea.Model {
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

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags extends $tea.Model {
  tag?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork extends $tea.Model {
  associatedCenId?: string;
  associatedCenOwnerId?: string;
  associatedCloudBoxCount?: string;
  availableCloudBoxCount?: string;
  ccnId?: string;
  cidrBlock?: string;
  createTime?: number;
  description?: string;
  interworkingStatus?: string;
  name?: string;
  resourceGroupId?: string;
  snatCidrBlock?: string;
  tags?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags;
  static names(): { [key: string]: string } {
    return {
      associatedCenId: 'AssociatedCenId',
      associatedCenOwnerId: 'AssociatedCenOwnerId',
      associatedCloudBoxCount: 'AssociatedCloudBoxCount',
      availableCloudBoxCount: 'AvailableCloudBoxCount',
      ccnId: 'CcnId',
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      description: 'Description',
      interworkingStatus: 'InterworkingStatus',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      snatCidrBlock: 'SnatCidrBlock',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCenId: 'string',
      associatedCenOwnerId: 'string',
      associatedCloudBoxCount: 'string',
      availableCloudBoxCount: 'string',
      ccnId: 'string',
      cidrBlock: 'string',
      createTime: 'number',
      description: 'string',
      interworkingStatus: 'string',
      name: 'string',
      resourceGroupId: 'string',
      snatCidrBlock: 'string',
      tags: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetworkTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudConnectNetworksResponseBodyCloudConnectNetworks extends $tea.Model {
  cloudConnectNetwork?: DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork[];
  static names(): { [key: string]: string } {
    return {
      cloudConnectNetwork: 'CloudConnectNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudConnectNetwork: { 'type': 'array', 'itemType': DescribeCloudConnectNetworksResponseBodyCloudConnectNetworksCloudConnectNetwork },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry extends $tea.Model {
  dnatEntryId?: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  sagId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dnatEntryId: 'DnatEntryId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      sagId: 'SagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntryId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      sagId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnatEntriesResponseBodyDnatEntries extends $tea.Model {
  dnatEntry?: DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry[];
  static names(): { [key: string]: string } {
    return {
      dnatEntry: 'DnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntry: { 'type': 'array', 'itemType': DescribeDnatEntriesResponseBodyDnatEntriesDnatEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBodySagsSag extends $tea.Model {
  description?: string;
  name?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBodySags extends $tea.Model {
  sag?: DescribeFlowLogSagsResponseBodySagsSag[];
  static names(): { [key: string]: string } {
    return {
      sag: 'Sag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sag: { 'type': 'array', 'itemType': DescribeFlowLogSagsResponseBodySagsSag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType extends $tea.Model {
  activeAging?: number;
  description?: string;
  flowLogId?: string;
  inactiveAging?: number;
  logstoreName?: string;
  name?: string;
  netflowServerIp?: string;
  netflowServerPort?: string;
  netflowVersion?: string;
  outputType?: string;
  projectName?: string;
  resourceGroupId?: string;
  slsRegionId?: string;
  status?: string;
  totalSagNum?: number;
  static names(): { [key: string]: string } {
    return {
      activeAging: 'ActiveAging',
      description: 'Description',
      flowLogId: 'FlowLogId',
      inactiveAging: 'InactiveAging',
      logstoreName: 'LogstoreName',
      name: 'Name',
      netflowServerIp: 'NetflowServerIp',
      netflowServerPort: 'NetflowServerPort',
      netflowVersion: 'NetflowVersion',
      outputType: 'OutputType',
      projectName: 'ProjectName',
      resourceGroupId: 'ResourceGroupId',
      slsRegionId: 'SlsRegionId',
      status: 'Status',
      totalSagNum: 'TotalSagNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAging: 'number',
      description: 'string',
      flowLogId: 'string',
      inactiveAging: 'number',
      logstoreName: 'string',
      name: 'string',
      netflowServerIp: 'string',
      netflowServerPort: 'string',
      netflowVersion: 'string',
      outputType: 'string',
      projectName: 'string',
      resourceGroupId: 'string',
      slsRegionId: 'string',
      status: 'string',
      totalSagNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogs extends $tea.Model {
  flowLogSetType?: DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType[];
  static names(): { [key: string]: string } {
    return {
      flowLogSetType: 'FlowLogSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogSetType: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLogSetType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBodyGrantRulesGrantRule extends $tea.Model {
  ccnInstanceId?: string;
  ccnUid?: number;
  cenInstanceId?: string;
  cenUid?: number;
  gmtCreate?: number;
  gmtModified?: number;
  grantRuleId?: string;
  grantTrafficService?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      cenInstanceId: 'CenInstanceId',
      cenUid: 'CenUid',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      grantRuleId: 'GrantRuleId',
      grantTrafficService: 'GrantTrafficService',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ccnUid: 'number',
      cenInstanceId: 'string',
      cenUid: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      grantRuleId: 'string',
      grantTrafficService: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantRulesResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBodyGrantRulesGrantRule extends $tea.Model {
  ccnInstanceId?: string;
  ccnUid?: number;
  createTime?: number;
  grantTrafficService?: boolean;
  instanceId?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      createTime: 'CreateTime',
      grantTrafficService: 'GrantTrafficService',
      instanceId: 'InstanceId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ccnUid: 'number',
      createTime: 'number',
      grantTrafficService: 'boolean',
      instanceId: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagRulesResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantSagRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantSagRulesResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule extends $tea.Model {
  bound?: boolean;
  createTime?: number;
  instanceId?: string;
  smartAGId?: string;
  smartAGUid?: number;
  vbrInstanceId?: string;
  vbrRegionId?: string;
  vbrUid?: number;
  static names(): { [key: string]: string } {
    return {
      bound: 'Bound',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      vbrInstanceId: 'VbrInstanceId',
      vbrRegionId: 'VbrRegionId',
      vbrUid: 'VbrUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bound: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      smartAGId: 'string',
      smartAGUid: 'number',
      vbrInstanceId: 'string',
      vbrRegionId: 'string',
      vbrUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantSagVbrRulesResponseBodyGrantRules extends $tea.Model {
  grantRule?: DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule[];
  static names(): { [key: string]: string } {
    return {
      grantRule: 'GrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantRule: { 'type': 'array', 'itemType': DescribeGrantSagVbrRulesResponseBodyGrantRulesGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBodyHealthChecksHealthCheck extends $tea.Model {
  description?: string;
  dstIpAddr?: string;
  dstPort?: number;
  failCountThreshold?: number;
  hcInstanceId?: string;
  name?: string;
  probeCount?: number;
  probeInterval?: number;
  probeTimeout?: number;
  relationCount?: number;
  rttFailThreshold?: number;
  rttThreshold?: number;
  smartAGId?: string;
  srcIpAddr?: string;
  srcPort?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      relationCount: 'RelationCount',
      rttFailThreshold: 'RttFailThreshold',
      rttThreshold: 'RttThreshold',
      smartAGId: 'SmartAGId',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      hcInstanceId: 'string',
      name: 'string',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      relationCount: 'number',
      rttFailThreshold: 'number',
      rttThreshold: 'number',
      smartAGId: 'string',
      srcIpAddr: 'string',
      srcPort: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBodyHealthChecks extends $tea.Model {
  healthCheck?: DescribeHealthChecksResponseBodyHealthChecksHealthCheck[];
  static names(): { [key: string]: string } {
    return {
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheck: { 'type': 'array', 'itemType': DescribeHealthChecksResponseBodyHealthChecksHealthCheck },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBodyQosCarsQosCar extends $tea.Model {
  description?: string;
  limitType?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  minBandwidthAbs?: number;
  minBandwidthPercent?: number;
  name?: string;
  percentSourceType?: string;
  priority?: number;
  qosCarId?: string;
  qosId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      name: 'Name',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarId: 'QosCarId',
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      name: 'string',
      percentSourceType: 'string',
      priority: 'number',
      qosCarId: 'string',
      qosId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosCarsResponseBodyQosCars extends $tea.Model {
  qosCar?: DescribeQosCarsResponseBodyQosCarsQosCar[];
  static names(): { [key: string]: string } {
    return {
      qosCar: 'QosCar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosCar: { 'type': 'array', 'itemType': DescribeQosCarsResponseBodyQosCarsQosCar },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy extends $tea.Model {
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  dpiGroupIds?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds;
  dpiSignatureIds?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds;
  endTime?: string;
  ipProtocol?: string;
  name?: string;
  priority?: number;
  qosId?: string;
  qosPolicyId?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds,
      dpiSignatureIds: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds,
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPolicies extends $tea.Model {
  qosPolicy?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy[];
  static names(): { [key: string]: string } {
    return {
      qosPolicy: 'QosPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosPolicy: { 'type': 'array', 'itemType': DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBodyQosesQos extends $tea.Model {
  qosDescription?: string;
  qosId?: string;
  qosName?: string;
  resourceGroupId?: string;
  sagCount?: string;
  smartAGIds?: string;
  static names(): { [key: string]: string } {
    return {
      qosDescription: 'QosDescription',
      qosId: 'QosId',
      qosName: 'QosName',
      resourceGroupId: 'ResourceGroupId',
      sagCount: 'SagCount',
      smartAGIds: 'SmartAGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosDescription: 'string',
      qosId: 'string',
      qosName: 'string',
      resourceGroupId: 'string',
      sagCount: 'string',
      smartAGIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosesResponseBodyQoses extends $tea.Model {
  qos?: DescribeQosesResponseBodyQosesQos[];
  static names(): { [key: string]: string } {
    return {
      qos: 'Qos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qos: { 'type': 'array', 'itemType': DescribeQosesResponseBodyQosesQos },
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

export class DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy extends $tea.Model {
  conflictInfo?: string;
  createTime?: number;
  destCidrBlock?: string;
  hcInstanceId?: string;
  isConflict?: boolean;
  routeDistribution?: string;
  routeSource?: string;
  smartAGId?: string;
  sourceType?: string;
  status?: string;
  strategyPublishStatus?: string;
  static names(): { [key: string]: string } {
    return {
      conflictInfo: 'ConflictInfo',
      createTime: 'CreateTime',
      destCidrBlock: 'DestCidrBlock',
      hcInstanceId: 'HcInstanceId',
      isConflict: 'IsConflict',
      routeDistribution: 'RouteDistribution',
      routeSource: 'RouteSource',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
      status: 'Status',
      strategyPublishStatus: 'StrategyPublishStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictInfo: 'string',
      createTime: 'number',
      destCidrBlock: 'string',
      hcInstanceId: 'string',
      isConflict: 'boolean',
      routeDistribution: 'string',
      routeSource: 'string',
      smartAGId: 'string',
      sourceType: 'string',
      status: 'string',
      strategyPublishStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteDistributionStrategiesResponseBodyStrategies extends $tea.Model {
  strategy?: DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeRouteDistributionStrategiesResponseBodyStrategiesStrategy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponseBodyDropTopN extends $tea.Model {
  dropRate?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dropRate: 'DropRate',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropRate: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBodyInterfaces extends $tea.Model {
  IP?: string;
  mask?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      mask: 'Mask',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      mask: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagExpressConnectInterfaceListResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagGlobalRouteProtocolResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBodyPorts extends $tea.Model {
  portName?: string;
  virtualIp?: string;
  static names(): { [key: string]: string } {
    return {
      portName: 'PortName',
      virtualIp: 'VirtualIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portName: 'string',
      virtualIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagHaResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBodyLans extends $tea.Model {
  endIp?: string;
  IP?: string;
  IPType?: string;
  lease?: string;
  mask?: string;
  portName?: string;
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      IP: 'IP',
      IPType: 'IPType',
      lease: 'Lease',
      mask: 'Mask',
      portName: 'PortName',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      IP: 'string',
      IPType: 'string',
      lease: 'string',
      mask: 'string',
      portName: 'string',
      startIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagLanListResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagManagementPortResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics extends $tea.Model {
  onlineCount?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBodySagStatistics extends $tea.Model {
  statistics?: DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBodyPorts extends $tea.Model {
  mac?: string;
  portName?: string;
  role?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      portName: 'PortName',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      portName: 'string',
      role: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortListResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponseBodyPorts extends $tea.Model {
  neighborIp?: string;
  portName?: string;
  remoteAs?: string;
  remoteIp?: string;
  routeProtocol?: string;
  status?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      neighborIp: 'NeighborIp',
      portName: 'PortName',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      routeProtocol: 'RouteProtocol',
      status: 'Status',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      neighborIp: 'string',
      portName: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      routeProtocol: 'string',
      status: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagPortRouteProtocolListResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess extends $tea.Model {
  remoteAccessIp?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      remoteAccessIp: 'RemoteAccessIp',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteAccessIp: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRemoteAccessResponseBodyRemoteAccesses extends $tea.Model {
  remoteAccess?: DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess[];
  static names(): { [key: string]: string } {
    return {
      remoteAccess: 'RemoteAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteAccess: { 'type': 'array', 'itemType': DescribeSagRemoteAccessResponseBodyRemoteAccessesRemoteAccess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteListResponseBodyRoutes extends $tea.Model {
  conflictCidrs?: string[];
  cost?: string;
  destinationCidr?: string;
  nextHop?: string;
  portName?: string;
  routeProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      conflictCidrs: 'ConflictCidrs',
      cost: 'Cost',
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      portName: 'PortName',
      routeProtocol: 'RouteProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCidrs: { 'type': 'array', 'itemType': 'string' },
      cost: 'string',
      destinationCidr: 'string',
      nextHop: 'string',
      portName: 'string',
      routeProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolBgpResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagRouteProtocolOspfResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponseBodyStaticRoutes extends $tea.Model {
  destinationCidr?: string;
  nextHop?: string;
  portName?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHop: 'NextHop',
      portName: 'PortName',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHop: 'string',
      portName: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagStaticRouteListResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponseBodyTrafficTopN extends $tea.Model {
  instanceId?: string;
  name?: string;
  regionId?: string;
  trafficRate?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      trafficRate: 'TrafficRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      trafficRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagUserDnsResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagVbrRelationsResponseBodySagVbrRelations extends $tea.Model {
  sagInstanceId?: string;
  sagUid?: string;
  vbrInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sagInstanceId: 'SagInstanceId',
      sagUid: 'SagUid',
      vbrInstanceId: 'VbrInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sagInstanceId: 'string',
      sagUid: 'string',
      vbrInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanListResponseBodyWans extends $tea.Model {
  bandWidth?: number;
  gateway?: string;
  IP?: string;
  IPType?: string;
  ISP?: string;
  mask?: string;
  portName?: string;
  priority?: number;
  trafficState?: string;
  username?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      gateway: 'Gateway',
      IP: 'IP',
      IPType: 'IPType',
      ISP: 'ISP',
      mask: 'Mask',
      portName: 'PortName',
      priority: 'Priority',
      trafficState: 'TrafficState',
      username: 'Username',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      gateway: 'string',
      IP: 'string',
      IPType: 'string',
      ISP: 'string',
      mask: 'string',
      portName: 'string',
      priority: 'number',
      trafficState: 'string',
      username: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWanSnatResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagWifiResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyAclIds extends $tea.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks extends $tea.Model {
  lockReason?: string;
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice extends $tea.Model {
  distributeSkStatus?: number;
  dpiSignatureDbVersion?: string;
  haState?: string;
  hcState?: string;
  monitorVersion?: string;
  secretKey?: string;
  serialNumber?: string;
  softwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      distributeSkStatus: 'DistributeSkStatus',
      dpiSignatureDbVersion: 'DpiSignatureDbVersion',
      haState: 'HaState',
      hcState: 'HcState',
      monitorVersion: 'MonitorVersion',
      secretKey: 'SecretKey',
      serialNumber: 'SerialNumber',
      softwareVersion: 'SoftwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeSkStatus: 'number',
      dpiSignatureDbVersion: 'string',
      haState: 'string',
      hcState: 'string',
      monitorVersion: 'string',
      secretKey: 'string',
      serialNumber: 'string',
      softwareVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyDevices extends $tea.Model {
  device?: DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice[];
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds extends $tea.Model {
  flowLogId?: string[];
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyIRIds extends $tea.Model {
  IRId?: string[];
  static names(): { [key: string]: string } {
    return {
      IRId: 'IRId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IRId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyLinksLink extends $tea.Model {
  bandwidth?: string;
  commodityType?: string;
  endTime?: number;
  healthCheckTargetIp?: string;
  instanceId?: string;
  relateInstanceId?: string;
  relateInstanceRegionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commodityType: 'CommodityType',
      endTime: 'EndTime',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      instanceId: 'InstanceId',
      relateInstanceId: 'RelateInstanceId',
      relateInstanceRegionId: 'RelateInstanceRegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      commodityType: 'string',
      endTime: 'number',
      healthCheckTargetIp: 'string',
      instanceId: 'string',
      relateInstanceId: 'string',
      relateInstanceRegionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyLinks extends $tea.Model {
  link?: DescribeSmartAccessGatewayAttributeResponseBodyLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayAttributeResponseBodyLinksLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyQosIds extends $tea.Model {
  qosId?: string[];
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser extends $tea.Model {
  accelerateBandwidth?: number;
  bandwidth?: number;
  clientIp?: string;
  isStaticIp?: number;
  state?: number;
  userMail?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateBandwidth: 'AccelerateBandwidth',
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      isStaticIp: 'IsStaticIp',
      state: 'State',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateBandwidth: 'number',
      bandwidth: 'number',
      clientIp: 'string',
      isStaticIp: 'number',
      state: 'number',
      userMail: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayClientUsersResponseBodyUsers extends $tea.Model {
  user?: DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayClientUsersResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList extends $tea.Model {
  backupLinkId?: string;
  backupLinkState?: string;
  linkLevelBackupState?: string;
  linkLevelBackupType?: string;
  mainLinkId?: string;
  mainLinkState?: string;
  static names(): { [key: string]: string } {
    return {
      backupLinkId: 'BackupLinkId',
      backupLinkState: 'BackupLinkState',
      linkLevelBackupState: 'LinkLevelBackupState',
      linkLevelBackupType: 'LinkLevelBackupType',
      mainLinkId: 'MainLinkId',
      mainLinkState: 'MainLinkState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLinkId: 'string',
      backupLinkState: 'string',
      linkLevelBackupState: 'string',
      linkLevelBackupType: 'string',
      mainLinkId: 'string',
      mainLinkState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoList extends $tea.Model {
  linkBackupInfoList?: DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList[];
  static names(): { [key: string]: string } {
    return {
      linkBackupInfoList: 'LinkBackupInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkBackupInfoList: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayHaResponseBodyLinkBackupInfoListLinkBackupInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion extends $tea.Model {
  createTime?: number;
  type?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      type: 'Type',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      type: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions extends $tea.Model {
  smartAGVersion?: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion[];
  static names(): { [key: string]: string } {
    return {
      smartAGVersion: 'SmartAGVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGVersion: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink extends $tea.Model {
  bandwidth?: string;
  commodityType?: string;
  endTime?: number;
  instanceId?: string;
  relateInstanceId?: string;
  relateInstanceRegionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commodityType: 'CommodityType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      relateInstanceId: 'RelateInstanceId',
      relateInstanceRegionId: 'RelateInstanceRegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      commodityType: 'string',
      endTime: 'number',
      instanceId: 'string',
      relateInstanceId: 'string',
      relateInstanceRegionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks extends $tea.Model {
  link?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinksLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway extends $tea.Model {
  accelerateBandwidth?: number;
  accessPointId?: string;
  aclIds?: string;
  applicationBandwidthPackageId?: string;
  associatedCcnId?: string;
  associatedCcnName?: string;
  backupSoftwareVersion?: string;
  backupStatus?: string;
  cidrBlock?: string;
  city?: string;
  createTime?: number;
  dataPlan?: number;
  description?: string;
  dpiMonitorStatus?: string;
  dpiStatus?: string;
  enableAdvancedMonitor?: boolean;
  enableSoftwareConnectionAudit?: boolean;
  endTime?: number;
  enterpriseCode?: string;
  hardwareVersion?: string;
  IRIds?: string;
  idaasApplicationId?: string;
  idaasId?: string;
  ipsecStatus?: string;
  isp?: string;
  links?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks;
  maxBandwidth?: string;
  name?: string;
  position?: string;
  qosIds?: string;
  resellerInstanceId?: string;
  resellerUid?: string;
  resourceGroupId?: string;
  routingStrategy?: string;
  securityLockThreshold?: number;
  serialNumber?: string;
  smartAGId?: string;
  smartAGUid?: number;
  softwareVersion?: string;
  status?: string;
  upBandwidth4G?: number;
  upBandwidthWan?: number;
  userCount?: number;
  vpnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateBandwidth: 'AccelerateBandwidth',
      accessPointId: 'AccessPointId',
      aclIds: 'AclIds',
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      associatedCcnId: 'AssociatedCcnId',
      associatedCcnName: 'AssociatedCcnName',
      backupSoftwareVersion: 'BackupSoftwareVersion',
      backupStatus: 'BackupStatus',
      cidrBlock: 'CidrBlock',
      city: 'City',
      createTime: 'CreateTime',
      dataPlan: 'DataPlan',
      description: 'Description',
      dpiMonitorStatus: 'DpiMonitorStatus',
      dpiStatus: 'DpiStatus',
      enableAdvancedMonitor: 'EnableAdvancedMonitor',
      enableSoftwareConnectionAudit: 'EnableSoftwareConnectionAudit',
      endTime: 'EndTime',
      enterpriseCode: 'EnterpriseCode',
      hardwareVersion: 'HardwareVersion',
      IRIds: 'IRIds',
      idaasApplicationId: 'IdaasApplicationId',
      idaasId: 'IdaasId',
      ipsecStatus: 'IpsecStatus',
      isp: 'Isp',
      links: 'Links',
      maxBandwidth: 'MaxBandwidth',
      name: 'Name',
      position: 'Position',
      qosIds: 'QosIds',
      resellerInstanceId: 'ResellerInstanceId',
      resellerUid: 'ResellerUid',
      resourceGroupId: 'ResourceGroupId',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
      softwareVersion: 'SoftwareVersion',
      status: 'Status',
      upBandwidth4G: 'UpBandwidth4G',
      upBandwidthWan: 'UpBandwidthWan',
      userCount: 'UserCount',
      vpnStatus: 'VpnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateBandwidth: 'number',
      accessPointId: 'string',
      aclIds: 'string',
      applicationBandwidthPackageId: 'string',
      associatedCcnId: 'string',
      associatedCcnName: 'string',
      backupSoftwareVersion: 'string',
      backupStatus: 'string',
      cidrBlock: 'string',
      city: 'string',
      createTime: 'number',
      dataPlan: 'number',
      description: 'string',
      dpiMonitorStatus: 'string',
      dpiStatus: 'string',
      enableAdvancedMonitor: 'boolean',
      enableSoftwareConnectionAudit: 'boolean',
      endTime: 'number',
      enterpriseCode: 'string',
      hardwareVersion: 'string',
      IRIds: 'string',
      idaasApplicationId: 'string',
      idaasId: 'string',
      ipsecStatus: 'string',
      isp: 'string',
      links: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGatewayLinks,
      maxBandwidth: 'string',
      name: 'string',
      position: 'string',
      qosIds: 'string',
      resellerInstanceId: 'string',
      resellerUid: 'string',
      resourceGroupId: 'string',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      smartAGUid: 'number',
      softwareVersion: 'string',
      status: 'string',
      upBandwidth4G: 'number',
      upBandwidthWan: 'number',
      userCount: 'number',
      vpnStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewaysResponseBodySmartAccessGateways extends $tea.Model {
  smartAccessGateway?: DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway[];
  static names(): { [key: string]: string } {
    return {
      smartAccessGateway: 'SmartAccessGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAccessGateway: { 'type': 'array', 'itemType': DescribeSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBodySnatEntriesSnatEntry extends $tea.Model {
  cidrBlock?: string;
  createTime?: number;
  instanceId?: string;
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createTime: 'number',
      instanceId: 'string',
      snatIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatEntriesResponseBodySnatEntries extends $tea.Model {
  snatEntry?: DescribeSnatEntriesResponseBodySnatEntriesSnatEntry[];
  static names(): { [key: string]: string } {
    return {
      snatEntry: 'SnatEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntry: { 'type': 'array', 'itemType': DescribeSnatEntriesResponseBodySnatEntriesSnatEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBodySagsSag extends $tea.Model {
  description?: string;
  name?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBodySags extends $tea.Model {
  sag?: DescribeUnbindFlowLogSagsResponseBodySagsSag[];
  static names(): { [key: string]: string } {
    return {
      sag: 'Sag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sag: { 'type': 'array', 'itemType': DescribeUnbindFlowLogSagsResponseBodySagsSag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics extends $tea.Model {
  totalBytes?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      totalBytes: 'TotalBytes',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBytes: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserFlowStatisticsResponseBodySagStatistics extends $tea.Model {
  statistics?: DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeUserFlowStatisticsResponseBodySagStatisticsStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics extends $tea.Model {
  onlineCount?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBodyUserStatistics extends $tea.Model {
  statistics?: DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBodyUsersUser extends $tea.Model {
  clientIp?: string;
  onlineTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      onlineTime: 'OnlineTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      onlineTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientsResponseBodyUsers extends $tea.Model {
  user?: DescribeUserOnlineClientsResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': DescribeUserOnlineClientsResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN extends $tea.Model {
  advice?: string[];
  details?: string[];
  itemLevel?: string;
  itemName?: string;
  itemType?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      details: 'Details',
      itemLevel: 'ItemLevel',
      itemName: 'ItemName',
      itemType: 'ItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': 'string' },
      details: { 'type': 'array', 'itemType': 'string' },
      itemLevel: 'string',
      itemName: 'string',
      itemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN extends $tea.Model {
  advice?: string[];
  details?: string[];
  itemLevel?: string;
  itemName?: string;
  itemType?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      details: 'Details',
      itemLevel: 'ItemLevel',
      itemName: 'ItemName',
      itemType: 'ItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': 'string' },
      details: { 'type': 'array', 'itemType': 'string' },
      itemLevel: 'string',
      itemName: 'string',
      itemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems extends $tea.Model {
  CN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN;
  EN?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN;
  endTime?: number;
  itemName?: string;
  level?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      CN: 'CN',
      EN: 'EN',
      endTime: 'EndTime',
      itemName: 'ItemName',
      level: 'Level',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CN: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsCN,
      EN: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItemsEN,
      endTime: 'number',
      itemName: 'string',
      level: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics extends $tea.Model {
  error?: number;
  info?: number;
  total?: number;
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      info: 'Info',
      total: 'Total',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      info: 'number',
      total: 'number',
      warning: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails extends $tea.Model {
  items?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems[];
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      statistics: 'Statistics',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsItems },
      statistics: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetailsStatistics,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel extends $tea.Model {
  biz?: string;
  configuration?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      configuration: 'Configuration',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      configuration: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics extends $tea.Model {
  error?: number;
  info?: number;
  total?: number;
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      info: 'Info',
      total: 'Total',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      info: 'number',
      total: 'number',
      warning: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResult extends $tea.Model {
  boxType?: string;
  boxVersion?: string;
  details?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails[];
  diagnoseId?: string;
  endTime?: number;
  finishedNumber?: number;
  instanceId?: string;
  level?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel;
  monitorVersion?: string;
  percent?: number;
  reportSLSSuccess?: number;
  SN?: string;
  startTime?: number;
  state?: string;
  statistics?: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics;
  storeType?: string;
  totalNumber?: number;
  UId?: string;
  userLevel?: string;
  static names(): { [key: string]: string } {
    return {
      boxType: 'BoxType',
      boxVersion: 'BoxVersion',
      details: 'Details',
      diagnoseId: 'DiagnoseId',
      endTime: 'EndTime',
      finishedNumber: 'FinishedNumber',
      instanceId: 'InstanceId',
      level: 'Level',
      monitorVersion: 'MonitorVersion',
      percent: 'Percent',
      reportSLSSuccess: 'ReportSLSSuccess',
      SN: 'SN',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      storeType: 'StoreType',
      totalNumber: 'TotalNumber',
      UId: 'UId',
      userLevel: 'UserLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxType: 'string',
      boxVersion: 'string',
      details: { 'type': 'array', 'itemType': DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultDetails },
      diagnoseId: 'string',
      endTime: 'number',
      finishedNumber: 'number',
      instanceId: 'string',
      level: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultLevel,
      monitorVersion: 'string',
      percent: 'number',
      reportSLSSuccess: 'number',
      SN: 'string',
      startTime: 'number',
      state: 'string',
      statistics: DiscribeSmartAccessGatewayDiagnosisReportResponseBodyDiagnoseResultStatistics,
      storeType: 'string',
      totalNumber: 'number',
      UId: 'string',
      userLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedMonitorStateResponseBodyData extends $tea.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBodyQosCars extends $tea.Model {
  limitType?: string;
  maxBandwidthAbs?: number;
  maxBandwidthPercent?: number;
  minBandwidthAbs?: number;
  minBandwidthPercent?: number;
  percentSourceType?: string;
  priority?: number;
  qosCarDescription?: string;
  qosCarId?: string;
  qosCarName?: string;
  static names(): { [key: string]: string } {
    return {
      limitType: 'LimitType',
      maxBandwidthAbs: 'MaxBandwidthAbs',
      maxBandwidthPercent: 'MaxBandwidthPercent',
      minBandwidthAbs: 'MinBandwidthAbs',
      minBandwidthPercent: 'MinBandwidthPercent',
      percentSourceType: 'PercentSourceType',
      priority: 'Priority',
      qosCarDescription: 'QosCarDescription',
      qosCarId: 'QosCarId',
      qosCarName: 'QosCarName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitType: 'string',
      maxBandwidthAbs: 'number',
      maxBandwidthPercent: 'number',
      minBandwidthAbs: 'number',
      minBandwidthPercent: 'number',
      percentSourceType: 'string',
      priority: 'number',
      qosCarDescription: 'string',
      qosCarId: 'string',
      qosCarName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQosAttributeResponseBodyQosPolicies extends $tea.Model {
  destCidr?: string;
  destPortRange?: string;
  endTime?: number;
  ipProtocol?: string;
  priority?: number;
  qosPolicieDescription?: string;
  qosPolicieName?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      qosPolicieDescription: 'QosPolicieDescription',
      qosPolicieName: 'QosPolicieName',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidr: 'string',
      destPortRange: 'string',
      endTime: 'number',
      ipProtocol: 'string',
      priority: 'number',
      qosPolicieDescription: 'string',
      qosPolicieName: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities extends $tea.Model {
  id?: number;
  loss?: string;
  rtt?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      loss: 'Loss',
      rtt: 'Rtt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      loss: 'string',
      rtt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsResponseBodyAccessPoints extends $tea.Model {
  accessPointId?: number;
  activeSmartAGCount?: number;
  inactiveSmartAGCount?: number;
  latitude?: string;
  longitude?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      activeSmartAGCount: 'ActiveSmartAGCount',
      inactiveSmartAGCount: 'InactiveSmartAGCount',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'number',
      activeSmartAGCount: 'number',
      inactiveSmartAGCount: 'number',
      latitude: 'string',
      longitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableServiceAddressResponseBodyData extends $tea.Model {
  address?: string;
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList extends $tea.Model {
  dpiGroupIds?: string[];
  dpiSignatureIds?: string[];
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiConfigErrorResponseBodyDpiConfigError extends $tea.Model {
  errorType?: string;
  ruleConfigErrorList?: ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList[];
  SN?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      errorType: 'ErrorType',
      ruleConfigErrorList: 'RuleConfigErrorList',
      SN: 'SN',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorType: 'string',
      ruleConfigErrorList: { 'type': 'array', 'itemType': ListDpiConfigErrorResponseBodyDpiConfigErrorRuleConfigErrorList },
      SN: 'string',
      smartAGId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiGroupsResponseBodyDpiGroup extends $tea.Model {
  dpiGroupId?: string;
  dpiGroupName?: string;
  minEngineVersion?: string;
  minSignatureDbVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
      dpiGroupName: 'DpiGroupName',
      minEngineVersion: 'MinEngineVersion',
      minSignatureDbVersion: 'MinSignatureDbVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: 'string',
      dpiGroupName: 'string',
      minEngineVersion: 'string',
      minSignatureDbVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponseBodyDpiSignature extends $tea.Model {
  dpiGroupId?: string;
  dpiSignatureId?: string;
  dpiSignatureName?: string;
  minEngineVersion?: string;
  minSignatureDbVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
      dpiSignatureId: 'DpiSignatureId',
      dpiSignatureName: 'DpiSignatureName',
      minEngineVersion: 'MinEngineVersion',
      minSignatureDbVersion: 'MinSignatureDbVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: 'string',
      dpiSignatureId: 'string',
      dpiSignatureName: 'string',
      minEngineVersion: 'string',
      minSignatureDbVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseCodeResponseBodyEnterpriseCodes extends $tea.Model {
  enterpriseCode?: string;
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      enterpriseCode: 'EnterpriseCode',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseCode: 'string',
      isDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProbeTaskResponseBodyData extends $tea.Model {
  domain?: string;
  enable?: boolean;
  gmtCreate?: string;
  gmtModify?: string;
  packetNumber?: number;
  port?: number;
  probeTaskId?: string;
  probeTaskSourceAddress?: string;
  protocol?: string;
  sagId?: string;
  sn?: string;
  taskName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      packetNumber: 'PacketNumber',
      port: 'Port',
      probeTaskId: 'ProbeTaskId',
      probeTaskSourceAddress: 'ProbeTaskSourceAddress',
      protocol: 'Protocol',
      sagId: 'SagId',
      sn: 'Sn',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
      gmtCreate: 'string',
      gmtModify: 'string',
      packetNumber: 'number',
      port: 'number',
      probeTaskId: 'string',
      probeTaskSourceAddress: 'string',
      protocol: 'string',
      sagId: 'string',
      sn: 'string',
      taskName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGApiUnsupportedFeatureResponseBodyFeatures extends $tea.Model {
  feature?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmartAGByAccessPointResponseBodySmartAccessGateways extends $tea.Model {
  associatedCcnId?: string;
  hardwareVersion?: string;
  routingStrategy?: string;
  smartAGDescription?: string;
  smartAGId?: string;
  smartAGName?: string;
  smartAGStatus?: string;
  static names(): { [key: string]: string } {
    return {
      associatedCcnId: 'AssociatedCcnId',
      hardwareVersion: 'HardwareVersion',
      routingStrategy: 'RoutingStrategy',
      smartAGDescription: 'SmartAGDescription',
      smartAGId: 'SmartAGId',
      smartAGName: 'SmartAGName',
      smartAGStatus: 'SmartAGStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCcnId: 'string',
      hardwareVersion: 'string',
      routingStrategy: 'string',
      smartAGDescription: 'string',
      smartAGId: 'string',
      smartAGName: 'string',
      smartAGStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponseBodyDpiGroupIds extends $tea.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyACLRuleResponseBodyDpiSignatureIds extends $tea.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayBgpRouteResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayDnsForwardsResponseBodyData extends $tea.Model {
  domain?: string;
  instanceId?: string;
  masterIp?: string;
  mode?: string;
  outboundPortIndex?: number;
  outboundPortName?: string;
  outboundPortType?: string;
  slaveIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      masterIp: 'MasterIp',
      mode: 'Mode',
      outboundPortIndex: 'OutboundPortIndex',
      outboundPortName: 'OutboundPortName',
      outboundPortType: 'OutboundPortType',
      slaveIp: 'SlaveIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      masterIp: 'string',
      mode: 'string',
      outboundPortIndex: 'number',
      outboundPortName: 'string',
      outboundPortType: 'string',
      slaveIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayGlobalRouteProtocolResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayOspfRouteResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayPortRouteProtocolResponseBodyPorts extends $tea.Model {
  neighborIp?: string;
  portName?: string;
  remoteAs?: string;
  remoteIp?: string;
  routeProtocol?: string;
  status?: string;
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      neighborIp: 'NeighborIp',
      portName: 'PortName',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      routeProtocol: 'RouteProtocol',
      status: 'Status',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      neighborIp: 'string',
      portName: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      routeProtocol: 'string',
      status: 'string',
      vlan: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayPortRouteProtocolResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayRoutesResponseBodyRoutes extends $tea.Model {
  conflictCidrs?: string[];
  cost?: string;
  dst?: string;
  idx?: number;
  nexthop?: string;
  role?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conflictCidrs: 'ConflictCidrs',
      cost: 'Cost',
      dst: 'Dst',
      idx: 'Idx',
      nexthop: 'Nexthop',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCidrs: { 'type': 'array', 'itemType': 'string' },
      cost: 'string',
      dst: 'string',
      idx: 'number',
      nexthop: 'string',
      role: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayWanSnatResponseBodyTaskStates extends $tea.Model {
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      state: 'string',
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
    this._endpoint = this.getEndpoint("smartag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activateSmartAccessGatewayWithOptions(request: ActivateSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ActivateSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActivateSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new ActivateSmartAccessGatewayResponse({}));
  }

  async activateSmartAccessGateway(request: ActivateSmartAccessGatewayRequest): Promise<ActivateSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateSmartAccessGatewayWithOptions(request, runtime);
  }

  async activeFlowLogWithOptions(request: ActiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<ActiveFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveFlowLogResponse>(await this.callApi(params, req, runtime), new ActiveFlowLogResponse({}));
  }

  async activeFlowLog(request: ActiveFlowLogRequest): Promise<ActiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  async addACLRuleWithOptions(request: AddACLRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddACLRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!Util.isUnset(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!Util.isUnset(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddACLRule",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddACLRuleResponse>(await this.callApi(params, req, runtime), new AddACLRuleResponse({}));
  }

  async addACLRule(request: AddACLRuleRequest): Promise<AddACLRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addACLRuleWithOptions(request, runtime);
  }

  async addDnatEntryWithOptions(request: AddDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddDnatEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.externalIp)) {
      query["ExternalIp"] = request.externalIp;
    }

    if (!Util.isUnset(request.externalPort)) {
      query["ExternalPort"] = request.externalPort;
    }

    if (!Util.isUnset(request.internalIp)) {
      query["InternalIp"] = request.internalIp;
    }

    if (!Util.isUnset(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDnatEntryResponse>(await this.callApi(params, req, runtime), new AddDnatEntryResponse({}));
  }

  async addDnatEntry(request: AddDnatEntryRequest): Promise<AddDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnatEntryWithOptions(request, runtime);
  }

  async addSmartAccessGatewayDnsForwardWithOptions(request: AddSmartAccessGatewayDnsForwardRequest, runtime: $Util.RuntimeOptions): Promise<AddSmartAccessGatewayDnsForwardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.masterIp)) {
      query["MasterIp"] = request.masterIp;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outboundPortIndex)) {
      query["OutboundPortIndex"] = request.outboundPortIndex;
    }

    if (!Util.isUnset(request.outboundPortName)) {
      query["OutboundPortName"] = request.outboundPortName;
    }

    if (!Util.isUnset(request.outboundPortType)) {
      query["OutboundPortType"] = request.outboundPortType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!Util.isUnset(request.slaveIp)) {
      query["SlaveIp"] = request.slaveIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSmartAccessGatewayDnsForward",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSmartAccessGatewayDnsForwardResponse>(await this.callApi(params, req, runtime), new AddSmartAccessGatewayDnsForwardResponse({}));
  }

  async addSmartAccessGatewayDnsForward(request: AddSmartAccessGatewayDnsForwardRequest): Promise<AddSmartAccessGatewayDnsForwardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSmartAccessGatewayDnsForwardWithOptions(request, runtime);
  }

  async addSnatEntryWithOptions(request: AddSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddSnatEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.snatIp)) {
      query["SnatIp"] = request.snatIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSnatEntryResponse>(await this.callApi(params, req, runtime), new AddSnatEntryResponse({}));
  }

  async addSnatEntry(request: AddSnatEntryRequest): Promise<AddSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSnatEntryWithOptions(request, runtime);
  }

  async associateACLWithOptions(request: AssociateACLRequest, runtime: $Util.RuntimeOptions): Promise<AssociateACLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateACLResponse>(await this.callApi(params, req, runtime), new AssociateACLResponse({}));
  }

  async associateACL(request: AssociateACLRequest): Promise<AssociateACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateACLWithOptions(request, runtime);
  }

  async associateFlowLogWithOptions(request: AssociateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<AssociateFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateFlowLogResponse>(await this.callApi(params, req, runtime), new AssociateFlowLogResponse({}));
  }

  async associateFlowLog(request: AssociateFlowLogRequest): Promise<AssociateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateFlowLogWithOptions(request, runtime);
  }

  async associateQosWithOptions(request: AssociateQosRequest, runtime: $Util.RuntimeOptions): Promise<AssociateQosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateQosResponse>(await this.callApi(params, req, runtime), new AssociateQosResponse({}));
  }

  async associateQos(request: AssociateQosRequest): Promise<AssociateQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateQosWithOptions(request, runtime);
  }

  async associateSmartAGWithApplicationBandwidthPackageWithOptions(request: AssociateSmartAGWithApplicationBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<AssociateSmartAGWithApplicationBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationBandwidthPackageId)) {
      query["ApplicationBandwidthPackageId"] = request.applicationBandwidthPackageId;
    }

    if (!Util.isUnset(request.associateConfigs)) {
      query["AssociateConfigs"] = request.associateConfigs;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateSmartAGWithApplicationBandwidthPackage",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateSmartAGWithApplicationBandwidthPackageResponse>(await this.callApi(params, req, runtime), new AssociateSmartAGWithApplicationBandwidthPackageResponse({}));
  }

  async associateSmartAGWithApplicationBandwidthPackage(request: AssociateSmartAGWithApplicationBandwidthPackageRequest): Promise<AssociateSmartAGWithApplicationBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateSmartAGWithApplicationBandwidthPackageWithOptions(request, runtime);
  }

  async bindSerialNumberWithOptions(request: BindSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<BindSerialNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindSerialNumber",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindSerialNumberResponse>(await this.callApi(params, req, runtime), new BindSerialNumberResponse({}));
  }

  async bindSerialNumber(request: BindSerialNumberRequest): Promise<BindSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSerialNumberWithOptions(request, runtime);
  }

  async bindSmartAccessGatewayWithOptions(request: BindSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<BindSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new BindSmartAccessGatewayResponse({}));
  }

  async bindSmartAccessGateway(request: BindSmartAccessGatewayRequest): Promise<BindSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSmartAccessGatewayWithOptions(request, runtime);
  }

  async bindVbrWithOptions(request: BindVbrRequest, runtime: $Util.RuntimeOptions): Promise<BindVbrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    if (!Util.isUnset(request.vbrId)) {
      query["VbrId"] = request.vbrId;
    }

    if (!Util.isUnset(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindVbrResponse>(await this.callApi(params, req, runtime), new BindVbrResponse({}));
  }

  async bindVbr(request: BindVbrRequest): Promise<BindVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindVbrWithOptions(request, runtime);
  }

  async clearSagCipherWithOptions(request: ClearSagCipherRequest, runtime: $Util.RuntimeOptions): Promise<ClearSagCipherResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.snNumber)) {
      query["SnNumber"] = request.snNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearSagCipher",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearSagCipherResponse>(await this.callApi(params, req, runtime), new ClearSagCipherResponse({}));
  }

  async clearSagCipher(request: ClearSagCipherRequest): Promise<ClearSagCipherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearSagCipherWithOptions(request, runtime);
  }

  async clearSagRouteableAddressWithOptions(request: ClearSagRouteableAddressRequest, runtime: $Util.RuntimeOptions): Promise<ClearSagRouteableAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearSagRouteableAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearSagRouteableAddressResponse>(await this.callApi(params, req, runtime), new ClearSagRouteableAddressResponse({}));
  }

  async clearSagRouteableAddress(request: ClearSagRouteableAddressRequest): Promise<ClearSagRouteableAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearSagRouteableAddressWithOptions(request, runtime);
  }

  async createACLWithOptions(request: CreateACLRequest, runtime: $Util.RuntimeOptions): Promise<CreateACLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateACLResponse>(await this.callApi(params, req, runtime), new CreateACLResponse({}));
  }

  async createACL(request: CreateACLRequest): Promise<CreateACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createACLWithOptions(request, runtime);
  }

  async createCloudConnectNetworkWithOptions(request: CreateCloudConnectNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudConnectNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.snatCidrBlock)) {
      query["SnatCidrBlock"] = request.snatCidrBlock;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCloudConnectNetwork",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCloudConnectNetworkResponse>(await this.callApi(params, req, runtime), new CreateCloudConnectNetworkResponse({}));
  }

  async createCloudConnectNetwork(request: CreateCloudConnectNetworkRequest): Promise<CreateCloudConnectNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudConnectNetworkWithOptions(request, runtime);
  }

  async createEnterpriseCodeWithOptions(request: CreateEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnterpriseCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new CreateEnterpriseCodeResponse({}));
  }

  async createEnterpriseCode(request: CreateEnterpriseCodeRequest): Promise<CreateEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnterpriseCodeWithOptions(request, runtime);
  }

  async createFlowLogWithOptions(request: CreateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeAging)) {
      query["ActiveAging"] = request.activeAging;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inactiveAging)) {
      query["InactiveAging"] = request.inactiveAging;
    }

    if (!Util.isUnset(request.logstoreName)) {
      query["LogstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netflowServerIp)) {
      query["NetflowServerIp"] = request.netflowServerIp;
    }

    if (!Util.isUnset(request.netflowServerPort)) {
      query["NetflowServerPort"] = request.netflowServerPort;
    }

    if (!Util.isUnset(request.netflowVersion)) {
      query["NetflowVersion"] = request.netflowVersion;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFlowLogResponse>(await this.callApi(params, req, runtime), new CreateFlowLogResponse({}));
  }

  async createFlowLog(request: CreateFlowLogRequest): Promise<CreateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowLogWithOptions(request, runtime);
  }

  async createHealthCheckWithOptions(request: CreateHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<CreateHealthCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dstIpAddr)) {
      query["DstIpAddr"] = request.dstIpAddr;
    }

    if (!Util.isUnset(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!Util.isUnset(request.failCountThreshold)) {
      query["FailCountThreshold"] = request.failCountThreshold;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.probeCount)) {
      query["ProbeCount"] = request.probeCount;
    }

    if (!Util.isUnset(request.probeInterval)) {
      query["ProbeInterval"] = request.probeInterval;
    }

    if (!Util.isUnset(request.probeTimeout)) {
      query["ProbeTimeout"] = request.probeTimeout;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.rttFailThreshold)) {
      query["RttFailThreshold"] = request.rttFailThreshold;
    }

    if (!Util.isUnset(request.rttThreshold)) {
      query["RttThreshold"] = request.rttThreshold;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.srcIpAddr)) {
      query["SrcIpAddr"] = request.srcIpAddr;
    }

    if (!Util.isUnset(request.srcPort)) {
      query["SrcPort"] = request.srcPort;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHealthCheck",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHealthCheckResponse>(await this.callApi(params, req, runtime), new CreateHealthCheckResponse({}));
  }

  async createHealthCheck(request: CreateHealthCheckRequest): Promise<CreateHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHealthCheckWithOptions(request, runtime);
  }

  async createProbeTaskWithOptions(request: CreateProbeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateProbeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.packetNumber)) {
      query["PacketNumber"] = request.packetNumber;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.probeTaskSourceAddress)) {
      query["ProbeTaskSourceAddress"] = request.probeTaskSourceAddress;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProbeTaskResponse>(await this.callApi(params, req, runtime), new CreateProbeTaskResponse({}));
  }

  async createProbeTask(request: CreateProbeTaskRequest): Promise<CreateProbeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProbeTaskWithOptions(request, runtime);
  }

  async createQosWithOptions(request: CreateQosRequest, runtime: $Util.RuntimeOptions): Promise<CreateQosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosDescription)) {
      query["QosDescription"] = request.qosDescription;
    }

    if (!Util.isUnset(request.qosName)) {
      query["QosName"] = request.qosName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQosResponse>(await this.callApi(params, req, runtime), new CreateQosResponse({}));
  }

  async createQos(request: CreateQosRequest): Promise<CreateQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQosWithOptions(request, runtime);
  }

  async createQosCarWithOptions(request: CreateQosCarRequest, runtime: $Util.RuntimeOptions): Promise<CreateQosCarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.limitType)) {
      query["LimitType"] = request.limitType;
    }

    if (!Util.isUnset(request.maxBandwidthAbs)) {
      query["MaxBandwidthAbs"] = request.maxBandwidthAbs;
    }

    if (!Util.isUnset(request.maxBandwidthPercent)) {
      query["MaxBandwidthPercent"] = request.maxBandwidthPercent;
    }

    if (!Util.isUnset(request.minBandwidthAbs)) {
      query["MinBandwidthAbs"] = request.minBandwidthAbs;
    }

    if (!Util.isUnset(request.minBandwidthPercent)) {
      query["MinBandwidthPercent"] = request.minBandwidthPercent;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.percentSourceType)) {
      query["PercentSourceType"] = request.percentSourceType;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQosCar",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQosCarResponse>(await this.callApi(params, req, runtime), new CreateQosCarResponse({}));
  }

  async createQosCar(request: CreateQosCarRequest): Promise<CreateQosCarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQosCarWithOptions(request, runtime);
  }

  async createQosPolicyWithOptions(request: CreateQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateQosPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!Util.isUnset(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!Util.isUnset(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!Util.isUnset(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQosPolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQosPolicyResponse>(await this.callApi(params, req, runtime), new CreateQosPolicyResponse({}));
  }

  async createQosPolicy(request: CreateQosPolicyRequest): Promise<CreateQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQosPolicyWithOptions(request, runtime);
  }

  async createSagExpressConnectInterfaceWithOptions(request: CreateSagExpressConnectInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSagExpressConnectInterfaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSagExpressConnectInterface",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSagExpressConnectInterfaceResponse>(await this.callApi(params, req, runtime), new CreateSagExpressConnectInterfaceResponse({}));
  }

  async createSagExpressConnectInterface(request: CreateSagExpressConnectInterfaceRequest): Promise<CreateSagExpressConnectInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSagExpressConnectInterfaceWithOptions(request, runtime);
  }

  async createSagStaticRouteWithOptions(request: CreateSagStaticRouteRequest, runtime: $Util.RuntimeOptions): Promise<CreateSagStaticRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationCidr)) {
      query["DestinationCidr"] = request.destinationCidr;
    }

    if (!Util.isUnset(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSagStaticRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSagStaticRouteResponse>(await this.callApi(params, req, runtime), new CreateSagStaticRouteResponse({}));
  }

  async createSagStaticRoute(request: CreateSagStaticRouteRequest): Promise<CreateSagStaticRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSagStaticRouteWithOptions(request, runtime);
  }

  async createServiceAddressWithOptions(request: CreateServiceAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceAddressResponse>(await this.callApi(params, req, runtime), new CreateServiceAddressResponse({}));
  }

  async createServiceAddress(request: CreateServiceAddressRequest): Promise<CreateServiceAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceAddressWithOptions(request, runtime);
  }

  async createSmartAccessGatewayWithOptions(request: CreateSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alreadyHaveSag)) {
      query["AlreadyHaveSag"] = request.alreadyHaveSag;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.buyerMessage)) {
      query["BuyerMessage"] = request.buyerMessage;
    }

    if (!Util.isUnset(request.CPEVersion)) {
      query["CPEVersion"] = request.CPEVersion;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.haType)) {
      query["HaType"] = request.haType;
    }

    if (!Util.isUnset(request.hardWareSpec)) {
      query["HardWareSpec"] = request.hardWareSpec;
    }

    if (!Util.isUnset(request.maxBandWidth)) {
      query["MaxBandWidth"] = request.maxBandWidth;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.receiverAddress)) {
      query["ReceiverAddress"] = request.receiverAddress;
    }

    if (!Util.isUnset(request.receiverCity)) {
      query["ReceiverCity"] = request.receiverCity;
    }

    if (!Util.isUnset(request.receiverCountry)) {
      query["ReceiverCountry"] = request.receiverCountry;
    }

    if (!Util.isUnset(request.receiverDistrict)) {
      query["ReceiverDistrict"] = request.receiverDistrict;
    }

    if (!Util.isUnset(request.receiverEmail)) {
      query["ReceiverEmail"] = request.receiverEmail;
    }

    if (!Util.isUnset(request.receiverMobile)) {
      query["ReceiverMobile"] = request.receiverMobile;
    }

    if (!Util.isUnset(request.receiverName)) {
      query["ReceiverName"] = request.receiverName;
    }

    if (!Util.isUnset(request.receiverPhone)) {
      query["ReceiverPhone"] = request.receiverPhone;
    }

    if (!Util.isUnset(request.receiverState)) {
      query["ReceiverState"] = request.receiverState;
    }

    if (!Util.isUnset(request.receiverTown)) {
      query["ReceiverTown"] = request.receiverTown;
    }

    if (!Util.isUnset(request.receiverZip)) {
      query["ReceiverZip"] = request.receiverZip;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new CreateSmartAccessGatewayResponse({}));
  }

  async createSmartAccessGateway(request: CreateSmartAccessGatewayRequest): Promise<CreateSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmartAccessGatewayWithOptions(request, runtime);
  }

  async createSmartAccessGatewayClientUserWithOptions(request: CreateSmartAccessGatewayClientUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmartAccessGatewayClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userMail)) {
      query["UserMail"] = request.userMail;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSmartAccessGatewayClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSmartAccessGatewayClientUserResponse>(await this.callApi(params, req, runtime), new CreateSmartAccessGatewayClientUserResponse({}));
  }

  async createSmartAccessGatewayClientUser(request: CreateSmartAccessGatewayClientUserRequest): Promise<CreateSmartAccessGatewayClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  async createSmartAccessGatewaySoftwareWithOptions(request: CreateSmartAccessGatewaySoftwareRequest, runtime: $Util.RuntimeOptions): Promise<CreateSmartAccessGatewaySoftwareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.dataPlan)) {
      query["DataPlan"] = request.dataPlan;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSmartAccessGatewaySoftware",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSmartAccessGatewaySoftwareResponse>(await this.callApi(params, req, runtime), new CreateSmartAccessGatewaySoftwareResponse({}));
  }

  async createSmartAccessGatewaySoftware(request: CreateSmartAccessGatewaySoftwareRequest): Promise<CreateSmartAccessGatewaySoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  async deactiveFlowLogWithOptions(request: DeactiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeactiveFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeactiveFlowLogResponse>(await this.callApi(params, req, runtime), new DeactiveFlowLogResponse({}));
  }

  async deactiveFlowLog(request: DeactiveFlowLogRequest): Promise<DeactiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  async deleteACLWithOptions(request: DeleteACLRequest, runtime: $Util.RuntimeOptions): Promise<DeleteACLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteACLResponse>(await this.callApi(params, req, runtime), new DeleteACLResponse({}));
  }

  async deleteACL(request: DeleteACLRequest): Promise<DeleteACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteACLWithOptions(request, runtime);
  }

  async deleteACLRuleWithOptions(request: DeleteACLRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteACLRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.acrId)) {
      query["AcrId"] = request.acrId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteACLRule",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteACLRuleResponse>(await this.callApi(params, req, runtime), new DeleteACLRuleResponse({}));
  }

  async deleteACLRule(request: DeleteACLRuleRequest): Promise<DeleteACLRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteACLRuleWithOptions(request, runtime);
  }

  async deleteCloudConnectNetworkWithOptions(request: DeleteCloudConnectNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudConnectNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCloudConnectNetwork",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCloudConnectNetworkResponse>(await this.callApi(params, req, runtime), new DeleteCloudConnectNetworkResponse({}));
  }

  async deleteCloudConnectNetwork(request: DeleteCloudConnectNetworkRequest): Promise<DeleteCloudConnectNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudConnectNetworkWithOptions(request, runtime);
  }

  async deleteDnatEntryWithOptions(request: DeleteDnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnatEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dnatEntryId)) {
      query["DnatEntryId"] = request.dnatEntryId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDnatEntryResponse>(await this.callApi(params, req, runtime), new DeleteDnatEntryResponse({}));
  }

  async deleteDnatEntry(request: DeleteDnatEntryRequest): Promise<DeleteDnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnatEntryWithOptions(request, runtime);
  }

  async deleteEnterpriseCodeWithOptions(request: DeleteEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new DeleteEnterpriseCodeResponse({}));
  }

  async deleteEnterpriseCode(request: DeleteEnterpriseCodeRequest): Promise<DeleteEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseCodeWithOptions(request, runtime);
  }

  async deleteFlowLogWithOptions(request: DeleteFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFlowLogResponse>(await this.callApi(params, req, runtime), new DeleteFlowLogResponse({}));
  }

  async deleteFlowLog(request: DeleteFlowLogRequest): Promise<DeleteFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowLogWithOptions(request, runtime);
  }

  async deleteHealthCheckWithOptions(request: DeleteHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHealthCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHealthCheck",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHealthCheckResponse>(await this.callApi(params, req, runtime), new DeleteHealthCheckResponse({}));
  }

  async deleteHealthCheck(request: DeleteHealthCheckRequest): Promise<DeleteHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHealthCheckWithOptions(request, runtime);
  }

  async deleteProbeTaskWithOptions(request: DeleteProbeTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProbeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.probeTaskId)) {
      query["ProbeTaskId"] = request.probeTaskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProbeTaskResponse>(await this.callApi(params, req, runtime), new DeleteProbeTaskResponse({}));
  }

  async deleteProbeTask(request: DeleteProbeTaskRequest): Promise<DeleteProbeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProbeTaskWithOptions(request, runtime);
  }

  async deleteQosWithOptions(request: DeleteQosRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQosResponse>(await this.callApi(params, req, runtime), new DeleteQosResponse({}));
  }

  async deleteQos(request: DeleteQosRequest): Promise<DeleteQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQosWithOptions(request, runtime);
  }

  async deleteQosCarWithOptions(request: DeleteQosCarRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQosCarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosCarId)) {
      query["QosCarId"] = request.qosCarId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQosCar",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQosCarResponse>(await this.callApi(params, req, runtime), new DeleteQosCarResponse({}));
  }

  async deleteQosCar(request: DeleteQosCarRequest): Promise<DeleteQosCarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQosCarWithOptions(request, runtime);
  }

  async deleteQosPolicyWithOptions(request: DeleteQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQosPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQosPolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQosPolicyResponse>(await this.callApi(params, req, runtime), new DeleteQosPolicyResponse({}));
  }

  async deleteQosPolicy(request: DeleteQosPolicyRequest): Promise<DeleteQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQosPolicyWithOptions(request, runtime);
  }

  async deleteRouteDistributionStrategyWithOptions(request: DeleteRouteDistributionStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteDistributionStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destCidrBlock)) {
      query["DestCidrBlock"] = request.destCidrBlock;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeSource)) {
      query["RouteSource"] = request.routeSource;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRouteDistributionStrategy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRouteDistributionStrategyResponse>(await this.callApi(params, req, runtime), new DeleteRouteDistributionStrategyResponse({}));
  }

  async deleteRouteDistributionStrategy(request: DeleteRouteDistributionStrategyRequest): Promise<DeleteRouteDistributionStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteDistributionStrategyWithOptions(request, runtime);
  }

  async deleteSagExpressConnectInterfaceWithOptions(request: DeleteSagExpressConnectInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSagExpressConnectInterfaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSagExpressConnectInterface",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSagExpressConnectInterfaceResponse>(await this.callApi(params, req, runtime), new DeleteSagExpressConnectInterfaceResponse({}));
  }

  async deleteSagExpressConnectInterface(request: DeleteSagExpressConnectInterfaceRequest): Promise<DeleteSagExpressConnectInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSagExpressConnectInterfaceWithOptions(request, runtime);
  }

  async deleteSagStaticRouteWithOptions(request: DeleteSagStaticRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSagStaticRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationCidr)) {
      query["DestinationCidr"] = request.destinationCidr;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSagStaticRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSagStaticRouteResponse>(await this.callApi(params, req, runtime), new DeleteSagStaticRouteResponse({}));
  }

  async deleteSagStaticRoute(request: DeleteSagStaticRouteRequest): Promise<DeleteSagStaticRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSagStaticRouteWithOptions(request, runtime);
  }

  async deleteServiceAddressWithOptions(request: DeleteServiceAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceAddressResponse>(await this.callApi(params, req, runtime), new DeleteServiceAddressResponse({}));
  }

  async deleteServiceAddress(request: DeleteServiceAddressRequest): Promise<DeleteServiceAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceAddressWithOptions(request, runtime);
  }

  async deleteSmartAccessGatewayWithOptions(request: DeleteSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new DeleteSmartAccessGatewayResponse({}));
  }

  async deleteSmartAccessGateway(request: DeleteSmartAccessGatewayRequest): Promise<DeleteSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayWithOptions(request, runtime);
  }

  async deleteSmartAccessGatewayClientUserWithOptions(request: DeleteSmartAccessGatewayClientUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartAccessGatewayClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmartAccessGatewayClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmartAccessGatewayClientUserResponse>(await this.callApi(params, req, runtime), new DeleteSmartAccessGatewayClientUserResponse({}));
  }

  async deleteSmartAccessGatewayClientUser(request: DeleteSmartAccessGatewayClientUserRequest): Promise<DeleteSmartAccessGatewayClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  async deleteSmartAccessGatewayDnsForwardWithOptions(request: DeleteSmartAccessGatewayDnsForwardRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSmartAccessGatewayDnsForwardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSmartAccessGatewayDnsForward",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSmartAccessGatewayDnsForwardResponse>(await this.callApi(params, req, runtime), new DeleteSmartAccessGatewayDnsForwardResponse({}));
  }

  async deleteSmartAccessGatewayDnsForward(request: DeleteSmartAccessGatewayDnsForwardRequest): Promise<DeleteSmartAccessGatewayDnsForwardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSmartAccessGatewayDnsForwardWithOptions(request, runtime);
  }

  async deleteSnatEntryWithOptions(request: DeleteSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnatEntryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnatEntry",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnatEntryResponse>(await this.callApi(params, req, runtime), new DeleteSnatEntryResponse({}));
  }

  async deleteSnatEntry(request: DeleteSnatEntryRequest): Promise<DeleteSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  async describeACLAttributeWithOptions(request: DescribeACLAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeACLAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeACLAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeACLAttributeResponse>(await this.callApi(params, req, runtime), new DescribeACLAttributeResponse({}));
  }

  async describeACLAttribute(request: DescribeACLAttributeRequest): Promise<DescribeACLAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeACLAttributeWithOptions(request, runtime);
  }

  async describeACLsWithOptions(request: DescribeACLsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeACLsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeACLs",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeACLsResponse>(await this.callApi(params, req, runtime), new DescribeACLsResponse({}));
  }

  async describeACLs(request: DescribeACLsRequest): Promise<DescribeACLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeACLsWithOptions(request, runtime);
  }

  async describeBindableSmartAccessGatewaysWithOptions(request: DescribeBindableSmartAccessGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBindableSmartAccessGatewaysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBindableSmartAccessGateways",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBindableSmartAccessGatewaysResponse>(await this.callApi(params, req, runtime), new DescribeBindableSmartAccessGatewaysResponse({}));
  }

  async describeBindableSmartAccessGateways(request: DescribeBindableSmartAccessGatewaysRequest): Promise<DescribeBindableSmartAccessGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBindableSmartAccessGatewaysWithOptions(request, runtime);
  }

  async describeClientUserDNSWithOptions(request: DescribeClientUserDNSRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientUserDNSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientUserDNS",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientUserDNSResponse>(await this.callApi(params, req, runtime), new DescribeClientUserDNSResponse({}));
  }

  async describeClientUserDNS(request: DescribeClientUserDNSRequest): Promise<DescribeClientUserDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientUserDNSWithOptions(request, runtime);
  }

  async describeCloudConnectNetworksWithOptions(request: DescribeCloudConnectNetworksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudConnectNetworksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudConnectNetworks",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudConnectNetworksResponse>(await this.callApi(params, req, runtime), new DescribeCloudConnectNetworksResponse({}));
  }

  async describeCloudConnectNetworks(request: DescribeCloudConnectNetworksRequest): Promise<DescribeCloudConnectNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudConnectNetworksWithOptions(request, runtime);
  }

  async describeDeviceAutoUpgradePolicyWithOptions(request: DescribeDeviceAutoUpgradePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceAutoUpgradePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeviceAutoUpgradePolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeviceAutoUpgradePolicyResponse>(await this.callApi(params, req, runtime), new DescribeDeviceAutoUpgradePolicyResponse({}));
  }

  async describeDeviceAutoUpgradePolicy(request: DescribeDeviceAutoUpgradePolicyRequest): Promise<DescribeDeviceAutoUpgradePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceAutoUpgradePolicyWithOptions(request, runtime);
  }

  async describeDnatEntriesWithOptions(request: DescribeDnatEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnatEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnatEntries",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnatEntriesResponse>(await this.callApi(params, req, runtime), new DescribeDnatEntriesResponse({}));
  }

  async describeDnatEntries(request: DescribeDnatEntriesRequest): Promise<DescribeDnatEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnatEntriesWithOptions(request, runtime);
  }

  async describeFlowLogSagsWithOptions(request: DescribeFlowLogSagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowLogSagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowLogSags",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowLogSagsResponse>(await this.callApi(params, req, runtime), new DescribeFlowLogSagsResponse({}));
  }

  async describeFlowLogSags(request: DescribeFlowLogSagsRequest): Promise<DescribeFlowLogSagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowLogSagsWithOptions(request, runtime);
  }

  async describeFlowLogsWithOptions(request: DescribeFlowLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.flowLogName)) {
      query["FlowLogName"] = request.flowLogName;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowLogs",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowLogsResponse>(await this.callApi(params, req, runtime), new DescribeFlowLogsResponse({}));
  }

  async describeFlowLogs(request: DescribeFlowLogsRequest): Promise<DescribeFlowLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowLogsWithOptions(request, runtime);
  }

  async describeGrantRulesWithOptions(request: DescribeGrantRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.associatedCcnId)) {
      query["AssociatedCcnId"] = request.associatedCcnId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGrantRules",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGrantRulesResponse>(await this.callApi(params, req, runtime), new DescribeGrantRulesResponse({}));
  }

  async describeGrantRules(request: DescribeGrantRulesRequest): Promise<DescribeGrantRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantRulesWithOptions(request, runtime);
  }

  async describeGrantSagRulesWithOptions(request: DescribeGrantSagRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantSagRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGrantSagRules",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGrantSagRulesResponse>(await this.callApi(params, req, runtime), new DescribeGrantSagRulesResponse({}));
  }

  async describeGrantSagRules(request: DescribeGrantSagRulesRequest): Promise<DescribeGrantSagRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantSagRulesWithOptions(request, runtime);
  }

  async describeGrantSagVbrRulesWithOptions(request: DescribeGrantSagVbrRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantSagVbrRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGrantSagVbrRules",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGrantSagVbrRulesResponse>(await this.callApi(params, req, runtime), new DescribeGrantSagVbrRulesResponse({}));
  }

  async describeGrantSagVbrRules(request: DescribeGrantSagVbrRulesRequest): Promise<DescribeGrantSagVbrRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantSagVbrRulesWithOptions(request, runtime);
  }

  async describeHealthCheckAttributeWithOptions(request: DescribeHealthCheckAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHealthCheckAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthCheckAttributeResponse>(await this.callApi(params, req, runtime), new DescribeHealthCheckAttributeResponse({}));
  }

  async describeHealthCheckAttribute(request: DescribeHealthCheckAttributeRequest): Promise<DescribeHealthCheckAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckAttributeWithOptions(request, runtime);
  }

  async describeHealthChecksWithOptions(request: DescribeHealthChecksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthChecksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHealthChecks",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHealthChecksResponse>(await this.callApi(params, req, runtime), new DescribeHealthChecksResponse({}));
  }

  async describeHealthChecks(request: DescribeHealthChecksRequest): Promise<DescribeHealthChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthChecksWithOptions(request, runtime);
  }

  async describeQosCarsWithOptions(request: DescribeQosCarsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQosCarsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.qosCarId)) {
      query["QosCarId"] = request.qosCarId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQosCars",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQosCarsResponse>(await this.callApi(params, req, runtime), new DescribeQosCarsResponse({}));
  }

  async describeQosCars(request: DescribeQosCarsRequest): Promise<DescribeQosCarsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQosCarsWithOptions(request, runtime);
  }

  async describeQosPoliciesWithOptions(request: DescribeQosPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQosPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQosPolicies",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQosPoliciesResponse>(await this.callApi(params, req, runtime), new DescribeQosPoliciesResponse({}));
  }

  async describeQosPolicies(request: DescribeQosPoliciesRequest): Promise<DescribeQosPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQosPoliciesWithOptions(request, runtime);
  }

  async describeQosesWithOptions(request: DescribeQosesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQosesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.qosIds)) {
      query["QosIds"] = request.qosIds;
    }

    if (!Util.isUnset(request.qosName)) {
      query["QosName"] = request.qosName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQoses",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeQosesResponse>(await this.callApi(params, req, runtime), new DescribeQosesResponse({}));
  }

  async describeQoses(request: DescribeQosesRequest): Promise<DescribeQosesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQosesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-03-13",
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

  async describeRouteDistributionStrategiesWithOptions(request: DescribeRouteDistributionStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteDistributionStrategiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRouteDistributionStrategies",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRouteDistributionStrategiesResponse>(await this.callApi(params, req, runtime), new DescribeRouteDistributionStrategiesResponse({}));
  }

  async describeRouteDistributionStrategies(request: DescribeRouteDistributionStrategiesRequest): Promise<DescribeRouteDistributionStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteDistributionStrategiesWithOptions(request, runtime);
  }

  async describeSAGDeviceInfoWithOptions(request: DescribeSAGDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSAGDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSAGDeviceInfo",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSAGDeviceInfoResponse>(await this.callApi(params, req, runtime), new DescribeSAGDeviceInfoResponse({}));
  }

  async describeSAGDeviceInfo(request: DescribeSAGDeviceInfoRequest): Promise<DescribeSAGDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSAGDeviceInfoWithOptions(request, runtime);
  }

  async describeSagCurrentDnsWithOptions(request: DescribeSagCurrentDnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagCurrentDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagCurrentDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagCurrentDnsResponse>(await this.callApi(params, req, runtime), new DescribeSagCurrentDnsResponse({}));
  }

  async describeSagCurrentDns(request: DescribeSagCurrentDnsRequest): Promise<DescribeSagCurrentDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagCurrentDnsWithOptions(request, runtime);
  }

  async describeSagDropTopNWithOptions(request: DescribeSagDropTopNRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagDropTopNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagDropTopN",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagDropTopNResponse>(await this.callApi(params, req, runtime), new DescribeSagDropTopNResponse({}));
  }

  async describeSagDropTopN(request: DescribeSagDropTopNRequest): Promise<DescribeSagDropTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagDropTopNWithOptions(request, runtime);
  }

  async describeSagExpressConnectInterfaceListWithOptions(request: DescribeSagExpressConnectInterfaceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagExpressConnectInterfaceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagExpressConnectInterfaceList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagExpressConnectInterfaceListResponse>(await this.callApi(params, req, runtime), new DescribeSagExpressConnectInterfaceListResponse({}));
  }

  async describeSagExpressConnectInterfaceList(request: DescribeSagExpressConnectInterfaceListRequest): Promise<DescribeSagExpressConnectInterfaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagExpressConnectInterfaceListWithOptions(request, runtime);
  }

  async describeSagGlobalRouteProtocolWithOptions(request: DescribeSagGlobalRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagGlobalRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new DescribeSagGlobalRouteProtocolResponse({}));
  }

  async describeSagGlobalRouteProtocol(request: DescribeSagGlobalRouteProtocolRequest): Promise<DescribeSagGlobalRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagGlobalRouteProtocolWithOptions(request, runtime);
  }

  async describeSagHaWithOptions(request: DescribeSagHaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagHaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagHa",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagHaResponse>(await this.callApi(params, req, runtime), new DescribeSagHaResponse({}));
  }

  async describeSagHa(request: DescribeSagHaRequest): Promise<DescribeSagHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagHaWithOptions(request, runtime);
  }

  async describeSagLanListWithOptions(request: DescribeSagLanListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagLanListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagLanList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagLanListResponse>(await this.callApi(params, req, runtime), new DescribeSagLanListResponse({}));
  }

  async describeSagLanList(request: DescribeSagLanListRequest): Promise<DescribeSagLanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagLanListWithOptions(request, runtime);
  }

  async describeSagManagementPortWithOptions(request: DescribeSagManagementPortRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagManagementPortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagManagementPort",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagManagementPortResponse>(await this.callApi(params, req, runtime), new DescribeSagManagementPortResponse({}));
  }

  async describeSagManagementPort(request: DescribeSagManagementPortRequest): Promise<DescribeSagManagementPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagManagementPortWithOptions(request, runtime);
  }

  async describeSagOnlineClientStatisticsWithOptions(request: DescribeSagOnlineClientStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagOnlineClientStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGIds)) {
      query["SmartAGIds"] = request.smartAGIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagOnlineClientStatistics",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagOnlineClientStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeSagOnlineClientStatisticsResponse({}));
  }

  async describeSagOnlineClientStatistics(request: DescribeSagOnlineClientStatisticsRequest): Promise<DescribeSagOnlineClientStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagOnlineClientStatisticsWithOptions(request, runtime);
  }

  async describeSagPortListWithOptions(request: DescribeSagPortListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagPortListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagPortList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagPortListResponse>(await this.callApi(params, req, runtime), new DescribeSagPortListResponse({}));
  }

  async describeSagPortList(request: DescribeSagPortListRequest): Promise<DescribeSagPortListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagPortListWithOptions(request, runtime);
  }

  async describeSagPortRouteProtocolListWithOptions(request: DescribeSagPortRouteProtocolListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagPortRouteProtocolListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagPortRouteProtocolList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagPortRouteProtocolListResponse>(await this.callApi(params, req, runtime), new DescribeSagPortRouteProtocolListResponse({}));
  }

  async describeSagPortRouteProtocolList(request: DescribeSagPortRouteProtocolListRequest): Promise<DescribeSagPortRouteProtocolListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagPortRouteProtocolListWithOptions(request, runtime);
  }

  async describeSagRemoteAccessWithOptions(request: DescribeSagRemoteAccessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRemoteAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagRemoteAccess",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagRemoteAccessResponse>(await this.callApi(params, req, runtime), new DescribeSagRemoteAccessResponse({}));
  }

  async describeSagRemoteAccess(request: DescribeSagRemoteAccessRequest): Promise<DescribeSagRemoteAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRemoteAccessWithOptions(request, runtime);
  }

  async describeSagRouteListWithOptions(request: DescribeSagRouteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagRouteList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagRouteListResponse>(await this.callApi(params, req, runtime), new DescribeSagRouteListResponse({}));
  }

  async describeSagRouteList(request: DescribeSagRouteListRequest): Promise<DescribeSagRouteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteListWithOptions(request, runtime);
  }

  async describeSagRouteProtocolBgpWithOptions(request: DescribeSagRouteProtocolBgpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteProtocolBgpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagRouteProtocolBgp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagRouteProtocolBgpResponse>(await this.callApi(params, req, runtime), new DescribeSagRouteProtocolBgpResponse({}));
  }

  async describeSagRouteProtocolBgp(request: DescribeSagRouteProtocolBgpRequest): Promise<DescribeSagRouteProtocolBgpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteProtocolBgpWithOptions(request, runtime);
  }

  async describeSagRouteProtocolOspfWithOptions(request: DescribeSagRouteProtocolOspfRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagRouteProtocolOspfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagRouteProtocolOspf",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagRouteProtocolOspfResponse>(await this.callApi(params, req, runtime), new DescribeSagRouteProtocolOspfResponse({}));
  }

  async describeSagRouteProtocolOspf(request: DescribeSagRouteProtocolOspfRequest): Promise<DescribeSagRouteProtocolOspfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagRouteProtocolOspfWithOptions(request, runtime);
  }

  async describeSagStaticRouteListWithOptions(request: DescribeSagStaticRouteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagStaticRouteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagStaticRouteList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagStaticRouteListResponse>(await this.callApi(params, req, runtime), new DescribeSagStaticRouteListResponse({}));
  }

  async describeSagStaticRouteList(request: DescribeSagStaticRouteListRequest): Promise<DescribeSagStaticRouteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagStaticRouteListWithOptions(request, runtime);
  }

  async describeSagTrafficTopNWithOptions(request: DescribeSagTrafficTopNRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagTrafficTopNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagTrafficTopN",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagTrafficTopNResponse>(await this.callApi(params, req, runtime), new DescribeSagTrafficTopNResponse({}));
  }

  async describeSagTrafficTopN(request: DescribeSagTrafficTopNRequest): Promise<DescribeSagTrafficTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagTrafficTopNWithOptions(request, runtime);
  }

  async describeSagUserDnsWithOptions(request: DescribeSagUserDnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagUserDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagUserDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagUserDnsResponse>(await this.callApi(params, req, runtime), new DescribeSagUserDnsResponse({}));
  }

  async describeSagUserDns(request: DescribeSagUserDnsRequest): Promise<DescribeSagUserDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagUserDnsWithOptions(request, runtime);
  }

  async describeSagVbrRelationsWithOptions(request: DescribeSagVbrRelationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagVbrRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vbrInstanceIds)) {
      query["VbrInstanceIds"] = request.vbrInstanceIds;
    }

    if (!Util.isUnset(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagVbrRelations",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagVbrRelationsResponse>(await this.callApi(params, req, runtime), new DescribeSagVbrRelationsResponse({}));
  }

  async describeSagVbrRelations(request: DescribeSagVbrRelationsRequest): Promise<DescribeSagVbrRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagVbrRelationsWithOptions(request, runtime);
  }

  async describeSagWan4GWithOptions(request: DescribeSagWan4GRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWan4GResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagWan4G",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagWan4GResponse>(await this.callApi(params, req, runtime), new DescribeSagWan4GResponse({}));
  }

  async describeSagWan4G(request: DescribeSagWan4GRequest): Promise<DescribeSagWan4GResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWan4GWithOptions(request, runtime);
  }

  async describeSagWanListWithOptions(request: DescribeSagWanListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWanListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagWanList",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagWanListResponse>(await this.callApi(params, req, runtime), new DescribeSagWanListResponse({}));
  }

  async describeSagWanList(request: DescribeSagWanListRequest): Promise<DescribeSagWanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWanListWithOptions(request, runtime);
  }

  async describeSagWanSnatWithOptions(request: DescribeSagWanSnatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWanSnatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagWanSnatResponse>(await this.callApi(params, req, runtime), new DescribeSagWanSnatResponse({}));
  }

  async describeSagWanSnat(request: DescribeSagWanSnatRequest): Promise<DescribeSagWanSnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWanSnatWithOptions(request, runtime);
  }

  async describeSagWifiWithOptions(request: DescribeSagWifiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSagWifiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSagWifi",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSagWifiResponse>(await this.callApi(params, req, runtime), new DescribeSagWifiResponse({}));
  }

  async describeSagWifi(request: DescribeSagWifiRequest): Promise<DescribeSagWifiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSagWifiWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayAttributeWithOptions(request: DescribeSmartAccessGatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartAccessGatewayAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartAccessGatewayAttributeResponse>(await this.callApi(params, req, runtime), new DescribeSmartAccessGatewayAttributeResponse({}));
  }

  async describeSmartAccessGatewayAttribute(request: DescribeSmartAccessGatewayAttributeRequest): Promise<DescribeSmartAccessGatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayAttributeWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayClientUsersWithOptions(request: DescribeSmartAccessGatewayClientUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayClientUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userMail)) {
      query["UserMail"] = request.userMail;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartAccessGatewayClientUsers",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartAccessGatewayClientUsersResponse>(await this.callApi(params, req, runtime), new DescribeSmartAccessGatewayClientUsersResponse({}));
  }

  async describeSmartAccessGatewayClientUsers(request: DescribeSmartAccessGatewayClientUsersRequest): Promise<DescribeSmartAccessGatewayClientUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayClientUsersWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayHaWithOptions(request: DescribeSmartAccessGatewayHaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayHaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartAccessGatewayHa",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartAccessGatewayHaResponse>(await this.callApi(params, req, runtime), new DescribeSmartAccessGatewayHaResponse({}));
  }

  async describeSmartAccessGatewayHa(request: DescribeSmartAccessGatewayHaRequest): Promise<DescribeSmartAccessGatewayHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayHaWithOptions(request, runtime);
  }

  async describeSmartAccessGatewayVersionsWithOptions(request: DescribeSmartAccessGatewayVersionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewayVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartAccessGatewayVersions",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartAccessGatewayVersionsResponse>(await this.callApi(params, req, runtime), new DescribeSmartAccessGatewayVersionsResponse({}));
  }

  async describeSmartAccessGatewayVersions(request: DescribeSmartAccessGatewayVersionsRequest): Promise<DescribeSmartAccessGatewayVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewayVersionsWithOptions(request, runtime);
  }

  async describeSmartAccessGatewaysWithOptions(request: DescribeSmartAccessGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSmartAccessGatewaysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.associatedCcnId)) {
      query["AssociatedCcnId"] = request.associatedCcnId;
    }

    if (!Util.isUnset(request.associatedCcnName)) {
      query["AssociatedCcnName"] = request.associatedCcnName;
    }

    if (!Util.isUnset(request.businessState)) {
      query["BusinessState"] = request.businessState;
    }

    if (!Util.isUnset(request.canAssociateQos)) {
      query["CanAssociateQos"] = request.canAssociateQos;
    }

    if (!Util.isUnset(request.hardwareType)) {
      query["HardwareType"] = request.hardwareType;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGIds)) {
      query["SmartAGIds"] = request.smartAGIds;
    }

    if (!Util.isUnset(request.softwareVersion)) {
      query["SoftwareVersion"] = request.softwareVersion;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.unboundAclIds)) {
      query["UnboundAclIds"] = request.unboundAclIds;
    }

    if (!Util.isUnset(request.versionComparator)) {
      query["VersionComparator"] = request.versionComparator;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSmartAccessGateways",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSmartAccessGatewaysResponse>(await this.callApi(params, req, runtime), new DescribeSmartAccessGatewaysResponse({}));
  }

  async describeSmartAccessGateways(request: DescribeSmartAccessGatewaysRequest): Promise<DescribeSmartAccessGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSmartAccessGatewaysWithOptions(request, runtime);
  }

  async describeSnatEntriesWithOptions(request: DescribeSnatEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnatEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSnatEntries",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSnatEntriesResponse>(await this.callApi(params, req, runtime), new DescribeSnatEntriesResponse({}));
  }

  async describeSnatEntries(request: DescribeSnatEntriesRequest): Promise<DescribeSnatEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnatEntriesWithOptions(request, runtime);
  }

  async describeUnbindFlowLogSagsWithOptions(request: DescribeUnbindFlowLogSagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnbindFlowLogSagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUnbindFlowLogSags",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUnbindFlowLogSagsResponse>(await this.callApi(params, req, runtime), new DescribeUnbindFlowLogSagsResponse({}));
  }

  async describeUnbindFlowLogSags(request: DescribeUnbindFlowLogSagsRequest): Promise<DescribeUnbindFlowLogSagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnbindFlowLogSagsWithOptions(request, runtime);
  }

  async describeUserFlowStatisticsWithOptions(request: DescribeUserFlowStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserFlowStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.statisticsDate)) {
      query["StatisticsDate"] = request.statisticsDate;
    }

    if (!Util.isUnset(request.userNames)) {
      query["UserNames"] = request.userNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserFlowStatistics",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserFlowStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeUserFlowStatisticsResponse({}));
  }

  async describeUserFlowStatistics(request: DescribeUserFlowStatisticsRequest): Promise<DescribeUserFlowStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserFlowStatisticsWithOptions(request, runtime);
  }

  async describeUserOnlineClientStatisticsWithOptions(request: DescribeUserOnlineClientStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserOnlineClientStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userNames)) {
      query["UserNames"] = request.userNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserOnlineClientStatistics",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserOnlineClientStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeUserOnlineClientStatisticsResponse({}));
  }

  async describeUserOnlineClientStatistics(request: DescribeUserOnlineClientStatisticsRequest): Promise<DescribeUserOnlineClientStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserOnlineClientStatisticsWithOptions(request, runtime);
  }

  async describeUserOnlineClientsWithOptions(request: DescribeUserOnlineClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserOnlineClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserOnlineClients",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserOnlineClientsResponse>(await this.callApi(params, req, runtime), new DescribeUserOnlineClientsResponse({}));
  }

  async describeUserOnlineClients(request: DescribeUserOnlineClientsRequest): Promise<DescribeUserOnlineClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserOnlineClientsWithOptions(request, runtime);
  }

  async diagnoseSmartAccessGatewayWithOptions(request: DiagnoseSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DiagnoseSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DiagnoseSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DiagnoseSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new DiagnoseSmartAccessGatewayResponse({}));
  }

  async diagnoseSmartAccessGateway(request: DiagnoseSmartAccessGatewayRequest): Promise<DiagnoseSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.diagnoseSmartAccessGatewayWithOptions(request, runtime);
  }

  async disableSmartAGDpiMonitorWithOptions(request: DisableSmartAGDpiMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DisableSmartAGDpiMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSmartAGDpiMonitor",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSmartAGDpiMonitorResponse>(await this.callApi(params, req, runtime), new DisableSmartAGDpiMonitorResponse({}));
  }

  async disableSmartAGDpiMonitor(request: DisableSmartAGDpiMonitorRequest): Promise<DisableSmartAGDpiMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSmartAGDpiMonitorWithOptions(request, runtime);
  }

  async disableSmartAccessGatewayUserWithOptions(request: DisableSmartAccessGatewayUserRequest, runtime: $Util.RuntimeOptions): Promise<DisableSmartAccessGatewayUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSmartAccessGatewayUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSmartAccessGatewayUserResponse>(await this.callApi(params, req, runtime), new DisableSmartAccessGatewayUserResponse({}));
  }

  async disableSmartAccessGatewayUser(request: DisableSmartAccessGatewayUserRequest): Promise<DisableSmartAccessGatewayUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSmartAccessGatewayUserWithOptions(request, runtime);
  }

  async disassociateACLWithOptions(request: DisassociateACLRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateACLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateACLResponse>(await this.callApi(params, req, runtime), new DisassociateACLResponse({}));
  }

  async disassociateACL(request: DisassociateACLRequest): Promise<DisassociateACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateACLWithOptions(request, runtime);
  }

  async disassociateFlowLogWithOptions(request: DisassociateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateFlowLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateFlowLog",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateFlowLogResponse>(await this.callApi(params, req, runtime), new DisassociateFlowLogResponse({}));
  }

  async disassociateFlowLog(request: DisassociateFlowLogRequest): Promise<DisassociateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateFlowLogWithOptions(request, runtime);
  }

  async disassociateQosWithOptions(request: DisassociateQosRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateQosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateQosResponse>(await this.callApi(params, req, runtime), new DisassociateQosResponse({}));
  }

  async disassociateQos(request: DisassociateQosRequest): Promise<DisassociateQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateQosWithOptions(request, runtime);
  }

  async discribeSmartAccessGatewayDiagnosisReportWithOptions(request: DiscribeSmartAccessGatewayDiagnosisReportRequest, runtime: $Util.RuntimeOptions): Promise<DiscribeSmartAccessGatewayDiagnosisReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DiscribeSmartAccessGatewayDiagnosisReport",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DiscribeSmartAccessGatewayDiagnosisReportResponse>(await this.callApi(params, req, runtime), new DiscribeSmartAccessGatewayDiagnosisReportResponse({}));
  }

  async discribeSmartAccessGatewayDiagnosisReport(request: DiscribeSmartAccessGatewayDiagnosisReportRequest): Promise<DiscribeSmartAccessGatewayDiagnosisReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.discribeSmartAccessGatewayDiagnosisReportWithOptions(request, runtime);
  }

  async dissociateSmartAGFromApplicationBandwidthPackageWithOptions(request: DissociateSmartAGFromApplicationBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DissociateSmartAGFromApplicationBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationBandwidthPackageId)) {
      query["ApplicationBandwidthPackageId"] = request.applicationBandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGIdList)) {
      query["SmartAGIdList"] = request.smartAGIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateSmartAGFromApplicationBandwidthPackage",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateSmartAGFromApplicationBandwidthPackageResponse>(await this.callApi(params, req, runtime), new DissociateSmartAGFromApplicationBandwidthPackageResponse({}));
  }

  async dissociateSmartAGFromApplicationBandwidthPackage(request: DissociateSmartAGFromApplicationBandwidthPackageRequest): Promise<DissociateSmartAGFromApplicationBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateSmartAGFromApplicationBandwidthPackageWithOptions(request, runtime);
  }

  async downgradeSmartAccessGatewayWithOptions(request: DowngradeSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DowngradeSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandWidthSpec)) {
      query["BandWidthSpec"] = request.bandWidthSpec;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DowngradeSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DowngradeSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new DowngradeSmartAccessGatewayResponse({}));
  }

  async downgradeSmartAccessGateway(request: DowngradeSmartAccessGatewayRequest): Promise<DowngradeSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downgradeSmartAccessGatewayWithOptions(request, runtime);
  }

  async downgradeSmartAccessGatewaySoftwareWithOptions(request: DowngradeSmartAccessGatewaySoftwareRequest, runtime: $Util.RuntimeOptions): Promise<DowngradeSmartAccessGatewaySoftwareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.dataPlan)) {
      query["DataPlan"] = request.dataPlan;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DowngradeSmartAccessGatewaySoftware",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DowngradeSmartAccessGatewaySoftwareResponse>(await this.callApi(params, req, runtime), new DowngradeSmartAccessGatewaySoftwareResponse({}));
  }

  async downgradeSmartAccessGatewaySoftware(request: DowngradeSmartAccessGatewaySoftwareRequest): Promise<DowngradeSmartAccessGatewaySoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downgradeSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  async enableSmartAGDpiMonitorWithOptions(request: EnableSmartAGDpiMonitorRequest, runtime: $Util.RuntimeOptions): Promise<EnableSmartAGDpiMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.slsLogStore)) {
      query["SlsLogStore"] = request.slsLogStore;
    }

    if (!Util.isUnset(request.slsProjectName)) {
      query["SlsProjectName"] = request.slsProjectName;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSmartAGDpiMonitor",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSmartAGDpiMonitorResponse>(await this.callApi(params, req, runtime), new EnableSmartAGDpiMonitorResponse({}));
  }

  async enableSmartAGDpiMonitor(request: EnableSmartAGDpiMonitorRequest): Promise<EnableSmartAGDpiMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSmartAGDpiMonitorWithOptions(request, runtime);
  }

  async enableSmartAccessGatewayUserWithOptions(request: EnableSmartAccessGatewayUserRequest, runtime: $Util.RuntimeOptions): Promise<EnableSmartAccessGatewayUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSmartAccessGatewayUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSmartAccessGatewayUserResponse>(await this.callApi(params, req, runtime), new EnableSmartAccessGatewayUserResponse({}));
  }

  async enableSmartAccessGatewayUser(request: EnableSmartAccessGatewayUserRequest): Promise<EnableSmartAccessGatewayUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSmartAccessGatewayUserWithOptions(request, runtime);
  }

  async getAclAttributeWithOptions(request: GetAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetAclAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAclAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAclAttributeResponse>(await this.callApi(params, req, runtime), new GetAclAttributeResponse({}));
  }

  async getAclAttribute(request: GetAclAttributeRequest): Promise<GetAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAclAttributeWithOptions(request, runtime);
  }

  async getAdvancedMonitorStateWithOptions(request: GetAdvancedMonitorStateRequest, runtime: $Util.RuntimeOptions): Promise<GetAdvancedMonitorStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdvancedMonitorState",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdvancedMonitorStateResponse>(await this.callApi(params, req, runtime), new GetAdvancedMonitorStateResponse({}));
  }

  async getAdvancedMonitorState(request: GetAdvancedMonitorStateRequest): Promise<GetAdvancedMonitorStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdvancedMonitorStateWithOptions(request, runtime);
  }

  async getCloudConnectNetworkUseLimitWithOptions(request: GetCloudConnectNetworkUseLimitRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudConnectNetworkUseLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCloudConnectNetworkUseLimit",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudConnectNetworkUseLimitResponse>(await this.callApi(params, req, runtime), new GetCloudConnectNetworkUseLimitResponse({}));
  }

  async getCloudConnectNetworkUseLimit(request: GetCloudConnectNetworkUseLimitRequest): Promise<GetCloudConnectNetworkUseLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudConnectNetworkUseLimitWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request GetQosAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetQosAttributeResponse
   */
  async getQosAttributeWithOptions(request: GetQosAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetQosAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQosAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQosAttributeResponse>(await this.callApi(params, req, runtime), new GetQosAttributeResponse({}));
  }

  /**
    * ****
    *
    * @param request GetQosAttributeRequest
    * @return GetQosAttributeResponse
   */
  async getQosAttribute(request: GetQosAttributeRequest): Promise<GetQosAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQosAttributeWithOptions(request, runtime);
  }

  async getSmartAGDpiAttributeWithOptions(request: GetSmartAGDpiAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartAGDpiAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSmartAGDpiAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSmartAGDpiAttributeResponse>(await this.callApi(params, req, runtime), new GetSmartAGDpiAttributeResponse({}));
  }

  async getSmartAGDpiAttribute(request: GetSmartAGDpiAttributeRequest): Promise<GetSmartAGDpiAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartAGDpiAttributeWithOptions(request, runtime);
  }

  async getSmartAccessGatewayUseLimitWithOptions(request: GetSmartAccessGatewayUseLimitRequest, runtime: $Util.RuntimeOptions): Promise<GetSmartAccessGatewayUseLimitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSmartAccessGatewayUseLimit",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSmartAccessGatewayUseLimitResponse>(await this.callApi(params, req, runtime), new GetSmartAccessGatewayUseLimitResponse({}));
  }

  async getSmartAccessGatewayUseLimit(request: GetSmartAccessGatewayUseLimitRequest): Promise<GetSmartAccessGatewayUseLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmartAccessGatewayUseLimitWithOptions(request, runtime);
  }

  async grantInstanceToCbnWithOptions(request: GrantInstanceToCbnRequest, runtime: $Util.RuntimeOptions): Promise<GrantInstanceToCbnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!Util.isUnset(request.cenInstanceId)) {
      query["CenInstanceId"] = request.cenInstanceId;
    }

    if (!Util.isUnset(request.cenUid)) {
      query["CenUid"] = request.cenUid;
    }

    if (!Util.isUnset(request.grantTrafficService)) {
      query["GrantTrafficService"] = request.grantTrafficService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantInstanceToCbn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantInstanceToCbnResponse>(await this.callApi(params, req, runtime), new GrantInstanceToCbnResponse({}));
  }

  async grantInstanceToCbn(request: GrantInstanceToCbnRequest): Promise<GrantInstanceToCbnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantInstanceToCbnWithOptions(request, runtime);
  }

  async grantSagInstanceToCcnWithOptions(request: GrantSagInstanceToCcnRequest, runtime: $Util.RuntimeOptions): Promise<GrantSagInstanceToCcnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!Util.isUnset(request.ccnUid)) {
      query["CcnUid"] = request.ccnUid;
    }

    if (!Util.isUnset(request.grantTrafficService)) {
      query["GrantTrafficService"] = request.grantTrafficService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantSagInstanceToCcn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantSagInstanceToCcnResponse>(await this.callApi(params, req, runtime), new GrantSagInstanceToCcnResponse({}));
  }

  async grantSagInstanceToCcn(request: GrantSagInstanceToCcnRequest): Promise<GrantSagInstanceToCcnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantSagInstanceToCcnWithOptions(request, runtime);
  }

  async grantSagInstanceToVbrWithOptions(request: GrantSagInstanceToVbrRequest, runtime: $Util.RuntimeOptions): Promise<GrantSagInstanceToVbrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    if (!Util.isUnset(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    if (!Util.isUnset(request.vbrUid)) {
      query["VbrUid"] = request.vbrUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantSagInstanceToVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantSagInstanceToVbrResponse>(await this.callApi(params, req, runtime), new GrantSagInstanceToVbrResponse({}));
  }

  async grantSagInstanceToVbr(request: GrantSagInstanceToVbrRequest): Promise<GrantSagInstanceToVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantSagInstanceToVbrWithOptions(request, runtime);
  }

  async kickOutClientsWithOptions(request: KickOutClientsRequest, runtime: $Util.RuntimeOptions): Promise<KickOutClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "KickOutClients",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KickOutClientsResponse>(await this.callApi(params, req, runtime), new KickOutClientsResponse({}));
  }

  async kickOutClients(request: KickOutClientsRequest): Promise<KickOutClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.kickOutClientsWithOptions(request, runtime);
  }

  async listAccessPointNetworkQualitiesWithOptions(request: ListAccessPointNetworkQualitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessPointNetworkQualitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessPointNetworkQualities",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessPointNetworkQualitiesResponse>(await this.callApi(params, req, runtime), new ListAccessPointNetworkQualitiesResponse({}));
  }

  async listAccessPointNetworkQualities(request: ListAccessPointNetworkQualitiesRequest): Promise<ListAccessPointNetworkQualitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessPointNetworkQualitiesWithOptions(request, runtime);
  }

  async listAccessPointsWithOptions(request: ListAccessPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessPoints",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessPointsResponse>(await this.callApi(params, req, runtime), new ListAccessPointsResponse({}));
  }

  async listAccessPoints(request: ListAccessPointsRequest): Promise<ListAccessPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessPointsWithOptions(request, runtime);
  }

  async listAvailableServiceAddressWithOptions(request: ListAvailableServiceAddressRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableServiceAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableServiceAddress",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableServiceAddressResponse>(await this.callApi(params, req, runtime), new ListAvailableServiceAddressResponse({}));
  }

  async listAvailableServiceAddress(request: ListAvailableServiceAddressRequest): Promise<ListAvailableServiceAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableServiceAddressWithOptions(request, runtime);
  }

  async listDpiConfigErrorWithOptions(request: ListDpiConfigErrorRequest, runtime: $Util.RuntimeOptions): Promise<ListDpiConfigErrorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dpiConfigType)) {
      query["DpiConfigType"] = request.dpiConfigType;
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

    if (!Util.isUnset(request.ruleInstanceId)) {
      query["RuleInstanceId"] = request.ruleInstanceId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDpiConfigError",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDpiConfigErrorResponse>(await this.callApi(params, req, runtime), new ListDpiConfigErrorResponse({}));
  }

  async listDpiConfigError(request: ListDpiConfigErrorRequest): Promise<ListDpiConfigErrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDpiConfigErrorWithOptions(request, runtime);
  }

  async listDpiGroupsWithOptions(request: ListDpiGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDpiGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!Util.isUnset(request.dpiGroupNames)) {
      query["DpiGroupNames"] = request.dpiGroupNames;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDpiGroups",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDpiGroupsResponse>(await this.callApi(params, req, runtime), new ListDpiGroupsResponse({}));
  }

  async listDpiGroups(request: ListDpiGroupsRequest): Promise<ListDpiGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDpiGroupsWithOptions(request, runtime);
  }

  async listDpiSignaturesWithOptions(request: ListDpiSignaturesRequest, runtime: $Util.RuntimeOptions): Promise<ListDpiSignaturesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dpiGroupId)) {
      query["DpiGroupId"] = request.dpiGroupId;
    }

    if (!Util.isUnset(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!Util.isUnset(request.dpiSignatureNames)) {
      query["DpiSignatureNames"] = request.dpiSignatureNames;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDpiSignatures",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDpiSignaturesResponse>(await this.callApi(params, req, runtime), new ListDpiSignaturesResponse({}));
  }

  async listDpiSignatures(request: ListDpiSignaturesRequest): Promise<ListDpiSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDpiSignaturesWithOptions(request, runtime);
  }

  async listEnterpriseCodeWithOptions(request: ListEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<ListEnterpriseCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!Util.isUnset(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
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
      action: "ListEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new ListEnterpriseCodeResponse({}));
  }

  async listEnterpriseCode(request: ListEnterpriseCodeRequest): Promise<ListEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseCodeWithOptions(request, runtime);
  }

  async listProbeTaskWithOptions(request: ListProbeTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListProbeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.probeTaskId)) {
      query["ProbeTaskId"] = request.probeTaskId;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sagName)) {
      query["SagName"] = request.sagName;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProbeTaskResponse>(await this.callApi(params, req, runtime), new ListProbeTaskResponse({}));
  }

  async listProbeTask(request: ListProbeTaskRequest): Promise<ListProbeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProbeTaskWithOptions(request, runtime);
  }

  async listSmartAGApiUnsupportedFeatureWithOptions(request: ListSmartAGApiUnsupportedFeatureRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartAGApiUnsupportedFeatureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.openApiName)) {
      query["OpenApiName"] = request.openApiName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSmartAGApiUnsupportedFeature",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSmartAGApiUnsupportedFeatureResponse>(await this.callApi(params, req, runtime), new ListSmartAGApiUnsupportedFeatureResponse({}));
  }

  async listSmartAGApiUnsupportedFeature(request: ListSmartAGApiUnsupportedFeatureRequest): Promise<ListSmartAGApiUnsupportedFeatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartAGApiUnsupportedFeatureWithOptions(request, runtime);
  }

  async listSmartAGByAccessPointWithOptions(request: ListSmartAGByAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<ListSmartAGByAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGStatus)) {
      query["SmartAGStatus"] = request.smartAGStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSmartAGByAccessPoint",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSmartAGByAccessPointResponse>(await this.callApi(params, req, runtime), new ListSmartAGByAccessPointResponse({}));
  }

  async listSmartAGByAccessPoint(request: ListSmartAGByAccessPointRequest): Promise<ListSmartAGByAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSmartAGByAccessPointWithOptions(request, runtime);
  }

  async modifyACLWithOptions(request: ModifyACLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyACLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyACL",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyACLResponse>(await this.callApi(params, req, runtime), new ModifyACLResponse({}));
  }

  async modifyACL(request: ModifyACLRequest): Promise<ModifyACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyACLWithOptions(request, runtime);
  }

  async modifyACLRuleWithOptions(request: ModifyACLRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyACLRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.acrId)) {
      query["AcrId"] = request.acrId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!Util.isUnset(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!Util.isUnset(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyACLRule",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyACLRuleResponse>(await this.callApi(params, req, runtime), new ModifyACLRuleResponse({}));
  }

  async modifyACLRule(request: ModifyACLRuleRequest): Promise<ModifyACLRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyACLRuleWithOptions(request, runtime);
  }

  async modifyClientUserDNSWithOptions(request: ModifyClientUserDNSRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClientUserDNSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appDNS)) {
      query["AppDNS"] = request.appDNS;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.recoveredDNS)) {
      query["RecoveredDNS"] = request.recoveredDNS;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClientUserDNS",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClientUserDNSResponse>(await this.callApi(params, req, runtime), new ModifyClientUserDNSResponse({}));
  }

  async modifyClientUserDNS(request: ModifyClientUserDNSRequest): Promise<ModifyClientUserDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClientUserDNSWithOptions(request, runtime);
  }

  async modifyCloudConnectNetworkWithOptions(request: ModifyCloudConnectNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCloudConnectNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.interworkingStatus)) {
      query["InterworkingStatus"] = request.interworkingStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCloudConnectNetwork",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCloudConnectNetworkResponse>(await this.callApi(params, req, runtime), new ModifyCloudConnectNetworkResponse({}));
  }

  async modifyCloudConnectNetwork(request: ModifyCloudConnectNetworkRequest): Promise<ModifyCloudConnectNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCloudConnectNetworkWithOptions(request, runtime);
  }

  async modifyDeviceAutoUpgradePolicyWithOptions(request: ModifyDeviceAutoUpgradePolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceAutoUpgradePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    if (!Util.isUnset(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    if (!Util.isUnset(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDeviceAutoUpgradePolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDeviceAutoUpgradePolicyResponse>(await this.callApi(params, req, runtime), new ModifyDeviceAutoUpgradePolicyResponse({}));
  }

  async modifyDeviceAutoUpgradePolicy(request: ModifyDeviceAutoUpgradePolicyRequest): Promise<ModifyDeviceAutoUpgradePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceAutoUpgradePolicyWithOptions(request, runtime);
  }

  async modifyFlowLogAttributeWithOptions(request: ModifyFlowLogAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowLogAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeAging)) {
      query["ActiveAging"] = request.activeAging;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.flowLogId)) {
      query["FlowLogId"] = request.flowLogId;
    }

    if (!Util.isUnset(request.inactiveAging)) {
      query["InactiveAging"] = request.inactiveAging;
    }

    if (!Util.isUnset(request.logstoreName)) {
      query["LogstoreName"] = request.logstoreName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netflowServerIp)) {
      query["NetflowServerIp"] = request.netflowServerIp;
    }

    if (!Util.isUnset(request.netflowServerPort)) {
      query["NetflowServerPort"] = request.netflowServerPort;
    }

    if (!Util.isUnset(request.netflowVersion)) {
      query["NetflowVersion"] = request.netflowVersion;
    }

    if (!Util.isUnset(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFlowLogAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFlowLogAttributeResponse>(await this.callApi(params, req, runtime), new ModifyFlowLogAttributeResponse({}));
  }

  async modifyFlowLogAttribute(request: ModifyFlowLogAttributeRequest): Promise<ModifyFlowLogAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  async modifyHealthCheckWithOptions(request: ModifyHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHealthCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.dstIpAddr)) {
      query["DstIpAddr"] = request.dstIpAddr;
    }

    if (!Util.isUnset(request.dstPort)) {
      query["DstPort"] = request.dstPort;
    }

    if (!Util.isUnset(request.failCountThreshold)) {
      query["FailCountThreshold"] = request.failCountThreshold;
    }

    if (!Util.isUnset(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.probeCount)) {
      query["ProbeCount"] = request.probeCount;
    }

    if (!Util.isUnset(request.probeInterval)) {
      query["ProbeInterval"] = request.probeInterval;
    }

    if (!Util.isUnset(request.probeTimeout)) {
      query["ProbeTimeout"] = request.probeTimeout;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.rttFailThreshold)) {
      query["RttFailThreshold"] = request.rttFailThreshold;
    }

    if (!Util.isUnset(request.rttThreshold)) {
      query["RttThreshold"] = request.rttThreshold;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.srcIpAddr)) {
      query["SrcIpAddr"] = request.srcIpAddr;
    }

    if (!Util.isUnset(request.srcPort)) {
      query["SrcPort"] = request.srcPort;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHealthCheck",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHealthCheckResponse>(await this.callApi(params, req, runtime), new ModifyHealthCheckResponse({}));
  }

  async modifyHealthCheck(request: ModifyHealthCheckRequest): Promise<ModifyHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHealthCheckWithOptions(request, runtime);
  }

  async modifyQosWithOptions(request: ModifyQosRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.qosDescription)) {
      query["QosDescription"] = request.qosDescription;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.qosName)) {
      query["QosName"] = request.qosName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyQos",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyQosResponse>(await this.callApi(params, req, runtime), new ModifyQosResponse({}));
  }

  async modifyQos(request: ModifyQosRequest): Promise<ModifyQosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQosWithOptions(request, runtime);
  }

  async modifyQosCarWithOptions(request: ModifyQosCarRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQosCarResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.limitType)) {
      query["LimitType"] = request.limitType;
    }

    if (!Util.isUnset(request.maxBandwidthAbs)) {
      query["MaxBandwidthAbs"] = request.maxBandwidthAbs;
    }

    if (!Util.isUnset(request.maxBandwidthPercent)) {
      query["MaxBandwidthPercent"] = request.maxBandwidthPercent;
    }

    if (!Util.isUnset(request.minBandwidthAbs)) {
      query["MinBandwidthAbs"] = request.minBandwidthAbs;
    }

    if (!Util.isUnset(request.minBandwidthPercent)) {
      query["MinBandwidthPercent"] = request.minBandwidthPercent;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.percentSourceType)) {
      query["PercentSourceType"] = request.percentSourceType;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.qosCarId)) {
      query["QosCarId"] = request.qosCarId;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyQosCar",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyQosCarResponse>(await this.callApi(params, req, runtime), new ModifyQosCarResponse({}));
  }

  async modifyQosCar(request: ModifyQosCarRequest): Promise<ModifyQosCarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQosCarWithOptions(request, runtime);
  }

  async modifyQosPolicyWithOptions(request: ModifyQosPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyQosPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destCidr)) {
      query["DestCidr"] = request.destCidr;
    }

    if (!Util.isUnset(request.destPortRange)) {
      query["DestPortRange"] = request.destPortRange;
    }

    if (!Util.isUnset(request.dpiGroupIds)) {
      query["DpiGroupIds"] = request.dpiGroupIds;
    }

    if (!Util.isUnset(request.dpiSignatureIds)) {
      query["DpiSignatureIds"] = request.dpiSignatureIds;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.qosId)) {
      query["QosId"] = request.qosId;
    }

    if (!Util.isUnset(request.qosPolicyId)) {
      query["QosPolicyId"] = request.qosPolicyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceCidr)) {
      query["SourceCidr"] = request.sourceCidr;
    }

    if (!Util.isUnset(request.sourcePortRange)) {
      query["SourcePortRange"] = request.sourcePortRange;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyQosPolicy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyQosPolicyResponse>(await this.callApi(params, req, runtime), new ModifyQosPolicyResponse({}));
  }

  async modifyQosPolicy(request: ModifyQosPolicyRequest): Promise<ModifyQosPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyQosPolicyWithOptions(request, runtime);
  }

  async modifyRouteDistributionStrategyWithOptions(request: ModifyRouteDistributionStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouteDistributionStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destCidrBlock)) {
      query["DestCidrBlock"] = request.destCidrBlock;
    }

    if (!Util.isUnset(request.hcInstanceId)) {
      query["HcInstanceId"] = request.hcInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeDistribution)) {
      query["RouteDistribution"] = request.routeDistribution;
    }

    if (!Util.isUnset(request.routeSource)) {
      query["RouteSource"] = request.routeSource;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRouteDistributionStrategy",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRouteDistributionStrategyResponse>(await this.callApi(params, req, runtime), new ModifyRouteDistributionStrategyResponse({}));
  }

  async modifyRouteDistributionStrategy(request: ModifyRouteDistributionStrategyRequest): Promise<ModifyRouteDistributionStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouteDistributionStrategyWithOptions(request, runtime);
  }

  async modifySAGAdminPasswordWithOptions(request: ModifySAGAdminPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifySAGAdminPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySAGAdminPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySAGAdminPasswordResponse>(await this.callApi(params, req, runtime), new ModifySAGAdminPasswordResponse({}));
  }

  async modifySAGAdminPassword(request: ModifySAGAdminPasswordRequest): Promise<ModifySAGAdminPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySAGAdminPasswordWithOptions(request, runtime);
  }

  async modifySagExpressConnectInterfaceWithOptions(request: ModifySagExpressConnectInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagExpressConnectInterfaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagExpressConnectInterface",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagExpressConnectInterfaceResponse>(await this.callApi(params, req, runtime), new ModifySagExpressConnectInterfaceResponse({}));
  }

  async modifySagExpressConnectInterface(request: ModifySagExpressConnectInterfaceRequest): Promise<ModifySagExpressConnectInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagExpressConnectInterfaceWithOptions(request, runtime);
  }

  async modifySagGlobalRouteProtocolWithOptions(request: ModifySagGlobalRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagGlobalRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new ModifySagGlobalRouteProtocolResponse({}));
  }

  async modifySagGlobalRouteProtocol(request: ModifySagGlobalRouteProtocolRequest): Promise<ModifySagGlobalRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagGlobalRouteProtocolWithOptions(request, runtime);
  }

  async modifySagHaWithOptions(request: ModifySagHaRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagHaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.virtualIp)) {
      query["VirtualIp"] = request.virtualIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagHa",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagHaResponse>(await this.callApi(params, req, runtime), new ModifySagHaResponse({}));
  }

  async modifySagHa(request: ModifySagHaRequest): Promise<ModifySagHaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagHaWithOptions(request, runtime);
  }

  async modifySagLanWithOptions(request: ModifySagLanRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagLanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endIp)) {
      query["EndIp"] = request.endIp;
    }

    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.IPType)) {
      query["IPType"] = request.IPType;
    }

    if (!Util.isUnset(request.lease)) {
      query["Lease"] = request.lease;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.startIp)) {
      query["StartIp"] = request.startIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagLan",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagLanResponse>(await this.callApi(params, req, runtime), new ModifySagLanResponse({}));
  }

  async modifySagLan(request: ModifySagLanRequest): Promise<ModifySagLanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagLanWithOptions(request, runtime);
  }

  async modifySagManagementPortWithOptions(request: ModifySagManagementPortRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagManagementPortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gateway)) {
      query["Gateway"] = request.gateway;
    }

    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagManagementPort",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagManagementPortResponse>(await this.callApi(params, req, runtime), new ModifySagManagementPortResponse({}));
  }

  async modifySagManagementPort(request: ModifySagManagementPortRequest): Promise<ModifySagManagementPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagManagementPortWithOptions(request, runtime);
  }

  async modifySagPortRoleWithOptions(request: ModifySagPortRoleRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagPortRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagPortRole",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagPortRoleResponse>(await this.callApi(params, req, runtime), new ModifySagPortRoleResponse({}));
  }

  async modifySagPortRole(request: ModifySagPortRoleRequest): Promise<ModifySagPortRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagPortRoleWithOptions(request, runtime);
  }

  async modifySagPortRouteProtocolWithOptions(request: ModifySagPortRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagPortRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remoteAs)) {
      query["RemoteAs"] = request.remoteAs;
    }

    if (!Util.isUnset(request.remoteIp)) {
      query["RemoteIp"] = request.remoteIp;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagPortRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagPortRouteProtocolResponse>(await this.callApi(params, req, runtime), new ModifySagPortRouteProtocolResponse({}));
  }

  async modifySagPortRouteProtocol(request: ModifySagPortRouteProtocolRequest): Promise<ModifySagPortRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagPortRouteProtocolWithOptions(request, runtime);
  }

  async modifySagRemoteAccessWithOptions(request: ModifySagRemoteAccessRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagRemoteAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.remoteAccessIp)) {
      query["RemoteAccessIp"] = request.remoteAccessIp;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagRemoteAccess",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagRemoteAccessResponse>(await this.callApi(params, req, runtime), new ModifySagRemoteAccessResponse({}));
  }

  async modifySagRemoteAccess(request: ModifySagRemoteAccessRequest): Promise<ModifySagRemoteAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagRemoteAccessWithOptions(request, runtime);
  }

  async modifySagRouteProtocolBgpWithOptions(request: ModifySagRouteProtocolBgpRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagRouteProtocolBgpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.holdTime)) {
      query["HoldTime"] = request.holdTime;
    }

    if (!Util.isUnset(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!Util.isUnset(request.localAs)) {
      query["LocalAs"] = request.localAs;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagRouteProtocolBgp",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagRouteProtocolBgpResponse>(await this.callApi(params, req, runtime), new ModifySagRouteProtocolBgpResponse({}));
  }

  async modifySagRouteProtocolBgp(request: ModifySagRouteProtocolBgpRequest): Promise<ModifySagRouteProtocolBgpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagRouteProtocolBgpWithOptions(request, runtime);
  }

  async modifySagRouteProtocolOspfWithOptions(request: ModifySagRouteProtocolOspfRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagRouteProtocolOspfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.areaId)) {
      query["AreaId"] = request.areaId;
    }

    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.deadTime)) {
      query["DeadTime"] = request.deadTime;
    }

    if (!Util.isUnset(request.helloTime)) {
      query["HelloTime"] = request.helloTime;
    }

    if (!Util.isUnset(request.md5Key)) {
      query["Md5Key"] = request.md5Key;
    }

    if (!Util.isUnset(request.md5KeyId)) {
      query["Md5KeyId"] = request.md5KeyId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagRouteProtocolOspf",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagRouteProtocolOspfResponse>(await this.callApi(params, req, runtime), new ModifySagRouteProtocolOspfResponse({}));
  }

  async modifySagRouteProtocolOspf(request: ModifySagRouteProtocolOspfRequest): Promise<ModifySagRouteProtocolOspfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagRouteProtocolOspfWithOptions(request, runtime);
  }

  async modifySagStaticRouteWithOptions(request: ModifySagStaticRouteRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagStaticRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationCidr)) {
      query["DestinationCidr"] = request.destinationCidr;
    }

    if (!Util.isUnset(request.nextHop)) {
      query["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagStaticRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagStaticRouteResponse>(await this.callApi(params, req, runtime), new ModifySagStaticRouteResponse({}));
  }

  async modifySagStaticRoute(request: ModifySagStaticRouteRequest): Promise<ModifySagStaticRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagStaticRouteWithOptions(request, runtime);
  }

  async modifySagUserDnsWithOptions(request: ModifySagUserDnsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagUserDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.masterDns)) {
      query["MasterDns"] = request.masterDns;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.slaveDns)) {
      query["SlaveDns"] = request.slaveDns;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagUserDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagUserDnsResponse>(await this.callApi(params, req, runtime), new ModifySagUserDnsResponse({}));
  }

  async modifySagUserDns(request: ModifySagUserDnsRequest): Promise<ModifySagUserDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagUserDnsWithOptions(request, runtime);
  }

  async modifySagWanWithOptions(request: ModifySagWanRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagWanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.gateway)) {
      query["Gateway"] = request.gateway;
    }

    if (!Util.isUnset(request.IP)) {
      query["IP"] = request.IP;
    }

    if (!Util.isUnset(request.IPType)) {
      query["IPType"] = request.IPType;
    }

    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagWan",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagWanResponse>(await this.callApi(params, req, runtime), new ModifySagWanResponse({}));
  }

  async modifySagWan(request: ModifySagWanRequest): Promise<ModifySagWanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagWanWithOptions(request, runtime);
  }

  async modifySagWanSnatWithOptions(request: ModifySagWanSnatRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagWanSnatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    if (!Util.isUnset(request.snat)) {
      query["Snat"] = request.snat;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagWanSnatResponse>(await this.callApi(params, req, runtime), new ModifySagWanSnatResponse({}));
  }

  async modifySagWanSnat(request: ModifySagWanSnatRequest): Promise<ModifySagWanSnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagWanSnatWithOptions(request, runtime);
  }

  async modifySagWifiWithOptions(request: ModifySagWifiRequest, runtime: $Util.RuntimeOptions): Promise<ModifySagWifiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.encryptAlgorithm)) {
      query["EncryptAlgorithm"] = request.encryptAlgorithm;
    }

    if (!Util.isUnset(request.isAuth)) {
      query["IsAuth"] = request.isAuth;
    }

    if (!Util.isUnset(request.isBroadcast)) {
      query["IsBroadcast"] = request.isBroadcast;
    }

    if (!Util.isUnset(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.SSID)) {
      query["SSID"] = request.SSID;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySagWifi",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySagWifiResponse>(await this.callApi(params, req, runtime), new ModifySagWifiResponse({}));
  }

  async modifySagWifi(request: ModifySagWifiRequest): Promise<ModifySagWifiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySagWifiWithOptions(request, runtime);
  }

  async modifySmartAccessGatewayWithOptions(request: ModifySmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableSoftwareConnectionAudit)) {
      query["EnableSoftwareConnectionAudit"] = request.enableSoftwareConnectionAudit;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.position)) {
      query["Position"] = request.position;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.routingStrategy)) {
      query["RoutingStrategy"] = request.routingStrategy;
    }

    if (!Util.isUnset(request.securityLockThreshold)) {
      query["SecurityLockThreshold"] = request.securityLockThreshold;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new ModifySmartAccessGatewayResponse({}));
  }

  async modifySmartAccessGateway(request: ModifySmartAccessGatewayRequest): Promise<ModifySmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayWithOptions(request, runtime);
  }

  async modifySmartAccessGatewayClientUserWithOptions(request: ModifySmartAccessGatewayClientUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmartAccessGatewayClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySmartAccessGatewayClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySmartAccessGatewayClientUserResponse>(await this.callApi(params, req, runtime), new ModifySmartAccessGatewayClientUserResponse({}));
  }

  async modifySmartAccessGatewayClientUser(request: ModifySmartAccessGatewayClientUserRequest): Promise<ModifySmartAccessGatewayClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayClientUserWithOptions(request, runtime);
  }

  async modifySmartAccessGatewayUpBandwidthWithOptions(request: ModifySmartAccessGatewayUpBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifySmartAccessGatewayUpBandwidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.upBandwidth4G)) {
      query["UpBandwidth4G"] = request.upBandwidth4G;
    }

    if (!Util.isUnset(request.upBandwidthWan)) {
      query["UpBandwidthWan"] = request.upBandwidthWan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySmartAccessGatewayUpBandwidth",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySmartAccessGatewayUpBandwidthResponse>(await this.callApi(params, req, runtime), new ModifySmartAccessGatewayUpBandwidthResponse({}));
  }

  async modifySmartAccessGatewayUpBandwidth(request: ModifySmartAccessGatewayUpBandwidthRequest): Promise<ModifySmartAccessGatewayUpBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySmartAccessGatewayUpBandwidthWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2018-03-13",
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

  async probeAccessPointNetworkQualityWithOptions(request: ProbeAccessPointNetworkQualityRequest, runtime: $Util.RuntimeOptions): Promise<ProbeAccessPointNetworkQualityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPointIds)) {
      query["AccessPointIds"] = request.accessPointIds;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ProbeAccessPointNetworkQuality",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProbeAccessPointNetworkQualityResponse>(await this.callApi(params, req, runtime), new ProbeAccessPointNetworkQualityResponse({}));
  }

  async probeAccessPointNetworkQuality(request: ProbeAccessPointNetworkQualityRequest): Promise<ProbeAccessPointNetworkQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.probeAccessPointNetworkQualityWithOptions(request, runtime);
  }

  async rebootSmartAccessGatewayWithOptions(request: RebootSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<RebootSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new RebootSmartAccessGatewayResponse({}));
  }

  async rebootSmartAccessGateway(request: RebootSmartAccessGatewayRequest): Promise<RebootSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootSmartAccessGatewayWithOptions(request, runtime);
  }

  async resetSmartAccessGatewayClientUserPasswordWithOptions(request: ResetSmartAccessGatewayClientUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetSmartAccessGatewayClientUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetSmartAccessGatewayClientUserPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetSmartAccessGatewayClientUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetSmartAccessGatewayClientUserPasswordResponse({}));
  }

  async resetSmartAccessGatewayClientUserPassword(request: ResetSmartAccessGatewayClientUserPasswordRequest): Promise<ResetSmartAccessGatewayClientUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSmartAccessGatewayClientUserPasswordWithOptions(request, runtime);
  }

  async revokeInstanceFromCbnWithOptions(request: RevokeInstanceFromCbnRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromCbnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!Util.isUnset(request.cenInstanceId)) {
      query["CenInstanceId"] = request.cenInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeInstanceFromCbn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeInstanceFromCbnResponse>(await this.callApi(params, req, runtime), new RevokeInstanceFromCbnResponse({}));
  }

  async revokeInstanceFromCbn(request: RevokeInstanceFromCbnRequest): Promise<RevokeInstanceFromCbnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromCbnWithOptions(request, runtime);
  }

  async revokeInstanceFromVbrWithOptions(request: RevokeInstanceFromVbrRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromVbrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.vbrInstanceId)) {
      query["VbrInstanceId"] = request.vbrInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeInstanceFromVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeInstanceFromVbrResponse>(await this.callApi(params, req, runtime), new RevokeInstanceFromVbrResponse({}));
  }

  async revokeInstanceFromVbr(request: RevokeInstanceFromVbrRequest): Promise<RevokeInstanceFromVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromVbrWithOptions(request, runtime);
  }

  async revokeSagInstanceFromCcnWithOptions(request: RevokeSagInstanceFromCcnRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSagInstanceFromCcnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnInstanceId)) {
      query["CcnInstanceId"] = request.ccnInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeSagInstanceFromCcn",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeSagInstanceFromCcnResponse>(await this.callApi(params, req, runtime), new RevokeSagInstanceFromCcnResponse({}));
  }

  async revokeSagInstanceFromCcn(request: RevokeSagInstanceFromCcnRequest): Promise<RevokeSagInstanceFromCcnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSagInstanceFromCcnWithOptions(request, runtime);
  }

  async roamClientUserWithOptions(request: RoamClientUserRequest, runtime: $Util.RuntimeOptions): Promise<RoamClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.originRegionId)) {
      query["OriginRegionId"] = request.originRegionId;
    }

    if (!Util.isUnset(request.originSmartAGId)) {
      query["OriginSmartAGId"] = request.originSmartAGId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.targetSmartAGId)) {
      query["TargetSmartAGId"] = request.targetSmartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RoamClientUser",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RoamClientUserResponse>(await this.callApi(params, req, runtime), new RoamClientUserResponse({}));
  }

  async roamClientUser(request: RoamClientUserRequest): Promise<RoamClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.roamClientUserWithOptions(request, runtime);
  }

  async setAdvancedMonitorStateWithOptions(request: SetAdvancedMonitorStateRequest, runtime: $Util.RuntimeOptions): Promise<SetAdvancedMonitorStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAdvancedMonitorState",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAdvancedMonitorStateResponse>(await this.callApi(params, req, runtime), new SetAdvancedMonitorStateResponse({}));
  }

  async setAdvancedMonitorState(request: SetAdvancedMonitorStateRequest): Promise<SetAdvancedMonitorStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAdvancedMonitorStateWithOptions(request, runtime);
  }

  async synchronizeSmartAGWebConfigWithOptions(request: SynchronizeSmartAGWebConfigRequest, runtime: $Util.RuntimeOptions): Promise<SynchronizeSmartAGWebConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGSn)) {
      query["SmartAGSn"] = request.smartAGSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SynchronizeSmartAGWebConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SynchronizeSmartAGWebConfigResponse>(await this.callApi(params, req, runtime), new SynchronizeSmartAGWebConfigResponse({}));
  }

  async synchronizeSmartAGWebConfig(request: SynchronizeSmartAGWebConfigRequest): Promise<SynchronizeSmartAGWebConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.synchronizeSmartAGWebConfigWithOptions(request, runtime);
  }

  async unbindSerialNumberWithOptions(request: UnbindSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSerialNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSerialNumber",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindSerialNumberResponse>(await this.callApi(params, req, runtime), new UnbindSerialNumberResponse({}));
  }

  async unbindSerialNumber(request: UnbindSerialNumberRequest): Promise<UnbindSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSerialNumberWithOptions(request, runtime);
  }

  async unbindSmartAccessGatewayWithOptions(request: UnbindSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ccnId)) {
      query["CcnId"] = request.ccnId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new UnbindSmartAccessGatewayResponse({}));
  }

  async unbindSmartAccessGateway(request: UnbindSmartAccessGatewayRequest): Promise<UnbindSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSmartAccessGatewayWithOptions(request, runtime);
  }

  async unbindVbrWithOptions(request: UnbindVbrRequest, runtime: $Util.RuntimeOptions): Promise<UnbindVbrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.smartAGUid)) {
      query["SmartAGUid"] = request.smartAGUid;
    }

    if (!Util.isUnset(request.vbrId)) {
      query["VbrId"] = request.vbrId;
    }

    if (!Util.isUnset(request.vbrRegionId)) {
      query["VbrRegionId"] = request.vbrRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindVbr",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindVbrResponse>(await this.callApi(params, req, runtime), new UnbindVbrResponse({}));
  }

  async unbindVbr(request: UnbindVbrRequest): Promise<UnbindVbrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindVbrWithOptions(request, runtime);
  }

  async unlockSmartAccessGatewayWithOptions(request: UnlockSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UnlockSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new UnlockSmartAccessGatewayResponse({}));
  }

  async unlockSmartAccessGateway(request: UnlockSmartAccessGatewayRequest): Promise<UnlockSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockSmartAccessGatewayWithOptions(request, runtime);
  }

  async updateEnterpriseCodeWithOptions(request: UpdateEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEnterpriseCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!Util.isUnset(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new UpdateEnterpriseCodeResponse({}));
  }

  async updateEnterpriseCode(request: UpdateEnterpriseCodeRequest): Promise<UpdateEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEnterpriseCodeWithOptions(request, runtime);
  }

  async updateProbeTaskWithOptions(request: UpdateProbeTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProbeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.packetNumber)) {
      query["PacketNumber"] = request.packetNumber;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.probeTaskId)) {
      query["ProbeTaskId"] = request.probeTaskId;
    }

    if (!Util.isUnset(request.probeTaskSourceAddress)) {
      query["ProbeTaskSourceAddress"] = request.probeTaskSourceAddress;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagId)) {
      query["SagId"] = request.sagId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProbeTask",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProbeTaskResponse>(await this.callApi(params, req, runtime), new UpdateProbeTaskResponse({}));
  }

  async updateProbeTask(request: UpdateProbeTaskRequest): Promise<UpdateProbeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProbeTaskWithOptions(request, runtime);
  }

  async updateSmartAGAccessPointWithOptions(request: UpdateSmartAGAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessPointId)) {
      query["AccessPointId"] = request.accessPointId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAGAccessPoint",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAGAccessPointResponse>(await this.callApi(params, req, runtime), new UpdateSmartAGAccessPointResponse({}));
  }

  async updateSmartAGAccessPoint(request: UpdateSmartAGAccessPointRequest): Promise<UpdateSmartAGAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGAccessPointWithOptions(request, runtime);
  }

  async updateSmartAGDpiAttributeWithOptions(request: UpdateSmartAGDpiAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGDpiAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dpiEnabled)) {
      query["DpiEnabled"] = request.dpiEnabled;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAGDpiAttribute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAGDpiAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSmartAGDpiAttributeResponse({}));
  }

  async updateSmartAGDpiAttribute(request: UpdateSmartAGDpiAttributeRequest): Promise<UpdateSmartAGDpiAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGDpiAttributeWithOptions(request, runtime);
  }

  async updateSmartAGEnterpriseCodeWithOptions(request: UpdateSmartAGEnterpriseCodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGEnterpriseCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enterpriseCode)) {
      query["EnterpriseCode"] = request.enterpriseCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAGEnterpriseCode",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAGEnterpriseCodeResponse>(await this.callApi(params, req, runtime), new UpdateSmartAGEnterpriseCodeResponse({}));
  }

  async updateSmartAGEnterpriseCode(request: UpdateSmartAGEnterpriseCodeRequest): Promise<UpdateSmartAGEnterpriseCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGEnterpriseCodeWithOptions(request, runtime);
  }

  async updateSmartAGUserAccelerateConfigWithOptions(request: UpdateSmartAGUserAccelerateConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAGUserAccelerateConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAGUserAccelerateConfig",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAGUserAccelerateConfigResponse>(await this.callApi(params, req, runtime), new UpdateSmartAGUserAccelerateConfigResponse({}));
  }

  async updateSmartAGUserAccelerateConfig(request: UpdateSmartAGUserAccelerateConfigRequest): Promise<UpdateSmartAGUserAccelerateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAGUserAccelerateConfigWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayAdminPasswordWithOptions(request: UpdateSmartAccessGatewayAdminPasswordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayAdminPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayAdminPassword",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayAdminPasswordResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayAdminPasswordResponse({}));
  }

  async updateSmartAccessGatewayAdminPassword(request: UpdateSmartAccessGatewayAdminPasswordRequest): Promise<UpdateSmartAccessGatewayAdminPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayAdminPasswordWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayBgpRouteWithOptions(request: UpdateSmartAccessGatewayBgpRouteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayBgpRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.holdTime)) {
      query["HoldTime"] = request.holdTime;
    }

    if (!Util.isUnset(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!Util.isUnset(request.localAs)) {
      query["LocalAs"] = request.localAs;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayBgpRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayBgpRouteResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayBgpRouteResponse({}));
  }

  async updateSmartAccessGatewayBgpRoute(request: UpdateSmartAccessGatewayBgpRouteRequest): Promise<UpdateSmartAccessGatewayBgpRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayBgpRouteWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayDnsWithOptions(request: UpdateSmartAccessGatewayDnsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.masterDns)) {
      query["MasterDns"] = request.masterDns;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!Util.isUnset(request.slaveDns)) {
      query["SlaveDns"] = request.slaveDns;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayDnsResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayDnsResponse({}));
  }

  async updateSmartAccessGatewayDns(request: UpdateSmartAccessGatewayDnsRequest): Promise<UpdateSmartAccessGatewayDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayDnsWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayDnsForwardWithOptions(request: UpdateSmartAccessGatewayDnsForwardRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayDnsForwardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.masterIp)) {
      query["MasterIp"] = request.masterIp;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outboundPortIndex)) {
      query["OutboundPortIndex"] = request.outboundPortIndex;
    }

    if (!Util.isUnset(request.outboundPortName)) {
      query["OutboundPortName"] = request.outboundPortName;
    }

    if (!Util.isUnset(request.outboundPortType)) {
      query["OutboundPortType"] = request.outboundPortType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!Util.isUnset(request.slaveIp)) {
      query["SlaveIp"] = request.slaveIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayDnsForward",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayDnsForwardResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayDnsForwardResponse({}));
  }

  async updateSmartAccessGatewayDnsForward(request: UpdateSmartAccessGatewayDnsForwardRequest): Promise<UpdateSmartAccessGatewayDnsForwardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayDnsForwardWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayGlobalRouteProtocolWithOptions(request: UpdateSmartAccessGatewayGlobalRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayGlobalRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayGlobalRouteProtocolResponse({}));
  }

  async updateSmartAccessGatewayGlobalRouteProtocol(request: UpdateSmartAccessGatewayGlobalRouteProtocolRequest): Promise<UpdateSmartAccessGatewayGlobalRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayGlobalRouteProtocolWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayOspfRouteWithOptions(request: UpdateSmartAccessGatewayOspfRouteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayOspfRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.areaId)) {
      query["AreaId"] = request.areaId;
    }

    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.deadTime)) {
      query["DeadTime"] = request.deadTime;
    }

    if (!Util.isUnset(request.helloTime)) {
      query["HelloTime"] = request.helloTime;
    }

    if (!Util.isUnset(request.interfaceName)) {
      query["InterfaceName"] = request.interfaceName;
    }

    if (!Util.isUnset(request.md5Key)) {
      query["Md5Key"] = request.md5Key;
    }

    if (!Util.isUnset(request.md5KeyId)) {
      query["Md5KeyId"] = request.md5KeyId;
    }

    if (!Util.isUnset(request.networks)) {
      query["Networks"] = request.networks;
    }

    if (!Util.isUnset(request.ospfCost)) {
      query["OspfCost"] = request.ospfCost;
    }

    if (!Util.isUnset(request.ospfNetworkType)) {
      query["OspfNetworkType"] = request.ospfNetworkType;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.redistributeProtocol)) {
      query["RedistributeProtocol"] = request.redistributeProtocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.routerId)) {
      query["RouterId"] = request.routerId;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayOspfRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayOspfRouteResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayOspfRouteResponse({}));
  }

  async updateSmartAccessGatewayOspfRoute(request: UpdateSmartAccessGatewayOspfRouteRequest): Promise<UpdateSmartAccessGatewayOspfRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayOspfRouteWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayPortRouteProtocolWithOptions(request: UpdateSmartAccessGatewayPortRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayPortRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.portName)) {
      query["PortName"] = request.portName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remoteAs)) {
      query["RemoteAs"] = request.remoteAs;
    }

    if (!Util.isUnset(request.remoteIp)) {
      query["RemoteIp"] = request.remoteIp;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.routeProtocol)) {
      query["RouteProtocol"] = request.routeProtocol;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!Util.isUnset(request.vlan)) {
      query["Vlan"] = request.vlan;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayPortRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayPortRouteProtocolResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayPortRouteProtocolResponse({}));
  }

  async updateSmartAccessGatewayPortRouteProtocol(request: UpdateSmartAccessGatewayPortRouteProtocolRequest): Promise<UpdateSmartAccessGatewayPortRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayPortRouteProtocolWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayVersionWithOptions(request: UpdateSmartAccessGatewayVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    if (!Util.isUnset(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayVersion",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayVersionResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayVersionResponse({}));
  }

  async updateSmartAccessGatewayVersion(request: UpdateSmartAccessGatewayVersionRequest): Promise<UpdateSmartAccessGatewayVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayVersionWithOptions(request, runtime);
  }

  async updateSmartAccessGatewayWanSnatWithOptions(request: UpdateSmartAccessGatewayWanSnatRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSmartAccessGatewayWanSnatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    if (!Util.isUnset(request.snat)) {
      query["Snat"] = request.snat;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSmartAccessGatewayWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSmartAccessGatewayWanSnatResponse>(await this.callApi(params, req, runtime), new UpdateSmartAccessGatewayWanSnatResponse({}));
  }

  async updateSmartAccessGatewayWanSnat(request: UpdateSmartAccessGatewayWanSnatRequest): Promise<UpdateSmartAccessGatewayWanSnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSmartAccessGatewayWanSnatWithOptions(request, runtime);
  }

  async upgradeSmartAccessGatewayWithOptions(request: UpgradeSmartAccessGatewayRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeSmartAccessGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandWidthSpec)) {
      query["BandWidthSpec"] = request.bandWidthSpec;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeSmartAccessGateway",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeSmartAccessGatewayResponse>(await this.callApi(params, req, runtime), new UpgradeSmartAccessGatewayResponse({}));
  }

  async upgradeSmartAccessGateway(request: UpgradeSmartAccessGatewayRequest): Promise<UpgradeSmartAccessGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeSmartAccessGatewayWithOptions(request, runtime);
  }

  async upgradeSmartAccessGatewaySoftwareWithOptions(request: UpgradeSmartAccessGatewaySoftwareRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeSmartAccessGatewaySoftwareResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.dataPlan)) {
      query["DataPlan"] = request.dataPlan;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.smartAGId)) {
      query["SmartAGId"] = request.smartAGId;
    }

    if (!Util.isUnset(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeSmartAccessGatewaySoftware",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeSmartAccessGatewaySoftwareResponse>(await this.callApi(params, req, runtime), new UpgradeSmartAccessGatewaySoftwareResponse({}));
  }

  async upgradeSmartAccessGatewaySoftware(request: UpgradeSmartAccessGatewaySoftwareRequest): Promise<UpgradeSmartAccessGatewaySoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeSmartAccessGatewaySoftwareWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayBgpRouteWithOptions(request: ViewSmartAccessGatewayBgpRouteRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayBgpRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayBgpRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayBgpRouteResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayBgpRouteResponse({}));
  }

  async viewSmartAccessGatewayBgpRoute(request: ViewSmartAccessGatewayBgpRouteRequest): Promise<ViewSmartAccessGatewayBgpRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayBgpRouteWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayDnsWithOptions(request: ViewSmartAccessGatewayDnsRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayDnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayDns",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayDnsResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayDnsResponse({}));
  }

  async viewSmartAccessGatewayDns(request: ViewSmartAccessGatewayDnsRequest): Promise<ViewSmartAccessGatewayDnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayDnsWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayDnsForwardsWithOptions(request: ViewSmartAccessGatewayDnsForwardsRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayDnsForwardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayDnsForwards",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayDnsForwardsResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayDnsForwardsResponse({}));
  }

  async viewSmartAccessGatewayDnsForwards(request: ViewSmartAccessGatewayDnsForwardsRequest): Promise<ViewSmartAccessGatewayDnsForwardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayDnsForwardsWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayGlobalRouteProtocolWithOptions(request: ViewSmartAccessGatewayGlobalRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayGlobalRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayGlobalRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayGlobalRouteProtocolResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayGlobalRouteProtocolResponse({}));
  }

  async viewSmartAccessGatewayGlobalRouteProtocol(request: ViewSmartAccessGatewayGlobalRouteProtocolRequest): Promise<ViewSmartAccessGatewayGlobalRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayGlobalRouteProtocolWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayOspfRouteWithOptions(request: ViewSmartAccessGatewayOspfRouteRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayOspfRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayOspfRoute",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayOspfRouteResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayOspfRouteResponse({}));
  }

  async viewSmartAccessGatewayOspfRoute(request: ViewSmartAccessGatewayOspfRouteRequest): Promise<ViewSmartAccessGatewayOspfRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayOspfRouteWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayPortRouteProtocolWithOptions(request: ViewSmartAccessGatewayPortRouteProtocolRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayPortRouteProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayPortRouteProtocol",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayPortRouteProtocolResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayPortRouteProtocolResponse({}));
  }

  async viewSmartAccessGatewayPortRouteProtocol(request: ViewSmartAccessGatewayPortRouteProtocolRequest): Promise<ViewSmartAccessGatewayPortRouteProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayPortRouteProtocolWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayRoutesWithOptions(request: ViewSmartAccessGatewayRoutesRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayRoutesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayRoutes",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayRoutesResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayRoutesResponse({}));
  }

  async viewSmartAccessGatewayRoutes(request: ViewSmartAccessGatewayRoutesRequest): Promise<ViewSmartAccessGatewayRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayRoutesWithOptions(request, runtime);
  }

  async viewSmartAccessGatewayWanSnatWithOptions(request: ViewSmartAccessGatewayWanSnatRequest, runtime: $Util.RuntimeOptions): Promise<ViewSmartAccessGatewayWanSnatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.crossAccount)) {
      query["CrossAccount"] = request.crossAccount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceUid)) {
      query["ResourceUid"] = request.resourceUid;
    }

    if (!Util.isUnset(request.sagInsId)) {
      query["SagInsId"] = request.sagInsId;
    }

    if (!Util.isUnset(request.sagSn)) {
      query["SagSn"] = request.sagSn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ViewSmartAccessGatewayWanSnat",
      version: "2018-03-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ViewSmartAccessGatewayWanSnatResponse>(await this.callApi(params, req, runtime), new ViewSmartAccessGatewayWanSnatResponse({}));
  }

  async viewSmartAccessGatewayWanSnat(request: ViewSmartAccessGatewayWanSnatRequest): Promise<ViewSmartAccessGatewayWanSnatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.viewSmartAccessGatewayWanSnatWithOptions(request, runtime);
  }

}
