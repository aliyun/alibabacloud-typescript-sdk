// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddNetworkInterfaceToInstanceRequest extends $tea.Model {
  instanceId?: string;
  networks?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networks: 'Networks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNetworkInterfaceToInstanceResponseBody extends $tea.Model {
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

export class AddNetworkInterfaceToInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddNetworkInterfaceToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddNetworkInterfaceToInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  count?: number;
  minCount?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      count: 'Count',
      minCount: 'MinCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      count: 'number',
      minCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponseBody extends $tea.Model {
  bizStatusCode?: string;
  eipAddresses?: AllocateEipAddressResponseBodyEipAddresses;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizStatusCode: 'BizStatusCode',
      eipAddresses: 'EipAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatusCode: 'string',
      eipAddresses: AllocateEipAddressResponseBodyEipAddresses,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEipAddressRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  eip?: string;
  instanceIdInternetIp?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEipAddressResponseBody extends $tea.Model {
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

export class AssociateEipAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  scripts?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      scripts: 'Scripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      scripts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEnsInstancesResponseBody extends $tea.Model {
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

export class AttachEnsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachEnsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachEnsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupRequest extends $tea.Model {
  version?: string;
  ipProtocol?: string;
  portRange?: string;
  securityGroupId?: string;
  policy?: string;
  priority?: number;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponseBody extends $tea.Model {
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

export class AuthorizeSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuthorizeSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AuthorizeSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressRequest extends $tea.Model {
  version?: string;
  ipProtocol?: string;
  portRange?: string;
  securityGroupId?: string;
  policy?: string;
  priority?: number;
  destCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      destCidrIp: 'DestCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      destCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupEgressResponseBody extends $tea.Model {
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

export class AuthorizeSecurityGroupEgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuthorizeSecurityGroupEgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AuthorizeSecurityGroupEgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckQuotaRequest extends $tea.Model {
  aliUid?: number;
  resourceAttribute?: string;
  groupUuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      resourceAttribute: 'ResourceAttribute',
      groupUuid: 'GroupUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      resourceAttribute: 'string',
      groupUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckQuotaResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  data?: string;
  msg?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      data: 'string',
      msg: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  template?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  appId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceRequest extends $tea.Model {
  version?: string;
  ensServiceId?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensServiceId: 'EnsServiceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensServiceId: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEnsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEPInstanceRequest extends $tea.Model {
  EPNInstanceType?: string;
  EPNInstanceName?: string;
  internetChargeType?: string;
  networkingModel?: string;
  internetMaxBandwidthOut?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceType: 'EPNInstanceType',
      EPNInstanceName: 'EPNInstanceName',
      internetChargeType: 'InternetChargeType',
      networkingModel: 'NetworkingModel',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceType: 'string',
      EPNInstanceName: 'string',
      internetChargeType: 'string',
      networkingModel: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEPInstanceResponseBody extends $tea.Model {
  EPNInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEPInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEPInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEPInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceRequest extends $tea.Model {
  EPNInstanceType?: string;
  EPNInstanceName?: string;
  internetChargeType?: string;
  networkingModel?: string;
  internetMaxBandwidthOut?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceType: 'EPNInstanceType',
      EPNInstanceName: 'EPNInstanceName',
      internetChargeType: 'InternetChargeType',
      networkingModel: 'NetworkingModel',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceType: 'string',
      EPNInstanceName: 'string',
      internetChargeType: 'string',
      networkingModel: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceResponseBody extends $tea.Model {
  EPNInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  product?: string;
  version?: string;
  instanceId?: string;
  imageName?: string;
  deleteAfterImageUpload?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      version: 'Version',
      instanceId: 'InstanceId',
      imageName: 'ImageName',
      deleteAfterImageUpload: 'DeleteAfterImageUpload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      version: 'string',
      instanceId: 'string',
      imageName: 'string',
      deleteAfterImageUpload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairRequest extends $tea.Model {
  version?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBody extends $tea.Model {
  keyPairFingerPrint?: string;
  keyPairId?: string;
  keyPairName?: string;
  privateKeyBody?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      privateKeyBody: 'PrivateKeyBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairFingerPrint: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
      privateKeyBody: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupRequest extends $tea.Model {
  version?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVmAndSaveStockRequest extends $tea.Model {
  aliUid?: number;
  tenant?: string;
  workloadUuid?: string;
  groupUuid?: string;
  resourceAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      tenant: 'Tenant',
      workloadUuid: 'WorkloadUuid',
      groupUuid: 'GroupUuid',
      resourceAttribute: 'ResourceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      tenant: 'string',
      workloadUuid: 'string',
      groupUuid: 'string',
      resourceAttribute: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVmAndSaveStockResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  msg?: string;
  desc?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      msg: 'Msg',
      desc: 'Desc',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      msg: 'string',
      desc: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVmAndSaveStockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVmAndSaveStockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVmAndSaveStockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  cidrBlock?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      cidrBlock: 'CidrBlock',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      cidrBlock: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchResponseBody extends $tea.Model {
  requestId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
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

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEpnInstanceResponseBody extends $tea.Model {
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

export class DeleteEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsRequest extends $tea.Model {
  version?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponseBody extends $tea.Model {
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

export class DeleteKeyPairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteKeyPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteKeyPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRequest extends $tea.Model {
  version?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponseBody extends $tea.Model {
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

export class DeleteSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVmRequest extends $tea.Model {
  aliUid?: number;
  workloadUuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      workloadUuid: 'WorkloadUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      workloadUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVmResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  desc?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      desc: 'Desc',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      desc: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchRequest extends $tea.Model {
  version?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchResponseBody extends $tea.Model {
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

export class DeleteVSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationRequest extends $tea.Model {
  appId?: string;
  appVersions?: string;
  level?: string;
  outDetailStatParams?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersions: 'AppVersions',
      level: 'Level',
      outDetailStatParams: 'OutDetailStatParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersions: 'string',
      level: 'string',
      outDetailStatParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResponseBody extends $tea.Model {
  application?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryRequest extends $tea.Model {
  level?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryResponseBody extends $tea.Model {
  applicationResource?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationResource: 'ApplicationResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationResource: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationResourceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApplicationResourceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApplicationResourceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeAvailableResourceResponseBodyImages;
  requestId?: string;
  supportResources?: DescribeAvailableResourceResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeAvailableResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceResponseBodySupportResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeRequest extends $tea.Model {
  version?: string;
  startTime?: string;
  endTime?: string;
  isp?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isp: 'Isp',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startTime: 'string',
      endTime: 'string',
      isp: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeResponseBody extends $tea.Model {
  bandwidthValue?: number;
  internetChargeType?: string;
  requestId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthValue: 'BandwidthValue',
      internetChargeType: 'InternetChargeType',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthValue: 'number',
      internetChargeType: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwitdhByInternetChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBandwitdhByInternetChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBandwitdhByInternetChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeResponseBody extends $tea.Model {
  bandWithTypeInfo?: string;
  chargeContractType?: string;
  chargeCycleInfo?: string;
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandWithTypeInfo: 'BandWithTypeInfo',
      chargeContractType: 'ChargeContractType',
      chargeCycleInfo: 'ChargeCycleInfo',
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWithTypeInfo: 'string',
      chargeContractType: 'string',
      chargeCycleInfo: 'string',
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandWithdChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBandWithdChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBandWithdChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponseBody extends $tea.Model {
  instanceCreateResult?: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateResult: 'InstanceCreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateResult: DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCreatePrePaidInstanceResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCreatePrePaidInstanceResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultRequest extends $tea.Model {
  appId?: string;
  dataNames?: string;
  dataVersions?: string;
  instanceIds?: string;
  minDate?: string;
  maxDate?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      instanceIds: 'InstanceIds',
      minDate: 'MinDate',
      maxDate: 'MaxDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      instanceIds: 'string',
      minDate: 'string',
      maxDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBody extends $tea.Model {
  distResults?: DescribeDataDistResultResponseBodyDistResults;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      distResults: 'DistResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResults: DescribeDataDistResultResponseBodyDistResults,
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

export class DescribeDataDistResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataDistResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataDistResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultRequest extends $tea.Model {
  appId?: string;
  dataNames?: string;
  dataVersions?: string;
  minDate?: string;
  maxDate?: string;
  pageNumber?: number;
  pageSize?: number;
  regionIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      minDate: 'MinDate',
      maxDate: 'MaxDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      minDate: 'string',
      maxDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pushResults?: DescribeDataPushResultResponseBodyPushResults;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushResults: 'PushResults',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushResults: DescribeDataPushResultResponseBodyPushResults,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataPushResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataPushResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  eips?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eips: 'Eips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBody extends $tea.Model {
  eipAddresses?: DescribeEipAddressesResponseBodyEipAddresses;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEipAddressesResponseBodyEipAddresses,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEipAddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEipAddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictRequest extends $tea.Model {
  version?: string;
  netLevelCode?: string;
  netDistrictCode?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      netLevelCode: 'NetLevelCode',
      netDistrictCode: 'NetDistrictCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      netLevelCode: 'string',
      netDistrictCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBody extends $tea.Model {
  code?: number;
  ensNetDistricts?: DescribeEnsNetDistrictResponseBodyEnsNetDistricts;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetDistricts: DescribeEnsNetDistrictResponseBodyEnsNetDistricts,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnsNetDistrictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnsNetDistrictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseBody extends $tea.Model {
  code?: number;
  ensNetLevels?: DescribeEnsNetLevelResponseBodyEnsNetLevels;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetLevels: 'EnsNetLevels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetLevels: DescribeEnsNetLevelResponseBodyEnsNetLevels,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnsNetLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnsNetLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictRequest extends $tea.Model {
  version?: string;
  netLevelCode?: string;
  netDistrictCode?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      netLevelCode: 'NetLevelCode',
      netDistrictCode: 'NetDistrictCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      netLevelCode: 'string',
      netDistrictCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseBody extends $tea.Model {
  code?: number;
  ensNetDistricts?: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetDistricts: 'EnsNetDistricts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetDistricts: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnsNetSaleDistrictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnsNetSaleDistrictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponseBody extends $tea.Model {
  requestId?: string;
  supportIpv6Info?: DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportIpv6Info: 'SupportIpv6Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportIpv6Info: DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnsRegionIdIpv6InfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnsRegionIdIpv6InfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceRequest extends $tea.Model {
  version?: string;
  startTime?: string;
  endTime?: string;
  orderByParams?: string;
  pageNumber?: number;
  pageSize?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startTime: 'string',
      endTime: 'string',
      orderByParams: 'string',
      pageNumber: 'number',
      pageSize: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBody extends $tea.Model {
  ensRegionIdResources?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResources: 'EnsRegionIdResources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResources: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources,
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

export class DescribeEnsRegionIdResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnsRegionIdResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnsRegionIdResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBody extends $tea.Model {
  code?: number;
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensRegions: 'EnsRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensRegions: DescribeEnsRegionsResponseBodyEnsRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEnsRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEnsRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  period?: string;
  isp?: string;
  networkingModel?: string;
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      isp: 'Isp',
      networkingModel: 'NetworkingModel',
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
      isp: 'string',
      networkingModel: 'string',
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBody extends $tea.Model {
  monitorData?: DescribeEpnBandWidthDataResponseBodyMonitorData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeEpnBandWidthDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEpnBandWidthDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEpnBandWidthDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeRequest extends $tea.Model {
  version?: string;
  startTime?: string;
  endTime?: string;
  isp?: string;
  ensRegionId?: string;
  networkingModel?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isp: 'Isp',
      ensRegionId: 'EnsRegionId',
      networkingModel: 'NetworkingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startTime: 'string',
      endTime: 'string',
      isp: 'string',
      ensRegionId: 'string',
      networkingModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeResponseBody extends $tea.Model {
  bandwidthValue?: number;
  internetChargeType?: string;
  requestId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthValue: 'BandwidthValue',
      internetChargeType: 'InternetChargeType',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthValue: 'number',
      internetChargeType: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandwitdhByInternetChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEpnBandwitdhByInternetChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEpnBandwitdhByInternetChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBody extends $tea.Model {
  confVersions?: DescribeEpnInstanceAttributeResponseBodyConfVersions[];
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  instances?: DescribeEpnInstanceAttributeResponseBodyInstances[];
  networkingModel?: string;
  requestId?: string;
  vSwitches?: DescribeEpnInstanceAttributeResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      confVersions: 'ConfVersions',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      instances: 'Instances',
      networkingModel: 'NetworkingModel',
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersions: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyConfVersions },
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      instances: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyInstances },
      networkingModel: 'string',
      requestId: 'string',
      vSwitches: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyVSwitches },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEpnInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEpnInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesRequest extends $tea.Model {
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBody extends $tea.Model {
  EPNInstances?: DescribeEpnInstancesResponseBodyEPNInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstances: 'EPNInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstances: DescribeEpnInstancesResponseBodyEPNInstances,
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

export class DescribeEpnInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEpnInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEpnInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataRequest extends $tea.Model {
  version?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBody extends $tea.Model {
  measurementDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measurementDatas: 'MeasurementDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEpnMeasurementDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEpnMeasurementDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoRequest extends $tea.Model {
  imageId?: string;
  imageName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBody extends $tea.Model {
  images?: DescribeExportImageInfoResponseBodyImages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeExportImageInfoResponseBodyImages,
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

export class DescribeExportImageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExportImageInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExportImageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusRequest extends $tea.Model {
  version?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusResponseBody extends $tea.Model {
  imageExportStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageExportStatus: 'ImageExportStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageExportStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExportImageStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExportImageStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosRequest extends $tea.Model {
  version?: string;
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeImageInfosResponseBodyImages;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeImageInfosResponseBodyImages,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  product?: string;
  version?: string;
  ensRegionId?: string;
  imageId?: string;
  status?: string;
  imageName?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      imageId: 'ImageId',
      status: 'Status',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      version: 'string',
      ensRegionId: 'string',
      imageId: 'string',
      status: 'string',
      imageName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBody extends $tea.Model {
  code?: number;
  images?: DescribeImagesResponseBodyImages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeImagesResponseBodyImages,
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

export class DescribeImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeRequest extends $tea.Model {
  version?: string;
  instanceIds?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceIds: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBody extends $tea.Model {
  code?: number;
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceRenewAttributes: 'InstanceRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBody extends $tea.Model {
  code?: number;
  monitorData?: DescribeInstanceMonitorDataResponseBodyMonitorData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeInstanceMonitorDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBody extends $tea.Model {
  bandwidthLimit?: number;
  code?: number;
  dataDiskMaxSize?: number;
  dataDiskMinSize?: number;
  instanceSpecs?: DescribeInstanceSpecResponseBodyInstanceSpecs;
  requestId?: string;
  systemDiskMaxSize?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      code: 'Code',
      dataDiskMaxSize: 'DataDiskMaxSize',
      dataDiskMinSize: 'DataDiskMinSize',
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
      systemDiskMaxSize: 'SystemDiskMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      code: 'number',
      dataDiskMaxSize: 'number',
      dataDiskMinSize: 'number',
      instanceSpecs: DescribeInstanceSpecResponseBodyInstanceSpecs,
      requestId: 'string',
      systemDiskMaxSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBody extends $tea.Model {
  code?: number;
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceTypes: DescribeInstanceTypesResponseBodyInstanceTypes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponseBody extends $tea.Model {
  requestId?: string;
  vncUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vncUrl: 'VncUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vncUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceVncUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceVncUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsRequest extends $tea.Model {
  version?: string;
  keyPairName?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBody extends $tea.Model {
  keyPairs?: DescribeKeyPairsResponseBodyKeyPairs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyPairs: 'KeyPairs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairs: DescribeKeyPairsResponseBodyKeyPairs,
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

export class DescribeKeyPairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKeyPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeKeyPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataRequest extends $tea.Model {
  version?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBody extends $tea.Model {
  measurementDatas?: DescribeMeasurementDataResponseBodyMeasurementDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measurementDatas: 'MeasurementDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementDatas: DescribeMeasurementDataResponseBodyMeasurementDatas,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMeasurementDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMeasurementDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesRequest extends $tea.Model {
  instanceId?: string;
  vSwitchId?: string;
  ensRegionId?: string;
  primaryIpAddress?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vSwitchId: 'VSwitchId',
      ensRegionId: 'EnsRegionId',
      primaryIpAddress: 'PrimaryIpAddress',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vSwitchId: 'string',
      ensRegionId: 'string',
      primaryIpAddress: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBody extends $tea.Model {
  networkInterfaceSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSets: 'NetworkInterfaceSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets,
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

export class DescribeNetworkInterfacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkInterfacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  systemDiskSize?: number;
  dataDiskSize?: number;
  instanceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      systemDiskSize: 'number',
      dataDiskSize: 'number',
      instanceSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockResponseBody extends $tea.Model {
  avaliableCount?: number;
  cores?: number;
  dataDiskSize?: number;
  ensRegionId?: string;
  instanceSpec?: string;
  memory?: number;
  requestId?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      avaliableCount: 'AvaliableCount',
      cores: 'Cores',
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      memory: 'Memory',
      requestId: 'RequestId',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableCount: 'number',
      cores: 'number',
      dataDiskSize: 'number',
      ensRegionId: 'string',
      instanceSpec: 'string',
      memory: 'number',
      requestId: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrePaidInstanceStockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePrePaidInstanceStockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePrePaidInstanceStockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  systemDisk?: DescribePriceRequestSystemDisk;
  dataDisk?: DescribePriceRequestDataDisk[];
  version?: string;
  instanceType?: string;
  ensRegionId?: string;
  period?: number;
  quantity?: number;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      version: 'Version',
      instanceType: 'InstanceType',
      ensRegionId: 'EnsRegionId',
      period: 'Period',
      quantity: 'Quantity',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: DescribePriceRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': DescribePriceRequestDataDisk },
      version: 'string',
      instanceType: 'string',
      ensRegionId: 'string',
      period: 'number',
      quantity: 'number',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeRequest extends $tea.Model {
  version?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBody extends $tea.Model {
  permissions?: DescribeSecurityGroupAttributeResponseBodyPermissions;
  requestId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: DescribeSecurityGroupAttributeResponseBodyPermissions,
      requestId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $tea.Model {
  version?: string;
  securityGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  securityGroups?: DescribeSecurityGroupsResponseBodySecurityGroups;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      securityGroups: DescribeSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleRequest extends $tea.Model {
  appId?: string;
  uuid?: string;
  podConfigName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      uuid: 'Uuid',
      podConfigName: 'PodConfigName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      uuid: 'string',
      podConfigName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBody extends $tea.Model {
  index?: number;
  instanceId?: string;
  instanceIp?: string;
  instancePort?: number;
  podAbstractInfo?: DescribeServcieScheduleResponseBodyPodAbstractInfo;
  requestId?: string;
  requestRepeated?: boolean;
  tcpPorts?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      podAbstractInfo: 'PodAbstractInfo',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      podAbstractInfo: DescribeServcieScheduleResponseBodyPodAbstractInfo,
      requestId: 'string',
      requestRepeated: 'boolean',
      tcpPorts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServcieScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServcieScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  period?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseBody extends $tea.Model {
  code?: number;
  monitorData?: DescribeUserBandWidthDataResponseBodyMonitorData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeUserBandWidthDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserBandWidthDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserBandWidthDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  pageNumber?: number;
  pageSize?: number;
  orderByParams?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      orderByParams: 'OrderByParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      orderByParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitches: DescribeVSwitchesResponseBodyVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataRequest extends $tea.Model {
  version?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataResponseBody extends $tea.Model {
  filePath?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportBillDetailDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportBillDetailDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportBillDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageRequest extends $tea.Model {
  version?: string;
  imageId?: string;
  OSSBucket?: string;
  OSSRegionId?: string;
  OSSPrefix?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      imageId: 'ImageId',
      OSSBucket: 'OSSBucket',
      OSSRegionId: 'OSSRegionId',
      OSSPrefix: 'OSSPrefix',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      imageId: 'string',
      OSSBucket: 'string',
      OSSRegionId: 'string',
      OSSPrefix: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponseBody extends $tea.Model {
  exportedImageURL?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportedImageURL: 'ExportedImageURL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportedImageURL: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataRequest extends $tea.Model {
  version?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataResponseBody extends $tea.Model {
  filePath?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMeasurementDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportMeasurementDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportMeasurementDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmListRequest extends $tea.Model {
  aliUid?: number;
  groupUuid?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      groupUuid: 'GroupUuid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      groupUuid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmListResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  msg?: string;
  data?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      msg: 'Msg',
      data: 'Data',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      msg: 'string',
      data: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVmListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVmListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVmListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequest extends $tea.Model {
  version?: string;
  keyPairName?: string;
  publicKeyBody?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      keyPairName: 'string',
      publicKeyBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBody extends $tea.Model {
  keyPairFingerPrint?: string;
  keyPairName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  instanceInfos?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinPublicIpsToEpnInstanceResponseBody extends $tea.Model {
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

export class JoinPublicIpsToEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinPublicIpsToEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinPublicIpsToEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupRequest extends $tea.Model {
  version?: string;
  securityGroupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinSecurityGroupResponseBody extends $tea.Model {
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

export class JoinSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  vSwitchesInfo?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinVSwitchesToEpnInstanceResponseBody extends $tea.Model {
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

export class JoinVSwitchesToEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinVSwitchesToEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinVSwitchesToEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupRequest extends $tea.Model {
  version?: string;
  securityGroupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      securityGroupId: 'SecurityGroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      securityGroupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LeaveSecurityGroupResponseBody extends $tea.Model {
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

export class LeaveSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LeaveSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LeaveSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  clusterNames?: string;
  appVersions?: string;
  level?: string;
  outAppInfoParams?: string;
  pageNumber?: number;
  pageSize?: number;
  minDate?: string;
  maxDate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNames: 'ClusterNames',
      appVersions: 'AppVersions',
      level: 'Level',
      outAppInfoParams: 'OutAppInfoParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      minDate: 'MinDate',
      maxDate: 'MaxDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNames: 'string',
      appVersions: 'string',
      level: 'string',
      outAppInfoParams: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      minDate: 'string',
      maxDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  applications?: ListApplicationsResponseBodyApplications;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListApplicationsResponseBodyApplications,
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

export class ListApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  networkingModel?: string;
  internetMaxBandwidthOut?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      networkingModel: 'NetworkingModel',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      networkingModel: 'string',
      internetMaxBandwidthOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEpnInstanceResponseBody extends $tea.Model {
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

export class ModifyEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeRequest extends $tea.Model {
  product?: string;
  version?: string;
  imageId?: string;
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      version: 'Version',
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      version: 'string',
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyImageAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyImageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionRequest extends $tea.Model {
  imageId?: string;
  addAccounts?: string;
  removeAccounts?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      addAccounts: 'AddAccounts',
      removeAccounts: 'RemoveAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      addAccounts: 'string',
      removeAccounts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageSharePermissionResponseBody extends $tea.Model {
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

export class ModifyImageSharePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyImageSharePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyImageSharePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  password?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      password: 'Password',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      password: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceRequest extends $tea.Model {
  version?: string;
  ensServiceName?: string;
  imageId?: string;
  instanceSpec?: string;
  systemDiskSize?: string;
  dataDiskSize?: string;
  bandwidthType?: string;
  instanceBandwithdLimit?: string;
  password?: string;
  keyPairName?: string;
  userData?: string;
  netLevel?: string;
  schedulingStrategy?: string;
  schedulingPriceStrategy?: string;
  buyResourcesDetail?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensServiceName: 'EnsServiceName',
      imageId: 'ImageId',
      instanceSpec: 'InstanceSpec',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
      bandwidthType: 'BandwidthType',
      instanceBandwithdLimit: 'InstanceBandwithdLimit',
      password: 'Password',
      keyPairName: 'KeyPairName',
      userData: 'UserData',
      netLevel: 'NetLevel',
      schedulingStrategy: 'SchedulingStrategy',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      buyResourcesDetail: 'BuyResourcesDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensServiceName: 'string',
      imageId: 'string',
      instanceSpec: 'string',
      systemDiskSize: 'string',
      dataDiskSize: 'string',
      bandwidthType: 'string',
      instanceBandwithdLimit: 'string',
      password: 'string',
      keyPairName: 'string',
      userData: 'string',
      netLevel: 'string',
      schedulingStrategy: 'string',
      schedulingPriceStrategy: 'string',
      buyResourcesDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceResponseBody extends $tea.Model {
  buyResourcesDetail?: string;
  code?: number;
  ensServiceId?: string;
  netLevel?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buyResourcesDetail: 'BuyResourcesDetail',
      code: 'Code',
      ensServiceId: 'EnsServiceId',
      netLevel: 'NetLevel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResourcesDetail: 'string',
      code: 'number',
      ensServiceId: 'string',
      netLevel: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCreateEnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreCreateEnsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreCreateEnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataRequest extends $tea.Model {
  data?: string;
  appId?: string;
  timeout?: number;
  pushStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      appId: 'AppId',
      timeout: 'Timeout',
      pushStrategy: 'PushStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      appId: 'string',
      timeout: 'number',
      pushStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponseBody extends $tea.Model {
  pushResults?: PushApplicationDataResponseBodyPushResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushResults: 'PushResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResults: PushApplicationDataResponseBodyPushResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushApplicationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushApplicationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  forceStop?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      forceStop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RebootInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebootInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskRequest extends $tea.Model {
  version?: string;
  diskId?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      diskId: 'DiskId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      diskId: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReInitDiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReInitDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReInitDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipAddressRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  eips?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eips: 'Eips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipAddressResponseBody extends $tea.Model {
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

export class ReleaseEipAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePostPaidInstanceResponseBody extends $tea.Model {
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

export class ReleasePostPaidInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleasePostPaidInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleasePostPaidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePrePaidInstanceResponseBody extends $tea.Model {
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

export class ReleasePrePaidInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleasePrePaidInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleasePrePaidInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  instanceInfos?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      instanceInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePublicIpsFromEpnInstanceResponseBody extends $tea.Model {
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

export class RemovePublicIpsFromEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemovePublicIpsFromEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemovePublicIpsFromEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  vSwitchesInfo?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      vSwitchesInfo: 'VSwitchesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      vSwitchesInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveVSwitchesFromEpnInstanceResponseBody extends $tea.Model {
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

export class RemoveVSwitchesFromEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveVSwitchesFromEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveVSwitchesFromEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationRequest extends $tea.Model {
  appId?: string;
  rescaleType?: string;
  rescaleLevel?: string;
  resourceSelector?: string;
  toAppVersion?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rescaleType: 'RescaleType',
      rescaleLevel: 'RescaleLevel',
      resourceSelector: 'ResourceSelector',
      toAppVersion: 'ToAppVersion',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rescaleType: 'string',
      rescaleLevel: 'string',
      resourceSelector: 'string',
      toAppVersion: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RescaleApplicationResponseBody extends $tea.Model {
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

export class RescaleApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RescaleApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RescaleApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupRequest extends $tea.Model {
  version?: string;
  ipProtocol?: string;
  portRange?: string;
  securityGroupId?: string;
  policy?: string;
  priority?: number;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupResponseBody extends $tea.Model {
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

export class RevokeSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressRequest extends $tea.Model {
  version?: string;
  ipProtocol?: string;
  portRange?: string;
  securityGroupId?: string;
  policy?: string;
  priority?: number;
  destCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
      policy: 'Policy',
      priority: 'Priority',
      destCidrIp: 'DestCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      policy: 'string',
      priority: 'number',
      destCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSecurityGroupEgressResponseBody extends $tea.Model {
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

export class RevokeSecurityGroupEgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeSecurityGroupEgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeSecurityGroupEgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationRequest extends $tea.Model {
  appId?: string;
  fromAppVersion?: string;
  toAppVersion?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fromAppVersion: 'FromAppVersion',
      toAppVersion: 'ToAppVersion',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fromAppVersion: 'string',
      toAppVersion: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackApplicationResponseBody extends $tea.Model {
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

export class RollbackApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleRequest extends $tea.Model {
  appId?: string;
  uuid?: string;
  clientIp?: string;
  serviceAction?: string;
  podConfigName?: string;
  preLockedTimeout?: number;
  directorys?: string;
  serviceCommands?: string;
  scheduleStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      uuid: 'Uuid',
      clientIp: 'ClientIp',
      serviceAction: 'ServiceAction',
      podConfigName: 'PodConfigName',
      preLockedTimeout: 'PreLockedTimeout',
      directorys: 'Directorys',
      serviceCommands: 'ServiceCommands',
      scheduleStrategy: 'ScheduleStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      uuid: 'string',
      clientIp: 'string',
      serviceAction: 'string',
      podConfigName: 'string',
      preLockedTimeout: 'number',
      directorys: 'string',
      serviceCommands: 'string',
      scheduleStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBody extends $tea.Model {
  commandResults?: RunServiceScheduleResponseBodyCommandResults;
  index?: number;
  instanceId?: string;
  instanceIp?: string;
  instancePort?: number;
  requestId?: string;
  requestRepeated?: string;
  tcpPorts?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandResults: 'CommandResults',
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResults: RunServiceScheduleResponseBodyCommandResults,
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      requestId: 'string',
      requestRepeated: 'string',
      tcpPorts: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunServiceScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunServiceScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchedulePodRequest extends $tea.Model {
  aliUid?: number;
  groupUuid?: string;
  workloadUuid?: string;
  tenant?: string;
  regions?: string;
  areaCodes?: string;
  isps?: string;
  requirements?: string;
  labels?: string;
  resourceAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      groupUuid: 'GroupUuid',
      workloadUuid: 'WorkloadUuid',
      tenant: 'Tenant',
      regions: 'Regions',
      areaCodes: 'AreaCodes',
      isps: 'Isps',
      requirements: 'Requirements',
      labels: 'Labels',
      resourceAttribute: 'ResourceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      groupUuid: 'string',
      workloadUuid: 'string',
      tenant: 'string',
      regions: 'string',
      areaCodes: 'string',
      isps: 'string',
      requirements: 'string',
      labels: 'string',
      resourceAttribute: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchedulePodResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  msg?: string;
  desc?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      msg: 'Msg',
      desc: 'Desc',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      msg: 'string',
      desc: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchedulePodResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SchedulePodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SchedulePodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEpnInstanceResponseBody extends $tea.Model {
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

export class StartEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceRequest extends $tea.Model {
  EPNInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEpnInstanceResponseBody extends $tea.Model {
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

export class StopEpnInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopEpnInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopEpnInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  version?: string;
  instanceId?: string;
  forceStop?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      instanceId: 'InstanceId',
      forceStop: 'ForceStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      instanceId: 'string',
      forceStop: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  code?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateEipAddressRequest extends $tea.Model {
  version?: string;
  ensRegionId?: string;
  eip?: string;
  instanceIdInternetIp?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      ensRegionId: 'EnsRegionId',
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      ensRegionId: 'string',
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateEipAddressResponseBody extends $tea.Model {
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

export class UnassociateEipAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateEipAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateEipAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationRequest extends $tea.Model {
  appId?: string;
  template?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      template: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeApplicationResponseBody extends $tea.Model {
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

export class UpgradeApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponseBodyEipAddressesEipAddress extends $tea.Model {
  eip?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponseBodyEipAddresses extends $tea.Model {
  eipAddress?: AllocateEipAddressResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': AllocateEipAddressResponseBodyEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyImagesImage extends $tea.Model {
  imageId?: string;
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyImages extends $tea.Model {
  image?: DescribeAvailableResourceResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportResourcesSupportResource extends $tea.Model {
  dataDiskSize?: string;
  ensRegionId?: string;
  instanceSpec?: string;
  supportResourcesCount?: string;
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      ensRegionId: 'EnsRegionId',
      instanceSpec: 'InstanceSpec',
      supportResourcesCount: 'SupportResourcesCount',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'string',
      ensRegionId: 'string',
      instanceSpec: 'string',
      supportResourcesCount: 'string',
      systemDiskSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportResources extends $tea.Model {
  supportResource?: DescribeAvailableResourceResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportResourcesSupportResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatePrePaidInstanceResultResponseBodyInstanceCreateResult extends $tea.Model {
  instanceCreateStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCreateStatus: 'InstanceCreateStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCreateStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance extends $tea.Model {
  instanceId?: string;
  startTime?: string;
  statusDescrip?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances extends $tea.Model {
  instance?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat extends $tea.Model {
  instanceCount?: string;
  instances?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      instances: 'Instances',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'string',
      instances: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats extends $tea.Model {
  statusStat?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResultsDistResult extends $tea.Model {
  name?: string;
  statusStats?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStats: 'StatusStats',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStats: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDistResultResponseBodyDistResults extends $tea.Model {
  distResult?: DescribeDataDistResultResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId extends $tea.Model {
  regionId?: string;
  startTime?: string;
  statusDescrip?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      statusDescrip: 'StatusDescrip',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      startTime: 'string',
      statusDescrip: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds extends $tea.Model {
  regionId?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat extends $tea.Model {
  regionIdCount?: number;
  regionIds?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionIdCount: 'RegionIdCount',
      regionIds: 'RegionIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIdCount: 'number',
      regionIds: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS extends $tea.Model {
  statusStat?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResultsPushResult extends $tea.Model {
  name?: string;
  statusStatS?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStatS: 'StatusStatS',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStatS: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataPushResultResponseBodyPushResults extends $tea.Model {
  pushResult?: DescribeDataPushResultResponseBodyPushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddress extends $tea.Model {
  eip?: string;
  instanceIdInternetIp?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      instanceIdInternetIp: 'InstanceIdInternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      instanceIdInternetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddresses extends $tea.Model {
  eipAddress?: DescribeEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict extends $tea.Model {
  ensRegionIdCount?: string;
  netDistrictCode?: string;
  netDistrictEnName?: string;
  netDistrictFatherCode?: string;
  netDistrictLevel?: string;
  netDistrictName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdCount: 'EnsRegionIdCount',
      netDistrictCode: 'NetDistrictCode',
      netDistrictEnName: 'NetDistrictEnName',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictName: 'NetDistrictName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdCount: 'string',
      netDistrictCode: 'string',
      netDistrictEnName: 'string',
      netDistrictFatherCode: 'string',
      netDistrictLevel: 'string',
      netDistrictName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetDistrictResponseBodyEnsNetDistricts extends $tea.Model {
  ensNetDistrict?: DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetDistrictResponseBodyEnsNetDistrictsEnsNetDistrict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel extends $tea.Model {
  ensNetLevelCode?: string;
  static names(): { [key: string]: string } {
    return {
      ensNetLevelCode: 'EnsNetLevelCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevelCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetLevelResponseBodyEnsNetLevels extends $tea.Model {
  ensNetLevel?: DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel[];
  static names(): { [key: string]: string } {
    return {
      ensNetLevel: 'EnsNetLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetLevel: { 'type': 'array', 'itemType': DescribeEnsNetLevelResponseBodyEnsNetLevelsEnsNetLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict extends $tea.Model {
  ensRegionIdCount?: string;
  instanceCount?: string;
  netDistrictCode?: string;
  netDistrictEnName?: string;
  netDistrictFatherCode?: string;
  netDistrictLevel?: string;
  netDistrictName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdCount: 'EnsRegionIdCount',
      instanceCount: 'InstanceCount',
      netDistrictCode: 'NetDistrictCode',
      netDistrictEnName: 'NetDistrictEnName',
      netDistrictFatherCode: 'NetDistrictFatherCode',
      netDistrictLevel: 'NetDistrictLevel',
      netDistrictName: 'NetDistrictName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdCount: 'string',
      instanceCount: 'string',
      netDistrictCode: 'string',
      netDistrictEnName: 'string',
      netDistrictFatherCode: 'string',
      netDistrictLevel: 'string',
      netDistrictName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsNetSaleDistrictResponseBodyEnsNetDistricts extends $tea.Model {
  ensNetDistrict?: DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict[];
  static names(): { [key: string]: string } {
    return {
      ensNetDistrict: 'EnsNetDistrict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensNetDistrict: { 'type': 'array', 'itemType': DescribeEnsNetSaleDistrictResponseBodyEnsNetDistrictsEnsNetDistrict },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info extends $tea.Model {
  ensRegionId?: string;
  supportIpv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      supportIpv6: 'SupportIpv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      supportIpv6: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource extends $tea.Model {
  area?: string;
  areaCode?: string;
  bizDate?: string;
  ensRegionId?: string;
  ensRegionIdName?: string;
  instanceCount?: number;
  internetBandwidth?: number;
  isp?: string;
  VCpu?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      areaCode: 'AreaCode',
      bizDate: 'BizDate',
      ensRegionId: 'EnsRegionId',
      ensRegionIdName: 'EnsRegionIdName',
      instanceCount: 'InstanceCount',
      internetBandwidth: 'InternetBandwidth',
      isp: 'Isp',
      VCpu: 'VCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      areaCode: 'string',
      bizDate: 'string',
      ensRegionId: 'string',
      ensRegionIdName: 'string',
      instanceCount: 'number',
      internetBandwidth: 'number',
      isp: 'string',
      VCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources extends $tea.Model {
  ensRegionIdResource?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource[];
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResource: 'EnsRegionIdResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResource: { 'type': 'array', 'itemType': DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions extends $tea.Model {
  area?: string;
  enName?: string;
  ensRegionId?: string;
  name?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      enName: 'string',
      ensRegionId: 'string',
      name: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsRegionsResponseBodyEnsRegions extends $tea.Model {
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions[];
  static names(): { [key: string]: string } {
    return {
      ensRegions: 'EnsRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegions: { 'type': 'array', 'itemType': DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $tea.Model {
  downBandWidth?: number;
  internetRX?: number;
  internetTX?: number;
  timeStamp?: string;
  upBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      downBandWidth: 'DownBandWidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      timeStamp: 'TimeStamp',
      upBandWidth: 'UpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downBandWidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      timeStamp: 'string',
      upBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnBandWidthDataResponseBodyMonitorData extends $tea.Model {
  bandWidthMonitorData?: DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  maxDownBandWidth?: number;
  maxUpBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      bandWidthMonitorData: 'BandWidthMonitorData',
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData },
      maxDownBandWidth: 'number',
      maxUpBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBodyConfVersions extends $tea.Model {
  confVersion?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      confVersion: 'ConfVersion',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersion: 'string',
      ensRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBodyInstances extends $tea.Model {
  ensRegionId?: string;
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      privateIpAddress: 'PrivateIpAddress',
      publicIpAddress: 'PublicIpAddress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      privateIpAddress: 'string',
      publicIpAddress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstanceAttributeResponseBodyVSwitches extends $tea.Model {
  cidrBlock?: string;
  ensRegionId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      ensRegionId: 'EnsRegionId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      ensRegionId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance extends $tea.Model {
  creationTime?: string;
  EPNInstanceId?: string;
  EPNInstanceName?: string;
  EPNInstanceType?: string;
  endTime?: string;
  internetMaxBandwidthOut?: number;
  modifyTime?: string;
  networkingModel?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      EPNInstanceType: 'EPNInstanceType',
      endTime: 'EndTime',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      modifyTime: 'ModifyTime',
      networkingModel: 'NetworkingModel',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      EPNInstanceType: 'string',
      endTime: 'string',
      internetMaxBandwidthOut: 'number',
      modifyTime: 'string',
      networkingModel: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnInstancesResponseBodyEPNInstances extends $tea.Model {
  EPNInstance?: DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance[];
  static names(): { [key: string]: string } {
    return {
      EPNInstance: 'EPNInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstance: { 'type': 'array', 'itemType': DescribeEpnInstancesResponseBodyEPNInstancesEPNInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $tea.Model {
  costCode?: string;
  costName?: string;
  costType?: string;
  costVal?: number;
  ispLine?: string;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costType: 'CostType',
      costVal: 'CostVal',
      ispLine: 'IspLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costType: 'string',
      costVal: 'number',
      ispLine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $tea.Model {
  bandWidthFeeData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData extends $tea.Model {
  bandWidthFeeDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas;
  chargeModel?: string;
  costCycle?: string;
  costEndTime?: string;
  costStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costEndTime: 'CostEndTime',
      costStartTime: 'CostStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas,
      chargeModel: 'string',
      costCycle: 'string',
      costEndTime: 'string',
      costStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatas extends $tea.Model {
  measurementData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBodyImagesImage extends $tea.Model {
  architecture?: string;
  creationTime?: string;
  exportedImageURL?: string;
  imageExportStatus?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      exportedImageURL: 'ExportedImageURL',
      imageExportStatus: 'ImageExportStatus',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      exportedImageURL: 'string',
      imageExportStatus: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportImageInfoResponseBodyImages extends $tea.Model {
  image?: DescribeExportImageInfoResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeExportImageInfoResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBodyImagesImage extends $tea.Model {
  description?: string;
  imageId?: string;
  imageSize?: string;
  imageVersion?: string;
  OSName?: string;
  OSType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageVersion: 'ImageVersion',
      OSName: 'OSName',
      OSType: 'OSType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      imageSize: 'string',
      imageVersion: 'string',
      OSName: 'string',
      OSType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBodyImages extends $tea.Model {
  image?: DescribeImageInfosResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImageInfosResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImage extends $tea.Model {
  architecture?: string;
  creationTime?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  imageSize?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageSize: 'ImageSize',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageSize: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  image?: DescribeImagesResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute extends $tea.Model {
  autoRenewal?: boolean;
  duration?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      duration: 'Duration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      duration: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes extends $tea.Model {
  instanceRenewAttribute?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      instanceRenewAttribute: 'InstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRenewAttribute: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData extends $tea.Model {
  CPU?: string;
  instanceId?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      instanceId: 'InstanceId',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      instanceId: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMonitorDataResponseBodyMonitorData extends $tea.Model {
  instanceMonitorData?: DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec extends $tea.Model {
  core?: string;
  displayName?: string;
  instanceType?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      displayName: 'DisplayName',
      instanceType: 'InstanceType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'string',
      displayName: 'string',
      instanceType: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecResponseBodyInstanceSpecs extends $tea.Model {
  instanceSpec?: DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpec: { 'type': 'array', 'itemType': DescribeInstanceSpecResponseBodyInstanceSpecsInstanceSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $tea.Model {
  cpuCoreCount?: number;
  instanceTypeId?: string;
  instanceTypeName?: string;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeId: 'InstanceTypeId',
      instanceTypeName: 'InstanceTypeName',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceTypeId: 'string',
      instanceTypeName: 'string',
      memorySize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypes extends $tea.Model {
  instanceType?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairsKeyPair extends $tea.Model {
  creationTime?: string;
  keyPairFingerPrint?: string;
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairs extends $tea.Model {
  keyPair?: DescribeKeyPairsResponseBodyKeyPairsKeyPair[];
  static names(): { [key: string]: string } {
    return {
      keyPair: 'KeyPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPair: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyKeyPairsKeyPair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $tea.Model {
  costCode?: string;
  costName?: string;
  costVal?: number;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costVal: 'CostVal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costVal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $tea.Model {
  bandWidthFeeData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData extends $tea.Model {
  memory?: number;
  storage?: number;
  vcpu?: number;
  static names(): { [key: string]: string } {
    return {
      memory: 'Memory',
      storage: 'Storage',
      vcpu: 'Vcpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'number',
      storage: 'number',
      vcpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail extends $tea.Model {
  costCode?: string;
  costName?: string;
  costVal?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costVal: 'CostVal',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costVal: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails extends $tea.Model {
  resourceFeeDataDetail?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail[];
  static names(): { [key: string]: string } {
    return {
      resourceFeeDataDetail: 'ResourceFeeDataDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceFeeDataDetail: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData extends $tea.Model {
  bandWidthFeeDatas?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas;
  chargeModel?: string;
  costCycle?: string;
  costEndTime?: string;
  costStartTime?: string;
  resourceFeeData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData;
  resourceFeeDataDetails?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails;
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costEndTime: 'CostEndTime',
      costStartTime: 'CostStartTime',
      resourceFeeData: 'ResourceFeeData',
      resourceFeeDataDetails: 'ResourceFeeDataDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeDatas: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas,
      chargeModel: 'string',
      costCycle: 'string',
      costEndTime: 'string',
      costStartTime: 'string',
      resourceFeeData: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData,
      resourceFeeDataDetails: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatas extends $tea.Model {
  measurementData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet extends $tea.Model {
  creationTime?: string;
  ensRegionId?: string;
  instanceId?: string;
  macAddress?: string;
  networkInterfaceId?: string;
  primaryIp?: string;
  primaryIpType?: string;
  status?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      macAddress: 'MacAddress',
      networkInterfaceId: 'NetworkInterfaceId',
      primaryIp: 'PrimaryIp',
      primaryIpType: 'PrimaryIpType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      macAddress: 'string',
      networkInterfaceId: 'string',
      primaryIp: 'string',
      primaryIpType: 'string',
      status: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets extends $tea.Model {
  networkInterfaceSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSet: 'NetworkInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestSystemDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestDataDisk extends $tea.Model {
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPrice extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfo extends $tea.Model {
  price?: DescribePriceResponseBodyPriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribePriceResponseBodyPriceInfoPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyPermissionsPermission extends $tea.Model {
  creationTime?: string;
  destCidrIp?: string;
  direction?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: number;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      destCidrIp: 'DestCidrIp',
      direction: 'Direction',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      destCidrIp: 'string',
      direction: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'number',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyPermissions extends $tea.Model {
  permission?: DescribeSecurityGroupAttributeResponseBodyPermissionsPermission[];
  static names(): { [key: string]: string } {
    return {
      permission: 'Permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodyPermissionsPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup extends $tea.Model {
  creationTime?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroups extends $tea.Model {
  securityGroup?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus extends $tea.Model {
  containerId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses extends $tea.Model {
  containerStatus?: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfo extends $tea.Model {
  containerService?: boolean;
  containerStatuses?: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses;
  name?: boolean;
  namespace?: boolean;
  resourceScope?: boolean;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      containerService: 'ContainerService',
      containerStatuses: 'ContainerStatuses',
      name: 'Name',
      namespace: 'Namespace',
      resourceScope: 'ResourceScope',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerService: 'boolean',
      containerStatuses: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses,
      name: 'boolean',
      namespace: 'boolean',
      resourceScope: 'boolean',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $tea.Model {
  downBandWidth?: number;
  internetRX?: number;
  internetTX?: number;
  timeStamp?: string;
  upBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      downBandWidth: 'DownBandWidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      timeStamp: 'TimeStamp',
      upBandWidth: 'UpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downBandWidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      timeStamp: 'string',
      upBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBandWidthDataResponseBodyMonitorData extends $tea.Model {
  bandWidthMonitorData?: DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData[];
  maxDownBandWidth?: string;
  maxUpBandWidth?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidthMonitorData: 'BandWidthMonitorData',
      maxDownBandWidth: 'MaxDownBandWidth',
      maxUpBandWidth: 'MaxUpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthMonitorData: { 'type': 'array', 'itemType': DescribeUserBandWidthDataResponseBodyMonitorDataBandWidthMonitorData },
      maxDownBandWidth: 'string',
      maxUpBandWidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $tea.Model {
  cidrBlock?: string;
  createdTime?: string;
  ensRegionId?: string;
  freeIpCount?: number;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      ensRegionId: 'EnsRegionId',
      freeIpCount: 'FreeIpCount',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      ensRegionId: 'string',
      freeIpCount: 'number',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitches extends $tea.Model {
  vSwitch?: DescribeVSwitchesResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationAppListApp extends $tea.Model {
  appId?: string;
  appInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationAppList extends $tea.Model {
  app?: ListApplicationsResponseBodyApplicationsApplicationAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationAppListApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplication extends $tea.Model {
  appList?: ListApplicationsResponseBodyApplicationsApplicationAppList;
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: ListApplicationsResponseBodyApplicationsApplicationAppList,
      clusterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponseBodyPushResultsPushResult extends $tea.Model {
  name?: string;
  resultCode?: number;
  resultDescrip?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resultCode: 'ResultCode',
      resultDescrip: 'ResultDescrip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resultCode: 'number',
      resultDescrip: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushApplicationDataResponseBodyPushResults extends $tea.Model {
  pushResult?: PushApplicationDataResponseBodyPushResultsPushResult[];
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: { 'type': 'array', 'itemType': PushApplicationDataResponseBodyPushResultsPushResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBodyCommandResultsCommandResult extends $tea.Model {
  command?: string;
  containerName?: string;
  resultMsg?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      containerName: 'ContainerName',
      resultMsg: 'ResultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      containerName: 'string',
      resultMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBodyCommandResults extends $tea.Model {
  commandResult?: RunServiceScheduleResponseBodyCommandResultsCommandResult[];
  static names(): { [key: string]: string } {
    return {
      commandResult: 'CommandResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResult: { 'type': 'array', 'itemType': RunServiceScheduleResponseBodyCommandResultsCommandResult },
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
    this._endpoint = this.getEndpoint("ens", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addNetworkInterfaceToInstanceWithOptions(request: AddNetworkInterfaceToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AddNetworkInterfaceToInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddNetworkInterfaceToInstanceResponse>(await this.doRPCRequest("AddNetworkInterfaceToInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new AddNetworkInterfaceToInstanceResponse({}));
  }

  async addNetworkInterfaceToInstance(request: AddNetworkInterfaceToInstanceRequest): Promise<AddNetworkInterfaceToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNetworkInterfaceToInstanceWithOptions(request, runtime);
  }

  async allocateEipAddressWithOptions(request: AllocateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateEipAddressResponse>(await this.doRPCRequest("AllocateEipAddress", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateEipAddressResponse({}));
  }

  async allocateEipAddress(request: AllocateEipAddressRequest): Promise<AllocateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateEipAddressWithOptions(request, runtime);
  }

  async associateEipAddressWithOptions(request: AssociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateEipAddressResponse>(await this.doRPCRequest("AssociateEipAddress", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateEipAddressResponse({}));
  }

  async associateEipAddress(request: AssociateEipAddressRequest): Promise<AssociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateEipAddressWithOptions(request, runtime);
  }

  async attachEnsInstancesWithOptions(request: AttachEnsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<AttachEnsInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachEnsInstancesResponse>(await this.doRPCRequest("AttachEnsInstances", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new AttachEnsInstancesResponse({}));
  }

  async attachEnsInstances(request: AttachEnsInstancesRequest): Promise<AttachEnsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEnsInstancesWithOptions(request, runtime);
  }

  async authorizeSecurityGroupWithOptions(request: AuthorizeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AuthorizeSecurityGroupResponse>(await this.doRPCRequest("AuthorizeSecurityGroup", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new AuthorizeSecurityGroupResponse({}));
  }

  async authorizeSecurityGroup(request: AuthorizeSecurityGroupRequest): Promise<AuthorizeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupWithOptions(request, runtime);
  }

  async authorizeSecurityGroupEgressWithOptions(request: AuthorizeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AuthorizeSecurityGroupEgressResponse>(await this.doRPCRequest("AuthorizeSecurityGroupEgress", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new AuthorizeSecurityGroupEgressResponse({}));
  }

  async authorizeSecurityGroupEgress(request: AuthorizeSecurityGroupEgressRequest): Promise<AuthorizeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupEgressWithOptions(request, runtime);
  }

  async checkQuotaWithOptions(request: CheckQuotaRequest, runtime: $Util.RuntimeOptions): Promise<CheckQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckQuotaResponse>(await this.doRPCRequest("CheckQuota", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CheckQuotaResponse({}));
  }

  async checkQuota(request: CheckQuotaRequest): Promise<CheckQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkQuotaWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateApplicationResponse>(await this.doRPCRequest("CreateApplication", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createEnsServiceWithOptions(request: CreateEnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnsServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEnsServiceResponse>(await this.doRPCRequest("CreateEnsService", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEnsServiceResponse({}));
  }

  async createEnsService(request: CreateEnsServiceRequest): Promise<CreateEnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnsServiceWithOptions(request, runtime);
  }

  async createEPInstanceWithOptions(request: CreateEPInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEPInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEPInstanceResponse>(await this.doRPCRequest("CreateEPInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEPInstanceResponse({}));
  }

  async createEPInstance(request: CreateEPInstanceRequest): Promise<CreateEPInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEPInstanceWithOptions(request, runtime);
  }

  async createEpnInstanceWithOptions(request: CreateEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEpnInstanceResponse>(await this.doRPCRequest("CreateEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEpnInstanceResponse({}));
  }

  async createEpnInstance(request: CreateEpnInstanceRequest): Promise<CreateEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEpnInstanceWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImageResponse>(await this.doRPCRequest("CreateImage", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyPairResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateKeyPairResponse>(await this.doRPCRequest("CreateKeyPair", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateKeyPairResponse({}));
  }

  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  async createSecurityGroupWithOptions(request: CreateSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSecurityGroupResponse>(await this.doRPCRequest("CreateSecurityGroup", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSecurityGroupResponse({}));
  }

  async createSecurityGroup(request: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityGroupWithOptions(request, runtime);
  }

  async createVmAndSaveStockWithOptions(request: CreateVmAndSaveStockRequest, runtime: $Util.RuntimeOptions): Promise<CreateVmAndSaveStockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVmAndSaveStockResponse>(await this.doRPCRequest("CreateVmAndSaveStock", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVmAndSaveStockResponse({}));
  }

  async createVmAndSaveStock(request: CreateVmAndSaveStockRequest): Promise<CreateVmAndSaveStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVmAndSaveStockWithOptions(request, runtime);
  }

  async createVSwitchWithOptions(request: CreateVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<CreateVSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVSwitchResponse>(await this.doRPCRequest("CreateVSwitch", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVSwitchResponse({}));
  }

  async createVSwitch(request: CreateVSwitchRequest): Promise<CreateVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVSwitchWithOptions(request, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteApplicationResponse>(await this.doRPCRequest("DeleteApplication", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  async deleteEpnInstanceWithOptions(request: DeleteEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEpnInstanceResponse>(await this.doRPCRequest("DeleteEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEpnInstanceResponse({}));
  }

  async deleteEpnInstance(request: DeleteEpnInstanceRequest): Promise<DeleteEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEpnInstanceWithOptions(request, runtime);
  }

  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteKeyPairsResponse>(await this.doRPCRequest("DeleteKeyPairs", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteKeyPairsResponse({}));
  }

  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSecurityGroupResponse>(await this.doRPCRequest("DeleteSecurityGroup", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSecurityGroupResponse({}));
  }

  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  async deleteVmWithOptions(request: DeleteVmRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVmResponse>(await this.doRPCRequest("DeleteVm", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVmResponse({}));
  }

  async deleteVm(request: DeleteVmRequest): Promise<DeleteVmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVmWithOptions(request, runtime);
  }

  async deleteVSwitchWithOptions(request: DeleteVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVSwitchResponse>(await this.doRPCRequest("DeleteVSwitch", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVSwitchResponse({}));
  }

  async deleteVSwitch(request: DeleteVSwitchRequest): Promise<DeleteVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVSwitchWithOptions(request, runtime);
  }

  async describeApplicationWithOptions(request: DescribeApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApplicationResponse>(await this.doRPCRequest("DescribeApplication", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApplicationResponse({}));
  }

  async describeApplication(request: DescribeApplicationRequest): Promise<DescribeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationWithOptions(request, runtime);
  }

  async describeApplicationResourceSummaryWithOptions(request: DescribeApplicationResourceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationResourceSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApplicationResourceSummaryResponse>(await this.doRPCRequest("DescribeApplicationResourceSummary", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApplicationResourceSummaryResponse({}));
  }

  async describeApplicationResourceSummary(request: DescribeApplicationResourceSummaryRequest): Promise<DescribeApplicationResourceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationResourceSummaryWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeBandwitdhByInternetChargeTypeWithOptions(request: DescribeBandwitdhByInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwitdhByInternetChargeTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBandwitdhByInternetChargeTypeResponse>(await this.doRPCRequest("DescribeBandwitdhByInternetChargeType", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBandwitdhByInternetChargeTypeResponse({}));
  }

  async describeBandwitdhByInternetChargeType(request: DescribeBandwitdhByInternetChargeTypeRequest): Promise<DescribeBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  async describeBandWithdChargeTypeWithOptions(request: DescribeBandWithdChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandWithdChargeTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBandWithdChargeTypeResponse>(await this.doRPCRequest("DescribeBandWithdChargeType", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBandWithdChargeTypeResponse({}));
  }

  async describeBandWithdChargeType(request: DescribeBandWithdChargeTypeRequest): Promise<DescribeBandWithdChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandWithdChargeTypeWithOptions(request, runtime);
  }

  async describeCreatePrePaidInstanceResultWithOptions(request: DescribeCreatePrePaidInstanceResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCreatePrePaidInstanceResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCreatePrePaidInstanceResultResponse>(await this.doRPCRequest("DescribeCreatePrePaidInstanceResult", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCreatePrePaidInstanceResultResponse({}));
  }

  async describeCreatePrePaidInstanceResult(request: DescribeCreatePrePaidInstanceResultRequest): Promise<DescribeCreatePrePaidInstanceResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCreatePrePaidInstanceResultWithOptions(request, runtime);
  }

  async describeDataDistResultWithOptions(request: DescribeDataDistResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataDistResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataDistResultResponse>(await this.doRPCRequest("DescribeDataDistResult", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataDistResultResponse({}));
  }

  async describeDataDistResult(request: DescribeDataDistResultRequest): Promise<DescribeDataDistResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataDistResultWithOptions(request, runtime);
  }

  async describeDataPushResultWithOptions(request: DescribeDataPushResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataPushResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataPushResultResponse>(await this.doRPCRequest("DescribeDataPushResult", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataPushResultResponse({}));
  }

  async describeDataPushResult(request: DescribeDataPushResultRequest): Promise<DescribeDataPushResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataPushResultWithOptions(request, runtime);
  }

  async describeEipAddressesWithOptions(request: DescribeEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipAddressesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEipAddressesResponse>(await this.doRPCRequest("DescribeEipAddresses", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEipAddressesResponse({}));
  }

  async describeEipAddresses(request: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipAddressesWithOptions(request, runtime);
  }

  async describeEnsNetDistrictWithOptions(request: DescribeEnsNetDistrictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetDistrictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEnsNetDistrictResponse>(await this.doRPCRequest("DescribeEnsNetDistrict", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEnsNetDistrictResponse({}));
  }

  async describeEnsNetDistrict(request: DescribeEnsNetDistrictRequest): Promise<DescribeEnsNetDistrictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetDistrictWithOptions(request, runtime);
  }

  async describeEnsNetLevelWithOptions(request: DescribeEnsNetLevelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetLevelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEnsNetLevelResponse>(await this.doRPCRequest("DescribeEnsNetLevel", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEnsNetLevelResponse({}));
  }

  async describeEnsNetLevel(request: DescribeEnsNetLevelRequest): Promise<DescribeEnsNetLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetLevelWithOptions(request, runtime);
  }

  async describeEnsNetSaleDistrictWithOptions(request: DescribeEnsNetSaleDistrictRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsNetSaleDistrictResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEnsNetSaleDistrictResponse>(await this.doRPCRequest("DescribeEnsNetSaleDistrict", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEnsNetSaleDistrictResponse({}));
  }

  async describeEnsNetSaleDistrict(request: DescribeEnsNetSaleDistrictRequest): Promise<DescribeEnsNetSaleDistrictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsNetSaleDistrictWithOptions(request, runtime);
  }

  async describeEnsRegionIdIpv6InfoWithOptions(request: DescribeEnsRegionIdIpv6InfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionIdIpv6InfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEnsRegionIdIpv6InfoResponse>(await this.doRPCRequest("DescribeEnsRegionIdIpv6Info", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEnsRegionIdIpv6InfoResponse({}));
  }

  async describeEnsRegionIdIpv6Info(request: DescribeEnsRegionIdIpv6InfoRequest): Promise<DescribeEnsRegionIdIpv6InfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionIdIpv6InfoWithOptions(request, runtime);
  }

  async describeEnsRegionIdResourceWithOptions(request: DescribeEnsRegionIdResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionIdResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEnsRegionIdResourceResponse>(await this.doRPCRequest("DescribeEnsRegionIdResource", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEnsRegionIdResourceResponse({}));
  }

  async describeEnsRegionIdResource(request: DescribeEnsRegionIdResourceRequest): Promise<DescribeEnsRegionIdResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionIdResourceWithOptions(request, runtime);
  }

  async describeEnsRegionsWithOptions(request: DescribeEnsRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnsRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEnsRegionsResponse>(await this.doRPCRequest("DescribeEnsRegions", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEnsRegionsResponse({}));
  }

  async describeEnsRegions(request: DescribeEnsRegionsRequest): Promise<DescribeEnsRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnsRegionsWithOptions(request, runtime);
  }

  async describeEpnBandWidthDataWithOptions(request: DescribeEpnBandWidthDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnBandWidthDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEpnBandWidthDataResponse>(await this.doRPCRequest("DescribeEpnBandWidthData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEpnBandWidthDataResponse({}));
  }

  async describeEpnBandWidthData(request: DescribeEpnBandWidthDataRequest): Promise<DescribeEpnBandWidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnBandWidthDataWithOptions(request, runtime);
  }

  async describeEpnBandwitdhByInternetChargeTypeWithOptions(request: DescribeEpnBandwitdhByInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEpnBandwitdhByInternetChargeTypeResponse>(await this.doRPCRequest("DescribeEpnBandwitdhByInternetChargeType", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEpnBandwitdhByInternetChargeTypeResponse({}));
  }

  async describeEpnBandwitdhByInternetChargeType(request: DescribeEpnBandwitdhByInternetChargeTypeRequest): Promise<DescribeEpnBandwitdhByInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnBandwitdhByInternetChargeTypeWithOptions(request, runtime);
  }

  async describeEpnInstanceAttributeWithOptions(request: DescribeEpnInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEpnInstanceAttributeResponse>(await this.doRPCRequest("DescribeEpnInstanceAttribute", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEpnInstanceAttributeResponse({}));
  }

  async describeEpnInstanceAttribute(request: DescribeEpnInstanceAttributeRequest): Promise<DescribeEpnInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnInstanceAttributeWithOptions(request, runtime);
  }

  async describeEpnInstancesWithOptions(request: DescribeEpnInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEpnInstancesResponse>(await this.doRPCRequest("DescribeEpnInstances", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEpnInstancesResponse({}));
  }

  async describeEpnInstances(request: DescribeEpnInstancesRequest): Promise<DescribeEpnInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnInstancesWithOptions(request, runtime);
  }

  async describeEpnMeasurementDataWithOptions(request: DescribeEpnMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEpnMeasurementDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEpnMeasurementDataResponse>(await this.doRPCRequest("DescribeEpnMeasurementData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEpnMeasurementDataResponse({}));
  }

  async describeEpnMeasurementData(request: DescribeEpnMeasurementDataRequest): Promise<DescribeEpnMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEpnMeasurementDataWithOptions(request, runtime);
  }

  async describeExportImageInfoWithOptions(request: DescribeExportImageInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportImageInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExportImageInfoResponse>(await this.doRPCRequest("DescribeExportImageInfo", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExportImageInfoResponse({}));
  }

  async describeExportImageInfo(request: DescribeExportImageInfoRequest): Promise<DescribeExportImageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportImageInfoWithOptions(request, runtime);
  }

  async describeExportImageStatusWithOptions(request: DescribeExportImageStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportImageStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExportImageStatusResponse>(await this.doRPCRequest("DescribeExportImageStatus", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExportImageStatusResponse({}));
  }

  async describeExportImageStatus(request: DescribeExportImageStatusRequest): Promise<DescribeExportImageStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportImageStatusWithOptions(request, runtime);
  }

  async describeImageInfosWithOptions(request: DescribeImageInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageInfosResponse>(await this.doRPCRequest("DescribeImageInfos", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageInfosResponse({}));
  }

  async describeImageInfos(request: DescribeImageInfosRequest): Promise<DescribeImageInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageInfosWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImagesResponse>(await this.doRPCRequest("DescribeImages", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewAttributeWithOptions(request: DescribeInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAutoRenewAttributeResponse>(await this.doRPCRequest("DescribeInstanceAutoRenewAttribute", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAutoRenewAttributeResponse({}));
  }

  async describeInstanceAutoRenewAttribute(request: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeInstanceMonitorDataWithOptions(request: DescribeInstanceMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMonitorDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceMonitorDataResponse>(await this.doRPCRequest("DescribeInstanceMonitorData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceMonitorDataResponse({}));
  }

  async describeInstanceMonitorData(request: DescribeInstanceMonitorDataRequest): Promise<DescribeInstanceMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMonitorDataWithOptions(request, runtime);
  }

  async describeInstanceSpecWithOptions(request: DescribeInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSpecResponse>(await this.doRPCRequest("DescribeInstanceSpec", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSpecResponse({}));
  }

  async describeInstanceSpec(request: DescribeInstanceSpecRequest): Promise<DescribeInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecWithOptions(request, runtime);
  }

  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceTypesResponse>(await this.doRPCRequest("DescribeInstanceTypes", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceTypesResponse({}));
  }

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  async describeInstanceVncUrlWithOptions(request: DescribeInstanceVncUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceVncUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceVncUrlResponse>(await this.doRPCRequest("DescribeInstanceVncUrl", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceVncUrlResponse({}));
  }

  async describeInstanceVncUrl(request: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  async describeKeyPairsWithOptions(request: DescribeKeyPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyPairsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeKeyPairsResponse>(await this.doRPCRequest("DescribeKeyPairs", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeKeyPairsResponse({}));
  }

  async describeKeyPairs(request: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyPairsWithOptions(request, runtime);
  }

  async describeMeasurementDataWithOptions(request: DescribeMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMeasurementDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMeasurementDataResponse>(await this.doRPCRequest("DescribeMeasurementData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMeasurementDataResponse({}));
  }

  async describeMeasurementData(request: DescribeMeasurementDataRequest): Promise<DescribeMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMeasurementDataWithOptions(request, runtime);
  }

  async describeNetworkInterfacesWithOptions(request: DescribeNetworkInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkInterfacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkInterfacesResponse>(await this.doRPCRequest("DescribeNetworkInterfaces", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkInterfacesResponse({}));
  }

  async describeNetworkInterfaces(request: DescribeNetworkInterfacesRequest): Promise<DescribeNetworkInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkInterfacesWithOptions(request, runtime);
  }

  async describePrePaidInstanceStockWithOptions(request: DescribePrePaidInstanceStockRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrePaidInstanceStockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePrePaidInstanceStockResponse>(await this.doRPCRequest("DescribePrePaidInstanceStock", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePrePaidInstanceStockResponse({}));
  }

  async describePrePaidInstanceStock(request: DescribePrePaidInstanceStockRequest): Promise<DescribePrePaidInstanceStockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrePaidInstanceStockWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePriceResponse>(await this.doRPCRequest("DescribePrice", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describeSecurityGroupAttributeWithOptions(request: DescribeSecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityGroupAttributeResponse>(await this.doRPCRequest("DescribeSecurityGroupAttribute", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupAttributeResponse({}));
  }

  async describeSecurityGroupAttribute(request: DescribeSecurityGroupAttributeRequest): Promise<DescribeSecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  async describeSecurityGroupsWithOptions(request: DescribeSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityGroupsResponse>(await this.doRPCRequest("DescribeSecurityGroups", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupsResponse({}));
  }

  async describeSecurityGroups(request: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupsWithOptions(request, runtime);
  }

  async describeServcieScheduleWithOptions(request: DescribeServcieScheduleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServcieScheduleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServcieScheduleResponse>(await this.doRPCRequest("DescribeServcieSchedule", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServcieScheduleResponse({}));
  }

  async describeServcieSchedule(request: DescribeServcieScheduleRequest): Promise<DescribeServcieScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServcieScheduleWithOptions(request, runtime);
  }

  async describeUserBandWidthDataWithOptions(request: DescribeUserBandWidthDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBandWidthDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserBandWidthDataResponse>(await this.doRPCRequest("DescribeUserBandWidthData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserBandWidthDataResponse({}));
  }

  async describeUserBandWidthData(request: DescribeUserBandWidthDataRequest): Promise<DescribeUserBandWidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBandWidthDataWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.doRPCRequest("DescribeVSwitches", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async exportBillDetailDataWithOptions(request: ExportBillDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportBillDetailDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportBillDetailDataResponse>(await this.doRPCRequest("ExportBillDetailData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ExportBillDetailDataResponse({}));
  }

  async exportBillDetailData(request: ExportBillDetailDataRequest): Promise<ExportBillDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportBillDetailDataWithOptions(request, runtime);
  }

  async exportImageWithOptions(request: ExportImageRequest, runtime: $Util.RuntimeOptions): Promise<ExportImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportImageResponse>(await this.doRPCRequest("ExportImage", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ExportImageResponse({}));
  }

  async exportImage(request: ExportImageRequest): Promise<ExportImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportImageWithOptions(request, runtime);
  }

  async exportMeasurementDataWithOptions(request: ExportMeasurementDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportMeasurementDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportMeasurementDataResponse>(await this.doRPCRequest("ExportMeasurementData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ExportMeasurementDataResponse({}));
  }

  async exportMeasurementData(request: ExportMeasurementDataRequest): Promise<ExportMeasurementDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportMeasurementDataWithOptions(request, runtime);
  }

  async getVmListWithOptions(request: GetVmListRequest, runtime: $Util.RuntimeOptions): Promise<GetVmListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetVmListResponse>(await this.doRPCRequest("GetVmList", "2017-11-10", "HTTPS", "GET", "AK", "json", req, runtime), new GetVmListResponse({}));
  }

  async getVmList(request: GetVmListRequest): Promise<GetVmListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVmListWithOptions(request, runtime);
  }

  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyPairResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportKeyPairResponse>(await this.doRPCRequest("ImportKeyPair", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ImportKeyPairResponse({}));
  }

  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  async joinPublicIpsToEpnInstanceWithOptions(request: JoinPublicIpsToEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<JoinPublicIpsToEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinPublicIpsToEpnInstanceResponse>(await this.doRPCRequest("JoinPublicIpsToEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new JoinPublicIpsToEpnInstanceResponse({}));
  }

  async joinPublicIpsToEpnInstance(request: JoinPublicIpsToEpnInstanceRequest): Promise<JoinPublicIpsToEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinPublicIpsToEpnInstanceWithOptions(request, runtime);
  }

  async joinSecurityGroupWithOptions(request: JoinSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinSecurityGroupResponse>(await this.doRPCRequest("JoinSecurityGroup", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new JoinSecurityGroupResponse({}));
  }

  async joinSecurityGroup(request: JoinSecurityGroupRequest): Promise<JoinSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinSecurityGroupWithOptions(request, runtime);
  }

  async joinVSwitchesToEpnInstanceWithOptions(request: JoinVSwitchesToEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<JoinVSwitchesToEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinVSwitchesToEpnInstanceResponse>(await this.doRPCRequest("JoinVSwitchesToEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new JoinVSwitchesToEpnInstanceResponse({}));
  }

  async joinVSwitchesToEpnInstance(request: JoinVSwitchesToEpnInstanceRequest): Promise<JoinVSwitchesToEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinVSwitchesToEpnInstanceWithOptions(request, runtime);
  }

  async leaveSecurityGroupWithOptions(request: LeaveSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LeaveSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LeaveSecurityGroupResponse>(await this.doRPCRequest("LeaveSecurityGroup", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new LeaveSecurityGroupResponse({}));
  }

  async leaveSecurityGroup(request: LeaveSecurityGroupRequest): Promise<LeaveSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.leaveSecurityGroupWithOptions(request, runtime);
  }

  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListApplicationsResponse>(await this.doRPCRequest("ListApplications", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListApplicationsResponse({}));
  }

  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  async modifyEpnInstanceWithOptions(request: ModifyEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEpnInstanceResponse>(await this.doRPCRequest("ModifyEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEpnInstanceResponse({}));
  }

  async modifyEpnInstance(request: ModifyEpnInstanceRequest): Promise<ModifyEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEpnInstanceWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyImageAttributeResponse>(await this.doRPCRequest("ModifyImageAttribute", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async modifyImageSharePermissionWithOptions(request: ModifyImageSharePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageSharePermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyImageSharePermissionResponse>(await this.doRPCRequest("ModifyImageSharePermission", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyImageSharePermissionResponse({}));
  }

  async modifyImageSharePermission(request: ModifyImageSharePermissionRequest): Promise<ModifyImageSharePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageSharePermissionWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRPCRequest("ModifyInstanceAttribute", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async preCreateEnsServiceWithOptions(request: PreCreateEnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<PreCreateEnsServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreCreateEnsServiceResponse>(await this.doRPCRequest("PreCreateEnsService", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new PreCreateEnsServiceResponse({}));
  }

  async preCreateEnsService(request: PreCreateEnsServiceRequest): Promise<PreCreateEnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preCreateEnsServiceWithOptions(request, runtime);
  }

  async pushApplicationDataWithOptions(request: PushApplicationDataRequest, runtime: $Util.RuntimeOptions): Promise<PushApplicationDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushApplicationDataResponse>(await this.doRPCRequest("PushApplicationData", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new PushApplicationDataResponse({}));
  }

  async pushApplicationData(request: PushApplicationDataRequest): Promise<PushApplicationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushApplicationDataWithOptions(request, runtime);
  }

  async rebootInstanceWithOptions(request: RebootInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebootInstanceResponse>(await this.doRPCRequest("RebootInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RebootInstanceResponse({}));
  }

  async rebootInstance(request: RebootInstanceRequest): Promise<RebootInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  async reInitDiskWithOptions(request: ReInitDiskRequest, runtime: $Util.RuntimeOptions): Promise<ReInitDiskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReInitDiskResponse>(await this.doRPCRequest("ReInitDisk", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ReInitDiskResponse({}));
  }

  async reInitDisk(request: ReInitDiskRequest): Promise<ReInitDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reInitDiskWithOptions(request, runtime);
  }

  async releaseEipAddressWithOptions(request: ReleaseEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseEipAddressResponse>(await this.doRPCRequest("ReleaseEipAddress", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseEipAddressResponse({}));
  }

  async releaseEipAddress(request: ReleaseEipAddressRequest): Promise<ReleaseEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEipAddressWithOptions(request, runtime);
  }

  async releasePostPaidInstanceWithOptions(request: ReleasePostPaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePostPaidInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleasePostPaidInstanceResponse>(await this.doRPCRequest("ReleasePostPaidInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ReleasePostPaidInstanceResponse({}));
  }

  async releasePostPaidInstance(request: ReleasePostPaidInstanceRequest): Promise<ReleasePostPaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePostPaidInstanceWithOptions(request, runtime);
  }

  async releasePrePaidInstanceWithOptions(request: ReleasePrePaidInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePrePaidInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleasePrePaidInstanceResponse>(await this.doRPCRequest("ReleasePrePaidInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new ReleasePrePaidInstanceResponse({}));
  }

  async releasePrePaidInstance(request: ReleasePrePaidInstanceRequest): Promise<ReleasePrePaidInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePrePaidInstanceWithOptions(request, runtime);
  }

  async removePublicIpsFromEpnInstanceWithOptions(request: RemovePublicIpsFromEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemovePublicIpsFromEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemovePublicIpsFromEpnInstanceResponse>(await this.doRPCRequest("RemovePublicIpsFromEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RemovePublicIpsFromEpnInstanceResponse({}));
  }

  async removePublicIpsFromEpnInstance(request: RemovePublicIpsFromEpnInstanceRequest): Promise<RemovePublicIpsFromEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePublicIpsFromEpnInstanceWithOptions(request, runtime);
  }

  async removeVSwitchesFromEpnInstanceWithOptions(request: RemoveVSwitchesFromEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveVSwitchesFromEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveVSwitchesFromEpnInstanceResponse>(await this.doRPCRequest("RemoveVSwitchesFromEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveVSwitchesFromEpnInstanceResponse({}));
  }

  async removeVSwitchesFromEpnInstance(request: RemoveVSwitchesFromEpnInstanceRequest): Promise<RemoveVSwitchesFromEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeVSwitchesFromEpnInstanceWithOptions(request, runtime);
  }

  async rescaleApplicationWithOptions(request: RescaleApplicationRequest, runtime: $Util.RuntimeOptions): Promise<RescaleApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RescaleApplicationResponse>(await this.doRPCRequest("RescaleApplication", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RescaleApplicationResponse({}));
  }

  async rescaleApplication(request: RescaleApplicationRequest): Promise<RescaleApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rescaleApplicationWithOptions(request, runtime);
  }

  async revokeSecurityGroupWithOptions(request: RevokeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeSecurityGroupResponse>(await this.doRPCRequest("RevokeSecurityGroup", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeSecurityGroupResponse({}));
  }

  async revokeSecurityGroup(request: RevokeSecurityGroupRequest): Promise<RevokeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupWithOptions(request, runtime);
  }

  async revokeSecurityGroupEgressWithOptions(request: RevokeSecurityGroupEgressRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSecurityGroupEgressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeSecurityGroupEgressResponse>(await this.doRPCRequest("RevokeSecurityGroupEgress", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeSecurityGroupEgressResponse({}));
  }

  async revokeSecurityGroupEgress(request: RevokeSecurityGroupEgressRequest): Promise<RevokeSecurityGroupEgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSecurityGroupEgressWithOptions(request, runtime);
  }

  async rollbackApplicationWithOptions(request: RollbackApplicationRequest, runtime: $Util.RuntimeOptions): Promise<RollbackApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackApplicationResponse>(await this.doRPCRequest("RollbackApplication", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackApplicationResponse({}));
  }

  async rollbackApplication(request: RollbackApplicationRequest): Promise<RollbackApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackApplicationWithOptions(request, runtime);
  }

  async runServiceScheduleWithOptions(request: RunServiceScheduleRequest, runtime: $Util.RuntimeOptions): Promise<RunServiceScheduleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunServiceScheduleResponse>(await this.doRPCRequest("RunServiceSchedule", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new RunServiceScheduleResponse({}));
  }

  async runServiceSchedule(request: RunServiceScheduleRequest): Promise<RunServiceScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runServiceScheduleWithOptions(request, runtime);
  }

  async schedulePodWithOptions(request: SchedulePodRequest, runtime: $Util.RuntimeOptions): Promise<SchedulePodResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SchedulePodResponse>(await this.doRPCRequest("SchedulePod", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new SchedulePodResponse({}));
  }

  async schedulePod(request: SchedulePodRequest): Promise<SchedulePodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.schedulePodWithOptions(request, runtime);
  }

  async startEpnInstanceWithOptions(request: StartEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartEpnInstanceResponse>(await this.doRPCRequest("StartEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new StartEpnInstanceResponse({}));
  }

  async startEpnInstance(request: StartEpnInstanceRequest): Promise<StartEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEpnInstanceWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartInstanceResponse>(await this.doRPCRequest("StartInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async stopEpnInstanceWithOptions(request: StopEpnInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopEpnInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopEpnInstanceResponse>(await this.doRPCRequest("StopEpnInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new StopEpnInstanceResponse({}));
  }

  async stopEpnInstance(request: StopEpnInstanceRequest): Promise<StopEpnInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEpnInstanceWithOptions(request, runtime);
  }

  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopInstanceResponse>(await this.doRPCRequest("StopInstance", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new StopInstanceResponse({}));
  }

  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async unassociateEipAddressWithOptions(request: UnassociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateEipAddressResponse>(await this.doRPCRequest("UnassociateEipAddress", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateEipAddressResponse({}));
  }

  async unassociateEipAddress(request: UnassociateEipAddressRequest): Promise<UnassociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateEipAddressWithOptions(request, runtime);
  }

  async upgradeApplicationWithOptions(request: UpgradeApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeApplicationResponse>(await this.doRPCRequest("UpgradeApplication", "2017-11-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeApplicationResponse({}));
  }

  async upgradeApplication(request: UpgradeApplicationRequest): Promise<UpgradeApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeApplicationWithOptions(request, runtime);
  }

}
