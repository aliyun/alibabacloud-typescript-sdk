// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateRouterInterfaceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateRouterInterfaceResponseBody extends $tea.Model {
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

export class ActivateRouterInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActivateRouterInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActivateRouterInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActiveFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBgpNetworkRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dstCidrBlock?: string;
  vpcId?: string;
  routerId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dstCidrBlock: 'DstCidrBlock',
      vpcId: 'VpcId',
      routerId: 'RouterId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dstCidrBlock: 'string',
      vpcId: 'string',
      routerId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBgpNetworkResponseBody extends $tea.Model {
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

export class AddBgpNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddBgpNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddBgpNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCommonBandwidthPackageIpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  ipInstanceId?: string;
  ipType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      ipInstanceId: 'IpInstanceId',
      ipType: 'IpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      ipInstanceId: 'string',
      ipType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCommonBandwidthPackageIpResponseBody extends $tea.Model {
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

export class AddCommonBandwidthPackageIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCommonBandwidthPackageIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCommonBandwidthPackageIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCommonBandwidthPackageIpsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  ipType?: string;
  ipInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      ipType: 'IpType',
      ipInstanceIds: 'IpInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      ipType: 'string',
      ipInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCommonBandwidthPackageIpsResponseBody extends $tea.Model {
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

export class AddCommonBandwidthPackageIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCommonBandwidthPackageIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCommonBandwidthPackageIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGlobalAccelerationInstanceIpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  ipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipInstanceId: 'IpInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      ipInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGlobalAccelerationInstanceIpResponseBody extends $tea.Model {
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

export class AddGlobalAccelerationInstanceIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGlobalAccelerationInstanceIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGlobalAccelerationInstanceIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIPv6TranslatorAclListEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  aclEntryIp?: string;
  aclEntryComment?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntryIp: 'AclEntryIp',
      aclEntryComment: 'AclEntryComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      aclEntryIp: 'string',
      aclEntryComment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIPv6TranslatorAclListEntryResponseBody extends $tea.Model {
  requestId?: string;
  aclEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclEntryId: 'AclEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIPv6TranslatorAclListEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddIPv6TranslatorAclListEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddIPv6TranslatorAclListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bandwidth?: string;
  period?: number;
  ISP?: string;
  activityId?: number;
  netmode?: string;
  autoPay?: boolean;
  pricingCycle?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  resourceGroupId?: string;
  ownerAccount?: string;
  clientToken?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bandwidth: 'Bandwidth',
      period: 'Period',
      ISP: 'ISP',
      activityId: 'ActivityId',
      netmode: 'Netmode',
      autoPay: 'AutoPay',
      pricingCycle: 'PricingCycle',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      resourceGroupId: 'ResourceGroupId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bandwidth: 'string',
      period: 'number',
      ISP: 'string',
      activityId: 'number',
      netmode: 'string',
      autoPay: 'boolean',
      pricingCycle: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      resourceGroupId: 'string',
      ownerAccount: 'string',
      clientToken: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupId?: string;
  allocationId?: string;
  eipAddress?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      allocationId: 'AllocationId',
      eipAddress: 'EipAddress',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
      allocationId: 'string',
      eipAddress: 'string',
      orderId: 'number',
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

export class AllocateEipAddressProRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ipAddress?: string;
  instanceId?: string;
  bandwidth?: string;
  period?: number;
  ISP?: string;
  netmode?: string;
  autoPay?: boolean;
  pricingCycle?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  resourceGroupId?: string;
  ownerAccount?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ipAddress: 'IpAddress',
      instanceId: 'InstanceId',
      bandwidth: 'Bandwidth',
      period: 'Period',
      ISP: 'ISP',
      netmode: 'Netmode',
      autoPay: 'AutoPay',
      pricingCycle: 'PricingCycle',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      resourceGroupId: 'ResourceGroupId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ipAddress: 'string',
      instanceId: 'string',
      bandwidth: 'string',
      period: 'number',
      ISP: 'string',
      netmode: 'string',
      autoPay: 'boolean',
      pricingCycle: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      resourceGroupId: 'string',
      ownerAccount: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressProResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupId?: string;
  allocationId?: string;
  eipAddress?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      allocationId: 'AllocationId',
      eipAddress: 'EipAddress',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
      allocationId: 'string',
      eipAddress: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipAddressProResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateEipAddressProResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateEipAddressProResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipSegmentAddressRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  bandwidth?: string;
  regionId?: string;
  eipMask?: string;
  netmode?: string;
  internetChargeType?: string;
  resourceGroupId?: string;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      bandwidth: 'Bandwidth',
      regionId: 'RegionId',
      eipMask: 'EipMask',
      netmode: 'Netmode',
      internetChargeType: 'InternetChargeType',
      resourceGroupId: 'ResourceGroupId',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      bandwidth: 'string',
      regionId: 'string',
      eipMask: 'string',
      netmode: 'string',
      internetChargeType: 'string',
      resourceGroupId: 'string',
      isp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipSegmentAddressResponseBody extends $tea.Model {
  eipSegmentInstanceId?: string;
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      eipSegmentInstanceId: 'EipSegmentInstanceId',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegmentInstanceId: 'string',
      requestId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateEipSegmentAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateEipSegmentAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateEipSegmentAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateIpv6InternetBandwidthRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  ipv6AddressId?: string;
  internetChargeType?: string;
  bandwidth?: number;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      ipv6AddressId: 'Ipv6AddressId',
      internetChargeType: 'InternetChargeType',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      ipv6AddressId: 'string',
      internetChargeType: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateIpv6InternetBandwidthResponseBody extends $tea.Model {
  requestId?: string;
  internetBandwidthId?: string;
  ipv6AddressId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      internetBandwidthId: 'InternetBandwidthId',
      ipv6AddressId: 'Ipv6AddressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      internetBandwidthId: 'string',
      ipv6AddressId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateIpv6InternetBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateIpv6InternetBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateIpv6InternetBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateEipAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  allocationId?: string;
  instanceId?: string;
  ownerAccount?: string;
  instanceType?: string;
  instanceRegionId?: string;
  privateIpAddress?: string;
  mode?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      instanceType: 'InstanceType',
      instanceRegionId: 'InstanceRegionId',
      privateIpAddress: 'PrivateIpAddress',
      mode: 'Mode',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      allocationId: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      instanceType: 'string',
      instanceRegionId: 'string',
      privateIpAddress: 'string',
      mode: 'string',
      clientToken: 'string',
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

export class AssociateGlobalAccelerationInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  backendServerId?: string;
  backendServerRegionId?: string;
  ownerAccount?: string;
  backendServerType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      backendServerId: 'BackendServerId',
      backendServerRegionId: 'BackendServerRegionId',
      ownerAccount: 'OwnerAccount',
      backendServerType: 'BackendServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      backendServerId: 'string',
      backendServerRegionId: 'string',
      ownerAccount: 'string',
      backendServerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateGlobalAccelerationInstanceResponseBody extends $tea.Model {
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

export class AssociateGlobalAccelerationInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateGlobalAccelerationInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateGlobalAccelerationInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateHaVipRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  regionId?: string;
  haVipId?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateHaVipResponseBody extends $tea.Model {
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

export class AssociateHaVipResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateHaVipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateHaVipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkAclRequest extends $tea.Model {
  networkAclId?: string;
  regionId?: string;
  resource?: AssociateNetworkAclRequestResource[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      regionId: 'string',
      resource: { 'type': 'array', 'itemType': AssociateNetworkAclRequestResource },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkAclResponseBody extends $tea.Model {
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

export class AssociateNetworkAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateNetworkAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateNetworkAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociatePhysicalConnectionToVirtualBorderRouterRequest extends $tea.Model {
  regionId?: string;
  vbrId?: string;
  physicalConnectionId?: string;
  vlanId?: string;
  circuitCode?: string;
  localGatewayIp?: string;
  peerGatewayIp?: string;
  peeringSubnetMask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  localIpv6GatewayIp?: string;
  peerIpv6GatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  enableIpv6?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      physicalConnectionId: 'PhysicalConnectionId',
      vlanId: 'VlanId',
      circuitCode: 'CircuitCode',
      localGatewayIp: 'LocalGatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      enableIpv6: 'EnableIpv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      physicalConnectionId: 'string',
      vlanId: 'string',
      circuitCode: 'string',
      localGatewayIp: 'string',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      localIpv6GatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      enableIpv6: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociatePhysicalConnectionToVirtualBorderRouterResponseBody extends $tea.Model {
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

export class AssociatePhysicalConnectionToVirtualBorderRouterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociatePhysicalConnectionToVirtualBorderRouterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociatePhysicalConnectionToVirtualBorderRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRouteTableRequest extends $tea.Model {
  regionId?: string;
  routeTableId?: string;
  vSwitchId?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      vSwitchId: 'VSwitchId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeTableId: 'string',
      vSwitchId: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRouteTableResponseBody extends $tea.Model {
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

export class AssociateRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpcCidrBlockRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  secondaryCidrBlock?: string;
  IPv6CidrBlock?: string;
  IPv6CidrType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      IPv6CidrBlock: 'IPv6CidrBlock',
      IPv6CidrType: 'IPv6CidrType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      secondaryCidrBlock: 'string',
      IPv6CidrBlock: 'string',
      IPv6CidrType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpcCidrBlockResponseBody extends $tea.Model {
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

export class AssociateVpcCidrBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateVpcCidrBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateVpcCidrBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpnGatewayWithCertificateRequest extends $tea.Model {
  regionId?: string;
  vpnGatewayId?: string;
  certificateType?: string;
  certificateId?: string;
  callerBid?: string;
  clientToken?: string;
  dryRun?: boolean;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      certificateType: 'CertificateType',
      certificateId: 'CertificateId',
      callerBid: 'callerBid',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpnGatewayId: 'string',
      certificateType: 'string',
      certificateId: 'string',
      callerBid: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateVpnGatewayWithCertificateResponseBody extends $tea.Model {
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

export class AssociateVpnGatewayWithCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateVpnGatewayWithCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateVpnGatewayWithCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDhcpOptionsSetToVpcRequest extends $tea.Model {
  regionId?: string;
  dhcpOptionsSetId?: string;
  vpcId?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      vpcId: 'VpcId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dhcpOptionsSetId: 'string',
      vpcId: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDhcpOptionsSetToVpcResponseBody extends $tea.Model {
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

export class AttachDhcpOptionsSetToVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachDhcpOptionsSetToVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachDhcpOptionsSetToVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCommonBandwidthPackageIpBandwidthRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  eipId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      eipId: 'EipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      eipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCommonBandwidthPackageIpBandwidthResponseBody extends $tea.Model {
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

export class CancelCommonBandwidthPackageIpBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelCommonBandwidthPackageIpBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelCommonBandwidthPackageIpBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelExpressCloudConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  eccId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      eccId: 'EccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      eccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelExpressCloudConnectionResponseBody extends $tea.Model {
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

export class CancelExpressCloudConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelExpressCloudConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelExpressCloudConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPhysicalConnectionRequest extends $tea.Model {
  regionId?: string;
  physicalConnectionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPhysicalConnectionResponseBody extends $tea.Model {
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

export class CancelPhysicalConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelPhysicalConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelPhysicalConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPhysicalConnectionRequest extends $tea.Model {
  regionId?: string;
  physicalConnectionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmPhysicalConnectionResponseBody extends $tea.Model {
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

export class ConfirmPhysicalConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmPhysicalConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmPhysicalConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectRouterInterfaceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectRouterInterfaceResponseBody extends $tea.Model {
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

export class ConnectRouterInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConnectRouterInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConnectRouterInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertBandwidthPackageRequest extends $tea.Model {
  bandwidthPackageId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertBandwidthPackageResponseBody extends $tea.Model {
  requestId?: string;
  convertInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      convertInstanceId: 'ConvertInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      convertInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyNetworkAclEntriesRequest extends $tea.Model {
  regionId?: string;
  networkAclId?: string;
  sourceNetworkAclId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkAclId: 'NetworkAclId',
      sourceNetworkAclId: 'SourceNetworkAclId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkAclId: 'string',
      sourceNetworkAclId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyNetworkAclEntriesResponseBody extends $tea.Model {
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

export class CopyNetworkAclEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyNetworkAclEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyNetworkAclEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBgpGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routerId?: string;
  name?: string;
  description?: string;
  localAsn?: number;
  peerAsn?: number;
  authKey?: string;
  isFakeAsn?: boolean;
  clientToken?: string;
  ownerAccount?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routerId: 'RouterId',
      name: 'Name',
      description: 'Description',
      localAsn: 'LocalAsn',
      peerAsn: 'PeerAsn',
      authKey: 'AuthKey',
      isFakeAsn: 'IsFakeAsn',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routerId: 'string',
      name: 'string',
      description: 'string',
      localAsn: 'number',
      peerAsn: 'number',
      authKey: 'string',
      isFakeAsn: 'boolean',
      clientToken: 'string',
      ownerAccount: 'string',
      ipVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBgpGroupResponseBody extends $tea.Model {
  requestId?: string;
  bgpGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bgpGroupId: 'BgpGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bgpGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBgpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBgpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBgpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBgpPeerRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bgpGroupId?: string;
  peerIpAddress?: string;
  enableBfd?: boolean;
  clientToken?: string;
  ownerAccount?: string;
  ipVersion?: string;
  bfdMultiHop?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bgpGroupId: 'BgpGroupId',
      peerIpAddress: 'PeerIpAddress',
      enableBfd: 'EnableBfd',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ipVersion: 'IpVersion',
      bfdMultiHop: 'BfdMultiHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bgpGroupId: 'string',
      peerIpAddress: 'string',
      enableBfd: 'boolean',
      clientToken: 'string',
      ownerAccount: 'string',
      ipVersion: 'string',
      bfdMultiHop: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBgpPeerResponseBody extends $tea.Model {
  bgpPeerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bgpPeerId: 'BgpPeerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBgpPeerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBgpPeerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBgpPeerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonBandwidthPackageRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zone?: string;
  ISP?: string;
  name?: string;
  description?: string;
  clientToken?: string;
  resourceGroupId?: string;
  bandwidth?: number;
  ratio?: number;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zone: 'Zone',
      ISP: 'ISP',
      name: 'Name',
      description: 'Description',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
      bandwidth: 'Bandwidth',
      ratio: 'Ratio',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      zone: 'string',
      ISP: 'string',
      name: 'string',
      description: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
      bandwidth: 'number',
      ratio: 'number',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonBandwidthPackageResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupId?: string;
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommonBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCommonBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCommonBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomerGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  ipAddress?: string;
  name?: string;
  description?: string;
  asn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      ipAddress: 'IpAddress',
      name: 'Name',
      description: 'Description',
      asn: 'Asn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      ipAddress: 'string',
      name: 'string',
      description: 'string',
      asn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomerGatewayResponseBody extends $tea.Model {
  description?: string;
  requestId?: string;
  customerGatewayId?: string;
  createTime?: number;
  ipAddress?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      customerGatewayId: 'CustomerGatewayId',
      createTime: 'CreateTime',
      ipAddress: 'IpAddress',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      customerGatewayId: 'string',
      createTime: 'number',
      ipAddress: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomerGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomerGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomerGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDhcpOptionsSetRequest extends $tea.Model {
  regionId?: string;
  domainNameServers?: string;
  dhcpOptionsSetName?: string;
  dhcpOptionsSetDescription?: string;
  domainName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      domainNameServers: 'DomainNameServers',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      domainNameServers: 'string',
      dhcpOptionsSetName: 'string',
      dhcpOptionsSetDescription: 'string',
      domainName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDhcpOptionsSetResponseBody extends $tea.Model {
  dhcpOptionsSetId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dhcpOptionsSetId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDhcpOptionsSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDhcpOptionsSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDhcpOptionsSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressCloudConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  description?: string;
  peerCity?: string;
  peerLocation?: string;
  idcSP?: string;
  portType?: string;
  bandwidth?: number;
  contactTel?: string;
  contactMail?: string;
  IDCardNo?: string;
  redundantEccId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      peerCity: 'PeerCity',
      peerLocation: 'PeerLocation',
      idcSP: 'IdcSP',
      portType: 'PortType',
      bandwidth: 'Bandwidth',
      contactTel: 'ContactTel',
      contactMail: 'ContactMail',
      IDCardNo: 'IDCardNo',
      redundantEccId: 'RedundantEccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      description: 'string',
      peerCity: 'string',
      peerLocation: 'string',
      idcSP: 'string',
      portType: 'string',
      bandwidth: 'number',
      contactTel: 'string',
      contactMail: 'string',
      IDCardNo: 'string',
      redundantEccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressCloudConnectionResponseBody extends $tea.Model {
  requestId?: string;
  eccId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eccId: 'EccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExpressCloudConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExpressCloudConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExpressCloudConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogName?: string;
  description?: string;
  resourceType?: string;
  resourceId?: string;
  trafficType?: string;
  projectName?: string;
  logStoreName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogName: 'FlowLogName',
      description: 'Description',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      trafficType: 'TrafficType',
      projectName: 'ProjectName',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogName: 'string',
      description: 'string',
      resourceType: 'string',
      resourceId: 'string',
      trafficType: 'string',
      projectName: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  flowLogId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowLogId: 'FlowLogId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowLogId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  forwardTableId?: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  forwardEntryName?: string;
  clientToken?: string;
  portBreak?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      forwardTableId: 'ForwardTableId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      forwardEntryName: 'ForwardEntryName',
      clientToken: 'ClientToken',
      portBreak: 'PortBreak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      forwardTableId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      forwardEntryName: 'string',
      clientToken: 'string',
      portBreak: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryResponseBody extends $tea.Model {
  requestId?: string;
  forwardEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      forwardEntryId: 'ForwardEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      forwardEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateForwardEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateForwardEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalAccelerationInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  serviceLocation?: string;
  bandwidth?: string;
  bandwidthType?: string;
  name?: string;
  description?: string;
  ownerAccount?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      serviceLocation: 'ServiceLocation',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      name: 'Name',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      serviceLocation: 'string',
      bandwidth: 'string',
      bandwidthType: 'string',
      name: 'string',
      description: 'string',
      ownerAccount: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalAccelerationInstanceResponseBody extends $tea.Model {
  requestId?: string;
  ipAddress?: string;
  globalAccelerationInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipAddress: 'IpAddress',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipAddress: 'string',
      globalAccelerationInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalAccelerationInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGlobalAccelerationInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGlobalAccelerationInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHaVipRequest extends $tea.Model {
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  regionId?: string;
  vSwitchId?: string;
  ipAddress?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      ipAddress: 'IpAddress',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      ipAddress: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHaVipResponseBody extends $tea.Model {
  requestId?: string;
  ipAddress?: string;
  haVipId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipAddress: 'IpAddress',
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipAddress: 'string',
      haVipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHaVipResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHaVipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHaVipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpsecServerRequest extends $tea.Model {
  regionId?: string;
  vpnGatewayId?: string;
  localSubnet?: string;
  clientIpPool?: string;
  ipSecServerName?: string;
  effectImmediately?: boolean;
  ikeConfig?: string;
  ipsecConfig?: string;
  pskEnabled?: boolean;
  psk?: string;
  multiFactorAuthEnabled?: boolean;
  IDaaSInstanceId?: string;
  clientToken?: string;
  callerBid?: string;
  dryRun?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      localSubnet: 'LocalSubnet',
      clientIpPool: 'ClientIpPool',
      ipSecServerName: 'IpSecServerName',
      effectImmediately: 'EffectImmediately',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      pskEnabled: 'PskEnabled',
      psk: 'Psk',
      multiFactorAuthEnabled: 'MultiFactorAuthEnabled',
      IDaaSInstanceId: 'IDaaSInstanceId',
      clientToken: 'ClientToken',
      callerBid: 'callerBid',
      dryRun: 'DryRun',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpnGatewayId: 'string',
      localSubnet: 'string',
      clientIpPool: 'string',
      ipSecServerName: 'string',
      effectImmediately: 'boolean',
      ikeConfig: 'string',
      ipsecConfig: 'string',
      pskEnabled: 'boolean',
      psk: 'string',
      multiFactorAuthEnabled: 'boolean',
      IDaaSInstanceId: 'string',
      clientToken: 'string',
      callerBid: 'string',
      dryRun: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpsecServerResponseBody extends $tea.Model {
  requestId?: string;
  vpnGatewayId?: string;
  ipsecServerId?: string;
  creationTime?: string;
  regionId?: string;
  ipsecServerName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpnGatewayId: 'VpnGatewayId',
      ipsecServerId: 'IpsecServerId',
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      ipsecServerName: 'IpsecServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpnGatewayId: 'string',
      ipsecServerId: 'string',
      creationTime: 'string',
      regionId: 'string',
      ipsecServerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpsecServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpsecServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpsecServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpv6EgressOnlyRuleRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  instanceId?: string;
  instanceType?: string;
  name?: string;
  description?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      name: 'Name',
      description: 'Description',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      name: 'string',
      description: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpv6EgressOnlyRuleResponseBody extends $tea.Model {
  ipv6EgressRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6EgressRuleId: 'Ipv6EgressRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6EgressRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpv6EgressOnlyRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpv6EgressOnlyRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpv6EgressOnlyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpv6GatewayRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  spec?: string;
  name?: string;
  description?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      spec: 'Spec',
      name: 'Name',
      description: 'Description',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      spec: 'string',
      name: 'string',
      description: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpv6GatewayResponseBody extends $tea.Model {
  requestId?: string;
  ipv6GatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipv6GatewayId: 'Ipv6GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipv6GatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpv6GatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpv6GatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpv6GatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  name?: string;
  spec?: string;
  payType?: string;
  pricingCycle?: string;
  duration?: number;
  autoPay?: boolean;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      name: 'Name',
      spec: 'Spec',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      name: 'string',
      spec: 'string',
      payType: 'string',
      pricingCycle: 'string',
      duration: 'number',
      autoPay: 'boolean',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorResponseBody extends $tea.Model {
  requestId?: string;
  ipv6TranslatorId?: string;
  spec?: string;
  orderId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      spec: 'Spec',
      orderId: 'OrderId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipv6TranslatorId: 'string',
      spec: 'string',
      orderId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIPv6TranslatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIPv6TranslatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorAclListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorAclListResponseBody extends $tea.Model {
  requestId?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorAclListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIPv6TranslatorAclListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIPv6TranslatorAclListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ipv6TranslatorId?: string;
  entryName?: string;
  entryDescription?: string;
  allocateIpv6Port?: number;
  backendIpv4Addr?: string;
  backendIpv4Port?: number;
  transProtocol?: string;
  entryBandwidth?: number;
  aclStatus?: string;
  aclType?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      entryName: 'EntryName',
      entryDescription: 'EntryDescription',
      allocateIpv6Port: 'AllocateIpv6Port',
      backendIpv4Addr: 'BackendIpv4Addr',
      backendIpv4Port: 'BackendIpv4Port',
      transProtocol: 'TransProtocol',
      entryBandwidth: 'EntryBandwidth',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ipv6TranslatorId: 'string',
      entryName: 'string',
      entryDescription: 'string',
      allocateIpv6Port: 'number',
      backendIpv4Addr: 'string',
      backendIpv4Port: 'number',
      transProtocol: 'string',
      entryBandwidth: 'number',
      aclStatus: 'string',
      aclType: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorEntryResponseBody extends $tea.Model {
  requestId?: string;
  ipv6TranslatorEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipv6TranslatorEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIPv6TranslatorEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIPv6TranslatorEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIPv6TranslatorEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  vpcId?: string;
  name?: string;
  description?: string;
  clientToken?: string;
  spec?: string;
  instanceChargeType?: string;
  pricingCycle?: string;
  duration?: string;
  autoPay?: boolean;
  vSwitchId?: string;
  natType?: string;
  internetChargeType?: string;
  bandwidthPackage?: CreateNatGatewayRequestBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      name: 'Name',
      description: 'Description',
      clientToken: 'ClientToken',
      spec: 'Spec',
      instanceChargeType: 'InstanceChargeType',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      autoPay: 'AutoPay',
      vSwitchId: 'VSwitchId',
      natType: 'NatType',
      internetChargeType: 'InternetChargeType',
      bandwidthPackage: 'BandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      vpcId: 'string',
      name: 'string',
      description: 'string',
      clientToken: 'string',
      spec: 'string',
      instanceChargeType: 'string',
      pricingCycle: 'string',
      duration: 'string',
      autoPay: 'boolean',
      vSwitchId: 'string',
      natType: 'string',
      internetChargeType: 'string',
      bandwidthPackage: { 'type': 'array', 'itemType': CreateNatGatewayRequestBandwidthPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBody extends $tea.Model {
  requestId?: string;
  snatTableIds?: CreateNatGatewayResponseBodySnatTableIds;
  forwardTableIds?: CreateNatGatewayResponseBodyForwardTableIds;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snatTableIds: 'SnatTableIds',
      forwardTableIds: 'ForwardTableIds',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snatTableIds: CreateNatGatewayResponseBodySnatTableIds,
      forwardTableIds: CreateNatGatewayResponseBodyForwardTableIds,
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNatGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNatGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclRequest extends $tea.Model {
  vpcId?: string;
  networkAclName?: string;
  description?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      networkAclName: 'NetworkAclName',
      description: 'Description',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      networkAclName: 'string',
      description: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBody extends $tea.Model {
  networkAclId?: string;
  requestId?: string;
  networkAclAttribute?: CreateNetworkAclResponseBodyNetworkAclAttribute;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      requestId: 'RequestId',
      networkAclAttribute: 'NetworkAclAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      requestId: 'string',
      networkAclAttribute: CreateNetworkAclResponseBodyNetworkAclAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNetworkAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNetworkAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalConnectionOccupancyOrderRequest extends $tea.Model {
  regionId?: string;
  physicalConnectionId?: string;
  period?: number;
  instanceChargeType?: string;
  autoPay?: boolean;
  pricingCycle?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      period: 'Period',
      instanceChargeType: 'InstanceChargeType',
      autoPay: 'AutoPay',
      pricingCycle: 'PricingCycle',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      period: 'number',
      instanceChargeType: 'string',
      autoPay: 'boolean',
      pricingCycle: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalConnectionOccupancyOrderResponseBody extends $tea.Model {
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

export class CreatePhysicalConnectionOccupancyOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePhysicalConnectionOccupancyOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePhysicalConnectionOccupancyOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routeTableId?: string;
  destinationCidrBlock?: string;
  nextHopId?: string;
  privateIpAddress?: string;
  clientToken?: string;
  routeEntryName?: string;
  description?: string;
  nextHopType?: string;
  ownerAccount?: string;
  nextHopList?: CreateRouteEntryRequestNextHopList[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      privateIpAddress: 'PrivateIpAddress',
      clientToken: 'ClientToken',
      routeEntryName: 'RouteEntryName',
      description: 'Description',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      nextHopList: 'NextHopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routeTableId: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      privateIpAddress: 'string',
      clientToken: 'string',
      routeEntryName: 'string',
      description: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      nextHopList: { 'type': 'array', 'itemType': CreateRouteEntryRequestNextHopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntryResponseBody extends $tea.Model {
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

export class CreateRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteTableRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  routeTableName?: string;
  description?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      routeTableName: 'RouteTableName',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      routeTableName: 'string',
      description: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteTableResponseBody extends $tea.Model {
  routeTableId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnatEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  snatTableId?: string;
  sourceVSwitchId?: string;
  sourceCIDR?: string;
  snatIp?: string;
  snatEntryName?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      snatTableId: 'SnatTableId',
      sourceVSwitchId: 'SourceVSwitchId',
      sourceCIDR: 'SourceCIDR',
      snatIp: 'SnatIp',
      snatEntryName: 'SnatEntryName',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      snatTableId: 'string',
      sourceVSwitchId: 'string',
      sourceCIDR: 'string',
      snatIp: 'string',
      snatEntryName: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnatEntryResponseBody extends $tea.Model {
  requestId?: string;
  snatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snatEntryId: 'SnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snatEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSslVpnClientCertRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  sslVpnServerId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      sslVpnServerId: 'SslVpnServerId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      sslVpnServerId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSslVpnClientCertResponseBody extends $tea.Model {
  requestId?: string;
  sslVpnClientCertId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sslVpnClientCertId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSslVpnClientCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSslVpnClientCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSslVpnClientCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSslVpnServerRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  vpnGatewayId?: string;
  name?: string;
  clientIpPool?: string;
  localSubnet?: string;
  proto?: string;
  cipher?: string;
  port?: number;
  compress?: boolean;
  enableMultiFactorAuth?: boolean;
  IDaaSInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      name: 'Name',
      clientIpPool: 'ClientIpPool',
      localSubnet: 'LocalSubnet',
      proto: 'Proto',
      cipher: 'Cipher',
      port: 'Port',
      compress: 'Compress',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      IDaaSInstanceId: 'IDaaSInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      vpnGatewayId: 'string',
      name: 'string',
      clientIpPool: 'string',
      localSubnet: 'string',
      proto: 'string',
      cipher: 'string',
      port: 'number',
      compress: 'boolean',
      enableMultiFactorAuth: 'boolean',
      IDaaSInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSslVpnServerResponseBody extends $tea.Model {
  requestId?: string;
  sslVpnServerId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sslVpnServerId: 'SslVpnServerId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sslVpnServerId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSslVpnServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSslVpnServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSslVpnServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  cidrBlock?: string;
  ipv6CidrBlock?: string;
  enableIpv6?: boolean;
  vpcName?: string;
  description?: string;
  resourceGroupId?: string;
  dryRun?: boolean;
  userCidr?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      cidrBlock: 'CidrBlock',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      enableIpv6: 'EnableIpv6',
      vpcName: 'VpcName',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      dryRun: 'DryRun',
      userCidr: 'UserCidr',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      cidrBlock: 'string',
      ipv6CidrBlock: 'string',
      enableIpv6: 'boolean',
      vpcName: 'string',
      description: 'string',
      resourceGroupId: 'string',
      dryRun: 'boolean',
      userCidr: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcResponseBody extends $tea.Model {
  VRouterId?: string;
  routeTableId?: string;
  vpcId?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      VRouterId: 'VRouterId',
      routeTableId: 'RouteTableId',
      vpcId: 'VpcId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouterId: 'string',
      routeTableId: 'string',
      vpcId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  customerGatewayId?: string;
  vpnGatewayId?: string;
  name?: string;
  localSubnet?: string;
  remoteSubnet?: string;
  effectImmediately?: boolean;
  ikeConfig?: string;
  ipsecConfig?: string;
  healthCheckConfig?: string;
  autoConfigRoute?: boolean;
  enableDpd?: boolean;
  enableNatTraversal?: boolean;
  bgpConfig?: string;
  remoteCaCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
      vpnGatewayId: 'VpnGatewayId',
      name: 'Name',
      localSubnet: 'LocalSubnet',
      remoteSubnet: 'RemoteSubnet',
      effectImmediately: 'EffectImmediately',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      healthCheckConfig: 'HealthCheckConfig',
      autoConfigRoute: 'AutoConfigRoute',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      bgpConfig: 'BgpConfig',
      remoteCaCertificate: 'RemoteCaCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      customerGatewayId: 'string',
      vpnGatewayId: 'string',
      name: 'string',
      localSubnet: 'string',
      remoteSubnet: 'string',
      effectImmediately: 'boolean',
      ikeConfig: 'string',
      ipsecConfig: 'string',
      healthCheckConfig: 'string',
      autoConfigRoute: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      bgpConfig: 'string',
      remoteCaCertificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnConnectionResponseBody extends $tea.Model {
  requestId?: string;
  createTime?: number;
  vpnConnectionId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      createTime: 'CreateTime',
      vpnConnectionId: 'VpnConnectionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      createTime: 'number',
      vpnConnectionId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpnConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpnConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  vpcId?: string;
  instanceChargeType?: string;
  period?: number;
  autoPay?: boolean;
  bandwidth?: number;
  enableIpsec?: boolean;
  enableSsl?: boolean;
  sslConnections?: number;
  vSwitchId?: string;
  vpnType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      vpcId: 'VpcId',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      enableIpsec: 'EnableIpsec',
      enableSsl: 'EnableSsl',
      sslConnections: 'SslConnections',
      vSwitchId: 'VSwitchId',
      vpnType: 'VpnType',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      vpcId: 'string',
      instanceChargeType: 'string',
      period: 'number',
      autoPay: 'boolean',
      bandwidth: 'number',
      enableIpsec: 'boolean',
      enableSsl: 'boolean',
      sslConnections: 'number',
      vSwitchId: 'string',
      vpnType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnGatewayResponseBody extends $tea.Model {
  requestId?: string;
  vpnGatewayId?: string;
  orderId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpnGatewayId: 'VpnGatewayId',
      orderId: 'OrderId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpnGatewayId: 'string',
      orderId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpnGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpnGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnPbrRouteEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeSource?: string;
  routeDest?: string;
  nextHop?: string;
  weight?: number;
  publishVpc?: boolean;
  description?: string;
  overlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeSource: 'RouteSource',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      weight: 'Weight',
      publishVpc: 'PublishVpc',
      description: 'Description',
      overlayMode: 'OverlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeSource: 'string',
      routeDest: 'string',
      nextHop: 'string',
      weight: 'number',
      publishVpc: 'boolean',
      description: 'string',
      overlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnPbrRouteEntryResponseBody extends $tea.Model {
  routeDest?: string;
  description?: string;
  vpnInstanceId?: string;
  requestId?: string;
  overlayMode?: string;
  nextHop?: string;
  state?: string;
  createTime?: number;
  routeSource?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      routeDest: 'RouteDest',
      description: 'Description',
      vpnInstanceId: 'VpnInstanceId',
      requestId: 'RequestId',
      overlayMode: 'OverlayMode',
      nextHop: 'NextHop',
      state: 'State',
      createTime: 'CreateTime',
      routeSource: 'RouteSource',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeDest: 'string',
      description: 'string',
      vpnInstanceId: 'string',
      requestId: 'string',
      overlayMode: 'string',
      nextHop: 'string',
      state: 'string',
      createTime: 'number',
      routeSource: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnPbrRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpnPbrRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpnPbrRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnRouteEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeDest?: string;
  nextHop?: string;
  weight?: number;
  publishVpc?: boolean;
  description?: string;
  overlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      weight: 'Weight',
      publishVpc: 'PublishVpc',
      description: 'Description',
      overlayMode: 'OverlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeDest: 'string',
      nextHop: 'string',
      weight: 'number',
      publishVpc: 'boolean',
      description: 'string',
      overlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnRouteEntryResponseBody extends $tea.Model {
  routeDest?: string;
  description?: string;
  vpnInstanceId?: string;
  requestId?: string;
  overlayMode?: string;
  nextHop?: string;
  state?: string;
  createTime?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      routeDest: 'RouteDest',
      description: 'Description',
      vpnInstanceId: 'VpnInstanceId',
      requestId: 'RequestId',
      overlayMode: 'OverlayMode',
      nextHop: 'NextHop',
      state: 'State',
      createTime: 'CreateTime',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeDest: 'string',
      description: 'string',
      vpnInstanceId: 'string',
      requestId: 'string',
      overlayMode: 'string',
      nextHop: 'string',
      state: 'string',
      createTime: 'number',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpnRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpnRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVSwitchRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  regionId?: string;
  cidrBlock?: string;
  ipv6CidrBlock?: number;
  vpcId?: string;
  vSwitchName?: string;
  description?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      cidrBlock: 'CidrBlock',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      vpcId: 'VpcId',
      vSwitchName: 'VSwitchName',
      description: 'Description',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
      regionId: 'string',
      cidrBlock: 'string',
      ipv6CidrBlock: 'number',
      vpcId: 'string',
      vSwitchName: 'string',
      description: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
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

export class DeactivateRouterInterfaceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateRouterInterfaceResponseBody extends $tea.Model {
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

export class DeactivateRouterInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeactivateRouterInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactivateRouterInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeactiveFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactiveFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBgpGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bgpGroupId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bgpGroupId: 'BgpGroupId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bgpGroupId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBgpGroupResponseBody extends $tea.Model {
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

export class DeleteBgpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBgpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBgpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBgpNetworkRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dstCidrBlock?: string;
  routerId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dstCidrBlock: 'DstCidrBlock',
      routerId: 'RouterId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dstCidrBlock: 'string',
      routerId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBgpNetworkResponseBody extends $tea.Model {
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

export class DeleteBgpNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBgpNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBgpNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBgpPeerRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bgpPeerId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bgpPeerId: 'BgpPeerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bgpPeerId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBgpPeerResponseBody extends $tea.Model {
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

export class DeleteBgpPeerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBgpPeerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBgpPeerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommonBandwidthPackageRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  force?: string;
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      force: 'Force',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      force: 'string',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommonBandwidthPackageResponseBody extends $tea.Model {
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

export class DeleteCommonBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCommonBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCommonBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomerGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  customerGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      customerGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomerGatewayResponseBody extends $tea.Model {
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

export class DeleteCustomerGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomerGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomerGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDhcpOptionsSetRequest extends $tea.Model {
  regionId?: string;
  dhcpOptionsSetId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dhcpOptionsSetId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDhcpOptionsSetResponseBody extends $tea.Model {
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

export class DeleteDhcpOptionsSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDhcpOptionsSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDhcpOptionsSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressCloudConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  eccId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      eccId: 'EccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      eccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressCloudConnectionResponseBody extends $tea.Model {
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

export class DeleteExpressCloudConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExpressCloudConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExpressCloudConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressConnectRequest extends $tea.Model {
  regionId?: string;
  routerInterfaceId?: string;
  force?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      force: 'Force',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
      force: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExpressConnectResponseBody extends $tea.Model {
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

export class DeleteExpressConnectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExpressConnectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExpressConnectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  forwardTableId?: string;
  forwardEntryId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      forwardTableId: 'string',
      forwardEntryId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardEntryResponseBody extends $tea.Model {
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

export class DeleteForwardEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteForwardEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteForwardEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalAccelerationInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalAccelerationInstanceResponseBody extends $tea.Model {
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

export class DeleteGlobalAccelerationInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGlobalAccelerationInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGlobalAccelerationInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHaVipRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  regionId?: string;
  haVipId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHaVipResponseBody extends $tea.Model {
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

export class DeleteHaVipResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHaVipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHaVipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpsecServerRequest extends $tea.Model {
  regionId?: string;
  ipsecServerId?: string;
  clientToken?: string;
  callerBid?: string;
  dryRun?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipsecServerId: 'IpsecServerId',
      clientToken: 'ClientToken',
      callerBid: 'callerBid',
      dryRun: 'DryRun',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipsecServerId: 'string',
      clientToken: 'string',
      callerBid: 'string',
      dryRun: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpsecServerResponseBody extends $tea.Model {
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

export class DeleteIpsecServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpsecServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpsecServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpv6EgressOnlyRuleRequest extends $tea.Model {
  regionId?: string;
  ipv6EgressOnlyRuleId?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6EgressOnlyRuleId: 'Ipv6EgressOnlyRuleId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6EgressOnlyRuleId: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpv6EgressOnlyRuleResponseBody extends $tea.Model {
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

export class DeleteIpv6EgressOnlyRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpv6EgressOnlyRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpv6EgressOnlyRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpv6GatewayRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpv6GatewayResponseBody extends $tea.Model {
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

export class DeleteIpv6GatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpv6GatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpv6GatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpv6InternetBandwidthRequest extends $tea.Model {
  regionId?: string;
  ipv6AddressId?: string;
  ipv6InternetBandwidthId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6AddressId: 'string',
      ipv6InternetBandwidthId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpv6InternetBandwidthResponseBody extends $tea.Model {
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

export class DeleteIpv6InternetBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpv6InternetBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpv6InternetBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPv6TranslatorRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  ipv6TranslatorId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      ipv6TranslatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPv6TranslatorResponseBody extends $tea.Model {
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

export class DeleteIPv6TranslatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIPv6TranslatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIPv6TranslatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPv6TranslatorAclListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPv6TranslatorAclListResponseBody extends $tea.Model {
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

export class DeleteIPv6TranslatorAclListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIPv6TranslatorAclListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIPv6TranslatorAclListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPv6TranslatorEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  ipv6TranslatorEntryId?: string;
  ipv6TranslatorId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      ipv6TranslatorEntryId: 'string',
      ipv6TranslatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPv6TranslatorEntryResponseBody extends $tea.Model {
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

export class DeleteIPv6TranslatorEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIPv6TranslatorEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIPv6TranslatorEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  natGatewayId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      natGatewayId: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNatGatewayResponseBody extends $tea.Model {
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

export class DeleteNatGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNatGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNatGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkAclRequest extends $tea.Model {
  networkAclId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkAclResponseBody extends $tea.Model {
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

export class DeleteNetworkAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNetworkAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNetworkAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhysicalConnectionRequest extends $tea.Model {
  regionId?: string;
  physicalConnectionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhysicalConnectionResponseBody extends $tea.Model {
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

export class DeletePhysicalConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePhysicalConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePhysicalConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routeTableId?: string;
  routeEntryId?: string;
  destinationCidrBlock?: string;
  nextHopId?: string;
  ownerAccount?: string;
  nextHopList?: DeleteRouteEntryRequestNextHopList[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      routeEntryId: 'RouteEntryId',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      ownerAccount: 'OwnerAccount',
      nextHopList: 'NextHopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routeTableId: 'string',
      routeEntryId: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      ownerAccount: 'string',
      nextHopList: { 'type': 'array', 'itemType': DeleteRouteEntryRequestNextHopList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryResponseBody extends $tea.Model {
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

export class DeleteRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouterInterfaceRequest extends $tea.Model {
  regionId?: string;
  routerInterfaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouterInterfaceResponseBody extends $tea.Model {
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

export class DeleteRouterInterfaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRouterInterfaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRouterInterfaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteTableRequest extends $tea.Model {
  regionId?: string;
  routeTableId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeTableId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteTableResponseBody extends $tea.Model {
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

export class DeleteRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnatEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  snatTableId?: string;
  snatEntryId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      snatTableId: 'SnatTableId',
      snatEntryId: 'SnatEntryId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      snatTableId: 'string',
      snatEntryId: 'string',
      clientToken: 'string',
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
  body: DeleteSnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSslVpnClientCertRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  sslVpnClientCertId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      sslVpnClientCertId: 'SslVpnClientCertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      sslVpnClientCertId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSslVpnClientCertResponseBody extends $tea.Model {
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

export class DeleteSslVpnClientCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSslVpnClientCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSslVpnClientCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSslVpnServerRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  sslVpnServerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      sslVpnServerId: 'SslVpnServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      sslVpnServerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSslVpnServerResponseBody extends $tea.Model {
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

export class DeleteSslVpnServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSslVpnServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSslVpnServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualBorderRouterRequest extends $tea.Model {
  regionId?: string;
  vbrId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualBorderRouterResponseBody extends $tea.Model {
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

export class DeleteVirtualBorderRouterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVirtualBorderRouterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVirtualBorderRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vpcId?: string;
  regionId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      regionId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcResponseBody extends $tea.Model {
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

export class DeleteVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnConnectionResponseBody extends $tea.Model {
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

export class DeleteVpnConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpnConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpnConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnGatewayResponseBody extends $tea.Model {
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

export class DeleteVpnGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpnGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpnGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnPbrRouteEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeSource?: string;
  routeDest?: string;
  nextHop?: string;
  weight?: number;
  overlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeSource: 'RouteSource',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      weight: 'Weight',
      overlayMode: 'OverlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeSource: 'string',
      routeDest: 'string',
      nextHop: 'string',
      weight: 'number',
      overlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnPbrRouteEntryResponseBody extends $tea.Model {
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

export class DeleteVpnPbrRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpnPbrRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpnPbrRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnRouteEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeDest?: string;
  nextHop?: string;
  weight?: number;
  overlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      weight: 'Weight',
      overlayMode: 'OverlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeDest: 'string',
      nextHop: 'string',
      weight: 'number',
      overlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpnRouteEntryResponseBody extends $tea.Model {
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

export class DeleteVpnRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpnRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpnRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVSwitchRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchId?: string;
  regionId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      regionId: 'string',
      ownerAccount: 'string',
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

export class DeletionProtectionRequest extends $tea.Model {
  protectionEnable?: boolean;
  type?: string;
  instanceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      protectionEnable: 'ProtectionEnable',
      type: 'Type',
      instanceId: 'InstanceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectionEnable: 'boolean',
      type: 'string',
      instanceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletionProtectionResponseBody extends $tea.Model {
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

export class DeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  type?: string;
  name?: string;
  hostOperator?: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeAccessPointsRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      type: 'Type',
      name: 'Name',
      hostOperator: 'HostOperator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      type: 'string',
      name: 'string',
      hostOperator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeAccessPointsRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBody extends $tea.Model {
  accessPointSet?: DescribeAccessPointsResponseBodyAccessPointSet;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointSet: 'AccessPointSet',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointSet: DescribeAccessPointsResponseBodyAccessPointSet,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccessPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccessPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routerId?: string;
  bgpGroupId?: string;
  regionId?: string;
  isDefault?: boolean;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      bgpGroupId: 'BgpGroupId',
      regionId: 'RegionId',
      isDefault: 'IsDefault',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      bgpGroupId: 'string',
      regionId: 'string',
      isDefault: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  bgpGroups?: DescribeBgpGroupsResponseBodyBgpGroups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      bgpGroups: 'BgpGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      bgpGroups: DescribeBgpGroupsResponseBodyBgpGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBgpGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBgpGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpNetworksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routerId?: string;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpNetworksResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  bgpNetworks?: DescribeBgpNetworksResponseBodyBgpNetworks;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      bgpNetworks: 'BgpNetworks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      bgpNetworks: DescribeBgpNetworksResponseBodyBgpNetworks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpNetworksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBgpNetworksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBgpNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPeersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routerId?: string;
  bgpPeerId?: string;
  bgpGroupId?: string;
  regionId?: string;
  isDefault?: boolean;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      bgpPeerId: 'BgpPeerId',
      bgpGroupId: 'BgpGroupId',
      regionId: 'RegionId',
      isDefault: 'IsDefault',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      bgpPeerId: 'string',
      bgpGroupId: 'string',
      regionId: 'string',
      isDefault: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPeersResponseBody extends $tea.Model {
  totalCount?: number;
  bgpPeers?: DescribeBgpPeersResponseBodyBgpPeers;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      bgpPeers: 'BgpPeers',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      bgpPeers: DescribeBgpPeersResponseBodyBgpPeers,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPeersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBgpPeersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBgpPeersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  includeReservationData?: boolean;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  resourceGroupId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  dryRun?: boolean;
  tag?: DescribeCommonBandwidthPackagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      includeReservationData: 'IncludeReservationData',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      resourceGroupId: 'ResourceGroupId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dryRun: 'DryRun',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      includeReservationData: 'boolean',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      resourceGroupId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      dryRun: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  commonBandwidthPackages?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      commonBandwidthPackages: 'CommonBandwidthPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      commonBandwidthPackages: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCommonBandwidthPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCommonBandwidthPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  customerGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      customerGatewayId: 'CustomerGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      customerGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewayResponseBody extends $tea.Model {
  description?: string;
  requestId?: string;
  customerGatewayId?: string;
  createTime?: number;
  ipAddress?: string;
  asn?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      customerGatewayId: 'CustomerGatewayId',
      createTime: 'CreateTime',
      ipAddress: 'IpAddress',
      asn: 'Asn',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      customerGatewayId: 'string',
      createTime: 'number',
      ipAddress: 'string',
      asn: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomerGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomerGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewaysRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  customerGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      customerGatewayId: 'CustomerGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      customerGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewaysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  customerGateways?: DescribeCustomerGatewaysResponseBodyCustomerGateways;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      customerGateways: 'CustomerGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      customerGateways: DescribeCustomerGatewaysResponseBodyCustomerGateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomerGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomerGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequest extends $tea.Model {
  filter?: DescribeEipAddressesRequestFilter[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  includeReservationData?: boolean;
  status?: string;
  eipAddress?: string;
  allocationId?: string;
  segmentInstanceId?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  ISP?: string;
  ownerAccount?: string;
  lockReason?: string;
  associatedInstanceType?: string;
  associatedInstanceId?: string;
  chargeType?: string;
  dryRun?: boolean;
  tag?: DescribeEipAddressesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      includeReservationData: 'IncludeReservationData',
      status: 'Status',
      eipAddress: 'EipAddress',
      allocationId: 'AllocationId',
      segmentInstanceId: 'SegmentInstanceId',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ISP: 'ISP',
      ownerAccount: 'OwnerAccount',
      lockReason: 'LockReason',
      associatedInstanceType: 'AssociatedInstanceType',
      associatedInstanceId: 'AssociatedInstanceId',
      chargeType: 'ChargeType',
      dryRun: 'DryRun',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeEipAddressesRequestFilter },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      includeReservationData: 'boolean',
      status: 'string',
      eipAddress: 'string',
      allocationId: 'string',
      segmentInstanceId: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ISP: 'string',
      ownerAccount: 'string',
      lockReason: 'string',
      associatedInstanceType: 'string',
      associatedInstanceId: 'string',
      chargeType: 'string',
      dryRun: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeEipAddressesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  eipAddresses?: DescribeEipAddressesResponseBodyEipAddresses;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      eipAddresses: DescribeEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
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

export class DescribeEipGatewayInfoRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipGatewayInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  eipInfos?: DescribeEipGatewayInfoResponseBodyEipInfos;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      eipInfos: 'EipInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      eipInfos: DescribeEipGatewayInfoResponseBodyEipInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipGatewayInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEipGatewayInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEipGatewayInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  allocationId?: string;
  startTime?: string;
  endTime?: string;
  period?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      allocationId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponseBody extends $tea.Model {
  requestId?: string;
  eipMonitorDatas?: DescribeEipMonitorDataResponseBodyEipMonitorDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eipMonitorDatas: 'EipMonitorDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eipMonitorDatas: DescribeEipMonitorDataResponseBodyEipMonitorDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEipMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEipMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipSegmentRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  regionId?: string;
  segmentInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      segmentInstanceId: 'SegmentInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      regionId: 'string',
      segmentInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipSegmentResponseBody extends $tea.Model {
  eipSegments?: DescribeEipSegmentResponseBodyEipSegments;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      eipSegments: 'EipSegments',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegments: DescribeEipSegmentResponseBodyEipSegments,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEipSegmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEipSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeExpressCloudConnectionsRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeExpressCloudConnectionsRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsResponseBody extends $tea.Model {
  expressCloudConnectionSet?: DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSet;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      expressCloudConnectionSet: 'ExpressCloudConnectionSet',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressCloudConnectionSet: DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSet,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExpressCloudConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExpressCloudConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogName?: string;
  flowLogId?: string;
  description?: string;
  resourceType?: string;
  resourceId?: string;
  trafficType?: string;
  projectName?: string;
  logStoreName?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogName: 'FlowLogName',
      flowLogId: 'FlowLogId',
      description: 'Description',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      trafficType: 'TrafficType',
      projectName: 'ProjectName',
      logStoreName: 'LogStoreName',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogName: 'string',
      flowLogId: 'string',
      description: 'string',
      resourceType: 'string',
      resourceId: 'string',
      trafficType: 'string',
      projectName: 'string',
      logStoreName: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBody extends $tea.Model {
  totalCount?: string;
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      flowLogs: 'FlowLogs',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      flowLogs: DescribeFlowLogsResponseBodyFlowLogs,
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  forwardTableId?: string;
  forwardEntryId?: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  forwardEntryName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      forwardEntryName: 'ForwardEntryName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      forwardTableId: 'string',
      forwardEntryId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      forwardEntryName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      forwardTableEntries: 'ForwardTableEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      forwardTableEntries: DescribeForwardTableEntriesResponseBodyForwardTableEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeForwardTableEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeForwardTableEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  includeReservationData?: boolean;
  globalAccelerationInstanceId?: string;
  ipAddress?: string;
  name?: string;
  status?: string;
  bandwidthType?: string;
  serviceLocation?: string;
  serverId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      includeReservationData: 'IncludeReservationData',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipAddress: 'IpAddress',
      name: 'Name',
      status: 'Status',
      bandwidthType: 'BandwidthType',
      serviceLocation: 'ServiceLocation',
      serverId: 'ServerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      includeReservationData: 'boolean',
      globalAccelerationInstanceId: 'string',
      ipAddress: 'string',
      name: 'string',
      status: 'string',
      bandwidthType: 'string',
      serviceLocation: 'string',
      serverId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  globalAccelerationInstances?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      globalAccelerationInstances: 'GlobalAccelerationInstances',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      globalAccelerationInstances: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGlobalAccelerationInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGlobalAccelerationInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  instanceId?: string;
  instanceType?: string;
  resourceGroupId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  cenGrantRules?: DescribeGrantRulesToCenResponseBodyCenGrantRules;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      cenGrantRules: 'CenGrantRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      cenGrantRules: DescribeGrantRulesToCenResponseBodyCenGrantRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGrantRulesToCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGrantRulesToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeHaVipsRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeHaVipsRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBody extends $tea.Model {
  totalCount?: number;
  haVips?: DescribeHaVipsResponseBodyHaVips;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      haVips: 'HaVips',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      haVips: DescribeHaVipsResponseBodyHaVips,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHaVipsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHaVipsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighDefinitionMonitorLogAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  instanceId?: string;
  instanceType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighDefinitionMonitorLogAttributeResponseBody extends $tea.Model {
  requestId?: string;
  logStore?: string;
  instanceId?: string;
  instanceType?: string;
  logProject?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logStore: 'LogStore',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      logProject: 'LogProject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logStore: 'string',
      instanceId: 'string',
      instanceType: 'string',
      logProject: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighDefinitionMonitorLogAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHighDefinitionMonitorLogAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHighDefinitionMonitorLogAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  instanceType?: string;
  renewalStatus?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      renewalStatus: 'RenewalStatus',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      renewalStatus: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBody extends $tea.Model {
  totalCount?: string;
  instanceRenewAttributes?: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes;
  requestId?: string;
  pageSize?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      instanceRenewAttributes: 'InstanceRenewAttributes',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      instanceRenewAttributes: DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributes,
      requestId: 'string',
      pageSize: 'string',
      pageNumber: 'string',
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

export class DescribeIpv6AddressesRequest extends $tea.Model {
  regionId?: string;
  ipv6AddressId?: string;
  ipv6Address?: string;
  name?: string;
  associatedInstanceId?: string;
  associatedInstanceType?: string;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  ipv6InternetBandwidthId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6Address: 'Ipv6Address',
      name: 'Name',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6AddressId: 'string',
      ipv6Address: 'string',
      name: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      ipv6InternetBandwidthId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipv6Addresses?: DescribeIpv6AddressesResponseBodyIpv6Addresses;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipv6Addresses: 'Ipv6Addresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipv6Addresses: DescribeIpv6AddressesResponseBodyIpv6Addresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpv6AddressesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpv6AddressesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  ipv6EgressOnlyRuleId?: string;
  name?: string;
  instanceType?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      ipv6EgressOnlyRuleId: 'Ipv6EgressOnlyRuleId',
      name: 'Name',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      ipv6EgressOnlyRuleId: 'string',
      name: 'string',
      instanceType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipv6EgressOnlyRules?: DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRules;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipv6EgressOnlyRules: 'Ipv6EgressOnlyRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipv6EgressOnlyRules: DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpv6EgressOnlyRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpv6EgressOnlyRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewayAttributeRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewayAttributeResponseBody extends $tea.Model {
  status?: string;
  description?: string;
  requestId?: string;
  vpcId?: string;
  instanceChargeType?: string;
  expiredTime?: string;
  creationTime?: string;
  ipv6GatewayId?: string;
  regionId?: string;
  spec?: string;
  businessStatus?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      requestId: 'RequestId',
      vpcId: 'VpcId',
      instanceChargeType: 'InstanceChargeType',
      expiredTime: 'ExpiredTime',
      creationTime: 'CreationTime',
      ipv6GatewayId: 'Ipv6GatewayId',
      regionId: 'RegionId',
      spec: 'Spec',
      businessStatus: 'BusinessStatus',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      requestId: 'string',
      vpcId: 'string',
      instanceChargeType: 'string',
      expiredTime: 'string',
      creationTime: 'string',
      ipv6GatewayId: 'string',
      regionId: 'string',
      spec: 'string',
      businessStatus: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpv6GatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpv6GatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  vpcId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      vpcId: 'VpcId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      vpcId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipv6Gateways?: DescribeIpv6GatewaysResponseBodyIpv6Gateways;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipv6Gateways: 'Ipv6Gateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipv6Gateways: DescribeIpv6GatewaysResponseBodyIpv6Gateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpv6GatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpv6GatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesResponseBody extends $tea.Model {
  aclEntries?: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  aclId?: string;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      aclId: 'AclId',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      aclId: 'string',
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIPv6TranslatorAclListAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIPv6TranslatorAclListAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  pageNumber?: number;
  pageSize?: number;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipv6TranslatorAcls?: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipv6TranslatorAcls: 'Ipv6TranslatorAcls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipv6TranslatorAcls: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIPv6TranslatorAclListsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIPv6TranslatorAclListsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ipv6TranslatorId?: string;
  ipv6TranslatorEntryId?: string;
  entryName?: string;
  allocateIpv6Addr?: string;
  allocateIpv6Port?: number;
  backendIpv4Addr?: string;
  backendIpv4Port?: number;
  transProtocol?: string;
  aclStatus?: string;
  aclType?: string;
  aclId?: string;
  pageNumber?: number;
  pageSize?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      entryName: 'EntryName',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      allocateIpv6Port: 'AllocateIpv6Port',
      backendIpv4Addr: 'BackendIpv4Addr',
      backendIpv4Port: 'BackendIpv4Port',
      transProtocol: 'TransProtocol',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      aclId: 'AclId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ipv6TranslatorId: 'string',
      ipv6TranslatorEntryId: 'string',
      entryName: 'string',
      allocateIpv6Addr: 'string',
      allocateIpv6Port: 'number',
      backendIpv4Addr: 'string',
      backendIpv4Port: 'number',
      transProtocol: 'string',
      aclStatus: 'string',
      aclType: 'string',
      aclId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipv6TranslatorEntries?: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipv6TranslatorEntries: 'Ipv6TranslatorEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipv6TranslatorEntries: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIPv6TranslatorEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIPv6TranslatorEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ipv6TranslatorId?: string;
  name?: string;
  spec?: string;
  status?: string;
  allocateIpv6Addr?: string;
  allocateIpv4Addr?: string;
  payType?: string;
  pageNumber?: number;
  pageSize?: number;
  businessStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
      spec: 'Spec',
      status: 'Status',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      allocateIpv4Addr: 'AllocateIpv4Addr',
      payType: 'PayType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      businessStatus: 'BusinessStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ipv6TranslatorId: 'string',
      name: 'string',
      spec: 'string',
      status: 'string',
      allocateIpv6Addr: 'string',
      allocateIpv4Addr: 'string',
      payType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      businessStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipv6Translators?: DescribeIPv6TranslatorsResponseBodyIpv6Translators;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipv6Translators: 'Ipv6Translators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipv6Translators: DescribeIPv6TranslatorsResponseBodyIpv6Translators,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIPv6TranslatorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIPv6TranslatorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  natGatewayId?: string;
  vpcId?: string;
  name?: string;
  instanceChargeType?: string;
  spec?: string;
  natType?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  dryRun?: boolean;
  status?: string;
  tag?: DescribeNatGatewaysRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      vpcId: 'VpcId',
      name: 'Name',
      instanceChargeType: 'InstanceChargeType',
      spec: 'Spec',
      natType: 'NatType',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dryRun: 'DryRun',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      natGatewayId: 'string',
      vpcId: 'string',
      name: 'string',
      instanceChargeType: 'string',
      spec: 'string',
      natType: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      dryRun: 'boolean',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeNatGatewaysRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      natGateways: 'NatGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      natGateways: DescribeNatGatewaysResponseBodyNatGateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNatGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNatGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesRequest extends $tea.Model {
  networkAclId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBody extends $tea.Model {
  requestId?: string;
  networkAclAttribute?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      networkAclAttribute: 'NetworkAclAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      networkAclAttribute: DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkAclAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkAclAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsRequest extends $tea.Model {
  networkAclId?: string;
  networkAclName?: string;
  vpcId?: string;
  resourceType?: string;
  resourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      vpcId: 'VpcId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      networkAclName: 'string',
      vpcId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBody extends $tea.Model {
  totalCount?: string;
  networkAcls?: DescribeNetworkAclsResponseBodyNetworkAcls;
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      networkAcls: 'NetworkAcls',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      networkAcls: DescribeNetworkAclsResponseBodyNetworkAcls,
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  allocationId?: string;
  startTime?: string;
  endTime?: string;
  period?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      period: 'Period',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      allocationId: 'string',
      startTime: 'string',
      endTime: 'string',
      period: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponseBody extends $tea.Model {
  requestId?: string;
  eipMonitorDatas?: DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eipMonitorDatas: 'EipMonitorDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eipMonitorDatas: DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNewProjectEipMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNewProjectEipMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOARequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponseBody extends $tea.Model {
  requestId?: string;
  physicalConnectionLOAType?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      physicalConnectionLOAType: 'PhysicalConnectionLOAType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      physicalConnectionLOAType: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePhysicalConnectionLOAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePhysicalConnectionLOAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  productType?: string;
  acceptLanguage?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      acceptLanguage: 'AcceptLanguage',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      acceptLanguage: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListRequest extends $tea.Model {
  regionId?: string;
  routeTableId?: string;
  routeEntryId?: string;
  destinationCidrBlock?: string;
  routeEntryName?: string;
  ipVersion?: string;
  routeEntryType?: string;
  nextHopId?: string;
  nextHopType?: string;
  maxResult?: number;
  nextToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      routeEntryId: 'RouteEntryId',
      destinationCidrBlock: 'DestinationCidrBlock',
      routeEntryName: 'RouteEntryName',
      ipVersion: 'IpVersion',
      routeEntryType: 'RouteEntryType',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeTableId: 'string',
      routeEntryId: 'string',
      destinationCidrBlock: 'string',
      routeEntryName: 'string',
      ipVersion: 'string',
      routeEntryType: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      maxResult: 'number',
      nextToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  routeEntrys?: DescribeRouteEntryListResponseBodyRouteEntrys;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntrys: 'RouteEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntrys: DescribeRouteEntryListResponseBodyRouteEntrys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouteEntryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouteEntryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfaceAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfaceAttributeResponseBody extends $tea.Model {
  oppositeInterfaceId?: string;
  oppositeInterfaceStatus?: string;
  description?: string;
  oppositeRouterId?: string;
  message?: string;
  endTime?: string;
  gmtModified?: string;
  routerId?: string;
  businessStatus?: string;
  success?: boolean;
  name?: string;
  reservationOrderType?: string;
  oppositeRouterType?: string;
  oppositeBandwidth?: number;
  bandwidth?: number;
  connectedTime?: string;
  reservationActiveTime?: string;
  hcThreshold?: number;
  reservationBandwidth?: string;
  status?: string;
  oppositeInterfaceOwnerId?: string;
  requestId?: string;
  oppositeRegionId?: string;
  healthCheckSourceIp?: string;
  hasReservationData?: string;
  crossBorder?: boolean;
  hcRate?: number;
  code?: string;
  reservationInternetChargeType?: string;
  oppositeInterfaceSpec?: string;
  role?: string;
  oppositeVpcInstanceId?: string;
  routerType?: string;
  chargeType?: string;
  creationTime?: string;
  accessPointId?: string;
  vpcInstanceId?: string;
  oppositeInterfaceBusinessStatus?: string;
  oppositeAccessPointId?: string;
  spec?: string;
  healthCheckStatus?: string;
  healthCheckTargetIp?: string;
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeInterfaceStatus: 'OppositeInterfaceStatus',
      description: 'Description',
      oppositeRouterId: 'OppositeRouterId',
      message: 'Message',
      endTime: 'EndTime',
      gmtModified: 'GmtModified',
      routerId: 'RouterId',
      businessStatus: 'BusinessStatus',
      success: 'Success',
      name: 'Name',
      reservationOrderType: 'ReservationOrderType',
      oppositeRouterType: 'OppositeRouterType',
      oppositeBandwidth: 'OppositeBandwidth',
      bandwidth: 'Bandwidth',
      connectedTime: 'ConnectedTime',
      reservationActiveTime: 'ReservationActiveTime',
      hcThreshold: 'HcThreshold',
      reservationBandwidth: 'ReservationBandwidth',
      status: 'Status',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      requestId: 'RequestId',
      oppositeRegionId: 'OppositeRegionId',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      hasReservationData: 'HasReservationData',
      crossBorder: 'CrossBorder',
      hcRate: 'HcRate',
      code: 'Code',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      oppositeInterfaceSpec: 'OppositeInterfaceSpec',
      role: 'Role',
      oppositeVpcInstanceId: 'OppositeVpcInstanceId',
      routerType: 'RouterType',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      accessPointId: 'AccessPointId',
      vpcInstanceId: 'VpcInstanceId',
      oppositeInterfaceBusinessStatus: 'OppositeInterfaceBusinessStatus',
      oppositeAccessPointId: 'OppositeAccessPointId',
      spec: 'Spec',
      healthCheckStatus: 'HealthCheckStatus',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oppositeInterfaceId: 'string',
      oppositeInterfaceStatus: 'string',
      description: 'string',
      oppositeRouterId: 'string',
      message: 'string',
      endTime: 'string',
      gmtModified: 'string',
      routerId: 'string',
      businessStatus: 'string',
      success: 'boolean',
      name: 'string',
      reservationOrderType: 'string',
      oppositeRouterType: 'string',
      oppositeBandwidth: 'number',
      bandwidth: 'number',
      connectedTime: 'string',
      reservationActiveTime: 'string',
      hcThreshold: 'number',
      reservationBandwidth: 'string',
      status: 'string',
      oppositeInterfaceOwnerId: 'string',
      requestId: 'string',
      oppositeRegionId: 'string',
      healthCheckSourceIp: 'string',
      hasReservationData: 'string',
      crossBorder: 'boolean',
      hcRate: 'number',
      code: 'string',
      reservationInternetChargeType: 'string',
      oppositeInterfaceSpec: 'string',
      role: 'string',
      oppositeVpcInstanceId: 'string',
      routerType: 'string',
      chargeType: 'string',
      creationTime: 'string',
      accessPointId: 'string',
      vpcInstanceId: 'string',
      oppositeInterfaceBusinessStatus: 'string',
      oppositeAccessPointId: 'string',
      spec: 'string',
      healthCheckStatus: 'string',
      healthCheckTargetIp: 'string',
      routerInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfaceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouterInterfaceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouterInterfaceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  includeReservationData?: boolean;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeRouterInterfacesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      includeReservationData: 'IncludeReservationData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      includeReservationData: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeRouterInterfacesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  routerInterfaceSet?: DescribeRouterInterfacesResponseBodyRouterInterfaceSet;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      routerInterfaceSet: 'RouterInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      routerInterfaceSet: DescribeRouterInterfacesResponseBodyRouterInterfaceSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouterInterfacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouterInterfacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListRequest extends $tea.Model {
  routerType?: string;
  routerId?: string;
  vpcId?: string;
  routeTableId?: string;
  routeTableName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  tag?: DescribeRouteTableListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      routerType: 'RouterType',
      routerId: 'RouterId',
      vpcId: 'VpcId',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerType: 'string',
      routerId: 'string',
      vpcId: 'string',
      routeTableId: 'string',
      routeTableName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRouteTableListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  routerTableList?: DescribeRouteTableListResponseBodyRouterTableList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      routerTableList: 'RouterTableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      routerTableList: DescribeRouteTableListResponseBodyRouterTableList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouteTableListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouteTableListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VRouterId?: string;
  routeTableId?: string;
  routerType?: string;
  routerId?: string;
  type?: string;
  routeTableName?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VRouterId: 'VRouterId',
      routeTableId: 'RouteTableId',
      routerType: 'RouterType',
      routerId: 'RouterId',
      type: 'Type',
      routeTableName: 'RouteTableName',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VRouterId: 'string',
      routeTableId: 'string',
      routerType: 'string',
      routerId: 'string',
      type: 'string',
      routeTableName: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  routeTables?: DescribeRouteTablesResponseBodyRouteTables;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      routeTables: 'RouteTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      routeTables: DescribeRouteTablesResponseBodyRouteTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRouteTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRouteTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  serverId?: string;
  serverType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      serverId: 'ServerId',
      serverType: 'ServerType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      serverId: 'string',
      serverType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesResponseBody extends $tea.Model {
  requestId?: string;
  globalAccelerationInstances?: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      globalAccelerationInstances: 'GlobalAccelerationInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      globalAccelerationInstances: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServerRelatedGlobalAccelerationInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServerRelatedGlobalAccelerationInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  snatTableId?: string;
  snatEntryId?: string;
  sourceVSwitchId?: string;
  sourceCIDR?: string;
  snatIp?: string;
  snatEntryName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      snatTableId: 'SnatTableId',
      snatEntryId: 'SnatEntryId',
      sourceVSwitchId: 'SourceVSwitchId',
      sourceCIDR: 'SourceCIDR',
      snatIp: 'SnatIp',
      snatEntryName: 'SnatEntryName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      snatTableId: 'string',
      snatEntryId: 'string',
      sourceVSwitchId: 'string',
      sourceCIDR: 'string',
      snatIp: 'string',
      snatEntryName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      snatTableEntries: 'SnatTableEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      snatTableEntries: DescribeSnatTableEntriesResponseBodySnatTableEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSnatTableEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSnatTableEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sslVpnClientCertId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sslVpnClientCertId: 'SslVpnClientCertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sslVpnClientCertId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertResponseBody extends $tea.Model {
  status?: string;
  clientCert?: string;
  endTime?: number;
  requestId?: string;
  createTime?: number;
  clientKey?: string;
  sslVpnClientCertId?: string;
  sslVpnServerId?: string;
  caCert?: string;
  regionId?: string;
  clientConfig?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clientCert: 'ClientCert',
      endTime: 'EndTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      clientKey: 'ClientKey',
      sslVpnClientCertId: 'SslVpnClientCertId',
      sslVpnServerId: 'SslVpnServerId',
      caCert: 'CaCert',
      regionId: 'RegionId',
      clientConfig: 'ClientConfig',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clientCert: 'string',
      endTime: 'number',
      requestId: 'string',
      createTime: 'number',
      clientKey: 'string',
      sslVpnClientCertId: 'string',
      sslVpnServerId: 'string',
      caCert: 'string',
      regionId: 'string',
      clientConfig: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSslVpnClientCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSslVpnClientCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sslVpnServerId?: string;
  sslVpnClientCertId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sslVpnServerId: 'SslVpnServerId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sslVpnServerId: 'string',
      sslVpnClientCertId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  sslVpnClientCertKeys?: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      sslVpnClientCertKeys: 'SslVpnClientCertKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      sslVpnClientCertKeys: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSslVpnClientCertsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSslVpnClientCertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnServersRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  sslVpnServerId?: string;
  vpnGatewayId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      sslVpnServerId: 'SslVpnServerId',
      vpnGatewayId: 'VpnGatewayId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      sslVpnServerId: 'string',
      vpnGatewayId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnServersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  sslVpnServers?: DescribeSslVpnServersResponseBodySslVpnServers;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      sslVpnServers: 'SslVpnServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      sslVpnServers: DescribeSslVpnServersResponseBodySslVpnServers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSslVpnServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSslVpnServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeVirtualBorderRoutersRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  virtualBorderRouterSet?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      virtualBorderRouterSet: 'VirtualBorderRouterSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      virtualBorderRouterSet: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVirtualBorderRoutersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVirtualBorderRoutersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  physicalConnectionId?: string;
  pageNumber?: number;
  pageSize?: number;
  filter?: DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      physicalConnectionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  virtualBorderRouterForPhysicalConnectionSet?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      virtualBorderRouterForPhysicalConnectionSet: 'VirtualBorderRouterForPhysicalConnectionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      virtualBorderRouterForPhysicalConnectionSet: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vpcId?: string;
  regionId?: string;
  dryRun?: boolean;
  isDefault?: boolean;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      regionId: 'RegionId',
      dryRun: 'DryRun',
      isDefault: 'IsDefault',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      regionId: 'string',
      dryRun: 'boolean',
      isDefault: 'boolean',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBody extends $tea.Model {
  status?: string;
  isDefault?: boolean;
  dhcpOptionsSetStatus?: string;
  description?: string;
  classicLinkEnabled?: boolean;
  requestId?: string;
  resourceGroupId?: string;
  vSwitchIds?: DescribeVpcAttributeResponseBodyVSwitchIds;
  secondaryCidrBlocks?: DescribeVpcAttributeResponseBodySecondaryCidrBlocks;
  cidrBlock?: string;
  userCidrs?: DescribeVpcAttributeResponseBodyUserCidrs;
  VRouterId?: string;
  dhcpOptionsSetId?: string;
  vpcId?: string;
  ownerId?: number;
  associatedCens?: DescribeVpcAttributeResponseBodyAssociatedCens;
  creationTime?: string;
  vpcName?: string;
  regionId?: string;
  ipv6CidrBlock?: string;
  cloudResources?: DescribeVpcAttributeResponseBodyCloudResources;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isDefault: 'IsDefault',
      dhcpOptionsSetStatus: 'DhcpOptionsSetStatus',
      description: 'Description',
      classicLinkEnabled: 'ClassicLinkEnabled',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      vSwitchIds: 'VSwitchIds',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      cidrBlock: 'CidrBlock',
      userCidrs: 'UserCidrs',
      VRouterId: 'VRouterId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      vpcId: 'VpcId',
      ownerId: 'OwnerId',
      associatedCens: 'AssociatedCens',
      creationTime: 'CreationTime',
      vpcName: 'VpcName',
      regionId: 'RegionId',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      cloudResources: 'CloudResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isDefault: 'boolean',
      dhcpOptionsSetStatus: 'string',
      description: 'string',
      classicLinkEnabled: 'boolean',
      requestId: 'string',
      resourceGroupId: 'string',
      vSwitchIds: DescribeVpcAttributeResponseBodyVSwitchIds,
      secondaryCidrBlocks: DescribeVpcAttributeResponseBodySecondaryCidrBlocks,
      cidrBlock: 'string',
      userCidrs: DescribeVpcAttributeResponseBodyUserCidrs,
      VRouterId: 'string',
      dhcpOptionsSetId: 'string',
      vpcId: 'string',
      ownerId: 'number',
      associatedCens: DescribeVpcAttributeResponseBodyAssociatedCens,
      creationTime: 'string',
      vpcName: 'string',
      regionId: 'string',
      ipv6CidrBlock: 'string',
      cloudResources: DescribeVpcAttributeResponseBodyCloudResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vpcId?: string;
  regionId?: string;
  vpcName?: string;
  isDefault?: boolean;
  dryRun?: boolean;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  vpcOwnerId?: number;
  advancedFeature?: boolean;
  dhcpOptionsSetId?: string;
  tag?: DescribeVpcsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      regionId: 'RegionId',
      vpcName: 'VpcName',
      isDefault: 'IsDefault',
      dryRun: 'DryRun',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
      vpcOwnerId: 'VpcOwnerId',
      advancedFeature: 'AdvancedFeature',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      regionId: 'string',
      vpcName: 'string',
      isDefault: 'boolean',
      dryRun: 'boolean',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
      vpcOwnerId: 'number',
      advancedFeature: 'boolean',
      dhcpOptionsSetId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVpcsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBody extends $tea.Model {
  totalCount?: number;
  vpcs?: DescribeVpcsResponseBodyVpcs;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      vpcs: DescribeVpcsResponseBodyVpcs,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBody extends $tea.Model {
  status?: string;
  localSubnet?: string;
  requestId?: string;
  customerGatewayId?: string;
  createTime?: number;
  name?: string;
  effectImmediately?: boolean;
  remoteSubnet?: string;
  vcoHealthCheck?: DescribeVpnConnectionResponseBodyVcoHealthCheck;
  vpnGatewayId?: string;
  ipsecConfig?: DescribeVpnConnectionResponseBodyIpsecConfig;
  remoteCaCertificate?: string;
  vpnConnectionId?: string;
  enableNatTraversal?: boolean;
  enableDpd?: boolean;
  ikeConfig?: DescribeVpnConnectionResponseBodyIkeConfig;
  vpnBgpConfig?: DescribeVpnConnectionResponseBodyVpnBgpConfig;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      localSubnet: 'LocalSubnet',
      requestId: 'RequestId',
      customerGatewayId: 'CustomerGatewayId',
      createTime: 'CreateTime',
      name: 'Name',
      effectImmediately: 'EffectImmediately',
      remoteSubnet: 'RemoteSubnet',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnGatewayId: 'VpnGatewayId',
      ipsecConfig: 'IpsecConfig',
      remoteCaCertificate: 'RemoteCaCertificate',
      vpnConnectionId: 'VpnConnectionId',
      enableNatTraversal: 'EnableNatTraversal',
      enableDpd: 'EnableDpd',
      ikeConfig: 'IkeConfig',
      vpnBgpConfig: 'VpnBgpConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      localSubnet: 'string',
      requestId: 'string',
      customerGatewayId: 'string',
      createTime: 'number',
      name: 'string',
      effectImmediately: 'boolean',
      remoteSubnet: 'string',
      vcoHealthCheck: DescribeVpnConnectionResponseBodyVcoHealthCheck,
      vpnGatewayId: 'string',
      ipsecConfig: DescribeVpnConnectionResponseBodyIpsecConfig,
      remoteCaCertificate: 'string',
      vpnConnectionId: 'string',
      enableNatTraversal: 'boolean',
      enableDpd: 'boolean',
      ikeConfig: DescribeVpnConnectionResponseBodyIkeConfig,
      vpnBgpConfig: DescribeVpnConnectionResponseBodyVpnBgpConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnGatewayId?: string;
  customerGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      customerGatewayId: 'CustomerGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnGatewayId: 'string',
      customerGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vpnConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  vpnConnections?: DescribeVpnConnectionsResponseBodyVpnConnections;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      vpnConnections: 'VpnConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      vpnConnections: DescribeVpnConnectionsResponseBodyVpnConnections,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnGatewayId?: string;
  includeReservationData?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      includeReservationData: 'IncludeReservationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnGatewayId: 'string',
      includeReservationData: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayResponseBody extends $tea.Model {
  status?: string;
  ipsecVpn?: string;
  sslVpn?: string;
  vpnType?: string;
  description?: string;
  enableBgp?: boolean;
  endTime?: number;
  requestId?: string;
  createTime?: number;
  vSwitchId?: string;
  autoPropagate?: boolean;
  businessStatus?: string;
  name?: string;
  vpcId?: string;
  internetIp?: string;
  vpnGatewayId?: string;
  chargeType?: string;
  tag?: string;
  spec?: string;
  sslMaxConnections?: number;
  tags?: DescribeVpnGatewayResponseBodyTags;
  reservationData?: DescribeVpnGatewayResponseBodyReservationData;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ipsecVpn: 'IpsecVpn',
      sslVpn: 'SslVpn',
      vpnType: 'VpnType',
      description: 'Description',
      enableBgp: 'EnableBgp',
      endTime: 'EndTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      vSwitchId: 'VSwitchId',
      autoPropagate: 'AutoPropagate',
      businessStatus: 'BusinessStatus',
      name: 'Name',
      vpcId: 'VpcId',
      internetIp: 'InternetIp',
      vpnGatewayId: 'VpnGatewayId',
      chargeType: 'ChargeType',
      tag: 'Tag',
      spec: 'Spec',
      sslMaxConnections: 'SslMaxConnections',
      tags: 'Tags',
      reservationData: 'ReservationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ipsecVpn: 'string',
      sslVpn: 'string',
      vpnType: 'string',
      description: 'string',
      enableBgp: 'boolean',
      endTime: 'number',
      requestId: 'string',
      createTime: 'number',
      vSwitchId: 'string',
      autoPropagate: 'boolean',
      businessStatus: 'string',
      name: 'string',
      vpcId: 'string',
      internetIp: 'string',
      vpnGatewayId: 'string',
      chargeType: 'string',
      tag: 'string',
      spec: 'string',
      sslMaxConnections: 'number',
      tags: DescribeVpnGatewayResponseBodyTags,
      reservationData: DescribeVpnGatewayResponseBodyReservationData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpcId?: string;
  vpnGatewayId?: string;
  status?: string;
  businessStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  includeReservationData?: boolean;
  tag?: DescribeVpnGatewaysRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpnGatewayId: 'VpnGatewayId',
      status: 'Status',
      businessStatus: 'BusinessStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      includeReservationData: 'IncludeReservationData',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpcId: 'string',
      vpnGatewayId: 'string',
      status: 'string',
      businessStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      includeReservationData: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewaysRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  vpnGateways?: DescribeVpnGatewaysResponseBodyVpnGateways;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      vpnGateways: 'VpnGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      vpnGateways: DescribeVpnGatewaysResponseBodyVpnGateways,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnPbrRouteEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnPbrRouteEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  vpnPbrRouteEntries?: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      vpnPbrRouteEntries: 'VpnPbrRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      vpnPbrRouteEntries: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnPbrRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnPbrRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnPbrRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnGatewayId?: string;
  pageNumber?: number;
  pageSize?: number;
  routeEntryType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeEntryType: 'RouteEntryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnGatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      routeEntryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  vpnRouteEntries?: DescribeVpnRouteEntriesResponseBodyVpnRouteEntries;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      vpnRouteEntries: 'VpnRouteEntries',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      vpnRouteEntries: DescribeVpnRouteEntriesResponseBodyVpnRouteEntries,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnRouteEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnRouteEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnSslServerLogsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnSslServerId?: string;
  sslVpnClientCertId?: string;
  from?: number;
  to?: number;
  minutePeriod?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnSslServerId: 'VpnSslServerId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      from: 'From',
      to: 'To',
      minutePeriod: 'MinutePeriod',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnSslServerId: 'string',
      sslVpnClientCertId: 'string',
      from: 'number',
      to: 'number',
      minutePeriod: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnSslServerLogsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  isCompleted?: boolean;
  data?: DescribeVpnSslServerLogsResponseBodyData;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      isCompleted: 'IsCompleted',
      data: 'Data',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      isCompleted: 'boolean',
      data: DescribeVpnSslServerLogsResponseBodyData,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnSslServerLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpnSslServerLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpnSslServerLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VRouterId?: string;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VRouterId: 'VRouterId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VRouterId: 'string',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBody extends $tea.Model {
  VRouters?: DescribeVRoutersResponseBodyVRouters;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      VRouters: 'VRouters',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouters: DescribeVRoutersResponseBodyVRouters,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVRoutersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVRoutersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchId?: string;
  regionId?: string;
  dryRun?: boolean;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      regionId: 'RegionId',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      regionId: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponseBody extends $tea.Model {
  status?: string;
  isDefault?: boolean;
  description?: string;
  networkAclId?: string;
  requestId?: string;
  resourceGroupId?: string;
  zoneId?: string;
  availableIpAddressCount?: number;
  vSwitchId?: string;
  cidrBlock?: string;
  routeTable?: DescribeVSwitchAttributesResponseBodyRouteTable;
  vpcId?: string;
  ownerId?: number;
  creationTime?: string;
  vSwitchName?: string;
  ipv6CidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isDefault: 'IsDefault',
      description: 'Description',
      networkAclId: 'NetworkAclId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      availableIpAddressCount: 'AvailableIpAddressCount',
      vSwitchId: 'VSwitchId',
      cidrBlock: 'CidrBlock',
      routeTable: 'RouteTable',
      vpcId: 'VpcId',
      ownerId: 'OwnerId',
      creationTime: 'CreationTime',
      vSwitchName: 'VSwitchName',
      ipv6CidrBlock: 'Ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isDefault: 'boolean',
      description: 'string',
      networkAclId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      availableIpAddressCount: 'number',
      vSwitchId: 'string',
      cidrBlock: 'string',
      routeTable: DescribeVSwitchAttributesResponseBodyRouteTable,
      vpcId: 'string',
      ownerId: 'number',
      creationTime: 'string',
      vSwitchName: 'string',
      ipv6CidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVSwitchAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVSwitchAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vpcId?: string;
  vSwitchId?: string;
  zoneId?: string;
  regionId?: string;
  vSwitchName?: string;
  dryRun?: boolean;
  isDefault?: boolean;
  routeTableId?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  ownerAccount?: string;
  vSwitchOwnerId?: number;
  tag?: DescribeVSwitchesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      vSwitchName: 'VSwitchName',
      dryRun: 'DryRun',
      isDefault: 'IsDefault',
      routeTableId: 'RouteTableId',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      ownerAccount: 'OwnerAccount',
      vSwitchOwnerId: 'VSwitchOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      regionId: 'string',
      vSwitchName: 'string',
      dryRun: 'boolean',
      isDefault: 'boolean',
      routeTableId: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ownerAccount: 'string',
      vSwitchOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeVSwitchesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
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

export class DescribeZonesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDhcpOptionsSetFromVpcRequest extends $tea.Model {
  regionId?: string;
  dhcpOptionsSetId?: string;
  vpcId?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      vpcId: 'VpcId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dhcpOptionsSetId: 'string',
      vpcId: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDhcpOptionsSetFromVpcResponseBody extends $tea.Model {
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

export class DetachDhcpOptionsSetFromVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachDhcpOptionsSetFromVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachDhcpOptionsSetFromVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNatGatewayEcsMetricRequest extends $tea.Model {
  regionId?: string;
  dryRun?: boolean;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dryRun: 'DryRun',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dryRun: 'boolean',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableNatGatewayEcsMetricResponseBody extends $tea.Model {
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

export class DisableNatGatewayEcsMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableNatGatewayEcsMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableNatGatewayEcsMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcClassicLinkRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpcId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpcId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVpcClassicLinkResponseBody extends $tea.Model {
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

export class DisableVpcClassicLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableVpcClassicLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableVpcClassicLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateVpnGatewayWithCertificateRequest extends $tea.Model {
  regionId?: string;
  vpnGatewayId?: string;
  certificateType?: string;
  certificateId?: string;
  callerBid?: string;
  clientToken?: string;
  dryRun?: boolean;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
      certificateType: 'CertificateType',
      certificateId: 'CertificateId',
      callerBid: 'callerBid',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpnGatewayId: 'string',
      certificateType: 'string',
      certificateId: 'string',
      callerBid: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateVpnGatewayWithCertificateResponseBody extends $tea.Model {
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

export class DissociateVpnGatewayWithCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateVpnGatewayWithCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateVpnGatewayWithCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpnConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBody extends $tea.Model {
  requestId?: string;
  vpnConnectionConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpnConnectionConfig: 'VpnConnectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpnConnectionConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DownloadVpnConnectionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DownloadVpnConnectionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNatGatewayEcsMetricRequest extends $tea.Model {
  regionId?: string;
  dryRun?: boolean;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dryRun: 'DryRun',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dryRun: 'boolean',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableNatGatewayEcsMetricResponseBody extends $tea.Model {
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

export class EnableNatGatewayEcsMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableNatGatewayEcsMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableNatGatewayEcsMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePhysicalConnectionRequest extends $tea.Model {
  regionId?: string;
  physicalConnectionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePhysicalConnectionResponseBody extends $tea.Model {
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

export class EnablePhysicalConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnablePhysicalConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnablePhysicalConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcClassicLinkRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  vpcId?: string;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      vpcId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableVpcClassicLinkResponseBody extends $tea.Model {
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

export class EnableVpcClassicLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableVpcClassicLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableVpcClassicLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDhcpOptionsSetRequest extends $tea.Model {
  regionId?: string;
  dhcpOptionsSetId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dhcpOptionsSetId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDhcpOptionsSetResponseBody extends $tea.Model {
  status?: string;
  dhcpOptionsSetId?: string;
  dhcpOptions?: GetDhcpOptionsSetResponseBodyDhcpOptions;
  requestId?: string;
  ownerId?: number;
  dhcpOptionsSetName?: string;
  associateVpcs?: GetDhcpOptionsSetResponseBodyAssociateVpcs[];
  dhcpOptionsSetDescription?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptions: 'DhcpOptions',
      requestId: 'RequestId',
      ownerId: 'OwnerId',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      associateVpcs: 'AssociateVpcs',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptions: GetDhcpOptionsSetResponseBodyDhcpOptions,
      requestId: 'string',
      ownerId: 'number',
      dhcpOptionsSetName: 'string',
      associateVpcs: { 'type': 'array', 'itemType': GetDhcpOptionsSetResponseBodyAssociateVpcs },
      dhcpOptionsSetDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDhcpOptionsSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDhcpOptionsSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDhcpOptionsSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeRequest extends $tea.Model {
  regionId?: string;
  natGatewayId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      natGatewayId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBody extends $tea.Model {
  status?: string;
  forwardTable?: GetNatGatewayAttributeResponseBodyForwardTable;
  description?: string;
  requestId?: string;
  resourceGroupId?: string;
  ipList?: GetNatGatewayAttributeResponseBodyIpList[];
  deletionProtectionInfo?: GetNatGatewayAttributeResponseBodyDeletionProtectionInfo;
  billingConfig?: GetNatGatewayAttributeResponseBodyBillingConfig;
  natType?: string;
  businessStatus?: string;
  snatTable?: GetNatGatewayAttributeResponseBodySnatTable;
  name?: string;
  ecsMetricEnabled?: boolean;
  vpcId?: string;
  expiredTime?: string;
  creationTime?: string;
  privateInfo?: GetNatGatewayAttributeResponseBodyPrivateInfo;
  regionId?: string;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      forwardTable: 'ForwardTable',
      description: 'Description',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      ipList: 'IpList',
      deletionProtectionInfo: 'DeletionProtectionInfo',
      billingConfig: 'BillingConfig',
      natType: 'NatType',
      businessStatus: 'BusinessStatus',
      snatTable: 'SnatTable',
      name: 'Name',
      ecsMetricEnabled: 'EcsMetricEnabled',
      vpcId: 'VpcId',
      expiredTime: 'ExpiredTime',
      creationTime: 'CreationTime',
      privateInfo: 'PrivateInfo',
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      forwardTable: GetNatGatewayAttributeResponseBodyForwardTable,
      description: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      ipList: { 'type': 'array', 'itemType': GetNatGatewayAttributeResponseBodyIpList },
      deletionProtectionInfo: GetNatGatewayAttributeResponseBodyDeletionProtectionInfo,
      billingConfig: GetNatGatewayAttributeResponseBodyBillingConfig,
      natType: 'string',
      businessStatus: 'string',
      snatTable: GetNatGatewayAttributeResponseBodySnatTable,
      name: 'string',
      ecsMetricEnabled: 'boolean',
      vpcId: 'string',
      expiredTime: 'string',
      creationTime: 'string',
      privateInfo: GetNatGatewayAttributeResponseBodyPrivateInfo,
      regionId: 'string',
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNatGatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNatGatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayConvertStatusRequest extends $tea.Model {
  regionId?: string;
  natGatewayId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      natGatewayId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayConvertStatusResponseBody extends $tea.Model {
  requestId?: string;
  dstNatType?: string;
  convertSteps?: GetNatGatewayConvertStatusResponseBodyConvertSteps[];
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dstNatType: 'DstNatType',
      convertSteps: 'ConvertSteps',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dstNatType: 'string',
      convertSteps: { 'type': 'array', 'itemType': GetNatGatewayConvertStatusResponseBodyConvertSteps },
      natGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayConvertStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNatGatewayConvertStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNatGatewayConvertStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToCenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  instanceId?: string;
  instanceType?: string;
  cenId?: string;
  cenOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      cenId: 'string',
      cenOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantInstanceToCenResponseBody extends $tea.Model {
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

export class GrantInstanceToCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantInstanceToCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantInstanceToCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDhcpOptionsSetsRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  domainName?: string;
  dhcpOptionsSetName?: string;
  dhcpOptionsSetId?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      domainName: 'DomainName',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      domainName: 'string',
      dhcpOptionsSetName: 'string',
      dhcpOptionsSetId: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDhcpOptionsSetsResponseBody extends $tea.Model {
  dhcpOptionsSets?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSets[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSets: 'DhcpOptionsSets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dhcpOptionsSets: { 'type': 'array', 'itemType': ListDhcpOptionsSetsResponseBodyDhcpOptionsSets },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDhcpOptionsSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDhcpOptionsSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDhcpOptionsSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnhanhcedNatGatewayAvailableZonesRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnhanhcedNatGatewayAvailableZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: ListEnhanhcedNatGatewayAvailableZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': ListEnhanhcedNatGatewayAvailableZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnhanhcedNatGatewayAvailableZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEnhanhcedNatGatewayAvailableZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnhanhcedNatGatewayAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersRequest extends $tea.Model {
  regionId?: string;
  ipsecServerName?: string;
  vpnGatewayId?: string;
  nextToken?: string;
  maxResults?: number;
  ipsecServerId?: string[];
  callerBid?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipsecServerName: 'IpsecServerName',
      vpnGatewayId: 'VpnGatewayId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      ipsecServerId: 'IpsecServerId',
      callerBid: 'callerBid',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipsecServerName: 'string',
      vpnGatewayId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      ipsecServerId: { 'type': 'array', 'itemType': 'string' },
      callerBid: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersResponseBody extends $tea.Model {
  totalCount?: number;
  ipsecServers?: ListIpsecServersResponseBodyIpsecServers[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      ipsecServers: 'IpsecServers',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      ipsecServers: { 'type': 'array', 'itemType': ListIpsecServersResponseBodyIpsecServers },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIpsecServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIpsecServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatGatewayEcsMetricRequest extends $tea.Model {
  regionId?: string;
  dryRun?: boolean;
  natGatewayId?: string;
  timePoint?: number;
  orderKey?: string;
  orderType?: string;
  privateIpAddress?: string;
  nextToken?: string;
  maxResults?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dryRun: 'DryRun',
      natGatewayId: 'NatGatewayId',
      timePoint: 'TimePoint',
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      privateIpAddress: 'PrivateIpAddress',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dryRun: 'boolean',
      natGatewayId: 'string',
      timePoint: 'number',
      orderKey: 'string',
      orderType: 'string',
      privateIpAddress: 'string',
      nextToken: 'string',
      maxResults: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatGatewayEcsMetricResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  metricDataList?: ListNatGatewayEcsMetricResponseBodyMetricDataList[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      metricDataList: 'MetricDataList',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      metricDataList: { 'type': 'array', 'itemType': ListNatGatewayEcsMetricResponseBodyMetricDataList },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatGatewayEcsMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNatGatewayEcsMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNatGatewayEcsMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalConnectionFeaturesRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  physicalConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      physicalConnectionId: 'PhysicalConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      physicalConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalConnectionFeaturesResponseBody extends $tea.Model {
  requestId?: string;
  physicalConnectionFeatures?: ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      physicalConnectionFeatures: 'PhysicalConnectionFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      physicalConnectionFeatures: { 'type': 'array', 'itemType': ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalConnectionFeaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhysicalConnectionFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhysicalConnectionFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  regionId?: string;
  nextToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  maxResults?: number;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      regionId: 'RegionId',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      maxResults: 'MaxResults',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      regionId: 'string',
      nextToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      maxResults: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpnCertificateAssociationsRequest extends $tea.Model {
  regionId?: string;
  certificateType?: string;
  nextToken?: string;
  maxResults?: number;
  vpnGatewayId?: string[];
  certificateId?: string[];
  callerBid?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      certificateType: 'CertificateType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      vpnGatewayId: 'VpnGatewayId',
      certificateId: 'CertificateId',
      callerBid: 'callerBid',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      certificateType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      vpnGatewayId: { 'type': 'array', 'itemType': 'string' },
      certificateId: { 'type': 'array', 'itemType': 'string' },
      callerBid: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpnCertificateAssociationsResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  vpnCertificateRelations?: ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      vpnCertificateRelations: 'VpnCertificateRelations',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      vpnCertificateRelations: { 'type': 'array', 'itemType': ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpnCertificateAssociationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpnCertificateAssociationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpnCertificateAssociationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBgpGroupAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bgpGroupId?: string;
  name?: string;
  description?: string;
  localAsn?: number;
  peerAsn?: number;
  authKey?: string;
  isFakeAsn?: boolean;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bgpGroupId: 'BgpGroupId',
      name: 'Name',
      description: 'Description',
      localAsn: 'LocalAsn',
      peerAsn: 'PeerAsn',
      authKey: 'AuthKey',
      isFakeAsn: 'IsFakeAsn',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bgpGroupId: 'string',
      name: 'string',
      description: 'string',
      localAsn: 'number',
      peerAsn: 'number',
      authKey: 'string',
      isFakeAsn: 'boolean',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBgpGroupAttributeResponseBody extends $tea.Model {
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

export class ModifyBgpGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBgpGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBgpGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBgpPeerAttributeRequest extends $tea.Model {
  regionId?: string;
  bgpPeerId?: string;
  bgpGroupId?: string;
  peerIpAddress?: string;
  enableBfd?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  bfdMultiHop?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bgpPeerId: 'BgpPeerId',
      bgpGroupId: 'BgpGroupId',
      peerIpAddress: 'PeerIpAddress',
      enableBfd: 'EnableBfd',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      bfdMultiHop: 'BfdMultiHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bgpPeerId: 'string',
      bgpGroupId: 'string',
      peerIpAddress: 'string',
      enableBfd: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      bfdMultiHop: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBgpPeerAttributeResponseBody extends $tea.Model {
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

export class ModifyBgpPeerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBgpPeerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBgpPeerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageAttributeResponseBody extends $tea.Model {
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

export class ModifyCommonBandwidthPackageAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCommonBandwidthPackageAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCommonBandwidthPackageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageInternetChargeTypeRequest extends $tea.Model {
  bandwidthPackageId?: string;
  autoPay?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bandwidth?: number;
  ownerAccount?: string;
  regionId?: string;
  ratio?: number;
  internetChargeType?: string;
  instanceChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      autoPay: 'AutoPay',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bandwidth: 'Bandwidth',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      ratio: 'Ratio',
      internetChargeType: 'InternetChargeType',
      instanceChargeType: 'InstanceChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      autoPay: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bandwidth: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      ratio: 'number',
      internetChargeType: 'string',
      instanceChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageInternetChargeTypeResponseBody extends $tea.Model {
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

export class ModifyCommonBandwidthPackageInternetChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCommonBandwidthPackageInternetChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCommonBandwidthPackageInternetChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageIpBandwidthRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  eipId?: string;
  bandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      eipId: 'EipId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      eipId: 'string',
      bandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageIpBandwidthResponseBody extends $tea.Model {
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

export class ModifyCommonBandwidthPackageIpBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCommonBandwidthPackageIpBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCommonBandwidthPackageIpBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackagePayTypeRequest extends $tea.Model {
  bandwidthPackageId?: string;
  payType?: string;
  pricingCycle?: string;
  duration?: number;
  autoPay?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bandwidth?: string;
  kbpsBandwidth?: string;
  ownerAccount?: string;
  resourceBid?: string;
  resourceUid?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      autoPay: 'AutoPay',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bandwidth: 'Bandwidth',
      kbpsBandwidth: 'KbpsBandwidth',
      ownerAccount: 'OwnerAccount',
      resourceBid: 'ResourceBid',
      resourceUid: 'ResourceUid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      payType: 'string',
      pricingCycle: 'string',
      duration: 'number',
      autoPay: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bandwidth: 'string',
      kbpsBandwidth: 'string',
      ownerAccount: 'string',
      resourceBid: 'string',
      resourceUid: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackagePayTypeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  orderId?: number;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      orderId: 'OrderId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      orderId: 'number',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackagePayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCommonBandwidthPackagePayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCommonBandwidthPackagePayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageSpecRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  bandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      bandwidth: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCommonBandwidthPackageSpecResponseBody extends $tea.Model {
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

export class ModifyCommonBandwidthPackageSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCommonBandwidthPackageSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCommonBandwidthPackageSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomerGatewayAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  customerGatewayId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      customerGatewayId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomerGatewayAttributeResponseBody extends $tea.Model {
  description?: string;
  requestId?: string;
  customerGatewayId?: string;
  createTime?: number;
  ipAddress?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      customerGatewayId: 'CustomerGatewayId',
      createTime: 'CreateTime',
      ipAddress: 'IpAddress',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      customerGatewayId: 'string',
      createTime: 'number',
      ipAddress: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomerGatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCustomerGatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCustomerGatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEipAddressAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  allocationId?: string;
  bandwidth?: string;
  regionId?: string;
  name?: string;
  description?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      allocationId: 'string',
      bandwidth: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEipAddressAttributeResponseBody extends $tea.Model {
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

export class ModifyEipAddressAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyEipAddressAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEipAddressAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressCloudConnectionAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  description?: string;
  regionId?: string;
  name?: string;
  eccId?: string;
  bgpAs?: string;
  peIp?: string;
  ceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      description: 'Description',
      regionId: 'RegionId',
      name: 'Name',
      eccId: 'EccId',
      bgpAs: 'BgpAs',
      peIp: 'PeIp',
      ceIp: 'CeIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      description: 'string',
      regionId: 'string',
      name: 'string',
      eccId: 'string',
      bgpAs: 'string',
      peIp: 'string',
      ceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressCloudConnectionAttributeResponseBody extends $tea.Model {
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

export class ModifyExpressCloudConnectionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyExpressCloudConnectionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyExpressCloudConnectionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressCloudConnectionBandwidthRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  bandwidth?: string;
  eccId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bandwidth: 'Bandwidth',
      eccId: 'EccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      bandwidth: 'string',
      eccId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExpressCloudConnectionBandwidthResponseBody extends $tea.Model {
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

export class ModifyExpressCloudConnectionBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyExpressCloudConnectionBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyExpressCloudConnectionBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  flowLogId?: string;
  flowLogName?: string;
  description?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      description: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeResponseBody extends $tea.Model {
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowLogAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowLogAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowLogAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyForwardEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  forwardTableId?: string;
  forwardEntryId?: string;
  externalIp?: string;
  externalPort?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  forwardEntryName?: string;
  regionId?: string;
  clientToken?: string;
  portBreak?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      forwardTableId: 'ForwardTableId',
      forwardEntryId: 'ForwardEntryId',
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      forwardEntryName: 'ForwardEntryName',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      portBreak: 'PortBreak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      forwardTableId: 'string',
      forwardEntryId: 'string',
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      forwardEntryName: 'string',
      regionId: 'string',
      clientToken: 'string',
      portBreak: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyForwardEntryResponseBody extends $tea.Model {
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

export class ModifyForwardEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyForwardEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyForwardEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalAccelerationInstanceAttributesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  name?: string;
  description?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      name: 'Name',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      name: 'string',
      description: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalAccelerationInstanceAttributesResponseBody extends $tea.Model {
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

export class ModifyGlobalAccelerationInstanceAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyGlobalAccelerationInstanceAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGlobalAccelerationInstanceAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalAccelerationInstanceSpecRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  bandwidth?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      bandwidth: 'Bandwidth',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      bandwidth: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalAccelerationInstanceSpecResponseBody extends $tea.Model {
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

export class ModifyGlobalAccelerationInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyGlobalAccelerationInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGlobalAccelerationInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHaVipAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  regionId?: string;
  haVipId?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHaVipAttributeResponseBody extends $tea.Model {
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

export class ModifyHaVipAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHaVipAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHaVipAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  pricingCycle?: string;
  duration?: number;
  instanceType?: string;
  clientToken?: string;
  renewalStatus?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      instanceType: 'InstanceType',
      clientToken: 'ClientToken',
      renewalStatus: 'RenewalStatus',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      pricingCycle: 'string',
      duration: 'number',
      instanceType: 'string',
      clientToken: 'string',
      renewalStatus: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceAutoRenewalAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAutoRenewalAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAutoRenewalAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6AddressAttributeRequest extends $tea.Model {
  regionId?: string;
  ipv6AddressId?: string;
  name?: string;
  description?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6AddressId: 'Ipv6AddressId',
      name: 'Name',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6AddressId: 'string',
      name: 'string',
      description: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6AddressAttributeResponseBody extends $tea.Model {
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

export class ModifyIpv6AddressAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpv6AddressAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpv6AddressAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6GatewayAttributeRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  name?: string;
  description?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      name: 'Name',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      name: 'string',
      description: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6GatewayAttributeResponseBody extends $tea.Model {
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

export class ModifyIpv6GatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpv6GatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpv6GatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6GatewaySpecRequest extends $tea.Model {
  regionId?: string;
  ipv6GatewayId?: string;
  spec?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6GatewayId: 'Ipv6GatewayId',
      spec: 'Spec',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6GatewayId: 'string',
      spec: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6GatewaySpecResponseBody extends $tea.Model {
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

export class ModifyIpv6GatewaySpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpv6GatewaySpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpv6GatewaySpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6InternetBandwidthRequest extends $tea.Model {
  regionId?: string;
  ipv6AddressId?: string;
  ipv6InternetBandwidthId?: string;
  bandwidth?: number;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipv6AddressId: 'string',
      ipv6InternetBandwidthId: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpv6InternetBandwidthResponseBody extends $tea.Model {
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

export class ModifyIpv6InternetBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpv6InternetBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpv6InternetBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorAclAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  aclId?: string;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      aclId: 'AclId',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      aclId: 'string',
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorAclAttributeResponseBody extends $tea.Model {
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

export class ModifyIPv6TranslatorAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIPv6TranslatorAclAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIPv6TranslatorAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorAclListEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  aclId?: string;
  aclEntryId?: string;
  aclEntryComment?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntryId: 'AclEntryId',
      aclEntryComment: 'AclEntryComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      aclId: 'string',
      aclEntryId: 'string',
      aclEntryComment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorAclListEntryResponseBody extends $tea.Model {
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

export class ModifyIPv6TranslatorAclListEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIPv6TranslatorAclListEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIPv6TranslatorAclListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  ipv6TranslatorId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      ipv6TranslatorId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorAttributeResponseBody extends $tea.Model {
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

export class ModifyIPv6TranslatorAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIPv6TranslatorAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIPv6TranslatorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorBandwidthRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  ipv6TranslatorId?: string;
  bandwidth?: number;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      bandwidth: 'Bandwidth',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      ipv6TranslatorId: 'string',
      bandwidth: 'number',
      autoPay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorBandwidthResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIPv6TranslatorBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIPv6TranslatorBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  ipv6TranslatorEntryId?: string;
  entryName?: string;
  entryDescription?: string;
  allocateIpv6Port?: number;
  backendIpv4Addr?: string;
  backendIpv4Port?: number;
  transProtocol?: string;
  entryBandwidth?: number;
  aclStatus?: string;
  aclType?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      entryName: 'EntryName',
      entryDescription: 'EntryDescription',
      allocateIpv6Port: 'AllocateIpv6Port',
      backendIpv4Addr: 'BackendIpv4Addr',
      backendIpv4Port: 'BackendIpv4Port',
      transProtocol: 'TransProtocol',
      entryBandwidth: 'EntryBandwidth',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      ipv6TranslatorEntryId: 'string',
      entryName: 'string',
      entryDescription: 'string',
      allocateIpv6Port: 'number',
      backendIpv4Addr: 'string',
      backendIpv4Port: 'number',
      transProtocol: 'string',
      entryBandwidth: 'number',
      aclStatus: 'string',
      aclType: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIPv6TranslatorEntryResponseBody extends $tea.Model {
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

export class ModifyIPv6TranslatorEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIPv6TranslatorEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIPv6TranslatorEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatGatewayAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  natGatewayId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      natGatewayId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatGatewayAttributeResponseBody extends $tea.Model {
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

export class ModifyNatGatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNatGatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNatGatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatGatewaySpecRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  natGatewayId?: string;
  spec?: string;
  autoPay?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      spec: 'Spec',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      natGatewayId: 'string',
      spec: 'string',
      autoPay: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatGatewaySpecResponseBody extends $tea.Model {
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

export class ModifyNatGatewaySpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNatGatewaySpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNatGatewaySpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkAclAttributesRequest extends $tea.Model {
  networkAclId?: string;
  networkAclName?: string;
  description?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      networkAclName: 'NetworkAclName',
      description: 'Description',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      networkAclName: 'string',
      description: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkAclAttributesResponseBody extends $tea.Model {
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

export class ModifyNetworkAclAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNetworkAclAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNetworkAclAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteEntryRequest extends $tea.Model {
  regionId?: string;
  routeEntryName?: string;
  routeEntryId?: string;
  description?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  ownerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeEntryName: 'RouteEntryName',
      routeEntryId: 'RouteEntryId',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ownerAccount: 'OwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeEntryName: 'string',
      routeEntryId: 'string',
      description: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      ownerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteEntryResponseBody extends $tea.Model {
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

export class ModifyRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  routerInterfaceId?: string;
  name?: string;
  description?: string;
  oppositeInterfaceId?: string;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  oppositeInterfaceOwnerId?: number;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  hcThreshold?: number;
  hcRate?: number;
  deleteHealthCheckIp?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      name: 'Name',
      description: 'Description',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      hcThreshold: 'HcThreshold',
      hcRate: 'HcRate',
      deleteHealthCheckIp: 'DeleteHealthCheckIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      routerInterfaceId: 'string',
      name: 'string',
      description: 'string',
      oppositeInterfaceId: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      oppositeInterfaceOwnerId: 'number',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      hcThreshold: 'number',
      hcRate: 'number',
      deleteHealthCheckIp: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceAttributeResponseBody extends $tea.Model {
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

export class ModifyRouterInterfaceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRouterInterfaceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRouterInterfaceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceSpecRequest extends $tea.Model {
  regionId?: string;
  routerInterfaceId?: string;
  spec?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routerInterfaceId: 'RouterInterfaceId',
      spec: 'Spec',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routerInterfaceId: 'string',
      spec: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceSpecResponseBody extends $tea.Model {
  requestId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouterInterfaceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRouterInterfaceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRouterInterfaceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteTableAttributesRequest extends $tea.Model {
  routeTableId?: string;
  routeTableName?: string;
  description?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  bandwidth?: string;
  kbpsBandwidth?: string;
  ownerAccount?: string;
  resourceBid?: string;
  resourceUid?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      bandwidth: 'Bandwidth',
      kbpsBandwidth: 'KbpsBandwidth',
      ownerAccount: 'OwnerAccount',
      resourceBid: 'ResourceBid',
      resourceUid: 'ResourceUid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: 'string',
      routeTableName: 'string',
      description: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      bandwidth: 'string',
      kbpsBandwidth: 'string',
      ownerAccount: 'string',
      resourceBid: 'string',
      resourceUid: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRouteTableAttributesResponseBody extends $tea.Model {
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

export class ModifyRouteTableAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRouteTableAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRouteTableAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySnatEntryRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  snatTableId?: string;
  snatEntryId?: string;
  snatIp?: string;
  snatEntryName?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      snatTableId: 'SnatTableId',
      snatEntryId: 'SnatEntryId',
      snatIp: 'SnatIp',
      snatEntryName: 'SnatEntryName',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      snatTableId: 'string',
      snatEntryId: 'string',
      snatIp: 'string',
      snatEntryName: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySnatEntryResponseBody extends $tea.Model {
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

export class ModifySnatEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySnatEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySnatEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySslVpnClientCertRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  sslVpnClientCertId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      sslVpnClientCertId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySslVpnClientCertResponseBody extends $tea.Model {
  requestId?: string;
  sslVpnClientCertId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sslVpnClientCertId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySslVpnClientCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySslVpnClientCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySslVpnClientCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySslVpnServerRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  sslVpnServerId?: string;
  name?: string;
  clientIpPool?: string;
  localSubnet?: string;
  proto?: string;
  cipher?: string;
  port?: number;
  compress?: boolean;
  enableMultiFactorAuth?: boolean;
  IDaaSInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      sslVpnServerId: 'SslVpnServerId',
      name: 'Name',
      clientIpPool: 'ClientIpPool',
      localSubnet: 'LocalSubnet',
      proto: 'Proto',
      cipher: 'Cipher',
      port: 'Port',
      compress: 'Compress',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      IDaaSInstanceId: 'IDaaSInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      sslVpnServerId: 'string',
      name: 'string',
      clientIpPool: 'string',
      localSubnet: 'string',
      proto: 'string',
      cipher: 'string',
      port: 'number',
      compress: 'boolean',
      enableMultiFactorAuth: 'boolean',
      IDaaSInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySslVpnServerResponseBody extends $tea.Model {
  compress?: boolean;
  localSubnet?: string;
  connections?: number;
  clientIpPool?: string;
  IDaaSInstanceId?: string;
  requestId?: string;
  maxConnections?: number;
  enableMultiFactorAuth?: boolean;
  createTime?: number;
  port?: number;
  sslVpnServerId?: string;
  name?: string;
  internetIp?: string;
  proto?: string;
  vpnGatewayId?: string;
  regionId?: string;
  cipher?: string;
  static names(): { [key: string]: string } {
    return {
      compress: 'Compress',
      localSubnet: 'LocalSubnet',
      connections: 'Connections',
      clientIpPool: 'ClientIpPool',
      IDaaSInstanceId: 'IDaaSInstanceId',
      requestId: 'RequestId',
      maxConnections: 'MaxConnections',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      createTime: 'CreateTime',
      port: 'Port',
      sslVpnServerId: 'SslVpnServerId',
      name: 'Name',
      internetIp: 'InternetIp',
      proto: 'Proto',
      vpnGatewayId: 'VpnGatewayId',
      regionId: 'RegionId',
      cipher: 'Cipher',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compress: 'boolean',
      localSubnet: 'string',
      connections: 'number',
      clientIpPool: 'string',
      IDaaSInstanceId: 'string',
      requestId: 'string',
      maxConnections: 'number',
      enableMultiFactorAuth: 'boolean',
      createTime: 'number',
      port: 'number',
      sslVpnServerId: 'string',
      name: 'string',
      internetIp: 'string',
      proto: 'string',
      vpnGatewayId: 'string',
      regionId: 'string',
      cipher: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySslVpnServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySslVpnServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySslVpnServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualBorderRouterAttributeRequest extends $tea.Model {
  regionId?: string;
  vbrId?: string;
  vlanId?: number;
  circuitCode?: string;
  localGatewayIp?: string;
  peerGatewayIp?: string;
  peeringSubnetMask?: string;
  minTxInterval?: number;
  minRxInterval?: number;
  detectMultiplier?: number;
  description?: string;
  name?: string;
  associatedPhysicalConnections?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  localIpv6GatewayIp?: string;
  peerIpv6GatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  enableIpv6?: boolean;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
      circuitCode: 'CircuitCode',
      localGatewayIp: 'LocalGatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      minTxInterval: 'MinTxInterval',
      minRxInterval: 'MinRxInterval',
      detectMultiplier: 'DetectMultiplier',
      description: 'Description',
      name: 'Name',
      associatedPhysicalConnections: 'AssociatedPhysicalConnections',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      enableIpv6: 'EnableIpv6',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      vlanId: 'number',
      circuitCode: 'string',
      localGatewayIp: 'string',
      peerGatewayIp: 'string',
      peeringSubnetMask: 'string',
      minTxInterval: 'number',
      minRxInterval: 'number',
      detectMultiplier: 'number',
      description: 'string',
      name: 'string',
      associatedPhysicalConnections: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      localIpv6GatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      enableIpv6: 'boolean',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVirtualBorderRouterAttributeResponseBody extends $tea.Model {
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

export class ModifyVirtualBorderRouterAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVirtualBorderRouterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVirtualBorderRouterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vpcId?: string;
  description?: string;
  vpcName?: string;
  cidrBlock?: string;
  regionId?: string;
  enableIPv6?: boolean;
  ownerAccount?: string;
  ipv6CidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      description: 'Description',
      vpcName: 'VpcName',
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      enableIPv6: 'EnableIPv6',
      ownerAccount: 'OwnerAccount',
      ipv6CidrBlock: 'Ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      description: 'string',
      vpcName: 'string',
      cidrBlock: 'string',
      regionId: 'string',
      enableIPv6: 'boolean',
      ownerAccount: 'string',
      ipv6CidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcAttributeResponseBody extends $tea.Model {
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

export class ModifyVpcAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVpcAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpcAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnConnectionId?: string;
  name?: string;
  localSubnet?: string;
  remoteSubnet?: string;
  effectImmediately?: boolean;
  ikeConfig?: string;
  ipsecConfig?: string;
  healthCheckConfig?: string;
  autoConfigRoute?: boolean;
  enableDpd?: boolean;
  enableNatTraversal?: boolean;
  bgpConfig?: string;
  remoteCaCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnConnectionId: 'VpnConnectionId',
      name: 'Name',
      localSubnet: 'LocalSubnet',
      remoteSubnet: 'RemoteSubnet',
      effectImmediately: 'EffectImmediately',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      healthCheckConfig: 'HealthCheckConfig',
      autoConfigRoute: 'AutoConfigRoute',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      bgpConfig: 'BgpConfig',
      remoteCaCertificate: 'RemoteCaCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnConnectionId: 'string',
      name: 'string',
      localSubnet: 'string',
      remoteSubnet: 'string',
      effectImmediately: 'boolean',
      ikeConfig: 'string',
      ipsecConfig: 'string',
      healthCheckConfig: 'string',
      autoConfigRoute: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      bgpConfig: 'string',
      remoteCaCertificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBody extends $tea.Model {
  localSubnet?: string;
  description?: string;
  requestId?: string;
  customerGatewayId?: string;
  createTime?: number;
  name?: string;
  effectImmediately?: boolean;
  remoteSubnet?: string;
  vcoHealthCheck?: ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck;
  vpnGatewayId?: string;
  ipsecConfig?: ModifyVpnConnectionAttributeResponseBodyIpsecConfig;
  vpnConnectionId?: string;
  enableNatTraversal?: boolean;
  enableDpd?: boolean;
  ikeConfig?: ModifyVpnConnectionAttributeResponseBodyIkeConfig;
  vpnBgpConfig?: ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig;
  static names(): { [key: string]: string } {
    return {
      localSubnet: 'LocalSubnet',
      description: 'Description',
      requestId: 'RequestId',
      customerGatewayId: 'CustomerGatewayId',
      createTime: 'CreateTime',
      name: 'Name',
      effectImmediately: 'EffectImmediately',
      remoteSubnet: 'RemoteSubnet',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnGatewayId: 'VpnGatewayId',
      ipsecConfig: 'IpsecConfig',
      vpnConnectionId: 'VpnConnectionId',
      enableNatTraversal: 'EnableNatTraversal',
      enableDpd: 'EnableDpd',
      ikeConfig: 'IkeConfig',
      vpnBgpConfig: 'VpnBgpConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localSubnet: 'string',
      description: 'string',
      requestId: 'string',
      customerGatewayId: 'string',
      createTime: 'number',
      name: 'string',
      effectImmediately: 'boolean',
      remoteSubnet: 'string',
      vcoHealthCheck: ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck,
      vpnGatewayId: 'string',
      ipsecConfig: ModifyVpnConnectionAttributeResponseBodyIpsecConfig,
      vpnConnectionId: 'string',
      enableNatTraversal: 'boolean',
      enableDpd: 'boolean',
      ikeConfig: ModifyVpnConnectionAttributeResponseBodyIkeConfig,
      vpnBgpConfig: ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVpnConnectionAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpnConnectionAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnGatewayAttributeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  name?: string;
  description?: string;
  autoPropagate?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      name: 'Name',
      description: 'Description',
      autoPropagate: 'AutoPropagate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      name: 'string',
      description: 'string',
      autoPropagate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnGatewayAttributeResponseBody extends $tea.Model {
  status?: string;
  description?: string;
  enableBgp?: boolean;
  endTime?: number;
  requestId?: string;
  createTime?: number;
  vSwitchId?: string;
  autoPropagate?: boolean;
  intranetIp?: string;
  businessStatus?: string;
  name?: string;
  vpcId?: string;
  internetIp?: string;
  vpnGatewayId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      enableBgp: 'EnableBgp',
      endTime: 'EndTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      vSwitchId: 'VSwitchId',
      autoPropagate: 'AutoPropagate',
      intranetIp: 'IntranetIp',
      businessStatus: 'BusinessStatus',
      name: 'Name',
      vpcId: 'VpcId',
      internetIp: 'InternetIp',
      vpnGatewayId: 'VpnGatewayId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      enableBgp: 'boolean',
      endTime: 'number',
      requestId: 'string',
      createTime: 'number',
      vSwitchId: 'string',
      autoPropagate: 'boolean',
      intranetIp: 'string',
      businessStatus: 'string',
      name: 'string',
      vpcId: 'string',
      internetIp: 'string',
      vpnGatewayId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnGatewayAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVpnGatewayAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpnGatewayAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnPbrRouteEntryWeightRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeSource?: string;
  routeDest?: string;
  nextHop?: string;
  weight?: number;
  newWeight?: number;
  overlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeSource: 'RouteSource',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      weight: 'Weight',
      newWeight: 'NewWeight',
      overlayMode: 'OverlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeSource: 'string',
      routeDest: 'string',
      nextHop: 'string',
      weight: 'number',
      newWeight: 'number',
      overlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnPbrRouteEntryWeightResponseBody extends $tea.Model {
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

export class ModifyVpnPbrRouteEntryWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVpnPbrRouteEntryWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpnPbrRouteEntryWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnRouteEntryWeightRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeDest?: string;
  nextHop?: string;
  weight?: number;
  newWeight?: number;
  overlayMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      weight: 'Weight',
      newWeight: 'NewWeight',
      overlayMode: 'OverlayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeDest: 'string',
      nextHop: 'string',
      weight: 'number',
      newWeight: 'number',
      overlayMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnRouteEntryWeightResponseBody extends $tea.Model {
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

export class ModifyVpnRouteEntryWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVpnRouteEntryWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpnRouteEntryWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVRouterAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  VRouterId?: string;
  VRouterName?: string;
  description?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      VRouterId: 'VRouterId',
      VRouterName: 'VRouterName',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      VRouterId: 'string',
      VRouterName: 'string',
      description: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVRouterAttributeResponseBody extends $tea.Model {
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

export class ModifyVRouterAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVRouterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVRouterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVSwitchAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  vSwitchId?: string;
  vSwitchName?: string;
  regionId?: string;
  description?: string;
  ipv6CidrBlock?: number;
  ownerAccount?: string;
  enableIPv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      regionId: 'RegionId',
      description: 'Description',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ownerAccount: 'OwnerAccount',
      enableIPv6: 'EnableIPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vSwitchName: 'string',
      regionId: 'string',
      description: 'string',
      ipv6CidrBlock: 'number',
      ownerAccount: 'string',
      enableIPv6: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVSwitchAttributeResponseBody extends $tea.Model {
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

export class ModifyVSwitchAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVSwitchAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVSwitchAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceId?: string;
  resourceType?: string;
  newResourceGroupId?: string;
  regionId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceId: 'string',
      resourceType: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      ownerAccount: 'string',
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
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVpnRouteEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  vpnGatewayId?: string;
  routeDest?: string;
  nextHop?: string;
  routeType?: string;
  publishVpc?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      vpnGatewayId: 'VpnGatewayId',
      routeDest: 'RouteDest',
      nextHop: 'NextHop',
      routeType: 'RouteType',
      publishVpc: 'PublishVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
      vpnGatewayId: 'string',
      routeDest: 'string',
      nextHop: 'string',
      routeType: 'string',
      publishVpc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVpnRouteEntryResponseBody extends $tea.Model {
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

export class PublishVpnRouteEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishVpnRouteEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishVpnRouteEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverVirtualBorderRouterRequest extends $tea.Model {
  regionId?: string;
  vbrId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverVirtualBorderRouterResponseBody extends $tea.Model {
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

export class RecoverVirtualBorderRouterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecoverVirtualBorderRouterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecoverVirtualBorderRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  allocationId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      allocationId: 'string',
      ownerAccount: 'string',
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

export class ReleaseEipSegmentAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  segmentInstanceId?: string;
  ownerAccount?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      segmentInstanceId: 'SegmentInstanceId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      segmentInstanceId: 'string',
      ownerAccount: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEipSegmentAddressResponseBody extends $tea.Model {
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

export class ReleaseEipSegmentAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseEipSegmentAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseEipSegmentAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCommonBandwidthPackageIpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  bandwidthPackageId?: string;
  ipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      ipInstanceId: 'IpInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      bandwidthPackageId: 'string',
      ipInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCommonBandwidthPackageIpResponseBody extends $tea.Model {
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

export class RemoveCommonBandwidthPackageIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveCommonBandwidthPackageIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveCommonBandwidthPackageIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGlobalAccelerationInstanceIpRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  ipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipInstanceId: 'IpInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      ipInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveGlobalAccelerationInstanceIpResponseBody extends $tea.Model {
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

export class RemoveGlobalAccelerationInstanceIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveGlobalAccelerationInstanceIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveGlobalAccelerationInstanceIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIPv6TranslatorAclListEntryRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  aclId?: string;
  aclEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntryId: 'AclEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      aclId: 'string',
      aclEntryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveIPv6TranslatorAclListEntryResponseBody extends $tea.Model {
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

export class RemoveIPv6TranslatorAclListEntryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveIPv6TranslatorAclListEntryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveIPv6TranslatorAclListEntryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  pricingCycle?: string;
  duration?: number;
  instanceType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      pricingCycle: 'string',
      duration: 'number',
      instanceType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceVpcDhcpOptionsSetRequest extends $tea.Model {
  regionId?: string;
  dhcpOptionsSetId?: string;
  vpcId?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      vpcId: 'VpcId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dhcpOptionsSetId: 'string',
      vpcId: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceVpcDhcpOptionsSetResponseBody extends $tea.Model {
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

export class ReplaceVpcDhcpOptionsSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceVpcDhcpOptionsSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceVpcDhcpOptionsSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromCenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  instanceId?: string;
  instanceType?: string;
  cenId?: string;
  cenOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      cenId: 'string',
      cenOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeInstanceFromCenResponseBody extends $tea.Model {
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

export class RevokeInstanceFromCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeInstanceFromCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeInstanceFromCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceType?: string;
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminatePhysicalConnectionRequest extends $tea.Model {
  regionId?: string;
  physicalConnectionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      physicalConnectionId: 'PhysicalConnectionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      physicalConnectionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminatePhysicalConnectionResponseBody extends $tea.Model {
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

export class TerminatePhysicalConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TerminatePhysicalConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TerminatePhysicalConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateVirtualBorderRouterRequest extends $tea.Model {
  regionId?: string;
  vbrId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateVirtualBorderRouterResponseBody extends $tea.Model {
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

export class TerminateVirtualBorderRouterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TerminateVirtualBorderRouterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TerminateVirtualBorderRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateEipAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  force?: boolean;
  regionId?: string;
  allocationId?: string;
  instanceId?: string;
  ownerAccount?: string;
  instanceType?: string;
  privateIpAddress?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      force: 'Force',
      regionId: 'RegionId',
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      instanceType: 'InstanceType',
      privateIpAddress: 'PrivateIpAddress',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      force: 'boolean',
      regionId: 'string',
      allocationId: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      instanceType: 'string',
      privateIpAddress: 'string',
      clientToken: 'string',
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

export class UnassociateGlobalAccelerationInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  globalAccelerationInstanceId?: string;
  ownerAccount?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ownerAccount: 'OwnerAccount',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      globalAccelerationInstanceId: 'string',
      ownerAccount: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateGlobalAccelerationInstanceResponseBody extends $tea.Model {
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

export class UnassociateGlobalAccelerationInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateGlobalAccelerationInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateGlobalAccelerationInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateHaVipRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  regionId?: string;
  haVipId?: string;
  instanceId?: string;
  force?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      haVipId: 'HaVipId',
      instanceId: 'InstanceId',
      force: 'Force',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      regionId: 'string',
      haVipId: 'string',
      instanceId: 'string',
      force: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateHaVipResponseBody extends $tea.Model {
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

export class UnassociateHaVipResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateHaVipResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateHaVipResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateNetworkAclRequest extends $tea.Model {
  networkAclId?: string;
  regionId?: string;
  resource?: UnassociateNetworkAclRequestResource[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
      regionId: 'string',
      resource: { 'type': 'array', 'itemType': UnassociateNetworkAclRequestResource },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateNetworkAclResponseBody extends $tea.Model {
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

export class UnassociateNetworkAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateNetworkAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateNetworkAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociatePhysicalConnectionFromVirtualBorderRouterRequest extends $tea.Model {
  regionId?: string;
  vbrId?: string;
  physicalConnectionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vbrId: 'VbrId',
      physicalConnectionId: 'PhysicalConnectionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vbrId: 'string',
      physicalConnectionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociatePhysicalConnectionFromVirtualBorderRouterResponseBody extends $tea.Model {
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

export class UnassociatePhysicalConnectionFromVirtualBorderRouterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociatePhysicalConnectionFromVirtualBorderRouterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociatePhysicalConnectionFromVirtualBorderRouterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateRouteTableRequest extends $tea.Model {
  regionId?: string;
  routeTableId?: string;
  vSwitchId?: string;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeTableId: 'RouteTableId',
      vSwitchId: 'VSwitchId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeTableId: 'string',
      vSwitchId: 'string',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateRouteTableResponseBody extends $tea.Model {
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

export class UnassociateRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateVpcCidrBlockRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  secondaryCidrBlock?: string;
  IPv6CidrBlock?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
      IPv6CidrBlock: 'IPv6CidrBlock',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      secondaryCidrBlock: 'string',
      IPv6CidrBlock: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnassociateVpcCidrBlockResponseBody extends $tea.Model {
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

export class UnassociateVpcCidrBlockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnassociateVpcCidrBlockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnassociateVpcCidrBlockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  regionId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  tag?: UnTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      regionId: 'RegionId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      regionId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': UnTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $tea.Model {
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

export class UnTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDhcpOptionsSetAttributeRequest extends $tea.Model {
  regionId?: string;
  dhcpOptionsSetId?: string;
  domainNameServers?: string;
  domainName?: string;
  dhcpOptionsSetName?: string;
  dhcpOptionsSetDescription?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      domainNameServers: 'DomainNameServers',
      domainName: 'DomainName',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dhcpOptionsSetId: 'string',
      domainNameServers: 'string',
      domainName: 'string',
      dhcpOptionsSetName: 'string',
      dhcpOptionsSetDescription: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDhcpOptionsSetAttributeResponseBody extends $tea.Model {
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

export class UpdateDhcpOptionsSetAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDhcpOptionsSetAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDhcpOptionsSetAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpsecServerRequest extends $tea.Model {
  regionId?: string;
  ipsecServerId?: string;
  localSubnet?: string;
  clientIpPool?: string;
  ipsecServerName?: string;
  effectImmediately?: boolean;
  ikeConfig?: string;
  ipsecConfig?: string;
  pskEnabled?: boolean;
  psk?: string;
  multiFactorAuthEnabled?: boolean;
  IDaaSInstanceId?: string;
  callerBid?: string;
  clientToken?: string;
  dryRun?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipsecServerId: 'IpsecServerId',
      localSubnet: 'LocalSubnet',
      clientIpPool: 'ClientIpPool',
      ipsecServerName: 'IpsecServerName',
      effectImmediately: 'EffectImmediately',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      pskEnabled: 'PskEnabled',
      psk: 'Psk',
      multiFactorAuthEnabled: 'MultiFactorAuthEnabled',
      IDaaSInstanceId: 'IDaaSInstanceId',
      callerBid: 'callerBid',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipsecServerId: 'string',
      localSubnet: 'string',
      clientIpPool: 'string',
      ipsecServerName: 'string',
      effectImmediately: 'boolean',
      ikeConfig: 'string',
      ipsecConfig: 'string',
      pskEnabled: 'boolean',
      psk: 'string',
      multiFactorAuthEnabled: 'boolean',
      IDaaSInstanceId: 'string',
      callerBid: 'string',
      clientToken: 'string',
      dryRun: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpsecServerResponseBody extends $tea.Model {
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

export class UpdateIpsecServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpsecServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpsecServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNatGatewayNatTypeRequest extends $tea.Model {
  regionId?: string;
  natGatewayId?: string;
  vSwitchId?: string;
  natType?: string;
  dryRun?: boolean;
  clientToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      natGatewayId: 'NatGatewayId',
      vSwitchId: 'VSwitchId',
      natType: 'NatType',
      dryRun: 'DryRun',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      natGatewayId: 'string',
      vSwitchId: 'string',
      natType: 'string',
      dryRun: 'boolean',
      clientToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNatGatewayNatTypeResponseBody extends $tea.Model {
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

export class UpdateNatGatewayNatTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNatGatewayNatTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNatGatewayNatTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAclEntriesRequest extends $tea.Model {
  updateIngressAclEntries?: boolean;
  updateEgressAclEntries?: boolean;
  networkAclId?: string;
  regionId?: string;
  ingressAclEntries?: UpdateNetworkAclEntriesRequestIngressAclEntries[];
  egressAclEntries?: UpdateNetworkAclEntriesRequestEgressAclEntries[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerId?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      updateIngressAclEntries: 'UpdateIngressAclEntries',
      updateEgressAclEntries: 'UpdateEgressAclEntries',
      networkAclId: 'NetworkAclId',
      regionId: 'RegionId',
      ingressAclEntries: 'IngressAclEntries',
      egressAclEntries: 'EgressAclEntries',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateIngressAclEntries: 'boolean',
      updateEgressAclEntries: 'boolean',
      networkAclId: 'string',
      regionId: 'string',
      ingressAclEntries: { 'type': 'array', 'itemType': UpdateNetworkAclEntriesRequestIngressAclEntries },
      egressAclEntries: { 'type': 'array', 'itemType': UpdateNetworkAclEntriesRequestEgressAclEntries },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerId: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAclEntriesResponseBody extends $tea.Model {
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

export class UpdateNetworkAclEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNetworkAclEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNetworkAclEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualBorderBandwidthRequest extends $tea.Model {
  regionId?: string;
  virtualBorderRouterId?: string;
  bandwidth?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      virtualBorderRouterId: 'VirtualBorderRouterId',
      bandwidth: 'Bandwidth',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      virtualBorderRouterId: 'string',
      bandwidth: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualBorderBandwidthResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualBorderBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVirtualBorderBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVirtualBorderBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkAclRequestResource extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayRequestBandwidthPackage extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBodySnatTableIds extends $tea.Model {
  snatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBodyForwardTableIds extends $tea.Model {
  forwardTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  networkAclEntryName?: string;
  policy?: string;
  description?: string;
  protocol?: string;
  destinationCidrIp?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      description: 'Description',
      protocol: 'Protocol',
      destinationCidrIp: 'DestinationCidrIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      description: 'string',
      protocol: 'string',
      destinationCidrIp: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries extends $tea.Model {
  egressAclEntry?: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  networkAclEntryName?: string;
  policy?: string;
  description?: string;
  sourceCidrIp?: string;
  protocol?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      description: 'Description',
      sourceCidrIp: 'SourceCidrIp',
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      description: 'string',
      sourceCidrIp: 'string',
      protocol: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries extends $tea.Model {
  ingressAclEntry?: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttributeResourcesResource extends $tea.Model {
  status?: string;
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttributeResources extends $tea.Model {
  resource?: CreateNetworkAclResponseBodyNetworkAclAttributeResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': CreateNetworkAclResponseBodyNetworkAclAttributeResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAclResponseBodyNetworkAclAttribute extends $tea.Model {
  status?: string;
  vpcId?: string;
  creationTime?: string;
  description?: string;
  egressAclEntries?: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries;
  networkAclName?: string;
  ingressAclEntries?: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries;
  networkAclId?: string;
  resources?: CreateNetworkAclResponseBodyNetworkAclAttributeResources;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      networkAclName: 'NetworkAclName',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      resources: 'Resources',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      creationTime: 'string',
      description: 'string',
      egressAclEntries: CreateNetworkAclResponseBodyNetworkAclAttributeEgressAclEntries,
      networkAclName: 'string',
      ingressAclEntries: CreateNetworkAclResponseBodyNetworkAclAttributeIngressAclEntries,
      networkAclId: 'string',
      resources: CreateNetworkAclResponseBodyNetworkAclAttributeResources,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntryRequestNextHopList extends $tea.Model {
  nextHopId?: string;
  weight?: number;
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      weight: 'Weight',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      weight: 'number',
      nextHopType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryRequestNextHopList extends $tea.Model {
  nextHopId?: string;
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsRequestFilter extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel extends $tea.Model {
  featureValue?: string;
  featureKey?: string;
  static names(): { [key: string]: string } {
    return {
      featureValue: 'FeatureValue',
      featureKey: 'FeatureKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureValue: 'string',
      featureKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels extends $tea.Model {
  accessPointFeatureModel?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel[];
  static names(): { [key: string]: string } {
    return {
      accessPointFeatureModel: 'AccessPointFeatureModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointFeatureModel: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointType extends $tea.Model {
  status?: string;
  type?: string;
  hostOperator?: string;
  description?: string;
  attachedRegionNo?: string;
  accessPointFeatureModels?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels;
  name?: string;
  accessPointId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      hostOperator: 'HostOperator',
      description: 'Description',
      attachedRegionNo: 'AttachedRegionNo',
      accessPointFeatureModels: 'AccessPointFeatureModels',
      name: 'Name',
      accessPointId: 'AccessPointId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      hostOperator: 'string',
      description: 'string',
      attachedRegionNo: 'string',
      accessPointFeatureModels: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels,
      name: 'string',
      accessPointId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointSet extends $tea.Model {
  accessPointType?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointType[];
  static names(): { [key: string]: string } {
    return {
      accessPointType: 'AccessPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointType: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup extends $tea.Model {
  status?: string;
  routerId?: string;
  bgpGroupId?: string;
  peerAsn?: string;
  localAsn?: string;
  regionId?: string;
  hold?: string;
  keepalive?: string;
  description?: string;
  ipVersion?: string;
  routeLimit?: string;
  isFake?: string;
  name?: string;
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      routerId: 'RouterId',
      bgpGroupId: 'BgpGroupId',
      peerAsn: 'PeerAsn',
      localAsn: 'LocalAsn',
      regionId: 'RegionId',
      hold: 'Hold',
      keepalive: 'Keepalive',
      description: 'Description',
      ipVersion: 'IpVersion',
      routeLimit: 'RouteLimit',
      isFake: 'IsFake',
      name: 'Name',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      routerId: 'string',
      bgpGroupId: 'string',
      peerAsn: 'string',
      localAsn: 'string',
      regionId: 'string',
      hold: 'string',
      keepalive: 'string',
      description: 'string',
      ipVersion: 'string',
      routeLimit: 'string',
      isFake: 'string',
      name: 'string',
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpGroupsResponseBodyBgpGroups extends $tea.Model {
  bgpGroup?: DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup[];
  static names(): { [key: string]: string } {
    return {
      bgpGroup: 'BgpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroup: { 'type': 'array', 'itemType': DescribeBgpGroupsResponseBodyBgpGroupsBgpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork extends $tea.Model {
  status?: string;
  vpcId?: string;
  routerId?: string;
  dstCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      routerId: 'RouterId',
      dstCidrBlock: 'DstCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      routerId: 'string',
      dstCidrBlock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpNetworksResponseBodyBgpNetworks extends $tea.Model {
  bgpNetwork?: DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork[];
  static names(): { [key: string]: string } {
    return {
      bgpNetwork: 'BgpNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpNetwork: { 'type': 'array', 'itemType': DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPeersResponseBodyBgpPeersBgpPeer extends $tea.Model {
  peerIpAddress?: string;
  status?: string;
  bgpGroupId?: string;
  routerId?: string;
  bgpStatus?: string;
  peerAsn?: string;
  bfdMultiHop?: number;
  localAsn?: string;
  regionId?: string;
  bgpPeerId?: string;
  enableBfd?: boolean;
  hold?: string;
  ipVersion?: string;
  keepalive?: string;
  description?: string;
  routeLimit?: string;
  isFake?: string;
  authKey?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      peerIpAddress: 'PeerIpAddress',
      status: 'Status',
      bgpGroupId: 'BgpGroupId',
      routerId: 'RouterId',
      bgpStatus: 'BgpStatus',
      peerAsn: 'PeerAsn',
      bfdMultiHop: 'BfdMultiHop',
      localAsn: 'LocalAsn',
      regionId: 'RegionId',
      bgpPeerId: 'BgpPeerId',
      enableBfd: 'EnableBfd',
      hold: 'Hold',
      ipVersion: 'IpVersion',
      keepalive: 'Keepalive',
      description: 'Description',
      routeLimit: 'RouteLimit',
      isFake: 'IsFake',
      authKey: 'AuthKey',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerIpAddress: 'string',
      status: 'string',
      bgpGroupId: 'string',
      routerId: 'string',
      bgpStatus: 'string',
      peerAsn: 'string',
      bfdMultiHop: 'number',
      localAsn: 'string',
      regionId: 'string',
      bgpPeerId: 'string',
      enableBfd: 'boolean',
      hold: 'string',
      ipVersion: 'string',
      keepalive: 'string',
      description: 'string',
      routeLimit: 'string',
      isFake: 'string',
      authKey: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPeersResponseBodyBgpPeers extends $tea.Model {
  bgpPeer?: DescribeBgpPeersResponseBodyBgpPeersBgpPeer[];
  static names(): { [key: string]: string } {
    return {
      bgpPeer: 'BgpPeer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeer: { 'type': 'array', 'itemType': DescribeBgpPeersResponseBodyBgpPeersBgpPeer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse extends $tea.Model {
  ipAddress?: string;
  allocationId?: string;
  bandwidthPackageIpRelationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      allocationId: 'AllocationId',
      bandwidthPackageIpRelationStatus: 'BandwidthPackageIpRelationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      allocationId: 'string',
      bandwidthPackageIpRelationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses extends $tea.Model {
  publicIpAddresse?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddresse: 'PublicIpAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddresse: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddressesPublicIpAddresse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage extends $tea.Model {
  publicIpAddresses?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses;
  creationTime?: string;
  status?: string;
  reservationActiveTime?: string;
  reservationOrderType?: string;
  deletionProtection?: boolean;
  regionId?: string;
  instanceChargeType?: string;
  ratio?: number;
  reservationInternetChargeType?: string;
  bandwidthPackageId?: string;
  serviceManaged?: number;
  bandwidth?: string;
  description?: string;
  expiredTime?: string;
  reservationBandwidth?: string;
  resourceGroupId?: string;
  internetChargeType?: string;
  businessStatus?: string;
  name?: string;
  ISP?: string;
  hasReservationData?: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddresses: 'PublicIpAddresses',
      creationTime: 'CreationTime',
      status: 'Status',
      reservationActiveTime: 'ReservationActiveTime',
      reservationOrderType: 'ReservationOrderType',
      deletionProtection: 'DeletionProtection',
      regionId: 'RegionId',
      instanceChargeType: 'InstanceChargeType',
      ratio: 'Ratio',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      bandwidthPackageId: 'BandwidthPackageId',
      serviceManaged: 'ServiceManaged',
      bandwidth: 'Bandwidth',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      reservationBandwidth: 'ReservationBandwidth',
      resourceGroupId: 'ResourceGroupId',
      internetChargeType: 'InternetChargeType',
      businessStatus: 'BusinessStatus',
      name: 'Name',
      ISP: 'ISP',
      hasReservationData: 'HasReservationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddresses: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackagePublicIpAddresses,
      creationTime: 'string',
      status: 'string',
      reservationActiveTime: 'string',
      reservationOrderType: 'string',
      deletionProtection: 'boolean',
      regionId: 'string',
      instanceChargeType: 'string',
      ratio: 'number',
      reservationInternetChargeType: 'string',
      bandwidthPackageId: 'string',
      serviceManaged: 'number',
      bandwidth: 'string',
      description: 'string',
      expiredTime: 'string',
      reservationBandwidth: 'string',
      resourceGroupId: 'string',
      internetChargeType: 'string',
      businessStatus: 'string',
      name: 'string',
      ISP: 'string',
      hasReservationData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackages extends $tea.Model {
  commonBandwidthPackage?: DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage[];
  static names(): { [key: string]: string } {
    return {
      commonBandwidthPackage: 'CommonBandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonBandwidthPackage: { 'type': 'array', 'itemType': DescribeCommonBandwidthPackagesResponseBodyCommonBandwidthPackagesCommonBandwidthPackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway extends $tea.Model {
  ipAddress?: string;
  asn?: number;
  description?: string;
  customerGatewayId?: string;
  createTime?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      asn: 'Asn',
      description: 'Description',
      customerGatewayId: 'CustomerGatewayId',
      createTime: 'CreateTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      asn: 'number',
      description: 'string',
      customerGatewayId: 'string',
      createTime: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewaysResponseBodyCustomerGateways extends $tea.Model {
  customerGateway?: DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway[];
  static names(): { [key: string]: string } {
    return {
      customerGateway: 'CustomerGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGateway: { 'type': 'array', 'itemType': DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequestFilter extends $tea.Model {
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

export class DescribeEipAddressesRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason extends $tea.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks extends $tea.Model {
  lockReason?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressAvailableRegions extends $tea.Model {
  availableRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      availableRegion: 'AvailableRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddress extends $tea.Model {
  reservationActiveTime?: string;
  status?: string;
  reservationOrderType?: string;
  allocationTime?: string;
  operationLocks?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks;
  netmode?: string;
  chargeType?: string;
  descritpion?: string;
  segmentInstanceId?: string;
  reservationInternetChargeType?: string;
  bandwidthPackageId?: string;
  ipAddress?: string;
  bandwidth?: string;
  reservationBandwidth?: string;
  eipBandwidth?: string;
  availableRegions?: DescribeEipAddressesResponseBodyEipAddressesEipAddressAvailableRegions;
  name?: string;
  instanceRegionId?: string;
  deletionProtection?: boolean;
  instanceId?: string;
  secondLimited?: boolean;
  instanceType?: string;
  HDMonitorStatus?: string;
  regionId?: string;
  bandwidthPackageBandwidth?: string;
  serviceManaged?: number;
  expiredTime?: string;
  resourceGroupId?: string;
  allocationId?: string;
  internetChargeType?: string;
  businessStatus?: string;
  bandwidthPackageType?: string;
  hasReservationData?: string;
  ISP?: string;
  static names(): { [key: string]: string } {
    return {
      reservationActiveTime: 'ReservationActiveTime',
      status: 'Status',
      reservationOrderType: 'ReservationOrderType',
      allocationTime: 'AllocationTime',
      operationLocks: 'OperationLocks',
      netmode: 'Netmode',
      chargeType: 'ChargeType',
      descritpion: 'Descritpion',
      segmentInstanceId: 'SegmentInstanceId',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      bandwidthPackageId: 'BandwidthPackageId',
      ipAddress: 'IpAddress',
      bandwidth: 'Bandwidth',
      reservationBandwidth: 'ReservationBandwidth',
      eipBandwidth: 'EipBandwidth',
      availableRegions: 'AvailableRegions',
      name: 'Name',
      instanceRegionId: 'InstanceRegionId',
      deletionProtection: 'DeletionProtection',
      instanceId: 'InstanceId',
      secondLimited: 'SecondLimited',
      instanceType: 'InstanceType',
      HDMonitorStatus: 'HDMonitorStatus',
      regionId: 'RegionId',
      bandwidthPackageBandwidth: 'BandwidthPackageBandwidth',
      serviceManaged: 'ServiceManaged',
      expiredTime: 'ExpiredTime',
      resourceGroupId: 'ResourceGroupId',
      allocationId: 'AllocationId',
      internetChargeType: 'InternetChargeType',
      businessStatus: 'BusinessStatus',
      bandwidthPackageType: 'BandwidthPackageType',
      hasReservationData: 'HasReservationData',
      ISP: 'ISP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservationActiveTime: 'string',
      status: 'string',
      reservationOrderType: 'string',
      allocationTime: 'string',
      operationLocks: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks,
      netmode: 'string',
      chargeType: 'string',
      descritpion: 'string',
      segmentInstanceId: 'string',
      reservationInternetChargeType: 'string',
      bandwidthPackageId: 'string',
      ipAddress: 'string',
      bandwidth: 'string',
      reservationBandwidth: 'string',
      eipBandwidth: 'string',
      availableRegions: DescribeEipAddressesResponseBodyEipAddressesEipAddressAvailableRegions,
      name: 'string',
      instanceRegionId: 'string',
      deletionProtection: 'boolean',
      instanceId: 'string',
      secondLimited: 'boolean',
      instanceType: 'string',
      HDMonitorStatus: 'string',
      regionId: 'string',
      bandwidthPackageBandwidth: 'string',
      serviceManaged: 'number',
      expiredTime: 'string',
      resourceGroupId: 'string',
      allocationId: 'string',
      internetChargeType: 'string',
      businessStatus: 'string',
      bandwidthPackageType: 'string',
      hasReservationData: 'string',
      ISP: 'string',
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

export class DescribeEipGatewayInfoResponseBodyEipInfosEipInfo extends $tea.Model {
  ipGw?: string;
  ipMask?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ipGw: 'IpGw',
      ipMask: 'IpMask',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipGw: 'string',
      ipMask: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipGatewayInfoResponseBodyEipInfos extends $tea.Model {
  eipInfo?: DescribeEipGatewayInfoResponseBodyEipInfosEipInfo[];
  static names(): { [key: string]: string } {
    return {
      eipInfo: 'EipInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfo: { 'type': 'array', 'itemType': DescribeEipGatewayInfoResponseBodyEipInfosEipInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData extends $tea.Model {
  eipTX?: number;
  eipPackets?: number;
  eipBandwidth?: number;
  timeStamp?: string;
  eipFlow?: number;
  eipRX?: number;
  static names(): { [key: string]: string } {
    return {
      eipTX: 'EipTX',
      eipPackets: 'EipPackets',
      eipBandwidth: 'EipBandwidth',
      timeStamp: 'TimeStamp',
      eipFlow: 'EipFlow',
      eipRX: 'EipRX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipTX: 'number',
      eipPackets: 'number',
      eipBandwidth: 'number',
      timeStamp: 'string',
      eipFlow: 'number',
      eipRX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipMonitorDataResponseBodyEipMonitorDatas extends $tea.Model {
  eipMonitorData?: DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eipMonitorData: 'EipMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorData: { 'type': 'array', 'itemType': DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipSegmentResponseBodyEipSegmentsEipSegment extends $tea.Model {
  creationTime?: string;
  status?: string;
  descritpion?: string;
  instanceId?: string;
  ipCount?: string;
  name?: string;
  segment?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      descritpion: 'Descritpion',
      instanceId: 'InstanceId',
      ipCount: 'IpCount',
      name: 'Name',
      segment: 'Segment',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      descritpion: 'string',
      instanceId: 'string',
      ipCount: 'string',
      name: 'string',
      segment: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipSegmentResponseBodyEipSegments extends $tea.Model {
  eipSegment?: DescribeEipSegmentResponseBodyEipSegmentsEipSegment[];
  static names(): { [key: string]: string } {
    return {
      eipSegment: 'EipSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegment: { 'type': 'array', 'itemType': DescribeEipSegmentResponseBodyEipSegmentsEipSegment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionTypeVirtualBorderRouterModelsVirtualBorderRouterModel extends $tea.Model {
  instanceId?: string;
  accessPointId?: string;
  physicalConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accessPointId: 'AccessPointId',
      physicalConnectionId: 'PhysicalConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accessPointId: 'string',
      physicalConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionTypeVirtualBorderRouterModels extends $tea.Model {
  virtualBorderRouterModel?: DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionTypeVirtualBorderRouterModelsVirtualBorderRouterModel[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterModel: 'VirtualBorderRouterModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterModel: { 'type': 'array', 'itemType': DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionTypeVirtualBorderRouterModelsVirtualBorderRouterModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionType extends $tea.Model {
  reservationActiveTime?: string;
  type?: string;
  status?: string;
  reservationOrderType?: string;
  distance?: number;
  constructionPeriod?: string;
  chargeType?: string;
  applicationBandwidth?: string;
  ceIp?: string;
  bgpAs?: string;
  IDCardNo?: string;
  reservationInternetChargeType?: string;
  description?: string;
  bandwidth?: number;
  reservationBandwidth?: string;
  applicationStatus?: string;
  peerCity?: string;
  name?: string;
  peerLocation?: string;
  peIp?: string;
  contactMail?: string;
  gmtModify?: string;
  circuitCode?: string;
  applicationType?: string;
  instanceId?: string;
  redundantEccId?: string;
  virtualBorderRouterModels?: DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionTypeVirtualBorderRouterModels;
  isp?: string;
  endTime?: string;
  contactTel?: string;
  idcSP?: string;
  estimatedTime?: string;
  portType?: string;
  gmtCreate?: string;
  businessStatus?: string;
  applicationId?: string;
  hasReservationData?: string;
  static names(): { [key: string]: string } {
    return {
      reservationActiveTime: 'ReservationActiveTime',
      type: 'Type',
      status: 'Status',
      reservationOrderType: 'ReservationOrderType',
      distance: 'Distance',
      constructionPeriod: 'ConstructionPeriod',
      chargeType: 'ChargeType',
      applicationBandwidth: 'ApplicationBandwidth',
      ceIp: 'CeIp',
      bgpAs: 'BgpAs',
      IDCardNo: 'IDCardNo',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      description: 'Description',
      bandwidth: 'Bandwidth',
      reservationBandwidth: 'ReservationBandwidth',
      applicationStatus: 'ApplicationStatus',
      peerCity: 'PeerCity',
      name: 'Name',
      peerLocation: 'PeerLocation',
      peIp: 'PeIp',
      contactMail: 'ContactMail',
      gmtModify: 'GmtModify',
      circuitCode: 'CircuitCode',
      applicationType: 'ApplicationType',
      instanceId: 'InstanceId',
      redundantEccId: 'RedundantEccId',
      virtualBorderRouterModels: 'VirtualBorderRouterModels',
      isp: 'Isp',
      endTime: 'EndTime',
      contactTel: 'ContactTel',
      idcSP: 'IdcSP',
      estimatedTime: 'EstimatedTime',
      portType: 'PortType',
      gmtCreate: 'GmtCreate',
      businessStatus: 'BusinessStatus',
      applicationId: 'ApplicationId',
      hasReservationData: 'HasReservationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservationActiveTime: 'string',
      type: 'string',
      status: 'string',
      reservationOrderType: 'string',
      distance: 'number',
      constructionPeriod: 'string',
      chargeType: 'string',
      applicationBandwidth: 'string',
      ceIp: 'string',
      bgpAs: 'string',
      IDCardNo: 'string',
      reservationInternetChargeType: 'string',
      description: 'string',
      bandwidth: 'number',
      reservationBandwidth: 'string',
      applicationStatus: 'string',
      peerCity: 'string',
      name: 'string',
      peerLocation: 'string',
      peIp: 'string',
      contactMail: 'string',
      gmtModify: 'string',
      circuitCode: 'string',
      applicationType: 'string',
      instanceId: 'string',
      redundantEccId: 'string',
      virtualBorderRouterModels: DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionTypeVirtualBorderRouterModels,
      isp: 'string',
      endTime: 'string',
      contactTel: 'string',
      idcSP: 'string',
      estimatedTime: 'string',
      portType: 'string',
      gmtCreate: 'string',
      businessStatus: 'string',
      applicationId: 'string',
      hasReservationData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSet extends $tea.Model {
  expressCloudConnectionType?: DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionType[];
  static names(): { [key: string]: string } {
    return {
      expressCloudConnectionType: 'ExpressCloudConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressCloudConnectionType: { 'type': 'array', 'itemType': DescribeExpressCloudConnectionsResponseBodyExpressCloudConnectionSetExpressCloudConnectionType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogsFlowLog extends $tea.Model {
  status?: string;
  creationTime?: string;
  flowLogName?: string;
  trafficType?: string;
  resourceType?: string;
  description?: string;
  projectName?: string;
  logStoreName?: string;
  resourceId?: string;
  regionId?: string;
  flowLogId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      flowLogName: 'FlowLogName',
      trafficType: 'TrafficType',
      resourceType: 'ResourceType',
      description: 'Description',
      projectName: 'ProjectName',
      logStoreName: 'LogStoreName',
      resourceId: 'ResourceId',
      regionId: 'RegionId',
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      flowLogName: 'string',
      trafficType: 'string',
      resourceType: 'string',
      description: 'string',
      projectName: 'string',
      logStoreName: 'string',
      resourceId: 'string',
      regionId: 'string',
      flowLogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBodyFlowLogs extends $tea.Model {
  flowLog?: DescribeFlowLogsResponseBodyFlowLogsFlowLog[];
  static names(): { [key: string]: string } {
    return {
      flowLog: 'FlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLog: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsFlowLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry extends $tea.Model {
  status?: string;
  forwardEntryId?: string;
  internalIp?: string;
  internalPort?: string;
  forwardEntryName?: string;
  forwardTableId?: string;
  ipProtocol?: string;
  externalPort?: string;
  externalIp?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      forwardEntryId: 'ForwardEntryId',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      forwardEntryName: 'ForwardEntryName',
      forwardTableId: 'ForwardTableId',
      ipProtocol: 'IpProtocol',
      externalPort: 'ExternalPort',
      externalIp: 'ExternalIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      forwardEntryId: 'string',
      internalIp: 'string',
      internalPort: 'string',
      forwardEntryName: 'string',
      forwardTableId: 'string',
      ipProtocol: 'string',
      externalPort: 'string',
      externalIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeForwardTableEntriesResponseBodyForwardTableEntries extends $tea.Model {
  forwardTableEntry?: DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry[];
  static names(): { [key: string]: string } {
    return {
      forwardTableEntry: 'ForwardTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntry: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress extends $tea.Model {
  ipAddress?: string;
  allocationId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses extends $tea.Model {
  publicIpAddress?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddressesPublicIpAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer extends $tea.Model {
  serverIpAddress?: string;
  serverId?: string;
  serverType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      serverIpAddress: 'ServerIpAddress',
      serverId: 'ServerId',
      serverType: 'ServerType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverIpAddress: 'string',
      serverId: 'string',
      serverType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers extends $tea.Model {
  backendServer?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance extends $tea.Model {
  publicIpAddresses?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses;
  status?: string;
  creationTime?: string;
  backendServers?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers;
  bandwidthType?: string;
  chargeType?: string;
  globalAccelerationInstanceId?: string;
  serviceLocation?: string;
  regionId?: string;
  accelerationLocation?: string;
  ipAddress?: string;
  description?: string;
  bandwidth?: string;
  expiredTime?: string;
  internetChargeType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      publicIpAddresses: 'PublicIpAddresses',
      status: 'Status',
      creationTime: 'CreationTime',
      backendServers: 'BackendServers',
      bandwidthType: 'BandwidthType',
      chargeType: 'ChargeType',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      serviceLocation: 'ServiceLocation',
      regionId: 'RegionId',
      accelerationLocation: 'AccelerationLocation',
      ipAddress: 'IpAddress',
      description: 'Description',
      bandwidth: 'Bandwidth',
      expiredTime: 'ExpiredTime',
      internetChargeType: 'InternetChargeType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddresses: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstancePublicIpAddresses,
      status: 'string',
      creationTime: 'string',
      backendServers: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServers,
      bandwidthType: 'string',
      chargeType: 'string',
      globalAccelerationInstanceId: 'string',
      serviceLocation: 'string',
      regionId: 'string',
      accelerationLocation: 'string',
      ipAddress: 'string',
      description: 'string',
      bandwidth: 'string',
      expiredTime: 'string',
      internetChargeType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances extends $tea.Model {
  globalAccelerationInstance?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance[];
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstance: 'GlobalAccelerationInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstance: { 'type': 'array', 'itemType': DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule extends $tea.Model {
  cenInstanceId?: string;
  cenOwnerId?: number;
  creationTime?: string;
  static names(): { [key: string]: string } {
    return {
      cenInstanceId: 'CenInstanceId',
      cenOwnerId: 'CenOwnerId',
      creationTime: 'CreationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInstanceId: 'string',
      cenOwnerId: 'number',
      creationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToCenResponseBodyCenGrantRules extends $tea.Model {
  cbnGrantRule?: DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule[];
  static names(): { [key: string]: string } {
    return {
      cbnGrantRule: 'CbnGrantRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cbnGrantRule: { 'type': 'array', 'itemType': DescribeGrantRulesToCenResponseBodyCenGrantRulesCbnGrantRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances extends $tea.Model {
  associatedInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedInstance: 'associatedInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses extends $tea.Model {
  associatedEipAddresse?: string[];
  static names(): { [key: string]: string } {
    return {
      associatedEipAddresse: 'associatedEipAddresse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEipAddresse: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVipsHaVip extends $tea.Model {
  status?: string;
  vpcId?: string;
  associatedInstanceType?: string;
  haVipId?: string;
  createTime?: string;
  chargeType?: string;
  regionId?: string;
  vSwitchId?: string;
  ipAddress?: string;
  description?: string;
  associatedInstances?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances;
  masterInstanceId?: string;
  associatedEipAddresses?: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      associatedInstanceType: 'AssociatedInstanceType',
      haVipId: 'HaVipId',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      ipAddress: 'IpAddress',
      description: 'Description',
      associatedInstances: 'AssociatedInstances',
      masterInstanceId: 'MasterInstanceId',
      associatedEipAddresses: 'AssociatedEipAddresses',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      associatedInstanceType: 'string',
      haVipId: 'string',
      createTime: 'string',
      chargeType: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      ipAddress: 'string',
      description: 'string',
      associatedInstances: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedInstances,
      masterInstanceId: 'string',
      associatedEipAddresses: DescribeHaVipsResponseBodyHaVipsHaVipAssociatedEipAddresses,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsResponseBodyHaVips extends $tea.Model {
  haVip?: DescribeHaVipsResponseBodyHaVipsHaVip[];
  static names(): { [key: string]: string } {
    return {
      haVip: 'HaVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVip: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsHaVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute extends $tea.Model {
  duration?: number;
  instanceId?: string;
  renewalStatus?: string;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      renewalStatus: 'RenewalStatus',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      renewalStatus: 'string',
      pricingCycle: 'string',
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

export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth extends $tea.Model {
  bandwidth?: number;
  internetChargeType?: string;
  businessStatus?: string;
  ipv6InternetBandwidthId?: string;
  instanceChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      businessStatus: 'BusinessStatus',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      instanceChargeType: 'InstanceChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      internetChargeType: 'string',
      businessStatus: 'string',
      ipv6InternetBandwidthId: 'string',
      instanceChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address extends $tea.Model {
  status?: string;
  vpcId?: string;
  ipv6AddressId?: string;
  allocationTime?: string;
  associatedInstanceType?: string;
  ipv6AddressName?: string;
  associatedInstanceId?: string;
  networkType?: string;
  ipv6Address?: string;
  vSwitchId?: string;
  ipv6InternetBandwidth?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth;
  ipv6GatewayId?: string;
  realBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      ipv6AddressId: 'Ipv6AddressId',
      allocationTime: 'AllocationTime',
      associatedInstanceType: 'AssociatedInstanceType',
      ipv6AddressName: 'Ipv6AddressName',
      associatedInstanceId: 'AssociatedInstanceId',
      networkType: 'NetworkType',
      ipv6Address: 'Ipv6Address',
      vSwitchId: 'VSwitchId',
      ipv6InternetBandwidth: 'Ipv6InternetBandwidth',
      ipv6GatewayId: 'Ipv6GatewayId',
      realBandwidth: 'RealBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      ipv6AddressId: 'string',
      allocationTime: 'string',
      associatedInstanceType: 'string',
      ipv6AddressName: 'string',
      associatedInstanceId: 'string',
      networkType: 'string',
      ipv6Address: 'string',
      vSwitchId: 'string',
      ipv6InternetBandwidth: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth,
      ipv6GatewayId: 'string',
      realBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponseBodyIpv6Addresses extends $tea.Model {
  ipv6Address?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address[];
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: { 'type': 'array', 'itemType': DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule extends $tea.Model {
  status?: string;
  description?: string;
  ipv6EgressOnlyRuleId?: string;
  instanceId?: string;
  instanceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      ipv6EgressOnlyRuleId: 'Ipv6EgressOnlyRuleId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      ipv6EgressOnlyRuleId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRules extends $tea.Model {
  ipv6EgressOnlyRule?: DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule[];
  static names(): { [key: string]: string } {
    return {
      ipv6EgressOnlyRule: 'Ipv6EgressOnlyRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6EgressOnlyRule: { 'type': 'array', 'itemType': DescribeIpv6EgressOnlyRulesResponseBodyIpv6EgressOnlyRulesIpv6EgressOnlyRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway extends $tea.Model {
  creationTime?: string;
  status?: string;
  vpcId?: string;
  spec?: string;
  description?: string;
  ipv6GatewayId?: string;
  expiredTime?: string;
  businessStatus?: string;
  name?: string;
  instanceChargeType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      vpcId: 'VpcId',
      spec: 'Spec',
      description: 'Description',
      ipv6GatewayId: 'Ipv6GatewayId',
      expiredTime: 'ExpiredTime',
      businessStatus: 'BusinessStatus',
      name: 'Name',
      instanceChargeType: 'InstanceChargeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      vpcId: 'string',
      spec: 'string',
      description: 'string',
      ipv6GatewayId: 'string',
      expiredTime: 'string',
      businessStatus: 'string',
      name: 'string',
      instanceChargeType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysResponseBodyIpv6Gateways extends $tea.Model {
  ipv6Gateway?: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway[];
  static names(): { [key: string]: string } {
    return {
      ipv6Gateway: 'Ipv6Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Gateway: { 'type': 'array', 'itemType': DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry extends $tea.Model {
  aclEntryComment?: string;
  aclEntryId?: string;
  aclEntryIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryId: 'AclEntryId',
      aclEntryIp: 'AclEntryIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryId: 'string',
      aclEntryIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntries extends $tea.Model {
  aclEntry?: DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry[];
  static names(): { [key: string]: string } {
    return {
      aclEntry: 'AclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntry: { 'type': 'array', 'itemType': DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl extends $tea.Model {
  aclId?: string;
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAcls extends $tea.Model {
  IPv6TranslatorAcl?: DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl[];
  static names(): { [key: string]: string } {
    return {
      IPv6TranslatorAcl: 'IPv6TranslatorAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv6TranslatorAcl: { 'type': 'array', 'itemType': DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry extends $tea.Model {
  entryStatus?: string;
  aclType?: string;
  transProtocol?: string;
  entryDescription?: string;
  ipv6TranslatorId?: string;
  backendIpv4Addr?: string;
  allocateIpv6Port?: number;
  ipv6TranslatorEntryId?: string;
  backendIpv4Port?: string;
  regionId?: string;
  entryBandwidth?: string;
  aclId?: string;
  entryName?: string;
  aclStatus?: string;
  allocateIpv6Addr?: string;
  static names(): { [key: string]: string } {
    return {
      entryStatus: 'EntryStatus',
      aclType: 'AclType',
      transProtocol: 'TransProtocol',
      entryDescription: 'EntryDescription',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      backendIpv4Addr: 'BackendIpv4Addr',
      allocateIpv6Port: 'AllocateIpv6Port',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      backendIpv4Port: 'BackendIpv4Port',
      regionId: 'RegionId',
      entryBandwidth: 'EntryBandwidth',
      aclId: 'AclId',
      entryName: 'EntryName',
      aclStatus: 'AclStatus',
      allocateIpv6Addr: 'AllocateIpv6Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryStatus: 'string',
      aclType: 'string',
      transProtocol: 'string',
      entryDescription: 'string',
      ipv6TranslatorId: 'string',
      backendIpv4Addr: 'string',
      allocateIpv6Port: 'number',
      ipv6TranslatorEntryId: 'string',
      backendIpv4Port: 'string',
      regionId: 'string',
      entryBandwidth: 'string',
      aclId: 'string',
      entryName: 'string',
      aclStatus: 'string',
      allocateIpv6Addr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntries extends $tea.Model {
  ipv6TranslatorEntry?: DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry[];
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntry: 'Ipv6TranslatorEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntry: { 'type': 'array', 'itemType': DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds extends $tea.Model {
  ipv6TranslatorEntryId?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorEntryId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator extends $tea.Model {
  status?: string;
  spec?: string;
  createTime?: number;
  payType?: string;
  allocateIpv4Addr?: string;
  ipv6TranslatorId?: string;
  ipv6TranslatorEntryIds?: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds;
  availableBandwidth?: string;
  regionId?: string;
  endTime?: number;
  bandwidth?: number;
  description?: string;
  businessStatus?: string;
  allocateIpv6Addr?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      spec: 'Spec',
      createTime: 'CreateTime',
      payType: 'PayType',
      allocateIpv4Addr: 'AllocateIpv4Addr',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      ipv6TranslatorEntryIds: 'Ipv6TranslatorEntryIds',
      availableBandwidth: 'AvailableBandwidth',
      regionId: 'RegionId',
      endTime: 'EndTime',
      bandwidth: 'Bandwidth',
      description: 'Description',
      businessStatus: 'BusinessStatus',
      allocateIpv6Addr: 'AllocateIpv6Addr',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      spec: 'string',
      createTime: 'number',
      payType: 'string',
      allocateIpv4Addr: 'string',
      ipv6TranslatorId: 'string',
      ipv6TranslatorEntryIds: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6TranslatorIpv6TranslatorEntryIds,
      availableBandwidth: 'string',
      regionId: 'string',
      endTime: 'number',
      bandwidth: 'number',
      description: 'string',
      businessStatus: 'string',
      allocateIpv6Addr: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIPv6TranslatorsResponseBodyIpv6Translators extends $tea.Model {
  ipv6Translator?: DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator[];
  static names(): { [key: string]: string } {
    return {
      ipv6Translator: 'Ipv6Translator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Translator: { 'type': 'array', 'itemType': DescribeIPv6TranslatorsResponseBodyIpv6TranslatorsIpv6Translator },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList extends $tea.Model {
  ipAddress?: string;
  snatEntryEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      snatEntryEnabled: 'SnatEntryEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      snatEntryEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists extends $tea.Model {
  ipList?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList[];
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo extends $tea.Model {
  vswitchId?: string;
  eniInstanceId?: string;
  maxBandwidth?: number;
  privateIpAddress?: string;
  izNo?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'VswitchId',
      eniInstanceId: 'EniInstanceId',
      maxBandwidth: 'MaxBandwidth',
      privateIpAddress: 'PrivateIpAddress',
      izNo: 'IzNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      eniInstanceId: 'string',
      maxBandwidth: 'number',
      privateIpAddress: 'string',
      izNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds extends $tea.Model {
  forwardTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds extends $tea.Model {
  snatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGateway extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  status?: string;
  natType?: string;
  spec?: string;
  deletionProtection?: boolean;
  regionId?: string;
  instanceChargeType?: string;
  ecsMetricEnabled?: boolean;
  description?: string;
  expiredTime?: string;
  ipLists?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists;
  natGatewayPrivateInfo?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo;
  resourceGroupId?: string;
  natGatewayId?: string;
  internetChargeType?: string;
  businessStatus?: string;
  forwardTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds;
  snatTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      status: 'Status',
      natType: 'NatType',
      spec: 'Spec',
      deletionProtection: 'DeletionProtection',
      regionId: 'RegionId',
      instanceChargeType: 'InstanceChargeType',
      ecsMetricEnabled: 'EcsMetricEnabled',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      ipLists: 'IpLists',
      natGatewayPrivateInfo: 'NatGatewayPrivateInfo',
      resourceGroupId: 'ResourceGroupId',
      natGatewayId: 'NatGatewayId',
      internetChargeType: 'InternetChargeType',
      businessStatus: 'BusinessStatus',
      forwardTableIds: 'ForwardTableIds',
      snatTableIds: 'SnatTableIds',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      status: 'string',
      natType: 'string',
      spec: 'string',
      deletionProtection: 'boolean',
      regionId: 'string',
      instanceChargeType: 'string',
      ecsMetricEnabled: 'boolean',
      description: 'string',
      expiredTime: 'string',
      ipLists: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists,
      natGatewayPrivateInfo: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo,
      resourceGroupId: 'string',
      natGatewayId: 'string',
      internetChargeType: 'string',
      businessStatus: 'string',
      forwardTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds,
      snatTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewaySnatTableIds,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGateways extends $tea.Model {
  natGateway?: DescribeNatGatewaysResponseBodyNatGatewaysNatGateway[];
  static names(): { [key: string]: string } {
    return {
      natGateway: 'NatGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateway: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  networkAclEntryName?: string;
  policy?: string;
  description?: string;
  protocol?: string;
  destinationCidrIp?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      description: 'Description',
      protocol: 'Protocol',
      destinationCidrIp: 'DestinationCidrIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      description: 'string',
      protocol: 'string',
      destinationCidrIp: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries extends $tea.Model {
  egressAclEntry?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntriesEgressAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  networkAclEntryName?: string;
  policy?: string;
  description?: string;
  sourceCidrIp?: string;
  protocol?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      description: 'Description',
      sourceCidrIp: 'SourceCidrIp',
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      description: 'string',
      sourceCidrIp: 'string',
      protocol: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries extends $tea.Model {
  ingressAclEntry?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntriesIngressAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource extends $tea.Model {
  status?: string;
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources extends $tea.Model {
  resource?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclAttributesResponseBodyNetworkAclAttribute extends $tea.Model {
  status?: string;
  vpcId?: string;
  creationTime?: string;
  description?: string;
  egressAclEntries?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries;
  networkAclName?: string;
  ingressAclEntries?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries;
  networkAclId?: string;
  ownerId?: number;
  resources?: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      networkAclName: 'NetworkAclName',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      ownerId: 'OwnerId',
      resources: 'Resources',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      creationTime: 'string',
      description: 'string',
      egressAclEntries: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeEgressAclEntries,
      networkAclName: 'string',
      ingressAclEntries: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeIngressAclEntries,
      networkAclId: 'string',
      ownerId: 'number',
      resources: DescribeNetworkAclAttributesResponseBodyNetworkAclAttributeResources,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  networkAclEntryName?: string;
  policy?: string;
  description?: string;
  protocol?: string;
  destinationCidrIp?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      description: 'Description',
      protocol: 'Protocol',
      destinationCidrIp: 'DestinationCidrIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      description: 'string',
      protocol: 'string',
      destinationCidrIp: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntries extends $tea.Model {
  egressAclEntry?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      egressAclEntry: 'EgressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntriesEgressAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  networkAclEntryName?: string;
  policy?: string;
  description?: string;
  sourceCidrIp?: string;
  protocol?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      description: 'Description',
      sourceCidrIp: 'SourceCidrIp',
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      description: 'string',
      sourceCidrIp: 'string',
      protocol: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntries extends $tea.Model {
  ingressAclEntry?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry[];
  static names(): { [key: string]: string } {
    return {
      ingressAclEntry: 'IngressAclEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressAclEntry: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntriesIngressAclEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResourcesResource extends $tea.Model {
  status?: string;
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResources extends $tea.Model {
  resource?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl extends $tea.Model {
  status?: string;
  vpcId?: string;
  creationTime?: string;
  description?: string;
  egressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntries;
  networkAclName?: string;
  ingressAclEntries?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntries;
  networkAclId?: string;
  ownerId?: number;
  resources?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResources;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      description: 'Description',
      egressAclEntries: 'EgressAclEntries',
      networkAclName: 'NetworkAclName',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      ownerId: 'OwnerId',
      resources: 'Resources',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      creationTime: 'string',
      description: 'string',
      egressAclEntries: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclEgressAclEntries,
      networkAclName: 'string',
      ingressAclEntries: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclIngressAclEntries,
      networkAclId: 'string',
      ownerId: 'number',
      resources: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAclResources,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkAclsResponseBodyNetworkAcls extends $tea.Model {
  networkAcl?: DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl[];
  static names(): { [key: string]: string } {
    return {
      networkAcl: 'NetworkAcl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAcl: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAclsNetworkAcl },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData extends $tea.Model {
  eipTX?: number;
  eipPackets?: number;
  eipBandwidth?: number;
  timeStamp?: string;
  eipFlow?: number;
  eipRX?: number;
  static names(): { [key: string]: string } {
    return {
      eipTX: 'EipTX',
      eipPackets: 'EipPackets',
      eipBandwidth: 'EipBandwidth',
      timeStamp: 'TimeStamp',
      eipFlow: 'EipFlow',
      eipRX: 'EipRX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipTX: 'number',
      eipPackets: 'number',
      eipBandwidth: 'number',
      timeStamp: 'string',
      eipFlow: 'number',
      eipRX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatas extends $tea.Model {
  eipMonitorData?: DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eipMonitorData: 'EipMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorData: { 'type': 'array', 'itemType': DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo extends $tea.Model {
  PMCertificateNo?: string;
  PMName?: string;
  PMCertificateType?: string;
  PMGender?: string;
  PMContactInfo?: string;
  static names(): { [key: string]: string } {
    return {
      PMCertificateNo: 'PMCertificateNo',
      PMName: 'PMName',
      PMCertificateType: 'PMCertificateType',
      PMGender: 'PMGender',
      PMContactInfo: 'PMContactInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMCertificateNo: 'string',
      PMName: 'string',
      PMCertificateType: 'string',
      PMGender: 'string',
      PMContactInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo extends $tea.Model {
  PMInfo?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo[];
  static names(): { [key: string]: string } {
    return {
      PMInfo: 'PMInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PMInfo: { 'type': 'array', 'itemType': DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfoPMInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType extends $tea.Model {
  status?: string;
  lineLabel?: string;
  lineCode?: string;
  constructionTime?: string;
  SI?: string;
  loaUrl?: string;
  companyLocalizedName?: string;
  instanceId?: string;
  PMInfo?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo;
  lineType?: string;
  companyName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lineLabel: 'LineLabel',
      lineCode: 'LineCode',
      constructionTime: 'ConstructionTime',
      SI: 'SI',
      loaUrl: 'LoaUrl',
      companyLocalizedName: 'CompanyLocalizedName',
      instanceId: 'InstanceId',
      PMInfo: 'PMInfo',
      lineType: 'LineType',
      companyName: 'CompanyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lineLabel: 'string',
      lineCode: 'string',
      constructionTime: 'string',
      SI: 'string',
      loaUrl: 'string',
      companyLocalizedName: 'string',
      instanceId: 'string',
      PMInfo: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOATypePMInfo,
      lineType: 'string',
      companyName: 'string',
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

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop extends $tea.Model {
  weight?: number;
  nextHopId?: string;
  enabled?: number;
  nextHopType?: string;
  nextHopRelatedInfo?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo;
  nextHopRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      nextHopId: 'NextHopId',
      enabled: 'Enabled',
      nextHopType: 'NextHopType',
      nextHopRelatedInfo: 'NextHopRelatedInfo',
      nextHopRegionId: 'NextHopRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      nextHopId: 'string',
      enabled: 'number',
      nextHopType: 'string',
      nextHopRelatedInfo: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo,
      nextHopRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops extends $tea.Model {
  nextHop?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop[];
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: { 'type': 'array', 'itemType': DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry extends $tea.Model {
  status?: string;
  type?: string;
  ipVersion?: string;
  description?: string;
  routeEntryName?: string;
  destinationCidrBlock?: string;
  routeEntryId?: string;
  nextHops?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      ipVersion: 'IpVersion',
      description: 'Description',
      routeEntryName: 'RouteEntryName',
      destinationCidrBlock: 'DestinationCidrBlock',
      routeEntryId: 'RouteEntryId',
      nextHops: 'NextHops',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      ipVersion: 'string',
      description: 'string',
      routeEntryName: 'string',
      destinationCidrBlock: 'string',
      routeEntryId: 'string',
      nextHops: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops,
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrys extends $tea.Model {
  routeEntry?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType extends $tea.Model {
  reservationActiveTime?: string;
  healthCheckTargetIp?: string;
  status?: string;
  creationTime?: string;
  reservationOrderType?: string;
  oppositeInterfaceId?: string;
  spec?: string;
  chargeType?: string;
  routerInterfaceId?: string;
  hcThreshold?: number;
  oppositeRouterType?: string;
  oppositeInterfaceOwnerId?: string;
  vpcInstanceId?: string;
  oppositeVpcInstanceId?: string;
  reservationInternetChargeType?: string;
  crossBorder?: boolean;
  description?: string;
  bandwidth?: number;
  reservationBandwidth?: string;
  hcRate?: number;
  name?: string;
  oppositeRouterId?: string;
  oppositeInterfaceSpec?: string;
  routerId?: string;
  oppositeInterfaceBusinessStatus?: string;
  connectedTime?: string;
  healthCheckSourceIp?: string;
  oppositeInterfaceStatus?: string;
  endTime?: string;
  oppositeRegionId?: string;
  oppositeAccessPointId?: string;
  businessStatus?: string;
  oppositeBandwidth?: number;
  routerType?: string;
  role?: string;
  hasReservationData?: string;
  accessPointId?: string;
  static names(): { [key: string]: string } {
    return {
      reservationActiveTime: 'ReservationActiveTime',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      status: 'Status',
      creationTime: 'CreationTime',
      reservationOrderType: 'ReservationOrderType',
      oppositeInterfaceId: 'OppositeInterfaceId',
      spec: 'Spec',
      chargeType: 'ChargeType',
      routerInterfaceId: 'RouterInterfaceId',
      hcThreshold: 'HcThreshold',
      oppositeRouterType: 'OppositeRouterType',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      vpcInstanceId: 'VpcInstanceId',
      oppositeVpcInstanceId: 'OppositeVpcInstanceId',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      crossBorder: 'CrossBorder',
      description: 'Description',
      bandwidth: 'Bandwidth',
      reservationBandwidth: 'ReservationBandwidth',
      hcRate: 'HcRate',
      name: 'Name',
      oppositeRouterId: 'OppositeRouterId',
      oppositeInterfaceSpec: 'OppositeInterfaceSpec',
      routerId: 'RouterId',
      oppositeInterfaceBusinessStatus: 'OppositeInterfaceBusinessStatus',
      connectedTime: 'ConnectedTime',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      oppositeInterfaceStatus: 'OppositeInterfaceStatus',
      endTime: 'EndTime',
      oppositeRegionId: 'OppositeRegionId',
      oppositeAccessPointId: 'OppositeAccessPointId',
      businessStatus: 'BusinessStatus',
      oppositeBandwidth: 'OppositeBandwidth',
      routerType: 'RouterType',
      role: 'Role',
      hasReservationData: 'HasReservationData',
      accessPointId: 'AccessPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservationActiveTime: 'string',
      healthCheckTargetIp: 'string',
      status: 'string',
      creationTime: 'string',
      reservationOrderType: 'string',
      oppositeInterfaceId: 'string',
      spec: 'string',
      chargeType: 'string',
      routerInterfaceId: 'string',
      hcThreshold: 'number',
      oppositeRouterType: 'string',
      oppositeInterfaceOwnerId: 'string',
      vpcInstanceId: 'string',
      oppositeVpcInstanceId: 'string',
      reservationInternetChargeType: 'string',
      crossBorder: 'boolean',
      description: 'string',
      bandwidth: 'number',
      reservationBandwidth: 'string',
      hcRate: 'number',
      name: 'string',
      oppositeRouterId: 'string',
      oppositeInterfaceSpec: 'string',
      routerId: 'string',
      oppositeInterfaceBusinessStatus: 'string',
      connectedTime: 'string',
      healthCheckSourceIp: 'string',
      oppositeInterfaceStatus: 'string',
      endTime: 'string',
      oppositeRegionId: 'string',
      oppositeAccessPointId: 'string',
      businessStatus: 'string',
      oppositeBandwidth: 'number',
      routerType: 'string',
      role: 'string',
      hasReservationData: 'string',
      accessPointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouterInterfacesResponseBodyRouterInterfaceSet extends $tea.Model {
  routerInterfaceType?: DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType[];
  static names(): { [key: string]: string } {
    return {
      routerInterfaceType: 'RouterInterfaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerInterfaceType: { 'type': 'array', 'itemType': DescribeRouterInterfacesResponseBodyRouterInterfaceSetRouterInterfaceType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTagsTag extends $tea.Model {
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

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags extends $tea.Model {
  tag?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds extends $tea.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableListRouterTableListType extends $tea.Model {
  status?: string;
  creationTime?: string;
  vpcId?: string;
  routerId?: string;
  tags?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags;
  routeTableId?: string;
  ownerId?: number;
  description?: string;
  resourceGroupId?: string;
  routeTableType?: string;
  vSwitchIds?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds;
  routerType?: string;
  routeTableName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      vpcId: 'VpcId',
      routerId: 'RouterId',
      tags: 'Tags',
      routeTableId: 'RouteTableId',
      ownerId: 'OwnerId',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      routeTableType: 'RouteTableType',
      vSwitchIds: 'VSwitchIds',
      routerType: 'RouterType',
      routeTableName: 'RouteTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      vpcId: 'string',
      routerId: 'string',
      tags: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeTags,
      routeTableId: 'string',
      ownerId: 'number',
      description: 'string',
      resourceGroupId: 'string',
      routeTableType: 'string',
      vSwitchIds: DescribeRouteTableListResponseBodyRouterTableListRouterTableListTypeVSwitchIds,
      routerType: 'string',
      routeTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBodyRouterTableList extends $tea.Model {
  routerTableListType?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListType[];
  static names(): { [key: string]: string } {
    return {
      routerTableListType: 'RouterTableListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerTableListType: { 'type': 'array', 'itemType': DescribeRouteTableListResponseBodyRouterTableListRouterTableListType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop extends $tea.Model {
  nextHopId?: string;
  weight?: number;
  nextHopType?: string;
  enabled?: number;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      weight: 'Weight',
      nextHopType: 'NextHopType',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      weight: 'number',
      nextHopType: 'string',
      enabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops extends $tea.Model {
  nextHop?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop[];
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry extends $tea.Model {
  status?: string;
  type?: string;
  nextHopType?: string;
  routeEntryName?: string;
  routeEntryId?: string;
  instanceId?: string;
  routeTableId?: string;
  description?: string;
  destinationCidrBlock?: string;
  nextHops?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      nextHopType: 'NextHopType',
      routeEntryName: 'RouteEntryName',
      routeEntryId: 'RouteEntryId',
      instanceId: 'InstanceId',
      routeTableId: 'RouteTableId',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHops: 'NextHops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      nextHopType: 'string',
      routeEntryName: 'string',
      routeEntryId: 'string',
      instanceId: 'string',
      routeTableId: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      nextHops: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys extends $tea.Model {
  routeEntry?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds extends $tea.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTable extends $tea.Model {
  creationTime?: string;
  status?: string;
  VRouterId?: string;
  routeEntrys?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys;
  routeTableType?: string;
  resourceGroupId?: string;
  vSwitchIds?: DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      VRouterId: 'VRouterId',
      routeEntrys: 'RouteEntrys',
      routeTableType: 'RouteTableType',
      resourceGroupId: 'ResourceGroupId',
      vSwitchIds: 'VSwitchIds',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      VRouterId: 'string',
      routeEntrys: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys,
      routeTableType: 'string',
      resourceGroupId: 'string',
      vSwitchIds: DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds,
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTables extends $tea.Model {
  routeTable?: DescribeRouteTablesResponseBodyRouteTablesRouteTable[];
  static names(): { [key: string]: string } {
    return {
      routeTable: 'RouteTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTable: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance extends $tea.Model {
  serverIpAddress?: string;
  ipAddress?: string;
  globalAccelerationInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      serverIpAddress: 'ServerIpAddress',
      ipAddress: 'IpAddress',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverIpAddress: 'string',
      ipAddress: 'string',
      globalAccelerationInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances extends $tea.Model {
  globalAccelerationInstance?: DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance[];
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstance: 'GlobalAccelerationInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstance: { 'type': 'array', 'itemType': DescribeServerRelatedGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry extends $tea.Model {
  status?: string;
  snatEntryName?: string;
  sourceVSwitchId?: string;
  sourceCIDR?: string;
  snatEntryId?: string;
  snatTableId?: string;
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      snatEntryName: 'SnatEntryName',
      sourceVSwitchId: 'SourceVSwitchId',
      sourceCIDR: 'SourceCIDR',
      snatEntryId: 'SnatEntryId',
      snatTableId: 'SnatTableId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      snatEntryName: 'string',
      sourceVSwitchId: 'string',
      sourceCIDR: 'string',
      snatEntryId: 'string',
      snatTableId: 'string',
      snatIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnatTableEntriesResponseBodySnatTableEntries extends $tea.Model {
  snatTableEntry?: DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry[];
  static names(): { [key: string]: string } {
    return {
      snatTableEntry: 'SnatTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableEntry: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey extends $tea.Model {
  status?: string;
  endTime?: number;
  createTime?: number;
  sslVpnClientCertId?: string;
  sslVpnServerId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      createTime: 'CreateTime',
      sslVpnClientCertId: 'SslVpnClientCertId',
      sslVpnServerId: 'SslVpnServerId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      endTime: 'number',
      createTime: 'number',
      sslVpnClientCertId: 'string',
      sslVpnServerId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys extends $tea.Model {
  sslVpnClientCertKey?: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey[];
  static names(): { [key: string]: string } {
    return {
      sslVpnClientCertKey: 'SslVpnClientCertKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslVpnClientCertKey: { 'type': 'array', 'itemType': DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer extends $tea.Model {
  internetIp?: string;
  IDaaSInstanceId?: string;
  createTime?: number;
  vpnGatewayId?: string;
  compress?: boolean;
  port?: number;
  localSubnet?: string;
  regionId?: string;
  cipher?: string;
  connections?: number;
  sslVpnServerId?: string;
  maxConnections?: number;
  name?: string;
  enableMultiFactorAuth?: boolean;
  clientIpPool?: string;
  proto?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
      IDaaSInstanceId: 'IDaaSInstanceId',
      createTime: 'CreateTime',
      vpnGatewayId: 'VpnGatewayId',
      compress: 'Compress',
      port: 'Port',
      localSubnet: 'LocalSubnet',
      regionId: 'RegionId',
      cipher: 'Cipher',
      connections: 'Connections',
      sslVpnServerId: 'SslVpnServerId',
      maxConnections: 'MaxConnections',
      name: 'Name',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      clientIpPool: 'ClientIpPool',
      proto: 'Proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
      IDaaSInstanceId: 'string',
      createTime: 'number',
      vpnGatewayId: 'string',
      compress: 'boolean',
      port: 'number',
      localSubnet: 'string',
      regionId: 'string',
      cipher: 'string',
      connections: 'number',
      sslVpnServerId: 'string',
      maxConnections: 'number',
      name: 'string',
      enableMultiFactorAuth: 'boolean',
      clientIpPool: 'string',
      proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnServersResponseBodySslVpnServers extends $tea.Model {
  sslVpnServer?: DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer[];
  static names(): { [key: string]: string } {
    return {
      sslVpnServer: 'SslVpnServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslVpnServer: { 'type': 'array', 'itemType': DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen extends $tea.Model {
  cenOwnerId?: number;
  cenId?: string;
  cenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cenOwnerId: 'CenOwnerId',
      cenId: 'CenId',
      cenStatus: 'CenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenOwnerId: 'number',
      cenId: 'string',
      cenStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens extends $tea.Model {
  associatedCen?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen[];
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection extends $tea.Model {
  vlanInterfaceId?: string;
  status?: string;
  peerIpv6GatewayIp?: string;
  circuitCode?: string;
  localIpv6GatewayIp?: string;
  physicalConnectionOwnerUid?: string;
  localGatewayIp?: string;
  physicalConnectionBusinessStatus?: string;
  peeringSubnetMask?: string;
  enableIpv6?: boolean;
  physicalConnectionStatus?: string;
  peerGatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  physicalConnectionId?: string;
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      vlanInterfaceId: 'VlanInterfaceId',
      status: 'Status',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      circuitCode: 'CircuitCode',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      localGatewayIp: 'LocalGatewayIp',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      peeringSubnetMask: 'PeeringSubnetMask',
      enableIpv6: 'EnableIpv6',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      peerGatewayIp: 'PeerGatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      physicalConnectionId: 'PhysicalConnectionId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vlanInterfaceId: 'string',
      status: 'string',
      peerIpv6GatewayIp: 'string',
      circuitCode: 'string',
      localIpv6GatewayIp: 'string',
      physicalConnectionOwnerUid: 'string',
      localGatewayIp: 'string',
      physicalConnectionBusinessStatus: 'string',
      peeringSubnetMask: 'string',
      enableIpv6: 'boolean',
      physicalConnectionStatus: 'string',
      peerGatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      physicalConnectionId: 'string',
      vlanId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections extends $tea.Model {
  associatedPhysicalConnection?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection[];
  static names(): { [key: string]: string } {
    return {
      associatedPhysicalConnection: 'AssociatedPhysicalConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPhysicalConnection: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType extends $tea.Model {
  creationTime?: string;
  status?: string;
  type?: string;
  minTxInterval?: number;
  associatedCens?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens;
  peerIpv6GatewayIp?: string;
  PConnVbrExpireTime?: string;
  physicalConnectionOwnerUid?: string;
  activationTime?: string;
  physicalConnectionBusinessStatus?: string;
  description?: string;
  terminationTime?: string;
  peerGatewayIp?: string;
  minRxInterval?: number;
  name?: string;
  vbrId?: string;
  vlanId?: number;
  vlanInterfaceId?: string;
  circuitCode?: string;
  localIpv6GatewayIp?: string;
  associatedPhysicalConnections?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections;
  localGatewayIp?: string;
  peeringSubnetMask?: string;
  enableIpv6?: boolean;
  routeTableId?: string;
  detectMultiplier?: number;
  eccId?: string;
  recoveryTime?: string;
  physicalConnectionStatus?: string;
  peeringIpv6SubnetMask?: string;
  accessPointId?: string;
  physicalConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      type: 'Type',
      minTxInterval: 'MinTxInterval',
      associatedCens: 'AssociatedCens',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      PConnVbrExpireTime: 'PConnVbrExpireTime',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      activationTime: 'ActivationTime',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      description: 'Description',
      terminationTime: 'TerminationTime',
      peerGatewayIp: 'PeerGatewayIp',
      minRxInterval: 'MinRxInterval',
      name: 'Name',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
      vlanInterfaceId: 'VlanInterfaceId',
      circuitCode: 'CircuitCode',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      associatedPhysicalConnections: 'AssociatedPhysicalConnections',
      localGatewayIp: 'LocalGatewayIp',
      peeringSubnetMask: 'PeeringSubnetMask',
      enableIpv6: 'EnableIpv6',
      routeTableId: 'RouteTableId',
      detectMultiplier: 'DetectMultiplier',
      eccId: 'EccId',
      recoveryTime: 'RecoveryTime',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      accessPointId: 'AccessPointId',
      physicalConnectionId: 'PhysicalConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      type: 'string',
      minTxInterval: 'number',
      associatedCens: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCens,
      peerIpv6GatewayIp: 'string',
      PConnVbrExpireTime: 'string',
      physicalConnectionOwnerUid: 'string',
      activationTime: 'string',
      physicalConnectionBusinessStatus: 'string',
      description: 'string',
      terminationTime: 'string',
      peerGatewayIp: 'string',
      minRxInterval: 'number',
      name: 'string',
      vbrId: 'string',
      vlanId: 'number',
      vlanInterfaceId: 'string',
      circuitCode: 'string',
      localIpv6GatewayIp: 'string',
      associatedPhysicalConnections: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections,
      localGatewayIp: 'string',
      peeringSubnetMask: 'string',
      enableIpv6: 'boolean',
      routeTableId: 'string',
      detectMultiplier: 'number',
      eccId: 'string',
      recoveryTime: 'string',
      physicalConnectionStatus: 'string',
      peeringIpv6SubnetMask: 'string',
      accessPointId: 'string',
      physicalConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet extends $tea.Model {
  virtualBorderRouterType?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterType: 'VirtualBorderRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType extends $tea.Model {
  type?: string;
  creationTime?: string;
  status?: string;
  circuitCode?: string;
  peerIpv6GatewayIp?: string;
  PConnVbrExpireTime?: string;
  localIpv6GatewayIp?: string;
  localGatewayIp?: string;
  activationTime?: string;
  bandwidthStatus?: string;
  vbrOwnerUid?: number;
  peeringSubnetMask?: string;
  enableIpv6?: boolean;
  eccId?: string;
  bandwidth?: string;
  recoveryTime?: string;
  terminationTime?: string;
  PConnVbrBussinessStatus?: string;
  peerGatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  vbrId?: string;
  PConnVbrChargeType?: string;
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      creationTime: 'CreationTime',
      status: 'Status',
      circuitCode: 'CircuitCode',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      PConnVbrExpireTime: 'PConnVbrExpireTime',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      localGatewayIp: 'LocalGatewayIp',
      activationTime: 'ActivationTime',
      bandwidthStatus: 'BandwidthStatus',
      vbrOwnerUid: 'VbrOwnerUid',
      peeringSubnetMask: 'PeeringSubnetMask',
      enableIpv6: 'EnableIpv6',
      eccId: 'EccId',
      bandwidth: 'Bandwidth',
      recoveryTime: 'RecoveryTime',
      terminationTime: 'TerminationTime',
      PConnVbrBussinessStatus: 'PConnVbrBussinessStatus',
      peerGatewayIp: 'PeerGatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      vbrId: 'VbrId',
      PConnVbrChargeType: 'PConnVbrChargeType',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      creationTime: 'string',
      status: 'string',
      circuitCode: 'string',
      peerIpv6GatewayIp: 'string',
      PConnVbrExpireTime: 'string',
      localIpv6GatewayIp: 'string',
      localGatewayIp: 'string',
      activationTime: 'string',
      bandwidthStatus: 'string',
      vbrOwnerUid: 'number',
      peeringSubnetMask: 'string',
      enableIpv6: 'boolean',
      eccId: 'string',
      bandwidth: 'string',
      recoveryTime: 'string',
      terminationTime: 'string',
      PConnVbrBussinessStatus: 'string',
      peerGatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      vbrId: 'string',
      PConnVbrChargeType: 'string',
      vlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet extends $tea.Model {
  virtualBorderRouterForPhysicalConnectionType?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterForPhysicalConnectionType: 'VirtualBorderRouterForPhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterForPhysicalConnectionType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyVSwitchIds extends $tea.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodySecondaryCidrBlocks extends $tea.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyUserCidrs extends $tea.Model {
  userCidr?: string[];
  static names(): { [key: string]: string } {
    return {
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen extends $tea.Model {
  cenOwnerId?: number;
  cenId?: string;
  cenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cenOwnerId: 'CenOwnerId',
      cenId: 'CenId',
      cenStatus: 'CenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenOwnerId: 'number',
      cenId: 'string',
      cenStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyAssociatedCens extends $tea.Model {
  associatedCen?: DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen[];
  static names(): { [key: string]: string } {
    return {
      associatedCen: 'AssociatedCen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedCen: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType extends $tea.Model {
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAttributeResponseBodyCloudResources extends $tea.Model {
  cloudResourceSetType?: DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType[];
  static names(): { [key: string]: string } {
    return {
      cloudResourceSetType: 'CloudResourceSetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceSetType: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcTagsTag extends $tea.Model {
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

export class DescribeVpcsResponseBodyVpcsVpcTags extends $tea.Model {
  tag?: DescribeVpcsResponseBodyVpcsVpcTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpcTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcUserCidrs extends $tea.Model {
  userCidr?: string[];
  static names(): { [key: string]: string } {
    return {
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcNatGatewayIds extends $tea.Model {
  natGatewayIds?: string[];
  static names(): { [key: string]: string } {
    return {
      natGatewayIds: 'NatGatewayIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcVSwitchIds extends $tea.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcRouterTableIds extends $tea.Model {
  routerTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      routerTableIds: 'RouterTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpcSecondaryCidrBlocks extends $tea.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcsVpc extends $tea.Model {
  vpcId?: string;
  status?: string;
  creationTime?: string;
  tags?: DescribeVpcsResponseBodyVpcsVpcTags;
  userCidrs?: DescribeVpcsResponseBodyVpcsVpcUserCidrs;
  natGatewayIds?: DescribeVpcsResponseBodyVpcsVpcNatGatewayIds;
  ownerId?: number;
  vpcName?: string;
  cidrBlock?: string;
  dhcpOptionsSetStatus?: string;
  description?: string;
  dhcpOptionsSetId?: string;
  vSwitchIds?: DescribeVpcsResponseBodyVpcsVpcVSwitchIds;
  ipv6CidrBlock?: string;
  routerTableIds?: DescribeVpcsResponseBodyVpcsVpcRouterTableIds;
  isDefault?: boolean;
  regionId?: string;
  VRouterId?: string;
  secondaryCidrBlocks?: DescribeVpcsResponseBodyVpcsVpcSecondaryCidrBlocks;
  resourceGroupId?: string;
  cenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      creationTime: 'CreationTime',
      tags: 'Tags',
      userCidrs: 'UserCidrs',
      natGatewayIds: 'NatGatewayIds',
      ownerId: 'OwnerId',
      vpcName: 'VpcName',
      cidrBlock: 'CidrBlock',
      dhcpOptionsSetStatus: 'DhcpOptionsSetStatus',
      description: 'Description',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      vSwitchIds: 'VSwitchIds',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      routerTableIds: 'RouterTableIds',
      isDefault: 'IsDefault',
      regionId: 'RegionId',
      VRouterId: 'VRouterId',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      resourceGroupId: 'ResourceGroupId',
      cenStatus: 'CenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      creationTime: 'string',
      tags: DescribeVpcsResponseBodyVpcsVpcTags,
      userCidrs: DescribeVpcsResponseBodyVpcsVpcUserCidrs,
      natGatewayIds: DescribeVpcsResponseBodyVpcsVpcNatGatewayIds,
      ownerId: 'number',
      vpcName: 'string',
      cidrBlock: 'string',
      dhcpOptionsSetStatus: 'string',
      description: 'string',
      dhcpOptionsSetId: 'string',
      vSwitchIds: DescribeVpcsResponseBodyVpcsVpcVSwitchIds,
      ipv6CidrBlock: 'string',
      routerTableIds: DescribeVpcsResponseBodyVpcsVpcRouterTableIds,
      isDefault: 'boolean',
      regionId: 'string',
      VRouterId: 'string',
      secondaryCidrBlocks: DescribeVpcsResponseBodyVpcsVpcSecondaryCidrBlocks,
      resourceGroupId: 'string',
      cenStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcsResponseBodyVpcs extends $tea.Model {
  vpc?: DescribeVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcsVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyVcoHealthCheck extends $tea.Model {
  status?: string;
  dip?: string;
  interval?: number;
  retry?: number;
  sip?: string;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dip: 'Dip',
      interval: 'Interval',
      retry: 'Retry',
      sip: 'Sip',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dip: 'string',
      interval: 'number',
      retry: 'number',
      sip: 'string',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyIpsecConfig extends $tea.Model {
  ipsecLifetime?: number;
  ipsecEncAlg?: string;
  ipsecPfs?: string;
  ipsecAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecLifetime: 'IpsecLifetime',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecPfs: 'IpsecPfs',
      ipsecAuthAlg: 'IpsecAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecLifetime: 'number',
      ipsecEncAlg: 'string',
      ipsecPfs: 'string',
      ipsecAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyIkeConfig extends $tea.Model {
  remoteId?: string;
  ikeLifetime?: number;
  ikeEncAlg?: string;
  localId?: string;
  ikeMode?: string;
  ikeVersion?: string;
  ikePfs?: string;
  psk?: string;
  ikeAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      remoteId: 'RemoteId',
      ikeLifetime: 'IkeLifetime',
      ikeEncAlg: 'IkeEncAlg',
      localId: 'LocalId',
      ikeMode: 'IkeMode',
      ikeVersion: 'IkeVersion',
      ikePfs: 'IkePfs',
      psk: 'Psk',
      ikeAuthAlg: 'IkeAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteId: 'string',
      ikeLifetime: 'number',
      ikeEncAlg: 'string',
      localId: 'string',
      ikeMode: 'string',
      ikeVersion: 'string',
      ikePfs: 'string',
      psk: 'string',
      ikeAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyVpnBgpConfig extends $tea.Model {
  status?: string;
  peerBgpIp?: string;
  tunnelCidr?: string;
  enableBgp?: string;
  localBgpIp?: string;
  peerAsn?: string;
  localAsn?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
      enableBgp: 'EnableBgp',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      localAsn: 'LocalAsn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      peerBgpIp: 'string',
      tunnelCidr: 'string',
      enableBgp: 'string',
      localBgpIp: 'string',
      peerAsn: 'string',
      localAsn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig extends $tea.Model {
  status?: string;
  peerBgpIp?: string;
  tunnelCidr?: string;
  localBgpIp?: string;
  peerAsn?: string;
  localAsn?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      localAsn: 'LocalAsn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      peerBgpIp: 'string',
      tunnelCidr: 'string',
      localBgpIp: 'string',
      peerAsn: 'string',
      localAsn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck extends $tea.Model {
  status?: string;
  dip?: string;
  interval?: number;
  retry?: number;
  sip?: string;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dip: 'Dip',
      interval: 'Interval',
      retry: 'Retry',
      sip: 'Sip',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dip: 'string',
      interval: 'number',
      retry: 'number',
      sip: 'string',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig extends $tea.Model {
  ipsecLifetime?: number;
  ipsecEncAlg?: string;
  ipsecPfs?: string;
  ipsecAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecLifetime: 'IpsecLifetime',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecPfs: 'IpsecPfs',
      ipsecAuthAlg: 'IpsecAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecLifetime: 'number',
      ipsecEncAlg: 'string',
      ipsecPfs: 'string',
      ipsecAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig extends $tea.Model {
  remoteId?: string;
  ikeLifetime?: number;
  ikeEncAlg?: string;
  localId?: string;
  ikeMode?: string;
  ikeVersion?: string;
  ikePfs?: string;
  psk?: string;
  ikeAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      remoteId: 'RemoteId',
      ikeLifetime: 'IkeLifetime',
      ikeEncAlg: 'IkeEncAlg',
      localId: 'LocalId',
      ikeMode: 'IkeMode',
      ikeVersion: 'IkeVersion',
      ikePfs: 'IkePfs',
      psk: 'Psk',
      ikeAuthAlg: 'IkeAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteId: 'string',
      ikeLifetime: 'number',
      ikeEncAlg: 'string',
      localId: 'string',
      ikeMode: 'string',
      ikeVersion: 'string',
      ikePfs: 'string',
      psk: 'string',
      ikeAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection extends $tea.Model {
  status?: string;
  vpnBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig;
  remoteCaCertificate?: string;
  enableNatTraversal?: boolean;
  effectImmediately?: boolean;
  createTime?: number;
  vcoHealthCheck?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck;
  vpnGatewayId?: string;
  ipsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig;
  ikeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig;
  localSubnet?: string;
  vpnConnectionId?: string;
  remoteSubnet?: string;
  customerGatewayId?: string;
  name?: string;
  enableDpd?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpnBgpConfig: 'VpnBgpConfig',
      remoteCaCertificate: 'RemoteCaCertificate',
      enableNatTraversal: 'EnableNatTraversal',
      effectImmediately: 'EffectImmediately',
      createTime: 'CreateTime',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnGatewayId: 'VpnGatewayId',
      ipsecConfig: 'IpsecConfig',
      ikeConfig: 'IkeConfig',
      localSubnet: 'LocalSubnet',
      vpnConnectionId: 'VpnConnectionId',
      remoteSubnet: 'RemoteSubnet',
      customerGatewayId: 'CustomerGatewayId',
      name: 'Name',
      enableDpd: 'EnableDpd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpnBgpConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig,
      remoteCaCertificate: 'string',
      enableNatTraversal: 'boolean',
      effectImmediately: 'boolean',
      createTime: 'number',
      vcoHealthCheck: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck,
      vpnGatewayId: 'string',
      ipsecConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig,
      ikeConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig,
      localSubnet: 'string',
      vpnConnectionId: 'string',
      remoteSubnet: 'string',
      customerGatewayId: 'string',
      name: 'string',
      enableDpd: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionsResponseBodyVpnConnections extends $tea.Model {
  vpnConnection?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection[];
  static names(): { [key: string]: string } {
    return {
      vpnConnection: 'VpnConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnConnection: { 'type': 'array', 'itemType': DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayResponseBodyTagsTag extends $tea.Model {
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

export class DescribeVpnGatewayResponseBodyTags extends $tea.Model {
  tag?: DescribeVpnGatewayResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewayResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewayResponseBodyReservationData extends $tea.Model {
  status?: string;
  reservationOrderType?: string;
  reservationIpsec?: string;
  reservationSpec?: string;
  reservationSsl?: string;
  reservationMaxConnections?: number;
  reservationEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reservationOrderType: 'ReservationOrderType',
      reservationIpsec: 'ReservationIpsec',
      reservationSpec: 'ReservationSpec',
      reservationSsl: 'ReservationSsl',
      reservationMaxConnections: 'ReservationMaxConnections',
      reservationEndTime: 'ReservationEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reservationOrderType: 'string',
      reservationIpsec: 'string',
      reservationSpec: 'string',
      reservationSsl: 'string',
      reservationMaxConnections: 'number',
      reservationEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysRequestTag extends $tea.Model {
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

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTagsTag extends $tea.Model {
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

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags extends $tea.Model {
  tag?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData extends $tea.Model {
  status?: string;
  reservationOrderType?: string;
  reservationIpsec?: string;
  reservationSpec?: string;
  reservationSsl?: string;
  reservationMaxConnections?: number;
  reservationEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reservationOrderType: 'ReservationOrderType',
      reservationIpsec: 'ReservationIpsec',
      reservationSpec: 'ReservationSpec',
      reservationSsl: 'ReservationSsl',
      reservationMaxConnections: 'ReservationMaxConnections',
      reservationEndTime: 'ReservationEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reservationOrderType: 'string',
      reservationIpsec: 'string',
      reservationSpec: 'string',
      reservationSsl: 'string',
      reservationMaxConnections: 'number',
      reservationEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway extends $tea.Model {
  vpcId?: string;
  status?: string;
  vpnType?: string;
  sslMaxConnections?: number;
  internetIp?: string;
  spec?: string;
  createTime?: number;
  chargeType?: string;
  autoPropagate?: boolean;
  vpnGatewayId?: string;
  tags?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags;
  tag?: string;
  ipsecVpn?: string;
  endTime?: number;
  vSwitchId?: string;
  description?: string;
  enableBgp?: boolean;
  businessStatus?: string;
  sslVpn?: string;
  name?: string;
  reservationData?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      vpnType: 'VpnType',
      sslMaxConnections: 'SslMaxConnections',
      internetIp: 'InternetIp',
      spec: 'Spec',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      autoPropagate: 'AutoPropagate',
      vpnGatewayId: 'VpnGatewayId',
      tags: 'Tags',
      tag: 'Tag',
      ipsecVpn: 'IpsecVpn',
      endTime: 'EndTime',
      vSwitchId: 'VSwitchId',
      description: 'Description',
      enableBgp: 'EnableBgp',
      businessStatus: 'BusinessStatus',
      sslVpn: 'SslVpn',
      name: 'Name',
      reservationData: 'ReservationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      vpnType: 'string',
      sslMaxConnections: 'number',
      internetIp: 'string',
      spec: 'string',
      createTime: 'number',
      chargeType: 'string',
      autoPropagate: 'boolean',
      vpnGatewayId: 'string',
      tags: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayTags,
      tag: 'string',
      ipsecVpn: 'string',
      endTime: 'number',
      vSwitchId: 'string',
      description: 'string',
      enableBgp: 'boolean',
      businessStatus: 'string',
      sslVpn: 'string',
      name: 'string',
      reservationData: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGatewayReservationData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnGatewaysResponseBodyVpnGateways extends $tea.Model {
  vpnGateway?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway[];
  static names(): { [key: string]: string } {
    return {
      vpnGateway: 'VpnGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnGateway: { 'type': 'array', 'itemType': DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry extends $tea.Model {
  nextHop?: string;
  weight?: number;
  routeDest?: string;
  state?: string;
  createTime?: number;
  vpnInstanceId?: string;
  routeSource?: string;
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
      weight: 'Weight',
      routeDest: 'RouteDest',
      state: 'State',
      createTime: 'CreateTime',
      vpnInstanceId: 'VpnInstanceId',
      routeSource: 'RouteSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: 'string',
      weight: 'number',
      routeDest: 'string',
      state: 'string',
      createTime: 'number',
      vpnInstanceId: 'string',
      routeSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries extends $tea.Model {
  vpnPbrRouteEntry?: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      vpnPbrRouteEntry: 'VpnPbrRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnPbrRouteEntry: { 'type': 'array', 'itemType': DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry extends $tea.Model {
  routeEntryType?: string;
  nextHop?: string;
  weight?: number;
  routeDest?: string;
  asPath?: string;
  state?: string;
  createTime?: number;
  community?: string;
  source?: string;
  vpnInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryType: 'RouteEntryType',
      nextHop: 'NextHop',
      weight: 'Weight',
      routeDest: 'RouteDest',
      asPath: 'AsPath',
      state: 'State',
      createTime: 'CreateTime',
      community: 'Community',
      source: 'Source',
      vpnInstanceId: 'VpnInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryType: 'string',
      nextHop: 'string',
      weight: 'number',
      routeDest: 'string',
      asPath: 'string',
      state: 'string',
      createTime: 'number',
      community: 'string',
      source: 'string',
      vpnInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnRouteEntriesResponseBodyVpnRouteEntries extends $tea.Model {
  vpnRouteEntry?: DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      vpnRouteEntry: 'VpnRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnRouteEntry: { 'type': 'array', 'itemType': DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnSslServerLogsResponseBodyData extends $tea.Model {
  logs?: string[];
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds extends $tea.Model {
  routeTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBodyVRoutersVRouter extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  VRouterId?: string;
  description?: string;
  VRouterName?: string;
  routeTableIds?: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      VRouterId: 'VRouterId',
      description: 'Description',
      VRouterName: 'VRouterName',
      routeTableIds: 'RouteTableIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      VRouterId: 'string',
      description: 'string',
      VRouterName: 'string',
      routeTableIds: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVRoutersResponseBodyVRouters extends $tea.Model {
  VRouter?: DescribeVRoutersResponseBodyVRoutersVRouter[];
  static names(): { [key: string]: string } {
    return {
      VRouter: 'VRouter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouter: { 'type': 'array', 'itemType': DescribeVRoutersResponseBodyVRoutersVRouter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponseBodyRouteTable extends $tea.Model {
  routeTableType?: string;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeTableType: 'RouteTableType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableType: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag extends $tea.Model {
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

export class DescribeVSwitchesResponseBodyVSwitchesVSwitchTags extends $tea.Model {
  tag?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitchTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable extends $tea.Model {
  routeTableType?: string;
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      routeTableType: 'RouteTableType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableType: 'string',
      routeTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $tea.Model {
  creationTime?: string;
  status?: string;
  vpcId?: string;
  isDefault?: boolean;
  availableIpAddressCount?: number;
  tags?: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags;
  routeTable?: DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable;
  networkAclId?: string;
  ownerId?: number;
  vSwitchId?: string;
  cidrBlock?: string;
  description?: string;
  resourceGroupId?: string;
  zoneId?: string;
  ipv6CidrBlock?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      vpcId: 'VpcId',
      isDefault: 'IsDefault',
      availableIpAddressCount: 'AvailableIpAddressCount',
      tags: 'Tags',
      routeTable: 'RouteTable',
      networkAclId: 'NetworkAclId',
      ownerId: 'OwnerId',
      vSwitchId: 'VSwitchId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      vpcId: 'string',
      isDefault: 'boolean',
      availableIpAddressCount: 'number',
      tags: DescribeVSwitchesResponseBodyVSwitchesVSwitchTags,
      routeTable: DescribeVSwitchesResponseBodyVSwitchesVSwitchRouteTable,
      networkAclId: 'string',
      ownerId: 'number',
      vSwitchId: 'string',
      cidrBlock: 'string',
      description: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      ipv6CidrBlock: 'string',
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

export class DescribeZonesResponseBodyZonesZone extends $tea.Model {
  localName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
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

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig extends $tea.Model {
  ipsecLifetime?: number;
  ipsecEncAlg?: string;
  ipsecPfs?: string;
  ipsecAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecLifetime: 'IpsecLifetime',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecPfs: 'IpsecPfs',
      ipsecAuthAlg: 'IpsecAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecLifetime: 'number',
      ipsecEncAlg: 'string',
      ipsecPfs: 'string',
      ipsecAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig extends $tea.Model {
  remoteId?: string;
  ikeLifetime?: number;
  ikeEncAlg?: string;
  localId?: string;
  ikeMode?: string;
  ikeVersion?: string;
  ikePfs?: string;
  psk?: string;
  ikeAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      remoteId: 'RemoteId',
      ikeLifetime: 'IkeLifetime',
      ikeEncAlg: 'IkeEncAlg',
      localId: 'LocalId',
      ikeMode: 'IkeMode',
      ikeVersion: 'IkeVersion',
      ikePfs: 'IkePfs',
      psk: 'Psk',
      ikeAuthAlg: 'IkeAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteId: 'string',
      ikeLifetime: 'number',
      ikeEncAlg: 'string',
      localId: 'string',
      ikeMode: 'string',
      ikeVersion: 'string',
      ikePfs: 'string',
      psk: 'string',
      ikeAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig extends $tea.Model {
  remote?: string;
  local?: string;
  remoteSubnet?: string;
  ipsecConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig;
  ikeConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig;
  localSubnet?: string;
  static names(): { [key: string]: string } {
    return {
      remote: 'Remote',
      local: 'Local',
      remoteSubnet: 'RemoteSubnet',
      ipsecConfig: 'IpsecConfig',
      ikeConfig: 'IkeConfig',
      localSubnet: 'LocalSubnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remote: 'string',
      local: 'string',
      remoteSubnet: 'string',
      ipsecConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig,
      ikeConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig,
      localSubnet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDhcpOptionsSetResponseBodyDhcpOptions extends $tea.Model {
  domainNameServers?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainNameServers: 'DomainNameServers',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNameServers: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDhcpOptionsSetResponseBodyAssociateVpcs extends $tea.Model {
  associateStatus?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associateStatus: 'AssociateStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateStatus: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyForwardTable extends $tea.Model {
  forwardEntryCount?: number;
  forwardTableId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryCount: 'ForwardEntryCount',
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryCount: 'number',
      forwardTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyIpList extends $tea.Model {
  usingStatus?: string;
  ipAddress?: string;
  allocationId?: string;
  static names(): { [key: string]: string } {
    return {
      usingStatus: 'UsingStatus',
      ipAddress: 'IpAddress',
      allocationId: 'AllocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usingStatus: 'string',
      ipAddress: 'string',
      allocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyDeletionProtectionInfo extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyBillingConfig extends $tea.Model {
  autoPay?: string;
  spec?: string;
  internetChargeType?: string;
  instanceChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      spec: 'Spec',
      internetChargeType: 'InternetChargeType',
      instanceChargeType: 'InstanceChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'string',
      spec: 'string',
      internetChargeType: 'string',
      instanceChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodySnatTable extends $tea.Model {
  snatEntryCount?: number;
  snatTableId?: string;
  static names(): { [key: string]: string } {
    return {
      snatEntryCount: 'SnatEntryCount',
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntryCount: 'number',
      snatTableId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayAttributeResponseBodyPrivateInfo extends $tea.Model {
  vswitchId?: string;
  eniInstanceId?: string;
  maxBandwidth?: number;
  privateIpAddress?: string;
  izNo?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'VswitchId',
      eniInstanceId: 'EniInstanceId',
      maxBandwidth: 'MaxBandwidth',
      privateIpAddress: 'PrivateIpAddress',
      izNo: 'IzNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      eniInstanceId: 'string',
      maxBandwidth: 'number',
      privateIpAddress: 'string',
      izNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatGatewayConvertStatusResponseBodyConvertSteps extends $tea.Model {
  stepStartTime?: string;
  stepStatus?: string;
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      stepStartTime: 'StepStartTime',
      stepStatus: 'StepStatus',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepStartTime: 'string',
      stepStatus: 'string',
      stepName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions extends $tea.Model {
  domainNameServers?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainNameServers: 'DomainNameServers',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNameServers: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDhcpOptionsSetsResponseBodyDhcpOptionsSets extends $tea.Model {
  dhcpOptionsSetDescription?: string;
  status?: string;
  dhcpOptionsSetId?: string;
  dhcpOptions?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions;
  dhcpOptionsSetName?: string;
  associateVpcCount?: number;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSetDescription: 'DhcpOptionsSetDescription',
      status: 'Status',
      dhcpOptionsSetId: 'DhcpOptionsSetId',
      dhcpOptions: 'DhcpOptions',
      dhcpOptionsSetName: 'DhcpOptionsSetName',
      associateVpcCount: 'AssociateVpcCount',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dhcpOptionsSetDescription: 'string',
      status: 'string',
      dhcpOptionsSetId: 'string',
      dhcpOptions: ListDhcpOptionsSetsResponseBodyDhcpOptionsSetsDhcpOptions,
      dhcpOptionsSetName: 'string',
      associateVpcCount: 'number',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnhanhcedNatGatewayAvailableZonesResponseBodyZones extends $tea.Model {
  localName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersResponseBodyIpsecServersIkeConfig extends $tea.Model {
  remoteId?: string;
  ikeLifetime?: number;
  ikeEncAlg?: string;
  localId?: string;
  ikeMode?: string;
  ikeVersion?: string;
  ikePfs?: string;
  ikeAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      remoteId: 'RemoteId',
      ikeLifetime: 'IkeLifetime',
      ikeEncAlg: 'IkeEncAlg',
      localId: 'LocalId',
      ikeMode: 'IkeMode',
      ikeVersion: 'IkeVersion',
      ikePfs: 'IkePfs',
      ikeAuthAlg: 'IkeAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteId: 'string',
      ikeLifetime: 'number',
      ikeEncAlg: 'string',
      localId: 'string',
      ikeMode: 'string',
      ikeVersion: 'string',
      ikePfs: 'string',
      ikeAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersResponseBodyIpsecServersIpsecConfig extends $tea.Model {
  ipsecLifetime?: number;
  ipsecEncAlg?: string;
  ipsecPfs?: string;
  ipsecAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecLifetime: 'IpsecLifetime',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecPfs: 'IpsecPfs',
      ipsecAuthAlg: 'IpsecAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecLifetime: 'number',
      ipsecEncAlg: 'string',
      ipsecPfs: 'string',
      ipsecAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersResponseBodyIpsecServers extends $tea.Model {
  creationTime?: string;
  onlineClientCount?: number;
  internetIp?: string;
  IDaaSInstanceId?: string;
  ipsecServerName?: string;
  effectImmediately?: boolean;
  vpnGatewayId?: string;
  ikeConfig?: ListIpsecServersResponseBodyIpsecServersIkeConfig;
  ipsecConfig?: ListIpsecServersResponseBodyIpsecServersIpsecConfig;
  psk?: string;
  localSubnet?: string;
  regionId?: string;
  pskEnabled?: boolean;
  ipsecServerId?: string;
  multiFactorAuthEnabled?: boolean;
  maxConnections?: number;
  clientIpPool?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      onlineClientCount: 'OnlineClientCount',
      internetIp: 'InternetIp',
      IDaaSInstanceId: 'IDaaSInstanceId',
      ipsecServerName: 'IpsecServerName',
      effectImmediately: 'EffectImmediately',
      vpnGatewayId: 'VpnGatewayId',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      psk: 'Psk',
      localSubnet: 'LocalSubnet',
      regionId: 'RegionId',
      pskEnabled: 'PskEnabled',
      ipsecServerId: 'IpsecServerId',
      multiFactorAuthEnabled: 'MultiFactorAuthEnabled',
      maxConnections: 'MaxConnections',
      clientIpPool: 'ClientIpPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      onlineClientCount: 'number',
      internetIp: 'string',
      IDaaSInstanceId: 'string',
      ipsecServerName: 'string',
      effectImmediately: 'boolean',
      vpnGatewayId: 'string',
      ikeConfig: ListIpsecServersResponseBodyIpsecServersIkeConfig,
      ipsecConfig: ListIpsecServersResponseBodyIpsecServersIpsecConfig,
      psk: 'string',
      localSubnet: 'string',
      regionId: 'string',
      pskEnabled: 'boolean',
      ipsecServerId: 'string',
      multiFactorAuthEnabled: 'boolean',
      maxConnections: 'number',
      clientIpPool: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNatGatewayEcsMetricResponseBodyMetricDataList extends $tea.Model {
  rxBps?: number;
  activeSessionNum?: number;
  txBps?: number;
  newSessionRate?: number;
  txPps?: number;
  natGatewayId?: string;
  timestamp?: number;
  rxPps?: number;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      rxBps: 'RxBps',
      activeSessionNum: 'ActiveSessionNum',
      txBps: 'TxBps',
      newSessionRate: 'NewSessionRate',
      txPps: 'TxPps',
      natGatewayId: 'NatGatewayId',
      timestamp: 'Timestamp',
      rxPps: 'RxPps',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rxBps: 'number',
      activeSessionNum: 'number',
      txBps: 'number',
      newSessionRate: 'number',
      txPps: 'number',
      natGatewayId: 'string',
      timestamp: 'number',
      rxPps: 'number',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhysicalConnectionFeaturesResponseBodyPhysicalConnectionFeatures extends $tea.Model {
  featureValue?: string;
  featureKey?: string;
  static names(): { [key: string]: string } {
    return {
      featureValue: 'FeatureValue',
      featureKey: 'FeatureKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureValue: 'string',
      featureKey: 'string',
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
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

export class ListVpnCertificateAssociationsResponseBodyVpnCertificateRelations extends $tea.Model {
  certificateType?: string;
  associationTime?: string;
  vpnGatewayId?: string;
  certificateId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateType: 'CertificateType',
      associationTime: 'AssociationTime',
      vpnGatewayId: 'VpnGatewayId',
      certificateId: 'CertificateId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      associationTime: 'string',
      vpnGatewayId: 'string',
      certificateId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck extends $tea.Model {
  dip?: string;
  interval?: number;
  retry?: number;
  sip?: string;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      dip: 'Dip',
      interval: 'Interval',
      retry: 'Retry',
      sip: 'Sip',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dip: 'string',
      interval: 'number',
      retry: 'number',
      sip: 'string',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBodyIpsecConfig extends $tea.Model {
  ipsecLifetime?: number;
  ipsecEncAlg?: string;
  ipsecPfs?: string;
  ipsecAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecLifetime: 'IpsecLifetime',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecPfs: 'IpsecPfs',
      ipsecAuthAlg: 'IpsecAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecLifetime: 'number',
      ipsecEncAlg: 'string',
      ipsecPfs: 'string',
      ipsecAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBodyIkeConfig extends $tea.Model {
  remoteId?: string;
  ikeLifetime?: number;
  ikeEncAlg?: string;
  localId?: string;
  ikeMode?: string;
  ikeVersion?: string;
  ikePfs?: string;
  psk?: string;
  ikeAuthAlg?: string;
  static names(): { [key: string]: string } {
    return {
      remoteId: 'RemoteId',
      ikeLifetime: 'IkeLifetime',
      ikeEncAlg: 'IkeEncAlg',
      localId: 'LocalId',
      ikeMode: 'IkeMode',
      ikeVersion: 'IkeVersion',
      ikePfs: 'IkePfs',
      psk: 'Psk',
      ikeAuthAlg: 'IkeAuthAlg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteId: 'string',
      ikeLifetime: 'number',
      ikeEncAlg: 'string',
      localId: 'string',
      ikeMode: 'string',
      ikeVersion: 'string',
      ikePfs: 'string',
      psk: 'string',
      ikeAuthAlg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig extends $tea.Model {
  status?: string;
  peerBgpIp?: string;
  tunnelCidr?: string;
  enableBgp?: string;
  localBgpIp?: string;
  peerAsn?: number;
  localAsn?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
      enableBgp: 'EnableBgp',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      localAsn: 'LocalAsn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      peerBgpIp: 'string',
      tunnelCidr: 'string',
      enableBgp: 'string',
      localBgpIp: 'string',
      peerAsn: 'number',
      localAsn: 'number',
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

export class UnassociateNetworkAclRequestResource extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAclEntriesRequestIngressAclEntries extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  policy?: string;
  networkAclEntryName?: string;
  description?: string;
  sourceCidrIp?: string;
  protocol?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      policy: 'Policy',
      networkAclEntryName: 'NetworkAclEntryName',
      description: 'Description',
      sourceCidrIp: 'SourceCidrIp',
      protocol: 'Protocol',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      policy: 'string',
      networkAclEntryName: 'string',
      description: 'string',
      sourceCidrIp: 'string',
      protocol: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAclEntriesRequestEgressAclEntries extends $tea.Model {
  networkAclEntryId?: string;
  entryType?: string;
  policy?: string;
  networkAclEntryName?: string;
  description?: string;
  protocol?: string;
  destinationCidrIp?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclEntryId: 'NetworkAclEntryId',
      entryType: 'EntryType',
      policy: 'Policy',
      networkAclEntryName: 'NetworkAclEntryName',
      description: 'Description',
      protocol: 'Protocol',
      destinationCidrIp: 'DestinationCidrIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclEntryId: 'string',
      entryType: 'string',
      policy: 'string',
      networkAclEntryName: 'string',
      description: 'string',
      protocol: 'string',
      destinationCidrIp: 'string',
      port: 'string',
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
    this._endpointMap = {
      'cn-qingdao': "vpc.aliyuncs.com",
      'cn-beijing': "vpc.aliyuncs.com",
      'cn-hangzhou': "vpc.aliyuncs.com",
      'cn-shanghai': "vpc.aliyuncs.com",
      'cn-shenzhen': "vpc.aliyuncs.com",
      'cn-hongkong': "vpc.aliyuncs.com",
      'ap-southeast-1': "vpc.aliyuncs.com",
      'us-west-1': "vpc.aliyuncs.com",
      'us-east-1': "vpc.aliyuncs.com",
      'cn-shanghai-finance-1': "vpc.aliyuncs.com",
      'cn-shenzhen-finance-1': "vpc.aliyuncs.com",
      'cn-north-2-gov-1': "vpc.aliyuncs.com",
      'ap-northeast-2-pop': "vpc.aliyuncs.com",
      'cn-beijing-finance-1': "vpc.aliyuncs.com",
      'cn-beijing-finance-pop': "vpc.aliyuncs.com",
      'cn-beijing-gov-1': "vpc.aliyuncs.com",
      'cn-beijing-nu16-b01': "vpc.aliyuncs.com",
      'cn-edge-1': "vpc-nebula.cn-qingdao-nebula.aliyuncs.com",
      'cn-fujian': "vpc.aliyuncs.com",
      'cn-haidian-cm12-c01': "vpc.aliyuncs.com",
      'cn-hangzhou-bj-b01': "vpc.aliyuncs.com",
      'cn-hangzhou-finance': "vpc.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "vpc.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "vpc.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "vpc.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "vpc.aliyuncs.com",
      'cn-hangzhou-test-306': "vpc.aliyuncs.com",
      'cn-hongkong-finance-pop': "vpc.aliyuncs.com",
      'cn-qingdao-nebula': "vpc-nebula.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "vpc.aliyuncs.com",
      'cn-shanghai-et2-b01': "vpc.aliyuncs.com",
      'cn-shanghai-inner': "vpc.aliyuncs.com",
      'cn-shanghai-internal-test-1': "vpc.aliyuncs.com",
      'cn-shenzhen-inner': "vpc.aliyuncs.com",
      'cn-shenzhen-st4-d01': "vpc.aliyuncs.com",
      'cn-shenzhen-su18-b01': "vpc.aliyuncs.com",
      'cn-wuhan': "vpc.aliyuncs.com",
      'cn-yushanfang': "vpc.aliyuncs.com",
      'cn-zhangbei-na61-b01': "vpc.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "vpc.cn-zhangjiakou.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "vpc-nebula.cn-qingdao-nebula.aliyuncs.com",
      'eu-west-1-oxs': "vpc-nebula.cn-shenzhen-cloudstone.aliyuncs.com",
      'rus-west-1-pop': "vpc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activateRouterInterfaceWithOptions(request: ActivateRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<ActivateRouterInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActivateRouterInterfaceResponse>(await this.doRPCRequest("ActivateRouterInterface", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ActivateRouterInterfaceResponse({}));
  }

  async activateRouterInterface(request: ActivateRouterInterfaceRequest): Promise<ActivateRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateRouterInterfaceWithOptions(request, runtime);
  }

  async activeFlowLogWithOptions(request: ActiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<ActiveFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActiveFlowLogResponse>(await this.doRPCRequest("ActiveFlowLog", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ActiveFlowLogResponse({}));
  }

  async activeFlowLog(request: ActiveFlowLogRequest): Promise<ActiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeFlowLogWithOptions(request, runtime);
  }

  async addBgpNetworkWithOptions(request: AddBgpNetworkRequest, runtime: $Util.RuntimeOptions): Promise<AddBgpNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddBgpNetworkResponse>(await this.doRPCRequest("AddBgpNetwork", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AddBgpNetworkResponse({}));
  }

  async addBgpNetwork(request: AddBgpNetworkRequest): Promise<AddBgpNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBgpNetworkWithOptions(request, runtime);
  }

  async addCommonBandwidthPackageIpWithOptions(request: AddCommonBandwidthPackageIpRequest, runtime: $Util.RuntimeOptions): Promise<AddCommonBandwidthPackageIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCommonBandwidthPackageIpResponse>(await this.doRPCRequest("AddCommonBandwidthPackageIp", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AddCommonBandwidthPackageIpResponse({}));
  }

  async addCommonBandwidthPackageIp(request: AddCommonBandwidthPackageIpRequest): Promise<AddCommonBandwidthPackageIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCommonBandwidthPackageIpWithOptions(request, runtime);
  }

  async addCommonBandwidthPackageIpsWithOptions(request: AddCommonBandwidthPackageIpsRequest, runtime: $Util.RuntimeOptions): Promise<AddCommonBandwidthPackageIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCommonBandwidthPackageIpsResponse>(await this.doRPCRequest("AddCommonBandwidthPackageIps", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AddCommonBandwidthPackageIpsResponse({}));
  }

  async addCommonBandwidthPackageIps(request: AddCommonBandwidthPackageIpsRequest): Promise<AddCommonBandwidthPackageIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCommonBandwidthPackageIpsWithOptions(request, runtime);
  }

  async addGlobalAccelerationInstanceIpWithOptions(request: AddGlobalAccelerationInstanceIpRequest, runtime: $Util.RuntimeOptions): Promise<AddGlobalAccelerationInstanceIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGlobalAccelerationInstanceIpResponse>(await this.doRPCRequest("AddGlobalAccelerationInstanceIp", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AddGlobalAccelerationInstanceIpResponse({}));
  }

  async addGlobalAccelerationInstanceIp(request: AddGlobalAccelerationInstanceIpRequest): Promise<AddGlobalAccelerationInstanceIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGlobalAccelerationInstanceIpWithOptions(request, runtime);
  }

  async addIPv6TranslatorAclListEntryWithOptions(request: AddIPv6TranslatorAclListEntryRequest, runtime: $Util.RuntimeOptions): Promise<AddIPv6TranslatorAclListEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddIPv6TranslatorAclListEntryResponse>(await this.doRPCRequest("AddIPv6TranslatorAclListEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AddIPv6TranslatorAclListEntryResponse({}));
  }

  async addIPv6TranslatorAclListEntry(request: AddIPv6TranslatorAclListEntryRequest): Promise<AddIPv6TranslatorAclListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIPv6TranslatorAclListEntryWithOptions(request, runtime);
  }

  async allocateEipAddressWithOptions(request: AllocateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateEipAddressResponse>(await this.doRPCRequest("AllocateEipAddress", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateEipAddressResponse({}));
  }

  async allocateEipAddress(request: AllocateEipAddressRequest): Promise<AllocateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateEipAddressWithOptions(request, runtime);
  }

  async allocateEipAddressProWithOptions(request: AllocateEipAddressProRequest, runtime: $Util.RuntimeOptions): Promise<AllocateEipAddressProResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateEipAddressProResponse>(await this.doRPCRequest("AllocateEipAddressPro", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateEipAddressProResponse({}));
  }

  async allocateEipAddressPro(request: AllocateEipAddressProRequest): Promise<AllocateEipAddressProResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateEipAddressProWithOptions(request, runtime);
  }

  async allocateEipSegmentAddressWithOptions(request: AllocateEipSegmentAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateEipSegmentAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateEipSegmentAddressResponse>(await this.doRPCRequest("AllocateEipSegmentAddress", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateEipSegmentAddressResponse({}));
  }

  async allocateEipSegmentAddress(request: AllocateEipSegmentAddressRequest): Promise<AllocateEipSegmentAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateEipSegmentAddressWithOptions(request, runtime);
  }

  async allocateIpv6InternetBandwidthWithOptions(request: AllocateIpv6InternetBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<AllocateIpv6InternetBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateIpv6InternetBandwidthResponse>(await this.doRPCRequest("AllocateIpv6InternetBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateIpv6InternetBandwidthResponse({}));
  }

  async allocateIpv6InternetBandwidth(request: AllocateIpv6InternetBandwidthRequest): Promise<AllocateIpv6InternetBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateIpv6InternetBandwidthWithOptions(request, runtime);
  }

  async associateEipAddressWithOptions(request: AssociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<AssociateEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateEipAddressResponse>(await this.doRPCRequest("AssociateEipAddress", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateEipAddressResponse({}));
  }

  async associateEipAddress(request: AssociateEipAddressRequest): Promise<AssociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateEipAddressWithOptions(request, runtime);
  }

  async associateGlobalAccelerationInstanceWithOptions(request: AssociateGlobalAccelerationInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AssociateGlobalAccelerationInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateGlobalAccelerationInstanceResponse>(await this.doRPCRequest("AssociateGlobalAccelerationInstance", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateGlobalAccelerationInstanceResponse({}));
  }

  async associateGlobalAccelerationInstance(request: AssociateGlobalAccelerationInstanceRequest): Promise<AssociateGlobalAccelerationInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateGlobalAccelerationInstanceWithOptions(request, runtime);
  }

  async associateHaVipWithOptions(request: AssociateHaVipRequest, runtime: $Util.RuntimeOptions): Promise<AssociateHaVipResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateHaVipResponse>(await this.doRPCRequest("AssociateHaVip", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateHaVipResponse({}));
  }

  async associateHaVip(request: AssociateHaVipRequest): Promise<AssociateHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateHaVipWithOptions(request, runtime);
  }

  async associateNetworkAclWithOptions(request: AssociateNetworkAclRequest, runtime: $Util.RuntimeOptions): Promise<AssociateNetworkAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateNetworkAclResponse>(await this.doRPCRequest("AssociateNetworkAcl", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateNetworkAclResponse({}));
  }

  async associateNetworkAcl(request: AssociateNetworkAclRequest): Promise<AssociateNetworkAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateNetworkAclWithOptions(request, runtime);
  }

  async associatePhysicalConnectionToVirtualBorderRouterWithOptions(request: AssociatePhysicalConnectionToVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<AssociatePhysicalConnectionToVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociatePhysicalConnectionToVirtualBorderRouterResponse>(await this.doRPCRequest("AssociatePhysicalConnectionToVirtualBorderRouter", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociatePhysicalConnectionToVirtualBorderRouterResponse({}));
  }

  async associatePhysicalConnectionToVirtualBorderRouter(request: AssociatePhysicalConnectionToVirtualBorderRouterRequest): Promise<AssociatePhysicalConnectionToVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associatePhysicalConnectionToVirtualBorderRouterWithOptions(request, runtime);
  }

  async associateRouteTableWithOptions(request: AssociateRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<AssociateRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateRouteTableResponse>(await this.doRPCRequest("AssociateRouteTable", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateRouteTableResponse({}));
  }

  async associateRouteTable(request: AssociateRouteTableRequest): Promise<AssociateRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateRouteTableWithOptions(request, runtime);
  }

  async associateVpcCidrBlockWithOptions(request: AssociateVpcCidrBlockRequest, runtime: $Util.RuntimeOptions): Promise<AssociateVpcCidrBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateVpcCidrBlockResponse>(await this.doRPCRequest("AssociateVpcCidrBlock", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateVpcCidrBlockResponse({}));
  }

  async associateVpcCidrBlock(request: AssociateVpcCidrBlockRequest): Promise<AssociateVpcCidrBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateVpcCidrBlockWithOptions(request, runtime);
  }

  async associateVpnGatewayWithCertificateWithOptions(request: AssociateVpnGatewayWithCertificateRequest, runtime: $Util.RuntimeOptions): Promise<AssociateVpnGatewayWithCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateVpnGatewayWithCertificateResponse>(await this.doRPCRequest("AssociateVpnGatewayWithCertificate", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateVpnGatewayWithCertificateResponse({}));
  }

  async associateVpnGatewayWithCertificate(request: AssociateVpnGatewayWithCertificateRequest): Promise<AssociateVpnGatewayWithCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateVpnGatewayWithCertificateWithOptions(request, runtime);
  }

  async attachDhcpOptionsSetToVpcWithOptions(request: AttachDhcpOptionsSetToVpcRequest, runtime: $Util.RuntimeOptions): Promise<AttachDhcpOptionsSetToVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachDhcpOptionsSetToVpcResponse>(await this.doRPCRequest("AttachDhcpOptionsSetToVpc", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new AttachDhcpOptionsSetToVpcResponse({}));
  }

  async attachDhcpOptionsSetToVpc(request: AttachDhcpOptionsSetToVpcRequest): Promise<AttachDhcpOptionsSetToVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDhcpOptionsSetToVpcWithOptions(request, runtime);
  }

  async cancelCommonBandwidthPackageIpBandwidthWithOptions(request: CancelCommonBandwidthPackageIpBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<CancelCommonBandwidthPackageIpBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelCommonBandwidthPackageIpBandwidthResponse>(await this.doRPCRequest("CancelCommonBandwidthPackageIpBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CancelCommonBandwidthPackageIpBandwidthResponse({}));
  }

  async cancelCommonBandwidthPackageIpBandwidth(request: CancelCommonBandwidthPackageIpBandwidthRequest): Promise<CancelCommonBandwidthPackageIpBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCommonBandwidthPackageIpBandwidthWithOptions(request, runtime);
  }

  async cancelExpressCloudConnectionWithOptions(request: CancelExpressCloudConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CancelExpressCloudConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelExpressCloudConnectionResponse>(await this.doRPCRequest("CancelExpressCloudConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CancelExpressCloudConnectionResponse({}));
  }

  async cancelExpressCloudConnection(request: CancelExpressCloudConnectionRequest): Promise<CancelExpressCloudConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelExpressCloudConnectionWithOptions(request, runtime);
  }

  async cancelPhysicalConnectionWithOptions(request: CancelPhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CancelPhysicalConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelPhysicalConnectionResponse>(await this.doRPCRequest("CancelPhysicalConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CancelPhysicalConnectionResponse({}));
  }

  async cancelPhysicalConnection(request: CancelPhysicalConnectionRequest): Promise<CancelPhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPhysicalConnectionWithOptions(request, runtime);
  }

  async confirmPhysicalConnectionWithOptions(request: ConfirmPhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmPhysicalConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmPhysicalConnectionResponse>(await this.doRPCRequest("ConfirmPhysicalConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmPhysicalConnectionResponse({}));
  }

  async confirmPhysicalConnection(request: ConfirmPhysicalConnectionRequest): Promise<ConfirmPhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmPhysicalConnectionWithOptions(request, runtime);
  }

  async connectRouterInterfaceWithOptions(request: ConnectRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<ConnectRouterInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConnectRouterInterfaceResponse>(await this.doRPCRequest("ConnectRouterInterface", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConnectRouterInterfaceResponse({}));
  }

  async connectRouterInterface(request: ConnectRouterInterfaceRequest): Promise<ConnectRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectRouterInterfaceWithOptions(request, runtime);
  }

  async convertBandwidthPackageWithOptions(request: ConvertBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<ConvertBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertBandwidthPackageResponse>(await this.doRPCRequest("ConvertBandwidthPackage", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertBandwidthPackageResponse({}));
  }

  async convertBandwidthPackage(request: ConvertBandwidthPackageRequest): Promise<ConvertBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertBandwidthPackageWithOptions(request, runtime);
  }

  async copyNetworkAclEntriesWithOptions(request: CopyNetworkAclEntriesRequest, runtime: $Util.RuntimeOptions): Promise<CopyNetworkAclEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyNetworkAclEntriesResponse>(await this.doRPCRequest("CopyNetworkAclEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CopyNetworkAclEntriesResponse({}));
  }

  async copyNetworkAclEntries(request: CopyNetworkAclEntriesRequest): Promise<CopyNetworkAclEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyNetworkAclEntriesWithOptions(request, runtime);
  }

  async createBgpGroupWithOptions(request: CreateBgpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBgpGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBgpGroupResponse>(await this.doRPCRequest("CreateBgpGroup", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBgpGroupResponse({}));
  }

  async createBgpGroup(request: CreateBgpGroupRequest): Promise<CreateBgpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBgpGroupWithOptions(request, runtime);
  }

  async createBgpPeerWithOptions(request: CreateBgpPeerRequest, runtime: $Util.RuntimeOptions): Promise<CreateBgpPeerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBgpPeerResponse>(await this.doRPCRequest("CreateBgpPeer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBgpPeerResponse({}));
  }

  async createBgpPeer(request: CreateBgpPeerRequest): Promise<CreateBgpPeerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBgpPeerWithOptions(request, runtime);
  }

  async createCommonBandwidthPackageWithOptions(request: CreateCommonBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommonBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCommonBandwidthPackageResponse>(await this.doRPCRequest("CreateCommonBandwidthPackage", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCommonBandwidthPackageResponse({}));
  }

  async createCommonBandwidthPackage(request: CreateCommonBandwidthPackageRequest): Promise<CreateCommonBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommonBandwidthPackageWithOptions(request, runtime);
  }

  async createCustomerGatewayWithOptions(request: CreateCustomerGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomerGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomerGatewayResponse>(await this.doRPCRequest("CreateCustomerGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomerGatewayResponse({}));
  }

  async createCustomerGateway(request: CreateCustomerGatewayRequest): Promise<CreateCustomerGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomerGatewayWithOptions(request, runtime);
  }

  async createDhcpOptionsSetWithOptions(request: CreateDhcpOptionsSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDhcpOptionsSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDhcpOptionsSetResponse>(await this.doRPCRequest("CreateDhcpOptionsSet", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDhcpOptionsSetResponse({}));
  }

  async createDhcpOptionsSet(request: CreateDhcpOptionsSetRequest): Promise<CreateDhcpOptionsSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDhcpOptionsSetWithOptions(request, runtime);
  }

  async createExpressCloudConnectionWithOptions(request: CreateExpressCloudConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateExpressCloudConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateExpressCloudConnectionResponse>(await this.doRPCRequest("CreateExpressCloudConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateExpressCloudConnectionResponse({}));
  }

  async createExpressCloudConnection(request: CreateExpressCloudConnectionRequest): Promise<CreateExpressCloudConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExpressCloudConnectionWithOptions(request, runtime);
  }

  async createFlowLogWithOptions(request: CreateFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowLogResponse>(await this.doRPCRequest("CreateFlowLog", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowLogResponse({}));
  }

  async createFlowLog(request: CreateFlowLogRequest): Promise<CreateFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowLogWithOptions(request, runtime);
  }

  async createForwardEntryWithOptions(request: CreateForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateForwardEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateForwardEntryResponse>(await this.doRPCRequest("CreateForwardEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateForwardEntryResponse({}));
  }

  async createForwardEntry(request: CreateForwardEntryRequest): Promise<CreateForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createForwardEntryWithOptions(request, runtime);
  }

  async createGlobalAccelerationInstanceWithOptions(request: CreateGlobalAccelerationInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalAccelerationInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGlobalAccelerationInstanceResponse>(await this.doRPCRequest("CreateGlobalAccelerationInstance", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGlobalAccelerationInstanceResponse({}));
  }

  async createGlobalAccelerationInstance(request: CreateGlobalAccelerationInstanceRequest): Promise<CreateGlobalAccelerationInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalAccelerationInstanceWithOptions(request, runtime);
  }

  async createHaVipWithOptions(request: CreateHaVipRequest, runtime: $Util.RuntimeOptions): Promise<CreateHaVipResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHaVipResponse>(await this.doRPCRequest("CreateHaVip", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHaVipResponse({}));
  }

  async createHaVip(request: CreateHaVipRequest): Promise<CreateHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHaVipWithOptions(request, runtime);
  }

  async createIpsecServerWithOptions(request: CreateIpsecServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpsecServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpsecServerResponse>(await this.doRPCRequest("CreateIpsecServer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpsecServerResponse({}));
  }

  async createIpsecServer(request: CreateIpsecServerRequest): Promise<CreateIpsecServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpsecServerWithOptions(request, runtime);
  }

  async createIpv6EgressOnlyRuleWithOptions(request: CreateIpv6EgressOnlyRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpv6EgressOnlyRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpv6EgressOnlyRuleResponse>(await this.doRPCRequest("CreateIpv6EgressOnlyRule", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpv6EgressOnlyRuleResponse({}));
  }

  async createIpv6EgressOnlyRule(request: CreateIpv6EgressOnlyRuleRequest): Promise<CreateIpv6EgressOnlyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpv6EgressOnlyRuleWithOptions(request, runtime);
  }

  async createIpv6GatewayWithOptions(request: CreateIpv6GatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpv6GatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpv6GatewayResponse>(await this.doRPCRequest("CreateIpv6Gateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpv6GatewayResponse({}));
  }

  async createIpv6Gateway(request: CreateIpv6GatewayRequest): Promise<CreateIpv6GatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpv6GatewayWithOptions(request, runtime);
  }

  async createIPv6TranslatorWithOptions(request: CreateIPv6TranslatorRequest, runtime: $Util.RuntimeOptions): Promise<CreateIPv6TranslatorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIPv6TranslatorResponse>(await this.doRPCRequest("CreateIPv6Translator", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIPv6TranslatorResponse({}));
  }

  async createIPv6Translator(request: CreateIPv6TranslatorRequest): Promise<CreateIPv6TranslatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIPv6TranslatorWithOptions(request, runtime);
  }

  async createIPv6TranslatorAclListWithOptions(request: CreateIPv6TranslatorAclListRequest, runtime: $Util.RuntimeOptions): Promise<CreateIPv6TranslatorAclListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIPv6TranslatorAclListResponse>(await this.doRPCRequest("CreateIPv6TranslatorAclList", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIPv6TranslatorAclListResponse({}));
  }

  async createIPv6TranslatorAclList(request: CreateIPv6TranslatorAclListRequest): Promise<CreateIPv6TranslatorAclListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIPv6TranslatorAclListWithOptions(request, runtime);
  }

  async createIPv6TranslatorEntryWithOptions(request: CreateIPv6TranslatorEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateIPv6TranslatorEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIPv6TranslatorEntryResponse>(await this.doRPCRequest("CreateIPv6TranslatorEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIPv6TranslatorEntryResponse({}));
  }

  async createIPv6TranslatorEntry(request: CreateIPv6TranslatorEntryRequest): Promise<CreateIPv6TranslatorEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIPv6TranslatorEntryWithOptions(request, runtime);
  }

  async createNatGatewayWithOptions(request: CreateNatGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateNatGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNatGatewayResponse>(await this.doRPCRequest("CreateNatGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNatGatewayResponse({}));
  }

  async createNatGateway(request: CreateNatGatewayRequest): Promise<CreateNatGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNatGatewayWithOptions(request, runtime);
  }

  async createNetworkAclWithOptions(request: CreateNetworkAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNetworkAclResponse>(await this.doRPCRequest("CreateNetworkAcl", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNetworkAclResponse({}));
  }

  async createNetworkAcl(request: CreateNetworkAclRequest): Promise<CreateNetworkAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkAclWithOptions(request, runtime);
  }

  async createPhysicalConnectionOccupancyOrderWithOptions(request: CreatePhysicalConnectionOccupancyOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhysicalConnectionOccupancyOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePhysicalConnectionOccupancyOrderResponse>(await this.doRPCRequest("CreatePhysicalConnectionOccupancyOrder", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePhysicalConnectionOccupancyOrderResponse({}));
  }

  async createPhysicalConnectionOccupancyOrder(request: CreatePhysicalConnectionOccupancyOrderRequest): Promise<CreatePhysicalConnectionOccupancyOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhysicalConnectionOccupancyOrderWithOptions(request, runtime);
  }

  async createRouteEntryWithOptions(request: CreateRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRouteEntryResponse>(await this.doRPCRequest("CreateRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRouteEntryResponse({}));
  }

  async createRouteEntry(request: CreateRouteEntryRequest): Promise<CreateRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouteEntryWithOptions(request, runtime);
  }

  async createRouteTableWithOptions(request: CreateRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRouteTableResponse>(await this.doRPCRequest("CreateRouteTable", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRouteTableResponse({}));
  }

  async createRouteTable(request: CreateRouteTableRequest): Promise<CreateRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouteTableWithOptions(request, runtime);
  }

  async createSnatEntryWithOptions(request: CreateSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSnatEntryResponse>(await this.doRPCRequest("CreateSnatEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSnatEntryResponse({}));
  }

  async createSnatEntry(request: CreateSnatEntryRequest): Promise<CreateSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnatEntryWithOptions(request, runtime);
  }

  async createSslVpnClientCertWithOptions(request: CreateSslVpnClientCertRequest, runtime: $Util.RuntimeOptions): Promise<CreateSslVpnClientCertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSslVpnClientCertResponse>(await this.doRPCRequest("CreateSslVpnClientCert", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSslVpnClientCertResponse({}));
  }

  async createSslVpnClientCert(request: CreateSslVpnClientCertRequest): Promise<CreateSslVpnClientCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSslVpnClientCertWithOptions(request, runtime);
  }

  async createSslVpnServerWithOptions(request: CreateSslVpnServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateSslVpnServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSslVpnServerResponse>(await this.doRPCRequest("CreateSslVpnServer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSslVpnServerResponse({}));
  }

  async createSslVpnServer(request: CreateSslVpnServerRequest): Promise<CreateSslVpnServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSslVpnServerWithOptions(request, runtime);
  }

  async createVpcWithOptions(request: CreateVpcRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpcResponse>(await this.doRPCRequest("CreateVpc", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpcResponse({}));
  }

  async createVpc(request: CreateVpcRequest): Promise<CreateVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcWithOptions(request, runtime);
  }

  async createVpnConnectionWithOptions(request: CreateVpnConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpnConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpnConnectionResponse>(await this.doRPCRequest("CreateVpnConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpnConnectionResponse({}));
  }

  async createVpnConnection(request: CreateVpnConnectionRequest): Promise<CreateVpnConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpnConnectionWithOptions(request, runtime);
  }

  async createVpnGatewayWithOptions(request: CreateVpnGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpnGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpnGatewayResponse>(await this.doRPCRequest("CreateVpnGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpnGatewayResponse({}));
  }

  async createVpnGateway(request: CreateVpnGatewayRequest): Promise<CreateVpnGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpnGatewayWithOptions(request, runtime);
  }

  async createVpnPbrRouteEntryWithOptions(request: CreateVpnPbrRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpnPbrRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpnPbrRouteEntryResponse>(await this.doRPCRequest("CreateVpnPbrRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpnPbrRouteEntryResponse({}));
  }

  async createVpnPbrRouteEntry(request: CreateVpnPbrRouteEntryRequest): Promise<CreateVpnPbrRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpnPbrRouteEntryWithOptions(request, runtime);
  }

  async createVpnRouteEntryWithOptions(request: CreateVpnRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpnRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpnRouteEntryResponse>(await this.doRPCRequest("CreateVpnRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpnRouteEntryResponse({}));
  }

  async createVpnRouteEntry(request: CreateVpnRouteEntryRequest): Promise<CreateVpnRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpnRouteEntryWithOptions(request, runtime);
  }

  async createVSwitchWithOptions(request: CreateVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<CreateVSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVSwitchResponse>(await this.doRPCRequest("CreateVSwitch", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVSwitchResponse({}));
  }

  async createVSwitch(request: CreateVSwitchRequest): Promise<CreateVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVSwitchWithOptions(request, runtime);
  }

  async deactivateRouterInterfaceWithOptions(request: DeactivateRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeactivateRouterInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactivateRouterInterfaceResponse>(await this.doRPCRequest("DeactivateRouterInterface", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeactivateRouterInterfaceResponse({}));
  }

  async deactivateRouterInterface(request: DeactivateRouterInterfaceRequest): Promise<DeactivateRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactivateRouterInterfaceWithOptions(request, runtime);
  }

  async deactiveFlowLogWithOptions(request: DeactiveFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactiveFlowLogResponse>(await this.doRPCRequest("DeactiveFlowLog", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeactiveFlowLogResponse({}));
  }

  async deactiveFlowLog(request: DeactiveFlowLogRequest): Promise<DeactiveFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveFlowLogWithOptions(request, runtime);
  }

  async deleteBgpGroupWithOptions(request: DeleteBgpGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBgpGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBgpGroupResponse>(await this.doRPCRequest("DeleteBgpGroup", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBgpGroupResponse({}));
  }

  async deleteBgpGroup(request: DeleteBgpGroupRequest): Promise<DeleteBgpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBgpGroupWithOptions(request, runtime);
  }

  async deleteBgpNetworkWithOptions(request: DeleteBgpNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBgpNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBgpNetworkResponse>(await this.doRPCRequest("DeleteBgpNetwork", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBgpNetworkResponse({}));
  }

  async deleteBgpNetwork(request: DeleteBgpNetworkRequest): Promise<DeleteBgpNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBgpNetworkWithOptions(request, runtime);
  }

  async deleteBgpPeerWithOptions(request: DeleteBgpPeerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBgpPeerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBgpPeerResponse>(await this.doRPCRequest("DeleteBgpPeer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBgpPeerResponse({}));
  }

  async deleteBgpPeer(request: DeleteBgpPeerRequest): Promise<DeleteBgpPeerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBgpPeerWithOptions(request, runtime);
  }

  async deleteCommonBandwidthPackageWithOptions(request: DeleteCommonBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommonBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCommonBandwidthPackageResponse>(await this.doRPCRequest("DeleteCommonBandwidthPackage", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCommonBandwidthPackageResponse({}));
  }

  async deleteCommonBandwidthPackage(request: DeleteCommonBandwidthPackageRequest): Promise<DeleteCommonBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommonBandwidthPackageWithOptions(request, runtime);
  }

  async deleteCustomerGatewayWithOptions(request: DeleteCustomerGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomerGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomerGatewayResponse>(await this.doRPCRequest("DeleteCustomerGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomerGatewayResponse({}));
  }

  async deleteCustomerGateway(request: DeleteCustomerGatewayRequest): Promise<DeleteCustomerGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomerGatewayWithOptions(request, runtime);
  }

  async deleteDhcpOptionsSetWithOptions(request: DeleteDhcpOptionsSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDhcpOptionsSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDhcpOptionsSetResponse>(await this.doRPCRequest("DeleteDhcpOptionsSet", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDhcpOptionsSetResponse({}));
  }

  async deleteDhcpOptionsSet(request: DeleteDhcpOptionsSetRequest): Promise<DeleteDhcpOptionsSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDhcpOptionsSetWithOptions(request, runtime);
  }

  async deleteExpressCloudConnectionWithOptions(request: DeleteExpressCloudConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExpressCloudConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExpressCloudConnectionResponse>(await this.doRPCRequest("DeleteExpressCloudConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExpressCloudConnectionResponse({}));
  }

  async deleteExpressCloudConnection(request: DeleteExpressCloudConnectionRequest): Promise<DeleteExpressCloudConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExpressCloudConnectionWithOptions(request, runtime);
  }

  async deleteExpressConnectWithOptions(request: DeleteExpressConnectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExpressConnectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExpressConnectResponse>(await this.doRPCRequest("DeleteExpressConnect", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExpressConnectResponse({}));
  }

  async deleteExpressConnect(request: DeleteExpressConnectRequest): Promise<DeleteExpressConnectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExpressConnectWithOptions(request, runtime);
  }

  async deleteFlowLogWithOptions(request: DeleteFlowLogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowLogResponse>(await this.doRPCRequest("DeleteFlowLog", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowLogResponse({}));
  }

  async deleteFlowLog(request: DeleteFlowLogRequest): Promise<DeleteFlowLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowLogWithOptions(request, runtime);
  }

  async deleteForwardEntryWithOptions(request: DeleteForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteForwardEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteForwardEntryResponse>(await this.doRPCRequest("DeleteForwardEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteForwardEntryResponse({}));
  }

  async deleteForwardEntry(request: DeleteForwardEntryRequest): Promise<DeleteForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteForwardEntryWithOptions(request, runtime);
  }

  async deleteGlobalAccelerationInstanceWithOptions(request: DeleteGlobalAccelerationInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalAccelerationInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGlobalAccelerationInstanceResponse>(await this.doRPCRequest("DeleteGlobalAccelerationInstance", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGlobalAccelerationInstanceResponse({}));
  }

  async deleteGlobalAccelerationInstance(request: DeleteGlobalAccelerationInstanceRequest): Promise<DeleteGlobalAccelerationInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalAccelerationInstanceWithOptions(request, runtime);
  }

  async deleteHaVipWithOptions(request: DeleteHaVipRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHaVipResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHaVipResponse>(await this.doRPCRequest("DeleteHaVip", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHaVipResponse({}));
  }

  async deleteHaVip(request: DeleteHaVipRequest): Promise<DeleteHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHaVipWithOptions(request, runtime);
  }

  async deleteIpsecServerWithOptions(request: DeleteIpsecServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpsecServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpsecServerResponse>(await this.doRPCRequest("DeleteIpsecServer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpsecServerResponse({}));
  }

  async deleteIpsecServer(request: DeleteIpsecServerRequest): Promise<DeleteIpsecServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpsecServerWithOptions(request, runtime);
  }

  async deleteIpv6EgressOnlyRuleWithOptions(request: DeleteIpv6EgressOnlyRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpv6EgressOnlyRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpv6EgressOnlyRuleResponse>(await this.doRPCRequest("DeleteIpv6EgressOnlyRule", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpv6EgressOnlyRuleResponse({}));
  }

  async deleteIpv6EgressOnlyRule(request: DeleteIpv6EgressOnlyRuleRequest): Promise<DeleteIpv6EgressOnlyRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpv6EgressOnlyRuleWithOptions(request, runtime);
  }

  async deleteIpv6GatewayWithOptions(request: DeleteIpv6GatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpv6GatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpv6GatewayResponse>(await this.doRPCRequest("DeleteIpv6Gateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpv6GatewayResponse({}));
  }

  async deleteIpv6Gateway(request: DeleteIpv6GatewayRequest): Promise<DeleteIpv6GatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpv6GatewayWithOptions(request, runtime);
  }

  async deleteIpv6InternetBandwidthWithOptions(request: DeleteIpv6InternetBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpv6InternetBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpv6InternetBandwidthResponse>(await this.doRPCRequest("DeleteIpv6InternetBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpv6InternetBandwidthResponse({}));
  }

  async deleteIpv6InternetBandwidth(request: DeleteIpv6InternetBandwidthRequest): Promise<DeleteIpv6InternetBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpv6InternetBandwidthWithOptions(request, runtime);
  }

  async deleteIPv6TranslatorWithOptions(request: DeleteIPv6TranslatorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIPv6TranslatorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIPv6TranslatorResponse>(await this.doRPCRequest("DeleteIPv6Translator", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIPv6TranslatorResponse({}));
  }

  async deleteIPv6Translator(request: DeleteIPv6TranslatorRequest): Promise<DeleteIPv6TranslatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIPv6TranslatorWithOptions(request, runtime);
  }

  async deleteIPv6TranslatorAclListWithOptions(request: DeleteIPv6TranslatorAclListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIPv6TranslatorAclListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIPv6TranslatorAclListResponse>(await this.doRPCRequest("DeleteIPv6TranslatorAclList", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIPv6TranslatorAclListResponse({}));
  }

  async deleteIPv6TranslatorAclList(request: DeleteIPv6TranslatorAclListRequest): Promise<DeleteIPv6TranslatorAclListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIPv6TranslatorAclListWithOptions(request, runtime);
  }

  async deleteIPv6TranslatorEntryWithOptions(request: DeleteIPv6TranslatorEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIPv6TranslatorEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIPv6TranslatorEntryResponse>(await this.doRPCRequest("DeleteIPv6TranslatorEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIPv6TranslatorEntryResponse({}));
  }

  async deleteIPv6TranslatorEntry(request: DeleteIPv6TranslatorEntryRequest): Promise<DeleteIPv6TranslatorEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIPv6TranslatorEntryWithOptions(request, runtime);
  }

  async deleteNatGatewayWithOptions(request: DeleteNatGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNatGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNatGatewayResponse>(await this.doRPCRequest("DeleteNatGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNatGatewayResponse({}));
  }

  async deleteNatGateway(request: DeleteNatGatewayRequest): Promise<DeleteNatGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNatGatewayWithOptions(request, runtime);
  }

  async deleteNetworkAclWithOptions(request: DeleteNetworkAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNetworkAclResponse>(await this.doRPCRequest("DeleteNetworkAcl", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNetworkAclResponse({}));
  }

  async deleteNetworkAcl(request: DeleteNetworkAclRequest): Promise<DeleteNetworkAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkAclWithOptions(request, runtime);
  }

  async deletePhysicalConnectionWithOptions(request: DeletePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhysicalConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePhysicalConnectionResponse>(await this.doRPCRequest("DeletePhysicalConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePhysicalConnectionResponse({}));
  }

  async deletePhysicalConnection(request: DeletePhysicalConnectionRequest): Promise<DeletePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhysicalConnectionWithOptions(request, runtime);
  }

  async deleteRouteEntryWithOptions(request: DeleteRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRouteEntryResponse>(await this.doRPCRequest("DeleteRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRouteEntryResponse({}));
  }

  async deleteRouteEntry(request: DeleteRouteEntryRequest): Promise<DeleteRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteEntryWithOptions(request, runtime);
  }

  async deleteRouterInterfaceWithOptions(request: DeleteRouterInterfaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouterInterfaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRouterInterfaceResponse>(await this.doRPCRequest("DeleteRouterInterface", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRouterInterfaceResponse({}));
  }

  async deleteRouterInterface(request: DeleteRouterInterfaceRequest): Promise<DeleteRouterInterfaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouterInterfaceWithOptions(request, runtime);
  }

  async deleteRouteTableWithOptions(request: DeleteRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRouteTableResponse>(await this.doRPCRequest("DeleteRouteTable", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRouteTableResponse({}));
  }

  async deleteRouteTable(request: DeleteRouteTableRequest): Promise<DeleteRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteTableWithOptions(request, runtime);
  }

  async deleteSnatEntryWithOptions(request: DeleteSnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSnatEntryResponse>(await this.doRPCRequest("DeleteSnatEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSnatEntryResponse({}));
  }

  async deleteSnatEntry(request: DeleteSnatEntryRequest): Promise<DeleteSnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnatEntryWithOptions(request, runtime);
  }

  async deleteSslVpnClientCertWithOptions(request: DeleteSslVpnClientCertRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSslVpnClientCertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSslVpnClientCertResponse>(await this.doRPCRequest("DeleteSslVpnClientCert", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSslVpnClientCertResponse({}));
  }

  async deleteSslVpnClientCert(request: DeleteSslVpnClientCertRequest): Promise<DeleteSslVpnClientCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSslVpnClientCertWithOptions(request, runtime);
  }

  async deleteSslVpnServerWithOptions(request: DeleteSslVpnServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSslVpnServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSslVpnServerResponse>(await this.doRPCRequest("DeleteSslVpnServer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSslVpnServerResponse({}));
  }

  async deleteSslVpnServer(request: DeleteSslVpnServerRequest): Promise<DeleteSslVpnServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSslVpnServerWithOptions(request, runtime);
  }

  async deleteVirtualBorderRouterWithOptions(request: DeleteVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVirtualBorderRouterResponse>(await this.doRPCRequest("DeleteVirtualBorderRouter", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVirtualBorderRouterResponse({}));
  }

  async deleteVirtualBorderRouter(request: DeleteVirtualBorderRouterRequest): Promise<DeleteVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualBorderRouterWithOptions(request, runtime);
  }

  async deleteVpcWithOptions(request: DeleteVpcRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpcResponse>(await this.doRPCRequest("DeleteVpc", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpcResponse({}));
  }

  async deleteVpc(request: DeleteVpcRequest): Promise<DeleteVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcWithOptions(request, runtime);
  }

  async deleteVpnConnectionWithOptions(request: DeleteVpnConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpnConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpnConnectionResponse>(await this.doRPCRequest("DeleteVpnConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpnConnectionResponse({}));
  }

  async deleteVpnConnection(request: DeleteVpnConnectionRequest): Promise<DeleteVpnConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpnConnectionWithOptions(request, runtime);
  }

  async deleteVpnGatewayWithOptions(request: DeleteVpnGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpnGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpnGatewayResponse>(await this.doRPCRequest("DeleteVpnGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpnGatewayResponse({}));
  }

  async deleteVpnGateway(request: DeleteVpnGatewayRequest): Promise<DeleteVpnGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpnGatewayWithOptions(request, runtime);
  }

  async deleteVpnPbrRouteEntryWithOptions(request: DeleteVpnPbrRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpnPbrRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpnPbrRouteEntryResponse>(await this.doRPCRequest("DeleteVpnPbrRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpnPbrRouteEntryResponse({}));
  }

  async deleteVpnPbrRouteEntry(request: DeleteVpnPbrRouteEntryRequest): Promise<DeleteVpnPbrRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpnPbrRouteEntryWithOptions(request, runtime);
  }

  async deleteVpnRouteEntryWithOptions(request: DeleteVpnRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpnRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpnRouteEntryResponse>(await this.doRPCRequest("DeleteVpnRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpnRouteEntryResponse({}));
  }

  async deleteVpnRouteEntry(request: DeleteVpnRouteEntryRequest): Promise<DeleteVpnRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpnRouteEntryWithOptions(request, runtime);
  }

  async deleteVSwitchWithOptions(request: DeleteVSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVSwitchResponse>(await this.doRPCRequest("DeleteVSwitch", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVSwitchResponse({}));
  }

  async deleteVSwitch(request: DeleteVSwitchRequest): Promise<DeleteVSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVSwitchWithOptions(request, runtime);
  }

  async deletionProtectionWithOptions(request: DeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<DeletionProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletionProtectionResponse>(await this.doRPCRequest("DeletionProtection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DeletionProtectionResponse({}));
  }

  async deletionProtection(request: DeletionProtectionRequest): Promise<DeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletionProtectionWithOptions(request, runtime);
  }

  async describeAccessPointsWithOptions(request: DescribeAccessPointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccessPointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccessPointsResponse>(await this.doRPCRequest("DescribeAccessPoints", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccessPointsResponse({}));
  }

  async describeAccessPoints(request: DescribeAccessPointsRequest): Promise<DescribeAccessPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccessPointsWithOptions(request, runtime);
  }

  async describeBgpGroupsWithOptions(request: DescribeBgpGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBgpGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBgpGroupsResponse>(await this.doRPCRequest("DescribeBgpGroups", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBgpGroupsResponse({}));
  }

  async describeBgpGroups(request: DescribeBgpGroupsRequest): Promise<DescribeBgpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpGroupsWithOptions(request, runtime);
  }

  async describeBgpNetworksWithOptions(request: DescribeBgpNetworksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBgpNetworksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBgpNetworksResponse>(await this.doRPCRequest("DescribeBgpNetworks", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBgpNetworksResponse({}));
  }

  async describeBgpNetworks(request: DescribeBgpNetworksRequest): Promise<DescribeBgpNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpNetworksWithOptions(request, runtime);
  }

  async describeBgpPeersWithOptions(request: DescribeBgpPeersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBgpPeersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBgpPeersResponse>(await this.doRPCRequest("DescribeBgpPeers", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBgpPeersResponse({}));
  }

  async describeBgpPeers(request: DescribeBgpPeersRequest): Promise<DescribeBgpPeersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpPeersWithOptions(request, runtime);
  }

  async describeCommonBandwidthPackagesWithOptions(request: DescribeCommonBandwidthPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommonBandwidthPackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCommonBandwidthPackagesResponse>(await this.doRPCRequest("DescribeCommonBandwidthPackages", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCommonBandwidthPackagesResponse({}));
  }

  async describeCommonBandwidthPackages(request: DescribeCommonBandwidthPackagesRequest): Promise<DescribeCommonBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommonBandwidthPackagesWithOptions(request, runtime);
  }

  async describeCustomerGatewayWithOptions(request: DescribeCustomerGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomerGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomerGatewayResponse>(await this.doRPCRequest("DescribeCustomerGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomerGatewayResponse({}));
  }

  async describeCustomerGateway(request: DescribeCustomerGatewayRequest): Promise<DescribeCustomerGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomerGatewayWithOptions(request, runtime);
  }

  async describeCustomerGatewaysWithOptions(request: DescribeCustomerGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomerGatewaysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomerGatewaysResponse>(await this.doRPCRequest("DescribeCustomerGateways", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomerGatewaysResponse({}));
  }

  async describeCustomerGateways(request: DescribeCustomerGatewaysRequest): Promise<DescribeCustomerGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomerGatewaysWithOptions(request, runtime);
  }

  async describeEipAddressesWithOptions(request: DescribeEipAddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipAddressesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEipAddressesResponse>(await this.doRPCRequest("DescribeEipAddresses", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEipAddressesResponse({}));
  }

  async describeEipAddresses(request: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipAddressesWithOptions(request, runtime);
  }

  async describeEipGatewayInfoWithOptions(request: DescribeEipGatewayInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipGatewayInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEipGatewayInfoResponse>(await this.doRPCRequest("DescribeEipGatewayInfo", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEipGatewayInfoResponse({}));
  }

  async describeEipGatewayInfo(request: DescribeEipGatewayInfoRequest): Promise<DescribeEipGatewayInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipGatewayInfoWithOptions(request, runtime);
  }

  async describeEipMonitorDataWithOptions(request: DescribeEipMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipMonitorDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEipMonitorDataResponse>(await this.doRPCRequest("DescribeEipMonitorData", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEipMonitorDataResponse({}));
  }

  async describeEipMonitorData(request: DescribeEipMonitorDataRequest): Promise<DescribeEipMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipMonitorDataWithOptions(request, runtime);
  }

  async describeEipSegmentWithOptions(request: DescribeEipSegmentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEipSegmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEipSegmentResponse>(await this.doRPCRequest("DescribeEipSegment", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEipSegmentResponse({}));
  }

  async describeEipSegment(request: DescribeEipSegmentRequest): Promise<DescribeEipSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEipSegmentWithOptions(request, runtime);
  }

  async describeExpressCloudConnectionsWithOptions(request: DescribeExpressCloudConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpressCloudConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExpressCloudConnectionsResponse>(await this.doRPCRequest("DescribeExpressCloudConnections", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExpressCloudConnectionsResponse({}));
  }

  async describeExpressCloudConnections(request: DescribeExpressCloudConnectionsRequest): Promise<DescribeExpressCloudConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpressCloudConnectionsWithOptions(request, runtime);
  }

  async describeFlowLogsWithOptions(request: DescribeFlowLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowLogsResponse>(await this.doRPCRequest("DescribeFlowLogs", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowLogsResponse({}));
  }

  async describeFlowLogs(request: DescribeFlowLogsRequest): Promise<DescribeFlowLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowLogsWithOptions(request, runtime);
  }

  async describeForwardTableEntriesWithOptions(request: DescribeForwardTableEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeForwardTableEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeForwardTableEntriesResponse>(await this.doRPCRequest("DescribeForwardTableEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeForwardTableEntriesResponse({}));
  }

  async describeForwardTableEntries(request: DescribeForwardTableEntriesRequest): Promise<DescribeForwardTableEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeForwardTableEntriesWithOptions(request, runtime);
  }

  async describeGlobalAccelerationInstancesWithOptions(request: DescribeGlobalAccelerationInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalAccelerationInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGlobalAccelerationInstancesResponse>(await this.doRPCRequest("DescribeGlobalAccelerationInstances", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGlobalAccelerationInstancesResponse({}));
  }

  async describeGlobalAccelerationInstances(request: DescribeGlobalAccelerationInstancesRequest): Promise<DescribeGlobalAccelerationInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalAccelerationInstancesWithOptions(request, runtime);
  }

  async describeGrantRulesToCenWithOptions(request: DescribeGrantRulesToCenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGrantRulesToCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGrantRulesToCenResponse>(await this.doRPCRequest("DescribeGrantRulesToCen", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGrantRulesToCenResponse({}));
  }

  async describeGrantRulesToCen(request: DescribeGrantRulesToCenRequest): Promise<DescribeGrantRulesToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGrantRulesToCenWithOptions(request, runtime);
  }

  async describeHaVipsWithOptions(request: DescribeHaVipsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHaVipsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHaVipsResponse>(await this.doRPCRequest("DescribeHaVips", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHaVipsResponse({}));
  }

  async describeHaVips(request: DescribeHaVipsRequest): Promise<DescribeHaVipsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHaVipsWithOptions(request, runtime);
  }

  async describeHighDefinitionMonitorLogAttributeWithOptions(request: DescribeHighDefinitionMonitorLogAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHighDefinitionMonitorLogAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHighDefinitionMonitorLogAttributeResponse>(await this.doRPCRequest("DescribeHighDefinitionMonitorLogAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHighDefinitionMonitorLogAttributeResponse({}));
  }

  async describeHighDefinitionMonitorLogAttribute(request: DescribeHighDefinitionMonitorLogAttributeRequest): Promise<DescribeHighDefinitionMonitorLogAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHighDefinitionMonitorLogAttributeWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewAttributeWithOptions(request: DescribeInstanceAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAutoRenewAttributeResponse>(await this.doRPCRequest("DescribeInstanceAutoRenewAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAutoRenewAttributeResponse({}));
  }

  async describeInstanceAutoRenewAttribute(request: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeIpv6AddressesWithOptions(request: DescribeIpv6AddressesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpv6AddressesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpv6AddressesResponse>(await this.doRPCRequest("DescribeIpv6Addresses", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpv6AddressesResponse({}));
  }

  async describeIpv6Addresses(request: DescribeIpv6AddressesRequest): Promise<DescribeIpv6AddressesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpv6AddressesWithOptions(request, runtime);
  }

  async describeIpv6EgressOnlyRulesWithOptions(request: DescribeIpv6EgressOnlyRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpv6EgressOnlyRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpv6EgressOnlyRulesResponse>(await this.doRPCRequest("DescribeIpv6EgressOnlyRules", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpv6EgressOnlyRulesResponse({}));
  }

  async describeIpv6EgressOnlyRules(request: DescribeIpv6EgressOnlyRulesRequest): Promise<DescribeIpv6EgressOnlyRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpv6EgressOnlyRulesWithOptions(request, runtime);
  }

  async describeIpv6GatewayAttributeWithOptions(request: DescribeIpv6GatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpv6GatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpv6GatewayAttributeResponse>(await this.doRPCRequest("DescribeIpv6GatewayAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpv6GatewayAttributeResponse({}));
  }

  async describeIpv6GatewayAttribute(request: DescribeIpv6GatewayAttributeRequest): Promise<DescribeIpv6GatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpv6GatewayAttributeWithOptions(request, runtime);
  }

  async describeIpv6GatewaysWithOptions(request: DescribeIpv6GatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpv6GatewaysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpv6GatewaysResponse>(await this.doRPCRequest("DescribeIpv6Gateways", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpv6GatewaysResponse({}));
  }

  async describeIpv6Gateways(request: DescribeIpv6GatewaysRequest): Promise<DescribeIpv6GatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpv6GatewaysWithOptions(request, runtime);
  }

  async describeIPv6TranslatorAclListAttributesWithOptions(request: DescribeIPv6TranslatorAclListAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIPv6TranslatorAclListAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIPv6TranslatorAclListAttributesResponse>(await this.doRPCRequest("DescribeIPv6TranslatorAclListAttributes", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIPv6TranslatorAclListAttributesResponse({}));
  }

  async describeIPv6TranslatorAclListAttributes(request: DescribeIPv6TranslatorAclListAttributesRequest): Promise<DescribeIPv6TranslatorAclListAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIPv6TranslatorAclListAttributesWithOptions(request, runtime);
  }

  async describeIPv6TranslatorAclListsWithOptions(request: DescribeIPv6TranslatorAclListsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIPv6TranslatorAclListsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIPv6TranslatorAclListsResponse>(await this.doRPCRequest("DescribeIPv6TranslatorAclLists", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIPv6TranslatorAclListsResponse({}));
  }

  async describeIPv6TranslatorAclLists(request: DescribeIPv6TranslatorAclListsRequest): Promise<DescribeIPv6TranslatorAclListsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIPv6TranslatorAclListsWithOptions(request, runtime);
  }

  async describeIPv6TranslatorEntriesWithOptions(request: DescribeIPv6TranslatorEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIPv6TranslatorEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIPv6TranslatorEntriesResponse>(await this.doRPCRequest("DescribeIPv6TranslatorEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIPv6TranslatorEntriesResponse({}));
  }

  async describeIPv6TranslatorEntries(request: DescribeIPv6TranslatorEntriesRequest): Promise<DescribeIPv6TranslatorEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIPv6TranslatorEntriesWithOptions(request, runtime);
  }

  async describeIPv6TranslatorsWithOptions(request: DescribeIPv6TranslatorsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIPv6TranslatorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIPv6TranslatorsResponse>(await this.doRPCRequest("DescribeIPv6Translators", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIPv6TranslatorsResponse({}));
  }

  async describeIPv6Translators(request: DescribeIPv6TranslatorsRequest): Promise<DescribeIPv6TranslatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIPv6TranslatorsWithOptions(request, runtime);
  }

  async describeNatGatewaysWithOptions(request: DescribeNatGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNatGatewaysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNatGatewaysResponse>(await this.doRPCRequest("DescribeNatGateways", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNatGatewaysResponse({}));
  }

  async describeNatGateways(request: DescribeNatGatewaysRequest): Promise<DescribeNatGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNatGatewaysWithOptions(request, runtime);
  }

  async describeNetworkAclAttributesWithOptions(request: DescribeNetworkAclAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkAclAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkAclAttributesResponse>(await this.doRPCRequest("DescribeNetworkAclAttributes", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkAclAttributesResponse({}));
  }

  async describeNetworkAclAttributes(request: DescribeNetworkAclAttributesRequest): Promise<DescribeNetworkAclAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkAclAttributesWithOptions(request, runtime);
  }

  async describeNetworkAclsWithOptions(request: DescribeNetworkAclsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkAclsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkAclsResponse>(await this.doRPCRequest("DescribeNetworkAcls", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkAclsResponse({}));
  }

  async describeNetworkAcls(request: DescribeNetworkAclsRequest): Promise<DescribeNetworkAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkAclsWithOptions(request, runtime);
  }

  async describeNewProjectEipMonitorDataWithOptions(request: DescribeNewProjectEipMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNewProjectEipMonitorDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNewProjectEipMonitorDataResponse>(await this.doRPCRequest("DescribeNewProjectEipMonitorData", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNewProjectEipMonitorDataResponse({}));
  }

  async describeNewProjectEipMonitorData(request: DescribeNewProjectEipMonitorDataRequest): Promise<DescribeNewProjectEipMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNewProjectEipMonitorDataWithOptions(request, runtime);
  }

  async describePhysicalConnectionLOAWithOptions(request: DescribePhysicalConnectionLOARequest, runtime: $Util.RuntimeOptions): Promise<DescribePhysicalConnectionLOAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePhysicalConnectionLOAResponse>(await this.doRPCRequest("DescribePhysicalConnectionLOA", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePhysicalConnectionLOAResponse({}));
  }

  async describePhysicalConnectionLOA(request: DescribePhysicalConnectionLOARequest): Promise<DescribePhysicalConnectionLOAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePhysicalConnectionLOAWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRouteEntryListWithOptions(request: DescribeRouteEntryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteEntryListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouteEntryListResponse>(await this.doRPCRequest("DescribeRouteEntryList", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouteEntryListResponse({}));
  }

  async describeRouteEntryList(request: DescribeRouteEntryListRequest): Promise<DescribeRouteEntryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteEntryListWithOptions(request, runtime);
  }

  async describeRouterInterfaceAttributeWithOptions(request: DescribeRouterInterfaceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouterInterfaceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouterInterfaceAttributeResponse>(await this.doRPCRequest("DescribeRouterInterfaceAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouterInterfaceAttributeResponse({}));
  }

  async describeRouterInterfaceAttribute(request: DescribeRouterInterfaceAttributeRequest): Promise<DescribeRouterInterfaceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouterInterfaceAttributeWithOptions(request, runtime);
  }

  async describeRouterInterfacesWithOptions(request: DescribeRouterInterfacesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouterInterfacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouterInterfacesResponse>(await this.doRPCRequest("DescribeRouterInterfaces", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouterInterfacesResponse({}));
  }

  async describeRouterInterfaces(request: DescribeRouterInterfacesRequest): Promise<DescribeRouterInterfacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouterInterfacesWithOptions(request, runtime);
  }

  async describeRouteTableListWithOptions(request: DescribeRouteTableListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteTableListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouteTableListResponse>(await this.doRPCRequest("DescribeRouteTableList", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouteTableListResponse({}));
  }

  async describeRouteTableList(request: DescribeRouteTableListRequest): Promise<DescribeRouteTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteTableListWithOptions(request, runtime);
  }

  async describeRouteTablesWithOptions(request: DescribeRouteTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRouteTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRouteTablesResponse>(await this.doRPCRequest("DescribeRouteTables", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRouteTablesResponse({}));
  }

  async describeRouteTables(request: DescribeRouteTablesRequest): Promise<DescribeRouteTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRouteTablesWithOptions(request, runtime);
  }

  async describeServerRelatedGlobalAccelerationInstancesWithOptions(request: DescribeServerRelatedGlobalAccelerationInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeServerRelatedGlobalAccelerationInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeServerRelatedGlobalAccelerationInstancesResponse>(await this.doRPCRequest("DescribeServerRelatedGlobalAccelerationInstances", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServerRelatedGlobalAccelerationInstancesResponse({}));
  }

  async describeServerRelatedGlobalAccelerationInstances(request: DescribeServerRelatedGlobalAccelerationInstancesRequest): Promise<DescribeServerRelatedGlobalAccelerationInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServerRelatedGlobalAccelerationInstancesWithOptions(request, runtime);
  }

  async describeSnatTableEntriesWithOptions(request: DescribeSnatTableEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnatTableEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSnatTableEntriesResponse>(await this.doRPCRequest("DescribeSnatTableEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSnatTableEntriesResponse({}));
  }

  async describeSnatTableEntries(request: DescribeSnatTableEntriesRequest): Promise<DescribeSnatTableEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnatTableEntriesWithOptions(request, runtime);
  }

  async describeSslVpnClientCertWithOptions(request: DescribeSslVpnClientCertRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSslVpnClientCertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSslVpnClientCertResponse>(await this.doRPCRequest("DescribeSslVpnClientCert", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSslVpnClientCertResponse({}));
  }

  async describeSslVpnClientCert(request: DescribeSslVpnClientCertRequest): Promise<DescribeSslVpnClientCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSslVpnClientCertWithOptions(request, runtime);
  }

  async describeSslVpnClientCertsWithOptions(request: DescribeSslVpnClientCertsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSslVpnClientCertsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSslVpnClientCertsResponse>(await this.doRPCRequest("DescribeSslVpnClientCerts", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSslVpnClientCertsResponse({}));
  }

  async describeSslVpnClientCerts(request: DescribeSslVpnClientCertsRequest): Promise<DescribeSslVpnClientCertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSslVpnClientCertsWithOptions(request, runtime);
  }

  async describeSslVpnServersWithOptions(request: DescribeSslVpnServersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSslVpnServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSslVpnServersResponse>(await this.doRPCRequest("DescribeSslVpnServers", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSslVpnServersResponse({}));
  }

  async describeSslVpnServers(request: DescribeSslVpnServersRequest): Promise<DescribeSslVpnServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSslVpnServersWithOptions(request, runtime);
  }

  async describeVirtualBorderRoutersWithOptions(request: DescribeVirtualBorderRoutersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualBorderRoutersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVirtualBorderRoutersResponse>(await this.doRPCRequest("DescribeVirtualBorderRouters", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVirtualBorderRoutersResponse({}));
  }

  async describeVirtualBorderRouters(request: DescribeVirtualBorderRoutersRequest): Promise<DescribeVirtualBorderRoutersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualBorderRoutersWithOptions(request, runtime);
  }

  async describeVirtualBorderRoutersForPhysicalConnectionWithOptions(request: DescribeVirtualBorderRoutersForPhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualBorderRoutersForPhysicalConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVirtualBorderRoutersForPhysicalConnectionResponse>(await this.doRPCRequest("DescribeVirtualBorderRoutersForPhysicalConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVirtualBorderRoutersForPhysicalConnectionResponse({}));
  }

  async describeVirtualBorderRoutersForPhysicalConnection(request: DescribeVirtualBorderRoutersForPhysicalConnectionRequest): Promise<DescribeVirtualBorderRoutersForPhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualBorderRoutersForPhysicalConnectionWithOptions(request, runtime);
  }

  async describeVpcAttributeWithOptions(request: DescribeVpcAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcAttributeResponse>(await this.doRPCRequest("DescribeVpcAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcAttributeResponse({}));
  }

  async describeVpcAttribute(request: DescribeVpcAttributeRequest): Promise<DescribeVpcAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcAttributeWithOptions(request, runtime);
  }

  async describeVpcsWithOptions(request: DescribeVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcsResponse>(await this.doRPCRequest("DescribeVpcs", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcsResponse({}));
  }

  async describeVpcs(request: DescribeVpcsRequest): Promise<DescribeVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  async describeVpnConnectionWithOptions(request: DescribeVpnConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnConnectionResponse>(await this.doRPCRequest("DescribeVpnConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnConnectionResponse({}));
  }

  async describeVpnConnection(request: DescribeVpnConnectionRequest): Promise<DescribeVpnConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnConnectionWithOptions(request, runtime);
  }

  async describeVpnConnectionsWithOptions(request: DescribeVpnConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnConnectionsResponse>(await this.doRPCRequest("DescribeVpnConnections", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnConnectionsResponse({}));
  }

  async describeVpnConnections(request: DescribeVpnConnectionsRequest): Promise<DescribeVpnConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnConnectionsWithOptions(request, runtime);
  }

  async describeVpnGatewayWithOptions(request: DescribeVpnGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnGatewayResponse>(await this.doRPCRequest("DescribeVpnGateway", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnGatewayResponse({}));
  }

  async describeVpnGateway(request: DescribeVpnGatewayRequest): Promise<DescribeVpnGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnGatewayWithOptions(request, runtime);
  }

  async describeVpnGatewaysWithOptions(request: DescribeVpnGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnGatewaysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnGatewaysResponse>(await this.doRPCRequest("DescribeVpnGateways", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnGatewaysResponse({}));
  }

  async describeVpnGateways(request: DescribeVpnGatewaysRequest): Promise<DescribeVpnGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnGatewaysWithOptions(request, runtime);
  }

  async describeVpnPbrRouteEntriesWithOptions(request: DescribeVpnPbrRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnPbrRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnPbrRouteEntriesResponse>(await this.doRPCRequest("DescribeVpnPbrRouteEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnPbrRouteEntriesResponse({}));
  }

  async describeVpnPbrRouteEntries(request: DescribeVpnPbrRouteEntriesRequest): Promise<DescribeVpnPbrRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnPbrRouteEntriesWithOptions(request, runtime);
  }

  async describeVpnRouteEntriesWithOptions(request: DescribeVpnRouteEntriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnRouteEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnRouteEntriesResponse>(await this.doRPCRequest("DescribeVpnRouteEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnRouteEntriesResponse({}));
  }

  async describeVpnRouteEntries(request: DescribeVpnRouteEntriesRequest): Promise<DescribeVpnRouteEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnRouteEntriesWithOptions(request, runtime);
  }

  async describeVpnSslServerLogsWithOptions(request: DescribeVpnSslServerLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpnSslServerLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpnSslServerLogsResponse>(await this.doRPCRequest("DescribeVpnSslServerLogs", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpnSslServerLogsResponse({}));
  }

  async describeVpnSslServerLogs(request: DescribeVpnSslServerLogsRequest): Promise<DescribeVpnSslServerLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpnSslServerLogsWithOptions(request, runtime);
  }

  async describeVRoutersWithOptions(request: DescribeVRoutersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVRoutersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVRoutersResponse>(await this.doRPCRequest("DescribeVRouters", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVRoutersResponse({}));
  }

  async describeVRouters(request: DescribeVRoutersRequest): Promise<DescribeVRoutersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVRoutersWithOptions(request, runtime);
  }

  async describeVSwitchAttributesWithOptions(request: DescribeVSwitchAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVSwitchAttributesResponse>(await this.doRPCRequest("DescribeVSwitchAttributes", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVSwitchAttributesResponse({}));
  }

  async describeVSwitchAttributes(request: DescribeVSwitchAttributesRequest): Promise<DescribeVSwitchAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchAttributesWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.doRPCRequest("DescribeVSwitches", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async detachDhcpOptionsSetFromVpcWithOptions(request: DetachDhcpOptionsSetFromVpcRequest, runtime: $Util.RuntimeOptions): Promise<DetachDhcpOptionsSetFromVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachDhcpOptionsSetFromVpcResponse>(await this.doRPCRequest("DetachDhcpOptionsSetFromVpc", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DetachDhcpOptionsSetFromVpcResponse({}));
  }

  async detachDhcpOptionsSetFromVpc(request: DetachDhcpOptionsSetFromVpcRequest): Promise<DetachDhcpOptionsSetFromVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDhcpOptionsSetFromVpcWithOptions(request, runtime);
  }

  async disableNatGatewayEcsMetricWithOptions(request: DisableNatGatewayEcsMetricRequest, runtime: $Util.RuntimeOptions): Promise<DisableNatGatewayEcsMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableNatGatewayEcsMetricResponse>(await this.doRPCRequest("DisableNatGatewayEcsMetric", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DisableNatGatewayEcsMetricResponse({}));
  }

  async disableNatGatewayEcsMetric(request: DisableNatGatewayEcsMetricRequest): Promise<DisableNatGatewayEcsMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableNatGatewayEcsMetricWithOptions(request, runtime);
  }

  async disableVpcClassicLinkWithOptions(request: DisableVpcClassicLinkRequest, runtime: $Util.RuntimeOptions): Promise<DisableVpcClassicLinkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableVpcClassicLinkResponse>(await this.doRPCRequest("DisableVpcClassicLink", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DisableVpcClassicLinkResponse({}));
  }

  async disableVpcClassicLink(request: DisableVpcClassicLinkRequest): Promise<DisableVpcClassicLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVpcClassicLinkWithOptions(request, runtime);
  }

  async dissociateVpnGatewayWithCertificateWithOptions(request: DissociateVpnGatewayWithCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DissociateVpnGatewayWithCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateVpnGatewayWithCertificateResponse>(await this.doRPCRequest("DissociateVpnGatewayWithCertificate", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateVpnGatewayWithCertificateResponse({}));
  }

  async dissociateVpnGatewayWithCertificate(request: DissociateVpnGatewayWithCertificateRequest): Promise<DissociateVpnGatewayWithCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateVpnGatewayWithCertificateWithOptions(request, runtime);
  }

  async downloadVpnConnectionConfigWithOptions(request: DownloadVpnConnectionConfigRequest, runtime: $Util.RuntimeOptions): Promise<DownloadVpnConnectionConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DownloadVpnConnectionConfigResponse>(await this.doRPCRequest("DownloadVpnConnectionConfig", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new DownloadVpnConnectionConfigResponse({}));
  }

  async downloadVpnConnectionConfig(request: DownloadVpnConnectionConfigRequest): Promise<DownloadVpnConnectionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadVpnConnectionConfigWithOptions(request, runtime);
  }

  async enableNatGatewayEcsMetricWithOptions(request: EnableNatGatewayEcsMetricRequest, runtime: $Util.RuntimeOptions): Promise<EnableNatGatewayEcsMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableNatGatewayEcsMetricResponse>(await this.doRPCRequest("EnableNatGatewayEcsMetric", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnableNatGatewayEcsMetricResponse({}));
  }

  async enableNatGatewayEcsMetric(request: EnableNatGatewayEcsMetricRequest): Promise<EnableNatGatewayEcsMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableNatGatewayEcsMetricWithOptions(request, runtime);
  }

  async enablePhysicalConnectionWithOptions(request: EnablePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<EnablePhysicalConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnablePhysicalConnectionResponse>(await this.doRPCRequest("EnablePhysicalConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnablePhysicalConnectionResponse({}));
  }

  async enablePhysicalConnection(request: EnablePhysicalConnectionRequest): Promise<EnablePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enablePhysicalConnectionWithOptions(request, runtime);
  }

  async enableVpcClassicLinkWithOptions(request: EnableVpcClassicLinkRequest, runtime: $Util.RuntimeOptions): Promise<EnableVpcClassicLinkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableVpcClassicLinkResponse>(await this.doRPCRequest("EnableVpcClassicLink", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new EnableVpcClassicLinkResponse({}));
  }

  async enableVpcClassicLink(request: EnableVpcClassicLinkRequest): Promise<EnableVpcClassicLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableVpcClassicLinkWithOptions(request, runtime);
  }

  async getDhcpOptionsSetWithOptions(request: GetDhcpOptionsSetRequest, runtime: $Util.RuntimeOptions): Promise<GetDhcpOptionsSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDhcpOptionsSetResponse>(await this.doRPCRequest("GetDhcpOptionsSet", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new GetDhcpOptionsSetResponse({}));
  }

  async getDhcpOptionsSet(request: GetDhcpOptionsSetRequest): Promise<GetDhcpOptionsSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDhcpOptionsSetWithOptions(request, runtime);
  }

  async getNatGatewayAttributeWithOptions(request: GetNatGatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetNatGatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNatGatewayAttributeResponse>(await this.doRPCRequest("GetNatGatewayAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new GetNatGatewayAttributeResponse({}));
  }

  async getNatGatewayAttribute(request: GetNatGatewayAttributeRequest): Promise<GetNatGatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNatGatewayAttributeWithOptions(request, runtime);
  }

  async getNatGatewayConvertStatusWithOptions(request: GetNatGatewayConvertStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetNatGatewayConvertStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNatGatewayConvertStatusResponse>(await this.doRPCRequest("GetNatGatewayConvertStatus", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new GetNatGatewayConvertStatusResponse({}));
  }

  async getNatGatewayConvertStatus(request: GetNatGatewayConvertStatusRequest): Promise<GetNatGatewayConvertStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNatGatewayConvertStatusWithOptions(request, runtime);
  }

  async grantInstanceToCenWithOptions(request: GrantInstanceToCenRequest, runtime: $Util.RuntimeOptions): Promise<GrantInstanceToCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantInstanceToCenResponse>(await this.doRPCRequest("GrantInstanceToCen", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new GrantInstanceToCenResponse({}));
  }

  async grantInstanceToCen(request: GrantInstanceToCenRequest): Promise<GrantInstanceToCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantInstanceToCenWithOptions(request, runtime);
  }

  async listDhcpOptionsSetsWithOptions(request: ListDhcpOptionsSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListDhcpOptionsSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDhcpOptionsSetsResponse>(await this.doRPCRequest("ListDhcpOptionsSets", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListDhcpOptionsSetsResponse({}));
  }

  async listDhcpOptionsSets(request: ListDhcpOptionsSetsRequest): Promise<ListDhcpOptionsSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDhcpOptionsSetsWithOptions(request, runtime);
  }

  async listEnhanhcedNatGatewayAvailableZonesWithOptions(request: ListEnhanhcedNatGatewayAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListEnhanhcedNatGatewayAvailableZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEnhanhcedNatGatewayAvailableZonesResponse>(await this.doRPCRequest("ListEnhanhcedNatGatewayAvailableZones", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListEnhanhcedNatGatewayAvailableZonesResponse({}));
  }

  async listEnhanhcedNatGatewayAvailableZones(request: ListEnhanhcedNatGatewayAvailableZonesRequest): Promise<ListEnhanhcedNatGatewayAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnhanhcedNatGatewayAvailableZonesWithOptions(request, runtime);
  }

  async listIpsecServersWithOptions(request: ListIpsecServersRequest, runtime: $Util.RuntimeOptions): Promise<ListIpsecServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIpsecServersResponse>(await this.doRPCRequest("ListIpsecServers", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListIpsecServersResponse({}));
  }

  async listIpsecServers(request: ListIpsecServersRequest): Promise<ListIpsecServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpsecServersWithOptions(request, runtime);
  }

  async listNatGatewayEcsMetricWithOptions(request: ListNatGatewayEcsMetricRequest, runtime: $Util.RuntimeOptions): Promise<ListNatGatewayEcsMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNatGatewayEcsMetricResponse>(await this.doRPCRequest("ListNatGatewayEcsMetric", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListNatGatewayEcsMetricResponse({}));
  }

  async listNatGatewayEcsMetric(request: ListNatGatewayEcsMetricRequest): Promise<ListNatGatewayEcsMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNatGatewayEcsMetricWithOptions(request, runtime);
  }

  async listPhysicalConnectionFeaturesWithOptions(request: ListPhysicalConnectionFeaturesRequest, runtime: $Util.RuntimeOptions): Promise<ListPhysicalConnectionFeaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhysicalConnectionFeaturesResponse>(await this.doRPCRequest("ListPhysicalConnectionFeatures", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhysicalConnectionFeaturesResponse({}));
  }

  async listPhysicalConnectionFeatures(request: ListPhysicalConnectionFeaturesRequest): Promise<ListPhysicalConnectionFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhysicalConnectionFeaturesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listVpnCertificateAssociationsWithOptions(request: ListVpnCertificateAssociationsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpnCertificateAssociationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVpnCertificateAssociationsResponse>(await this.doRPCRequest("ListVpnCertificateAssociations", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ListVpnCertificateAssociationsResponse({}));
  }

  async listVpnCertificateAssociations(request: ListVpnCertificateAssociationsRequest): Promise<ListVpnCertificateAssociationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpnCertificateAssociationsWithOptions(request, runtime);
  }

  async modifyBgpGroupAttributeWithOptions(request: ModifyBgpGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBgpGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBgpGroupAttributeResponse>(await this.doRPCRequest("ModifyBgpGroupAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBgpGroupAttributeResponse({}));
  }

  async modifyBgpGroupAttribute(request: ModifyBgpGroupAttributeRequest): Promise<ModifyBgpGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBgpGroupAttributeWithOptions(request, runtime);
  }

  async modifyBgpPeerAttributeWithOptions(request: ModifyBgpPeerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBgpPeerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBgpPeerAttributeResponse>(await this.doRPCRequest("ModifyBgpPeerAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBgpPeerAttributeResponse({}));
  }

  async modifyBgpPeerAttribute(request: ModifyBgpPeerAttributeRequest): Promise<ModifyBgpPeerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBgpPeerAttributeWithOptions(request, runtime);
  }

  async modifyCommonBandwidthPackageAttributeWithOptions(request: ModifyCommonBandwidthPackageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCommonBandwidthPackageAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCommonBandwidthPackageAttributeResponse>(await this.doRPCRequest("ModifyCommonBandwidthPackageAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCommonBandwidthPackageAttributeResponse({}));
  }

  async modifyCommonBandwidthPackageAttribute(request: ModifyCommonBandwidthPackageAttributeRequest): Promise<ModifyCommonBandwidthPackageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCommonBandwidthPackageAttributeWithOptions(request, runtime);
  }

  async modifyCommonBandwidthPackageInternetChargeTypeWithOptions(request: ModifyCommonBandwidthPackageInternetChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCommonBandwidthPackageInternetChargeTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCommonBandwidthPackageInternetChargeTypeResponse>(await this.doRPCRequest("ModifyCommonBandwidthPackageInternetChargeType", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCommonBandwidthPackageInternetChargeTypeResponse({}));
  }

  async modifyCommonBandwidthPackageInternetChargeType(request: ModifyCommonBandwidthPackageInternetChargeTypeRequest): Promise<ModifyCommonBandwidthPackageInternetChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCommonBandwidthPackageInternetChargeTypeWithOptions(request, runtime);
  }

  async modifyCommonBandwidthPackageIpBandwidthWithOptions(request: ModifyCommonBandwidthPackageIpBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCommonBandwidthPackageIpBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCommonBandwidthPackageIpBandwidthResponse>(await this.doRPCRequest("ModifyCommonBandwidthPackageIpBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCommonBandwidthPackageIpBandwidthResponse({}));
  }

  async modifyCommonBandwidthPackageIpBandwidth(request: ModifyCommonBandwidthPackageIpBandwidthRequest): Promise<ModifyCommonBandwidthPackageIpBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCommonBandwidthPackageIpBandwidthWithOptions(request, runtime);
  }

  async modifyCommonBandwidthPackagePayTypeWithOptions(request: ModifyCommonBandwidthPackagePayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCommonBandwidthPackagePayTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCommonBandwidthPackagePayTypeResponse>(await this.doRPCRequest("ModifyCommonBandwidthPackagePayType", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCommonBandwidthPackagePayTypeResponse({}));
  }

  async modifyCommonBandwidthPackagePayType(request: ModifyCommonBandwidthPackagePayTypeRequest): Promise<ModifyCommonBandwidthPackagePayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCommonBandwidthPackagePayTypeWithOptions(request, runtime);
  }

  async modifyCommonBandwidthPackageSpecWithOptions(request: ModifyCommonBandwidthPackageSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCommonBandwidthPackageSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCommonBandwidthPackageSpecResponse>(await this.doRPCRequest("ModifyCommonBandwidthPackageSpec", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCommonBandwidthPackageSpecResponse({}));
  }

  async modifyCommonBandwidthPackageSpec(request: ModifyCommonBandwidthPackageSpecRequest): Promise<ModifyCommonBandwidthPackageSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCommonBandwidthPackageSpecWithOptions(request, runtime);
  }

  async modifyCustomerGatewayAttributeWithOptions(request: ModifyCustomerGatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCustomerGatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCustomerGatewayAttributeResponse>(await this.doRPCRequest("ModifyCustomerGatewayAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCustomerGatewayAttributeResponse({}));
  }

  async modifyCustomerGatewayAttribute(request: ModifyCustomerGatewayAttributeRequest): Promise<ModifyCustomerGatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCustomerGatewayAttributeWithOptions(request, runtime);
  }

  async modifyEipAddressAttributeWithOptions(request: ModifyEipAddressAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEipAddressAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEipAddressAttributeResponse>(await this.doRPCRequest("ModifyEipAddressAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEipAddressAttributeResponse({}));
  }

  async modifyEipAddressAttribute(request: ModifyEipAddressAttributeRequest): Promise<ModifyEipAddressAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEipAddressAttributeWithOptions(request, runtime);
  }

  async modifyExpressCloudConnectionAttributeWithOptions(request: ModifyExpressCloudConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyExpressCloudConnectionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyExpressCloudConnectionAttributeResponse>(await this.doRPCRequest("ModifyExpressCloudConnectionAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyExpressCloudConnectionAttributeResponse({}));
  }

  async modifyExpressCloudConnectionAttribute(request: ModifyExpressCloudConnectionAttributeRequest): Promise<ModifyExpressCloudConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyExpressCloudConnectionAttributeWithOptions(request, runtime);
  }

  async modifyExpressCloudConnectionBandwidthWithOptions(request: ModifyExpressCloudConnectionBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyExpressCloudConnectionBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyExpressCloudConnectionBandwidthResponse>(await this.doRPCRequest("ModifyExpressCloudConnectionBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyExpressCloudConnectionBandwidthResponse({}));
  }

  async modifyExpressCloudConnectionBandwidth(request: ModifyExpressCloudConnectionBandwidthRequest): Promise<ModifyExpressCloudConnectionBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyExpressCloudConnectionBandwidthWithOptions(request, runtime);
  }

  async modifyFlowLogAttributeWithOptions(request: ModifyFlowLogAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowLogAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowLogAttributeResponse>(await this.doRPCRequest("ModifyFlowLogAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowLogAttributeResponse({}));
  }

  async modifyFlowLogAttribute(request: ModifyFlowLogAttributeRequest): Promise<ModifyFlowLogAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowLogAttributeWithOptions(request, runtime);
  }

  async modifyForwardEntryWithOptions(request: ModifyForwardEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyForwardEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyForwardEntryResponse>(await this.doRPCRequest("ModifyForwardEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyForwardEntryResponse({}));
  }

  async modifyForwardEntry(request: ModifyForwardEntryRequest): Promise<ModifyForwardEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyForwardEntryWithOptions(request, runtime);
  }

  async modifyGlobalAccelerationInstanceAttributesWithOptions(request: ModifyGlobalAccelerationInstanceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalAccelerationInstanceAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGlobalAccelerationInstanceAttributesResponse>(await this.doRPCRequest("ModifyGlobalAccelerationInstanceAttributes", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGlobalAccelerationInstanceAttributesResponse({}));
  }

  async modifyGlobalAccelerationInstanceAttributes(request: ModifyGlobalAccelerationInstanceAttributesRequest): Promise<ModifyGlobalAccelerationInstanceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalAccelerationInstanceAttributesWithOptions(request, runtime);
  }

  async modifyGlobalAccelerationInstanceSpecWithOptions(request: ModifyGlobalAccelerationInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalAccelerationInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGlobalAccelerationInstanceSpecResponse>(await this.doRPCRequest("ModifyGlobalAccelerationInstanceSpec", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGlobalAccelerationInstanceSpecResponse({}));
  }

  async modifyGlobalAccelerationInstanceSpec(request: ModifyGlobalAccelerationInstanceSpecRequest): Promise<ModifyGlobalAccelerationInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalAccelerationInstanceSpecWithOptions(request, runtime);
  }

  async modifyHaVipAttributeWithOptions(request: ModifyHaVipAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHaVipAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHaVipAttributeResponse>(await this.doRPCRequest("ModifyHaVipAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHaVipAttributeResponse({}));
  }

  async modifyHaVipAttribute(request: ModifyHaVipAttributeRequest): Promise<ModifyHaVipAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHaVipAttributeWithOptions(request, runtime);
  }

  async modifyInstanceAutoRenewalAttributeWithOptions(request: ModifyInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("ModifyInstanceAutoRenewalAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAutoRenewalAttributeResponse({}));
  }

  async modifyInstanceAutoRenewalAttribute(request: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async modifyIpv6AddressAttributeWithOptions(request: ModifyIpv6AddressAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpv6AddressAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpv6AddressAttributeResponse>(await this.doRPCRequest("ModifyIpv6AddressAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpv6AddressAttributeResponse({}));
  }

  async modifyIpv6AddressAttribute(request: ModifyIpv6AddressAttributeRequest): Promise<ModifyIpv6AddressAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpv6AddressAttributeWithOptions(request, runtime);
  }

  async modifyIpv6GatewayAttributeWithOptions(request: ModifyIpv6GatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpv6GatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpv6GatewayAttributeResponse>(await this.doRPCRequest("ModifyIpv6GatewayAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpv6GatewayAttributeResponse({}));
  }

  async modifyIpv6GatewayAttribute(request: ModifyIpv6GatewayAttributeRequest): Promise<ModifyIpv6GatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpv6GatewayAttributeWithOptions(request, runtime);
  }

  async modifyIpv6GatewaySpecWithOptions(request: ModifyIpv6GatewaySpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpv6GatewaySpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpv6GatewaySpecResponse>(await this.doRPCRequest("ModifyIpv6GatewaySpec", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpv6GatewaySpecResponse({}));
  }

  async modifyIpv6GatewaySpec(request: ModifyIpv6GatewaySpecRequest): Promise<ModifyIpv6GatewaySpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpv6GatewaySpecWithOptions(request, runtime);
  }

  async modifyIpv6InternetBandwidthWithOptions(request: ModifyIpv6InternetBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpv6InternetBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpv6InternetBandwidthResponse>(await this.doRPCRequest("ModifyIpv6InternetBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpv6InternetBandwidthResponse({}));
  }

  async modifyIpv6InternetBandwidth(request: ModifyIpv6InternetBandwidthRequest): Promise<ModifyIpv6InternetBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpv6InternetBandwidthWithOptions(request, runtime);
  }

  async modifyIPv6TranslatorAclAttributeWithOptions(request: ModifyIPv6TranslatorAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIPv6TranslatorAclAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIPv6TranslatorAclAttributeResponse>(await this.doRPCRequest("ModifyIPv6TranslatorAclAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIPv6TranslatorAclAttributeResponse({}));
  }

  async modifyIPv6TranslatorAclAttribute(request: ModifyIPv6TranslatorAclAttributeRequest): Promise<ModifyIPv6TranslatorAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIPv6TranslatorAclAttributeWithOptions(request, runtime);
  }

  async modifyIPv6TranslatorAclListEntryWithOptions(request: ModifyIPv6TranslatorAclListEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIPv6TranslatorAclListEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIPv6TranslatorAclListEntryResponse>(await this.doRPCRequest("ModifyIPv6TranslatorAclListEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIPv6TranslatorAclListEntryResponse({}));
  }

  async modifyIPv6TranslatorAclListEntry(request: ModifyIPv6TranslatorAclListEntryRequest): Promise<ModifyIPv6TranslatorAclListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIPv6TranslatorAclListEntryWithOptions(request, runtime);
  }

  async modifyIPv6TranslatorAttributeWithOptions(request: ModifyIPv6TranslatorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIPv6TranslatorAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIPv6TranslatorAttributeResponse>(await this.doRPCRequest("ModifyIPv6TranslatorAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIPv6TranslatorAttributeResponse({}));
  }

  async modifyIPv6TranslatorAttribute(request: ModifyIPv6TranslatorAttributeRequest): Promise<ModifyIPv6TranslatorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIPv6TranslatorAttributeWithOptions(request, runtime);
  }

  async modifyIPv6TranslatorBandwidthWithOptions(request: ModifyIPv6TranslatorBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIPv6TranslatorBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIPv6TranslatorBandwidthResponse>(await this.doRPCRequest("ModifyIPv6TranslatorBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIPv6TranslatorBandwidthResponse({}));
  }

  async modifyIPv6TranslatorBandwidth(request: ModifyIPv6TranslatorBandwidthRequest): Promise<ModifyIPv6TranslatorBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIPv6TranslatorBandwidthWithOptions(request, runtime);
  }

  async modifyIPv6TranslatorEntryWithOptions(request: ModifyIPv6TranslatorEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIPv6TranslatorEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIPv6TranslatorEntryResponse>(await this.doRPCRequest("ModifyIPv6TranslatorEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIPv6TranslatorEntryResponse({}));
  }

  async modifyIPv6TranslatorEntry(request: ModifyIPv6TranslatorEntryRequest): Promise<ModifyIPv6TranslatorEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIPv6TranslatorEntryWithOptions(request, runtime);
  }

  async modifyNatGatewayAttributeWithOptions(request: ModifyNatGatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNatGatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNatGatewayAttributeResponse>(await this.doRPCRequest("ModifyNatGatewayAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNatGatewayAttributeResponse({}));
  }

  async modifyNatGatewayAttribute(request: ModifyNatGatewayAttributeRequest): Promise<ModifyNatGatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNatGatewayAttributeWithOptions(request, runtime);
  }

  async modifyNatGatewaySpecWithOptions(request: ModifyNatGatewaySpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNatGatewaySpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNatGatewaySpecResponse>(await this.doRPCRequest("ModifyNatGatewaySpec", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNatGatewaySpecResponse({}));
  }

  async modifyNatGatewaySpec(request: ModifyNatGatewaySpecRequest): Promise<ModifyNatGatewaySpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNatGatewaySpecWithOptions(request, runtime);
  }

  async modifyNetworkAclAttributesWithOptions(request: ModifyNetworkAclAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkAclAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNetworkAclAttributesResponse>(await this.doRPCRequest("ModifyNetworkAclAttributes", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNetworkAclAttributesResponse({}));
  }

  async modifyNetworkAclAttributes(request: ModifyNetworkAclAttributesRequest): Promise<ModifyNetworkAclAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkAclAttributesWithOptions(request, runtime);
  }

  async modifyRouteEntryWithOptions(request: ModifyRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRouteEntryResponse>(await this.doRPCRequest("ModifyRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRouteEntryResponse({}));
  }

  async modifyRouteEntry(request: ModifyRouteEntryRequest): Promise<ModifyRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouteEntryWithOptions(request, runtime);
  }

  async modifyRouterInterfaceAttributeWithOptions(request: ModifyRouterInterfaceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouterInterfaceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRouterInterfaceAttributeResponse>(await this.doRPCRequest("ModifyRouterInterfaceAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRouterInterfaceAttributeResponse({}));
  }

  async modifyRouterInterfaceAttribute(request: ModifyRouterInterfaceAttributeRequest): Promise<ModifyRouterInterfaceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouterInterfaceAttributeWithOptions(request, runtime);
  }

  async modifyRouterInterfaceSpecWithOptions(request: ModifyRouterInterfaceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouterInterfaceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRouterInterfaceSpecResponse>(await this.doRPCRequest("ModifyRouterInterfaceSpec", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRouterInterfaceSpecResponse({}));
  }

  async modifyRouterInterfaceSpec(request: ModifyRouterInterfaceSpecRequest): Promise<ModifyRouterInterfaceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouterInterfaceSpecWithOptions(request, runtime);
  }

  async modifyRouteTableAttributesWithOptions(request: ModifyRouteTableAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRouteTableAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRouteTableAttributesResponse>(await this.doRPCRequest("ModifyRouteTableAttributes", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRouteTableAttributesResponse({}));
  }

  async modifyRouteTableAttributes(request: ModifyRouteTableAttributesRequest): Promise<ModifyRouteTableAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRouteTableAttributesWithOptions(request, runtime);
  }

  async modifySnatEntryWithOptions(request: ModifySnatEntryRequest, runtime: $Util.RuntimeOptions): Promise<ModifySnatEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySnatEntryResponse>(await this.doRPCRequest("ModifySnatEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySnatEntryResponse({}));
  }

  async modifySnatEntry(request: ModifySnatEntryRequest): Promise<ModifySnatEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySnatEntryWithOptions(request, runtime);
  }

  async modifySslVpnClientCertWithOptions(request: ModifySslVpnClientCertRequest, runtime: $Util.RuntimeOptions): Promise<ModifySslVpnClientCertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySslVpnClientCertResponse>(await this.doRPCRequest("ModifySslVpnClientCert", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySslVpnClientCertResponse({}));
  }

  async modifySslVpnClientCert(request: ModifySslVpnClientCertRequest): Promise<ModifySslVpnClientCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySslVpnClientCertWithOptions(request, runtime);
  }

  async modifySslVpnServerWithOptions(request: ModifySslVpnServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifySslVpnServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySslVpnServerResponse>(await this.doRPCRequest("ModifySslVpnServer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySslVpnServerResponse({}));
  }

  async modifySslVpnServer(request: ModifySslVpnServerRequest): Promise<ModifySslVpnServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySslVpnServerWithOptions(request, runtime);
  }

  async modifyVirtualBorderRouterAttributeWithOptions(request: ModifyVirtualBorderRouterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVirtualBorderRouterAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVirtualBorderRouterAttributeResponse>(await this.doRPCRequest("ModifyVirtualBorderRouterAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVirtualBorderRouterAttributeResponse({}));
  }

  async modifyVirtualBorderRouterAttribute(request: ModifyVirtualBorderRouterAttributeRequest): Promise<ModifyVirtualBorderRouterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVirtualBorderRouterAttributeWithOptions(request, runtime);
  }

  async modifyVpcAttributeWithOptions(request: ModifyVpcAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpcAttributeResponse>(await this.doRPCRequest("ModifyVpcAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpcAttributeResponse({}));
  }

  async modifyVpcAttribute(request: ModifyVpcAttributeRequest): Promise<ModifyVpcAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcAttributeWithOptions(request, runtime);
  }

  async modifyVpnConnectionAttributeWithOptions(request: ModifyVpnConnectionAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpnConnectionAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpnConnectionAttributeResponse>(await this.doRPCRequest("ModifyVpnConnectionAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpnConnectionAttributeResponse({}));
  }

  async modifyVpnConnectionAttribute(request: ModifyVpnConnectionAttributeRequest): Promise<ModifyVpnConnectionAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpnConnectionAttributeWithOptions(request, runtime);
  }

  async modifyVpnGatewayAttributeWithOptions(request: ModifyVpnGatewayAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpnGatewayAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpnGatewayAttributeResponse>(await this.doRPCRequest("ModifyVpnGatewayAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpnGatewayAttributeResponse({}));
  }

  async modifyVpnGatewayAttribute(request: ModifyVpnGatewayAttributeRequest): Promise<ModifyVpnGatewayAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpnGatewayAttributeWithOptions(request, runtime);
  }

  async modifyVpnPbrRouteEntryWeightWithOptions(request: ModifyVpnPbrRouteEntryWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpnPbrRouteEntryWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpnPbrRouteEntryWeightResponse>(await this.doRPCRequest("ModifyVpnPbrRouteEntryWeight", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpnPbrRouteEntryWeightResponse({}));
  }

  async modifyVpnPbrRouteEntryWeight(request: ModifyVpnPbrRouteEntryWeightRequest): Promise<ModifyVpnPbrRouteEntryWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpnPbrRouteEntryWeightWithOptions(request, runtime);
  }

  async modifyVpnRouteEntryWeightWithOptions(request: ModifyVpnRouteEntryWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpnRouteEntryWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpnRouteEntryWeightResponse>(await this.doRPCRequest("ModifyVpnRouteEntryWeight", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpnRouteEntryWeightResponse({}));
  }

  async modifyVpnRouteEntryWeight(request: ModifyVpnRouteEntryWeightRequest): Promise<ModifyVpnRouteEntryWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpnRouteEntryWeightWithOptions(request, runtime);
  }

  async modifyVRouterAttributeWithOptions(request: ModifyVRouterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVRouterAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVRouterAttributeResponse>(await this.doRPCRequest("ModifyVRouterAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVRouterAttributeResponse({}));
  }

  async modifyVRouterAttribute(request: ModifyVRouterAttributeRequest): Promise<ModifyVRouterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVRouterAttributeWithOptions(request, runtime);
  }

  async modifyVSwitchAttributeWithOptions(request: ModifyVSwitchAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVSwitchAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVSwitchAttributeResponse>(await this.doRPCRequest("ModifyVSwitchAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVSwitchAttributeResponse({}));
  }

  async modifyVSwitchAttribute(request: ModifyVSwitchAttributeRequest): Promise<ModifyVSwitchAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVSwitchAttributeWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async publishVpnRouteEntryWithOptions(request: PublishVpnRouteEntryRequest, runtime: $Util.RuntimeOptions): Promise<PublishVpnRouteEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishVpnRouteEntryResponse>(await this.doRPCRequest("PublishVpnRouteEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new PublishVpnRouteEntryResponse({}));
  }

  async publishVpnRouteEntry(request: PublishVpnRouteEntryRequest): Promise<PublishVpnRouteEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishVpnRouteEntryWithOptions(request, runtime);
  }

  async recoverVirtualBorderRouterWithOptions(request: RecoverVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<RecoverVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecoverVirtualBorderRouterResponse>(await this.doRPCRequest("RecoverVirtualBorderRouter", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new RecoverVirtualBorderRouterResponse({}));
  }

  async recoverVirtualBorderRouter(request: RecoverVirtualBorderRouterRequest): Promise<RecoverVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoverVirtualBorderRouterWithOptions(request, runtime);
  }

  async releaseEipAddressWithOptions(request: ReleaseEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseEipAddressResponse>(await this.doRPCRequest("ReleaseEipAddress", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseEipAddressResponse({}));
  }

  async releaseEipAddress(request: ReleaseEipAddressRequest): Promise<ReleaseEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEipAddressWithOptions(request, runtime);
  }

  async releaseEipSegmentAddressWithOptions(request: ReleaseEipSegmentAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEipSegmentAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseEipSegmentAddressResponse>(await this.doRPCRequest("ReleaseEipSegmentAddress", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseEipSegmentAddressResponse({}));
  }

  async releaseEipSegmentAddress(request: ReleaseEipSegmentAddressRequest): Promise<ReleaseEipSegmentAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEipSegmentAddressWithOptions(request, runtime);
  }

  async removeCommonBandwidthPackageIpWithOptions(request: RemoveCommonBandwidthPackageIpRequest, runtime: $Util.RuntimeOptions): Promise<RemoveCommonBandwidthPackageIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveCommonBandwidthPackageIpResponse>(await this.doRPCRequest("RemoveCommonBandwidthPackageIp", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveCommonBandwidthPackageIpResponse({}));
  }

  async removeCommonBandwidthPackageIp(request: RemoveCommonBandwidthPackageIpRequest): Promise<RemoveCommonBandwidthPackageIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeCommonBandwidthPackageIpWithOptions(request, runtime);
  }

  async removeGlobalAccelerationInstanceIpWithOptions(request: RemoveGlobalAccelerationInstanceIpRequest, runtime: $Util.RuntimeOptions): Promise<RemoveGlobalAccelerationInstanceIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveGlobalAccelerationInstanceIpResponse>(await this.doRPCRequest("RemoveGlobalAccelerationInstanceIp", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveGlobalAccelerationInstanceIpResponse({}));
  }

  async removeGlobalAccelerationInstanceIp(request: RemoveGlobalAccelerationInstanceIpRequest): Promise<RemoveGlobalAccelerationInstanceIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeGlobalAccelerationInstanceIpWithOptions(request, runtime);
  }

  async removeIPv6TranslatorAclListEntryWithOptions(request: RemoveIPv6TranslatorAclListEntryRequest, runtime: $Util.RuntimeOptions): Promise<RemoveIPv6TranslatorAclListEntryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveIPv6TranslatorAclListEntryResponse>(await this.doRPCRequest("RemoveIPv6TranslatorAclListEntry", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveIPv6TranslatorAclListEntryResponse({}));
  }

  async removeIPv6TranslatorAclListEntry(request: RemoveIPv6TranslatorAclListEntryRequest): Promise<RemoveIPv6TranslatorAclListEntryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeIPv6TranslatorAclListEntryWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async replaceVpcDhcpOptionsSetWithOptions(request: ReplaceVpcDhcpOptionsSetRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceVpcDhcpOptionsSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceVpcDhcpOptionsSetResponse>(await this.doRPCRequest("ReplaceVpcDhcpOptionsSet", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceVpcDhcpOptionsSetResponse({}));
  }

  async replaceVpcDhcpOptionsSet(request: ReplaceVpcDhcpOptionsSetRequest): Promise<ReplaceVpcDhcpOptionsSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceVpcDhcpOptionsSetWithOptions(request, runtime);
  }

  async revokeInstanceFromCenWithOptions(request: RevokeInstanceFromCenRequest, runtime: $Util.RuntimeOptions): Promise<RevokeInstanceFromCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeInstanceFromCenResponse>(await this.doRPCRequest("RevokeInstanceFromCen", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeInstanceFromCenResponse({}));
  }

  async revokeInstanceFromCen(request: RevokeInstanceFromCenRequest): Promise<RevokeInstanceFromCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeInstanceFromCenWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async terminatePhysicalConnectionWithOptions(request: TerminatePhysicalConnectionRequest, runtime: $Util.RuntimeOptions): Promise<TerminatePhysicalConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TerminatePhysicalConnectionResponse>(await this.doRPCRequest("TerminatePhysicalConnection", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new TerminatePhysicalConnectionResponse({}));
  }

  async terminatePhysicalConnection(request: TerminatePhysicalConnectionRequest): Promise<TerminatePhysicalConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminatePhysicalConnectionWithOptions(request, runtime);
  }

  async terminateVirtualBorderRouterWithOptions(request: TerminateVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<TerminateVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TerminateVirtualBorderRouterResponse>(await this.doRPCRequest("TerminateVirtualBorderRouter", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new TerminateVirtualBorderRouterResponse({}));
  }

  async terminateVirtualBorderRouter(request: TerminateVirtualBorderRouterRequest): Promise<TerminateVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateVirtualBorderRouterWithOptions(request, runtime);
  }

  async unassociateEipAddressWithOptions(request: UnassociateEipAddressRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateEipAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateEipAddressResponse>(await this.doRPCRequest("UnassociateEipAddress", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateEipAddressResponse({}));
  }

  async unassociateEipAddress(request: UnassociateEipAddressRequest): Promise<UnassociateEipAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateEipAddressWithOptions(request, runtime);
  }

  async unassociateGlobalAccelerationInstanceWithOptions(request: UnassociateGlobalAccelerationInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateGlobalAccelerationInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateGlobalAccelerationInstanceResponse>(await this.doRPCRequest("UnassociateGlobalAccelerationInstance", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateGlobalAccelerationInstanceResponse({}));
  }

  async unassociateGlobalAccelerationInstance(request: UnassociateGlobalAccelerationInstanceRequest): Promise<UnassociateGlobalAccelerationInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateGlobalAccelerationInstanceWithOptions(request, runtime);
  }

  async unassociateHaVipWithOptions(request: UnassociateHaVipRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateHaVipResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateHaVipResponse>(await this.doRPCRequest("UnassociateHaVip", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateHaVipResponse({}));
  }

  async unassociateHaVip(request: UnassociateHaVipRequest): Promise<UnassociateHaVipResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateHaVipWithOptions(request, runtime);
  }

  async unassociateNetworkAclWithOptions(request: UnassociateNetworkAclRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateNetworkAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateNetworkAclResponse>(await this.doRPCRequest("UnassociateNetworkAcl", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateNetworkAclResponse({}));
  }

  async unassociateNetworkAcl(request: UnassociateNetworkAclRequest): Promise<UnassociateNetworkAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateNetworkAclWithOptions(request, runtime);
  }

  async unassociatePhysicalConnectionFromVirtualBorderRouterWithOptions(request: UnassociatePhysicalConnectionFromVirtualBorderRouterRequest, runtime: $Util.RuntimeOptions): Promise<UnassociatePhysicalConnectionFromVirtualBorderRouterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociatePhysicalConnectionFromVirtualBorderRouterResponse>(await this.doRPCRequest("UnassociatePhysicalConnectionFromVirtualBorderRouter", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociatePhysicalConnectionFromVirtualBorderRouterResponse({}));
  }

  async unassociatePhysicalConnectionFromVirtualBorderRouter(request: UnassociatePhysicalConnectionFromVirtualBorderRouterRequest): Promise<UnassociatePhysicalConnectionFromVirtualBorderRouterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociatePhysicalConnectionFromVirtualBorderRouterWithOptions(request, runtime);
  }

  async unassociateRouteTableWithOptions(request: UnassociateRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateRouteTableResponse>(await this.doRPCRequest("UnassociateRouteTable", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateRouteTableResponse({}));
  }

  async unassociateRouteTable(request: UnassociateRouteTableRequest): Promise<UnassociateRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateRouteTableWithOptions(request, runtime);
  }

  async unassociateVpcCidrBlockWithOptions(request: UnassociateVpcCidrBlockRequest, runtime: $Util.RuntimeOptions): Promise<UnassociateVpcCidrBlockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnassociateVpcCidrBlockResponse>(await this.doRPCRequest("UnassociateVpcCidrBlock", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnassociateVpcCidrBlockResponse({}));
  }

  async unassociateVpcCidrBlock(request: UnassociateVpcCidrBlockRequest): Promise<UnassociateVpcCidrBlockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unassociateVpcCidrBlockWithOptions(request, runtime);
  }

  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UnTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnTagResourcesResponse>(await this.doRPCRequest("UnTagResources", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UnTagResourcesResponse({}));
  }

  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  async updateDhcpOptionsSetAttributeWithOptions(request: UpdateDhcpOptionsSetAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDhcpOptionsSetAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDhcpOptionsSetAttributeResponse>(await this.doRPCRequest("UpdateDhcpOptionsSetAttribute", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDhcpOptionsSetAttributeResponse({}));
  }

  async updateDhcpOptionsSetAttribute(request: UpdateDhcpOptionsSetAttributeRequest): Promise<UpdateDhcpOptionsSetAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDhcpOptionsSetAttributeWithOptions(request, runtime);
  }

  async updateIpsecServerWithOptions(request: UpdateIpsecServerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpsecServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpsecServerResponse>(await this.doRPCRequest("UpdateIpsecServer", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpsecServerResponse({}));
  }

  async updateIpsecServer(request: UpdateIpsecServerRequest): Promise<UpdateIpsecServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpsecServerWithOptions(request, runtime);
  }

  async updateNatGatewayNatTypeWithOptions(request: UpdateNatGatewayNatTypeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNatGatewayNatTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNatGatewayNatTypeResponse>(await this.doRPCRequest("UpdateNatGatewayNatType", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNatGatewayNatTypeResponse({}));
  }

  async updateNatGatewayNatType(request: UpdateNatGatewayNatTypeRequest): Promise<UpdateNatGatewayNatTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNatGatewayNatTypeWithOptions(request, runtime);
  }

  async updateNetworkAclEntriesWithOptions(request: UpdateNetworkAclEntriesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNetworkAclEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNetworkAclEntriesResponse>(await this.doRPCRequest("UpdateNetworkAclEntries", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNetworkAclEntriesResponse({}));
  }

  async updateNetworkAclEntries(request: UpdateNetworkAclEntriesRequest): Promise<UpdateNetworkAclEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNetworkAclEntriesWithOptions(request, runtime);
  }

  async updateVirtualBorderBandwidthWithOptions(request: UpdateVirtualBorderBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVirtualBorderBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVirtualBorderBandwidthResponse>(await this.doRPCRequest("UpdateVirtualBorderBandwidth", "2016-04-28", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVirtualBorderBandwidthResponse({}));
  }

  async updateVirtualBorderBandwidth(request: UpdateVirtualBorderBandwidthRequest): Promise<UpdateVirtualBorderBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVirtualBorderBandwidthWithOptions(request, runtime);
  }

}
