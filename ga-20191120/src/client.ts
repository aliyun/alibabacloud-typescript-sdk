// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddEntriesToAclRequest extends $tea.Model {
  regionId?: string;
  aclId?: string;
  aclEntries?: AddEntriesToAclRequestAclEntries[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntries: 'AclEntries',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclId: 'string',
      aclEntries: { 'type': 'array', 'itemType': AddEntriesToAclRequestAclEntries },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclResponseBody extends $tea.Model {
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

export class AddEntriesToAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddEntriesToAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEntriesToAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerRequest extends $tea.Model {
  regionId?: string;
  aclIds?: string[];
  listenerId?: string;
  aclType?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      aclType: 'AclType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      aclType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponseBody extends $tea.Model {
  requestId?: string;
  aclIds?: string[];
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateAclsWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateAclsWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  listenerId?: string;
  certificates?: AssociateAdditionalCertificatesWithListenerRequestCertificates[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      certificates: 'Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
      certificates: { 'type': 'array', 'itemType': AssociateAdditionalCertificatesWithListenerRequestCertificates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  requestId?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateAdditionalCertificatesWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateAdditionalCertificatesWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDdosToAcceleratorRequest extends $tea.Model {
  acceleratorId?: string;
  ddosId?: string;
  ddosRegionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      ddosId: 'DdosId',
      ddosRegionId: 'DdosRegionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      ddosId: 'string',
      ddosRegionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDdosToAcceleratorResponseBody extends $tea.Model {
  ddosId?: string;
  requestId?: string;
  gaId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      requestId: 'RequestId',
      gaId: 'GaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      requestId: 'string',
      gaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDdosToAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachDdosToAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachDdosToAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLogStoreToEndpointGroupRequest extends $tea.Model {
  regionId?: string;
  slsProjectName?: string;
  slsLogStoreName?: string;
  acceleratorId?: string;
  listenerId?: string;
  slsRegionId?: string;
  endpointGroupIds?: string[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      slsProjectName: 'SlsProjectName',
      slsLogStoreName: 'SlsLogStoreName',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      slsRegionId: 'SlsRegionId',
      endpointGroupIds: 'EndpointGroupIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      slsProjectName: 'string',
      slsLogStoreName: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
      slsRegionId: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLogStoreToEndpointGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLogStoreToEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachLogStoreToEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachLogStoreToEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageAddAcceleratorRequest extends $tea.Model {
  regionId?: string;
  bandwidthPackageId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageAddAcceleratorResponseBody extends $tea.Model {
  requestId?: string;
  accelerators?: string[];
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accelerators: 'Accelerators',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageAddAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandwidthPackageAddAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandwidthPackageAddAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageRemoveAcceleratorRequest extends $tea.Model {
  regionId?: string;
  bandwidthPackageId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageRemoveAcceleratorResponseBody extends $tea.Model {
  requestId?: string;
  accelerators?: string[];
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accelerators: 'Accelerators',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageRemoveAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BandwidthPackageRemoveAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BandwidthPackageRemoveAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigEndpointProbeRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  endpointGroupId?: string;
  endpointType?: string;
  endpoint?: string;
  probeProtocol?: string;
  probePort?: string;
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointType: 'EndpointType',
      endpoint: 'Endpoint',
      probeProtocol: 'ProbeProtocol',
      probePort: 'ProbePort',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      endpointGroupId: 'string',
      endpointType: 'string',
      endpoint: 'string',
      probeProtocol: 'string',
      probePort: 'string',
      enable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigEndpointProbeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigEndpointProbeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigEndpointProbeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigEndpointProbeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  name?: string;
  duration?: number;
  pricingCycle?: string;
  spec?: string;
  autoPay?: boolean;
  autoUseCoupon?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      name: 'Name',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      spec: 'Spec',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      name: 'string',
      duration: 'number',
      pricingCycle: 'string',
      spec: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $tea.Model {
  regionId?: string;
  aclName?: string;
  addressIPVersion?: string;
  aclEntries?: CreateAclRequestAclEntries[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      aclEntries: 'AclEntries',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      aclEntries: { 'type': 'array', 'itemType': CreateAclRequestAclEntries },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $tea.Model {
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

export class CreateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageRequest extends $tea.Model {
  regionId?: string;
  bandwidth?: number;
  duration?: string;
  pricingCycle?: string;
  autoPay?: boolean;
  clientToken?: string;
  type?: string;
  bandwidthType?: string;
  autoUseCoupon?: string;
  ratio?: number;
  billingType?: string;
  chargeType?: string;
  cbnGeographicRegionIdA?: string;
  cbnGeographicRegionIdB?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidth: 'Bandwidth',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      type: 'Type',
      bandwidthType: 'BandwidthType',
      autoUseCoupon: 'AutoUseCoupon',
      ratio: 'Ratio',
      billingType: 'BillingType',
      chargeType: 'ChargeType',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidth: 'number',
      duration: 'string',
      pricingCycle: 'string',
      autoPay: 'boolean',
      clientToken: 'string',
      type: 'string',
      bandwidthType: 'string',
      autoUseCoupon: 'string',
      ratio: 'number',
      billingType: 'string',
      chargeType: 'string',
      cbnGeographicRegionIdA: 'string',
      cbnGeographicRegionIdB: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageResponseBody extends $tea.Model {
  requestId?: string;
  bandwidthPackageId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bandwidthPackageId: 'BandwidthPackageId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bandwidthPackageId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  name?: string;
  description?: string;
  endpointGroupRegion?: string;
  listenerId?: string;
  trafficPercentage?: number;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  thresholdCount?: number;
  endpointConfigurations?: CreateEndpointGroupRequestEndpointConfigurations[];
  endpointRequestProtocol?: string;
  endpointGroupType?: string;
  portOverrides?: CreateEndpointGroupRequestPortOverrides[];
  healthCheckEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      name: 'Name',
      description: 'Description',
      endpointGroupRegion: 'EndpointGroupRegion',
      listenerId: 'ListenerId',
      trafficPercentage: 'TrafficPercentage',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      thresholdCount: 'ThresholdCount',
      endpointConfigurations: 'EndpointConfigurations',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      endpointGroupType: 'EndpointGroupType',
      portOverrides: 'PortOverrides',
      healthCheckEnabled: 'HealthCheckEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      name: 'string',
      description: 'string',
      endpointGroupRegion: 'string',
      listenerId: 'string',
      trafficPercentage: 'number',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      thresholdCount: 'number',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupRequestEndpointConfigurations },
      endpointRequestProtocol: 'string',
      endpointGroupType: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupRequestPortOverrides },
      healthCheckEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupResponseBody extends $tea.Model {
  endpointGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  acceleratorId?: string;
  listenerId?: string;
  endpointGroupConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurations[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      acceleratorId: 'string',
      listenerId: 'string',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsResponseBody extends $tea.Model {
  requestId?: string;
  endpointGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endpointGroupIds: 'EndpointGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  listenerId?: string;
  forwardingRules?: CreateForwardingRulesRequestForwardingRules[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      forwardingRules: 'ForwardingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
      forwardingRules: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesResponseBody extends $tea.Model {
  requestId?: string;
  forwardingRules?: CreateForwardingRulesResponseBodyForwardingRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      forwardingRules: 'ForwardingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      forwardingRules: { 'type': 'array', 'itemType': CreateForwardingRulesResponseBodyForwardingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  accelerateRegion?: CreateIpSetsRequestAccelerateRegion[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      accelerateRegion: 'AccelerateRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      accelerateRegion: { 'type': 'array', 'itemType': CreateIpSetsRequestAccelerateRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsResponseBody extends $tea.Model {
  requestId?: string;
  ipSets?: CreateIpSetsResponseBodyIpSets[];
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipSets: 'IpSets',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipSets: { 'type': 'array', 'itemType': CreateIpSetsResponseBodyIpSets },
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  name?: string;
  description?: string;
  clientAffinity?: string;
  protocol?: string;
  proxyProtocol?: boolean;
  portRanges?: CreateListenerRequestPortRanges[];
  certificates?: CreateListenerRequestCertificates[];
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      name: 'Name',
      description: 'Description',
      clientAffinity: 'ClientAffinity',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      portRanges: 'PortRanges',
      certificates: 'Certificates',
      XForwardedForConfig: 'XForwardedForConfig',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      name: 'string',
      description: 'string',
      clientAffinity: 'string',
      protocol: 'string',
      proxyProtocol: 'boolean',
      portRanges: { 'type': 'array', 'itemType': CreateListenerRequestPortRanges },
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      XForwardedForConfig: CreateListenerRequestXForwardedForConfig,
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponseBody extends $tea.Model {
  requestId?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpareIpsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  acceleratorId?: string;
  spareIps?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      acceleratorId: 'AcceleratorId',
      spareIps: 'SpareIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      acceleratorId: 'string',
      spareIps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpareIpsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpareIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSpareIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAcceleratorRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAcceleratorResponseBody extends $tea.Model {
  requestId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $tea.Model {
  regionId?: string;
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $tea.Model {
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

export class DeleteAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageRequest extends $tea.Model {
  regionId?: string;
  bandwidthPackageId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageResponseBody extends $tea.Model {
  requestId?: string;
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupRequest extends $tea.Model {
  clientToken?: string;
  acceleratorId?: string;
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      acceleratorId: 'string',
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupIds: 'EndpointGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardingRulesRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  forwardingRuleIds?: string[];
  acceleratorId?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      forwardingRuleIds: 'ForwardingRuleIds',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      acceleratorId: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardingRulesResponseBody extends $tea.Model {
  forwardingRules?: DeleteForwardingRulesResponseBodyForwardingRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRules: 'ForwardingRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRules: { 'type': 'array', 'itemType': DeleteForwardingRulesResponseBodyForwardingRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  ipSetId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      ipSetId: 'IpSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      ipSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetsRequest extends $tea.Model {
  regionId?: string;
  ipSetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipSetIds: 'IpSetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipSetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerRequest extends $tea.Model {
  clientToken?: string;
  acceleratorId?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpareIpsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  acceleratorId?: string;
  spareIps?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      acceleratorId: 'AcceleratorId',
      spareIps: 'SpareIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      acceleratorId: 'string',
      spareIps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpareIpsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpareIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSpareIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBody extends $tea.Model {
  ddosId?: string;
  dnsName?: string;
  description?: string;
  requestId?: string;
  instanceChargeType?: string;
  createTime?: number;
  crossDomainBandwidthPackage?: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage;
  secondDnsName?: string;
  name?: string;
  basicBandwidthPackage?: DescribeAcceleratorResponseBodyBasicBandwidthPackage;
  state?: string;
  expiredTime?: number;
  cenId?: string;
  regionId?: string;
  spec?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      dnsName: 'DnsName',
      description: 'Description',
      requestId: 'RequestId',
      instanceChargeType: 'InstanceChargeType',
      createTime: 'CreateTime',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      secondDnsName: 'SecondDnsName',
      name: 'Name',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      state: 'State',
      expiredTime: 'ExpiredTime',
      cenId: 'CenId',
      regionId: 'RegionId',
      spec: 'Spec',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      dnsName: 'string',
      description: 'string',
      requestId: 'string',
      instanceChargeType: 'string',
      createTime: 'number',
      crossDomainBandwidthPackage: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage,
      secondDnsName: 'string',
      name: 'string',
      basicBandwidthPackage: DescribeAcceleratorResponseBodyBasicBandwidthPackage,
      state: 'string',
      expiredTime: 'number',
      cenId: 'string',
      regionId: 'string',
      spec: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageRequest extends $tea.Model {
  regionId?: string;
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageResponseBody extends $tea.Model {
  cbnGeographicRegionIdB?: string;
  cbnGeographicRegionIdA?: string;
  description?: string;
  requestId?: string;
  createTime?: string;
  name?: string;
  bandwidthType?: string;
  type?: string;
  accelerators?: string[];
  state?: string;
  chargeType?: string;
  bandwidth?: number;
  expiredTime?: string;
  bandwidthPackageId?: string;
  regionId?: string;
  billingType?: string;
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      description: 'Description',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      name: 'Name',
      bandwidthType: 'BandwidthType',
      type: 'Type',
      accelerators: 'Accelerators',
      state: 'State',
      chargeType: 'ChargeType',
      bandwidth: 'Bandwidth',
      expiredTime: 'ExpiredTime',
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
      billingType: 'BillingType',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cbnGeographicRegionIdB: 'string',
      cbnGeographicRegionIdA: 'string',
      description: 'string',
      requestId: 'string',
      createTime: 'string',
      name: 'string',
      bandwidthType: 'string',
      type: 'string',
      accelerators: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      chargeType: 'string',
      bandwidth: 'number',
      expiredTime: 'string',
      bandwidthPackageId: 'string',
      regionId: 'string',
      billingType: 'string',
      ratio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupRequest extends $tea.Model {
  regionId?: string;
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBody extends $tea.Model {
  healthCheckIntervalSeconds?: number;
  trafficPercentage?: number;
  endpointGroupId?: string;
  description?: string;
  endpointGroupIpList?: string[];
  endpointGroupUnconfirmedIpList?: string[];
  requestId?: string;
  healthCheckPath?: string;
  thresholdCount?: number;
  name?: string;
  endpointGroupRegion?: string;
  totalCount?: number;
  state?: string;
  healthCheckProtocol?: string;
  healthCheckPort?: number;
  endpointConfigurations?: DescribeEndpointGroupResponseBodyEndpointConfigurations[];
  portOverrides?: DescribeEndpointGroupResponseBodyPortOverrides[];
  endpointRequestProtocol?: string;
  endpointGroupType?: string;
  forwardingRuleIds?: string[];
  acceleratorId?: string;
  listenerId?: string;
  slsRegion?: string;
  slsProjectName?: string;
  slsLogStoreName?: string;
  accessLogSwitch?: string;
  enableAccessLog?: boolean;
  healthCheckEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      trafficPercentage: 'TrafficPercentage',
      endpointGroupId: 'EndpointGroupId',
      description: 'Description',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      requestId: 'RequestId',
      healthCheckPath: 'HealthCheckPath',
      thresholdCount: 'ThresholdCount',
      name: 'Name',
      endpointGroupRegion: 'EndpointGroupRegion',
      totalCount: 'TotalCount',
      state: 'State',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckPort: 'HealthCheckPort',
      endpointConfigurations: 'EndpointConfigurations',
      portOverrides: 'PortOverrides',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      endpointGroupType: 'EndpointGroupType',
      forwardingRuleIds: 'ForwardingRuleIds',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      slsRegion: 'SlsRegion',
      slsProjectName: 'SlsProjectName',
      slsLogStoreName: 'SlsLogStoreName',
      accessLogSwitch: 'AccessLogSwitch',
      enableAccessLog: 'EnableAccessLog',
      healthCheckEnabled: 'HealthCheckEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckIntervalSeconds: 'number',
      trafficPercentage: 'number',
      endpointGroupId: 'string',
      description: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      healthCheckPath: 'string',
      thresholdCount: 'number',
      name: 'string',
      endpointGroupRegion: 'string',
      totalCount: 'number',
      state: 'string',
      healthCheckProtocol: 'string',
      healthCheckPort: 'number',
      endpointConfigurations: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyEndpointConfigurations },
      portOverrides: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyPortOverrides },
      endpointRequestProtocol: 'string',
      endpointGroupType: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      acceleratorId: 'string',
      listenerId: 'string',
      slsRegion: 'string',
      slsProjectName: 'string',
      slsLogStoreName: 'string',
      accessLogSwitch: 'string',
      enableAccessLog: 'boolean',
      healthCheckEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetRequest extends $tea.Model {
  regionId?: string;
  ipSetId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipSetId: 'IpSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetResponseBody extends $tea.Model {
  ipSetId?: string;
  requestId?: string;
  ipVersion?: string;
  state?: string;
  bandwidth?: number;
  ipAddressList?: string[];
  accelerateRegionId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSetId: 'IpSetId',
      requestId: 'RequestId',
      ipVersion: 'IpVersion',
      state: 'State',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSetId: 'string',
      requestId: 'string',
      ipVersion: 'string',
      state: 'string',
      bandwidth: 'number',
      ipAddressList: { 'type': 'array', 'itemType': 'string' },
      accelerateRegionId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerRequest extends $tea.Model {
  regionId?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBody extends $tea.Model {
  description?: string;
  requestId?: string;
  state?: string;
  createTime?: string;
  portRanges?: DescribeListenerResponseBodyPortRanges[];
  backendPorts?: DescribeListenerResponseBodyBackendPorts[];
  certificates?: DescribeListenerResponseBodyCertificates[];
  protocol?: string;
  listenerId?: string;
  clientAffinity?: string;
  name?: string;
  relatedAcls?: DescribeListenerResponseBodyRelatedAcls[];
  aclType?: string;
  acceleratorId?: string;
  proxyProtocol?: boolean;
  XForwardedForConfig?: DescribeListenerResponseBodyXForwardedForConfig;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      state: 'State',
      createTime: 'CreateTime',
      portRanges: 'PortRanges',
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      protocol: 'Protocol',
      listenerId: 'ListenerId',
      clientAffinity: 'ClientAffinity',
      name: 'Name',
      relatedAcls: 'RelatedAcls',
      aclType: 'AclType',
      acceleratorId: 'AcceleratorId',
      proxyProtocol: 'ProxyProtocol',
      XForwardedForConfig: 'XForwardedForConfig',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      state: 'string',
      createTime: 'string',
      portRanges: { 'type': 'array', 'itemType': DescribeListenerResponseBodyPortRanges },
      backendPorts: { 'type': 'array', 'itemType': DescribeListenerResponseBodyBackendPorts },
      certificates: { 'type': 'array', 'itemType': DescribeListenerResponseBodyCertificates },
      protocol: 'string',
      listenerId: 'string',
      clientAffinity: 'string',
      name: 'string',
      relatedAcls: { 'type': 'array', 'itemType': DescribeListenerResponseBodyRelatedAcls },
      aclType: 'string',
      acceleratorId: 'string',
      proxyProtocol: 'boolean',
      XForwardedForConfig: DescribeListenerResponseBodyXForwardedForConfig,
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
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

export class DetachDdosFromAcceleratorRequest extends $tea.Model {
  acceleratorId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDdosFromAcceleratorResponseBody extends $tea.Model {
  ddosId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDdosFromAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachDdosFromAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachDdosFromAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLogStoreFromEndpointGroupRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  listenerId?: string;
  endpointGroupIds?: string[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      endpointGroupIds: 'EndpointGroupIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLogStoreFromEndpointGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLogStoreFromEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachLogStoreFromEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachLogStoreFromEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerRequest extends $tea.Model {
  regionId?: string;
  aclIds?: string[];
  listenerId?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponseBody extends $tea.Model {
  requestId?: string;
  aclIds?: string[];
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateAclsFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateAclsFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  listenerId?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateAdditionalCertificatesFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateAdditionalCertificatesFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclRequest extends $tea.Model {
  regionId?: string;
  aclId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponseBody extends $tea.Model {
  requestId?: string;
  aclId?: string;
  addressIPVersion?: string;
  aclStatus?: string;
  aclEntries?: GetAclResponseBodyAclEntries[];
  relatedListeners?: GetAclResponseBodyRelatedListeners[];
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aclId: 'AclId',
      addressIPVersion: 'AddressIPVersion',
      aclStatus: 'AclStatus',
      aclEntries: 'AclEntries',
      relatedListeners: 'RelatedListeners',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aclId: 'string',
      addressIPVersion: 'string',
      aclStatus: 'string',
      aclEntries: { 'type': 'array', 'itemType': GetAclResponseBodyAclEntries },
      relatedListeners: { 'type': 'array', 'itemType': GetAclResponseBodyRelatedListeners },
      aclName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  acceleratorId?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      acceleratorId: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponseBody extends $tea.Model {
  requestId?: string;
  listenerId?: string;
  healthStatus?: string;
  endpointGroups?: GetHealthStatusResponseBodyEndpointGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      listenerId: 'ListenerId',
      healthStatus: 'HealthStatus',
      endpointGroups: 'EndpointGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      listenerId: 'string',
      healthStatus: 'string',
      endpointGroups: { 'type': 'array', 'itemType': GetHealthStatusResponseBodyEndpointGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpareIpRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  acceleratorId?: string;
  spareIp?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      acceleratorId: 'AcceleratorId',
      spareIp: 'SpareIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      acceleratorId: 'string',
      spareIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpareIpResponseBody extends $tea.Model {
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpareIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSpareIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSpareIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccelerateAreasRequest extends $tea.Model {
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

export class ListAccelerateAreasResponseBody extends $tea.Model {
  requestId?: string;
  areas?: ListAccelerateAreasResponseBodyAreas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      areas: 'Areas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      areas: { 'type': 'array', 'itemType': ListAccelerateAreasResponseBodyAreas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccelerateAreasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccelerateAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAccelerateAreasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  acceleratorId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      acceleratorId: 'AcceleratorId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      acceleratorId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  accelerators?: ListAcceleratorsResponseBodyAccelerators[];
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      accelerators: 'Accelerators',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      accelerators: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAccelerators },
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAcceleratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAcceleratorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  aclIds?: string[];
  aclName?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      aclIds: 'AclIds',
      aclName: 'AclName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclName: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  nextToken?: string;
  maxResults?: number;
  acls?: ListAclsResponseBodyAcls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      acls: 'Acls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      nextToken: 'string',
      maxResults: 'number',
      acls: { 'type': 'array', 'itemType': ListAclsResponseBodyAcls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponseBody extends $tea.Model {
  requestId?: string;
  areas?: ListAvailableAccelerateAreasResponseBodyAreas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      areas: 'Areas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      areas: { 'type': 'array', 'itemType': ListAvailableAccelerateAreasResponseBodyAreas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAvailableAccelerateAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAvailableAccelerateAreasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: ListAvailableBusiRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': ListAvailableBusiRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAvailableBusiRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAvailableBusiRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  bandwidthPackages?: ListBandwidthackagesResponseBodyBandwidthPackages[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      bandwidthPackages: 'BandwidthPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      bandwidthPackages: { 'type': 'array', 'itemType': ListBandwidthackagesResponseBodyBandwidthPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBandwidthackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBandwidthackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  state?: string;
  type?: string;
  bandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      state: 'State',
      type: 'Type',
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      state: 'string',
      type: 'string',
      bandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  bandwidthPackages?: ListBandwidthPackagesResponseBodyBandwidthPackages[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      bandwidthPackages: 'BandwidthPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      bandwidthPackages: { 'type': 'array', 'itemType': ListBandwidthPackagesResponseBodyBandwidthPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBandwidthPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBandwidthPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusiRegionsRequest extends $tea.Model {
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

export class ListBusiRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: ListBusiRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': ListBusiRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusiRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBusiRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBusiRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  acceleratorId?: string;
  listenerId?: string;
  endpointGroupType?: string;
  accessLogSwitch?: string;
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      endpointGroupType: 'EndpointGroupType',
      accessLogSwitch: 'AccessLogSwitch',
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      acceleratorId: 'string',
      listenerId: 'string',
      endpointGroupType: 'string',
      accessLogSwitch: 'string',
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  endpointGroups?: ListEndpointGroupsResponseBodyEndpointGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      endpointGroups: 'EndpointGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      endpointGroups: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  listenerId?: string;
  acceleratorId?: string;
  forwardingRuleId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      listenerId: 'ListenerId',
      acceleratorId: 'AcceleratorId',
      forwardingRuleId: 'ForwardingRuleId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      listenerId: 'string',
      acceleratorId: 'string',
      forwardingRuleId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  nextToken?: string;
  maxResults?: number;
  forwardingRules?: ListForwardingRulesResponseBodyForwardingRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      forwardingRules: 'ForwardingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      nextToken: 'string',
      maxResults: 'number',
      forwardingRules: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  ipSets?: ListIpSetsResponseBodyIpSets[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      ipSets: 'IpSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      ipSets: { 'type': 'array', 'itemType': ListIpSetsResponseBodyIpSets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  role?: string;
  listenerId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
      role: 'Role',
      listenerId: 'ListenerId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
      role: 'string',
      listenerId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  nextToken?: string;
  maxResults?: number;
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      certificates: 'Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      nextToken: 'string',
      maxResults: 'number',
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListListenerCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListListenerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBody extends $tea.Model {
  totalCount?: number;
  listeners?: ListListenersResponseBodyListeners[];
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      listeners: 'Listeners',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpareIpsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpareIpsResponseBody extends $tea.Model {
  requestId?: string;
  spareIps?: ListSpareIpsResponseBodySpareIps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spareIps: 'SpareIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spareIps: { 'type': 'array', 'itemType': ListSpareIpsResponseBodySpareIps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpareIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSpareIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  pageSize?: number;
  pageNumber?: number;
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSystemSecurityPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSystemSecurityPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclRequest extends $tea.Model {
  regionId?: string;
  aclId?: string;
  aclEntries?: RemoveEntriesFromAclRequestAclEntries[];
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclId: 'AclId',
      aclEntries: 'AclEntries',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclId: 'string',
      aclEntries: { 'type': 'array', 'itemType': RemoveEntriesFromAclRequestAclEntries },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclResponseBody extends $tea.Model {
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

export class RemoveEntriesFromAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveEntriesFromAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveEntriesFromAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBandwidthPackageRequest extends $tea.Model {
  regionId?: string;
  bandwidthPackageId?: string;
  targetBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      targetBandwidthPackageId: 'TargetBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      targetBandwidthPackageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBandwidthPackageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  name?: string;
  description?: string;
  acceleratorId?: string;
  spec?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
      acceleratorId: 'AcceleratorId',
      spec: 'Spec',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      name: 'string',
      description: 'string',
      acceleratorId: 'string',
      spec: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorConfirmRequest extends $tea.Model {
  regionId?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorConfirmResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorConfirmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAcceleratorConfirmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAcceleratorConfirmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeRequest extends $tea.Model {
  regionId?: string;
  aclId?: string;
  aclName?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aclId: 'AclId',
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aclId: 'string',
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeResponseBody extends $tea.Model {
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

export class UpdateAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAclAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackageRequest extends $tea.Model {
  regionId?: string;
  bandwidthPackageId?: string;
  name?: string;
  description?: string;
  bandwidth?: number;
  bandwidthType?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidthPackageId: 'BandwidthPackageId',
      name: 'Name',
      description: 'Description',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidthPackageId: 'string',
      name: 'string',
      description: 'string',
      bandwidth: 'number',
      bandwidthType: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackageResponseBody extends $tea.Model {
  bandwidthPackage?: string;
  description?: string;
  requestId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
      description: 'Description',
      requestId: 'RequestId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: 'string',
      description: 'string',
      requestId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  endpointGroupId?: string;
  name?: string;
  description?: string;
  endpointGroupRegion?: string;
  trafficPercentage?: number;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  thresholdCount?: number;
  endpointConfigurations?: UpdateEndpointGroupRequestEndpointConfigurations[];
  endpointRequestProtocol?: string;
  portOverrides?: UpdateEndpointGroupRequestPortOverrides[];
  healthCheckEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      name: 'Name',
      description: 'Description',
      endpointGroupRegion: 'EndpointGroupRegion',
      trafficPercentage: 'TrafficPercentage',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      thresholdCount: 'ThresholdCount',
      endpointConfigurations: 'EndpointConfigurations',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      portOverrides: 'PortOverrides',
      healthCheckEnabled: 'HealthCheckEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      endpointGroupId: 'string',
      name: 'string',
      description: 'string',
      endpointGroupRegion: 'string',
      trafficPercentage: 'number',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      thresholdCount: 'number',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupRequestEndpointConfigurations },
      endpointRequestProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': UpdateEndpointGroupRequestPortOverrides },
      healthCheckEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupAttributeRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  endpointGroupId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      endpointGroupId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEndpointGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEndpointGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurations[];
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurations },
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsResponseBody extends $tea.Model {
  requestId?: string;
  endpointGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endpointGroupIds: 'EndpointGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  acceleratorId?: string;
  listenerId?: string;
  forwardingRules?: UpdateForwardingRulesRequestForwardingRules[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      forwardingRules: 'ForwardingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      acceleratorId: 'string',
      listenerId: 'string',
      forwardingRules: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesResponseBody extends $tea.Model {
  forwardingRules?: UpdateForwardingRulesResponseBodyForwardingRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRules: 'ForwardingRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRules: { 'type': 'array', 'itemType': UpdateForwardingRulesResponseBodyForwardingRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  ipSetId?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      ipSetId: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetsRequest extends $tea.Model {
  regionId?: string;
  ipSets?: UpdateIpSetsRequestIpSets[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ipSets: 'IpSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ipSets: { 'type': 'array', 'itemType': UpdateIpSetsRequestIpSets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  name?: string;
  description?: string;
  clientAffinity?: string;
  protocol?: string;
  listenerId?: string;
  proxyProtocol?: string;
  portRanges?: UpdateListenerRequestPortRanges[];
  certificates?: UpdateListenerRequestCertificates[];
  backendPorts?: UpdateListenerRequestBackendPorts[];
  XForwardedForConfig?: UpdateListenerRequestXForwardedForConfig;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      name: 'Name',
      description: 'Description',
      clientAffinity: 'ClientAffinity',
      protocol: 'Protocol',
      listenerId: 'ListenerId',
      proxyProtocol: 'ProxyProtocol',
      portRanges: 'PortRanges',
      certificates: 'Certificates',
      backendPorts: 'BackendPorts',
      XForwardedForConfig: 'XForwardedForConfig',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
      name: 'string',
      description: 'string',
      clientAffinity: 'string',
      protocol: 'string',
      listenerId: 'string',
      proxyProtocol: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateListenerRequestPortRanges },
      certificates: { 'type': 'array', 'itemType': UpdateListenerRequestCertificates },
      backendPorts: { 'type': 'array', 'itemType': UpdateListenerRequestBackendPorts },
      XForwardedForConfig: UpdateListenerRequestXForwardedForConfig,
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclRequestAclEntries extends $tea.Model {
  entry?: string;
  entryDescription?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      entryDescription: 'EntryDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
      entryDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequestCertificates extends $tea.Model {
  id?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequestAclEntries extends $tea.Model {
  entry?: string;
  entryDescription?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      entryDescription: 'EntryDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
      entryDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupRequestEndpointConfigurations extends $tea.Model {
  type?: string;
  enableClientIPPreservation?: boolean;
  weight?: number;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      enableClientIPPreservation: 'EnableClientIPPreservation',
      weight: 'Weight',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      enableClientIPPreservation: 'boolean',
      weight: 'number',
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupRequestPortOverrides extends $tea.Model {
  listenerPort?: number;
  endpointPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      endpointPort: 'EndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      endpointPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  type?: string;
  weight?: number;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides extends $tea.Model {
  listenerPort?: number;
  endpointPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      endpointPort: 'EndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      endpointPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurations extends $tea.Model {
  endpointGroupName?: string;
  endpointGroupDescription?: string;
  endpointGroupRegion?: string;
  trafficPercentage?: number;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  thresholdCount?: number;
  endpointConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointRequestProtocol?: string;
  endpointGroupType?: string;
  portOverrides?: CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  enableClientIPPreservationToa?: boolean;
  enableClientIPPreservationProxyProtocol?: boolean;
  static names(): { [key: string]: string } {
    return {
      endpointGroupName: 'EndpointGroupName',
      endpointGroupDescription: 'EndpointGroupDescription',
      endpointGroupRegion: 'EndpointGroupRegion',
      trafficPercentage: 'TrafficPercentage',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      thresholdCount: 'ThresholdCount',
      endpointConfigurations: 'EndpointConfigurations',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      endpointGroupType: 'EndpointGroupType',
      portOverrides: 'PortOverrides',
      enableClientIPPreservationToa: 'EnableClientIPPreservationToa',
      enableClientIPPreservationProxyProtocol: 'EnableClientIPPreservationProxyProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupName: 'string',
      endpointGroupDescription: 'string',
      endpointGroupRegion: 'string',
      trafficPercentage: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      thresholdCount: 'number',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointRequestProtocol: 'string',
      endpointGroupType: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      enableClientIPPreservationToa: 'boolean',
      enableClientIPPreservationProxyProtocol: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRulesRuleConditions extends $tea.Model {
  ruleConditionType?: string;
  pathConfig?: CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  hostConfig?: CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  static names(): { [key: string]: string } {
    return {
      ruleConditionType: 'RuleConditionType',
      pathConfig: 'PathConfig',
      hostConfig: 'HostConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleConditionType: 'string',
      pathConfig: CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig,
      hostConfig: CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRulesRuleActions extends $tea.Model {
  order?: number;
  ruleActionType?: string;
  forwardGroupConfig?: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      ruleActionType: 'RuleActionType',
      forwardGroupConfig: 'ForwardGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      ruleActionType: 'string',
      forwardGroupConfig: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRules extends $tea.Model {
  priority?: number;
  ruleConditions?: CreateForwardingRulesRequestForwardingRulesRuleConditions[];
  ruleActions?: CreateForwardingRulesRequestForwardingRulesRuleActions[];
  forwardingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleConditions: 'RuleConditions',
      ruleActions: 'RuleActions',
      forwardingRuleName: 'ForwardingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleConditions: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleConditions },
      ruleActions: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleActions },
      forwardingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesResponseBodyForwardingRules extends $tea.Model {
  forwardingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleId: 'ForwardingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsRequestAccelerateRegion extends $tea.Model {
  accelerateRegionId?: string;
  ipVersion?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      ipVersion: 'IpVersion',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      ipVersion: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsResponseBodyIpSets extends $tea.Model {
  accelerateRegionId?: string;
  bandwidth?: number;
  ipSetId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipSetId: 'IpSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestPortRanges extends $tea.Model {
  fromPort?: number;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCertificates extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestXForwardedForConfig extends $tea.Model {
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForGaApEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardingRulesResponseBodyForwardingRules extends $tea.Model {
  forwardingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleId: 'ForwardingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage extends $tea.Model {
  bandwidth?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBodyBasicBandwidthPackage extends $tea.Model {
  bandwidth?: number;
  bandwidthType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bandwidthType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyEndpointConfigurations extends $tea.Model {
  type?: string;
  enableClientIPPreservation?: boolean;
  weight?: number;
  probeProtocol?: string;
  endpoint?: string;
  probePort?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      enableClientIPPreservation: 'EnableClientIPPreservation',
      weight: 'Weight',
      probeProtocol: 'ProbeProtocol',
      endpoint: 'Endpoint',
      probePort: 'ProbePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      enableClientIPPreservation: 'boolean',
      weight: 'number',
      probeProtocol: 'string',
      endpoint: 'string',
      probePort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyPortOverrides extends $tea.Model {
  listenerPort?: number;
  endpointPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      endpointPort: 'EndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      endpointPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBodyPortRanges extends $tea.Model {
  fromPort?: number;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBodyBackendPorts extends $tea.Model {
  fromPort?: string;
  toPort?: string;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'string',
      toPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBodyCertificates extends $tea.Model {
  type?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBodyRelatedAcls extends $tea.Model {
  aclId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBodyXForwardedForConfig extends $tea.Model {
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForGaApEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponseBodyAclEntries extends $tea.Model {
  entry?: string;
  entryDescription?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      entryDescription: 'EntryDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
      entryDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponseBodyRelatedListeners extends $tea.Model {
  listenerId?: string;
  aclType?: string;
  acceleratorId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      aclType: 'AclType',
      acceleratorId: 'AcceleratorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      aclType: 'string',
      acceleratorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponseBodyEndpointGroupsEndpoints extends $tea.Model {
  endpointId?: string;
  address?: string;
  healthStatus?: string;
  healthDetail?: string;
  port?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      address: 'Address',
      healthStatus: 'HealthStatus',
      healthDetail: 'HealthDetail',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      address: 'string',
      healthStatus: 'string',
      healthDetail: 'string',
      port: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponseBodyEndpointGroups extends $tea.Model {
  endpointGroupId?: string;
  endpointGroupType?: string;
  healthStatus?: string;
  forwardingRuleIds?: string[];
  endpoints?: GetHealthStatusResponseBodyEndpointGroupsEndpoints[];
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpointGroupType: 'EndpointGroupType',
      healthStatus: 'HealthStatus',
      forwardingRuleIds: 'ForwardingRuleIds',
      endpoints: 'Endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointGroupType: 'string',
      healthStatus: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      endpoints: { 'type': 'array', 'itemType': GetHealthStatusResponseBodyEndpointGroupsEndpoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccelerateAreasResponseBodyAreasRegionList extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccelerateAreasResponseBodyAreas extends $tea.Model {
  localName?: string;
  areaId?: string;
  regionList?: ListAccelerateAreasResponseBodyAreasRegionList[];
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      areaId: 'AreaId',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      areaId: 'string',
      regionList: { 'type': 'array', 'itemType': ListAccelerateAreasResponseBodyAreasRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage extends $tea.Model {
  bandwidth?: number;
  bandwidthType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bandwidthType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage extends $tea.Model {
  bandwidth?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBodyAccelerators extends $tea.Model {
  dnsName?: string;
  type?: string;
  secondDnsName?: string;
  spec?: string;
  state?: string;
  createTime?: number;
  cenId?: string;
  ddosId?: string;
  basicBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  regionId?: string;
  instanceChargeType?: string;
  acceleratorId?: string;
  description?: string;
  bandwidth?: number;
  expiredTime?: number;
  name?: string;
  crossDomainBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  static names(): { [key: string]: string } {
    return {
      dnsName: 'DnsName',
      type: 'Type',
      secondDnsName: 'SecondDnsName',
      spec: 'Spec',
      state: 'State',
      createTime: 'CreateTime',
      cenId: 'CenId',
      ddosId: 'DdosId',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      regionId: 'RegionId',
      instanceChargeType: 'InstanceChargeType',
      acceleratorId: 'AcceleratorId',
      description: 'Description',
      bandwidth: 'Bandwidth',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsName: 'string',
      type: 'string',
      secondDnsName: 'string',
      spec: 'string',
      state: 'string',
      createTime: 'number',
      cenId: 'string',
      ddosId: 'string',
      basicBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      regionId: 'string',
      instanceChargeType: 'string',
      acceleratorId: 'string',
      description: 'string',
      bandwidth: 'number',
      expiredTime: 'number',
      name: 'string',
      crossDomainBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBodyAcls extends $tea.Model {
  aclId?: string;
  aclName?: string;
  addressIPVersion?: string;
  aclStatus?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      aclStatus: 'AclStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
      aclStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponseBodyAreasRegionList extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponseBodyAreas extends $tea.Model {
  localName?: string;
  areaId?: string;
  regionList?: ListAvailableAccelerateAreasResponseBodyAreasRegionList[];
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      areaId: 'AreaId',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      areaId: 'string',
      regionList: { 'type': 'array', 'itemType': ListAvailableAccelerateAreasResponseBodyAreasRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesResponseBodyBandwidthPackages extends $tea.Model {
  bandwidthPackageId?: string;
  bandwidth?: number;
  description?: string;
  expiredTime?: string;
  state?: string;
  createTime?: string;
  chargeType?: string;
  accelerators?: string[];
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidth: 'Bandwidth',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      state: 'State',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      accelerators: 'Accelerators',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      bandwidth: 'number',
      description: 'string',
      expiredTime: 'string',
      state: 'string',
      createTime: 'string',
      chargeType: 'string',
      accelerators: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponseBodyBandwidthPackages extends $tea.Model {
  type?: string;
  bandwidthType?: string;
  state?: string;
  createTime?: string;
  chargeType?: string;
  regionId?: string;
  cbnGeographicRegionIdA?: string;
  bandwidthPackageId?: string;
  bandwidth?: number;
  description?: string;
  expiredTime?: string;
  accelerators?: string[];
  cbnGeographicRegionIdB?: string;
  name?: string;
  billingType?: string;
  ratio?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bandwidthType: 'BandwidthType',
      state: 'State',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      regionId: 'RegionId',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidth: 'Bandwidth',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      accelerators: 'Accelerators',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      name: 'Name',
      billingType: 'BillingType',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      bandwidthType: 'string',
      state: 'string',
      createTime: 'string',
      chargeType: 'string',
      regionId: 'string',
      cbnGeographicRegionIdA: 'string',
      bandwidthPackageId: 'string',
      bandwidth: 'number',
      description: 'string',
      expiredTime: 'string',
      accelerators: { 'type': 'array', 'itemType': 'string' },
      cbnGeographicRegionIdB: 'string',
      name: 'string',
      billingType: 'string',
      ratio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusiRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations extends $tea.Model {
  type?: string;
  enableClientIPPreservation?: boolean;
  weight?: number;
  probeProtocol?: string;
  endpoint?: string;
  probePort?: number;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      enableClientIPPreservation: 'EnableClientIPPreservation',
      weight: 'Weight',
      probeProtocol: 'ProbeProtocol',
      endpoint: 'Endpoint',
      probePort: 'ProbePort',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      enableClientIPPreservation: 'boolean',
      weight: 'number',
      probeProtocol: 'string',
      endpoint: 'string',
      probePort: 'number',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides extends $tea.Model {
  listenerPort?: number;
  endpointPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      endpointPort: 'EndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      endpointPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBodyEndpointGroups extends $tea.Model {
  endpointGroupId?: string;
  endpointGroupIpList?: string[];
  endpointGroupUnconfirmedIpList?: string[];
  state?: string;
  healthCheckPath?: string;
  endpointGroupRegion?: string;
  healthCheckIntervalSeconds?: number;
  trafficPercentage?: number;
  healthCheckProtocol?: string;
  thresholdCount?: number;
  listenerId?: string;
  acceleratorId?: string;
  endpointConfigurations?: ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations[];
  portOverrides?: ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides[];
  forwardingRuleIds?: string[];
  endpointGroupType?: string;
  endpointRequestProtocol?: string;
  description?: string;
  name?: string;
  healthCheckPort?: number;
  healthCheckEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      state: 'State',
      healthCheckPath: 'HealthCheckPath',
      endpointGroupRegion: 'EndpointGroupRegion',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      trafficPercentage: 'TrafficPercentage',
      healthCheckProtocol: 'HealthCheckProtocol',
      thresholdCount: 'ThresholdCount',
      listenerId: 'ListenerId',
      acceleratorId: 'AcceleratorId',
      endpointConfigurations: 'EndpointConfigurations',
      portOverrides: 'PortOverrides',
      forwardingRuleIds: 'ForwardingRuleIds',
      endpointGroupType: 'EndpointGroupType',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      description: 'Description',
      name: 'Name',
      healthCheckPort: 'HealthCheckPort',
      healthCheckEnabled: 'HealthCheckEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      healthCheckPath: 'string',
      endpointGroupRegion: 'string',
      healthCheckIntervalSeconds: 'number',
      trafficPercentage: 'number',
      healthCheckProtocol: 'string',
      thresholdCount: 'number',
      listenerId: 'string',
      acceleratorId: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations },
      portOverrides: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides },
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      endpointGroupType: 'string',
      endpointRequestProtocol: 'string',
      description: 'string',
      name: 'string',
      healthCheckPort: 'number',
      healthCheckEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditions extends $tea.Model {
  ruleConditionType?: string;
  pathConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig;
  hostConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig;
  static names(): { [key: string]: string } {
    return {
      ruleConditionType: 'RuleConditionType',
      pathConfig: 'PathConfig',
      hostConfig: 'HostConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleConditionType: 'string',
      pathConfig: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig,
      hostConfig: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleActions extends $tea.Model {
  order?: number;
  ruleActionType?: string;
  forwardGroupConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      ruleActionType: 'RuleActionType',
      forwardGroupConfig: 'ForwardGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      ruleActionType: 'string',
      forwardGroupConfig: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRules extends $tea.Model {
  priority?: number;
  forwardingRuleId?: string;
  forwardingRuleName?: string;
  forwardingRuleStatus?: string;
  ruleConditions?: ListForwardingRulesResponseBodyForwardingRulesRuleConditions[];
  ruleActions?: ListForwardingRulesResponseBodyForwardingRulesRuleActions[];
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      forwardingRuleId: 'ForwardingRuleId',
      forwardingRuleName: 'ForwardingRuleName',
      forwardingRuleStatus: 'ForwardingRuleStatus',
      ruleConditions: 'RuleConditions',
      ruleActions: 'RuleActions',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      forwardingRuleId: 'string',
      forwardingRuleName: 'string',
      forwardingRuleStatus: 'string',
      ruleConditions: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleConditions },
      ruleActions: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleActions },
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsResponseBodyIpSets extends $tea.Model {
  accelerateRegionId?: string;
  ipVersion?: string;
  bandwidth?: number;
  state?: string;
  ipSetId?: string;
  ipAddressList?: string[];
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      ipVersion: 'IpVersion',
      bandwidth: 'Bandwidth',
      state: 'State',
      ipSetId: 'IpSetId',
      ipAddressList: 'IpAddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      ipVersion: 'string',
      bandwidth: 'number',
      state: 'string',
      ipSetId: 'string',
      ipAddressList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBodyCertificates extends $tea.Model {
  certificateId?: string;
  isDefault?: boolean;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      isDefault: 'IsDefault',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      isDefault: 'boolean',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersCertificates extends $tea.Model {
  type?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersBackendPorts extends $tea.Model {
  fromPort?: string;
  toPort?: string;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'string',
      toPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersPortRanges extends $tea.Model {
  fromPort?: number;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersXForwardedForConfig extends $tea.Model {
  XForwardedForGaIdEnabled?: boolean;
  XRealIpEnabled?: boolean;
  XForwardedForGaApEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaIdEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListeners extends $tea.Model {
  certificates?: ListListenersResponseBodyListenersCertificates[];
  backendPorts?: ListListenersResponseBodyListenersBackendPorts[];
  listenerId?: string;
  description?: string;
  state?: string;
  clientAffinity?: string;
  protocol?: string;
  createTime?: number;
  portRanges?: ListListenersResponseBodyListenersPortRanges[];
  name?: string;
  proxyProtocol?: boolean;
  acceleratorId?: string;
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      backendPorts: 'BackendPorts',
      listenerId: 'ListenerId',
      description: 'Description',
      state: 'State',
      clientAffinity: 'ClientAffinity',
      protocol: 'Protocol',
      createTime: 'CreateTime',
      portRanges: 'PortRanges',
      name: 'Name',
      proxyProtocol: 'ProxyProtocol',
      acceleratorId: 'AcceleratorId',
      XForwardedForConfig: 'XForwardedForConfig',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersCertificates },
      backendPorts: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersBackendPorts },
      listenerId: 'string',
      description: 'string',
      state: 'string',
      clientAffinity: 'string',
      protocol: 'string',
      createTime: 'number',
      portRanges: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersPortRanges },
      name: 'string',
      proxyProtocol: 'boolean',
      acceleratorId: 'string',
      XForwardedForConfig: ListListenersResponseBodyListenersXForwardedForConfig,
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpareIpsResponseBodySpareIps extends $tea.Model {
  spareIp?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      spareIp: 'SpareIp',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spareIp: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBodySecurityPolicies extends $tea.Model {
  securityPolicyId?: string;
  tlsVersions?: string[];
  ciphers?: string[];
  static names(): { [key: string]: string } {
    return {
      securityPolicyId: 'SecurityPolicyId',
      tlsVersions: 'TlsVersions',
      ciphers: 'Ciphers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityPolicyId: 'string',
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
      ciphers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclRequestAclEntries extends $tea.Model {
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupRequestEndpointConfigurations extends $tea.Model {
  type?: string;
  enableClientIPPreservation?: boolean;
  weight?: number;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      enableClientIPPreservation: 'EnableClientIPPreservation',
      weight: 'Weight',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      enableClientIPPreservation: 'boolean',
      weight: 'number',
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupRequestPortOverrides extends $tea.Model {
  listenerPort?: number;
  endpointPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      endpointPort: 'EndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      endpointPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  type?: string;
  weight?: number;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'number',
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides extends $tea.Model {
  listenerPort?: number;
  endpointPort?: number;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      endpointPort: 'EndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      endpointPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurations extends $tea.Model {
  endpointGroupName?: string;
  endpointGroupDescription?: string;
  trafficPercentage?: number;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  thresholdCount?: number;
  endpointConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointRequestProtocol?: string;
  portOverrides?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  enableClientIPPreservationToa?: boolean;
  enableClientIPPreservationProxyProtocol?: boolean;
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupName: 'EndpointGroupName',
      endpointGroupDescription: 'EndpointGroupDescription',
      trafficPercentage: 'TrafficPercentage',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      thresholdCount: 'ThresholdCount',
      endpointConfigurations: 'EndpointConfigurations',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      portOverrides: 'PortOverrides',
      enableClientIPPreservationToa: 'EnableClientIPPreservationToa',
      enableClientIPPreservationProxyProtocol: 'EnableClientIPPreservationProxyProtocol',
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupName: 'string',
      endpointGroupDescription: 'string',
      trafficPercentage: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      thresholdCount: 'number',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointRequestProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      enableClientIPPreservationToa: 'boolean',
      enableClientIPPreservationProxyProtocol: 'boolean',
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRulesRuleConditions extends $tea.Model {
  ruleConditionType?: string;
  pathConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  hostConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  static names(): { [key: string]: string } {
    return {
      ruleConditionType: 'RuleConditionType',
      pathConfig: 'PathConfig',
      hostConfig: 'HostConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleConditionType: 'string',
      pathConfig: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig,
      hostConfig: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $tea.Model {
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig extends $tea.Model {
  serverGroupTuples?: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRulesRuleActions extends $tea.Model {
  order?: number;
  ruleActionType?: string;
  forwardGroupConfig?: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      ruleActionType: 'RuleActionType',
      forwardGroupConfig: 'ForwardGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      ruleActionType: 'string',
      forwardGroupConfig: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRules extends $tea.Model {
  priority?: number;
  ruleConditions?: UpdateForwardingRulesRequestForwardingRulesRuleConditions[];
  ruleActions?: UpdateForwardingRulesRequestForwardingRulesRuleActions[];
  forwardingRuleId?: string;
  forwardingRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleConditions: 'RuleConditions',
      ruleActions: 'RuleActions',
      forwardingRuleId: 'ForwardingRuleId',
      forwardingRuleName: 'ForwardingRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleConditions: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleConditions },
      ruleActions: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleActions },
      forwardingRuleId: 'string',
      forwardingRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesResponseBodyForwardingRules extends $tea.Model {
  forwardingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleId: 'ForwardingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetsRequestIpSets extends $tea.Model {
  bandwidth?: number;
  ipSetId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      ipSetId: 'IpSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ipSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequestPortRanges extends $tea.Model {
  fromPort?: number;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequestCertificates extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequestBackendPorts extends $tea.Model {
  fromPort?: number;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequestXForwardedForConfig extends $tea.Model {
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XRealIpEnabled?: boolean;
  XForwardedForGaApEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
      XForwardedForGaApEnabled: 'boolean',
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
    this._endpoint = this.getEndpoint("ga", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addEntriesToAclWithOptions(request: AddEntriesToAclRequest, runtime: $Util.RuntimeOptions): Promise<AddEntriesToAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEntriesToAclResponse>(await this.doRPCRequest("AddEntriesToAcl", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddEntriesToAclResponse({}));
  }

  async addEntriesToAcl(request: AddEntriesToAclRequest): Promise<AddEntriesToAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  async associateAclsWithListenerWithOptions(request: AssociateAclsWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAclsWithListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateAclsWithListenerResponse>(await this.doRPCRequest("AssociateAclsWithListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateAclsWithListenerResponse({}));
  }

  async associateAclsWithListener(request: AssociateAclsWithListenerRequest): Promise<AssociateAclsWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  async associateAdditionalCertificatesWithListenerWithOptions(request: AssociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateAdditionalCertificatesWithListenerResponse>(await this.doRPCRequest("AssociateAdditionalCertificatesWithListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  async attachDdosToAcceleratorWithOptions(request: AttachDdosToAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<AttachDdosToAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachDdosToAcceleratorResponse>(await this.doRPCRequest("AttachDdosToAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new AttachDdosToAcceleratorResponse({}));
  }

  async attachDdosToAccelerator(request: AttachDdosToAcceleratorRequest): Promise<AttachDdosToAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDdosToAcceleratorWithOptions(request, runtime);
  }

  async attachLogStoreToEndpointGroupWithOptions(request: AttachLogStoreToEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachLogStoreToEndpointGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachLogStoreToEndpointGroupResponse>(await this.doRPCRequest("AttachLogStoreToEndpointGroup", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new AttachLogStoreToEndpointGroupResponse({}));
  }

  async attachLogStoreToEndpointGroup(request: AttachLogStoreToEndpointGroupRequest): Promise<AttachLogStoreToEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLogStoreToEndpointGroupWithOptions(request, runtime);
  }

  async bandwidthPackageAddAcceleratorWithOptions(request: BandwidthPackageAddAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<BandwidthPackageAddAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandwidthPackageAddAcceleratorResponse>(await this.doRPCRequest("BandwidthPackageAddAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new BandwidthPackageAddAcceleratorResponse({}));
  }

  async bandwidthPackageAddAccelerator(request: BandwidthPackageAddAcceleratorRequest): Promise<BandwidthPackageAddAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandwidthPackageAddAcceleratorWithOptions(request, runtime);
  }

  async bandwidthPackageRemoveAcceleratorWithOptions(request: BandwidthPackageRemoveAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<BandwidthPackageRemoveAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BandwidthPackageRemoveAcceleratorResponse>(await this.doRPCRequest("BandwidthPackageRemoveAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new BandwidthPackageRemoveAcceleratorResponse({}));
  }

  async bandwidthPackageRemoveAccelerator(request: BandwidthPackageRemoveAcceleratorRequest): Promise<BandwidthPackageRemoveAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandwidthPackageRemoveAcceleratorWithOptions(request, runtime);
  }

  async configEndpointProbeWithOptions(request: ConfigEndpointProbeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigEndpointProbeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigEndpointProbeResponse>(await this.doRPCRequest("ConfigEndpointProbe", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigEndpointProbeResponse({}));
  }

  async configEndpointProbe(request: ConfigEndpointProbeRequest): Promise<ConfigEndpointProbeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configEndpointProbeWithOptions(request, runtime);
  }

  async createAcceleratorWithOptions(request: CreateAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<CreateAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAcceleratorResponse>(await this.doRPCRequest("CreateAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAcceleratorResponse({}));
  }

  async createAccelerator(request: CreateAcceleratorRequest): Promise<CreateAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAcceleratorWithOptions(request, runtime);
  }

  async createAclWithOptions(request: CreateAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAclResponse>(await this.doRPCRequest("CreateAcl", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAclResponse({}));
  }

  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  async createBandwidthPackageWithOptions(request: CreateBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBandwidthPackageResponse>(await this.doRPCRequest("CreateBandwidthPackage", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBandwidthPackageResponse({}));
  }

  async createBandwidthPackage(request: CreateBandwidthPackageRequest): Promise<CreateBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBandwidthPackageWithOptions(request, runtime);
  }

  async createEndpointGroupWithOptions(request: CreateEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateEndpointGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEndpointGroupResponse>(await this.doRPCRequest("CreateEndpointGroup", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEndpointGroupResponse({}));
  }

  async createEndpointGroup(request: CreateEndpointGroupRequest): Promise<CreateEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointGroupWithOptions(request, runtime);
  }

  async createEndpointGroupsWithOptions(request: CreateEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<CreateEndpointGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEndpointGroupsResponse>(await this.doRPCRequest("CreateEndpointGroups", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEndpointGroupsResponse({}));
  }

  async createEndpointGroups(request: CreateEndpointGroupsRequest): Promise<CreateEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointGroupsWithOptions(request, runtime);
  }

  async createForwardingRulesWithOptions(request: CreateForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateForwardingRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateForwardingRulesResponse>(await this.doRPCRequest("CreateForwardingRules", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateForwardingRulesResponse({}));
  }

  async createForwardingRules(request: CreateForwardingRulesRequest): Promise<CreateForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createForwardingRulesWithOptions(request, runtime);
  }

  async createIpSetsWithOptions(request: CreateIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIpSetsResponse>(await this.doRPCRequest("CreateIpSets", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIpSetsResponse({}));
  }

  async createIpSets(request: CreateIpSetsRequest): Promise<CreateIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpSetsWithOptions(request, runtime);
  }

  async createListenerWithOptions(request: CreateListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateListenerResponse>(await this.doRPCRequest("CreateListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateListenerResponse({}));
  }

  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  async createSpareIpsWithOptions(request: CreateSpareIpsRequest, runtime: $Util.RuntimeOptions): Promise<CreateSpareIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSpareIpsResponse>(await this.doRPCRequest("CreateSpareIps", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSpareIpsResponse({}));
  }

  async createSpareIps(request: CreateSpareIpsRequest): Promise<CreateSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpareIpsWithOptions(request, runtime);
  }

  async deleteAcceleratorWithOptions(request: DeleteAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAcceleratorResponse>(await this.doRPCRequest("DeleteAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAcceleratorResponse({}));
  }

  async deleteAccelerator(request: DeleteAcceleratorRequest): Promise<DeleteAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAcceleratorWithOptions(request, runtime);
  }

  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAclResponse>(await this.doRPCRequest("DeleteAcl", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAclResponse({}));
  }

  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  async deleteBandwidthPackageWithOptions(request: DeleteBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBandwidthPackageResponse>(await this.doRPCRequest("DeleteBandwidthPackage", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBandwidthPackageResponse({}));
  }

  async deleteBandwidthPackage(request: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBandwidthPackageWithOptions(request, runtime);
  }

  async deleteEndpointGroupWithOptions(request: DeleteEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEndpointGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEndpointGroupResponse>(await this.doRPCRequest("DeleteEndpointGroup", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEndpointGroupResponse({}));
  }

  async deleteEndpointGroup(request: DeleteEndpointGroupRequest): Promise<DeleteEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointGroupWithOptions(request, runtime);
  }

  async deleteEndpointGroupsWithOptions(request: DeleteEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEndpointGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEndpointGroupsResponse>(await this.doRPCRequest("DeleteEndpointGroups", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEndpointGroupsResponse({}));
  }

  async deleteEndpointGroups(request: DeleteEndpointGroupsRequest): Promise<DeleteEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointGroupsWithOptions(request, runtime);
  }

  async deleteForwardingRulesWithOptions(request: DeleteForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteForwardingRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteForwardingRulesResponse>(await this.doRPCRequest("DeleteForwardingRules", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteForwardingRulesResponse({}));
  }

  async deleteForwardingRules(request: DeleteForwardingRulesRequest): Promise<DeleteForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteForwardingRulesWithOptions(request, runtime);
  }

  async deleteIpSetWithOptions(request: DeleteIpSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpSetResponse>(await this.doRPCRequest("DeleteIpSet", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpSetResponse({}));
  }

  async deleteIpSet(request: DeleteIpSetRequest): Promise<DeleteIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpSetWithOptions(request, runtime);
  }

  async deleteIpSetsWithOptions(request: DeleteIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpSetsResponse>(await this.doRPCRequest("DeleteIpSets", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpSetsResponse({}));
  }

  async deleteIpSets(request: DeleteIpSetsRequest): Promise<DeleteIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpSetsWithOptions(request, runtime);
  }

  async deleteListenerWithOptions(request: DeleteListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteListenerResponse>(await this.doRPCRequest("DeleteListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteListenerResponse({}));
  }

  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  async deleteSpareIpsWithOptions(request: DeleteSpareIpsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpareIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSpareIpsResponse>(await this.doRPCRequest("DeleteSpareIps", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSpareIpsResponse({}));
  }

  async deleteSpareIps(request: DeleteSpareIpsRequest): Promise<DeleteSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpareIpsWithOptions(request, runtime);
  }

  async describeAcceleratorWithOptions(request: DescribeAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAcceleratorResponse>(await this.doRPCRequest("DescribeAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAcceleratorResponse({}));
  }

  async describeAccelerator(request: DescribeAcceleratorRequest): Promise<DescribeAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAcceleratorWithOptions(request, runtime);
  }

  async describeBandwidthPackageWithOptions(request: DescribeBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBandwidthPackageResponse>(await this.doRPCRequest("DescribeBandwidthPackage", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBandwidthPackageResponse({}));
  }

  async describeBandwidthPackage(request: DescribeBandwidthPackageRequest): Promise<DescribeBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthPackageWithOptions(request, runtime);
  }

  async describeEndpointGroupWithOptions(request: DescribeEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEndpointGroupResponse>(await this.doRPCRequest("DescribeEndpointGroup", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEndpointGroupResponse({}));
  }

  async describeEndpointGroup(request: DescribeEndpointGroupRequest): Promise<DescribeEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointGroupWithOptions(request, runtime);
  }

  async describeIpSetWithOptions(request: DescribeIpSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpSetResponse>(await this.doRPCRequest("DescribeIpSet", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpSetResponse({}));
  }

  async describeIpSet(request: DescribeIpSetRequest): Promise<DescribeIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpSetWithOptions(request, runtime);
  }

  async describeListenerWithOptions(request: DescribeListenerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeListenerResponse>(await this.doRPCRequest("DescribeListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeListenerResponse({}));
  }

  async describeListener(request: DescribeListenerRequest): Promise<DescribeListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListenerWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async detachDdosFromAcceleratorWithOptions(request: DetachDdosFromAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DetachDdosFromAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachDdosFromAcceleratorResponse>(await this.doRPCRequest("DetachDdosFromAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetachDdosFromAcceleratorResponse({}));
  }

  async detachDdosFromAccelerator(request: DetachDdosFromAcceleratorRequest): Promise<DetachDdosFromAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDdosFromAcceleratorWithOptions(request, runtime);
  }

  async detachLogStoreFromEndpointGroupWithOptions(request: DetachLogStoreFromEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachLogStoreFromEndpointGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachLogStoreFromEndpointGroupResponse>(await this.doRPCRequest("DetachLogStoreFromEndpointGroup", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetachLogStoreFromEndpointGroupResponse({}));
  }

  async detachLogStoreFromEndpointGroup(request: DetachLogStoreFromEndpointGroupRequest): Promise<DetachLogStoreFromEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLogStoreFromEndpointGroupWithOptions(request, runtime);
  }

  async dissociateAclsFromListenerWithOptions(request: DissociateAclsFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAclsFromListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateAclsFromListenerResponse>(await this.doRPCRequest("DissociateAclsFromListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateAclsFromListenerResponse({}));
  }

  async dissociateAclsFromListener(request: DissociateAclsFromListenerRequest): Promise<DissociateAclsFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  async dissociateAdditionalCertificatesFromListenerWithOptions(request: DissociateAdditionalCertificatesFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateAdditionalCertificatesFromListenerResponse>(await this.doRPCRequest("DissociateAdditionalCertificatesFromListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateAdditionalCertificatesFromListenerResponse({}));
  }

  async dissociateAdditionalCertificatesFromListener(request: DissociateAdditionalCertificatesFromListenerRequest): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  async getAclWithOptions(request: GetAclRequest, runtime: $Util.RuntimeOptions): Promise<GetAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAclResponse>(await this.doRPCRequest("GetAcl", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAclResponse({}));
  }

  async getAcl(request: GetAclRequest): Promise<GetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAclWithOptions(request, runtime);
  }

  async getHealthStatusWithOptions(request: GetHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetHealthStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHealthStatusResponse>(await this.doRPCRequest("GetHealthStatus", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetHealthStatusResponse({}));
  }

  async getHealthStatus(request: GetHealthStatusRequest): Promise<GetHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHealthStatusWithOptions(request, runtime);
  }

  async getSpareIpWithOptions(request: GetSpareIpRequest, runtime: $Util.RuntimeOptions): Promise<GetSpareIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSpareIpResponse>(await this.doRPCRequest("GetSpareIp", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSpareIpResponse({}));
  }

  async getSpareIp(request: GetSpareIpRequest): Promise<GetSpareIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpareIpWithOptions(request, runtime);
  }

  async listAccelerateAreasWithOptions(request: ListAccelerateAreasRequest, runtime: $Util.RuntimeOptions): Promise<ListAccelerateAreasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccelerateAreasResponse>(await this.doRPCRequest("ListAccelerateAreas", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccelerateAreasResponse({}));
  }

  async listAccelerateAreas(request: ListAccelerateAreasRequest): Promise<ListAccelerateAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccelerateAreasWithOptions(request, runtime);
  }

  async listAcceleratorsWithOptions(request: ListAcceleratorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAcceleratorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAcceleratorsResponse>(await this.doRPCRequest("ListAccelerators", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAcceleratorsResponse({}));
  }

  async listAccelerators(request: ListAcceleratorsRequest): Promise<ListAcceleratorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcceleratorsWithOptions(request, runtime);
  }

  async listAclsWithOptions(request: ListAclsRequest, runtime: $Util.RuntimeOptions): Promise<ListAclsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAclsResponse>(await this.doRPCRequest("ListAcls", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAclsResponse({}));
  }

  async listAcls(request: ListAclsRequest): Promise<ListAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  async listAvailableAccelerateAreasWithOptions(request: ListAvailableAccelerateAreasRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableAccelerateAreasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAvailableAccelerateAreasResponse>(await this.doRPCRequest("ListAvailableAccelerateAreas", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAvailableAccelerateAreasResponse({}));
  }

  async listAvailableAccelerateAreas(request: ListAvailableAccelerateAreasRequest): Promise<ListAvailableAccelerateAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableAccelerateAreasWithOptions(request, runtime);
  }

  async listAvailableBusiRegionsWithOptions(request: ListAvailableBusiRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableBusiRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAvailableBusiRegionsResponse>(await this.doRPCRequest("ListAvailableBusiRegions", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAvailableBusiRegionsResponse({}));
  }

  async listAvailableBusiRegions(request: ListAvailableBusiRegionsRequest): Promise<ListAvailableBusiRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableBusiRegionsWithOptions(request, runtime);
  }

  async listBandwidthackagesWithOptions(request: ListBandwidthackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListBandwidthackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBandwidthackagesResponse>(await this.doRPCRequest("ListBandwidthackages", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListBandwidthackagesResponse({}));
  }

  async listBandwidthackages(request: ListBandwidthackagesRequest): Promise<ListBandwidthackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBandwidthackagesWithOptions(request, runtime);
  }

  async listBandwidthPackagesWithOptions(request: ListBandwidthPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListBandwidthPackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBandwidthPackagesResponse>(await this.doRPCRequest("ListBandwidthPackages", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListBandwidthPackagesResponse({}));
  }

  async listBandwidthPackages(request: ListBandwidthPackagesRequest): Promise<ListBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBandwidthPackagesWithOptions(request, runtime);
  }

  async listBusiRegionsWithOptions(request: ListBusiRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListBusiRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBusiRegionsResponse>(await this.doRPCRequest("ListBusiRegions", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListBusiRegionsResponse({}));
  }

  async listBusiRegions(request: ListBusiRegionsRequest): Promise<ListBusiRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusiRegionsWithOptions(request, runtime);
  }

  async listEndpointGroupsWithOptions(request: ListEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListEndpointGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEndpointGroupsResponse>(await this.doRPCRequest("ListEndpointGroups", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListEndpointGroupsResponse({}));
  }

  async listEndpointGroups(request: ListEndpointGroupsRequest): Promise<ListEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEndpointGroupsWithOptions(request, runtime);
  }

  async listForwardingRulesWithOptions(request: ListForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListForwardingRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListForwardingRulesResponse>(await this.doRPCRequest("ListForwardingRules", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListForwardingRulesResponse({}));
  }

  async listForwardingRules(request: ListForwardingRulesRequest): Promise<ListForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listForwardingRulesWithOptions(request, runtime);
  }

  async listIpSetsWithOptions(request: ListIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListIpSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListIpSetsResponse>(await this.doRPCRequest("ListIpSets", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListIpSetsResponse({}));
  }

  async listIpSets(request: ListIpSetsRequest): Promise<ListIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpSetsWithOptions(request, runtime);
  }

  async listListenerCertificatesWithOptions(request: ListListenerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListListenerCertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListListenerCertificatesResponse>(await this.doRPCRequest("ListListenerCertificates", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListListenerCertificatesResponse({}));
  }

  async listListenerCertificates(request: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  async listListenersWithOptions(request: ListListenersRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListListenersResponse>(await this.doRPCRequest("ListListeners", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListListenersResponse({}));
  }

  async listListeners(request: ListListenersRequest): Promise<ListListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  async listSpareIpsWithOptions(request: ListSpareIpsRequest, runtime: $Util.RuntimeOptions): Promise<ListSpareIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSpareIpsResponse>(await this.doRPCRequest("ListSpareIps", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSpareIpsResponse({}));
  }

  async listSpareIps(request: ListSpareIpsRequest): Promise<ListSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpareIpsWithOptions(request, runtime);
  }

  async listSystemSecurityPoliciesWithOptions(request: ListSystemSecurityPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemSecurityPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSystemSecurityPoliciesResponse>(await this.doRPCRequest("ListSystemSecurityPolicies", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSystemSecurityPoliciesResponse({}));
  }

  async listSystemSecurityPolicies(request: ListSystemSecurityPoliciesRequest): Promise<ListSystemSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(request, runtime);
  }

  async removeEntriesFromAclWithOptions(request: RemoveEntriesFromAclRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEntriesFromAclResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveEntriesFromAclResponse>(await this.doRPCRequest("RemoveEntriesFromAcl", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveEntriesFromAclResponse({}));
  }

  async removeEntriesFromAcl(request: RemoveEntriesFromAclRequest): Promise<RemoveEntriesFromAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  async replaceBandwidthPackageWithOptions(request: ReplaceBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceBandwidthPackageResponse>(await this.doRPCRequest("ReplaceBandwidthPackage", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceBandwidthPackageResponse({}));
  }

  async replaceBandwidthPackage(request: ReplaceBandwidthPackageRequest): Promise<ReplaceBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceBandwidthPackageWithOptions(request, runtime);
  }

  async updateAcceleratorWithOptions(request: UpdateAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAcceleratorResponse>(await this.doRPCRequest("UpdateAccelerator", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAcceleratorResponse({}));
  }

  async updateAccelerator(request: UpdateAcceleratorRequest): Promise<UpdateAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorWithOptions(request, runtime);
  }

  async updateAcceleratorConfirmWithOptions(request: UpdateAcceleratorConfirmRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorConfirmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAcceleratorConfirmResponse>(await this.doRPCRequest("UpdateAcceleratorConfirm", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAcceleratorConfirmResponse({}));
  }

  async updateAcceleratorConfirm(request: UpdateAcceleratorConfirmRequest): Promise<UpdateAcceleratorConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorConfirmWithOptions(request, runtime);
  }

  async updateAclAttributeWithOptions(request: UpdateAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAclAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAclAttributeResponse>(await this.doRPCRequest("UpdateAclAttribute", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAclAttributeResponse({}));
  }

  async updateAclAttribute(request: UpdateAclAttributeRequest): Promise<UpdateAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  async updateBandwidthPackageWithOptions(request: UpdateBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBandwidthPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateBandwidthPackageResponse>(await this.doRPCRequest("UpdateBandwidthPackage", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateBandwidthPackageResponse({}));
  }

  async updateBandwidthPackage(request: UpdateBandwidthPackageRequest): Promise<UpdateBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBandwidthPackageWithOptions(request, runtime);
  }

  async updateEndpointGroupWithOptions(request: UpdateEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEndpointGroupResponse>(await this.doRPCRequest("UpdateEndpointGroup", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEndpointGroupResponse({}));
  }

  async updateEndpointGroup(request: UpdateEndpointGroupRequest): Promise<UpdateEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupWithOptions(request, runtime);
  }

  async updateEndpointGroupAttributeWithOptions(request: UpdateEndpointGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEndpointGroupAttributeResponse>(await this.doRPCRequest("UpdateEndpointGroupAttribute", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEndpointGroupAttributeResponse({}));
  }

  async updateEndpointGroupAttribute(request: UpdateEndpointGroupAttributeRequest): Promise<UpdateEndpointGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupAttributeWithOptions(request, runtime);
  }

  async updateEndpointGroupsWithOptions(request: UpdateEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEndpointGroupsResponse>(await this.doRPCRequest("UpdateEndpointGroups", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEndpointGroupsResponse({}));
  }

  async updateEndpointGroups(request: UpdateEndpointGroupsRequest): Promise<UpdateEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupsWithOptions(request, runtime);
  }

  async updateForwardingRulesWithOptions(request: UpdateForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateForwardingRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateForwardingRulesResponse>(await this.doRPCRequest("UpdateForwardingRules", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateForwardingRulesResponse({}));
  }

  async updateForwardingRules(request: UpdateForwardingRulesRequest): Promise<UpdateForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateForwardingRulesWithOptions(request, runtime);
  }

  async updateIpSetWithOptions(request: UpdateIpSetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpSetResponse>(await this.doRPCRequest("UpdateIpSet", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpSetResponse({}));
  }

  async updateIpSet(request: UpdateIpSetRequest): Promise<UpdateIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpSetWithOptions(request, runtime);
  }

  async updateIpSetsWithOptions(request: UpdateIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateIpSetsResponse>(await this.doRPCRequest("UpdateIpSets", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateIpSetsResponse({}));
  }

  async updateIpSets(request: UpdateIpSetsRequest): Promise<UpdateIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpSetsWithOptions(request, runtime);
  }

  async updateListenerWithOptions(request: UpdateListenerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateListenerResponse>(await this.doRPCRequest("UpdateListener", "2019-11-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateListenerResponse({}));
  }

  async updateListener(request: UpdateListenerRequest): Promise<UpdateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerWithOptions(request, runtime);
  }

}
