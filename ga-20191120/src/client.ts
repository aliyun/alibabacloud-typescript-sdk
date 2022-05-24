// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddEntriesToAclRequest extends $tea.Model {
  aclEntries?: AddEntriesToAclRequestAclEntries[];
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': AddEntriesToAclRequestAclEntries },
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEntriesToAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEntriesToAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddEntriesToAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerRequest extends $tea.Model {
  aclIds?: string[];
  aclType?: string;
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclType: 'AclType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponseBody extends $tea.Model {
  aclIds?: string[];
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAclsWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateAclsWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateAclsWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  acceleratorId?: string;
  certificates?: AssociateAdditionalCertificatesWithListenerRequestCertificates[];
  clientToken?: string;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      certificates: { 'type': 'array', 'itemType': AssociateAdditionalCertificatesWithListenerRequestCertificates },
      clientToken: 'string',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateAdditionalCertificatesWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  gaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosId: 'DdosId',
      gaId: 'GaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosId: 'string',
      gaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDdosToAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachDdosToAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachDdosToAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLogStoreToEndpointGroupRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  endpointGroupIds?: string[];
  listenerId?: string;
  regionId?: string;
  slsLogStoreName?: string;
  slsProjectName?: string;
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointGroupIds: 'EndpointGroupIds',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      regionId: 'string',
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegionId: 'string',
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
  statusCode: number;
  body: AttachLogStoreToEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachLogStoreToEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageAddAcceleratorRequest extends $tea.Model {
  acceleratorId?: string;
  bandwidthPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageAddAcceleratorResponseBody extends $tea.Model {
  accelerators?: string[];
  bandwidthPackageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidthPackageId: 'BandwidthPackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidthPackageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageAddAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BandwidthPackageAddAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BandwidthPackageAddAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageRemoveAcceleratorRequest extends $tea.Model {
  acceleratorId?: string;
  bandwidthPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageRemoveAcceleratorResponseBody extends $tea.Model {
  accelerators?: string[];
  bandwidthPackageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidthPackageId: 'BandwidthPackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidthPackageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BandwidthPackageRemoveAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BandwidthPackageRemoveAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BandwidthPackageRemoveAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigEndpointProbeRequest extends $tea.Model {
  clientToken?: string;
  enable?: string;
  endpoint?: string;
  endpointGroupId?: string;
  endpointType?: string;
  probePort?: string;
  probeProtocol?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enable: 'Enable',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointType: 'EndpointType',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enable: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointType: 'string',
      probePort: 'string',
      probeProtocol: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: ConfigEndpointProbeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigEndpointProbeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoUseCoupon?: string;
  clientToken?: string;
  duration?: number;
  ipSetConfig?: CreateAcceleratorRequestIpSetConfig;
  name?: string;
  pricingCycle?: string;
  regionId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      duration: 'Duration',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      clientToken: 'string',
      duration: 'number',
      ipSetConfig: CreateAcceleratorRequestIpSetConfig,
      name: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorResponseBody extends $tea.Model {
  acceleratorId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclRequest extends $tea.Model {
  aclEntries?: CreateAclRequestAclEntries[];
  aclName?: string;
  addressIPVersion?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': CreateAclRequestAclEntries },
      aclName: 'string',
      addressIPVersion: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationMonitorRequest extends $tea.Model {
  acceleratorId?: string;
  address?: string;
  clientToken?: string;
  detectEnable?: boolean;
  detectThreshold?: number;
  detectTimes?: number;
  listenerId?: string;
  optionsJson?: string;
  regionId?: string;
  silenceTime?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      clientToken: 'ClientToken',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      silenceTime: 'SilenceTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      clientToken: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      silenceTime: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationMonitorResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoUseCoupon?: string;
  bandwidth?: number;
  bandwidthType?: string;
  billingType?: string;
  cbnGeographicRegionIdA?: string;
  cbnGeographicRegionIdB?: string;
  chargeType?: string;
  clientToken?: string;
  duration?: string;
  pricingCycle?: string;
  ratio?: number;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      billingType: 'BillingType',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      ratio: 'Ratio',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidth: 'number',
      bandwidthType: 'string',
      billingType: 'string',
      cbnGeographicRegionIdA: 'string',
      cbnGeographicRegionIdB: 'string',
      chargeType: 'string',
      clientToken: 'string',
      duration: 'string',
      pricingCycle: 'string',
      ratio: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageResponseBody extends $tea.Model {
  bandwidthPackageId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAcceleratorRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  autoUseCoupon?: string;
  clientToken?: string;
  duration?: number;
  pricingCycle?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      clientToken: 'string',
      duration: 'number',
      pricingCycle: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAcceleratorResponseBody extends $tea.Model {
  acceleratorId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointGroupRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  description?: string;
  endpointAddress?: string;
  endpointGroupRegion?: string;
  endpointType?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      description: 'Description',
      endpointAddress: 'EndpointAddress',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointType: 'EndpointType',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      description: 'string',
      endpointAddress: 'string',
      endpointGroupRegion: 'string',
      endpointType: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointGroupResponseBody extends $tea.Model {
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

export class CreateBasicEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicIpSetRequest extends $tea.Model {
  accelerateRegionId?: string;
  acceleratorId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicIpSetResponseBody extends $tea.Model {
  ipSetId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSetId: 'IpSetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSetId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  description?: string;
  endpointConfigurations?: CreateEndpointGroupRequestEndpointConfigurations[];
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointRequestProtocol?: string;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  listenerId?: string;
  name?: string;
  portOverrides?: CreateEndpointGroupRequestPortOverrides[];
  regionId?: string;
  thresholdCount?: number;
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      description: 'Description',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupType: 'EndpointGroupType',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      listenerId: 'ListenerId',
      name: 'Name',
      portOverrides: 'PortOverrides',
      regionId: 'RegionId',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      description: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupRequestEndpointConfigurations },
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      listenerId: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupRequestPortOverrides },
      regionId: 'string',
      thresholdCount: 'number',
      trafficPercentage: 'number',
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
  statusCode: number;
  body: CreateEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurations[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurations },
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsResponseBody extends $tea.Model {
  endpointGroupIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupIds: 'EndpointGroupIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  forwardingRules?: CreateForwardingRulesRequestForwardingRules[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      forwardingRules: 'ForwardingRules',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      forwardingRules: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRules },
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesResponseBody extends $tea.Model {
  forwardingRules?: CreateForwardingRulesResponseBodyForwardingRules[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRules: 'ForwardingRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRules: { 'type': 'array', 'itemType': CreateForwardingRulesResponseBodyForwardingRules },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsRequest extends $tea.Model {
  accelerateRegion?: CreateIpSetsRequestAccelerateRegion[];
  acceleratorId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegion: 'AccelerateRegion',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegion: { 'type': 'array', 'itemType': CreateIpSetsRequestAccelerateRegion },
      acceleratorId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsResponseBody extends $tea.Model {
  acceleratorId?: string;
  ipSets?: CreateIpSetsResponseBodyIpSets[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      ipSets: 'IpSets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      ipSets: { 'type': 'array', 'itemType': CreateIpSetsResponseBodyIpSets },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $tea.Model {
  acceleratorId?: string;
  certificates?: CreateListenerRequestCertificates[];
  clientAffinity?: string;
  clientToken?: string;
  description?: string;
  name?: string;
  portRanges?: CreateListenerRequestPortRanges[];
  protocol?: string;
  proxyProtocol?: boolean;
  regionId?: string;
  securityPolicyId?: string;
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      regionId: 'RegionId',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      clientAffinity: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateListenerRequestPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      regionId: 'string',
      securityPolicyId: 'string',
      XForwardedForConfig: CreateListenerRequestXForwardedForConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponseBody extends $tea.Model {
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSpareIpsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  spareIps?: string[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      spareIps: 'SpareIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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
  statusCode: number;
  body: CreateSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSpareIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAcceleratorRequest extends $tea.Model {
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

export class DeleteAcceleratorResponseBody extends $tea.Model {
  acceleratorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclRequest extends $tea.Model {
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationMonitorRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationMonitorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageRequest extends $tea.Model {
  bandwidthPackageId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageResponseBody extends $tea.Model {
  bandwidthPackageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAcceleratorRequest extends $tea.Model {
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

export class DeleteBasicAcceleratorResponseBody extends $tea.Model {
  acceleratorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBasicAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicEndpointGroupRequest extends $tea.Model {
  clientToken?: string;
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicEndpointGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBasicEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicIpSetRequest extends $tea.Model {
  clientToken?: string;
  ipSetId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipSetId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicIpSetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBasicIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
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
  statusCode: number;
  body: DeleteEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointGroupsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupIds: 'EndpointGroupIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
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
  statusCode: number;
  body: DeleteEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteForwardingRulesRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  forwardingRuleIds?: string[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      forwardingRuleIds: 'ForwardingRuleIds',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  ipSetId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      ipSetId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpSetsRequest extends $tea.Model {
  ipSetIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSetIds: 'IpSetIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSetIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
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
  statusCode: number;
  body: DeleteIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
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
  statusCode: number;
  body: DeleteListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSpareIpsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  spareIps?: string[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      spareIps: 'SpareIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSpareIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorRequest extends $tea.Model {
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

export class DescribeAcceleratorResponseBody extends $tea.Model {
  acceleratorId?: string;
  basicBandwidthPackage?: DescribeAcceleratorResponseBodyBasicBandwidthPackage;
  cenId?: string;
  createTime?: number;
  crossDomainBandwidthPackage?: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage;
  ddosId?: string;
  description?: string;
  dnsName?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  ipSetConfig?: DescribeAcceleratorResponseBodyIpSetConfig;
  name?: string;
  regionId?: string;
  requestId?: string;
  secondDnsName?: string;
  spec?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      ddosId: 'DdosId',
      description: 'Description',
      dnsName: 'DnsName',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      secondDnsName: 'SecondDnsName',
      spec: 'Spec',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      basicBandwidthPackage: DescribeAcceleratorResponseBodyBasicBandwidthPackage,
      cenId: 'string',
      createTime: 'number',
      crossDomainBandwidthPackage: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage,
      ddosId: 'string',
      description: 'string',
      dnsName: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      ipSetConfig: DescribeAcceleratorResponseBodyIpSetConfig,
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      secondDnsName: 'string',
      spec: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorAutoRenewAttributeRequest extends $tea.Model {
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

export class DescribeAcceleratorAutoRenewAttributeResponseBody extends $tea.Model {
  acceleratorId?: string;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  renewalStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      renewalStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAcceleratorAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAcceleratorAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationMonitorRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationMonitorResponseBody extends $tea.Model {
  acceleratorId?: string;
  address?: string;
  detectEnable?: boolean;
  detectThreshold?: number;
  detectTimes?: number;
  ispCityList?: DescribeApplicationMonitorResponseBodyIspCityList[];
  listenerId?: string;
  optionsJson?: string;
  regionId?: string;
  requestId?: string;
  silenceTime?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      ispCityList: 'IspCityList',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      requestId: 'RequestId',
      silenceTime: 'SilenceTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      ispCityList: { 'type': 'array', 'itemType': DescribeApplicationMonitorResponseBodyIspCityList },
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      requestId: 'string',
      silenceTime: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageRequest extends $tea.Model {
  bandwidthPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageResponseBody extends $tea.Model {
  accelerators?: string[];
  bandwidth?: number;
  bandwidthPackageId?: string;
  bandwidthType?: string;
  billingType?: string;
  cbnGeographicRegionIdA?: string;
  cbnGeographicRegionIdB?: string;
  chargeType?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  name?: string;
  ratio?: number;
  regionId?: string;
  requestId?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthType: 'BandwidthType',
      billingType: 'BillingType',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      ratio: 'Ratio',
      regionId: 'RegionId',
      requestId: 'RequestId',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidth: 'number',
      bandwidthPackageId: 'string',
      bandwidthType: 'string',
      billingType: 'string',
      cbnGeographicRegionIdA: 'string',
      cbnGeographicRegionIdB: 'string',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      name: 'string',
      ratio: 'number',
      regionId: 'string',
      requestId: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageAutoRenewAttributeRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageAutoRenewAttributeResponseBody extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  instanceId?: string;
  renewalStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      instanceId: 'InstanceId',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      instanceId: 'string',
      renewalStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBandwidthPackageAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBandwidthPackageAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupRequest extends $tea.Model {
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBody extends $tea.Model {
  acceleratorId?: string;
  accessLogSwitch?: string;
  description?: string;
  enableAccessLog?: boolean;
  endpointConfigurations?: DescribeEndpointGroupResponseBodyEndpointConfigurations[];
  endpointGroupId?: string;
  endpointGroupIpList?: string[];
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointGroupUnconfirmedIpList?: string[];
  endpointRequestProtocol?: string;
  forwardingRuleIds?: string[];
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  listenerId?: string;
  name?: string;
  portOverrides?: DescribeEndpointGroupResponseBodyPortOverrides[];
  requestId?: string;
  slsLogStoreName?: string;
  slsProjectName?: string;
  slsRegion?: string;
  state?: string;
  thresholdCount?: number;
  totalCount?: number;
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogSwitch: 'AccessLogSwitch',
      description: 'Description',
      enableAccessLog: 'EnableAccessLog',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupType: 'EndpointGroupType',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      forwardingRuleIds: 'ForwardingRuleIds',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      listenerId: 'ListenerId',
      name: 'Name',
      portOverrides: 'PortOverrides',
      requestId: 'RequestId',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegion: 'SlsRegion',
      state: 'State',
      thresholdCount: 'ThresholdCount',
      totalCount: 'TotalCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogSwitch: 'string',
      description: 'string',
      enableAccessLog: 'boolean',
      endpointConfigurations: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyEndpointConfigurations },
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      endpointRequestProtocol: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      listenerId: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyPortOverrides },
      requestId: 'string',
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegion: 'string',
      state: 'string',
      thresholdCount: 'number',
      totalCount: 'number',
      trafficPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetRequest extends $tea.Model {
  ipSetId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSetId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetResponseBody extends $tea.Model {
  accelerateRegionId?: string;
  acceleratorId?: string;
  bandwidth?: number;
  ipAddressList?: string[];
  ipSetId?: string;
  ipVersion?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      bandwidth: 'number',
      ipAddressList: { 'type': 'array', 'itemType': 'string' },
      ipSetId: 'string',
      ipVersion: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerRequest extends $tea.Model {
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponseBody extends $tea.Model {
  acceleratorId?: string;
  aclType?: string;
  backendPorts?: DescribeListenerResponseBodyBackendPorts[];
  certificates?: DescribeListenerResponseBodyCertificates[];
  clientAffinity?: string;
  createTime?: string;
  description?: string;
  listenerId?: string;
  name?: string;
  portRanges?: DescribeListenerResponseBodyPortRanges[];
  protocol?: string;
  proxyProtocol?: boolean;
  relatedAcls?: DescribeListenerResponseBodyRelatedAcls[];
  requestId?: string;
  securityPolicyId?: string;
  state?: string;
  XForwardedForConfig?: DescribeListenerResponseBodyXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      aclType: 'AclType',
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      createTime: 'CreateTime',
      description: 'Description',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      relatedAcls: 'RelatedAcls',
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
      state: 'State',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      aclType: 'string',
      backendPorts: { 'type': 'array', 'itemType': DescribeListenerResponseBodyBackendPorts },
      certificates: { 'type': 'array', 'itemType': DescribeListenerResponseBodyCertificates },
      clientAffinity: 'string',
      createTime: 'string',
      description: 'string',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': DescribeListenerResponseBodyPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      relatedAcls: { 'type': 'array', 'itemType': DescribeListenerResponseBodyRelatedAcls },
      requestId: 'string',
      securityPolicyId: 'string',
      state: 'string',
      XForwardedForConfig: DescribeListenerResponseBodyXForwardedForConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DetachDdosFromAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachDdosFromAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachLogStoreFromEndpointGroupRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  endpointGroupIds?: string[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointGroupIds: 'EndpointGroupIds',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DetachLogStoreFromEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachLogStoreFromEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectApplicationMonitorRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectApplicationMonitorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationMonitorRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationMonitorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerRequest extends $tea.Model {
  aclIds?: string[];
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponseBody extends $tea.Model {
  aclIds?: string[];
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAclsFromListenerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateAclsFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DissociateAclsFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  domains?: string[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      domains: 'Domains',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DissociateAdditionalCertificatesFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DissociateAdditionalCertificatesFromListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationMonitorRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationMonitorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclRequest extends $tea.Model {
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

export class GetAclResponseBody extends $tea.Model {
  aclEntries?: GetAclResponseBodyAclEntries[];
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  addressIPVersion?: string;
  relatedListeners?: GetAclResponseBodyRelatedListeners[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      relatedListeners: 'RelatedListeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': GetAclResponseBodyAclEntries },
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
      relatedListeners: { 'type': 'array', 'itemType': GetAclResponseBodyRelatedListeners },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAcceleratorRequest extends $tea.Model {
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

export class GetBasicAcceleratorResponseBody extends $tea.Model {
  acceleratorId?: string;
  basicBandwidthPackage?: GetBasicAcceleratorResponseBodyBasicBandwidthPackage;
  basicEndpointGroupId?: string;
  basicIpSetId?: string;
  cenId?: string;
  createTime?: number;
  crossDomainBandwidthPackage?: GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage;
  description?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  name?: string;
  regionId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      basicEndpointGroupId: 'BasicEndpointGroupId',
      basicIpSetId: 'BasicIpSetId',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      basicBandwidthPackage: GetBasicAcceleratorResponseBodyBasicBandwidthPackage,
      basicEndpointGroupId: 'string',
      basicIpSetId: 'string',
      cenId: 'string',
      createTime: 'number',
      crossDomainBandwidthPackage: GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage,
      description: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicEndpointGroupRequest extends $tea.Model {
  clientToken?: string;
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicEndpointGroupResponseBody extends $tea.Model {
  acceleratorId?: string;
  description?: string;
  endpointAddress?: string;
  endpointGroupId?: string;
  endpointGroupRegion?: string;
  endpointType?: string;
  name?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      description: 'Description',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointType: 'EndpointType',
      name: 'Name',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      description: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointType: 'string',
      name: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicIpSetRequest extends $tea.Model {
  clientToken?: string;
  ipSetId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipSetId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicIpSetResponseBody extends $tea.Model {
  accelerateRegionId?: string;
  acceleratorId?: string;
  bandwidth?: number;
  ipAddress?: string;
  ipSetId?: string;
  ipVersion?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      ipAddress: 'IpAddress',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      bandwidth: 'number',
      ipAddress: 'string',
      ipSetId: 'string',
      ipVersion: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicIpSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponseBody extends $tea.Model {
  endpointGroups?: GetHealthStatusResponseBodyEndpointGroups[];
  healthStatus?: string;
  listenerId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroups: 'EndpointGroups',
      healthStatus: 'HealthStatus',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroups: { 'type': 'array', 'itemType': GetHealthStatusResponseBodyEndpointGroups },
      healthStatus: 'string',
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpareIpRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  spareIp?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      spareIp: 'SpareIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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
  statusCode: number;
  body: GetSpareIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  areas?: ListAccelerateAreasResponseBodyAreas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': ListAccelerateAreasResponseBodyAreas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccelerateAreasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccelerateAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccelerateAreasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsRequest extends $tea.Model {
  acceleratorId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBody extends $tea.Model {
  accelerators?: ListAcceleratorsResponseBodyAccelerators[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAccelerators },
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

export class ListAcceleratorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAcceleratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAcceleratorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsRequest extends $tea.Model {
  aclIds?: string[];
  aclName?: string;
  clientToken?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclName: 'AclName',
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      aclName: 'string',
      clientToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBody extends $tea.Model {
  acls?: ListAclsResponseBodyAcls[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': ListAclsResponseBodyAcls },
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

export class ListAclsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAclsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorResponseBody extends $tea.Model {
  applicationMonitors?: ListApplicationMonitorResponseBodyApplicationMonitors[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationMonitors: 'ApplicationMonitors',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationMonitors: { 'type': 'array', 'itemType': ListApplicationMonitorResponseBodyApplicationMonitors },
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

export class ListApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorDetectResultRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorDetectResultResponseBody extends $tea.Model {
  applicationMonitorDetectResultList?: ListApplicationMonitorDetectResultResponseBodyApplicationMonitorDetectResultList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationMonitorDetectResultList: 'ApplicationMonitorDetectResultList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationMonitorDetectResultList: { 'type': 'array', 'itemType': ListApplicationMonitorDetectResultResponseBodyApplicationMonitorDetectResultList },
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

export class ListApplicationMonitorDetectResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationMonitorDetectResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationMonitorDetectResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasRequest extends $tea.Model {
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

export class ListAvailableAccelerateAreasResponseBody extends $tea.Model {
  areas?: ListAvailableAccelerateAreasResponseBodyAreas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': ListAvailableAccelerateAreasResponseBodyAreas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableAccelerateAreasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAvailableAccelerateAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableAccelerateAreasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsRequest extends $tea.Model {
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

export class ListAvailableBusiRegionsResponseBody extends $tea.Model {
  regions?: ListAvailableBusiRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListAvailableBusiRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAvailableBusiRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableBusiRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesRequest extends $tea.Model {
  bandwidthPackageId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponseBody extends $tea.Model {
  bandwidthPackages?: ListBandwidthPackagesResponseBodyBandwidthPackages[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackages: 'BandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackages: { 'type': 'array', 'itemType': ListBandwidthPackagesResponseBodyBandwidthPackages },
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

export class ListBandwidthPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBandwidthPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBandwidthPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesResponseBody extends $tea.Model {
  bandwidthPackages?: ListBandwidthackagesResponseBodyBandwidthPackages[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackages: 'BandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackages: { 'type': 'array', 'itemType': ListBandwidthackagesResponseBodyBandwidthPackages },
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

export class ListBandwidthackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBandwidthackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBandwidthackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsRequest extends $tea.Model {
  acceleratorId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsResponseBody extends $tea.Model {
  accelerators?: ListBasicAcceleratorsResponseBodyAccelerators[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': ListBasicAcceleratorsResponseBodyAccelerators },
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

export class ListBasicAcceleratorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBasicAcceleratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBasicAcceleratorsResponseBody,
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
  regions?: ListBusiRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListBusiRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusiRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBusiRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBusiRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsRequest extends $tea.Model {
  acceleratorId?: string;
  accessLogSwitch?: string;
  endpointGroupId?: string;
  endpointGroupType?: string;
  listenerId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogSwitch: 'AccessLogSwitch',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupType: 'EndpointGroupType',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogSwitch: 'string',
      endpointGroupId: 'string',
      endpointGroupType: 'string',
      listenerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBody extends $tea.Model {
  endpointGroups?: ListEndpointGroupsResponseBodyEndpointGroups[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endpointGroups: 'EndpointGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroups: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroups },
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

export class ListEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  forwardingRuleId?: string;
  listenerId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      forwardingRuleId: 'ForwardingRuleId',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      forwardingRuleId: 'string',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBody extends $tea.Model {
  forwardingRules?: ListForwardingRulesResponseBodyForwardingRules[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      forwardingRules: 'ForwardingRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRules: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRules },
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

export class ListForwardingRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsRequest extends $tea.Model {
  acceleratorId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsResponseBody extends $tea.Model {
  ipSets?: ListIpSetsResponseBodyIpSets[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipSets: 'IpSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSets: { 'type': 'array', 'itemType': ListIpSetsResponseBodyIpSets },
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

export class ListIpSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesRequest extends $tea.Model {
  acceleratorId?: string;
  listenerId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $tea.Model {
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
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

export class ListListenerCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListListenerCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListListenerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequest extends $tea.Model {
  acceleratorId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBody extends $tea.Model {
  listeners?: ListListenersResponseBodyListeners[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
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

export class ListListenersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpareIpsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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
  statusCode: number;
  body: ListSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSpareIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  securityPolicies?: ListSystemSecurityPoliciesResponseBodySecurityPolicies[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPoliciesResponseBodySecurityPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSystemSecurityPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSystemSecurityPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclRequest extends $tea.Model {
  aclEntries?: RemoveEntriesFromAclRequestAclEntries[];
  aclId?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntries: { 'type': 'array', 'itemType': RemoveEntriesFromAclRequestAclEntries },
      aclId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEntriesFromAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveEntriesFromAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveEntriesFromAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceBandwidthPackageRequest extends $tea.Model {
  bandwidthPackageId?: string;
  regionId?: string;
  targetBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
      targetBandwidthPackageId: 'TargetBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: ReplaceBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReplaceBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorRequest extends $tea.Model {
  acceleratorId?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      spec: 'string',
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
  statusCode: number;
  body: UpdateAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorAutoRenewAttributeRequest extends $tea.Model {
  acceleratorId?: string;
  autoRenew?: boolean;
  autoRenewDuration?: number;
  clientToken?: string;
  name?: string;
  regionId?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      clientToken: 'ClientToken',
      name: 'Name',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      clientToken: 'string',
      name: 'string',
      regionId: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorAutoRenewAttributeResponseBody extends $tea.Model {
  acceleratorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAcceleratorAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAcceleratorAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorConfirmRequest extends $tea.Model {
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
  statusCode: number;
  body: UpdateAcceleratorConfirmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAcceleratorConfirmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeRequest extends $tea.Model {
  aclId?: string;
  aclName?: string;
  clientToken?: string;
  dryRun?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeResponseBody extends $tea.Model {
  aclId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAclAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAclAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationMonitorRequest extends $tea.Model {
  address?: string;
  clientToken?: string;
  detectEnable?: boolean;
  detectThreshold?: number;
  detectTimes?: number;
  listenerId?: string;
  optionsJson?: string;
  regionId?: string;
  silenceTime?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clientToken: 'ClientToken',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      silenceTime: 'SilenceTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clientToken: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      silenceTime: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationMonitorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackagaAutoRenewAttributeRequest extends $tea.Model {
  autoRenew?: boolean;
  autoRenewDuration?: number;
  clientToken?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      clientToken: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackagaAutoRenewAttributeResponseBody extends $tea.Model {
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

export class UpdateBandwidthPackagaAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBandwidthPackagaAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBandwidthPackagaAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackageRequest extends $tea.Model {
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  bandwidth?: number;
  bandwidthPackageId?: string;
  bandwidthType?: string;
  description?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthType: 'BandwidthType',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      bandwidth: 'number',
      bandwidthPackageId: 'string',
      bandwidthType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackageResponseBody extends $tea.Model {
  bandwidthPackage?: string;
  description?: string;
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackage: 'BandwidthPackage',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackage: 'string',
      description: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBandwidthPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBandwidthPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicAcceleratorRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicAcceleratorResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicAcceleratorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBasicAcceleratorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicEndpointGroupRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  endpointAddress?: string;
  endpointGroupId?: string;
  endpointType?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointType: 'EndpointType',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointType: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicEndpointGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicEndpointGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBasicEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  endpointConfigurations?: UpdateEndpointGroupRequestEndpointConfigurations[];
  endpointGroupId?: string;
  endpointGroupRegion?: string;
  endpointRequestProtocol?: string;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  name?: string;
  portOverrides?: UpdateEndpointGroupRequestPortOverrides[];
  regionId?: string;
  thresholdCount?: number;
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      name: 'Name',
      portOverrides: 'PortOverrides',
      regionId: 'RegionId',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupRequestEndpointConfigurations },
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': UpdateEndpointGroupRequestPortOverrides },
      regionId: 'string',
      thresholdCount: 'number',
      trafficPercentage: 'number',
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
  statusCode: number;
  body: UpdateEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupAttributeRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  endpointGroupId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      endpointGroupId: 'EndpointGroupId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      endpointGroupId: 'string',
      name: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: UpdateEndpointGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEndpointGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurations[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurations },
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsResponseBody extends $tea.Model {
  endpointGroupIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupIds: 'EndpointGroupIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  forwardingRules?: UpdateForwardingRulesRequestForwardingRules[];
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      forwardingRules: 'ForwardingRules',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      forwardingRules: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRules },
      listenerId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: UpdateForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateForwardingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  ipSetId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      ipSetId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: UpdateIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetsRequest extends $tea.Model {
  ipSets?: UpdateIpSetsRequestIpSets[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSets: 'IpSets',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSets: { 'type': 'array', 'itemType': UpdateIpSetsRequestIpSets },
      regionId: 'string',
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
  statusCode: number;
  body: UpdateIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIpSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerRequest extends $tea.Model {
  backendPorts?: UpdateListenerRequestBackendPorts[];
  certificates?: UpdateListenerRequestCertificates[];
  clientAffinity?: string;
  clientToken?: string;
  description?: string;
  listenerId?: string;
  name?: string;
  portRanges?: UpdateListenerRequestPortRanges[];
  protocol?: string;
  proxyProtocol?: string;
  regionId?: string;
  securityPolicyId?: string;
  XForwardedForConfig?: UpdateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      clientToken: 'ClientToken',
      description: 'Description',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      regionId: 'RegionId',
      securityPolicyId: 'SecurityPolicyId',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPorts: { 'type': 'array', 'itemType': UpdateListenerRequestBackendPorts },
      certificates: { 'type': 'array', 'itemType': UpdateListenerRequestCertificates },
      clientAffinity: 'string',
      clientToken: 'string',
      description: 'string',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateListenerRequestPortRanges },
      protocol: 'string',
      proxyProtocol: 'string',
      regionId: 'string',
      securityPolicyId: 'string',
      XForwardedForConfig: UpdateListenerRequestXForwardedForConfig,
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
  statusCode: number;
  body: UpdateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  domain?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAcceleratorRequestIpSetConfig extends $tea.Model {
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
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
  enableClientIPPreservation?: boolean;
  endpoint?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      endpoint: 'Endpoint',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      endpoint: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupRequestPortOverrides extends $tea.Model {
  endpointPort?: number;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides extends $tea.Model {
  endpointPort?: number;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurations extends $tea.Model {
  enableClientIPPreservationProxyProtocol?: boolean;
  enableClientIPPreservationToa?: boolean;
  endpointConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointGroupDescription?: string;
  endpointGroupName?: string;
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointRequestProtocol?: string;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  portOverrides?: CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  thresholdCount?: number;
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservationProxyProtocol: 'EnableClientIPPreservationProxyProtocol',
      enableClientIPPreservationToa: 'EnableClientIPPreservationToa',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupDescription: 'EndpointGroupDescription',
      endpointGroupName: 'EndpointGroupName',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupType: 'EndpointGroupType',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      portOverrides: 'PortOverrides',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservationProxyProtocol: 'boolean',
      enableClientIPPreservationToa: 'boolean',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupDescription: 'string',
      endpointGroupName: 'string',
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      thresholdCount: 'number',
      trafficPercentage: 'number',
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
  forwardGroupConfig?: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  order?: number;
  ruleActionType?: string;
  ruleActionValue?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      order: 'Order',
      ruleActionType: 'RuleActionType',
      ruleActionValue: 'RuleActionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig,
      order: 'number',
      ruleActionType: 'string',
      ruleActionValue: 'string',
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

export class CreateForwardingRulesRequestForwardingRulesRuleConditions extends $tea.Model {
  hostConfig?: CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  pathConfig?: CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  ruleConditionType?: string;
  ruleConditionValue?: string;
  static names(): { [key: string]: string } {
    return {
      hostConfig: 'HostConfig',
      pathConfig: 'PathConfig',
      ruleConditionType: 'RuleConditionType',
      ruleConditionValue: 'RuleConditionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostConfig: CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig,
      pathConfig: CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig,
      ruleConditionType: 'string',
      ruleConditionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateForwardingRulesRequestForwardingRules extends $tea.Model {
  forwardingRuleName?: string;
  priority?: number;
  ruleActions?: CreateForwardingRulesRequestForwardingRulesRuleActions[];
  ruleConditions?: CreateForwardingRulesRequestForwardingRulesRuleConditions[];
  ruleDirection?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleName: 'ForwardingRuleName',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleDirection: 'RuleDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleName: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleConditions },
      ruleDirection: 'string',
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
  bandwidth?: number;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipVersion: 'string',
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

export class CreateListenerRequestXForwardedForConfig extends $tea.Model {
  XForwardedForGaApEnabled?: boolean;
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
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

export class DescribeAcceleratorResponseBodyIpSetConfig extends $tea.Model {
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationMonitorResponseBodyIspCityList extends $tea.Model {
  city?: string;
  cityName?: string;
  isp?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      cityName: 'CityName',
      isp: 'Isp',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      cityName: 'string',
      isp: 'string',
      ispName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyEndpointConfigurations extends $tea.Model {
  enableClientIPPreservation?: boolean;
  endpoint?: string;
  probePort?: number;
  probeProtocol?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      endpoint: 'Endpoint',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      endpoint: 'string',
      probePort: 'number',
      probeProtocol: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyPortOverrides extends $tea.Model {
  endpointPort?: number;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
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
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
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
  XForwardedForGaApEnabled?: boolean;
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
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
  acceleratorId?: string;
  aclType?: string;
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      aclType: 'AclType',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      aclType: 'string',
      listenerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAcceleratorResponseBodyBasicBandwidthPackage extends $tea.Model {
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

export class GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage extends $tea.Model {
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

export class GetHealthStatusResponseBodyEndpointGroupsEndpoints extends $tea.Model {
  address?: string;
  endpointId?: string;
  healthDetail?: string;
  healthStatus?: string;
  port?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      endpointId: 'EndpointId',
      healthDetail: 'HealthDetail',
      healthStatus: 'HealthStatus',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      endpointId: 'string',
      healthDetail: 'string',
      healthStatus: 'string',
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
  endpoints?: GetHealthStatusResponseBodyEndpointGroupsEndpoints[];
  forwardingRuleIds?: string[];
  healthStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpointGroupType: 'EndpointGroupType',
      endpoints: 'Endpoints',
      forwardingRuleIds: 'ForwardingRuleIds',
      healthStatus: 'HealthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointGroupType: 'string',
      endpoints: { 'type': 'array', 'itemType': GetHealthStatusResponseBodyEndpointGroupsEndpoints },
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      healthStatus: 'string',
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
  areaId?: string;
  localName?: string;
  regionList?: ListAccelerateAreasResponseBodyAreasRegionList[];
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      localName: 'LocalName',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      localName: 'string',
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

export class ListAcceleratorsResponseBodyAcceleratorsIpSetConfig extends $tea.Model {
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBodyAccelerators extends $tea.Model {
  acceleratorId?: string;
  bandwidth?: number;
  basicBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  cenId?: string;
  createTime?: number;
  crossDomainBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  ddosId?: string;
  description?: string;
  dnsName?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  ipSetConfig?: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig;
  name?: string;
  regionId?: string;
  secondDnsName?: string;
  spec?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      ddosId: 'DdosId',
      description: 'Description',
      dnsName: 'DnsName',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      regionId: 'RegionId',
      secondDnsName: 'SecondDnsName',
      spec: 'Spec',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidth: 'number',
      basicBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      cenId: 'string',
      createTime: 'number',
      crossDomainBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
      ddosId: 'string',
      description: 'string',
      dnsName: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      ipSetConfig: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig,
      name: 'string',
      regionId: 'string',
      secondDnsName: 'string',
      spec: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsResponseBodyAcls extends $tea.Model {
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  addressIPVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorResponseBodyApplicationMonitors extends $tea.Model {
  acceleratorId?: string;
  address?: string;
  detectEnable?: boolean;
  detectThreshold?: number;
  detectTimes?: number;
  listenerId?: string;
  optionsJson?: string;
  silenceTime?: number;
  state?: string;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      silenceTime: 'SilenceTime',
      state: 'State',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      listenerId: 'string',
      optionsJson: 'string',
      silenceTime: 'number',
      state: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationMonitorDetectResultResponseBodyApplicationMonitorDetectResultList extends $tea.Model {
  acceleratorId?: string;
  content?: string;
  detail?: string;
  detectTime?: string;
  diagStatus?: string;
  listenerId?: string;
  port?: string;
  protocol?: string;
  statusCode?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      content: 'Content',
      detail: 'Detail',
      detectTime: 'DetectTime',
      diagStatus: 'DiagStatus',
      listenerId: 'ListenerId',
      port: 'Port',
      protocol: 'Protocol',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      content: 'string',
      detail: 'string',
      detectTime: 'string',
      diagStatus: 'string',
      listenerId: 'string',
      port: 'string',
      protocol: 'string',
      statusCode: 'string',
      taskId: 'string',
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
  areaId?: string;
  localName?: string;
  regionList?: ListAvailableAccelerateAreasResponseBodyAreasRegionList[];
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      localName: 'LocalName',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      localName: 'string',
      regionList: { 'type': 'array', 'itemType': ListAvailableAccelerateAreasResponseBodyAreasRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableBusiRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  pop?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      pop: 'Pop',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      pop: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponseBodyBandwidthPackages extends $tea.Model {
  accelerators?: string[];
  bandwidth?: number;
  bandwidthPackageId?: string;
  bandwidthType?: string;
  billingType?: string;
  cbnGeographicRegionIdA?: string;
  cbnGeographicRegionIdB?: string;
  chargeType?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  name?: string;
  ratio?: number;
  regionId?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthType: 'BandwidthType',
      billingType: 'BillingType',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      ratio: 'Ratio',
      regionId: 'RegionId',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidth: 'number',
      bandwidthPackageId: 'string',
      bandwidthType: 'string',
      billingType: 'string',
      cbnGeographicRegionIdA: 'string',
      cbnGeographicRegionIdB: 'string',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      name: 'string',
      ratio: 'number',
      regionId: 'string',
      state: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesResponseBodyBandwidthPackages extends $tea.Model {
  accelerators?: string[];
  bandwidth?: number;
  bandwidthPackageId?: string;
  chargeType?: string;
  createTime?: string;
  description?: string;
  expiredTime?: string;
  name?: string;
  regionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidth: 'number',
      bandwidthPackageId: 'string',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      name: 'string',
      regionId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage extends $tea.Model {
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

export class ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage extends $tea.Model {
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

export class ListBasicAcceleratorsResponseBodyAccelerators extends $tea.Model {
  acceleratorId?: string;
  basicBandwidthPackage?: ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  basicEndpointGroupId?: string;
  basicIpSetId?: string;
  createTime?: number;
  crossDomainBandwidthPackage?: ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  description?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  name?: string;
  regionId?: string;
  state?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      basicEndpointGroupId: 'BasicEndpointGroupId',
      basicIpSetId: 'BasicIpSetId',
      createTime: 'CreateTime',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      regionId: 'RegionId',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      basicBandwidthPackage: ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      basicEndpointGroupId: 'string',
      basicIpSetId: 'string',
      createTime: 'number',
      crossDomainBandwidthPackage: ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
      description: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      name: 'string',
      regionId: 'string',
      state: 'string',
      type: 'string',
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
  enableClientIPPreservation?: boolean;
  endpoint?: string;
  endpointId?: string;
  probePort?: number;
  probeProtocol?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      endpoint: 'Endpoint',
      endpointId: 'EndpointId',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      endpoint: 'string',
      endpointId: 'string',
      probePort: 'number',
      probeProtocol: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides extends $tea.Model {
  endpointPort?: number;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBodyEndpointGroups extends $tea.Model {
  acceleratorId?: string;
  description?: string;
  endpointConfigurations?: ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations[];
  endpointGroupId?: string;
  endpointGroupIpList?: string[];
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointGroupUnconfirmedIpList?: string[];
  endpointRequestProtocol?: string;
  forwardingRuleIds?: string[];
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  listenerId?: string;
  name?: string;
  portOverrides?: ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides[];
  state?: string;
  thresholdCount?: number;
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      description: 'Description',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupType: 'EndpointGroupType',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      forwardingRuleIds: 'ForwardingRuleIds',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      listenerId: 'ListenerId',
      name: 'Name',
      portOverrides: 'PortOverrides',
      state: 'State',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      description: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations },
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      endpointRequestProtocol: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      listenerId: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides },
      state: 'string',
      thresholdCount: 'number',
      trafficPercentage: 'number',
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
  forwardGroupConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig;
  order?: number;
  ruleActionType?: string;
  ruleActionValue?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      order: 'Order',
      ruleActionType: 'RuleActionType',
      ruleActionValue: 'RuleActionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig,
      order: 'number',
      ruleActionType: 'string',
      ruleActionValue: 'string',
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

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditions extends $tea.Model {
  hostConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig;
  pathConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig;
  ruleConditionType?: string;
  ruleConditionValue?: string;
  static names(): { [key: string]: string } {
    return {
      hostConfig: 'HostConfig',
      pathConfig: 'PathConfig',
      ruleConditionType: 'RuleConditionType',
      ruleConditionValue: 'RuleConditionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostConfig: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig,
      pathConfig: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig,
      ruleConditionType: 'string',
      ruleConditionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRules extends $tea.Model {
  forwardingRuleDirection?: string;
  forwardingRuleId?: string;
  forwardingRuleName?: string;
  forwardingRuleStatus?: string;
  listenerId?: string;
  priority?: number;
  ruleActions?: ListForwardingRulesResponseBodyForwardingRulesRuleActions[];
  ruleConditions?: ListForwardingRulesResponseBodyForwardingRulesRuleConditions[];
  static names(): { [key: string]: string } {
    return {
      forwardingRuleDirection: 'ForwardingRuleDirection',
      forwardingRuleId: 'ForwardingRuleId',
      forwardingRuleName: 'ForwardingRuleName',
      forwardingRuleStatus: 'ForwardingRuleStatus',
      listenerId: 'ListenerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleDirection: 'string',
      forwardingRuleId: 'string',
      forwardingRuleName: 'string',
      forwardingRuleStatus: 'string',
      listenerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleConditions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsResponseBodyIpSets extends $tea.Model {
  accelerateRegionId?: string;
  bandwidth?: number;
  ipAddressList?: string[];
  ipSetId?: string;
  ipVersion?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipAddressList: { 'type': 'array', 'itemType': 'string' },
      ipSetId: 'string',
      ipVersion: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBodyCertificates extends $tea.Model {
  certificateId?: string;
  domain?: string;
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domain: 'Domain',
      isDefault: 'IsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domain: 'string',
      isDefault: 'boolean',
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

export class ListListenersResponseBodyListenersCertificates extends $tea.Model {
  id?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
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
  XForwardedForGaApEnabled?: boolean;
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListeners extends $tea.Model {
  acceleratorId?: string;
  backendPorts?: ListListenersResponseBodyListenersBackendPorts[];
  certificates?: ListListenersResponseBodyListenersCertificates[];
  clientAffinity?: string;
  createTime?: number;
  description?: string;
  listenerId?: string;
  name?: string;
  portRanges?: ListListenersResponseBodyListenersPortRanges[];
  protocol?: string;
  proxyProtocol?: boolean;
  securityPolicyId?: string;
  state?: string;
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      createTime: 'CreateTime',
      description: 'Description',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      securityPolicyId: 'SecurityPolicyId',
      state: 'State',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      backendPorts: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersBackendPorts },
      certificates: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersCertificates },
      clientAffinity: 'string',
      createTime: 'number',
      description: 'string',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      securityPolicyId: 'string',
      state: 'string',
      XForwardedForConfig: ListListenersResponseBodyListenersXForwardedForConfig,
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
  ciphers?: string[];
  securityPolicyId?: string;
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      securityPolicyId: 'string',
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
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
  enableClientIPPreservation?: boolean;
  endpoint?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      endpoint: 'Endpoint',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      endpoint: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupRequestPortOverrides extends $tea.Model {
  endpointPort?: number;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides extends $tea.Model {
  endpointPort?: number;
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurations extends $tea.Model {
  enableClientIPPreservationProxyProtocol?: boolean;
  enableClientIPPreservationToa?: boolean;
  endpointConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointGroupDescription?: string;
  endpointGroupId?: string;
  endpointGroupName?: string;
  endpointRequestProtocol?: string;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  portOverrides?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  thresholdCount?: number;
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservationProxyProtocol: 'EnableClientIPPreservationProxyProtocol',
      enableClientIPPreservationToa: 'EnableClientIPPreservationToa',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupDescription: 'EndpointGroupDescription',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupName: 'EndpointGroupName',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      portOverrides: 'PortOverrides',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservationProxyProtocol: 'boolean',
      enableClientIPPreservationToa: 'boolean',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupDescription: 'string',
      endpointGroupId: 'string',
      endpointGroupName: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      thresholdCount: 'number',
      trafficPercentage: 'number',
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
  forwardGroupConfig?: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  order?: number;
  ruleActionType?: string;
  ruleActionValue?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      order: 'Order',
      ruleActionType: 'RuleActionType',
      ruleActionValue: 'RuleActionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig,
      order: 'number',
      ruleActionType: 'string',
      ruleActionValue: 'string',
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

export class UpdateForwardingRulesRequestForwardingRulesRuleConditions extends $tea.Model {
  hostConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  pathConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  ruleConditionType?: string;
  ruleConditionValue?: string;
  static names(): { [key: string]: string } {
    return {
      hostConfig: 'HostConfig',
      pathConfig: 'PathConfig',
      ruleConditionType: 'RuleConditionType',
      ruleConditionValue: 'RuleConditionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostConfig: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig,
      pathConfig: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig,
      ruleConditionType: 'string',
      ruleConditionValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequestForwardingRules extends $tea.Model {
  forwardingRuleId?: string;
  forwardingRuleName?: string;
  priority?: number;
  ruleActions?: UpdateForwardingRulesRequestForwardingRulesRuleActions[];
  ruleConditions?: UpdateForwardingRulesRequestForwardingRulesRuleConditions[];
  ruleDirection?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleId: 'ForwardingRuleId',
      forwardingRuleName: 'ForwardingRuleName',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleDirection: 'RuleDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleId: 'string',
      forwardingRuleName: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleConditions },
      ruleDirection: 'string',
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

export class UpdateListenerRequestXForwardedForConfig extends $tea.Model {
  XForwardedForGaApEnabled?: boolean;
  XForwardedForGaIdEnabled?: boolean;
  XForwardedForPortEnabled?: boolean;
  XForwardedForProtoEnabled?: boolean;
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
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
    let query = { };
    if (!Util.isUnset(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "AddEntriesToAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddEntriesToAclResponse>(await this.callApi(params, req, runtime), new AddEntriesToAclResponse({}));
  }

  async addEntriesToAcl(request: AddEntriesToAclRequest): Promise<AddEntriesToAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  async associateAclsWithListenerWithOptions(request: AssociateAclsWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAclsWithListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAclsWithListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAclsWithListenerResponse>(await this.callApi(params, req, runtime), new AssociateAclsWithListenerResponse({}));
  }

  async associateAclsWithListener(request: AssociateAclsWithListenerRequest): Promise<AssociateAclsWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  async associateAdditionalCertificatesWithListenerWithOptions(request: AssociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  async attachDdosToAcceleratorWithOptions(request: AttachDdosToAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<AttachDdosToAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.ddosId)) {
      query["DdosId"] = request.ddosId;
    }

    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachDdosToAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachDdosToAcceleratorResponse>(await this.callApi(params, req, runtime), new AttachDdosToAcceleratorResponse({}));
  }

  async attachDdosToAccelerator(request: AttachDdosToAcceleratorRequest): Promise<AttachDdosToAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDdosToAcceleratorWithOptions(request, runtime);
  }

  async attachLogStoreToEndpointGroupWithOptions(request: AttachLogStoreToEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachLogStoreToEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.slsLogStoreName)) {
      query["SlsLogStoreName"] = request.slsLogStoreName;
    }

    if (!Util.isUnset(request.slsProjectName)) {
      query["SlsProjectName"] = request.slsProjectName;
    }

    if (!Util.isUnset(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachLogStoreToEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachLogStoreToEndpointGroupResponse>(await this.callApi(params, req, runtime), new AttachLogStoreToEndpointGroupResponse({}));
  }

  async attachLogStoreToEndpointGroup(request: AttachLogStoreToEndpointGroupRequest): Promise<AttachLogStoreToEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLogStoreToEndpointGroupWithOptions(request, runtime);
  }

  async bandwidthPackageAddAcceleratorWithOptions(request: BandwidthPackageAddAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<BandwidthPackageAddAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BandwidthPackageAddAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BandwidthPackageAddAcceleratorResponse>(await this.callApi(params, req, runtime), new BandwidthPackageAddAcceleratorResponse({}));
  }

  async bandwidthPackageAddAccelerator(request: BandwidthPackageAddAcceleratorRequest): Promise<BandwidthPackageAddAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandwidthPackageAddAcceleratorWithOptions(request, runtime);
  }

  async bandwidthPackageRemoveAcceleratorWithOptions(request: BandwidthPackageRemoveAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<BandwidthPackageRemoveAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BandwidthPackageRemoveAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BandwidthPackageRemoveAcceleratorResponse>(await this.callApi(params, req, runtime), new BandwidthPackageRemoveAcceleratorResponse({}));
  }

  async bandwidthPackageRemoveAccelerator(request: BandwidthPackageRemoveAcceleratorRequest): Promise<BandwidthPackageRemoveAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandwidthPackageRemoveAcceleratorWithOptions(request, runtime);
  }

  async configEndpointProbeWithOptions(request: ConfigEndpointProbeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigEndpointProbeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!Util.isUnset(request.probePort)) {
      query["ProbePort"] = request.probePort;
    }

    if (!Util.isUnset(request.probeProtocol)) {
      query["ProbeProtocol"] = request.probeProtocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigEndpointProbe",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigEndpointProbeResponse>(await this.callApi(params, req, runtime), new ConfigEndpointProbeResponse({}));
  }

  async configEndpointProbe(request: ConfigEndpointProbeRequest): Promise<ConfigEndpointProbeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configEndpointProbeWithOptions(request, runtime);
  }

  async createAcceleratorWithOptions(request: CreateAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<CreateAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset($tea.toMap(request.ipSetConfig))) {
      query["IpSetConfig"] = request.ipSetConfig;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAcceleratorResponse>(await this.callApi(params, req, runtime), new CreateAcceleratorResponse({}));
  }

  async createAccelerator(request: CreateAcceleratorRequest): Promise<CreateAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAcceleratorWithOptions(request, runtime);
  }

  async createAclWithOptions(request: CreateAclRequest, runtime: $Util.RuntimeOptions): Promise<CreateAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
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
      action: "CreateAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAclResponse>(await this.callApi(params, req, runtime), new CreateAclResponse({}));
  }

  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  async createApplicationMonitorWithOptions(request: CreateApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.detectEnable)) {
      query["DetectEnable"] = request.detectEnable;
    }

    if (!Util.isUnset(request.detectThreshold)) {
      query["DetectThreshold"] = request.detectThreshold;
    }

    if (!Util.isUnset(request.detectTimes)) {
      query["DetectTimes"] = request.detectTimes;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationMonitorResponse>(await this.callApi(params, req, runtime), new CreateApplicationMonitorResponse({}));
  }

  async createApplicationMonitor(request: CreateApplicationMonitorRequest): Promise<CreateApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationMonitorWithOptions(request, runtime);
  }

  async createBandwidthPackageWithOptions(request: CreateBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!Util.isUnset(request.billingType)) {
      query["BillingType"] = request.billingType;
    }

    if (!Util.isUnset(request.cbnGeographicRegionIdA)) {
      query["CbnGeographicRegionIdA"] = request.cbnGeographicRegionIdA;
    }

    if (!Util.isUnset(request.cbnGeographicRegionIdB)) {
      query["CbnGeographicRegionIdB"] = request.cbnGeographicRegionIdB;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.ratio)) {
      query["Ratio"] = request.ratio;
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
      action: "CreateBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBandwidthPackageResponse>(await this.callApi(params, req, runtime), new CreateBandwidthPackageResponse({}));
  }

  async createBandwidthPackage(request: CreateBandwidthPackageRequest): Promise<CreateBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBandwidthPackageWithOptions(request, runtime);
  }

  async createBasicAcceleratorWithOptions(request: CreateBasicAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new CreateBasicAcceleratorResponse({}));
  }

  async createBasicAccelerator(request: CreateBasicAcceleratorRequest): Promise<CreateBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicAcceleratorWithOptions(request, runtime);
  }

  async createBasicEndpointGroupWithOptions(request: CreateBasicEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpointAddress)) {
      query["EndpointAddress"] = request.endpointAddress;
    }

    if (!Util.isUnset(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
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
      action: "CreateBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new CreateBasicEndpointGroupResponse({}));
  }

  async createBasicEndpointGroup(request: CreateBasicEndpointGroupRequest): Promise<CreateBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicEndpointGroupWithOptions(request, runtime);
  }

  async createBasicIpSetWithOptions(request: CreateBasicIpSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateRegionId)) {
      query["AccelerateRegionId"] = request.accelerateRegionId;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicIpSetResponse>(await this.callApi(params, req, runtime), new CreateBasicIpSetResponse({}));
  }

  async createBasicIpSet(request: CreateBasicIpSetRequest): Promise<CreateBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicIpSetWithOptions(request, runtime);
  }

  async createEndpointGroupWithOptions(request: CreateEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
    }

    if (!Util.isUnset(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!Util.isUnset(request.endpointGroupType)) {
      query["EndpointGroupType"] = request.endpointGroupType;
    }

    if (!Util.isUnset(request.endpointRequestProtocol)) {
      query["EndpointRequestProtocol"] = request.endpointRequestProtocol;
    }

    if (!Util.isUnset(request.healthCheckEnabled)) {
      query["HealthCheckEnabled"] = request.healthCheckEnabled;
    }

    if (!Util.isUnset(request.healthCheckIntervalSeconds)) {
      query["HealthCheckIntervalSeconds"] = request.healthCheckIntervalSeconds;
    }

    if (!Util.isUnset(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!Util.isUnset(request.healthCheckPort)) {
      query["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!Util.isUnset(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.portOverrides)) {
      query["PortOverrides"] = request.portOverrides;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.thresholdCount)) {
      query["ThresholdCount"] = request.thresholdCount;
    }

    if (!Util.isUnset(request.trafficPercentage)) {
      query["TrafficPercentage"] = request.trafficPercentage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEndpointGroupResponse>(await this.callApi(params, req, runtime), new CreateEndpointGroupResponse({}));
  }

  async createEndpointGroup(request: CreateEndpointGroupRequest): Promise<CreateEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointGroupWithOptions(request, runtime);
  }

  async createEndpointGroupsWithOptions(request: CreateEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<CreateEndpointGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointGroupConfigurations)) {
      query["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEndpointGroupsResponse>(await this.callApi(params, req, runtime), new CreateEndpointGroupsResponse({}));
  }

  async createEndpointGroups(request: CreateEndpointGroupsRequest): Promise<CreateEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointGroupsWithOptions(request, runtime);
  }

  async createForwardingRulesWithOptions(request: CreateForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateForwardingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forwardingRules)) {
      query["ForwardingRules"] = request.forwardingRules;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateForwardingRulesResponse>(await this.callApi(params, req, runtime), new CreateForwardingRulesResponse({}));
  }

  async createForwardingRules(request: CreateForwardingRulesRequest): Promise<CreateForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createForwardingRulesWithOptions(request, runtime);
  }

  async createIpSetsWithOptions(request: CreateIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<CreateIpSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateRegion)) {
      query["AccelerateRegion"] = request.accelerateRegion;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIpSetsResponse>(await this.callApi(params, req, runtime), new CreateIpSetsResponse({}));
  }

  async createIpSets(request: CreateIpSetsRequest): Promise<CreateIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpSetsWithOptions(request, runtime);
  }

  async createListenerWithOptions(request: CreateListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientAffinity)) {
      query["ClientAffinity"] = request.clientAffinity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.portRanges)) {
      query["PortRanges"] = request.portRanges;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.proxyProtocol)) {
      query["ProxyProtocol"] = request.proxyProtocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset($tea.toMap(request.XForwardedForConfig))) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateListenerResponse>(await this.callApi(params, req, runtime), new CreateListenerResponse({}));
  }

  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  async createSpareIpsWithOptions(request: CreateSpareIpsRequest, runtime: $Util.RuntimeOptions): Promise<CreateSpareIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!Util.isUnset(request.spareIps)) {
      query["SpareIps"] = request.spareIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSpareIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSpareIpsResponse>(await this.callApi(params, req, runtime), new CreateSpareIpsResponse({}));
  }

  async createSpareIps(request: CreateSpareIpsRequest): Promise<CreateSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpareIpsWithOptions(request, runtime);
  }

  async deleteAcceleratorWithOptions(request: DeleteAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAcceleratorResponse>(await this.callApi(params, req, runtime), new DeleteAcceleratorResponse({}));
  }

  async deleteAccelerator(request: DeleteAcceleratorRequest): Promise<DeleteAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAcceleratorWithOptions(request, runtime);
  }

  async deleteAclWithOptions(request: DeleteAclRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "DeleteAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAclResponse>(await this.callApi(params, req, runtime), new DeleteAclResponse({}));
  }

  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  async deleteApplicationMonitorWithOptions(request: DeleteApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationMonitorResponse>(await this.callApi(params, req, runtime), new DeleteApplicationMonitorResponse({}));
  }

  async deleteApplicationMonitor(request: DeleteApplicationMonitorRequest): Promise<DeleteApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationMonitorWithOptions(request, runtime);
  }

  async deleteBandwidthPackageWithOptions(request: DeleteBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBandwidthPackageResponse>(await this.callApi(params, req, runtime), new DeleteBandwidthPackageResponse({}));
  }

  async deleteBandwidthPackage(request: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBandwidthPackageWithOptions(request, runtime);
  }

  async deleteBasicAcceleratorWithOptions(request: DeleteBasicAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBasicAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new DeleteBasicAcceleratorResponse({}));
  }

  async deleteBasicAccelerator(request: DeleteBasicAcceleratorRequest): Promise<DeleteBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicAcceleratorWithOptions(request, runtime);
  }

  async deleteBasicEndpointGroupWithOptions(request: DeleteBasicEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBasicEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new DeleteBasicEndpointGroupResponse({}));
  }

  async deleteBasicEndpointGroup(request: DeleteBasicEndpointGroupRequest): Promise<DeleteBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicEndpointGroupWithOptions(request, runtime);
  }

  async deleteBasicIpSetWithOptions(request: DeleteBasicIpSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBasicIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBasicIpSetResponse>(await this.callApi(params, req, runtime), new DeleteBasicIpSetResponse({}));
  }

  async deleteBasicIpSet(request: DeleteBasicIpSetRequest): Promise<DeleteBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicIpSetWithOptions(request, runtime);
  }

  async deleteEndpointGroupWithOptions(request: DeleteEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEndpointGroupResponse>(await this.callApi(params, req, runtime), new DeleteEndpointGroupResponse({}));
  }

  async deleteEndpointGroup(request: DeleteEndpointGroupRequest): Promise<DeleteEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointGroupWithOptions(request, runtime);
  }

  async deleteEndpointGroupsWithOptions(request: DeleteEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEndpointGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEndpointGroupsResponse>(await this.callApi(params, req, runtime), new DeleteEndpointGroupsResponse({}));
  }

  async deleteEndpointGroups(request: DeleteEndpointGroupsRequest): Promise<DeleteEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointGroupsWithOptions(request, runtime);
  }

  async deleteForwardingRulesWithOptions(request: DeleteForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteForwardingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forwardingRuleIds)) {
      query["ForwardingRuleIds"] = request.forwardingRuleIds;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteForwardingRulesResponse>(await this.callApi(params, req, runtime), new DeleteForwardingRulesResponse({}));
  }

  async deleteForwardingRules(request: DeleteForwardingRulesRequest): Promise<DeleteForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteForwardingRulesWithOptions(request, runtime);
  }

  async deleteIpSetWithOptions(request: DeleteIpSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIpSetResponse>(await this.callApi(params, req, runtime), new DeleteIpSetResponse({}));
  }

  async deleteIpSet(request: DeleteIpSetRequest): Promise<DeleteIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpSetWithOptions(request, runtime);
  }

  async deleteIpSetsWithOptions(request: DeleteIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipSetIds)) {
      query["IpSetIds"] = request.ipSetIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIpSetsResponse>(await this.callApi(params, req, runtime), new DeleteIpSetsResponse({}));
  }

  async deleteIpSets(request: DeleteIpSetsRequest): Promise<DeleteIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpSetsWithOptions(request, runtime);
  }

  async deleteListenerWithOptions(request: DeleteListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteListenerResponse>(await this.callApi(params, req, runtime), new DeleteListenerResponse({}));
  }

  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  async deleteSpareIpsWithOptions(request: DeleteSpareIpsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSpareIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!Util.isUnset(request.spareIps)) {
      query["SpareIps"] = request.spareIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSpareIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSpareIpsResponse>(await this.callApi(params, req, runtime), new DeleteSpareIpsResponse({}));
  }

  async deleteSpareIps(request: DeleteSpareIpsRequest): Promise<DeleteSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpareIpsWithOptions(request, runtime);
  }

  async describeAcceleratorWithOptions(request: DescribeAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAcceleratorResponse>(await this.callApi(params, req, runtime), new DescribeAcceleratorResponse({}));
  }

  async describeAccelerator(request: DescribeAcceleratorRequest): Promise<DescribeAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAcceleratorWithOptions(request, runtime);
  }

  async describeAcceleratorAutoRenewAttributeWithOptions(request: DescribeAcceleratorAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAcceleratorAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAcceleratorAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAcceleratorAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new DescribeAcceleratorAutoRenewAttributeResponse({}));
  }

  async describeAcceleratorAutoRenewAttribute(request: DescribeAcceleratorAutoRenewAttributeRequest): Promise<DescribeAcceleratorAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAcceleratorAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeApplicationMonitorWithOptions(request: DescribeApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationMonitorResponse>(await this.callApi(params, req, runtime), new DescribeApplicationMonitorResponse({}));
  }

  async describeApplicationMonitor(request: DescribeApplicationMonitorRequest): Promise<DescribeApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationMonitorWithOptions(request, runtime);
  }

  async describeBandwidthPackageWithOptions(request: DescribeBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBandwidthPackageResponse>(await this.callApi(params, req, runtime), new DescribeBandwidthPackageResponse({}));
  }

  async describeBandwidthPackage(request: DescribeBandwidthPackageRequest): Promise<DescribeBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthPackageWithOptions(request, runtime);
  }

  async describeBandwidthPackageAutoRenewAttributeWithOptions(request: DescribeBandwidthPackageAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBandwidthPackageAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBandwidthPackageAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBandwidthPackageAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new DescribeBandwidthPackageAutoRenewAttributeResponse({}));
  }

  async describeBandwidthPackageAutoRenewAttribute(request: DescribeBandwidthPackageAutoRenewAttributeRequest): Promise<DescribeBandwidthPackageAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthPackageAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeEndpointGroupWithOptions(request: DescribeEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndpointGroupResponse>(await this.callApi(params, req, runtime), new DescribeEndpointGroupResponse({}));
  }

  async describeEndpointGroup(request: DescribeEndpointGroupRequest): Promise<DescribeEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointGroupWithOptions(request, runtime);
  }

  async describeIpSetWithOptions(request: DescribeIpSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpSetResponse>(await this.callApi(params, req, runtime), new DescribeIpSetResponse({}));
  }

  async describeIpSet(request: DescribeIpSetRequest): Promise<DescribeIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpSetWithOptions(request, runtime);
  }

  async describeListenerWithOptions(request: DescribeListenerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeListenerResponse>(await this.callApi(params, req, runtime), new DescribeListenerResponse({}));
  }

  async describeListener(request: DescribeListenerRequest): Promise<DescribeListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListenerWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-11-20",
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

  async detachDdosFromAcceleratorWithOptions(request: DetachDdosFromAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<DetachDdosFromAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachDdosFromAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachDdosFromAcceleratorResponse>(await this.callApi(params, req, runtime), new DetachDdosFromAcceleratorResponse({}));
  }

  async detachDdosFromAccelerator(request: DetachDdosFromAcceleratorRequest): Promise<DetachDdosFromAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDdosFromAcceleratorWithOptions(request, runtime);
  }

  async detachLogStoreFromEndpointGroupWithOptions(request: DetachLogStoreFromEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachLogStoreFromEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupIds)) {
      query["EndpointGroupIds"] = request.endpointGroupIds;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachLogStoreFromEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachLogStoreFromEndpointGroupResponse>(await this.callApi(params, req, runtime), new DetachLogStoreFromEndpointGroupResponse({}));
  }

  async detachLogStoreFromEndpointGroup(request: DetachLogStoreFromEndpointGroupRequest): Promise<DetachLogStoreFromEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLogStoreFromEndpointGroupWithOptions(request, runtime);
  }

  async detectApplicationMonitorWithOptions(request: DetectApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DetectApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectApplicationMonitorResponse>(await this.callApi(params, req, runtime), new DetectApplicationMonitorResponse({}));
  }

  async detectApplicationMonitor(request: DetectApplicationMonitorRequest): Promise<DetectApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectApplicationMonitorWithOptions(request, runtime);
  }

  async disableApplicationMonitorWithOptions(request: DisableApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DisableApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationMonitorResponse>(await this.callApi(params, req, runtime), new DisableApplicationMonitorResponse({}));
  }

  async disableApplicationMonitor(request: DisableApplicationMonitorRequest): Promise<DisableApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationMonitorWithOptions(request, runtime);
  }

  async dissociateAclsFromListenerWithOptions(request: DissociateAclsFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAclsFromListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateAclsFromListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateAclsFromListenerResponse>(await this.callApi(params, req, runtime), new DissociateAclsFromListenerResponse({}));
  }

  async dissociateAclsFromListener(request: DissociateAclsFromListenerRequest): Promise<DissociateAclsFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  async dissociateAdditionalCertificatesFromListenerWithOptions(request: DissociateAdditionalCertificatesFromListenerRequest, runtime: $Util.RuntimeOptions): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateAdditionalCertificatesFromListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateAdditionalCertificatesFromListenerResponse>(await this.callApi(params, req, runtime), new DissociateAdditionalCertificatesFromListenerResponse({}));
  }

  async dissociateAdditionalCertificatesFromListener(request: DissociateAdditionalCertificatesFromListenerRequest): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  async enableApplicationMonitorWithOptions(request: EnableApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<EnableApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationMonitorResponse>(await this.callApi(params, req, runtime), new EnableApplicationMonitorResponse({}));
  }

  async enableApplicationMonitor(request: EnableApplicationMonitorRequest): Promise<EnableApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationMonitorWithOptions(request, runtime);
  }

  async getAclWithOptions(request: GetAclRequest, runtime: $Util.RuntimeOptions): Promise<GetAclResponse> {
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
      action: "GetAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAclResponse>(await this.callApi(params, req, runtime), new GetAclResponse({}));
  }

  async getAcl(request: GetAclRequest): Promise<GetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAclWithOptions(request, runtime);
  }

  async getBasicAcceleratorWithOptions(request: GetBasicAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new GetBasicAcceleratorResponse({}));
  }

  async getBasicAccelerator(request: GetBasicAcceleratorRequest): Promise<GetBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicAcceleratorWithOptions(request, runtime);
  }

  async getBasicEndpointGroupWithOptions(request: GetBasicEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new GetBasicEndpointGroupResponse({}));
  }

  async getBasicEndpointGroup(request: GetBasicEndpointGroupRequest): Promise<GetBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicEndpointGroupWithOptions(request, runtime);
  }

  async getBasicIpSetWithOptions(request: GetBasicIpSetRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicIpSetResponse>(await this.callApi(params, req, runtime), new GetBasicIpSetResponse({}));
  }

  async getBasicIpSet(request: GetBasicIpSetRequest): Promise<GetBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicIpSetWithOptions(request, runtime);
  }

  async getHealthStatusWithOptions(request: GetHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHealthStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHealthStatusResponse>(await this.callApi(params, req, runtime), new GetHealthStatusResponse({}));
  }

  async getHealthStatus(request: GetHealthStatusRequest): Promise<GetHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHealthStatusWithOptions(request, runtime);
  }

  async getSpareIpWithOptions(request: GetSpareIpRequest, runtime: $Util.RuntimeOptions): Promise<GetSpareIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!Util.isUnset(request.spareIp)) {
      query["SpareIp"] = request.spareIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSpareIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSpareIpResponse>(await this.callApi(params, req, runtime), new GetSpareIpResponse({}));
  }

  async getSpareIp(request: GetSpareIpRequest): Promise<GetSpareIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpareIpWithOptions(request, runtime);
  }

  async listAccelerateAreasWithOptions(request: ListAccelerateAreasRequest, runtime: $Util.RuntimeOptions): Promise<ListAccelerateAreasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccelerateAreas",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccelerateAreasResponse>(await this.callApi(params, req, runtime), new ListAccelerateAreasResponse({}));
  }

  async listAccelerateAreas(request: ListAccelerateAreasRequest): Promise<ListAccelerateAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccelerateAreasWithOptions(request, runtime);
  }

  async listAcceleratorsWithOptions(request: ListAcceleratorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAcceleratorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccelerators",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAcceleratorsResponse>(await this.callApi(params, req, runtime), new ListAcceleratorsResponse({}));
  }

  async listAccelerators(request: ListAcceleratorsRequest): Promise<ListAcceleratorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcceleratorsWithOptions(request, runtime);
  }

  async listAclsWithOptions(request: ListAclsRequest, runtime: $Util.RuntimeOptions): Promise<ListAclsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclIds)) {
      query["AclIds"] = request.aclIds;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "ListAcls",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAclsResponse>(await this.callApi(params, req, runtime), new ListAclsResponse({}));
  }

  async listAcls(request: ListAclsRequest): Promise<ListAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  async listApplicationMonitorWithOptions(request: ListApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationMonitorResponse>(await this.callApi(params, req, runtime), new ListApplicationMonitorResponse({}));
  }

  async listApplicationMonitor(request: ListApplicationMonitorRequest): Promise<ListApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationMonitorWithOptions(request, runtime);
  }

  async listApplicationMonitorDetectResultWithOptions(request: ListApplicationMonitorDetectResultRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationMonitorDetectResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationMonitorDetectResult",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationMonitorDetectResultResponse>(await this.callApi(params, req, runtime), new ListApplicationMonitorDetectResultResponse({}));
  }

  async listApplicationMonitorDetectResult(request: ListApplicationMonitorDetectResultRequest): Promise<ListApplicationMonitorDetectResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationMonitorDetectResultWithOptions(request, runtime);
  }

  async listAvailableAccelerateAreasWithOptions(request: ListAvailableAccelerateAreasRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableAccelerateAreasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableAccelerateAreas",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableAccelerateAreasResponse>(await this.callApi(params, req, runtime), new ListAvailableAccelerateAreasResponse({}));
  }

  async listAvailableAccelerateAreas(request: ListAvailableAccelerateAreasRequest): Promise<ListAvailableAccelerateAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableAccelerateAreasWithOptions(request, runtime);
  }

  async listAvailableBusiRegionsWithOptions(request: ListAvailableBusiRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableBusiRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableBusiRegions",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableBusiRegionsResponse>(await this.callApi(params, req, runtime), new ListAvailableBusiRegionsResponse({}));
  }

  async listAvailableBusiRegions(request: ListAvailableBusiRegionsRequest): Promise<ListAvailableBusiRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableBusiRegionsWithOptions(request, runtime);
  }

  async listBandwidthPackagesWithOptions(request: ListBandwidthPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListBandwidthPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
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

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBandwidthPackages",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBandwidthPackagesResponse>(await this.callApi(params, req, runtime), new ListBandwidthPackagesResponse({}));
  }

  async listBandwidthPackages(request: ListBandwidthPackagesRequest): Promise<ListBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBandwidthPackagesWithOptions(request, runtime);
  }

  async listBandwidthackagesWithOptions(request: ListBandwidthackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListBandwidthackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBandwidthackages",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBandwidthackagesResponse>(await this.callApi(params, req, runtime), new ListBandwidthackagesResponse({}));
  }

  async listBandwidthackages(request: ListBandwidthackagesRequest): Promise<ListBandwidthackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBandwidthackagesWithOptions(request, runtime);
  }

  async listBasicAcceleratorsWithOptions(request: ListBasicAcceleratorsRequest, runtime: $Util.RuntimeOptions): Promise<ListBasicAcceleratorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBasicAccelerators",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBasicAcceleratorsResponse>(await this.callApi(params, req, runtime), new ListBasicAcceleratorsResponse({}));
  }

  async listBasicAccelerators(request: ListBasicAcceleratorsRequest): Promise<ListBasicAcceleratorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBasicAcceleratorsWithOptions(request, runtime);
  }

  async listBusiRegionsWithOptions(request: ListBusiRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListBusiRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBusiRegions",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBusiRegionsResponse>(await this.callApi(params, req, runtime), new ListBusiRegionsResponse({}));
  }

  async listBusiRegions(request: ListBusiRegionsRequest): Promise<ListBusiRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusiRegionsWithOptions(request, runtime);
  }

  async listEndpointGroupsWithOptions(request: ListEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListEndpointGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.accessLogSwitch)) {
      query["AccessLogSwitch"] = request.accessLogSwitch;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointGroupType)) {
      query["EndpointGroupType"] = request.endpointGroupType;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEndpointGroupsResponse>(await this.callApi(params, req, runtime), new ListEndpointGroupsResponse({}));
  }

  async listEndpointGroups(request: ListEndpointGroupsRequest): Promise<ListEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEndpointGroupsWithOptions(request, runtime);
  }

  async listForwardingRulesWithOptions(request: ListForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListForwardingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forwardingRuleId)) {
      query["ForwardingRuleId"] = request.forwardingRuleId;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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
      action: "ListForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListForwardingRulesResponse>(await this.callApi(params, req, runtime), new ListForwardingRulesResponse({}));
  }

  async listForwardingRules(request: ListForwardingRulesRequest): Promise<ListForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listForwardingRulesWithOptions(request, runtime);
  }

  async listIpSetsWithOptions(request: ListIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListIpSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIpSetsResponse>(await this.callApi(params, req, runtime), new ListIpSetsResponse({}));
  }

  async listIpSets(request: ListIpSetsRequest): Promise<ListIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpSetsWithOptions(request, runtime);
  }

  async listListenerCertificatesWithOptions(request: ListListenerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListListenerCertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
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

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListenerCertificates",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenerCertificatesResponse>(await this.callApi(params, req, runtime), new ListListenerCertificatesResponse({}));
  }

  async listListenerCertificates(request: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  async listListenersWithOptions(request: ListListenersRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListeners",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenersResponse>(await this.callApi(params, req, runtime), new ListListenersResponse({}));
  }

  async listListeners(request: ListListenersRequest): Promise<ListListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  async listSpareIpsWithOptions(request: ListSpareIpsRequest, runtime: $Util.RuntimeOptions): Promise<ListSpareIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
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
      action: "ListSpareIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSpareIpsResponse>(await this.callApi(params, req, runtime), new ListSpareIpsResponse({}));
  }

  async listSpareIps(request: ListSpareIpsRequest): Promise<ListSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpareIpsWithOptions(request, runtime);
  }

  async listSystemSecurityPoliciesWithOptions(request: ListSystemSecurityPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemSecurityPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSystemSecurityPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSystemSecurityPoliciesResponse>(await this.callApi(params, req, runtime), new ListSystemSecurityPoliciesResponse({}));
  }

  async listSystemSecurityPolicies(request: ListSystemSecurityPoliciesRequest): Promise<ListSystemSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(request, runtime);
  }

  async removeEntriesFromAclWithOptions(request: RemoveEntriesFromAclRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEntriesFromAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclEntries)) {
      query["AclEntries"] = request.aclEntries;
    }

    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
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
      action: "RemoveEntriesFromAcl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveEntriesFromAclResponse>(await this.callApi(params, req, runtime), new RemoveEntriesFromAclResponse({}));
  }

  async removeEntriesFromAcl(request: RemoveEntriesFromAclRequest): Promise<RemoveEntriesFromAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  async replaceBandwidthPackageWithOptions(request: ReplaceBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetBandwidthPackageId)) {
      query["TargetBandwidthPackageId"] = request.targetBandwidthPackageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceBandwidthPackageResponse>(await this.callApi(params, req, runtime), new ReplaceBandwidthPackageResponse({}));
  }

  async replaceBandwidthPackage(request: ReplaceBandwidthPackageRequest): Promise<ReplaceBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceBandwidthPackageWithOptions(request, runtime);
  }

  async updateAcceleratorWithOptions(request: UpdateAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAcceleratorResponse>(await this.callApi(params, req, runtime), new UpdateAcceleratorResponse({}));
  }

  async updateAccelerator(request: UpdateAcceleratorRequest): Promise<UpdateAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorWithOptions(request, runtime);
  }

  async updateAcceleratorAutoRenewAttributeWithOptions(request: UpdateAcceleratorAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAcceleratorAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAcceleratorAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAcceleratorAutoRenewAttributeResponse({}));
  }

  async updateAcceleratorAutoRenewAttribute(request: UpdateAcceleratorAutoRenewAttributeRequest): Promise<UpdateAcceleratorAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorAutoRenewAttributeWithOptions(request, runtime);
  }

  async updateAcceleratorConfirmWithOptions(request: UpdateAcceleratorConfirmRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorConfirmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAcceleratorConfirm",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAcceleratorConfirmResponse>(await this.callApi(params, req, runtime), new UpdateAcceleratorConfirmResponse({}));
  }

  async updateAcceleratorConfirm(request: UpdateAcceleratorConfirmRequest): Promise<UpdateAcceleratorConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorConfirmWithOptions(request, runtime);
  }

  async updateAclAttributeWithOptions(request: UpdateAclAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAclAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!Util.isUnset(request.aclName)) {
      query["AclName"] = request.aclName;
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
      action: "UpdateAclAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAclAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAclAttributeResponse({}));
  }

  async updateAclAttribute(request: UpdateAclAttributeRequest): Promise<UpdateAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  async updateApplicationMonitorWithOptions(request: UpdateApplicationMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.detectEnable)) {
      query["DetectEnable"] = request.detectEnable;
    }

    if (!Util.isUnset(request.detectThreshold)) {
      query["DetectThreshold"] = request.detectThreshold;
    }

    if (!Util.isUnset(request.detectTimes)) {
      query["DetectTimes"] = request.detectTimes;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationMonitor",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationMonitorResponse>(await this.callApi(params, req, runtime), new UpdateApplicationMonitorResponse({}));
  }

  async updateApplicationMonitor(request: UpdateApplicationMonitorRequest): Promise<UpdateApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationMonitorWithOptions(request, runtime);
  }

  async updateBandwidthPackagaAutoRenewAttributeWithOptions(request: UpdateBandwidthPackagaAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBandwidthPackagaAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      query["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBandwidthPackagaAutoRenewAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBandwidthPackagaAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new UpdateBandwidthPackagaAutoRenewAttributeResponse({}));
  }

  async updateBandwidthPackagaAutoRenewAttribute(request: UpdateBandwidthPackagaAutoRenewAttributeRequest): Promise<UpdateBandwidthPackagaAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBandwidthPackagaAutoRenewAttributeWithOptions(request, runtime);
  }

  async updateBandwidthPackageWithOptions(request: UpdateBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBandwidthPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.bandwidthPackageId)) {
      query["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.bandwidthType)) {
      query["BandwidthType"] = request.bandwidthType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
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
      action: "UpdateBandwidthPackage",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBandwidthPackageResponse>(await this.callApi(params, req, runtime), new UpdateBandwidthPackageResponse({}));
  }

  async updateBandwidthPackage(request: UpdateBandwidthPackageRequest): Promise<UpdateBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBandwidthPackageWithOptions(request, runtime);
  }

  async updateBasicAcceleratorWithOptions(request: UpdateBasicAcceleratorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBasicAcceleratorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
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
      action: "UpdateBasicAccelerator",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBasicAcceleratorResponse>(await this.callApi(params, req, runtime), new UpdateBasicAcceleratorResponse({}));
  }

  async updateBasicAccelerator(request: UpdateBasicAcceleratorRequest): Promise<UpdateBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBasicAcceleratorWithOptions(request, runtime);
  }

  async updateBasicEndpointGroupWithOptions(request: UpdateBasicEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBasicEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpointAddress)) {
      query["EndpointAddress"] = request.endpointAddress;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
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
      action: "UpdateBasicEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBasicEndpointGroupResponse>(await this.callApi(params, req, runtime), new UpdateBasicEndpointGroupResponse({}));
  }

  async updateBasicEndpointGroup(request: UpdateBasicEndpointGroupRequest): Promise<UpdateBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBasicEndpointGroupWithOptions(request, runtime);
  }

  async updateEndpointGroupWithOptions(request: UpdateEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!Util.isUnset(request.endpointRequestProtocol)) {
      query["EndpointRequestProtocol"] = request.endpointRequestProtocol;
    }

    if (!Util.isUnset(request.healthCheckEnabled)) {
      query["HealthCheckEnabled"] = request.healthCheckEnabled;
    }

    if (!Util.isUnset(request.healthCheckIntervalSeconds)) {
      query["HealthCheckIntervalSeconds"] = request.healthCheckIntervalSeconds;
    }

    if (!Util.isUnset(request.healthCheckPath)) {
      query["HealthCheckPath"] = request.healthCheckPath;
    }

    if (!Util.isUnset(request.healthCheckPort)) {
      query["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!Util.isUnset(request.healthCheckProtocol)) {
      query["HealthCheckProtocol"] = request.healthCheckProtocol;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.portOverrides)) {
      query["PortOverrides"] = request.portOverrides;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.thresholdCount)) {
      query["ThresholdCount"] = request.thresholdCount;
    }

    if (!Util.isUnset(request.trafficPercentage)) {
      query["TrafficPercentage"] = request.trafficPercentage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEndpointGroupResponse>(await this.callApi(params, req, runtime), new UpdateEndpointGroupResponse({}));
  }

  async updateEndpointGroup(request: UpdateEndpointGroupRequest): Promise<UpdateEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupWithOptions(request, runtime);
  }

  async updateEndpointGroupAttributeWithOptions(request: UpdateEndpointGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
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
      action: "UpdateEndpointGroupAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEndpointGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateEndpointGroupAttributeResponse({}));
  }

  async updateEndpointGroupAttribute(request: UpdateEndpointGroupAttributeRequest): Promise<UpdateEndpointGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupAttributeWithOptions(request, runtime);
  }

  async updateEndpointGroupsWithOptions(request: UpdateEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEndpointGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endpointGroupConfigurations)) {
      query["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEndpointGroupsResponse>(await this.callApi(params, req, runtime), new UpdateEndpointGroupsResponse({}));
  }

  async updateEndpointGroups(request: UpdateEndpointGroupsRequest): Promise<UpdateEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupsWithOptions(request, runtime);
  }

  async updateForwardingRulesWithOptions(request: UpdateForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateForwardingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forwardingRules)) {
      query["ForwardingRules"] = request.forwardingRules;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateForwardingRules",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateForwardingRulesResponse>(await this.callApi(params, req, runtime), new UpdateForwardingRulesResponse({}));
  }

  async updateForwardingRules(request: UpdateForwardingRulesRequest): Promise<UpdateForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateForwardingRulesWithOptions(request, runtime);
  }

  async updateIpSetWithOptions(request: UpdateIpSetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIpSetResponse>(await this.callApi(params, req, runtime), new UpdateIpSetResponse({}));
  }

  async updateIpSet(request: UpdateIpSetRequest): Promise<UpdateIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpSetWithOptions(request, runtime);
  }

  async updateIpSetsWithOptions(request: UpdateIpSetsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIpSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipSets)) {
      query["IpSets"] = request.ipSets;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIpSets",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIpSetsResponse>(await this.callApi(params, req, runtime), new UpdateIpSetsResponse({}));
  }

  async updateIpSets(request: UpdateIpSetsRequest): Promise<UpdateIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpSetsWithOptions(request, runtime);
  }

  async updateListenerWithOptions(request: UpdateListenerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backendPorts)) {
      query["BackendPorts"] = request.backendPorts;
    }

    if (!Util.isUnset(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.clientAffinity)) {
      query["ClientAffinity"] = request.clientAffinity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.portRanges)) {
      query["PortRanges"] = request.portRanges;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.proxyProtocol)) {
      query["ProxyProtocol"] = request.proxyProtocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset($tea.toMap(request.XForwardedForConfig))) {
      query["XForwardedForConfig"] = request.XForwardedForConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateListenerResponse>(await this.callApi(params, req, runtime), new UpdateListenerResponse({}));
  }

  async updateListener(request: UpdateListenerRequest): Promise<UpdateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerWithOptions(request, runtime);
  }

}
