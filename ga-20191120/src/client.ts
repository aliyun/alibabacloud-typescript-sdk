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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddEntriesToAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateAclsWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateAdditionalCertificatesWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachDdosToAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachLogStoreToEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BandwidthPackageAddAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BandwidthPackageRemoveAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ChangeResourceGroupRequest extends $tea.Model {
  clientToken?: string;
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigEndpointProbeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  bandwidthBillingType?: string;
  clientToken?: string;
  dryRun?: boolean;
  duration?: number;
  instanceChargeType?: string;
  ipSetConfig?: CreateAcceleratorRequestIpSetConfig;
  name?: string;
  pricingCycle?: string;
  promotionOptionNo?: string;
  regionId?: string;
  resourceGroupId?: string;
  spec?: string;
  tag?: CreateAcceleratorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidthBillingType: 'BandwidthBillingType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      duration: 'Duration',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidthBillingType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      duration: 'number',
      instanceChargeType: 'string',
      ipSetConfig: CreateAcceleratorRequestIpSetConfig,
      name: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': CreateAcceleratorRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  tag?: CreateAclRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
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
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateAclRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  promotionOptionNo?: string;
  ratio?: number;
  regionId?: string;
  resourceGroupId?: string;
  tag?: CreateBandwidthPackageRequestTag[];
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
      promotionOptionNo: 'PromotionOptionNo',
      ratio: 'Ratio',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
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
      promotionOptionNo: 'string',
      ratio: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateBandwidthPackageRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateBasicAccelerateIpRequest extends $tea.Model {
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

export class CreateBasicAccelerateIpResponseBody extends $tea.Model {
  accelerateIpAddress?: string;
  accelerateIpId?: string;
  acceleratorId?: string;
  ipSetId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpAddress: 'AccelerateIpAddress',
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      ipSetId: 'IpSetId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpAddress: 'string',
      accelerateIpId: 'string',
      acceleratorId: 'string',
      ipSetId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicAccelerateIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicAccelerateIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpEndpointRelationRequest extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  clientToken?: string;
  endpointId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      clientToken: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpEndpointRelationResponseBody extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  endpointId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      endpointId: 'EndpointId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      endpointId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpEndpointRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicAccelerateIpEndpointRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicAccelerateIpEndpointRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpEndpointRelationsRequest extends $tea.Model {
  accelerateIpEndpointRelations?: CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations[];
  acceleratorId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpEndpointRelations: 'AccelerateIpEndpointRelations',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpEndpointRelations: { 'type': 'array', 'itemType': CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations },
      acceleratorId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAccelerateIpEndpointRelationsResponseBody extends $tea.Model {
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

export class CreateBasicAccelerateIpEndpointRelationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicAccelerateIpEndpointRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicAccelerateIpEndpointRelationsResponseBody,
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
  bandwidthBillingType?: string;
  chargeType?: string;
  clientToken?: string;
  dryRun?: boolean;
  duration?: number;
  pricingCycle?: string;
  promotionOptionNo?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: CreateBasicAcceleratorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoUseCoupon: 'AutoUseCoupon',
      bandwidthBillingType: 'BandwidthBillingType',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoUseCoupon: 'string',
      bandwidthBillingType: 'string',
      chargeType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateBasicAcceleratorRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateBasicEndpointRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  endpointAddress?: string;
  endpointGroupId?: string;
  endpointSubAddress?: string;
  endpointSubAddressType?: string;
  endpointType?: string;
  endpointZoneId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointResponseBody extends $tea.Model {
  endpointGroupId?: string;
  endpointId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicEndpointResponseBody,
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
  endpointSubAddress?: string;
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
      endpointSubAddress: 'EndpointSubAddress',
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
      endpointSubAddress: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateBasicEndpointsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  endpointGroupId?: string;
  endpoints?: CreateBasicEndpointsRequestEndpoints[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpoints: 'Endpoints',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      endpointGroupId: 'string',
      endpoints: { 'type': 'array', 'itemType': CreateBasicEndpointsRequestEndpoints },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointsResponseBody extends $tea.Model {
  endpointGroupId?: string;
  endpoints?: CreateBasicEndpointsResponseBodyEndpoints[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpoints: 'Endpoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpoints: { 'type': 'array', 'itemType': CreateBasicEndpointsResponseBodyEndpoints },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBasicEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicIpSetRequest extends $tea.Model {
  accelerateRegionId?: string;
  acceleratorId?: string;
  bandwidth?: number;
  clientToken?: string;
  ispType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ispType: 'IspType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      acceleratorId: 'string',
      bandwidth: 'number',
      clientToken: 'string',
      ispType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateCustomRoutingEndpointGroupDestinationsRequest extends $tea.Model {
  clientToken?: string;
  destinationConfigurations?: CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations[];
  dryRun?: boolean;
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationConfigurations: 'DestinationConfigurations',
      dryRun: 'DryRun',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations },
      dryRun: 'boolean',
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupDestinationsResponseBody extends $tea.Model {
  destinationIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationIds: 'DestinationIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupDestinationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomRoutingEndpointGroupDestinationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomRoutingEndpointGroupDestinationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations[];
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
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations },
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsResponseBody extends $tea.Model {
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

export class CreateCustomRoutingEndpointGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomRoutingEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomRoutingEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointTrafficPoliciesRequest extends $tea.Model {
  clientToken?: string;
  endpointId?: string;
  policyConfigurations?: CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      policyConfigurations: 'PolicyConfigurations',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointId: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointTrafficPoliciesResponseBody extends $tea.Model {
  policyIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointTrafficPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomRoutingEndpointTrafficPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomRoutingEndpointTrafficPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsRequest extends $tea.Model {
  clientToken?: string;
  endpointConfigurations?: CreateCustomRoutingEndpointsRequestEndpointConfigurations[];
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointsRequestEndpointConfigurations },
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsResponseBody extends $tea.Model {
  endpointIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointIds: 'EndpointIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomRoutingEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomRoutingEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  acceleratorIds?: string[];
  domain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorIds: 'AcceleratorIds',
      domain: 'Domain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorIds: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
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
  endpointProtocolVersion?: string;
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
  tag?: CreateEndpointGroupRequestTag[];
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
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
      tag: 'Tag',
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
      endpointProtocolVersion: 'string',
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
      tag: { 'type': 'array', 'itemType': CreateEndpointGroupRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  customRoutingEndpointGroupConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurations[];
  description?: string;
  endpointGroupConfigurations?: CreateListenerRequestEndpointGroupConfigurations[];
  httpVersion?: string;
  idleTimeout?: number;
  name?: string;
  portRanges?: CreateListenerRequestPortRanges[];
  protocol?: string;
  proxyProtocol?: boolean;
  regionId?: string;
  requestTimeout?: number;
  securityPolicyId?: string;
  type?: string;
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      clientToken: 'ClientToken',
      customRoutingEndpointGroupConfigurations: 'CustomRoutingEndpointGroupConfigurations',
      description: 'Description',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      type: 'Type',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      clientAffinity: 'string',
      clientToken: 'string',
      customRoutingEndpointGroupConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurations },
      description: 'string',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestEndpointGroupConfigurations },
      httpVersion: 'string',
      idleTimeout: 'number',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateListenerRequestPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      regionId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      type: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteBasicAccelerateIpRequest extends $tea.Model {
  accelerateIpId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAccelerateIpResponseBody extends $tea.Model {
  accelerateIpId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAccelerateIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBasicAccelerateIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBasicAccelerateIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAccelerateIpEndpointRelationRequest extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  clientToken?: string;
  endpointId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      clientToken: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAccelerateIpEndpointRelationResponseBody extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  endpointId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      endpointId: 'EndpointId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      endpointId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicAccelerateIpEndpointRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBasicAccelerateIpEndpointRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBasicAccelerateIpEndpointRelationResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteBasicEndpointRequest extends $tea.Model {
  clientToken?: string;
  endpointGroupId?: string;
  endpointId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBasicEndpointResponseBody extends $tea.Model {
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

export class DeleteBasicEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBasicEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBasicEndpointResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteCustomRoutingEndpointGroupDestinationsRequest extends $tea.Model {
  clientToken?: string;
  destinationIds?: string[];
  dryRun?: boolean;
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationIds: 'DestinationIds',
      dryRun: 'DryRun',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationIds: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointGroupDestinationsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointGroupDestinationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomRoutingEndpointGroupDestinationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomRoutingEndpointGroupDestinationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointGroupsRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  dryRun?: boolean;
  endpointGroupIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupIds: 'EndpointGroupIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
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

export class DeleteCustomRoutingEndpointGroupsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomRoutingEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomRoutingEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointTrafficPoliciesRequest extends $tea.Model {
  clientToken?: string;
  endpointId?: string;
  policyIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      policyIds: 'PolicyIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointId: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointTrafficPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointTrafficPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomRoutingEndpointTrafficPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomRoutingEndpointTrafficPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointsRequest extends $tea.Model {
  clientToken?: string;
  endpointGroupId?: string;
  endpointIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointIds: 'EndpointIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
      endpointIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomRoutingEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomRoutingEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomRoutingEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainAcceleratorRelationRequest extends $tea.Model {
  acceleratorIds?: string[];
  domain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorIds: 'AcceleratorIds',
      domain: 'Domain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorIds: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainAcceleratorRelationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainAcceleratorRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainAcceleratorRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainAcceleratorRelationResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  bandwidthBillingType?: string;
  basicBandwidthPackage?: DescribeAcceleratorResponseBodyBasicBandwidthPackage;
  cenId?: string;
  createTime?: number;
  crossBorderMode?: string;
  crossBorderStatus?: boolean;
  crossDomainBandwidthPackage?: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage;
  crossPrivateState?: string;
  ddosId?: string;
  description?: string;
  dnsName?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  ipSetConfig?: DescribeAcceleratorResponseBodyIpSetConfig;
  name?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  secondDnsName?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeAcceleratorResponseBodyServiceManagedInfos[];
  spec?: string;
  state?: string;
  tags?: DescribeAcceleratorResponseBodyTags[];
  upgradableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossBorderMode: 'CrossBorderMode',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      crossPrivateState: 'CrossPrivateState',
      ddosId: 'DdosId',
      description: 'Description',
      dnsName: 'DnsName',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      secondDnsName: 'SecondDnsName',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      spec: 'Spec',
      state: 'State',
      tags: 'Tags',
      upgradableStatus: 'UpgradableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: DescribeAcceleratorResponseBodyBasicBandwidthPackage,
      cenId: 'string',
      createTime: 'number',
      crossBorderMode: 'string',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: DescribeAcceleratorResponseBodyCrossDomainBandwidthPackage,
      crossPrivateState: 'string',
      ddosId: 'string',
      description: 'string',
      dnsName: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      ipSetConfig: DescribeAcceleratorResponseBodyIpSetConfig,
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      secondDnsName: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeAcceleratorResponseBodyServiceManagedInfos },
      spec: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAcceleratorResponseBodyTags },
      upgradableStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAcceleratorAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeAcceleratorServiceStatusRequest extends $tea.Model {
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

export class DescribeAcceleratorServiceStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  status?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAcceleratorServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAcceleratorServiceStatusResponseBody,
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
      ispCityList: 'IspCityList',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      ispCityList: { 'type': 'array', 'itemType': DescribeApplicationMonitorResponseBodyIspCityList },
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      requestId: 'string',
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

export class DescribeApplicationMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  state?: string;
  tags?: DescribeBandwidthPackageResponseBodyTags[];
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
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBandwidthPackageResponseBodyTags },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBandwidthPackageAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeCommodityRequest extends $tea.Model {
  commodityCode?: string;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityResponseBody extends $tea.Model {
  commodityCode?: string;
  commodityName?: string;
  components?: DescribeCommodityResponseBodyComponents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      components: { 'type': 'array', 'itemType': DescribeCommodityResponseBodyComponents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCommodityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommodityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceRequest extends $tea.Model {
  orders?: DescribeCommodityPriceRequestOrders[];
  promotionOptionNo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      orders: 'Orders',
      promotionOptionNo: 'PromotionOptionNo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orders: { 'type': 'array', 'itemType': DescribeCommodityPriceRequestOrders },
      promotionOptionNo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBody extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  orderDetails?: DescribeCommodityPriceResponseBodyOrderDetails[];
  originalPrice?: number;
  promotions?: DescribeCommodityPriceResponseBodyPromotions[];
  requestId?: string;
  ruleDetails?: DescribeCommodityPriceResponseBodyRuleDetails[];
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderDetails: 'OrderDetails',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      requestId: 'RequestId',
      ruleDetails: 'RuleDetails',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      orderDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyOrderDetails },
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyPromotions },
      requestId: 'string',
      ruleDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyRuleDetails },
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCommodityPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommodityPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndPointTrafficPolicyRequest extends $tea.Model {
  endpointId?: string;
  policyId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndPointTrafficPolicyResponseBody extends $tea.Model {
  acceleratorId?: string;
  address?: string;
  endpoint?: string;
  endpointGroupId?: string;
  endpointId?: string;
  listenerId?: string;
  policyId?: string;
  portRanges?: DescribeCustomRoutingEndPointTrafficPolicyResponseBodyPortRanges[];
  requestId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeCustomRoutingEndPointTrafficPolicyResponseBodyServiceManagedInfos[];
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      policyId: 'PolicyId',
      portRanges: 'PortRanges',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      policyId: 'string',
      portRanges: { 'type': 'array', 'itemType': DescribeCustomRoutingEndPointTrafficPolicyResponseBodyPortRanges },
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndPointTrafficPolicyResponseBodyServiceManagedInfos },
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndPointTrafficPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomRoutingEndPointTrafficPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomRoutingEndPointTrafficPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointRequest extends $tea.Model {
  endpointGroup?: string;
  endpointId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroup: 'EndpointGroup',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroup: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointResponseBody extends $tea.Model {
  acceleratorId?: string;
  endpoint?: string;
  endpointGroupId?: string;
  endpointId?: string;
  listenerId?: string;
  requestId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeCustomRoutingEndpointResponseBodyServiceManagedInfos[];
  state?: string;
  trafficToEndpointPolicy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndpointResponseBodyServiceManagedInfos },
      state: 'string',
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomRoutingEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomRoutingEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupRequest extends $tea.Model {
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

export class DescribeCustomRoutingEndpointGroupResponseBody extends $tea.Model {
  acceleratorId?: string;
  accessLogSwitch?: string;
  description?: string;
  enableAccessLog?: boolean;
  endpointGroupId?: string;
  endpointGroupIpList?: string[];
  endpointGroupRegion?: string;
  endpointGroupUnconfirmedIpList?: string[];
  listenerId?: string;
  name?: string;
  requestId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeCustomRoutingEndpointGroupResponseBodyServiceManagedInfos[];
  slsLogStoreName?: string;
  slsProjectName?: string;
  slsRegion?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogSwitch: 'AccessLogSwitch',
      description: 'Description',
      enableAccessLog: 'EnableAccessLog',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      listenerId: 'ListenerId',
      name: 'Name',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegion: 'SlsRegion',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogSwitch: 'string',
      description: 'string',
      enableAccessLog: 'boolean',
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      name: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndpointGroupResponseBodyServiceManagedInfos },
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegion: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomRoutingEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomRoutingEndpointGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupDestinationsRequest extends $tea.Model {
  destinationId?: string;
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationId: 'DestinationId',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationId: 'string',
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupDestinationsResponseBody extends $tea.Model {
  acceleratorId?: string;
  destinationId?: string;
  endpointGroupId?: string;
  fromPort?: number;
  listenerId?: string;
  protocols?: string[];
  requestId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeCustomRoutingEndpointGroupDestinationsResponseBodyServiceManagedInfos[];
  state?: string;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      destinationId: 'DestinationId',
      endpointGroupId: 'EndpointGroupId',
      fromPort: 'FromPort',
      listenerId: 'ListenerId',
      protocols: 'Protocols',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      destinationId: 'string',
      endpointGroupId: 'string',
      fromPort: 'number',
      listenerId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeCustomRoutingEndpointGroupDestinationsResponseBodyServiceManagedInfos },
      state: 'string',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupDestinationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomRoutingEndpointGroupDestinationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCustomRoutingEndpointGroupDestinationsResponseBody,
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
  endpointProtocolVersion?: string;
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
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeEndpointGroupResponseBodyServiceManagedInfos[];
  slsLogStoreName?: string;
  slsProjectName?: string;
  slsRegion?: string;
  state?: string;
  tags?: DescribeEndpointGroupResponseBodyTags[];
  thresholdCount?: number;
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
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
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegion: 'SlsRegion',
      state: 'State',
      tags: 'Tags',
      thresholdCount: 'ThresholdCount',
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
      endpointProtocolVersion: 'string',
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
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyServiceManagedInfos },
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegion: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyTags },
      thresholdCount: 'number',
      trafficPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  ispType?: string;
  requestId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeIpSetResponseBodyServiceManagedInfos[];
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
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
      ispType: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeIpSetResponseBodyServiceManagedInfos },
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  httpVersion?: string;
  idleTimeout?: number;
  listenerId?: string;
  name?: string;
  portRanges?: DescribeListenerResponseBodyPortRanges[];
  protocol?: string;
  proxyProtocol?: boolean;
  relatedAcls?: DescribeListenerResponseBodyRelatedAcls[];
  requestId?: string;
  requestTimeout?: number;
  securityPolicyId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: DescribeListenerResponseBodyServiceManagedInfos[];
  state?: string;
  type?: string;
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
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      relatedAcls: 'RelatedAcls',
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      type: 'Type',
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
      httpVersion: 'string',
      idleTimeout: 'number',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': DescribeListenerResponseBodyPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      relatedAcls: { 'type': 'array', 'itemType': DescribeListenerResponseBodyRelatedAcls },
      requestId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeListenerResponseBodyServiceManagedInfos },
      state: 'string',
      type: 'string',
      XForwardedForConfig: DescribeListenerResponseBodyXForwardedForConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeLogStoreOfEndpointGroupRequest extends $tea.Model {
  acceleratorId?: string;
  endpointGroupId?: string;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupId: 'string',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreOfEndpointGroupResponseBody extends $tea.Model {
  acceleratorId?: string;
  endpointGroupId?: string;
  listenerId?: string;
  requestId?: string;
  slsLogStoreName?: string;
  slsProjectName?: string;
  slsRegionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegionId: 'SlsRegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupId: 'string',
      listenerId: 'string',
      requestId: 'string',
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreOfEndpointGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogStoreOfEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLogStoreOfEndpointGroupResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachDdosFromAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachLogStoreFromEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateAclsFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DissociateAdditionalCertificatesFromListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  tags?: GetAclResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      aclEntries: 'AclEntries',
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      relatedListeners: 'RelatedListeners',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetAclResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAclResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetBasicAccelerateIpRequest extends $tea.Model {
  accelerateIpId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpResponseBody extends $tea.Model {
  accelerateIpAddress?: string;
  accelerateIpId?: string;
  acceleratorId?: string;
  ipSetId?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpAddress: 'AccelerateIpAddress',
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      ipSetId: 'IpSetId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpAddress: 'string',
      accelerateIpId: 'string',
      acceleratorId: 'string',
      ipSetId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicAccelerateIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicAccelerateIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpEndpointRelationRequest extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  clientToken?: string;
  endpointId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      clientToken: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpEndpointRelationResponseBody extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  endpointAddress?: string;
  endpointId?: string;
  endpointName?: string;
  endpointSubAddress?: string;
  endpointSubAddressType?: string;
  endpointType?: string;
  endpointZoneId?: string;
  ipAddress?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      endpointAddress: 'EndpointAddress',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      ipAddress: 'IpAddress',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      endpointAddress: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      ipAddress: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpEndpointRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicAccelerateIpEndpointRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicAccelerateIpEndpointRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpIdleCountRequest extends $tea.Model {
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

export class GetBasicAccelerateIpIdleCountResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAccelerateIpIdleCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicAccelerateIpIdleCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicAccelerateIpIdleCountResponseBody,
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
  bandwidthBillingType?: string;
  basicBandwidthPackage?: GetBasicAcceleratorResponseBodyBasicBandwidthPackage;
  basicEndpointGroupId?: string;
  basicIpSetId?: string;
  cenId?: string;
  createTime?: number;
  crossBorderStatus?: boolean;
  crossDomainBandwidthPackage?: GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage;
  crossPrivateState?: string;
  description?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  name?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  state?: string;
  tags?: GetBasicAcceleratorResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      basicEndpointGroupId: 'BasicEndpointGroupId',
      basicIpSetId: 'BasicIpSetId',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      crossPrivateState: 'CrossPrivateState',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: GetBasicAcceleratorResponseBodyBasicBandwidthPackage,
      basicEndpointGroupId: 'string',
      basicIpSetId: 'string',
      cenId: 'string',
      createTime: 'number',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: GetBasicAcceleratorResponseBodyCrossDomainBandwidthPackage,
      crossPrivateState: 'string',
      description: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      name: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': GetBasicAcceleratorResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicAcceleratorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetBasicEndpointRequest extends $tea.Model {
  clientToken?: string;
  endpointId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicEndpointResponseBody extends $tea.Model {
  acceleratorId?: string;
  endPointId?: string;
  endpointAddress?: string;
  endpointGroupId?: string;
  endpointSubAddress?: string;
  endpointSubAddressType?: string;
  endpointType?: string;
  endpointZoneId?: string;
  name?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endPointId: 'EndPointId',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endPointId: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBasicEndpointResponseBody,
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
  endpointSubAddress?: string;
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
      endpointSubAddress: 'EndpointSubAddress',
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
      endpointSubAddress: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  ispType?: string;
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
      ispType: 'IspType',
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
      ispType: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBasicIpSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetInvalidDomainCountRequest extends $tea.Model {
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

export class GetInvalidDomainCountResponseBody extends $tea.Model {
  invalidDomainCount?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidDomainCount: 'InvalidDomainCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDomainCount: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInvalidDomainCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInvalidDomainCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInvalidDomainCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpsetsBandwidthLimitRequest extends $tea.Model {
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

export class GetIpsetsBandwidthLimitResponseBody extends $tea.Model {
  bandwidthAllocationType?: string;
  bandwidthLimit?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthAllocationType: 'BandwidthAllocationType',
      bandwidthLimit: 'BandwidthLimit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthAllocationType: 'string',
      bandwidthLimit: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpsetsBandwidthLimitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIpsetsBandwidthLimitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIpsetsBandwidthLimitResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSpareIpResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccelerateAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  state?: string;
  tag?: ListAcceleratorsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tag: { 'type': 'array', 'itemType': ListAcceleratorsRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAcceleratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  tag?: ListAclsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      aclName: 'AclName',
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
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
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListAclsRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAclsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationMonitorDetectResultResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableAccelerateAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableBusiRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  resourceGroupId?: string;
  state?: string;
  tag?: ListBandwidthPackagesRequestTag[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tag: { 'type': 'array', 'itemType': ListBandwidthPackagesRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBandwidthPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBandwidthackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListBasicAccelerateIpEndpointRelationsRequest extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  clientToken?: string;
  endpointId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      clientToken: 'string',
      endpointId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAccelerateIpEndpointRelationsResponseBody extends $tea.Model {
  accelerateIpEndpointRelations?: ListBasicAccelerateIpEndpointRelationsResponseBodyAccelerateIpEndpointRelations[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpEndpointRelations: 'AccelerateIpEndpointRelations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpEndpointRelations: { 'type': 'array', 'itemType': ListBasicAccelerateIpEndpointRelationsResponseBodyAccelerateIpEndpointRelations },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAccelerateIpEndpointRelationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBasicAccelerateIpEndpointRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBasicAccelerateIpEndpointRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAccelerateIpsRequest extends $tea.Model {
  accelerateIpAddress?: string;
  accelerateIpId?: string;
  clientToken?: string;
  ipSetId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpAddress: 'AccelerateIpAddress',
      accelerateIpId: 'AccelerateIpId',
      clientToken: 'ClientToken',
      ipSetId: 'IpSetId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpAddress: 'string',
      accelerateIpId: 'string',
      clientToken: 'string',
      ipSetId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAccelerateIpsResponseBody extends $tea.Model {
  accelerateIps?: ListBasicAccelerateIpsResponseBodyAccelerateIps[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accelerateIps: 'AccelerateIps',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIps: { 'type': 'array', 'itemType': ListBasicAccelerateIpsResponseBodyAccelerateIps },
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

export class ListBasicAccelerateIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBasicAccelerateIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBasicAccelerateIpsResponseBody,
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
  resourceGroupId?: string;
  state?: string;
  tag?: ListBasicAcceleratorsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tag: { 'type': 'array', 'itemType': ListBasicAcceleratorsRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBasicAcceleratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListBasicEndpointsRequest extends $tea.Model {
  clientToken?: string;
  endpointGroupId?: string;
  endpointId?: string;
  endpointType?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      endpointType: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicEndpointsResponseBody extends $tea.Model {
  endpoints?: ListBasicEndpointsResponseBodyEndpoints[];
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListBasicEndpointsResponseBodyEndpoints },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBasicEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBasicEndpointsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBusiRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListCommonAreasRequest extends $tea.Model {
  ipVersion?: string;
  isEpg?: boolean;
  isIpSet?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      isEpg: 'IsEpg',
      isIpSet: 'IsIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      isEpg: 'boolean',
      isIpSet: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonAreasResponseBody extends $tea.Model {
  areas?: ListCommonAreasResponseBodyAreas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areas: 'Areas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areas: { 'type': 'array', 'itemType': ListCommonAreasResponseBodyAreas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonAreasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCommonAreasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCommonAreasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupDestinationsRequest extends $tea.Model {
  acceleratorId?: string;
  endpointGroupId?: string;
  fromPort?: number;
  listenerId?: string;
  pageNumber?: number;
  pageSize?: number;
  protocols?: string[];
  regionId?: string;
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
      fromPort: 'FromPort',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocols: 'Protocols',
      regionId: 'RegionId',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupId: 'string',
      fromPort: 'number',
      listenerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupDestinationsResponseBody extends $tea.Model {
  destinations?: ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      destinations: 'Destinations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations },
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

export class ListCustomRoutingEndpointGroupDestinationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomRoutingEndpointGroupDestinationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomRoutingEndpointGroupDestinationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupsRequest extends $tea.Model {
  acceleratorId?: string;
  accessLogSwitch?: string;
  endpointGroupId?: string;
  listenerId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogSwitch: 'AccessLogSwitch',
      endpointGroupId: 'EndpointGroupId',
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

export class ListCustomRoutingEndpointGroupsResponseBody extends $tea.Model {
  endpointGroups?: ListCustomRoutingEndpointGroupsResponseBodyEndpointGroups[];
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
      endpointGroups: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupsResponseBodyEndpointGroups },
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

export class ListCustomRoutingEndpointGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomRoutingEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomRoutingEndpointGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointTrafficPoliciesRequest extends $tea.Model {
  acceleratorId?: string;
  address?: string;
  endpointGroupId?: string;
  endpointId?: string;
  listenerId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
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

export class ListCustomRoutingEndpointTrafficPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policies?: ListCustomRoutingEndpointTrafficPoliciesResponseBodyPolicies[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': ListCustomRoutingEndpointTrafficPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointTrafficPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomRoutingEndpointTrafficPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomRoutingEndpointTrafficPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointsRequest extends $tea.Model {
  acceleratorId?: string;
  endpointGroupId?: string;
  listenerId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupId: 'string',
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

export class ListCustomRoutingEndpointsResponseBody extends $tea.Model {
  endpoints?: ListCustomRoutingEndpointsResponseBodyEndpoints[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListCustomRoutingEndpointsResponseBodyEndpoints },
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

export class ListCustomRoutingEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomRoutingEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomRoutingEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsRequest extends $tea.Model {
  acceleratorId?: string;
  endpointGroupId?: string;
  listenerId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupId: 'EndpointGroupId',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupId: 'string',
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

export class ListCustomRoutingPortMappingsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  portMappings?: ListCustomRoutingPortMappingsResponseBodyPortMappings[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portMappings: 'PortMappings',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      portMappings: { 'type': 'array', 'itemType': ListCustomRoutingPortMappingsResponseBodyPortMappings },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomRoutingPortMappingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomRoutingPortMappingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsByDestinationRequest extends $tea.Model {
  destinationAddress?: string;
  endpointId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationAddress: 'DestinationAddress',
      endpointId: 'EndpointId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationAddress: 'string',
      endpointId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsByDestinationResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  portMappings?: ListCustomRoutingPortMappingsByDestinationResponseBodyPortMappings[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portMappings: 'PortMappings',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      portMappings: { 'type': 'array', 'itemType': ListCustomRoutingPortMappingsByDestinationResponseBodyPortMappings },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsByDestinationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomRoutingPortMappingsByDestinationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomRoutingPortMappingsByDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
  acceleratorId?: string;
  domain?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      domain: 'Domain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      domain: 'string',
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

export class ListDomainsResponseBody extends $tea.Model {
  domains?: ListDomainsResponseBodyDomains[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomains },
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

export class ListDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupIpAddressCidrBlocksRequest extends $tea.Model {
  acceleratorId?: string;
  endpointGroupRegion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointGroupRegion: 'EndpointGroupRegion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointGroupRegion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupIpAddressCidrBlocksResponseBody extends $tea.Model {
  endpointGroupRegion?: string;
  ipAddressCidrBlocks?: string[];
  requestId?: string;
  resourceGroupId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupRegion: 'EndpointGroupRegion',
      ipAddressCidrBlocks: 'IpAddressCidrBlocks',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupRegion: 'string',
      ipAddressCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resourceGroupId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupIpAddressCidrBlocksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEndpointGroupIpAddressCidrBlocksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEndpointGroupIpAddressCidrBlocksResponseBody,
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
  tag?: ListEndpointGroupsRequestTag[];
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': ListEndpointGroupsRequestTag },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListIspTypesRequest extends $tea.Model {
  acceleratorId?: string;
  acceleratorType?: string;
  businessRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      acceleratorType: 'AcceleratorType',
      businessRegionId: 'BusinessRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      acceleratorType: 'string',
      businessRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIspTypesResponseBody extends $tea.Model {
  ispTypeList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ispTypeList: 'IspTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispTypeList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIspTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIspTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIspTypesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListListenerCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSpareIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSystemSecurityPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListTagResourcesRequest extends $tea.Model {
  clientToken?: string;
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
      totalCount: 'number',
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

export class OpenAcceleratorServiceRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAcceleratorServiceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  orderId?: number;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAcceleratorServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenAcceleratorServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenAcceleratorServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCrossBorderApprovalStatusRequest extends $tea.Model {
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

export class QueryCrossBorderApprovalStatusResponseBody extends $tea.Model {
  approvalStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCrossBorderApprovalStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCrossBorderApprovalStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCrossBorderApprovalStatusResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveEntriesFromAclResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  acceleratorId?: string;
  bandwidthPackageId?: string;
  regionId?: string;
  targetBandwidthPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthPackageId: 'BandwidthPackageId',
      regionId: 'RegionId',
      targetBandwidthPackageId: 'TargetBandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReplaceBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class TagResourcesRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

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
  all?: boolean;
  clientToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
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
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAcceleratorAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAcceleratorConfirmResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateAcceleratorCrossBorderModeRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  crossBorderMode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      crossBorderMode: 'CrossBorderMode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      crossBorderMode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorCrossBorderModeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorCrossBorderModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAcceleratorCrossBorderModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAcceleratorCrossBorderModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorCrossBorderStatusRequest extends $tea.Model {
  acceleratorId?: string;
  clientToken?: string;
  crossBorderStatus?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      crossBorderStatus: 'CrossBorderStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      crossBorderStatus: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorCrossBorderStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAcceleratorCrossBorderStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAcceleratorCrossBorderStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAcceleratorCrossBorderStatusResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAclAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateAdditionalCertificateWithListenerRequest extends $tea.Model {
  acceleratorId?: string;
  certificateId?: string;
  clientToken?: string;
  domain?: string;
  dryRun?: boolean;
  listenerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      certificateId: 'CertificateId',
      clientToken: 'ClientToken',
      domain: 'Domain',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      certificateId: 'string',
      clientToken: 'string',
      domain: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdditionalCertificateWithListenerResponseBody extends $tea.Model {
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

export class UpdateAdditionalCertificateWithListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAdditionalCertificateWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAdditionalCertificateWithListenerResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBandwidthPackagaAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBandwidthPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBasicAcceleratorResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateBasicEndpointRequest extends $tea.Model {
  clientToken?: string;
  endpointGroupId?: string;
  endpointId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicEndpointResponseBody extends $tea.Model {
  endpointGroupId?: string;
  endpointId?: string;
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpointId: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBasicEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBasicEndpointResponseBody,
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
  endpointSubAddress?: string;
  endpointType?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointSubAddress: 'EndpointSubAddress',
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
      endpointSubAddress: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBasicEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateBasicIpSetRequest extends $tea.Model {
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

export class UpdateBasicIpSetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBasicIpSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBasicIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBasicIpSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointGroupAttributeRequest extends $tea.Model {
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

export class UpdateCustomRoutingEndpointGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointGroupAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomRoutingEndpointGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomRoutingEndpointGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointGroupDestinationsRequest extends $tea.Model {
  clientToken?: string;
  destinationConfigurations?: UpdateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations[];
  dryRun?: boolean;
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationConfigurations: 'DestinationConfigurations',
      dryRun: 'DryRun',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations },
      dryRun: 'boolean',
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointGroupDestinationsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointGroupDestinationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomRoutingEndpointGroupDestinationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomRoutingEndpointGroupDestinationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointTrafficPoliciesRequest extends $tea.Model {
  clientToken?: string;
  endpointId?: string;
  policyConfigurations?: UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointId: 'EndpointId',
      policyConfigurations: 'PolicyConfigurations',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointId: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointTrafficPoliciesResponseBody extends $tea.Model {
  policyIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointTrafficPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomRoutingEndpointTrafficPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomRoutingEndpointTrafficPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointsRequest extends $tea.Model {
  clientToken?: string;
  endpointConfigurations?: UpdateCustomRoutingEndpointsRequestEndpointConfigurations[];
  endpointGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointsRequestEndpointConfigurations },
      endpointGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointsResponseBody extends $tea.Model {
  endpointIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointIds: 'EndpointIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomRoutingEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomRoutingEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRequest extends $tea.Model {
  domain?: string;
  regionId?: string;
  targetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regionId: 'RegionId',
      targetDomain: 'TargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regionId: 'string',
      targetDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainStateRequest extends $tea.Model {
  domain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainStateResponseBody extends $tea.Model {
  domain?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainStateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDomainStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDomainStateResponseBody,
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
  endpointProtocolVersion?: string;
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
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
      endpointProtocolVersion: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEndpointGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEndpointGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEndpointGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateForwardingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpSetResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIpSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  httpVersion?: string;
  idleTimeout?: number;
  listenerId?: string;
  name?: string;
  portRanges?: UpdateListenerRequestPortRanges[];
  protocol?: string;
  proxyProtocol?: string;
  regionId?: string;
  requestTimeout?: number;
  securityPolicyId?: string;
  XForwardedForConfig?: UpdateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      clientToken: 'ClientToken',
      description: 'Description',
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
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
      httpVersion: 'string',
      idleTimeout: 'number',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateListenerRequestPortRanges },
      protocol: 'string',
      proxyProtocol: 'string',
      regionId: 'string',
      requestTimeout: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateServiceManagedControlRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  serviceManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      serviceManaged: 'ServiceManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      serviceManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceManagedControlResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceManagedControlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceManagedControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceManagedControlResponseBody,
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

export class CreateAcceleratorRequestTag extends $tea.Model {
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

export class CreateAclRequestTag extends $tea.Model {
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

export class CreateBandwidthPackageRequestTag extends $tea.Model {
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

export class CreateBasicAccelerateIpEndpointRelationsRequestAccelerateIpEndpointRelations extends $tea.Model {
  accelerateIpId?: string;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicAcceleratorRequestTag extends $tea.Model {
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

export class CreateBasicEndpointsRequestEndpoints extends $tea.Model {
  endpointAddress?: string;
  endpointSubAddress?: string;
  endpointSubAddressType?: string;
  endpointType?: string;
  endpointZoneId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointAddress: 'EndpointAddress',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointAddress: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointsResponseBodyEndpoints extends $tea.Model {
  endpointAddress?: string;
  endpointId?: string;
  endpointSubAddress?: string;
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      endpointAddress: 'EndpointAddress',
      endpointId: 'EndpointId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointAddress: 'string',
      endpointId: 'string',
      endpointSubAddress: 'string',
      endpointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations extends $tea.Model {
  fromPort?: number;
  protocols?: string[];
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations extends $tea.Model {
  fromPort?: number;
  protocols?: string[];
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges extends $tea.Model {
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

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations extends $tea.Model {
  address?: string;
  portRanges?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  policyConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations[];
  trafficToEndpointPolicy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurations extends $tea.Model {
  description?: string;
  destinationConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations[];
  endpointConfigurations?: CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointGroupRegion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationConfigurations: 'DestinationConfigurations',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupRegion: 'EndpointGroupRegion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsDestinationConfigurations },
      endpointConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupRegion: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges extends $tea.Model {
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

export class CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations extends $tea.Model {
  address?: string;
  portRanges?: CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges extends $tea.Model {
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

export class CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations extends $tea.Model {
  address?: string;
  portRanges?: CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomRoutingEndpointsRequestEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  policyConfigurations?: CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations[];
  trafficToEndpointPolicy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupRequestEndpointConfigurations extends $tea.Model {
  enableClientIPPreservation?: boolean;
  enableProxyProtocol?: boolean;
  endpoint?: string;
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      subAddress: 'SubAddress',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      enableProxyProtocol: 'boolean',
      endpoint: 'string',
      subAddress: 'string',
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

export class CreateEndpointGroupRequestTag extends $tea.Model {
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      subAddress: 'SubAddress',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      subAddress: 'string',
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsSystemTag extends $tea.Model {
  key?: string;
  scope?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsTag extends $tea.Model {
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurations extends $tea.Model {
  enableClientIPPreservationProxyProtocol?: boolean;
  enableClientIPPreservationToa?: boolean;
  endpointConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointGroupDescription?: string;
  endpointGroupName?: string;
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointProtocolVersion?: string;
  endpointRequestProtocol?: string;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  portOverrides?: CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  systemTag?: CreateEndpointGroupsRequestEndpointGroupConfigurationsSystemTag[];
  tag?: CreateEndpointGroupsRequestEndpointGroupConfigurationsTag[];
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      portOverrides: 'PortOverrides',
      systemTag: 'SystemTag',
      tag: 'Tag',
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
      endpointProtocolVersion: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      systemTag: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsSystemTag },
      tag: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsTag },
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
  ispType?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipVersion: 'string',
      ispType: 'string',
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
  ispType?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipSetId: 'IpSetId',
      ispType: 'IspType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipSetId: 'string',
      ispType: 'string',
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

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations extends $tea.Model {
  fromPort?: number;
  protocols?: string[];
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges extends $tea.Model {
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

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations extends $tea.Model {
  address?: string;
  portRanges?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  policyConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations[];
  trafficToEndpointPolicy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurations extends $tea.Model {
  description?: string;
  destinationConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations[];
  endpointConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations[];
  endpointGroupRegion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationConfigurations: 'DestinationConfigurations',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupRegion: 'EndpointGroupRegion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations },
      endpointConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupRegion: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations extends $tea.Model {
  endpoint?: string;
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      subAddress: 'SubAddress',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      subAddress: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestEndpointGroupConfigurationsPortOverrides extends $tea.Model {
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

export class CreateListenerRequestEndpointGroupConfigurations extends $tea.Model {
  enableClientIPPreservationProxyProtocol?: boolean;
  enableClientIPPreservationToa?: boolean;
  endpointConfigurations?: CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations[];
  endpointGroupDescription?: string;
  endpointGroupName?: string;
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointProtocolVersion?: string;
  endpointRequestProtocol?: string;
  healthCheckEnabled?: boolean;
  healthCheckIntervalSeconds?: number;
  healthCheckPath?: string;
  healthCheckPort?: number;
  healthCheckProtocol?: string;
  portOverrides?: CreateListenerRequestEndpointGroupConfigurationsPortOverrides[];
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
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
      endpointConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupDescription: 'string',
      endpointGroupName: 'string',
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointProtocolVersion: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateListenerRequestEndpointGroupConfigurationsPortOverrides },
      thresholdCount: 'number',
      trafficPercentage: 'number',
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

export class DescribeAcceleratorResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAcceleratorResponseBodyTags extends $tea.Model {
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

export class DescribeBandwidthPackageResponseBodyTags extends $tea.Model {
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

export class DescribeCommodityResponseBodyComponentsPropertiesPropertyValueList extends $tea.Model {
  orderIndex?: number;
  text?: string;
  tips?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      orderIndex: 'OrderIndex',
      text: 'Text',
      tips: 'Tips',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIndex: 'number',
      text: 'string',
      tips: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityResponseBodyComponentsProperties extends $tea.Model {
  code?: string;
  name?: string;
  propertyValueList?: DescribeCommodityResponseBodyComponentsPropertiesPropertyValueList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      propertyValueList: 'PropertyValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      propertyValueList: { 'type': 'array', 'itemType': DescribeCommodityResponseBodyComponentsPropertiesPropertyValueList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityResponseBodyComponents extends $tea.Model {
  componentCode?: string;
  componentName?: string;
  properties?: DescribeCommodityResponseBodyComponentsProperties[];
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      componentName: 'ComponentName',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      componentName: 'string',
      properties: { 'type': 'array', 'itemType': DescribeCommodityResponseBodyComponentsProperties },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceRequestOrdersComponentsProperties extends $tea.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceRequestOrdersComponents extends $tea.Model {
  componentCode?: string;
  properties?: DescribeCommodityPriceRequestOrdersComponentsProperties[];
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      properties: { 'type': 'array', 'itemType': DescribeCommodityPriceRequestOrdersComponentsProperties },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceRequestOrders extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  components?: DescribeCommodityPriceRequestOrdersComponents[];
  duration?: number;
  orderType?: string;
  pricingCycle?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      components: 'Components',
      duration: 'Duration',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      components: { 'type': 'array', 'itemType': DescribeCommodityPriceRequestOrdersComponents },
      duration: 'number',
      orderType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyOrderDetailsModuleDetails extends $tea.Model {
  discountPrice?: number;
  moduleCode?: string;
  moduleName?: string;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      moduleCode: 'string',
      moduleName: 'string',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyOrderDetailsPromDetails extends $tea.Model {
  finalPromFee?: number;
  optionCode?: string;
  promType?: string;
  promotionId?: string;
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      promType: 'PromType',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalPromFee: 'number',
      optionCode: 'string',
      promType: 'string',
      promotionId: 'string',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyOrderDetails extends $tea.Model {
  commodityCode?: string;
  commodityName?: string;
  discountPrice?: number;
  moduleDetails?: DescribeCommodityPriceResponseBodyOrderDetailsModuleDetails[];
  originalPrice?: number;
  promDetails?: DescribeCommodityPriceResponseBodyOrderDetailsPromDetails[];
  quantity?: number;
  ruleIds?: number[];
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      discountPrice: 'DiscountPrice',
      moduleDetails: 'ModuleDetails',
      originalPrice: 'OriginalPrice',
      promDetails: 'PromDetails',
      quantity: 'Quantity',
      ruleIds: 'RuleIds',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      discountPrice: 'number',
      moduleDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyOrderDetailsModuleDetails },
      originalPrice: 'number',
      promDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyOrderDetailsPromDetails },
      quantity: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyPromotions extends $tea.Model {
  canPromFee?: number;
  optionCode?: string;
  promotionName?: string;
  promotionOptionNo?: string;
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      optionCode: 'OptionCode',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      optionCode: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyRuleDetails extends $tea.Model {
  ruleId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndPointTrafficPolicyResponseBodyPortRanges extends $tea.Model {
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

export class DescribeCustomRoutingEndPointTrafficPolicyResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomRoutingEndpointGroupDestinationsResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyEndpointConfigurations extends $tea.Model {
  enableClientIPPreservation?: boolean;
  enableProxyProtocol?: boolean;
  endpoint?: string;
  probePort?: number;
  probeProtocol?: string;
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
      subAddress: 'SubAddress',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      enableProxyProtocol: 'boolean',
      endpoint: 'string',
      probePort: 'number',
      probeProtocol: 'string',
      subAddress: 'string',
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

export class DescribeEndpointGroupResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyTags extends $tea.Model {
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

export class DescribeIpSetResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
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

export class DescribeListenerResponseBodyServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
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

export class GetAclResponseBodyTags extends $tea.Model {
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

export class GetBasicAcceleratorResponseBodyTags extends $tea.Model {
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

export class ListAcceleratorsRequestTag extends $tea.Model {
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

export class ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcceleratorsResponseBodyAcceleratorsTags extends $tea.Model {
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

export class ListAcceleratorsResponseBodyAccelerators extends $tea.Model {
  acceleratorId?: string;
  bandwidth?: number;
  bandwidthBillingType?: string;
  basicBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  cenId?: string;
  createTime?: number;
  crossBorderMode?: string;
  crossBorderStatus?: boolean;
  crossDomainBandwidthPackage?: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  ddosId?: string;
  description?: string;
  dnsName?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  ipSetConfig?: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  secondDnsName?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos[];
  spec?: string;
  state?: string;
  tags?: ListAcceleratorsResponseBodyAcceleratorsTags[];
  type?: string;
  upgradableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidth: 'Bandwidth',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      cenId: 'CenId',
      createTime: 'CreateTime',
      crossBorderMode: 'CrossBorderMode',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      ddosId: 'DdosId',
      description: 'Description',
      dnsName: 'DnsName',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipSetConfig: 'IpSetConfig',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondDnsName: 'SecondDnsName',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      spec: 'Spec',
      state: 'State',
      tags: 'Tags',
      type: 'Type',
      upgradableStatus: 'UpgradableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidth: 'number',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      cenId: 'string',
      createTime: 'number',
      crossBorderMode: 'string',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: ListAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
      ddosId: 'string',
      description: 'string',
      dnsName: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      ipSetConfig: ListAcceleratorsResponseBodyAcceleratorsIpSetConfig,
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondDnsName: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAcceleratorsServiceManagedInfos },
      spec: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListAcceleratorsResponseBodyAcceleratorsTags },
      type: 'string',
      upgradableStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclsRequestTag extends $tea.Model {
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

export class ListAclsResponseBodyAclsTags extends $tea.Model {
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

export class ListAclsResponseBodyAcls extends $tea.Model {
  aclId?: string;
  aclName?: string;
  aclStatus?: string;
  addressIPVersion?: string;
  resourceGroupId?: string;
  tags?: ListAclsResponseBodyAclsTags[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      aclStatus: 'AclStatus',
      addressIPVersion: 'AddressIPVersion',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      aclStatus: 'string',
      addressIPVersion: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListAclsResponseBodyAclsTags },
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
  chinaMainland?: boolean;
  ispTypeList?: string[];
  localName?: string;
  multiAz?: boolean;
  regionId?: string;
  supportIpv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      chinaMainland: 'ChinaMainland',
      ispTypeList: 'IspTypeList',
      localName: 'LocalName',
      multiAz: 'MultiAz',
      regionId: 'RegionId',
      supportIpv6: 'SupportIpv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chinaMainland: 'boolean',
      ispTypeList: { 'type': 'array', 'itemType': 'string' },
      localName: 'string',
      multiAz: 'boolean',
      regionId: 'string',
      supportIpv6: 'boolean',
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
  chinaMainland?: boolean;
  localName?: string;
  pop?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chinaMainland: 'ChinaMainland',
      localName: 'LocalName',
      pop: 'Pop',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chinaMainland: 'boolean',
      localName: 'string',
      pop: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesRequestTag extends $tea.Model {
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

export class ListBandwidthPackagesResponseBodyBandwidthPackagesTags extends $tea.Model {
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
  resourceGroupId?: string;
  state?: string;
  tags?: ListBandwidthPackagesResponseBodyBandwidthPackagesTags[];
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
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListBandwidthPackagesResponseBodyBandwidthPackagesTags },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthackagesResponseBodyBandwidthPackagesTags extends $tea.Model {
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
  resourceGroupId?: string;
  state?: string;
  tags?: ListBandwidthackagesResponseBodyBandwidthPackagesTags[];
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
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListBandwidthackagesResponseBodyBandwidthPackagesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAccelerateIpEndpointRelationsResponseBodyAccelerateIpEndpointRelations extends $tea.Model {
  accelerateIpId?: string;
  acceleratorId?: string;
  endpointAddress?: string;
  endpointId?: string;
  endpointName?: string;
  endpointSubAddress?: string;
  endpointSubAddressType?: string;
  endpointType?: string;
  endpointZoneId?: string;
  ipAddress?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      endpointAddress: 'EndpointAddress',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      ipAddress: 'IpAddress',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      endpointAddress: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      ipAddress: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAccelerateIpsResponseBodyAccelerateIps extends $tea.Model {
  accelerateIpAddress?: string;
  accelerateIpId?: string;
  acceleratorId?: string;
  ipSetId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpAddress: 'AccelerateIpAddress',
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      ipSetId: 'IpSetId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpAddress: 'string',
      accelerateIpId: 'string',
      acceleratorId: 'string',
      ipSetId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicAcceleratorsRequestTag extends $tea.Model {
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

export class ListBasicAcceleratorsResponseBodyAcceleratorsTags extends $tea.Model {
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

export class ListBasicAcceleratorsResponseBodyAccelerators extends $tea.Model {
  acceleratorId?: string;
  bandwidthBillingType?: string;
  basicBandwidthPackage?: ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage;
  basicEndpointGroupId?: string;
  basicIpSetId?: string;
  createTime?: number;
  crossBorderStatus?: boolean;
  crossDomainBandwidthPackage?: ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage;
  description?: string;
  expiredTime?: number;
  instanceChargeType?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  state?: string;
  tags?: ListBasicAcceleratorsResponseBodyAcceleratorsTags[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      bandwidthBillingType: 'BandwidthBillingType',
      basicBandwidthPackage: 'BasicBandwidthPackage',
      basicEndpointGroupId: 'BasicEndpointGroupId',
      basicIpSetId: 'BasicIpSetId',
      createTime: 'CreateTime',
      crossBorderStatus: 'CrossBorderStatus',
      crossDomainBandwidthPackage: 'CrossDomainBandwidthPackage',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      bandwidthBillingType: 'string',
      basicBandwidthPackage: ListBasicAcceleratorsResponseBodyAcceleratorsBasicBandwidthPackage,
      basicEndpointGroupId: 'string',
      basicIpSetId: 'string',
      createTime: 'number',
      crossBorderStatus: 'boolean',
      crossDomainBandwidthPackage: ListBasicAcceleratorsResponseBodyAcceleratorsCrossDomainBandwidthPackage,
      description: 'string',
      expiredTime: 'number',
      instanceChargeType: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListBasicAcceleratorsResponseBodyAcceleratorsTags },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBasicEndpointsResponseBodyEndpoints extends $tea.Model {
  acceleratorId?: string;
  endpointAddress?: string;
  endpointGroupId?: string;
  endpointId?: string;
  endpointSubAddress?: string;
  endpointSubAddressType?: string;
  endpointType?: string;
  endpointZoneId?: string;
  name?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
      state: 'string',
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

export class ListCommonAreasResponseBodyAreasRegionList extends $tea.Model {
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

export class ListCommonAreasResponseBodyAreas extends $tea.Model {
  areaId?: string;
  localName?: string;
  regionList?: ListCommonAreasResponseBodyAreasRegionList[];
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
      regionList: { 'type': 'array', 'itemType': ListCommonAreasResponseBodyAreasRegionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinations extends $tea.Model {
  acceleratorId?: string;
  destinationId?: string;
  endpointGroupId?: string;
  fromPort?: number;
  listenerId?: string;
  protocols?: string[];
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos[];
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      destinationId: 'DestinationId',
      endpointGroupId: 'EndpointGroupId',
      fromPort: 'FromPort',
      listenerId: 'ListenerId',
      protocols: 'Protocols',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      destinationId: 'string',
      endpointGroupId: 'string',
      fromPort: 'number',
      listenerId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupDestinationsResponseBodyDestinationsServiceManagedInfos },
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointGroupsResponseBodyEndpointGroups extends $tea.Model {
  acceleratorId?: string;
  description?: string;
  endpointGroupId?: string;
  endpointGroupIpList?: string[];
  endpointGroupRegion?: string;
  endpointGroupUnconfirmedIpList?: string[];
  listenerId?: string;
  name?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListCustomRoutingEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos[];
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      description: 'Description',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      listenerId: 'ListenerId',
      name: 'Name',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      description: 'string',
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      name: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos },
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesPortRanges extends $tea.Model {
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

export class ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointTrafficPoliciesResponseBodyPolicies extends $tea.Model {
  acceleratorId?: string;
  address?: string;
  endpointGroupId?: string;
  endpointId?: string;
  listenerId?: string;
  policyId?: string;
  portRanges?: ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesPortRanges[];
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesServiceManagedInfos[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      policyId: 'PolicyId',
      portRanges: 'PortRanges',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      policyId: 'string',
      portRanges: { 'type': 'array', 'itemType': ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesPortRanges },
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointTrafficPoliciesResponseBodyPoliciesServiceManagedInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointsResponseBodyEndpointsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingEndpointsResponseBodyEndpoints extends $tea.Model {
  acceleratorId?: string;
  endpoint?: string;
  endpointGroupId?: string;
  endpointId?: string;
  listenerId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListCustomRoutingEndpointsResponseBodyEndpointsServiceManagedInfos[];
  trafficToEndpointPolicy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpoint: 'Endpoint',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpoint: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListCustomRoutingEndpointsResponseBodyEndpointsServiceManagedInfos },
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsResponseBodyPortMappingsDestinationSocketAddress extends $tea.Model {
  ipAddress?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsResponseBodyPortMappings extends $tea.Model {
  acceleratorId?: string;
  acceleratorPort?: number;
  destinationSocketAddress?: ListCustomRoutingPortMappingsResponseBodyPortMappingsDestinationSocketAddress;
  destinationTrafficState?: string;
  endpointGroupId?: string;
  endpointGroupRegion?: string;
  endpointId?: string;
  listenerId?: string;
  protocols?: string[];
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      acceleratorPort: 'AcceleratorPort',
      destinationSocketAddress: 'DestinationSocketAddress',
      destinationTrafficState: 'DestinationTrafficState',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      protocols: 'Protocols',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      acceleratorPort: 'number',
      destinationSocketAddress: ListCustomRoutingPortMappingsResponseBodyPortMappingsDestinationSocketAddress,
      destinationTrafficState: 'string',
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointId: 'string',
      listenerId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      vswitch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsByDestinationResponseBodyPortMappingsDestinationSocketAddress extends $tea.Model {
  ipAddress?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomRoutingPortMappingsByDestinationResponseBodyPortMappings extends $tea.Model {
  acceleratorId?: string;
  acceleratorPort?: number;
  destinationSocketAddress?: ListCustomRoutingPortMappingsByDestinationResponseBodyPortMappingsDestinationSocketAddress;
  destinationTrafficState?: string;
  endpointGroupId?: string;
  endpointGroupRegion?: string;
  endpointId?: string;
  listenerId?: string;
  protocols?: string[];
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      acceleratorPort: 'AcceleratorPort',
      destinationSocketAddress: 'DestinationSocketAddress',
      destinationTrafficState: 'DestinationTrafficState',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      protocols: 'Protocols',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      acceleratorPort: 'number',
      destinationSocketAddress: ListCustomRoutingPortMappingsByDestinationResponseBodyPortMappingsDestinationSocketAddress,
      destinationTrafficState: 'string',
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointId: 'string',
      listenerId: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      vswitch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainsAcceleratorsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainsAccelerators extends $tea.Model {
  acceleratorId?: string;
  name?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListDomainsResponseBodyDomainsAcceleratorsServiceManagedInfos[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      name: 'Name',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      name: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainsAcceleratorsServiceManagedInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomains extends $tea.Model {
  accelerators?: ListDomainsResponseBodyDomainsAccelerators[];
  domain?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      domain: 'Domain',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainsAccelerators },
      domain: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsRequestTag extends $tea.Model {
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

export class ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations extends $tea.Model {
  enableClientIPPreservation?: boolean;
  endpoint?: string;
  endpointId?: string;
  probePort?: number;
  probeProtocol?: string;
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      endpoint: 'Endpoint',
      endpointId: 'EndpointId',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
      subAddress: 'SubAddress',
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
      subAddress: 'string',
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

export class ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsResponseBodyEndpointGroupsTags extends $tea.Model {
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

export class ListEndpointGroupsResponseBodyEndpointGroups extends $tea.Model {
  acceleratorId?: string;
  description?: string;
  endpointConfigurations?: ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations[];
  endpointGroupId?: string;
  endpointGroupIpList?: string[];
  endpointGroupRegion?: string;
  endpointGroupType?: string;
  endpointGroupUnconfirmedIpList?: string[];
  endpointProtocolVersion?: string;
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
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos[];
  state?: string;
  tags?: ListEndpointGroupsResponseBodyEndpointGroupsTags[];
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
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
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      tags: 'Tags',
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
      endpointProtocolVersion: 'string',
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
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos },
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsTags },
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

export class ListForwardingRulesResponseBodyForwardingRulesServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
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
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListForwardingRulesResponseBodyForwardingRulesServiceManagedInfos[];
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
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
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
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesServiceManagedInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpSetsResponseBodyIpSetsServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
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
  ispType?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListIpSetsResponseBodyIpSetsServiceManagedInfos[];
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipAddressList: 'IpAddressList',
      ipSetId: 'IpSetId',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
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
      ispType: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListIpSetsResponseBodyIpSetsServiceManagedInfos },
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
  state?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domain: 'Domain',
      isDefault: 'IsDefault',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domain: 'string',
      isDefault: 'boolean',
      state: 'string',
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

export class ListListenersResponseBodyListenersServiceManagedInfos extends $tea.Model {
  action?: string;
  childType?: string;
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
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
  httpVersion?: string;
  idleTimeout?: number;
  listenerId?: string;
  name?: string;
  portRanges?: ListListenersResponseBodyListenersPortRanges[];
  protocol?: string;
  proxyProtocol?: boolean;
  requestTimeout?: number;
  securityPolicyId?: string;
  serviceId?: string;
  serviceManaged?: boolean;
  serviceManagedInfos?: ListListenersResponseBodyListenersServiceManagedInfos[];
  state?: string;
  type?: string;
  XForwardedForConfig?: ListListenersResponseBodyListenersXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      backendPorts: 'BackendPorts',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      createTime: 'CreateTime',
      description: 'Description',
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      listenerId: 'ListenerId',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      proxyProtocol: 'ProxyProtocol',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      type: 'Type',
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
      httpVersion: 'string',
      idleTimeout: 'number',
      listenerId: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersPortRanges },
      protocol: 'string',
      proxyProtocol: 'boolean',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersServiceManagedInfos },
      state: 'string',
      type: 'string',
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

export class UpdateCustomRoutingEndpointGroupDestinationsRequestDestinationConfigurations extends $tea.Model {
  destinationId?: string;
  fromPort?: number;
  protocols?: string[];
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      destinationId: 'DestinationId',
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationId: 'string',
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges extends $tea.Model {
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

export class UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurations extends $tea.Model {
  address?: string;
  policyId?: string;
  portRanges?: UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      policyId: 'PolicyId',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      policyId: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointTrafficPoliciesRequestPolicyConfigurationsPortRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges extends $tea.Model {
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

export class UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations extends $tea.Model {
  address?: string;
  portRanges?: UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurationsPortRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomRoutingEndpointsRequestEndpointConfigurations extends $tea.Model {
  endpointId?: string;
  policyConfigurations?: UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations[];
  trafficToEndpointPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': UpdateCustomRoutingEndpointsRequestEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupRequestEndpointConfigurations extends $tea.Model {
  enableClientIPPreservation?: boolean;
  enableProxyProtocol?: boolean;
  endpoint?: string;
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      subAddress: 'SubAddress',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      enableProxyProtocol: 'boolean',
      endpoint: 'string',
      subAddress: 'string',
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
  subAddress?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      subAddress: 'SubAddress',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      subAddress: 'string',
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
  endpointProtocolVersion?: string;
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
      endpointProtocolVersion: 'EndpointProtocolVersion',
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
      endpointProtocolVersion: 'string',
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

  /**
   * @summary Adds IP addresses or CIDR blocks to an access control list (ACL). You can add IP addresses or CIDR blocks to an ACL and configure a whitelist or blacklist to allow or deny requests from clients.
   *
   * @description *   **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL to which you want to add IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that IP entries are added to the ACL. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that IP entries are added to the ACL.
   * *   The **AddEntriesToAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request AddEntriesToAclRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddEntriesToAclResponse
   */
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

  /**
   * @summary Adds IP addresses or CIDR blocks to an access control list (ACL). You can add IP addresses or CIDR blocks to an ACL and configure a whitelist or blacklist to allow or deny requests from clients.
   *
   * @description *   **AddEntriesToAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL to which you want to add IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that IP entries are added to the ACL. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that IP entries are added to the ACL.
   * *   The **AddEntriesToAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request AddEntriesToAclRequest
   * @return AddEntriesToAclResponse
   */
  async addEntriesToAcl(request: AddEntriesToAclRequest): Promise<AddEntriesToAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEntriesToAclWithOptions(request, runtime);
  }

  /**
   * @summary Associates access control lists (ACLs) with a listener.
   *
   * @description ## Description
   * *   **AssociateAclsWithListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of the listener with which you attempt to associate an ACL.
   *     *   If the listener is in the **updating** state, it indicates that the ACL is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the ACL is associated.
   * *   The **AssociateAclsWithListener** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request AssociateAclsWithListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AssociateAclsWithListenerResponse
   */
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

  /**
   * @summary Associates access control lists (ACLs) with a listener.
   *
   * @description ## Description
   * *   **AssociateAclsWithListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of the listener with which you attempt to associate an ACL.
   *     *   If the listener is in the **updating** state, it indicates that the ACL is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the ACL is associated.
   * *   The **AssociateAclsWithListener** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request AssociateAclsWithListenerRequest
   * @return AssociateAclsWithListenerResponse
   */
  async associateAclsWithListener(request: AssociateAclsWithListenerRequest): Promise<AssociateAclsWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAclsWithListenerWithOptions(request, runtime);
  }

  /**
   * @summary Associates additional certificates with an HTTPS listener. You can associate multiple certificates with an HTTPS listener and configure virtual endpoint groups and forwarding rules to accelerate access to multiple HTTPS-capable domain names.
   *
   * @description *   Only HTTPS listeners can be associated with additional certificates.
   * *   **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener with which you want to associate an additional certificate.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is associated.
   * *   The **AssociateAdditionalCertificatesWithListener** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request AssociateAdditionalCertificatesWithListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AssociateAdditionalCertificatesWithListenerResponse
   */
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

  /**
   * @summary Associates additional certificates with an HTTPS listener. You can associate multiple certificates with an HTTPS listener and configure virtual endpoint groups and forwarding rules to accelerate access to multiple HTTPS-capable domain names.
   *
   * @description *   Only HTTPS listeners can be associated with additional certificates.
   * *   **AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener with which you want to associate an additional certificate.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being associated. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is associated.
   * *   The **AssociateAdditionalCertificatesWithListener** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request AssociateAdditionalCertificatesWithListenerRequest
   * @return AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * @summary Associates an Anti-DDoS Pro or Anti-DDoS Premium instance with a Global Accelerator (GA) instance.
   *
   * @description When you call this operation, take note of the following items:
   * *   **AttachDdosToAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being associated with the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is associated with the GA instance.
   * *   You cannot repeatedly call the **AttachDdosToAccelerator** operation for the same GA instance within a specific period of time.
   *
   * @param request AttachDdosToAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachDdosToAcceleratorResponse
   */
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

  /**
   * @summary Associates an Anti-DDoS Pro or Anti-DDoS Premium instance with a Global Accelerator (GA) instance.
   *
   * @description When you call this operation, take note of the following items:
   * *   **AttachDdosToAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is being associated with the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro or Anti-DDoS Premium instance is associated with the GA instance.
   * *   You cannot repeatedly call the **AttachDdosToAccelerator** operation for the same GA instance within a specific period of time.
   *
   * @param request AttachDdosToAcceleratorRequest
   * @return AttachDdosToAcceleratorResponse
   */
  async attachDdosToAccelerator(request: AttachDdosToAcceleratorRequest): Promise<AttachDdosToAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDdosToAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Associates a Log Service Logstore with an endpoint group.
   *
   * @description *   **AttachLogStoreToEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that a Logstore is being associated with the group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that a Logstore is associated with the group.
   * *   The **AttachLogStoreToEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request AttachLogStoreToEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachLogStoreToEndpointGroupResponse
   */
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

  /**
   * @summary Associates a Log Service Logstore with an endpoint group.
   *
   * @description *   **AttachLogStoreToEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that a Logstore is being associated with the group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that a Logstore is associated with the group.
   * *   The **AttachLogStoreToEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request AttachLogStoreToEndpointGroupRequest
   * @return AttachLogStoreToEndpointGroupResponse
   */
  async attachLogStoreToEndpointGroup(request: AttachLogStoreToEndpointGroupRequest): Promise<AttachLogStoreToEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachLogStoreToEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Associates a bandwidth plan with a Global Accelerator (GA) instance.
   *
   * @description *   **BandwidthPackageAddAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you want to associate.
   *     *   If the bandwidth plan is in the **binding** state, it indicates that the bandwidth plan is being associated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is associated.
   * *   The **BandwidthPackageAddAccelerator** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request BandwidthPackageAddAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BandwidthPackageAddAcceleratorResponse
   */
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

  /**
   * @summary Associates a bandwidth plan with a Global Accelerator (GA) instance.
   *
   * @description *   **BandwidthPackageAddAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you want to associate.
   *     *   If the bandwidth plan is in the **binding** state, it indicates that the bandwidth plan is being associated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is associated.
   * *   The **BandwidthPackageAddAccelerator** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request BandwidthPackageAddAcceleratorRequest
   * @return BandwidthPackageAddAcceleratorResponse
   */
  async bandwidthPackageAddAccelerator(request: BandwidthPackageAddAcceleratorRequest): Promise<BandwidthPackageAddAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandwidthPackageAddAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates a bandwidth plan from a Global Accelerator (GA) instance.
   *
   * @description *   **BandwidthPackageRemoveAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you attempt to disassociate.
   *     *   If the bandwidth plan is in the **unbinding** state, it indicates that the bandwidth plan is being disassociated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is disassociated.
   * *   The **BandwidthPackageRemoveAccelerator** cannot be called repeatedly for the same GA instance.
   *
   * @param request BandwidthPackageRemoveAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BandwidthPackageRemoveAcceleratorResponse
   */
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

  /**
   * @summary Disassociates a bandwidth plan from a Global Accelerator (GA) instance.
   *
   * @description *   **BandwidthPackageRemoveAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan that you attempt to disassociate.
   *     *   If the bandwidth plan is in the **unbinding** state, it indicates that the bandwidth plan is being disassociated. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is disassociated.
   * *   The **BandwidthPackageRemoveAccelerator** cannot be called repeatedly for the same GA instance.
   *
   * @param request BandwidthPackageRemoveAcceleratorRequest
   * @return BandwidthPackageRemoveAcceleratorResponse
   */
  async bandwidthPackageRemoveAccelerator(request: BandwidthPackageRemoveAcceleratorRequest): Promise<BandwidthPackageRemoveAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bandwidthPackageRemoveAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Changes the resource group to which a Global Accelerator (GA) resource belongs.
   *
   * @description The **ChangeResourceGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request ChangeResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2019-11-20",
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
   * @summary Changes the resource group to which a Global Accelerator (GA) resource belongs.
   *
   * @description The **ChangeResourceGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request ChangeResourceGroupRequest
   * @return ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Configures latency monitoring for an endpoint.
   *
   * @description *   **ConfigEndpointProbe** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group to which an endpoint belongs and determine whether latency monitoring is configured for the endpoint.
   *     *   If the endpoint group is in the **updating** state, it indicates that latency monitoring is being configured for the endpoint. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that latency monitoring is configured for the endpoint.
   * *   The **ConfigEndpointProbe** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request ConfigEndpointProbeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConfigEndpointProbeResponse
   */
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

  /**
   * @summary Configures latency monitoring for an endpoint.
   *
   * @description *   **ConfigEndpointProbe** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group to which an endpoint belongs and determine whether latency monitoring is configured for the endpoint.
   *     *   If the endpoint group is in the **updating** state, it indicates that latency monitoring is being configured for the endpoint. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that latency monitoring is configured for the endpoint.
   * *   The **ConfigEndpointProbe** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request ConfigEndpointProbeRequest
   * @return ConfigEndpointProbeResponse
   */
  async configEndpointProbe(request: ConfigEndpointProbeRequest): Promise<ConfigEndpointProbeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configEndpointProbeWithOptions(request, runtime);
  }

  /**
   * @summary Creates a Global Accelerator (GA) instance.
   *
   * @description ## Description
   * **CreateAccelerator** is an asynchronous operation. After you send a request, the system returns the ID of a GA instance, but the operation is still being performed in the system background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the state of a GA instance.
   * *   If the GA instance is in the **init** state, it indicates that the GA instance is being created. In this case, you can perform only query operations.
   * *   If the GA instance is in the **active** state, it indicates that the GA instance is created.
   *
   * @param request CreateAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAcceleratorResponse
   */
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

    if (!Util.isUnset(request.bandwidthBillingType)) {
      query["BandwidthBillingType"] = request.bandwidthBillingType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.ipSetConfig)) {
      query["IpSetConfig"] = request.ipSetConfig;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Creates a Global Accelerator (GA) instance.
   *
   * @description ## Description
   * **CreateAccelerator** is an asynchronous operation. After you send a request, the system returns the ID of a GA instance, but the operation is still being performed in the system background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the state of a GA instance.
   * *   If the GA instance is in the **init** state, it indicates that the GA instance is being created. In this case, you can perform only query operations.
   * *   If the GA instance is in the **active** state, it indicates that the GA instance is created.
   *
   * @param request CreateAcceleratorRequest
   * @return CreateAcceleratorResponse
   */
  async createAccelerator(request: CreateAcceleratorRequest): Promise<CreateAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Creates an access control list (ACL).
   *
   * @description **CreateAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the state of an ACL.
   * *   If the ACL is in the **init** state, the ACL is being created. In this case, you can only perform only query operations.
   * *   If the ACL is in the **active** state, the ACL is created.
   *
   * @param request CreateAclRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAclResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Creates an access control list (ACL).
   *
   * @description **CreateAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the state of an ACL.
   * *   If the ACL is in the **init** state, the ACL is being created. In this case, you can only perform only query operations.
   * *   If the ACL is in the **active** state, the ACL is created.
   *
   * @param request CreateAclRequest
   * @return CreateAclResponse
   */
  async createAcl(request: CreateAclRequest): Promise<CreateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  /**
   * @summary Creates an origin probing task.
   *
   * @description You can call the **CreateApplicationMonitor** operation to create an origin probing task. An origin probing task monitors the network quality between a client and an origin server and checks the availability of the origin server.
   * Before you call this operation, take note of the following items:
   * *   You can create origin detection tasks only for subscription Standard Global Accelerator (GA) instances whose specification is Medium Ⅰ.
   * *   You cannot create an origin probe task for a UDP listener.
   * *   The service port of the URL or IP address that is probed must be within the listening port range.
   * *   **CreateApplicationMonitor** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the status of the origin probing task.
   *     *   If the origin probing task is in the **init** state, it indicates that the task is being created. You can perform only query operations.
   *     *   If the origin probing task is in the **active** state, it indicates that the task is created.
   * *   The **CreateApplicationMonitor** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   *
   * @param request CreateApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateApplicationMonitorResponse
   */
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

  /**
   * @summary Creates an origin probing task.
   *
   * @description You can call the **CreateApplicationMonitor** operation to create an origin probing task. An origin probing task monitors the network quality between a client and an origin server and checks the availability of the origin server.
   * Before you call this operation, take note of the following items:
   * *   You can create origin detection tasks only for subscription Standard Global Accelerator (GA) instances whose specification is Medium Ⅰ.
   * *   You cannot create an origin probe task for a UDP listener.
   * *   The service port of the URL or IP address that is probed must be within the listening port range.
   * *   **CreateApplicationMonitor** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the status of the origin probing task.
   *     *   If the origin probing task is in the **init** state, it indicates that the task is being created. You can perform only query operations.
   *     *   If the origin probing task is in the **active** state, it indicates that the task is created.
   * *   The **CreateApplicationMonitor** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   *
   * @param request CreateApplicationMonitorRequest
   * @return CreateApplicationMonitorResponse
   */
  async createApplicationMonitor(request: CreateApplicationMonitorRequest): Promise<CreateApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Creates a bandwidth plan.
   *
   * @description To use Global Accelerator (GA) for acceleration, you must purchase a basic bandwidth plan. A basic bandwidth plan supports the following bandwidth types:
   * *   **Basic**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service is deployed on Alibaba Cloud.
   * *   **Enhanced**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud.
   * *   **Premium**: Both the default acceleration region and the default service region are outside the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud. If you want to accelerate data transfer for clients in the Chinese mainland, you must select China (Hong Kong) as the acceleration region.
   * When you call this operation, take note of the following items:
   * *   **CreateBandwidthPackage** is an asynchronous operation. After you send a request, the system returns the ID of a bandwidth plan, but the bandwidth plan is still being created in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan.
   *     *   If the bandwidth plan is in the **init** state, it indicates that the bandwidth plan is being created. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is created.
   * *   The **CreateBandwidthPackage** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request CreateBandwidthPackageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBandwidthPackageResponse
   */
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

    if (!Util.isUnset(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!Util.isUnset(request.ratio)) {
      query["Ratio"] = request.ratio;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Creates a bandwidth plan.
   *
   * @description To use Global Accelerator (GA) for acceleration, you must purchase a basic bandwidth plan. A basic bandwidth plan supports the following bandwidth types:
   * *   **Basic**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service is deployed on Alibaba Cloud.
   * *   **Enhanced**: Both the default acceleration region and the default service region are in the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud.
   * *   **Premium**: Both the default acceleration region and the default service region are outside the Chinese mainland. The accelerated service can be deployed on and off Alibaba Cloud. If you want to accelerate data transfer for clients in the Chinese mainland, you must select China (Hong Kong) as the acceleration region.
   * When you call this operation, take note of the following items:
   * *   **CreateBandwidthPackage** is an asynchronous operation. After you send a request, the system returns the ID of a bandwidth plan, but the bandwidth plan is still being created in the system background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the bandwidth plan.
   *     *   If the bandwidth plan is in the **init** state, it indicates that the bandwidth plan is being created. In this case, you can perform only query operations.
   *     *   If the bandwidth plan is in the **active** state, it indicates that the bandwidth plan is created.
   * *   The **CreateBandwidthPackage** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request CreateBandwidthPackageRequest
   * @return CreateBandwidthPackageResponse
   */
  async createBandwidthPackage(request: CreateBandwidthPackageRequest): Promise<CreateBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * @summary Creates an accelerated IP address for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicAccelerateIp** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address:
   *     *   If no status information is returned, the accelerated IP address is being created. In this case, you can perform only query operations.
   *     *   If the accelerated IP address is in the **active** state, the accelerated IP address is created.
   * *   The **CreateBasicAccelerateIp** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request CreateBasicAccelerateIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicAccelerateIpResponse
   */
  async createBasicAccelerateIpWithOptions(request: CreateBasicAccelerateIpRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicAccelerateIpResponse> {
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
      action: "CreateBasicAccelerateIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicAccelerateIpResponse>(await this.callApi(params, req, runtime), new CreateBasicAccelerateIpResponse({}));
  }

  /**
   * @summary Creates an accelerated IP address for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicAccelerateIp** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address:
   *     *   If no status information is returned, the accelerated IP address is being created. In this case, you can perform only query operations.
   *     *   If the accelerated IP address is in the **active** state, the accelerated IP address is created.
   * *   The **CreateBasicAccelerateIp** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request CreateBasicAccelerateIpRequest
   * @return CreateBasicAccelerateIpResponse
   */
  async createBasicAccelerateIp(request: CreateBasicAccelerateIpRequest): Promise<CreateBasicAccelerateIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicAccelerateIpWithOptions(request, runtime);
  }

  /**
   * @summary Creates a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status between the accelerated IP address and endpoint.
   *     *   If the status of the accelerated IP address and endpoint is **binding**, the accelerated IP address is being associated with the endpoint. In this case, you can query the accelerated IP address and endpoint but cannot perform other operations.
   *     *   If the status of the accelerated IP address and endpoint is **bound** and the status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP address is associated with the endpoint.
   * *   The **CreateBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request CreateBasicAccelerateIpEndpointRelationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicAccelerateIpEndpointRelationResponse
   */
  async createBasicAccelerateIpEndpointRelationWithOptions(request: CreateBasicAccelerateIpEndpointRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicAccelerateIpEndpointRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBasicAccelerateIpEndpointRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicAccelerateIpEndpointRelationResponse>(await this.callApi(params, req, runtime), new CreateBasicAccelerateIpEndpointRelationResponse({}));
  }

  /**
   * @summary Creates a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status between the accelerated IP address and endpoint.
   *     *   If the status of the accelerated IP address and endpoint is **binding**, the accelerated IP address is being associated with the endpoint. In this case, you can query the accelerated IP address and endpoint but cannot perform other operations.
   *     *   If the status of the accelerated IP address and endpoint is **bound** and the status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP address is associated with the endpoint.
   * *   The **CreateBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request CreateBasicAccelerateIpEndpointRelationRequest
   * @return CreateBasicAccelerateIpEndpointRelationResponse
   */
  async createBasicAccelerateIpEndpointRelation(request: CreateBasicAccelerateIpEndpointRelationRequest): Promise<CreateBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * @summary Creates mappings between accelerated IP addresses and endpoints for a basic Global Accelerator (GA) instance.
   *
   * @description *   The **CreateBasicAccelerateIpEndpointRelations** is asynchronous. After you send a request, the system returns a request ID and runs the task in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status.
   *     *   If an accelerated IP address and the endpoint are in the **binding** state, the accelerated IP address is being associated with the endpoint. In this case, you can only query the accelerated IP address and endpoint, but cannot perform other operations.
   *     *   If all the accelerated IP addresses and the endpoint are in the **bound** state, and the association status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP addresses are associated with the endpoints.
   * *   The **CreateBasicAccelerateIpEndpointRelations** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request CreateBasicAccelerateIpEndpointRelationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicAccelerateIpEndpointRelationsResponse
   */
  async createBasicAccelerateIpEndpointRelationsWithOptions(request: CreateBasicAccelerateIpEndpointRelationsRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicAccelerateIpEndpointRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpEndpointRelations)) {
      query["AccelerateIpEndpointRelations"] = request.accelerateIpEndpointRelations;
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
      action: "CreateBasicAccelerateIpEndpointRelations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicAccelerateIpEndpointRelationsResponse>(await this.callApi(params, req, runtime), new CreateBasicAccelerateIpEndpointRelationsResponse({}));
  }

  /**
   * @summary Creates mappings between accelerated IP addresses and endpoints for a basic Global Accelerator (GA) instance.
   *
   * @description *   The **CreateBasicAccelerateIpEndpointRelations** is asynchronous. After you send a request, the system returns a request ID and runs the task in the system background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) or [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an accelerated IP address or an endpoint to determine the association status.
   *     *   If an accelerated IP address and the endpoint are in the **binding** state, the accelerated IP address is being associated with the endpoint. In this case, you can only query the accelerated IP address and endpoint, but cannot perform other operations.
   *     *   If all the accelerated IP addresses and the endpoint are in the **bound** state, and the association status returned by the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) API operation is **active**, the accelerated IP addresses are associated with the endpoints.
   * *   The **CreateBasicAccelerateIpEndpointRelations** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request CreateBasicAccelerateIpEndpointRelationsRequest
   * @return CreateBasicAccelerateIpEndpointRelationsResponse
   */
  async createBasicAccelerateIpEndpointRelations(request: CreateBasicAccelerateIpEndpointRelationsRequest): Promise<CreateBasicAccelerateIpEndpointRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicAccelerateIpEndpointRelationsWithOptions(request, runtime);
  }

  /**
   * @summary Basic Global Accelerator (GA) instances leverage the immense bandwidth of the high-quality global network of Alibaba Cloud to provide end-to-end acceleration services. You can use basic GA instances to accelerate content delivery at Layer 3 (IP). You can call the CreateBasicAccelerator operation to create a basic GA instance.
   *
   * @description **CreateBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) or [ListBasicAccelerators](https://help.aliyun.com/document_detail/353189.html) operation to query the status of the task.
   * *   If the basic GA instance is in the **init** state, it indicates that the basic GA instance is being created. In this case, you can perform only query operations.
   * *   If the basic GA instance is in the **active** state, it indicates that the basic GA instance is created.
   *
   * @param request CreateBasicAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicAcceleratorResponse
   */
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

    if (!Util.isUnset(request.bandwidthBillingType)) {
      query["BandwidthBillingType"] = request.bandwidthBillingType;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Basic Global Accelerator (GA) instances leverage the immense bandwidth of the high-quality global network of Alibaba Cloud to provide end-to-end acceleration services. You can use basic GA instances to accelerate content delivery at Layer 3 (IP). You can call the CreateBasicAccelerator operation to create a basic GA instance.
   *
   * @description **CreateBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) or [ListBasicAccelerators](https://help.aliyun.com/document_detail/353189.html) operation to query the status of the task.
   * *   If the basic GA instance is in the **init** state, it indicates that the basic GA instance is being created. In this case, you can perform only query operations.
   * *   If the basic GA instance is in the **active** state, it indicates that the basic GA instance is created.
   *
   * @param request CreateBasicAcceleratorRequest
   * @return CreateBasicAcceleratorResponse
   */
  async createBasicAccelerator(request: CreateBasicAcceleratorRequest): Promise<CreateBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Creates an endpoint for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an endpoint.
   *     *   If the endpoint is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint is in the **active** state, the endpoint is created.
   * *   The **CreateBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   *
   * @param request CreateBasicEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicEndpointResponse
   */
  async createBasicEndpointWithOptions(request: CreateBasicEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointAddress)) {
      query["EndpointAddress"] = request.endpointAddress;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointSubAddress)) {
      query["EndpointSubAddress"] = request.endpointSubAddress;
    }

    if (!Util.isUnset(request.endpointSubAddressType)) {
      query["EndpointSubAddressType"] = request.endpointSubAddressType;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!Util.isUnset(request.endpointZoneId)) {
      query["EndpointZoneId"] = request.endpointZoneId;
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
      action: "CreateBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicEndpointResponse>(await this.callApi(params, req, runtime), new CreateBasicEndpointResponse({}));
  }

  /**
   * @summary Creates an endpoint for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) API operation to query the status of an endpoint.
   *     *   If the endpoint is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint is in the **active** state, the endpoint is created.
   * *   The **CreateBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   *
   * @param request CreateBasicEndpointRequest
   * @return CreateBasicEndpointResponse
   */
  async createBasicEndpoint(request: CreateBasicEndpointRequest): Promise<CreateBasicEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Creates an endpoint group for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns an endpoint group ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the endpoint group is created.
   * *   You cannot call the **CreateBasicEndpointGroup** operation again on the same GA instance before the previous request is completed.
   *
   * @param request CreateBasicEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicEndpointGroupResponse
   */
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

    if (!Util.isUnset(request.endpointSubAddress)) {
      query["EndpointSubAddress"] = request.endpointSubAddress;
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

  /**
   * @summary Creates an endpoint group for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns an endpoint group ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **init** state, the endpoint is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the endpoint group is created.
   * *   You cannot call the **CreateBasicEndpointGroup** operation again on the same GA instance before the previous request is completed.
   *
   * @param request CreateBasicEndpointGroupRequest
   * @return CreateBasicEndpointGroupResponse
   */
  async createBasicEndpointGroup(request: CreateBasicEndpointGroupRequest): Promise<CreateBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates multiple endpoints for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicEndpoints** is an asynchronous operation. After you call this operation, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints. - If one or more endpoints are in the **init** state, it indicates that the endpoints are being created. In this case, you can continue to perform query operations on the endpoints. If all endpoints are in the **active** state, it indicates that the endpoints are created.
   * *   You cannot call the **CreateBasicEndpoints** operation again on the same GA instance before the previous operation is complete.
   *
   * @param request CreateBasicEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicEndpointsResponse
   */
  async createBasicEndpointsWithOptions(request: CreateBasicEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicEndpointsResponse> {
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

    if (!Util.isUnset(request.endpoints)) {
      query["Endpoints"] = request.endpoints;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBasicEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBasicEndpointsResponse>(await this.callApi(params, req, runtime), new CreateBasicEndpointsResponse({}));
  }

  /**
   * @summary Creates multiple endpoints for a basic Global Accelerator (GA) instance.
   *
   * @description *   **CreateBasicEndpoints** is an asynchronous operation. After you call this operation, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints. - If one or more endpoints are in the **init** state, it indicates that the endpoints are being created. In this case, you can continue to perform query operations on the endpoints. If all endpoints are in the **active** state, it indicates that the endpoints are created.
   * *   You cannot call the **CreateBasicEndpoints** operation again on the same GA instance before the previous operation is complete.
   *
   * @param request CreateBasicEndpointsRequest
   * @return CreateBasicEndpointsResponse
   */
  async createBasicEndpoints(request: CreateBasicEndpointsRequest): Promise<CreateBasicEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Creates an acceleration region for a basic Global Accelerator (GA) instance.
   *
   * @description Take note of the following limits:
   * *   You can specify only one acceleration region for each basic GA instance, and only IPv4 clients can connect to basic GA instances.
   * *   **CreateBasicIpSet** is an asynchronous operation. After you send a request, the system returns an acceleration region ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **init** state, the acceleration region is being created. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, the acceleration region is created.
   * *   You cannot call the **CreateBasicIpSet** operation again on the same GA instance before the previous task is completed.
   *
   * @param request CreateBasicIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBasicIpSetResponse
   */
  async createBasicIpSetWithOptions(request: CreateBasicIpSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateBasicIpSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateRegionId)) {
      query["AccelerateRegionId"] = request.accelerateRegionId;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ispType)) {
      query["IspType"] = request.ispType;
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

  /**
   * @summary Creates an acceleration region for a basic Global Accelerator (GA) instance.
   *
   * @description Take note of the following limits:
   * *   You can specify only one acceleration region for each basic GA instance, and only IPv4 clients can connect to basic GA instances.
   * *   **CreateBasicIpSet** is an asynchronous operation. After you send a request, the system returns an acceleration region ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **init** state, the acceleration region is being created. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, the acceleration region is created.
   * *   You cannot call the **CreateBasicIpSet** operation again on the same GA instance before the previous task is completed.
   *
   * @param request CreateBasicIpSetRequest
   * @return CreateBasicIpSetResponse
   */
  async createBasicIpSet(request: CreateBasicIpSetRequest): Promise<CreateBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBasicIpSetWithOptions(request, runtime);
  }

  /**
   * @summary After you configure a custom routing listener for a Global Accelerator (GA) instance, the GA instance generates a port mapping table based on the listener port range, mapping information (protocols and port ranges) of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to the specified IP addresses and ports in the vSwitches.
   * You can call this operation to create mappings for an endpoint group of a custom routing listener. Take note of the following items:
   * *   **CreateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that the mappings are being created for the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the mappings are created for the endpoint group.
   * *   You cannot call the **CreateCustomRoutingEndpointGroupDestinations** operation again on the same GA instance before the previous task is completed.
   * ### Prerequisites
   * Make sure that the following prerequisites are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed as an endpoint to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. The custom routing listener feature is in invitational preview. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex). For information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   An endpoint group is created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   *
   * @description readAndWrite
   *
   * @param request CreateCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomRoutingEndpointGroupDestinationsResponse
   */
  async createCustomRoutingEndpointGroupDestinationsWithOptions(request: CreateCustomRoutingEndpointGroupDestinationsRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomRoutingEndpointGroupDestinationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationConfigurations)) {
      query["DestinationConfigurations"] = request.destinationConfigurations;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
      action: "CreateCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new CreateCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * @summary After you configure a custom routing listener for a Global Accelerator (GA) instance, the GA instance generates a port mapping table based on the listener port range, mapping information (protocols and port ranges) of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to the specified IP addresses and ports in the vSwitches.
   * You can call this operation to create mappings for an endpoint group of a custom routing listener. Take note of the following items:
   * *   **CreateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that the mappings are being created for the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the mappings are created for the endpoint group.
   * *   You cannot call the **CreateCustomRoutingEndpointGroupDestinations** operation again on the same GA instance before the previous task is completed.
   * ### Prerequisites
   * Make sure that the following prerequisites are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed as an endpoint to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. The custom routing listener feature is in invitational preview. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex). For information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   An endpoint group is created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   *
   * @description readAndWrite
   *
   * @param request CreateCustomRoutingEndpointGroupDestinationsRequest
   * @return CreateCustomRoutingEndpointGroupDestinationsResponse
   */
  async createCustomRoutingEndpointGroupDestinations(request: CreateCustomRoutingEndpointGroupDestinationsRequest): Promise<CreateCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * @summary Creates endpoint groups for a custom routing listener.
   *
   * @description Global Accelerator (GA) forwards client requests to endpoints in an endpoint group based on the routing type of the listener that is associated with the endpoint group.
   * *   After you configure an intelligent routing listener for a GA instance, the GA instance selects a nearby and healthy endpoint group and forwards client requests to a healthy endpoint in the endpoint group.
   * *   After you configure a custom routing listener for a GA instance, the instance generates a port mapping table based on the listener port range, protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * You can call this operation to create endpoint groups for custom routing listeners. For information about how to create endpoint groups for intelligent routing listeners, see [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html).
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) or [ListCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449374.html) operation to query the status of the endpoint groups that are associated with custom routing listeners.
   *     *   If one or more endpoint groups are in the **init** state, it indicates that the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, it indicates that the endpoint groups are created.
   * *   The **CreateCustomRoutingEndpointGroups** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * Make sure that the following requirements are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   *
   * @param request CreateCustomRoutingEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomRoutingEndpointGroupsResponse
   */
  async createCustomRoutingEndpointGroupsWithOptions(request: CreateCustomRoutingEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomRoutingEndpointGroupsResponse> {
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
      action: "CreateCustomRoutingEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomRoutingEndpointGroupsResponse>(await this.callApi(params, req, runtime), new CreateCustomRoutingEndpointGroupsResponse({}));
  }

  /**
   * @summary Creates endpoint groups for a custom routing listener.
   *
   * @description Global Accelerator (GA) forwards client requests to endpoints in an endpoint group based on the routing type of the listener that is associated with the endpoint group.
   * *   After you configure an intelligent routing listener for a GA instance, the GA instance selects a nearby and healthy endpoint group and forwards client requests to a healthy endpoint in the endpoint group.
   * *   After you configure a custom routing listener for a GA instance, the instance generates a port mapping table based on the listener port range, protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * You can call this operation to create endpoint groups for custom routing listeners. For information about how to create endpoint groups for intelligent routing listeners, see [CreateEndpointGroup](https://help.aliyun.com/document_detail/153259.html).
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) or [ListCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449374.html) operation to query the status of the endpoint groups that are associated with custom routing listeners.
   *     *   If one or more endpoint groups are in the **init** state, it indicates that the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, it indicates that the endpoint groups are created.
   * *   The **CreateCustomRoutingEndpointGroups** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * Make sure that the following requirements are met before you call this operation:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   A bandwidth plan is associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired and a custom routing listener is created for the GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   *
   * @param request CreateCustomRoutingEndpointGroupsRequest
   * @return CreateCustomRoutingEndpointGroupsResponse
   */
  async createCustomRoutingEndpointGroups(request: CreateCustomRoutingEndpointGroupsRequest): Promise<CreateCustomRoutingEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Creates traffic destinations for an endpoint that is associated with a custom routing listener.
   *
   * @description This operation takes effect only when the traffic access policy of an endpoint allows traffic to specified destinations. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic access policy of an endpoint. This operation takes effect only if the value of **TrafficToEndpointPolicy** is set to **AllowCustom**, which allows traffic to specific destinations.
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being created. In this state, you can only query the traffic destinations.
   *     *   If the endpoint group is in the **active** state, the traffic destinations are created.
   * *   You cannot call the **CreateCustomRoutingEndpointTrafficPolicies** operation repeatedly for the same GA instance in a specific period of time.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following requirements are met:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   If the bandwidth metering method of the standard GA instance is **pay-by-bandwidth**, a bandwidth plan must be associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application that serves as the endpoint of the standard GA instance is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired, and a custom routing listener is created. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Endpoint groups are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * *   Endpoints are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpoints](https://help.aliyun.com/document_detail/449382.html).
   *
   * @param request CreateCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async createCustomRoutingEndpointTrafficPoliciesWithOptions(request: CreateCustomRoutingEndpointTrafficPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomRoutingEndpointTrafficPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.policyConfigurations)) {
      query["PolicyConfigurations"] = request.policyConfigurations;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new CreateCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * @summary Creates traffic destinations for an endpoint that is associated with a custom routing listener.
   *
   * @description This operation takes effect only when the traffic access policy of an endpoint allows traffic to specified destinations. You can call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation to query the traffic access policy of an endpoint. This operation takes effect only if the value of **TrafficToEndpointPolicy** is set to **AllowCustom**, which allows traffic to specific destinations.
   * When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being created. In this state, you can only query the traffic destinations.
   *     *   If the endpoint group is in the **active** state, the traffic destinations are created.
   * *   You cannot call the **CreateCustomRoutingEndpointTrafficPolicies** operation repeatedly for the same GA instance in a specific period of time.
   * ### [](#)Prerequisites
   * Before you call this operation, make sure that the following requirements are met:
   * *   A standard GA instance is created. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   If the bandwidth metering method of the standard GA instance is **pay-by-bandwidth**, a bandwidth plan must be associated with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   An application that serves as the endpoint of the standard GA instance is deployed to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   The permissions to use custom routing listeners are acquired, and a custom routing listener is created. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Endpoint groups are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   * *   Endpoints are created for the custom routing listener. For more information, see [CreateCustomRoutingEndpoints](https://help.aliyun.com/document_detail/449382.html).
   *
   * @param request CreateCustomRoutingEndpointTrafficPoliciesRequest
   * @return CreateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async createCustomRoutingEndpointTrafficPolicies(request: CreateCustomRoutingEndpointTrafficPoliciesRequest): Promise<CreateCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * @summary Creates endpoints for a custom routing listener.
   *
   * @description After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, the protocols and port ranges of the associated endpoint groups, and the IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * This operation is used to create endpoints for custom routing listeners. When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group and determine whether endpoints are created in the endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that endpoints are being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that endpoints are created.
   * *   The **CreateCustomRoutingEndpoints** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * The following operations are complete before you call this operation:
   * *   Create a standard GA instance. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   Associate a bandwidth plan with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   Deploy an application that serves as the endpoint of the GA instance. The application is used to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   Apply for permissions to use custom routing listeners and create a custom routing listener for the standard GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Create an endpoint group for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   *
   * @param request CreateCustomRoutingEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCustomRoutingEndpointsResponse
   */
  async createCustomRoutingEndpointsWithOptions(request: CreateCustomRoutingEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomRoutingEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
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
      action: "CreateCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new CreateCustomRoutingEndpointsResponse({}));
  }

  /**
   * @summary Creates endpoints for a custom routing listener.
   *
   * @description After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, the protocols and port ranges of the associated endpoint groups, and the IP addresses of endpoints (vSwitches), and forwards client requests to specified IP addresses and ports in the vSwitches.
   * This operation is used to create endpoints for custom routing listeners. When you call this operation, take note of the following items:
   * *   **CreateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group and determine whether endpoints are created in the endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that endpoints are being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that endpoints are created.
   * *   The **CreateCustomRoutingEndpoints** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   * ### Prerequisites
   * The following operations are complete before you call this operation:
   * *   Create a standard GA instance. For more information, see [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html).
   * *   Associate a bandwidth plan with the standard GA instance. For more information, see [BandwidthPackageAddAccelerator](https://help.aliyun.com/document_detail/153239.html).
   * *   Deploy an application that serves as the endpoint of the GA instance. The application is used to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners.
   * *   Apply for permissions to use custom routing listeners and create a custom routing listener for the standard GA instance. Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager. For more information about how to create a custom routing listener, see [CreateListener](https://help.aliyun.com/document_detail/153253.html).
   * *   Create an endpoint group for the custom routing listener. For more information, see [CreateCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/449363.html).
   *
   * @param request CreateCustomRoutingEndpointsRequest
   * @return CreateCustomRoutingEndpointsResponse
   */
  async createCustomRoutingEndpoints(request: CreateCustomRoutingEndpointsRequest): Promise<CreateCustomRoutingEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Creates a domain name and associates it with Global Accelerator (GA) instances.
   *
   * @description After you associate an accelerated domain name that has obtained an ICP number with a Global Accelerator (GA) instance, you do not need to complete filing for the accelerated domain name or its subdomains on Alibaba Cloud.
   * You can call this operation to add an accelerated domain name and associate the accelerated domain name with GA instances. When you call this operation, take note of the following items:
   * *   If your accelerated domain name is hosted in the Chinese mainland, you must obtain an ICP number for the domain name.
   * *   The same accelerated domain name cannot be repeatedly associated with the same GA instance.
   * *   You cannot repeatedly call the **CreateDomain** operation by using the same Alibaba Cloud account within a specific period of time.
   *
   * @param request CreateDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorIds)) {
      query["AcceleratorIds"] = request.acceleratorIds;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * @summary Creates a domain name and associates it with Global Accelerator (GA) instances.
   *
   * @description After you associate an accelerated domain name that has obtained an ICP number with a Global Accelerator (GA) instance, you do not need to complete filing for the accelerated domain name or its subdomains on Alibaba Cloud.
   * You can call this operation to add an accelerated domain name and associate the accelerated domain name with GA instances. When you call this operation, take note of the following items:
   * *   If your accelerated domain name is hosted in the Chinese mainland, you must obtain an ICP number for the domain name.
   * *   The same accelerated domain name cannot be repeatedly associated with the same GA instance.
   * *   You cannot repeatedly call the **CreateDomain** operation by using the same Alibaba Cloud account within a specific period of time.
   *
   * @param request CreateDomainRequest
   * @return CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * @summary Creates an endpoint group.
   *
   * @description *   When you call this operation to create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.
   * *   **CreateEndpointGroup** is an asynchronous operation. After you send a request, the system returns the ID of an endpoint group, but the endpoint group is still being created in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of the endpoint group.
   *     *   If the endpoint group is in the **init** state, it indicates that the endpoint group is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the endpoint group is created.
   * *   The **CreateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request CreateEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEndpointGroupResponse
   */
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

    if (!Util.isUnset(request.endpointProtocolVersion)) {
      query["EndpointProtocolVersion"] = request.endpointProtocolVersion;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Creates an endpoint group.
   *
   * @description *   When you call this operation to create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.
   * *   **CreateEndpointGroup** is an asynchronous operation. After you send a request, the system returns the ID of an endpoint group, but the endpoint group is still being created in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of the endpoint group.
   *     *   If the endpoint group is in the **init** state, it indicates that the endpoint group is being created. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the endpoint group is created.
   * *   The **CreateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request CreateEndpointGroupRequest
   * @return CreateEndpointGroupResponse
   */
  async createEndpointGroup(request: CreateEndpointGroupRequest): Promise<CreateEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates endpoint groups.
   *
   * @description *   **CreateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of the task:
   *     *   If the endpoint groups are in the **init** state, the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, the endpoint groups are created.
   * *   The **CreateEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request CreateEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEndpointGroupsResponse
   */
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

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endpointGroupConfigurations)) {
      bodyFlat["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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

  /**
   * @summary Creates endpoint groups.
   *
   * @description *   **CreateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of the task:
   *     *   If the endpoint groups are in the **init** state, the endpoint groups are being created. In this case, you can perform only query operations.
   *     *   If all endpoint groups are in the **active** state, the endpoint groups are created.
   * *   The **CreateEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request CreateEndpointGroupsRequest
   * @return CreateEndpointGroupsResponse
   */
  async createEndpointGroups(request: CreateEndpointGroupsRequest): Promise<CreateEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Creates forwarding rules.
   *
   * @description HTTP and HTTPS listeners of Global Accelerator (GA) support domain name-based and path-based forwarding rules. After an HTTP or HTTPS listener receives a request, the system matches the request against the forwarding conditions in a forwarding rule and then performs the corresponding forwarding action. For example, if you set **Host** to `www.example.com` as the forwarding condition and **Forward** to `epg-bp1enpdcrqhl78g6r****` as the forwarding action in a forwarding rule, requests to the `www.example.com` domain name match this forwarding rule and are forwarded to the `epg-bp1enpdcrqhl78g6r****` endpoint group. Before you call this API operation to create a forwarding rule, we recommend that you understand forwarding rules. For more information, see [Forwarding rules](https://help.aliyun.com/document_detail/204224.html).
   * When you call this operation, take note of the following items:
   * *   **CreateForwardingRules** is an asynchronous operation. After you send a request, the system returns the ID of a forwarding rule, but the forwarding rule is still being created in the system background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the state of the forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, it indicates that the rule is being created. In this case, you can only perform query operations.
   *     *   If the forwarding rule is in the **active** state, it indicates that the rule is created.
   * *   The **CreateForwardingRules** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request CreateForwardingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateForwardingRulesResponse
   */
  async createForwardingRulesWithOptions(request: CreateForwardingRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateForwardingRulesResponse> {
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forwardingRules)) {
      bodyFlat["ForwardingRules"] = request.forwardingRules;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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

  /**
   * @summary Creates forwarding rules.
   *
   * @description HTTP and HTTPS listeners of Global Accelerator (GA) support domain name-based and path-based forwarding rules. After an HTTP or HTTPS listener receives a request, the system matches the request against the forwarding conditions in a forwarding rule and then performs the corresponding forwarding action. For example, if you set **Host** to `www.example.com` as the forwarding condition and **Forward** to `epg-bp1enpdcrqhl78g6r****` as the forwarding action in a forwarding rule, requests to the `www.example.com` domain name match this forwarding rule and are forwarded to the `epg-bp1enpdcrqhl78g6r****` endpoint group. Before you call this API operation to create a forwarding rule, we recommend that you understand forwarding rules. For more information, see [Forwarding rules](https://help.aliyun.com/document_detail/204224.html).
   * When you call this operation, take note of the following items:
   * *   **CreateForwardingRules** is an asynchronous operation. After you send a request, the system returns the ID of a forwarding rule, but the forwarding rule is still being created in the system background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the state of the forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, it indicates that the rule is being created. In this case, you can only perform query operations.
   *     *   If the forwarding rule is in the **active** state, it indicates that the rule is created.
   * *   The **CreateForwardingRules** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request CreateForwardingRulesRequest
   * @return CreateForwardingRulesResponse
   */
  async createForwardingRules(request: CreateForwardingRulesRequest): Promise<CreateForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createForwardingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Creates acceleration regions.
   *
   * @description *   **CreateIpSets** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If acceleration regions are in the **init** state, it indicates that the acceleration regions are being created. In this case, you can perform only query operations.
   *     *   If acceleration regions are in the **active** state, it indicates that the acceleration regions are created.
   * *   You cannot call the **CreateIpSets** operation again on the same GA instance before the previous operation is completed.
   *
   * @param request CreateIpSetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateIpSetsResponse
   */
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

  /**
   * @summary Creates acceleration regions.
   *
   * @description *   **CreateIpSets** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If acceleration regions are in the **init** state, it indicates that the acceleration regions are being created. In this case, you can perform only query operations.
   *     *   If acceleration regions are in the **active** state, it indicates that the acceleration regions are created.
   * *   You cannot call the **CreateIpSets** operation again on the same GA instance before the previous operation is completed.
   *
   * @param request CreateIpSetsRequest
   * @return CreateIpSetsResponse
   */
  async createIpSets(request: CreateIpSetsRequest): Promise<CreateIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIpSetsWithOptions(request, runtime);
  }

  /**
   * @summary A listener checks connection requests and distributes the requests to endpoints based on forwarding rules that are defined by the scheduling algorithm. You can call the CreateListener operation to create a listener for a GA instance.
   *
   * @description When you call this operation, take note of the following items:
   * *   **CreateListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the task.
   *     *   If the listener is in the **init** state, the listener is being created. In this state, you can perform only query operations.
   *     *   If the listener is in the **active** state, the listener is created.
   * *   You cannot repeatedly call the **CreateListener** operation for the same GA instance within the specified period of time.
   *
   * @param request CreateListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateListenerResponse
   */
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

    if (!Util.isUnset(request.customRoutingEndpointGroupConfigurations)) {
      query["CustomRoutingEndpointGroupConfigurations"] = request.customRoutingEndpointGroupConfigurations;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endpointGroupConfigurations)) {
      query["EndpointGroupConfigurations"] = request.endpointGroupConfigurations;
    }

    if (!Util.isUnset(request.httpVersion)) {
      query["HttpVersion"] = request.httpVersion;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
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

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.XForwardedForConfig)) {
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

  /**
   * @summary A listener checks connection requests and distributes the requests to endpoints based on forwarding rules that are defined by the scheduling algorithm. You can call the CreateListener operation to create a listener for a GA instance.
   *
   * @description When you call this operation, take note of the following items:
   * *   **CreateListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the task.
   *     *   If the listener is in the **init** state, the listener is being created. In this state, you can perform only query operations.
   *     *   If the listener is in the **active** state, the listener is created.
   * *   You cannot repeatedly call the **CreateListener** operation for the same GA instance within the specified period of time.
   *
   * @param request CreateListenerRequest
   * @return CreateListenerResponse
   */
  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
   * @summary Creates secondary IP addresses for a CNAME that is assigned to a Global Accelerator (GA) instance. If an acceleration area of the GA instance becomes unavailable, access traffic is redirected to the secondary IP addresses.
   *
   * @description *   **CreateSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that secondary IP addresses are being created for the CNAME that is assigned to the GA instance. In this case, you can only perform query operations.
   *     *   If the GA instance is in the **active** state, it indicates that secondary IP addresses are created for the CNAME that is assigned to the GA instance.
   * *   The **CreateSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request CreateSpareIpsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSpareIpsResponse
   */
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

  /**
   * @summary Creates secondary IP addresses for a CNAME that is assigned to a Global Accelerator (GA) instance. If an acceleration area of the GA instance becomes unavailable, access traffic is redirected to the secondary IP addresses.
   *
   * @description *   **CreateSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that secondary IP addresses are being created for the CNAME that is assigned to the GA instance. In this case, you can only perform query operations.
   *     *   If the GA instance is in the **active** state, it indicates that secondary IP addresses are created for the CNAME that is assigned to the GA instance.
   * *   The **CreateSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request CreateSpareIpsRequest
   * @return CreateSpareIpsResponse
   */
  async createSpareIps(request: CreateSpareIpsRequest): Promise<CreateSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSpareIpsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a Global Accelerator (GA) instance.
   *
   * @description *   You cannot delete subscription GA instances.
   * *   **DeleteAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **deleting** state, the GA instance is being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance cannot be queried, the GA instance is deleted.
   *
   * @param request DeleteAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAcceleratorResponse
   */
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

  /**
   * @summary Deletes a Global Accelerator (GA) instance.
   *
   * @description *   You cannot delete subscription GA instances.
   * *   **DeleteAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **deleting** state, the GA instance is being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance cannot be queried, the GA instance is deleted.
   *
   * @param request DeleteAcceleratorRequest
   * @return DeleteAcceleratorResponse
   */
  async deleteAccelerator(request: DeleteAcceleratorRequest): Promise<DeleteAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a access control list (ACL) of a Global Accelerator (GA) instance.
   *
   * @description **DeleteAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) operation to query the status of an ACL.
   * *   If the ACL is in the **deleting** state, it indicates that the ACL is being deleted. In this case, you can perform only query operations.
   * *   If the ACL cannot be queried, it indicates that the ACL is deleted.
   *
   * @param request DeleteAclRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAclResponse
   */
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

  /**
   * @summary Deletes a access control list (ACL) of a Global Accelerator (GA) instance.
   *
   * @description **DeleteAcl** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) operation to query the status of an ACL.
   * *   If the ACL is in the **deleting** state, it indicates that the ACL is being deleted. In this case, you can perform only query operations.
   * *   If the ACL cannot be queried, it indicates that the ACL is deleted.
   *
   * @param request DeleteAclRequest
   * @return DeleteAclResponse
   */
  async deleteAcl(request: DeleteAclRequest): Promise<DeleteAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an origin probing task.
   *
   * @description *   **DeleteApplicationMonitor** is an asynchronous operation. After you call this operation, the system returns a request ID, but the operation is still being performed in the system background. You can call the [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the state of an origin probing task.
   *     *   If the origin probing task is in the **deleting** state, it indicates that the task is being deleted. In this case, you can perform only query operations.
   *     *   If the origin probing task cannot be queried, it indicates that the task is deleted.
   * *   The **DeleteApplicationMonitor** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApplicationMonitorResponse
   */
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

  /**
   * @summary Deletes an origin probing task.
   *
   * @description *   **DeleteApplicationMonitor** is an asynchronous operation. After you call this operation, the system returns a request ID, but the operation is still being performed in the system background. You can call the [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to query the state of an origin probing task.
   *     *   If the origin probing task is in the **deleting** state, it indicates that the task is being deleted. In this case, you can perform only query operations.
   *     *   If the origin probing task cannot be queried, it indicates that the task is deleted.
   * *   The **DeleteApplicationMonitor** operation cannot be called repeatedly for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteApplicationMonitorRequest
   * @return DeleteApplicationMonitorResponse
   */
  async deleteApplicationMonitor(request: DeleteApplicationMonitorRequest): Promise<DeleteApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a bandwidth plan.
   *
   * @description *   By default, subscription bandwidth plans cannot be deleted. If you want to unsubscribe from subscription bandwidth plans, go to the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you can unsubscribe from a subscription bandwidth plan that is associated with a Global Accelerator (GA) instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Bandwidth plans that are associated with GA instances cannot be deleted. Before you can delete a bandwidth plan that is associated with a GA instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   **DeleteBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the bandwidth plan is in the **deleting** state, the bandwidth plan is being deleted. In this case, you can perform only query operations.
   *     *   If the bandwidth plan cannot be found, the bandwidth plan is deleted.
   * *   The **DeleteBandwidthPackage** operation cannot be repeatedly called for the same bandwidth plan within a specific period of time.
   *
   * @param request DeleteBandwidthPackageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBandwidthPackageResponse
   */
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

  /**
   * @summary Deletes a bandwidth plan.
   *
   * @description *   By default, subscription bandwidth plans cannot be deleted. If you want to unsubscribe from subscription bandwidth plans, go to the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you can unsubscribe from a subscription bandwidth plan that is associated with a Global Accelerator (GA) instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Bandwidth plans that are associated with GA instances cannot be deleted. Before you can delete a bandwidth plan that is associated with a GA instance, you must disassociate the bandwidth plan from the GA instance. For information about how to disassociate a bandwidth plan from a GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   **DeleteBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the bandwidth plan is in the **deleting** state, the bandwidth plan is being deleted. In this case, you can perform only query operations.
   *     *   If the bandwidth plan cannot be found, the bandwidth plan is deleted.
   * *   The **DeleteBandwidthPackage** operation cannot be repeatedly called for the same bandwidth plan within a specific period of time.
   *
   * @param request DeleteBandwidthPackageRequest
   * @return DeleteBandwidthPackageResponse
   */
  async deleteBandwidthPackage(request: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an accelerated IP address of a basic Global Accelerator (GA) instance.
   *
   * @description *   **DeleteBasicAccelerateIp** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address.
   *     *   If an accelerated IP address is in the **deleting** state, the accelerated IP address is being deleted. In this case, you can perform only query operations.
   *     *   If the system fails to return information about an accelerated IP address, the accelerated IP address is deleted.
   * *   You cannot repeatedly call the **DeleteBasicAccelerateIp** operation for the same basic GA instance within a specific period of time.
   *
   * @param request DeleteBasicAccelerateIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBasicAccelerateIpResponse
   */
  async deleteBasicAccelerateIpWithOptions(request: DeleteBasicAccelerateIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBasicAccelerateIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
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
      action: "DeleteBasicAccelerateIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBasicAccelerateIpResponse>(await this.callApi(params, req, runtime), new DeleteBasicAccelerateIpResponse({}));
  }

  /**
   * @summary Deletes an accelerated IP address of a basic Global Accelerator (GA) instance.
   *
   * @description *   **DeleteBasicAccelerateIp** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) operation to query the status of an accelerated IP address.
   *     *   If an accelerated IP address is in the **deleting** state, the accelerated IP address is being deleted. In this case, you can perform only query operations.
   *     *   If the system fails to return information about an accelerated IP address, the accelerated IP address is deleted.
   * *   You cannot repeatedly call the **DeleteBasicAccelerateIp** operation for the same basic GA instance within a specific period of time.
   *
   * @param request DeleteBasicAccelerateIpRequest
   * @return DeleteBasicAccelerateIpResponse
   */
  async deleteBasicAccelerateIp(request: DeleteBasicAccelerateIpRequest): Promise<DeleteBasicAccelerateIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicAccelerateIpWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   *
   * @description *   **DeleteBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the following operations to check whether an accelerated IP address is disassociated from an endpoint:
   *     *   You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) and [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operations to query the status of an accelerated IP address and an endpoint. If the accelerated IP address and the endpoint are in the **unbinding** state, the accelerated IP address is being disassociated from the endpoint. In this case, you can query the IP address and endpoint but cannot perform other operations.
   *     *   If the association status between the accelerated IP address and the endpoint cannot be queried by calling the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) operation, the accelerated IP address is disassociated from the endpoint.
   * *   The **DeleteBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request DeleteBasicAccelerateIpEndpointRelationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBasicAccelerateIpEndpointRelationResponse
   */
  async deleteBasicAccelerateIpEndpointRelationWithOptions(request: DeleteBasicAccelerateIpEndpointRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBasicAccelerateIpEndpointRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBasicAccelerateIpEndpointRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBasicAccelerateIpEndpointRelationResponse>(await this.callApi(params, req, runtime), new DeleteBasicAccelerateIpEndpointRelationResponse({}));
  }

  /**
   * @summary Deletes a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.
   *
   * @description *   **DeleteBasicAccelerateIpEndpointRelation** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the following operations to check whether an accelerated IP address is disassociated from an endpoint:
   *     *   You can call the [GetBasicAccelerateIp](https://help.aliyun.com/document_detail/466794.html) and [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operations to query the status of an accelerated IP address and an endpoint. If the accelerated IP address and the endpoint are in the **unbinding** state, the accelerated IP address is being disassociated from the endpoint. In this case, you can query the IP address and endpoint but cannot perform other operations.
   *     *   If the association status between the accelerated IP address and the endpoint cannot be queried by calling the [ListBasicAccelerateIpEndpointRelations](https://help.aliyun.com/document_detail/466803.html) operation, the accelerated IP address is disassociated from the endpoint.
   * *   The **DeleteBasicAccelerateIpEndpointRelation** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request DeleteBasicAccelerateIpEndpointRelationRequest
   * @return DeleteBasicAccelerateIpEndpointRelationResponse
   */
  async deleteBasicAccelerateIpEndpointRelation(request: DeleteBasicAccelerateIpEndpointRelationRequest): Promise<DeleteBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a basic Global Accelerator (GA) instance.
   *
   * @description *   You cannot delete subscription basic GA instances. You can unsubscribe from a basic GA instance on the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you unsubscribe from a basic GA instance, make sure that the acceleration areas and endpoint groups of the GA instance are deleted and no bandwidth plans are associated with the GA instance.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   *     *   For information about how to disassociate a bandwidth plan from a basic GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Before you call this operation to delete a pay-as-you-go basic GA instance, make sure that all data is migrated and the acceleration areas and endpoint groups of the instance are deleted.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   * *   **DeleteBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **deleting** state, it indicates that the instance is being deleted. In this case, you can perform only query operations.
   *     *   If the information about the basic GA instance is not displayed in the response, it indicates that the instance is deleted.
   *
   * @param request DeleteBasicAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBasicAcceleratorResponse
   */
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

  /**
   * @summary Deletes a basic Global Accelerator (GA) instance.
   *
   * @description *   You cannot delete subscription basic GA instances. You can unsubscribe from a basic GA instance on the [Unsubscribe](https://usercenter2-intl.aliyun.com/refund/refund) page. Before you unsubscribe from a basic GA instance, make sure that the acceleration areas and endpoint groups of the GA instance are deleted and no bandwidth plans are associated with the GA instance.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   *     *   For information about how to disassociate a bandwidth plan from a basic GA instance, see [BandwidthPackageRemoveAccelerator](https://help.aliyun.com/document_detail/153240.html).
   * *   Before you call this operation to delete a pay-as-you-go basic GA instance, make sure that all data is migrated and the acceleration areas and endpoint groups of the instance are deleted.
   *     *   For information about how to delete an acceleration area, see [DeleteBasicIpSet](https://help.aliyun.com/document_detail/2253388.html).
   *     *   For information about how to delete an endpoint group, see [DeleteBasicEndpointGroup](https://help.aliyun.com/document_detail/2253399.html).
   * *   **DeleteBasicAccelerator** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **deleting** state, it indicates that the instance is being deleted. In this case, you can perform only query operations.
   *     *   If the information about the basic GA instance is not displayed in the response, it indicates that the instance is deleted.
   *
   * @param request DeleteBasicAcceleratorRequest
   * @return DeleteBasicAcceleratorResponse
   */
  async deleteBasicAccelerator(request: DeleteBasicAcceleratorRequest): Promise<DeleteBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an endpoint that is associated with a basic Global Accelerator (GA) instance.
   *
   * @description *   **DeleteBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints.
   *     *   If the endpoint is in the **deleting** state, it indicates that the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint cannot be found, it indicates that the endpoint is deleted.
   * *   The **DeleteBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request DeleteBasicEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBasicEndpointResponse
   */
  async deleteBasicEndpointWithOptions(request: DeleteBasicEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBasicEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBasicEndpointResponse>(await this.callApi(params, req, runtime), new DeleteBasicEndpointResponse({}));
  }

  /**
   * @summary Deletes an endpoint that is associated with a basic Global Accelerator (GA) instance.
   *
   * @description *   **DeleteBasicEndpoint** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [ListBasicEndpoints](https://help.aliyun.com/document_detail/466831.html) operation to query the status of endpoints.
   *     *   If the endpoint is in the **deleting** state, it indicates that the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint cannot be found, it indicates that the endpoint is deleted.
   * *   The **DeleteBasicEndpoint** API operation cannot be repeatedly called for the same basic GA instance within a period of time.
   *
   * @param request DeleteBasicEndpointRequest
   * @return DeleteBasicEndpointResponse
   */
  async deleteBasicEndpoint(request: DeleteBasicEndpointRequest): Promise<DeleteBasicEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   *
   * @description Before you delete an endpoint group, take note of the following items:
   * *   If an endpoint in the endpoint group is associated with an accelerated IP address, you cannot delete the endpoint group. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the endpoint from the accelerated IP address.
   * *   If no endpoint in the endpoint group is associated with an accelerated IP address, you can delete the endpoint group. When you delete an endpoint group, all endpoints in the endpoint group are deleted.
   * *   **DeleteBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteBasicEndpointGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request DeleteBasicEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBasicEndpointGroupResponse
   */
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

  /**
   * @summary Deletes an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   *
   * @description Before you delete an endpoint group, take note of the following items:
   * *   If an endpoint in the endpoint group is associated with an accelerated IP address, you cannot delete the endpoint group. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the endpoint from the accelerated IP address.
   * *   If no endpoint in the endpoint group is associated with an accelerated IP address, you can delete the endpoint group. When you delete an endpoint group, all endpoints in the endpoint group are deleted.
   * *   **DeleteBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicEndpointGroup](https://help.aliyun.com/document_detail/362984.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteBasicEndpointGroup** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request DeleteBasicEndpointGroupRequest
   * @return DeleteBasicEndpointGroupResponse
   */
  async deleteBasicEndpointGroup(request: DeleteBasicEndpointGroupRequest): Promise<DeleteBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes the acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @description *   If an accelerated IP address is associated with an endpoint, you cannot delete the acceleration region. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the accelerated IP address from the endpoint.
   * *   \\*\\*DeleteBasicIpSet\\*\\* is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The \\*\\*DeleteBasicIpSet\\*\\* operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   *
   * @param request DeleteBasicIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBasicIpSetResponse
   */
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

  /**
   * @summary Deletes the acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @description *   If an accelerated IP address is associated with an endpoint, you cannot delete the acceleration region. You can call the [DeleteBasicAccelerateIpEndpointRelation](https://help.aliyun.com/document_detail/2253413.html) operation to disassociate the accelerated IP address from the endpoint.
   * *   \\*\\*DeleteBasicIpSet\\*\\* is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The \\*\\*DeleteBasicIpSet\\*\\* operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   *
   * @param request DeleteBasicIpSetRequest
   * @return DeleteBasicIpSetResponse
   */
  async deleteBasicIpSet(request: DeleteBasicIpSetRequest): Promise<DeleteBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBasicIpSetWithOptions(request, runtime);
  }

  /**
   * @summary Deletes mappings from an endpoint group that is associated with a custom routing listener.
   *
   * @description *   **DeleteCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that mappings are being deleted from the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and no information about the mappings that you want to delete is found in the response when you call the [DescribeCustomRoutingEndpointGroupDestinations](https://help.aliyun.com/document_detail/449378.html) operation, it indicates the mappings are deleted from the endpoint group.
   * *   You cannot call the **DeleteCustomRoutingEndpointGroupDestinations** operation again on the same Global Accelerator (GA) instance before the previous request is completed.
   *
   * @param request DeleteCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomRoutingEndpointGroupDestinationsResponse
   */
  async deleteCustomRoutingEndpointGroupDestinationsWithOptions(request: DeleteCustomRoutingEndpointGroupDestinationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomRoutingEndpointGroupDestinationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationIds)) {
      query["DestinationIds"] = request.destinationIds;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
      action: "DeleteCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new DeleteCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * @summary Deletes mappings from an endpoint group that is associated with a custom routing listener.
   *
   * @description *   **DeleteCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, it indicates that mappings are being deleted from the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and no information about the mappings that you want to delete is found in the response when you call the [DescribeCustomRoutingEndpointGroupDestinations](https://help.aliyun.com/document_detail/449378.html) operation, it indicates the mappings are deleted from the endpoint group.
   * *   You cannot call the **DeleteCustomRoutingEndpointGroupDestinations** operation again on the same Global Accelerator (GA) instance before the previous request is completed.
   *
   * @param request DeleteCustomRoutingEndpointGroupDestinationsRequest
   * @return DeleteCustomRoutingEndpointGroupDestinationsResponse
   */
  async deleteCustomRoutingEndpointGroupDestinations(request: DeleteCustomRoutingEndpointGroupDestinationsRequest): Promise<DeleteCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes multiple endpoint groups that are associated with a custom routing listener.
   *
   * @description *   **DeleteCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener that you attempt to delete.
   *     *   If the endpoint groups are in the **deleting** state, the endpoint groups are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint groups cannot be queried, the endpoint groups are deleted.
   * *   You cannot use the **DeleteCustomRoutingEndpointGroups** operation on the same Global Accelerator (GA) instance before the previous operation is complete.
   *
   * @param request DeleteCustomRoutingEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomRoutingEndpointGroupsResponse
   */
  async deleteCustomRoutingEndpointGroupsWithOptions(request: DeleteCustomRoutingEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomRoutingEndpointGroupsResponse> {
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
      action: "DeleteCustomRoutingEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomRoutingEndpointGroupsResponse>(await this.callApi(params, req, runtime), new DeleteCustomRoutingEndpointGroupsResponse({}));
  }

  /**
   * @summary Deletes multiple endpoint groups that are associated with a custom routing listener.
   *
   * @description *   **DeleteCustomRoutingEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener that you attempt to delete.
   *     *   If the endpoint groups are in the **deleting** state, the endpoint groups are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint groups cannot be queried, the endpoint groups are deleted.
   * *   You cannot use the **DeleteCustomRoutingEndpointGroups** operation on the same Global Accelerator (GA) instance before the previous operation is complete.
   *
   * @param request DeleteCustomRoutingEndpointGroupsRequest
   * @return DeleteCustomRoutingEndpointGroupsResponse
   */
  async deleteCustomRoutingEndpointGroups(request: DeleteCustomRoutingEndpointGroupsRequest): Promise<DeleteCustomRoutingEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes traffic destinations from an endpoint.
   *
   * @description *   **DeleteCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group to check whether the traffic destinations are deleted.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and the traffic destinations that you want to delete cannot be queried by calling the [DescribeCustomRoutingEndPointTrafficPolicy](https://help.aliyun.com/document_detail/449392.html) operation, the traffic destinations are deleted.
   * *   The **DeleteCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomRoutingEndpointTrafficPoliciesResponse
   */
  async deleteCustomRoutingEndpointTrafficPoliciesWithOptions(request: DeleteCustomRoutingEndpointTrafficPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomRoutingEndpointTrafficPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new DeleteCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * @summary Deletes traffic destinations from an endpoint.
   *
   * @description *   **DeleteCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group to check whether the traffic destinations are deleted.
   *     *   If the endpoint group is in the **updating** state, the traffic destinations are being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state and the traffic destinations that you want to delete cannot be queried by calling the [DescribeCustomRoutingEndPointTrafficPolicy](https://help.aliyun.com/document_detail/449392.html) operation, the traffic destinations are deleted.
   * *   The **DeleteCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteCustomRoutingEndpointTrafficPoliciesRequest
   * @return DeleteCustomRoutingEndpointTrafficPoliciesResponse
   */
  async deleteCustomRoutingEndpointTrafficPolicies(request: DeleteCustomRoutingEndpointTrafficPoliciesRequest): Promise<DeleteCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes endpoints from a custom routing listener.
   *
   * @description *   **DeleteCustomRoutingEndpoints** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If an endpoint group is in the **updating** state, the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state and the endpoint cannot be found after you call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation, the endpoint is deleted.
   * *   You cannot call the **DeleteCustomRoutingEndpoints** operation again on the same Global Accelerator (GA) instance before the previous task is completed.
   *
   * @param request DeleteCustomRoutingEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomRoutingEndpointsResponse
   */
  async deleteCustomRoutingEndpointsWithOptions(request: DeleteCustomRoutingEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomRoutingEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointIds)) {
      query["EndpointIds"] = request.endpointIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new DeleteCustomRoutingEndpointsResponse({}));
  }

  /**
   * @summary Deletes endpoints from a custom routing listener.
   *
   * @description *   **DeleteCustomRoutingEndpoints** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) to query the status of the task.
   *     *   If an endpoint group is in the **updating** state, the endpoint is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state and the endpoint cannot be found after you call the [DescribeCustomRoutingEndpoint](https://help.aliyun.com/document_detail/449386.html) operation, the endpoint is deleted.
   * *   You cannot call the **DeleteCustomRoutingEndpoints** operation again on the same Global Accelerator (GA) instance before the previous task is completed.
   *
   * @param request DeleteCustomRoutingEndpointsRequest
   * @return DeleteCustomRoutingEndpointsResponse
   */
  async deleteCustomRoutingEndpoints(request: DeleteCustomRoutingEndpointsRequest): Promise<DeleteCustomRoutingEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates a domain name from Global Accelerator (GA) instances.
   *
   * @description You cannot call the **DeleteDomainAcceleratorRelation** operation again by using the same Alibaba Cloud account before the previous operation is complete.
   *
   * @param request DeleteDomainAcceleratorRelationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDomainAcceleratorRelationResponse
   */
  async deleteDomainAcceleratorRelationWithOptions(request: DeleteDomainAcceleratorRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainAcceleratorRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorIds)) {
      query["AcceleratorIds"] = request.acceleratorIds;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainAcceleratorRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainAcceleratorRelationResponse>(await this.callApi(params, req, runtime), new DeleteDomainAcceleratorRelationResponse({}));
  }

  /**
   * @summary Disassociates a domain name from Global Accelerator (GA) instances.
   *
   * @description You cannot call the **DeleteDomainAcceleratorRelation** operation again by using the same Alibaba Cloud account before the previous operation is complete.
   *
   * @param request DeleteDomainAcceleratorRelationRequest
   * @return DeleteDomainAcceleratorRelationResponse
   */
  async deleteDomainAcceleratorRelation(request: DeleteDomainAcceleratorRelationRequest): Promise<DeleteDomainAcceleratorRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainAcceleratorRelationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an endpoint group.
   *
   * @description *   **DeleteEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group.
   *     *   If the endpoint group is in the **deleting** state, it indicates that the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, it indicates that the endpoint group is deleted.
   * *   The **DeleteEndpointGroup** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request DeleteEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEndpointGroupResponse
   */
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

  /**
   * @summary Deletes an endpoint group.
   *
   * @description *   **DeleteEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the endpoint group.
   *     *   If the endpoint group is in the **deleting** state, it indicates that the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If the endpoint group cannot be queried, it indicates that the endpoint group is deleted.
   * *   The **DeleteEndpointGroup** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request DeleteEndpointGroupRequest
   * @return DeleteEndpointGroupResponse
   */
  async deleteEndpointGroup(request: DeleteEndpointGroupRequest): Promise<DeleteEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes endpoint groups.
   *
   * @description *   **DeleteEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the task.
   *     *   If an endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEndpointGroupsResponse
   */
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

  /**
   * @summary Deletes endpoint groups.
   *
   * @description *   **DeleteEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the status of the task.
   *     *   If an endpoint group is in the **deleting** state, the endpoint group is being deleted. In this case, you can perform only query operations.
   *     *   If an endpoint group cannot be queried, the endpoint group is deleted.
   * *   The **DeleteEndpointGroups** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteEndpointGroupsRequest
   * @return DeleteEndpointGroupsResponse
   */
  async deleteEndpointGroups(request: DeleteEndpointGroupsRequest): Promise<DeleteEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes forwarding rules.
   *
   * @description *   **DeleteForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of the task.
   *     *   If a forwarding rule is in the **deleting** state, the forwarding rule is being deleted. In this case, you can perform only query operations.
   *     *   If a forwarding rule cannot be queried, the forwarding rule is deleted.
   * *   The **DeleteForwardingRules** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteForwardingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteForwardingRulesResponse
   */
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

  /**
   * @summary Deletes forwarding rules.
   *
   * @description *   **DeleteForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of the task.
   *     *   If a forwarding rule is in the **deleting** state, the forwarding rule is being deleted. In this case, you can perform only query operations.
   *     *   If a forwarding rule cannot be queried, the forwarding rule is deleted.
   * *   The **DeleteForwardingRules** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteForwardingRulesRequest
   * @return DeleteForwardingRulesResponse
   */
  async deleteForwardingRules(request: DeleteForwardingRulesRequest): Promise<DeleteForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteForwardingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an acceleration region.
   *
   * @description *   **DeleteIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The **DeleteIpSet** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request DeleteIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIpSetResponse
   */
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

  /**
   * @summary Deletes an acceleration region.
   *
   * @description *   **DeleteIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **deleting** state, it indicates that the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If the acceleration region cannot be queried, it indicates that the acceleration region is deleted.
   * *   The **DeleteIpSet** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request DeleteIpSetRequest
   * @return DeleteIpSetResponse
   */
  async deleteIpSet(request: DeleteIpSetRequest): Promise<DeleteIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpSetWithOptions(request, runtime);
  }

  /**
   * @summary Deletes acceleration regions.
   *
   * @description *   **DeleteIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If you cannot query the acceleration region, the acceleration region is deleted.
   * *   You cannot repeatedly call the **DeleteIpSets** operation for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteIpSetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIpSetsResponse
   */
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

  /**
   * @summary Deletes acceleration regions.
   *
   * @description *   **DeleteIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **deleting** state, the acceleration region is being deleted. In this case, you can perform only query operations.
   *     *   If you cannot query the acceleration region, the acceleration region is deleted.
   * *   You cannot repeatedly call the **DeleteIpSets** operation for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteIpSetsRequest
   * @return DeleteIpSetsResponse
   */
  async deleteIpSets(request: DeleteIpSetsRequest): Promise<DeleteIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpSetsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a listener.
   *
   * @description *   Before you call the **DeleteListener** operation, make sure that no endpoint groups are associated with the listener that you want to delete. For information about how to delete an endpoint group, see the following topics:
   *     *   [DeleteEndpointGroup](https://help.aliyun.com/document_detail/2253305.html): deletes an endpoint group that is associated with an intelligent routing listener.
   *     *   [DeleteEndpointGroups](https://help.aliyun.com/document_detail/2253311.html): deletes multiple endpoint groups that are associated with intelligent routing listeners at the same time.
   *     *   [DeleteCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/2303183.html): deletes multiple endpoint groups that are associated with custom routing listeners at the same time.
   * *   **DeleteListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener.
   *     *   If the listener is in the **deleting** state, the listener is being deleted. In this case, you can perform only query operations.
   *     *   If the listener cannot be queried, the listener is deleted.
   * *   You cannot repeatedly call the **DeleteListener** operation to delete the listeners of the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteListenerResponse
   */
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

  /**
   * @summary Deletes a listener.
   *
   * @description *   Before you call the **DeleteListener** operation, make sure that no endpoint groups are associated with the listener that you want to delete. For information about how to delete an endpoint group, see the following topics:
   *     *   [DeleteEndpointGroup](https://help.aliyun.com/document_detail/2253305.html): deletes an endpoint group that is associated with an intelligent routing listener.
   *     *   [DeleteEndpointGroups](https://help.aliyun.com/document_detail/2253311.html): deletes multiple endpoint groups that are associated with intelligent routing listeners at the same time.
   *     *   [DeleteCustomRoutingEndpointGroups](https://help.aliyun.com/document_detail/2303183.html): deletes multiple endpoint groups that are associated with custom routing listeners at the same time.
   * *   **DeleteListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of the listener.
   *     *   If the listener is in the **deleting** state, the listener is being deleted. In this case, you can perform only query operations.
   *     *   If the listener cannot be queried, the listener is deleted.
   * *   You cannot repeatedly call the **DeleteListener** operation to delete the listeners of the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DeleteListenerRequest
   * @return DeleteListenerResponse
   */
  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  /**
   * @summary Deletes the secondary IP addresses that are associated with a CNAME.
   *
   * @description *   **DeleteSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the secondary IP addresses for the CNAME are being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state and the secondary IP addresses for the CNAME cannot be queried by calling the [ListSpareIps](https://help.aliyun.com/document_detail/262121.html) operation, it indicates that the IP addresses are deleted.
   * *   The **DeleteSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request DeleteSpareIpsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSpareIpsResponse
   */
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

  /**
   * @summary Deletes the secondary IP addresses that are associated with a CNAME.
   *
   * @description *   **DeleteSpareIps** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the secondary IP addresses for the CNAME are being deleted. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state and the secondary IP addresses for the CNAME cannot be queried by calling the [ListSpareIps](https://help.aliyun.com/document_detail/262121.html) operation, it indicates that the IP addresses are deleted.
   * *   The **DeleteSpareIps** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request DeleteSpareIpsRequest
   * @return DeleteSpareIpsResponse
   */
  async deleteSpareIps(request: DeleteSpareIpsRequest): Promise<DeleteSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSpareIpsWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about a Global Accelerator (GA) instance.
   *
   * @param request DescribeAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAcceleratorResponse
   */
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

  /**
   * @summary Queries information about a Global Accelerator (GA) instance.
   *
   * @param request DescribeAcceleratorRequest
   * @return DescribeAcceleratorResponse
   */
  async describeAccelerator(request: DescribeAcceleratorRequest): Promise<DescribeAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Queries the auto-renewal status of a Global Accelerator (GA) instance.
   *
   * @param request DescribeAcceleratorAutoRenewAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAcceleratorAutoRenewAttributeResponse
   */
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

  /**
   * @summary Queries the auto-renewal status of a Global Accelerator (GA) instance.
   *
   * @param request DescribeAcceleratorAutoRenewAttributeRequest
   * @return DescribeAcceleratorAutoRenewAttributeResponse
   */
  async describeAcceleratorAutoRenewAttribute(request: DescribeAcceleratorAutoRenewAttributeRequest): Promise<DescribeAcceleratorAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAcceleratorAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of a pay-as-you-go Global Accelerator (GA) instance.
   *
   * @param request DescribeAcceleratorServiceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAcceleratorServiceStatusResponse
   */
  async describeAcceleratorServiceStatusWithOptions(request: DescribeAcceleratorServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAcceleratorServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAcceleratorServiceStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAcceleratorServiceStatusResponse>(await this.callApi(params, req, runtime), new DescribeAcceleratorServiceStatusResponse({}));
  }

  /**
   * @summary Queries the status of a pay-as-you-go Global Accelerator (GA) instance.
   *
   * @param request DescribeAcceleratorServiceStatusRequest
   * @return DescribeAcceleratorServiceStatusResponse
   */
  async describeAcceleratorServiceStatus(request: DescribeAcceleratorServiceStatusRequest): Promise<DescribeAcceleratorServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAcceleratorServiceStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the detailed information about an origin probing task.
   *
   * @param request DescribeApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeApplicationMonitorResponse
   */
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

  /**
   * @summary Queries the detailed information about an origin probing task.
   *
   * @param request DescribeApplicationMonitorRequest
   * @return DescribeApplicationMonitorResponse
   */
  async describeApplicationMonitor(request: DescribeApplicationMonitorRequest): Promise<DescribeApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about a bandwidth plan.
   *
   * @param request DescribeBandwidthPackageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBandwidthPackageResponse
   */
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

  /**
   * @summary Queries information about a bandwidth plan.
   *
   * @param request DescribeBandwidthPackageRequest
   * @return DescribeBandwidthPackageResponse
   */
  async describeBandwidthPackage(request: DescribeBandwidthPackageRequest): Promise<DescribeBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * @summary Queries the auto-renewal status of a bandwidth plan.
   *
   * @param request DescribeBandwidthPackageAutoRenewAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBandwidthPackageAutoRenewAttributeResponse
   */
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

  /**
   * @summary Queries the auto-renewal status of a bandwidth plan.
   *
   * @param request DescribeBandwidthPackageAutoRenewAttributeRequest
   * @return DescribeBandwidthPackageAutoRenewAttributeResponse
   */
  async describeBandwidthPackageAutoRenewAttribute(request: DescribeBandwidthPackageAutoRenewAttributeRequest): Promise<DescribeBandwidthPackageAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBandwidthPackageAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about commodities.
   *
   * @param request DescribeCommodityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCommodityResponse
   */
  async describeCommodityWithOptions(request: DescribeCommodityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommodityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCommodity",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCommodityResponse>(await this.callApi(params, req, runtime), new DescribeCommodityResponse({}));
  }

  /**
   * @summary Queries information about commodities.
   *
   * @param request DescribeCommodityRequest
   * @return DescribeCommodityResponse
   */
  async describeCommodity(request: DescribeCommodityRequest): Promise<DescribeCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommodityWithOptions(request, runtime);
  }

  /**
   * @summary Queries the prices of commodities.
   *
   * @description You can call the [DescribeCommodity](https://help.aliyun.com/document_detail/2253233.html) operation to query information about the commodity modules.
   *
   * @param request DescribeCommodityPriceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCommodityPriceResponse
   */
  async describeCommodityPriceWithOptions(request: DescribeCommodityPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommodityPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orders)) {
      query["Orders"] = request.orders;
    }

    if (!Util.isUnset(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCommodityPrice",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCommodityPriceResponse>(await this.callApi(params, req, runtime), new DescribeCommodityPriceResponse({}));
  }

  /**
   * @summary Queries the prices of commodities.
   *
   * @description You can call the [DescribeCommodity](https://help.aliyun.com/document_detail/2253233.html) operation to query information about the commodity modules.
   *
   * @param request DescribeCommodityPriceRequest
   * @return DescribeCommodityPriceResponse
   */
  async describeCommodityPrice(request: DescribeCommodityPriceRequest): Promise<DescribeCommodityPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommodityPriceWithOptions(request, runtime);
  }

  /**
   * @summary Queries a traffic destination of an endpoint.
   *
   * @param request DescribeCustomRoutingEndPointTrafficPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCustomRoutingEndPointTrafficPolicyResponse
   */
  async describeCustomRoutingEndPointTrafficPolicyWithOptions(request: DescribeCustomRoutingEndPointTrafficPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomRoutingEndPointTrafficPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomRoutingEndPointTrafficPolicy",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomRoutingEndPointTrafficPolicyResponse>(await this.callApi(params, req, runtime), new DescribeCustomRoutingEndPointTrafficPolicyResponse({}));
  }

  /**
   * @summary Queries a traffic destination of an endpoint.
   *
   * @param request DescribeCustomRoutingEndPointTrafficPolicyRequest
   * @return DescribeCustomRoutingEndPointTrafficPolicyResponse
   */
  async describeCustomRoutingEndPointTrafficPolicy(request: DescribeCustomRoutingEndPointTrafficPolicyRequest): Promise<DescribeCustomRoutingEndPointTrafficPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomRoutingEndPointTrafficPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Queries a specified endpoint that is associated with a custom routing listener.
   *
   * @param request DescribeCustomRoutingEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCustomRoutingEndpointResponse
   */
  async describeCustomRoutingEndpointWithOptions(request: DescribeCustomRoutingEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomRoutingEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpointGroup)) {
      query["EndpointGroup"] = request.endpointGroup;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomRoutingEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomRoutingEndpointResponse>(await this.callApi(params, req, runtime), new DescribeCustomRoutingEndpointResponse({}));
  }

  /**
   * @summary Queries a specified endpoint that is associated with a custom routing listener.
   *
   * @param request DescribeCustomRoutingEndpointRequest
   * @return DescribeCustomRoutingEndpointResponse
   */
  async describeCustomRoutingEndpoint(request: DescribeCustomRoutingEndpointRequest): Promise<DescribeCustomRoutingEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomRoutingEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a specific endpoint group that is associated with a custom routing listener.
   *
   * @param request DescribeCustomRoutingEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCustomRoutingEndpointGroupResponse
   */
  async describeCustomRoutingEndpointGroupWithOptions(request: DescribeCustomRoutingEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomRoutingEndpointGroupResponse> {
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
      action: "DescribeCustomRoutingEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomRoutingEndpointGroupResponse>(await this.callApi(params, req, runtime), new DescribeCustomRoutingEndpointGroupResponse({}));
  }

  /**
   * @summary Queries the information about a specific endpoint group that is associated with a custom routing listener.
   *
   * @param request DescribeCustomRoutingEndpointGroupRequest
   * @return DescribeCustomRoutingEndpointGroupResponse
   */
  async describeCustomRoutingEndpointGroup(request: DescribeCustomRoutingEndpointGroupRequest): Promise<DescribeCustomRoutingEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomRoutingEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the mapping configuration of a specified endpoint group that is associated with a custom routing listener.
   *
   * @param request DescribeCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCustomRoutingEndpointGroupDestinationsResponse
   */
  async describeCustomRoutingEndpointGroupDestinationsWithOptions(request: DescribeCustomRoutingEndpointGroupDestinationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomRoutingEndpointGroupDestinationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationId)) {
      query["DestinationId"] = request.destinationId;
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
      action: "DescribeCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new DescribeCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * @summary Queries the mapping configuration of a specified endpoint group that is associated with a custom routing listener.
   *
   * @param request DescribeCustomRoutingEndpointGroupDestinationsRequest
   * @return DescribeCustomRoutingEndpointGroupDestinationsResponse
   */
  async describeCustomRoutingEndpointGroupDestinations(request: DescribeCustomRoutingEndpointGroupDestinationsRequest): Promise<DescribeCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about an endpoint group.
   *
   * @param request DescribeEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeEndpointGroupResponse
   */
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

  /**
   * @summary Queries the information about an endpoint group.
   *
   * @param request DescribeEndpointGroupRequest
   * @return DescribeEndpointGroupResponse
   */
  async describeEndpointGroup(request: DescribeEndpointGroupRequest): Promise<DescribeEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about an acceleration region.
   *
   * @param request DescribeIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeIpSetResponse
   */
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

  /**
   * @summary Queries information about an acceleration region.
   *
   * @param request DescribeIpSetRequest
   * @return DescribeIpSetResponse
   */
  async describeIpSet(request: DescribeIpSetRequest): Promise<DescribeIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpSetWithOptions(request, runtime);
  }

  /**
   * @summary Queries configuration information about a listener of a Global Accelerator (GA) instance.
   *
   * @description This operation is used to query configuration information about a listener of a GA instance. The information includes the routing type of the listener, the status of the listener, the timestamp that indicates when the listener was created, and the listener ports.
   *
   * @param request DescribeListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeListenerResponse
   */
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

  /**
   * @summary Queries configuration information about a listener of a Global Accelerator (GA) instance.
   *
   * @description This operation is used to query configuration information about a listener of a GA instance. The information includes the routing type of the listener, the status of the listener, the timestamp that indicates when the listener was created, and the listener ports.
   *
   * @param request DescribeListenerRequest
   * @return DescribeListenerResponse
   */
  async describeListener(request: DescribeListenerRequest): Promise<DescribeListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListenerWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Simple Log Service project and Logstore associated with an endpoint group.
   *
   * @param request DescribeLogStoreOfEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLogStoreOfEndpointGroupResponse
   */
  async describeLogStoreOfEndpointGroupWithOptions(request: DescribeLogStoreOfEndpointGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreOfEndpointGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
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
      action: "DescribeLogStoreOfEndpointGroup",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogStoreOfEndpointGroupResponse>(await this.callApi(params, req, runtime), new DescribeLogStoreOfEndpointGroupResponse({}));
  }

  /**
   * @summary Queries the Simple Log Service project and Logstore associated with an endpoint group.
   *
   * @param request DescribeLogStoreOfEndpointGroupRequest
   * @return DescribeLogStoreOfEndpointGroupResponse
   */
  async describeLogStoreOfEndpointGroup(request: DescribeLogStoreOfEndpointGroupRequest): Promise<DescribeLogStoreOfEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreOfEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the regions where Global Accelerator (GA) instances are deployed.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
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

  /**
   * @summary Queries the regions where Global Accelerator (GA) instances are deployed.
   *
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates a Global Accelerator (GA) instance from an Anti-DDoS Pro or Anti-DDoS Premium instance.
   *
   * @description *   The **DetachDdosFromAccelerator** operation is asynchronous. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro/Premium instance is being disassociated from the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro/Premium instance is disassociated from the GA instance.
   * *   **DetachDdosFromAccelerator** cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request DetachDdosFromAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachDdosFromAcceleratorResponse
   */
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

  /**
   * @summary Disassociates a Global Accelerator (GA) instance from an Anti-DDoS Pro or Anti-DDoS Premium instance.
   *
   * @description *   The **DetachDdosFromAccelerator** operation is asynchronous. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, the Anti-DDoS Pro/Premium instance is being disassociated from the GA instance. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the Anti-DDoS Pro/Premium instance is disassociated from the GA instance.
   * *   **DetachDdosFromAccelerator** cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request DetachDdosFromAcceleratorRequest
   * @return DetachDdosFromAcceleratorResponse
   */
  async detachDdosFromAccelerator(request: DetachDdosFromAcceleratorRequest): Promise<DetachDdosFromAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDdosFromAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates a Log Service Logstore from an endpoint group.
   *
   * @description ## Description
   * *   **DetachLogStoreFromEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, the Log Service Logstore is being disassociated from the endpoint group. In this case, you can perform only query operations.
   *     <!---->
   *     *   If the endpoint group is in the **active** state, the Log Service Logstore is disassociated from the endpoint group.
   * *   The **DetachLogStoreFromEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DetachLogStoreFromEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachLogStoreFromEndpointGroupResponse
   */
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

  /**
   * @summary Disassociates a Log Service Logstore from an endpoint group.
   *
   * @description ## Description
   * *   **DetachLogStoreFromEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, the Log Service Logstore is being disassociated from the endpoint group. In this case, you can perform only query operations.
   *     <!---->
   *     *   If the endpoint group is in the **active** state, the Log Service Logstore is disassociated from the endpoint group.
   * *   The **DetachLogStoreFromEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DetachLogStoreFromEndpointGroupRequest
   * @return DetachLogStoreFromEndpointGroupResponse
   */
  async detachLogStoreFromEndpointGroup(request: DetachLogStoreFromEndpointGroupRequest): Promise<DetachLogStoreFromEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachLogStoreFromEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Enables the diagnostic feature for an origin probing task.
   *
   * @param request DetectApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetectApplicationMonitorResponse
   */
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

  /**
   * @summary Enables the diagnostic feature for an origin probing task.
   *
   * @param request DetectApplicationMonitorRequest
   * @return DetectApplicationMonitorResponse
   */
  async detectApplicationMonitor(request: DetectApplicationMonitorRequest): Promise<DetectApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Disables an origin probing task.
   *
   * @param request DisableApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationMonitorResponse
   */
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

  /**
   * @summary Disables an origin probing task.
   *
   * @param request DisableApplicationMonitorRequest
   * @return DisableApplicationMonitorResponse
   */
  async disableApplicationMonitor(request: DisableApplicationMonitorRequest): Promise<DisableApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates access control lists (ACLs) from a listener.
   *
   * @description ## Description
   * *   **DissociateAclsFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of a listener:
   *     *   If the listener is in the **updating** state, ACLs are being disassociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, ACLs are disassociated from the listener.
   * *   The **DissociateAclsFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DissociateAclsFromListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DissociateAclsFromListenerResponse
   */
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

  /**
   * @summary Disassociates access control lists (ACLs) from a listener.
   *
   * @description ## Description
   * *   **DissociateAclsFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of a listener:
   *     *   If the listener is in the **updating** state, ACLs are being disassociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, ACLs are disassociated from the listener.
   * *   The **DissociateAclsFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request DissociateAclsFromListenerRequest
   * @return DissociateAclsFromListenerResponse
   */
  async dissociateAclsFromListener(request: DissociateAclsFromListenerRequest): Promise<DissociateAclsFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAclsFromListenerWithOptions(request, runtime);
  }

  /**
   * @summary Disassociates an additional certificate from an HTTPS listener.
   *
   * @description ## Description
   * *   **DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of an HTTPS listener.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being dissociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is dissociated from the listener.
   * *   The **DissociateAdditionalCertificatesFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance with a specific period of time.
   *
   * @param request DissociateAdditionalCertificatesFromListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DissociateAdditionalCertificatesFromListenerResponse
   */
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

  /**
   * @summary Disassociates an additional certificate from an HTTPS listener.
   *
   * @description ## Description
   * *   **DissociateAdditionalCertificatesFromListener** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the state of an HTTPS listener.
   *     *   If the listener is in the **updating** state, it indicates that the additional certificate is being dissociated from the listener. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that the additional certificate is dissociated from the listener.
   * *   The **DissociateAdditionalCertificatesFromListener** operation cannot be repeatedly called for the same Global Accelerator (GA) instance with a specific period of time.
   *
   * @param request DissociateAdditionalCertificatesFromListenerRequest
   * @return DissociateAdditionalCertificatesFromListenerResponse
   */
  async dissociateAdditionalCertificatesFromListener(request: DissociateAdditionalCertificatesFromListenerRequest): Promise<DissociateAdditionalCertificatesFromListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateAdditionalCertificatesFromListenerWithOptions(request, runtime);
  }

  /**
   * @summary Enables an origin probing task.
   *
   * @param request EnableApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationMonitorResponse
   */
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

  /**
   * @summary Enables an origin probing task.
   *
   * @param request EnableApplicationMonitorRequest
   * @return EnableApplicationMonitorResponse
   */
  async enableApplicationMonitor(request: EnableApplicationMonitorRequest): Promise<EnableApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Queries an access control list (ACL).
   *
   * @param request GetAclRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAclResponse
   */
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

  /**
   * @summary Queries an access control list (ACL).
   *
   * @param request GetAclRequest
   * @return GetAclResponse
   */
  async getAcl(request: GetAclRequest): Promise<GetAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAclWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of an accelerated IP address of a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicAccelerateIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicAccelerateIpResponse
   */
  async getBasicAccelerateIpWithOptions(request: GetBasicAccelerateIpRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicAccelerateIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
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
      action: "GetBasicAccelerateIp",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicAccelerateIpResponse>(await this.callApi(params, req, runtime), new GetBasicAccelerateIpResponse({}));
  }

  /**
   * @summary Queries the status of an accelerated IP address of a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicAccelerateIpRequest
   * @return GetBasicAccelerateIpResponse
   */
  async getBasicAccelerateIp(request: GetBasicAccelerateIpRequest): Promise<GetBasicAccelerateIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicAccelerateIpWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   *
   * @param request GetBasicAccelerateIpEndpointRelationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicAccelerateIpEndpointRelationResponse
   */
  async getBasicAccelerateIpEndpointRelationWithOptions(request: GetBasicAccelerateIpEndpointRelationRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicAccelerateIpEndpointRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBasicAccelerateIpEndpointRelation",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicAccelerateIpEndpointRelationResponse>(await this.callApi(params, req, runtime), new GetBasicAccelerateIpEndpointRelationResponse({}));
  }

  /**
   * @summary Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   *
   * @param request GetBasicAccelerateIpEndpointRelationRequest
   * @return GetBasicAccelerateIpEndpointRelationResponse
   */
  async getBasicAccelerateIpEndpointRelation(request: GetBasicAccelerateIpEndpointRelationRequest): Promise<GetBasicAccelerateIpEndpointRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicAccelerateIpEndpointRelationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the number of idle accelerated IP addresses of a Global Accelerator (GA) instance.
   *
   * @param request GetBasicAccelerateIpIdleCountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicAccelerateIpIdleCountResponse
   */
  async getBasicAccelerateIpIdleCountWithOptions(request: GetBasicAccelerateIpIdleCountRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicAccelerateIpIdleCountResponse> {
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
      action: "GetBasicAccelerateIpIdleCount",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicAccelerateIpIdleCountResponse>(await this.callApi(params, req, runtime), new GetBasicAccelerateIpIdleCountResponse({}));
  }

  /**
   * @summary Queries the number of idle accelerated IP addresses of a Global Accelerator (GA) instance.
   *
   * @param request GetBasicAccelerateIpIdleCountRequest
   * @return GetBasicAccelerateIpIdleCountResponse
   */
  async getBasicAccelerateIpIdleCount(request: GetBasicAccelerateIpIdleCountRequest): Promise<GetBasicAccelerateIpIdleCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicAccelerateIpIdleCountWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicAcceleratorResponse
   */
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

  /**
   * @summary Queries the information about a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicAcceleratorRequest
   * @return GetBasicAcceleratorResponse
   */
  async getBasicAccelerator(request: GetBasicAcceleratorRequest): Promise<GetBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Queries detailed information about an endpoint that is associated with a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicEndpointResponse
   */
  async getBasicEndpointWithOptions(request: GetBasicEndpointRequest, runtime: $Util.RuntimeOptions): Promise<GetBasicEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBasicEndpointResponse>(await this.callApi(params, req, runtime), new GetBasicEndpointResponse({}));
  }

  /**
   * @summary Queries detailed information about an endpoint that is associated with a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicEndpointRequest
   * @return GetBasicEndpointResponse
   */
  async getBasicEndpoint(request: GetBasicEndpointRequest): Promise<GetBasicEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the endpoint group of a basic GA instance.
   *
   * @param request GetBasicEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicEndpointGroupResponse
   */
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

  /**
   * @summary Queries the information about the endpoint group of a basic GA instance.
   *
   * @param request GetBasicEndpointGroupRequest
   * @return GetBasicEndpointGroupResponse
   */
  async getBasicEndpointGroup(request: GetBasicEndpointGroupRequest): Promise<GetBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetBasicIpSetResponse
   */
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

  /**
   * @summary Queries the information about the acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @param request GetBasicIpSetRequest
   * @return GetBasicIpSetResponse
   */
  async getBasicIpSet(request: GetBasicIpSetRequest): Promise<GetBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBasicIpSetWithOptions(request, runtime);
  }

  /**
   * @summary Queries the health status of the endpoints and endpoint groups of a listener.
   *
   * @param request GetHealthStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetHealthStatusResponse
   */
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

  /**
   * @summary Queries the health status of the endpoints and endpoint groups of a listener.
   *
   * @param request GetHealthStatusRequest
   * @return GetHealthStatusResponse
   */
  async getHealthStatus(request: GetHealthStatusRequest): Promise<GetHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHealthStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the number of invalid domain names.
   *
   * @param request GetInvalidDomainCountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInvalidDomainCountResponse
   */
  async getInvalidDomainCountWithOptions(request: GetInvalidDomainCountRequest, runtime: $Util.RuntimeOptions): Promise<GetInvalidDomainCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInvalidDomainCount",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInvalidDomainCountResponse>(await this.callApi(params, req, runtime), new GetInvalidDomainCountResponse({}));
  }

  /**
   * @summary Queries the number of invalid domain names.
   *
   * @param request GetInvalidDomainCountRequest
   * @return GetInvalidDomainCountResponse
   */
  async getInvalidDomainCount(request: GetInvalidDomainCountRequest): Promise<GetInvalidDomainCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInvalidDomainCountWithOptions(request, runtime);
  }

  /**
   * @summary Queries the maximum bandwidth of an acceleration area.
   *
   * @param request GetIpsetsBandwidthLimitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIpsetsBandwidthLimitResponse
   */
  async getIpsetsBandwidthLimitWithOptions(request: GetIpsetsBandwidthLimitRequest, runtime: $Util.RuntimeOptions): Promise<GetIpsetsBandwidthLimitResponse> {
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
      action: "GetIpsetsBandwidthLimit",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIpsetsBandwidthLimitResponse>(await this.callApi(params, req, runtime), new GetIpsetsBandwidthLimitResponse({}));
  }

  /**
   * @summary Queries the maximum bandwidth of an acceleration area.
   *
   * @param request GetIpsetsBandwidthLimitRequest
   * @return GetIpsetsBandwidthLimitResponse
   */
  async getIpsetsBandwidthLimit(request: GetIpsetsBandwidthLimitRequest): Promise<GetIpsetsBandwidthLimitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpsetsBandwidthLimitWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of a secondary IP address that is associated with a CNAME.
   *
   * @param request GetSpareIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSpareIpResponse
   */
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

  /**
   * @summary Queries the status of a secondary IP address that is associated with a CNAME.
   *
   * @param request GetSpareIpRequest
   * @return GetSpareIpResponse
   */
  async getSpareIp(request: GetSpareIpRequest): Promise<GetSpareIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpareIpWithOptions(request, runtime);
  }

  /**
   * @summary Queries available acceleration areas and regions.
   *
   * @param request ListAccelerateAreasRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAccelerateAreasResponse
   */
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

  /**
   * @summary Queries available acceleration areas and regions.
   *
   * @param request ListAccelerateAreasRequest
   * @return ListAccelerateAreasResponse
   */
  async listAccelerateAreas(request: ListAccelerateAreasRequest): Promise<ListAccelerateAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccelerateAreasWithOptions(request, runtime);
  }

  /**
   * @summary Queries Global Accelerator (GA) instances.
   *
   * @param request ListAcceleratorsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAcceleratorsResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Queries Global Accelerator (GA) instances.
   *
   * @param request ListAcceleratorsRequest
   * @return ListAcceleratorsResponse
   */
  async listAccelerators(request: ListAcceleratorsRequest): Promise<ListAcceleratorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAcceleratorsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of access control lists (ACLs).
   *
   * @param request ListAclsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAclsResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Queries a list of access control lists (ACLs).
   *
   * @param request ListAclsRequest
   * @return ListAclsResponse
   */
  async listAcls(request: ListAclsRequest): Promise<ListAclsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAclsWithOptions(request, runtime);
  }

  /**
   * @summary Queries origin probing tasks.
   *
   * @param request ListApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationMonitorResponse
   */
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

  /**
   * @summary Queries origin probing tasks.
   *
   * @param request ListApplicationMonitorRequest
   * @return ListApplicationMonitorResponse
   */
  async listApplicationMonitor(request: ListApplicationMonitorRequest): Promise<ListApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Queries the diagnostic results of origin probing tasks.
   *
   * @param request ListApplicationMonitorDetectResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationMonitorDetectResultResponse
   */
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

  /**
   * @summary Queries the diagnostic results of origin probing tasks.
   *
   * @param request ListApplicationMonitorDetectResultRequest
   * @return ListApplicationMonitorDetectResultResponse
   */
  async listApplicationMonitorDetectResult(request: ListApplicationMonitorDetectResultRequest): Promise<ListApplicationMonitorDetectResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationMonitorDetectResultWithOptions(request, runtime);
  }

  /**
   * @summary Queries available acceleration regions.
   *
   * @param request ListAvailableAccelerateAreasRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAvailableAccelerateAreasResponse
   */
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

  /**
   * @summary Queries available acceleration regions.
   *
   * @param request ListAvailableAccelerateAreasRequest
   * @return ListAvailableAccelerateAreasResponse
   */
  async listAvailableAccelerateAreas(request: ListAvailableAccelerateAreasRequest): Promise<ListAvailableAccelerateAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableAccelerateAreasWithOptions(request, runtime);
  }

  /**
   * @summary Queries the available acceleration regions of a Global Accelerator (GA) instance.
   *
   * @param request ListAvailableBusiRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAvailableBusiRegionsResponse
   */
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

  /**
   * @summary Queries the available acceleration regions of a Global Accelerator (GA) instance.
   *
   * @param request ListAvailableBusiRegionsRequest
   * @return ListAvailableBusiRegionsResponse
   */
  async listAvailableBusiRegions(request: ListAvailableBusiRegionsRequest): Promise<ListAvailableBusiRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableBusiRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries bandwidth plans.
   *
   * @param request ListBandwidthPackagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBandwidthPackagesResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Queries bandwidth plans.
   *
   * @param request ListBandwidthPackagesRequest
   * @return ListBandwidthPackagesResponse
   */
  async listBandwidthPackages(request: ListBandwidthPackagesRequest): Promise<ListBandwidthPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBandwidthPackagesWithOptions(request, runtime);
  }

  /**
   * @summary Queries bandwidth plans.
   *
   * @description To query the detailed information about a bandwidth plan, call the **ListBandwidthPackages** operation. For more information, see [ListBandwidthPackages](https://help.aliyun.com/document_detail/2253239.html).
   *
   * @param request ListBandwidthackagesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBandwidthackagesResponse
   */
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

  /**
   * @summary Queries bandwidth plans.
   *
   * @description To query the detailed information about a bandwidth plan, call the **ListBandwidthPackages** operation. For more information, see [ListBandwidthPackages](https://help.aliyun.com/document_detail/2253239.html).
   *
   * @param request ListBandwidthackagesRequest
   * @return ListBandwidthackagesResponse
   */
  async listBandwidthackages(request: ListBandwidthackagesRequest): Promise<ListBandwidthackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBandwidthackagesWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   *
   * @param request ListBasicAccelerateIpEndpointRelationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBasicAccelerateIpEndpointRelationsResponse
   */
  async listBasicAccelerateIpEndpointRelationsWithOptions(request: ListBasicAccelerateIpEndpointRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListBasicAccelerateIpEndpointRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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
      action: "ListBasicAccelerateIpEndpointRelations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBasicAccelerateIpEndpointRelationsResponse>(await this.callApi(params, req, runtime), new ListBasicAccelerateIpEndpointRelationsResponse({}));
  }

  /**
   * @summary Queries whether the accelerated IP address of a basic Global Accelerator (GA) instance is associated with an endpoint.
   *
   * @param request ListBasicAccelerateIpEndpointRelationsRequest
   * @return ListBasicAccelerateIpEndpointRelationsResponse
   */
  async listBasicAccelerateIpEndpointRelations(request: ListBasicAccelerateIpEndpointRelationsRequest): Promise<ListBasicAccelerateIpEndpointRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBasicAccelerateIpEndpointRelationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the accelerated IP addresses in the acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @param request ListBasicAccelerateIpsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBasicAccelerateIpsResponse
   */
  async listBasicAccelerateIpsWithOptions(request: ListBasicAccelerateIpsRequest, runtime: $Util.RuntimeOptions): Promise<ListBasicAccelerateIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accelerateIpAddress)) {
      query["AccelerateIpAddress"] = request.accelerateIpAddress;
    }

    if (!Util.isUnset(request.accelerateIpId)) {
      query["AccelerateIpId"] = request.accelerateIpId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ipSetId)) {
      query["IpSetId"] = request.ipSetId;
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
      action: "ListBasicAccelerateIps",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBasicAccelerateIpsResponse>(await this.callApi(params, req, runtime), new ListBasicAccelerateIpsResponse({}));
  }

  /**
   * @summary Queries the accelerated IP addresses in the acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @param request ListBasicAccelerateIpsRequest
   * @return ListBasicAccelerateIpsResponse
   */
  async listBasicAccelerateIps(request: ListBasicAccelerateIpsRequest): Promise<ListBasicAccelerateIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBasicAccelerateIpsWithOptions(request, runtime);
  }

  /**
   * @summary Queries basic Global Accelerator (GA) instances.
   *
   * @param request ListBasicAcceleratorsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBasicAcceleratorsResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Queries basic Global Accelerator (GA) instances.
   *
   * @param request ListBasicAcceleratorsRequest
   * @return ListBasicAcceleratorsResponse
   */
  async listBasicAccelerators(request: ListBasicAcceleratorsRequest): Promise<ListBasicAcceleratorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBasicAcceleratorsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the endpoints that are associated with a basic Global Accelerator (GA) instance.
   *
   * @param request ListBasicEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBasicEndpointsResponse
   */
  async listBasicEndpointsWithOptions(request: ListBasicEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListBasicEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "ListBasicEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBasicEndpointsResponse>(await this.callApi(params, req, runtime), new ListBasicEndpointsResponse({}));
  }

  /**
   * @summary Queries the endpoints that are associated with a basic Global Accelerator (GA) instance.
   *
   * @param request ListBasicEndpointsRequest
   * @return ListBasicEndpointsResponse
   */
  async listBasicEndpoints(request: ListBasicEndpointsRequest): Promise<ListBasicEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBasicEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the acceleration regions that are supported by Global Accelerator (GA).
   *
   * @param request ListBusiRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBusiRegionsResponse
   */
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

  /**
   * @summary Queries the acceleration regions that are supported by Global Accelerator (GA).
   *
   * @param request ListBusiRegionsRequest
   * @return ListBusiRegionsResponse
   */
  async listBusiRegions(request: ListBusiRegionsRequest): Promise<ListBusiRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBusiRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries available acceleration areas and regions.
   *
   * @description You can call this operation to query the acceleration areas and regions that you can specify on the wizard page of Global Accelerator (GA) and for free-trial GA instances. You can filter acceleration areas and regions based on specified conditions.
   *
   * @param request ListCommonAreasRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCommonAreasResponse
   */
  async listCommonAreasWithOptions(request: ListCommonAreasRequest, runtime: $Util.RuntimeOptions): Promise<ListCommonAreasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.isEpg)) {
      query["IsEpg"] = request.isEpg;
    }

    if (!Util.isUnset(request.isIpSet)) {
      query["IsIpSet"] = request.isIpSet;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommonAreas",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCommonAreasResponse>(await this.callApi(params, req, runtime), new ListCommonAreasResponse({}));
  }

  /**
   * @summary Queries available acceleration areas and regions.
   *
   * @description You can call this operation to query the acceleration areas and regions that you can specify on the wizard page of Global Accelerator (GA) and for free-trial GA instances. You can filter acceleration areas and regions based on specified conditions.
   *
   * @param request ListCommonAreasRequest
   * @return ListCommonAreasResponse
   */
  async listCommonAreas(request: ListCommonAreasRequest): Promise<ListCommonAreasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommonAreasWithOptions(request, runtime);
  }

  /**
   * @summary Queries the endpoint group mapping configurations of a custom routing listener of a Global Accelerator (GA) instance.
   *
   * @param request ListCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomRoutingEndpointGroupDestinationsResponse
   */
  async listCustomRoutingEndpointGroupDestinationsWithOptions(request: ListCustomRoutingEndpointGroupDestinationsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomRoutingEndpointGroupDestinationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.fromPort)) {
      query["FromPort"] = request.fromPort;
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

    if (!Util.isUnset(request.protocols)) {
      query["Protocols"] = request.protocols;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.toPort)) {
      query["ToPort"] = request.toPort;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new ListCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * @summary Queries the endpoint group mapping configurations of a custom routing listener of a Global Accelerator (GA) instance.
   *
   * @param request ListCustomRoutingEndpointGroupDestinationsRequest
   * @return ListCustomRoutingEndpointGroupDestinationsResponse
   */
  async listCustomRoutingEndpointGroupDestinations(request: ListCustomRoutingEndpointGroupDestinationsRequest): Promise<ListCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the endpoint groups that are associated with a custom routing listener.
   *
   * @description ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code for different SDKs.](https://api.aliyun.com/#product=Ga\\&api=ListCustomRoutingEndpointGroups\\&type=RPC\\&version=2019-11-20)
   *
   * @param request ListCustomRoutingEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomRoutingEndpointGroupsResponse
   */
  async listCustomRoutingEndpointGroupsWithOptions(request: ListCustomRoutingEndpointGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomRoutingEndpointGroupsResponse> {
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
      action: "ListCustomRoutingEndpointGroups",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomRoutingEndpointGroupsResponse>(await this.callApi(params, req, runtime), new ListCustomRoutingEndpointGroupsResponse({}));
  }

  /**
   * @summary Queries the endpoint groups that are associated with a custom routing listener.
   *
   * @description ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code for different SDKs.](https://api.aliyun.com/#product=Ga\\&api=ListCustomRoutingEndpointGroups\\&type=RPC\\&version=2019-11-20)
   *
   * @param request ListCustomRoutingEndpointGroupsRequest
   * @return ListCustomRoutingEndpointGroupsResponse
   */
  async listCustomRoutingEndpointGroups(request: ListCustomRoutingEndpointGroupsRequest): Promise<ListCustomRoutingEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the traffic policies of an endpoint that belongs to a custom routing listener.
   *
   * @param request ListCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomRoutingEndpointTrafficPoliciesResponse
   */
  async listCustomRoutingEndpointTrafficPoliciesWithOptions(request: ListCustomRoutingEndpointTrafficPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomRoutingEndpointTrafficPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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
      action: "ListCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new ListCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * @summary Queries the traffic policies of an endpoint that belongs to a custom routing listener.
   *
   * @param request ListCustomRoutingEndpointTrafficPoliciesRequest
   * @return ListCustomRoutingEndpointTrafficPoliciesResponse
   */
  async listCustomRoutingEndpointTrafficPolicies(request: ListCustomRoutingEndpointTrafficPoliciesRequest): Promise<ListCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configurations of an endpoint.
   *
   * @param request ListCustomRoutingEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomRoutingEndpointsResponse
   */
  async listCustomRoutingEndpointsWithOptions(request: ListCustomRoutingEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomRoutingEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
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
      action: "ListCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new ListCustomRoutingEndpointsResponse({}));
  }

  /**
   * @summary Queries the configurations of an endpoint.
   *
   * @param request ListCustomRoutingEndpointsRequest
   * @return ListCustomRoutingEndpointsResponse
   */
  async listCustomRoutingEndpoints(request: ListCustomRoutingEndpointsRequest): Promise<ListCustomRoutingEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the port mapping table of a custom routing listener.
   *
   * @description After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, backend service protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches). The custom routing listener forwards client requests to specified IP addresses and ports in the vSwitches based on the port mapping table. This operation is used to query the generated port mapping table.
   *
   * @param request ListCustomRoutingPortMappingsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomRoutingPortMappingsResponse
   */
  async listCustomRoutingPortMappingsWithOptions(request: ListCustomRoutingPortMappingsRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomRoutingPortMappingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
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
      action: "ListCustomRoutingPortMappings",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomRoutingPortMappingsResponse>(await this.callApi(params, req, runtime), new ListCustomRoutingPortMappingsResponse({}));
  }

  /**
   * @summary Queries the port mapping table of a custom routing listener.
   *
   * @description After you configure a custom routing listener for a Global Accelerator (GA) instance, the instance generates a port mapping table based on the listener port range, backend service protocols and port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches). The custom routing listener forwards client requests to specified IP addresses and ports in the vSwitches based on the port mapping table. This operation is used to query the generated port mapping table.
   *
   * @param request ListCustomRoutingPortMappingsRequest
   * @return ListCustomRoutingPortMappingsResponse
   */
  async listCustomRoutingPortMappings(request: ListCustomRoutingPortMappingsRequest): Promise<ListCustomRoutingPortMappingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomRoutingPortMappingsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the port mapping table of a specified backend instance that is associated with a custom routing listener.
   *
   * @param request ListCustomRoutingPortMappingsByDestinationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomRoutingPortMappingsByDestinationResponse
   */
  async listCustomRoutingPortMappingsByDestinationWithOptions(request: ListCustomRoutingPortMappingsByDestinationRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomRoutingPortMappingsByDestinationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationAddress)) {
      query["DestinationAddress"] = request.destinationAddress;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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
      action: "ListCustomRoutingPortMappingsByDestination",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomRoutingPortMappingsByDestinationResponse>(await this.callApi(params, req, runtime), new ListCustomRoutingPortMappingsByDestinationResponse({}));
  }

  /**
   * @summary Queries the port mapping table of a specified backend instance that is associated with a custom routing listener.
   *
   * @param request ListCustomRoutingPortMappingsByDestinationRequest
   * @return ListCustomRoutingPortMappingsByDestinationResponse
   */
  async listCustomRoutingPortMappingsByDestination(request: ListCustomRoutingPortMappingsByDestinationRequest): Promise<ListCustomRoutingPortMappingsByDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomRoutingPortMappingsByDestinationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information of an accelerated domain name of a GA instance.
   *
   * @param request ListDomainsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
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
      action: "ListDomains",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * @summary Queries the information of an accelerated domain name of a GA instance.
   *
   * @param request ListDomainsRequest
   * @return ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the public CIDR blocks to which the endpoint group IP addresses belong. The CIDR blocks can be used to configure ACLs in terminals.
   *
   * @param request ListEndpointGroupIpAddressCidrBlocksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEndpointGroupIpAddressCidrBlocksResponse
   */
  async listEndpointGroupIpAddressCidrBlocksWithOptions(request: ListEndpointGroupIpAddressCidrBlocksRequest, runtime: $Util.RuntimeOptions): Promise<ListEndpointGroupIpAddressCidrBlocksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.endpointGroupRegion)) {
      query["EndpointGroupRegion"] = request.endpointGroupRegion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEndpointGroupIpAddressCidrBlocks",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEndpointGroupIpAddressCidrBlocksResponse>(await this.callApi(params, req, runtime), new ListEndpointGroupIpAddressCidrBlocksResponse({}));
  }

  /**
   * @summary Queries the public CIDR blocks to which the endpoint group IP addresses belong. The CIDR blocks can be used to configure ACLs in terminals.
   *
   * @param request ListEndpointGroupIpAddressCidrBlocksRequest
   * @return ListEndpointGroupIpAddressCidrBlocksResponse
   */
  async listEndpointGroupIpAddressCidrBlocks(request: ListEndpointGroupIpAddressCidrBlocksRequest): Promise<ListEndpointGroupIpAddressCidrBlocksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEndpointGroupIpAddressCidrBlocksWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of endpoint groups.
   *
   * @param request ListEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEndpointGroupsResponse
   */
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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

  /**
   * @summary Queries a list of endpoint groups.
   *
   * @param request ListEndpointGroupsRequest
   * @return ListEndpointGroupsResponse
   */
  async listEndpointGroups(request: ListEndpointGroupsRequest): Promise<ListEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about existing forwarding rules.
   *
   * @description >  This operation is used to query only custom forwarding rules, not the default forwarding rule.
   *
   * @param request ListForwardingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListForwardingRulesResponse
   */
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

  /**
   * @summary Queries the information about existing forwarding rules.
   *
   * @description >  This operation is used to query only custom forwarding rules, not the default forwarding rule.
   *
   * @param request ListForwardingRulesRequest
   * @return ListForwardingRulesResponse
   */
  async listForwardingRules(request: ListForwardingRulesRequest): Promise<ListForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listForwardingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries acceleration regions.
   *
   * @param request ListIpSetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIpSetsResponse
   */
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

  /**
   * @summary Queries acceleration regions.
   *
   * @param request ListIpSetsRequest
   * @return ListIpSetsResponse
   */
  async listIpSets(request: ListIpSetsRequest): Promise<ListIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIpSetsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the line types of elastic IP addresses (EIPs) that are supported in an acceleration region.
   *
   * @param request ListIspTypesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIspTypesResponse
   */
  async listIspTypesWithOptions(request: ListIspTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListIspTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.businessRegionId)) {
      query["BusinessRegionId"] = request.businessRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIspTypes",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIspTypesResponse>(await this.callApi(params, req, runtime), new ListIspTypesResponse({}));
  }

  /**
   * @summary Queries the line types of elastic IP addresses (EIPs) that are supported in an acceleration region.
   *
   * @param request ListIspTypesRequest
   * @return ListIspTypesResponse
   */
  async listIspTypes(request: ListIspTypesRequest): Promise<ListIspTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIspTypesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the certificates associated with a listener.
   *
   * @param request ListListenerCertificatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListListenerCertificatesResponse
   */
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

  /**
   * @summary Queries the certificates associated with a listener.
   *
   * @param request ListListenerCertificatesRequest
   * @return ListListenerCertificatesResponse
   */
  async listListenerCertificates(request: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the listeners of a Global Accelerator (GA) instance.
   *
   * @description This operation is used to query information about the listeners of a GA instance, including the status of each listener, the timestamp that indicates when each listener was created, and the listener ports.
   *
   * @param request ListListenersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListListenersResponse
   */
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

  /**
   * @summary Queries the listeners of a Global Accelerator (GA) instance.
   *
   * @description This operation is used to query information about the listeners of a GA instance, including the status of each listener, the timestamp that indicates when each listener was created, and the listener ports.
   *
   * @param request ListListenersRequest
   * @return ListListenersResponse
   */
  async listListeners(request: ListListenersRequest): Promise<ListListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the secondary IP addresses that are associated with a CNAME.
   *
   * @param request ListSpareIpsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSpareIpsResponse
   */
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

  /**
   * @summary Queries the information about the secondary IP addresses that are associated with a CNAME.
   *
   * @param request ListSpareIpsRequest
   * @return ListSpareIpsResponse
   */
  async listSpareIps(request: ListSpareIpsRequest): Promise<ListSpareIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSpareIpsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the TLS security policies that are supported by HTTPS listeners.
   *
   * @description You can select a TLS security policy when you create an HTTPS listener. This API operation is used to query the TLS security policies that are supported by HTTPS listeners.
   *
   * @param request ListSystemSecurityPoliciesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSystemSecurityPoliciesResponse
   */
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

  /**
   * @summary Queries the TLS security policies that are supported by HTTPS listeners.
   *
   * @description You can select a TLS security policy when you create an HTTPS listener. This API operation is used to query the TLS security policies that are supported by HTTPS listeners.
   *
   * @param request ListSystemSecurityPoliciesRequest
   * @return ListSystemSecurityPoliciesResponse
   */
  async listSystemSecurityPolicies(request: ListSystemSecurityPoliciesRequest): Promise<ListSystemSecurityPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPoliciesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the tags that are added to Global Accelerator (GA) resources.
   *
   * @description *   You must specify **ResourceId** or **Tag** in the request to specify the object that you want to query.********
   * *   **Tag** is a resource tag that consists of a key-value pair (Key and Value). If you specify only **Key**, all tag values that are associated with the specified tag key are returned. If you specify only **Value**, an error message is returned.
   * *   If you specify **Tag** and **ResourceId** to filter tags, **ResourceId** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain the key-value pairs are returned.
   *
   * @param request ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

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
      version: "2019-11-20",
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
   * @summary Queries the tags that are added to Global Accelerator (GA) resources.
   *
   * @description *   You must specify **ResourceId** or **Tag** in the request to specify the object that you want to query.********
   * *   **Tag** is a resource tag that consists of a key-value pair (Key and Value). If you specify only **Key**, all tag values that are associated with the specified tag key are returned. If you specify only **Value**, an error message is returned.
   * *   If you specify **Tag** and **ResourceId** to filter tags, **ResourceId** must match all specified key-value pairs.
   * *   If you specify multiple key-value pairs, resources that contain the key-value pairs are returned.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Activates the pay-as-you-go Global Accelerator (GA) service. If you want to use pay-as-you-go GA instances, you must activate the pay-as-you-go GA service first.
   *
   * @param request OpenAcceleratorServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenAcceleratorServiceResponse
   */
  async openAcceleratorServiceWithOptions(request: OpenAcceleratorServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenAcceleratorServiceResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "OpenAcceleratorService",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenAcceleratorServiceResponse>(await this.callApi(params, req, runtime), new OpenAcceleratorServiceResponse({}));
  }

  /**
   * @summary Activates the pay-as-you-go Global Accelerator (GA) service. If you want to use pay-as-you-go GA instances, you must activate the pay-as-you-go GA service first.
   *
   * @param request OpenAcceleratorServiceRequest
   * @return OpenAcceleratorServiceResponse
   */
  async openAcceleratorService(request: OpenAcceleratorServiceRequest): Promise<OpenAcceleratorServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAcceleratorServiceWithOptions(request, runtime);
  }

  /**
   * @summary Inquire about the approval status of cross-border permissions for an Alibaba Cloud account (main account).
   *
   * @param request QueryCrossBorderApprovalStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryCrossBorderApprovalStatusResponse
   */
  async queryCrossBorderApprovalStatusWithOptions(request: QueryCrossBorderApprovalStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryCrossBorderApprovalStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCrossBorderApprovalStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCrossBorderApprovalStatusResponse>(await this.callApi(params, req, runtime), new QueryCrossBorderApprovalStatusResponse({}));
  }

  /**
   * @summary Inquire about the approval status of cross-border permissions for an Alibaba Cloud account (main account).
   *
   * @param request QueryCrossBorderApprovalStatusRequest
   * @return QueryCrossBorderApprovalStatusResponse
   */
  async queryCrossBorderApprovalStatus(request: QueryCrossBorderApprovalStatusRequest): Promise<QueryCrossBorderApprovalStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCrossBorderApprovalStatusWithOptions(request, runtime);
  }

  /**
   * @summary Deletes IP entries from an access control list (ACL).
   *
   * @description *   **RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL from which you want to delete IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that the IP entries are being deleted. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that the IP entries are deleted.
   * *   The **RemoveEntriesFromAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request RemoveEntriesFromAclRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveEntriesFromAclResponse
   */
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

  /**
   * @summary Deletes IP entries from an access control list (ACL).
   *
   * @description *   **RemoveEntriesFromAcl** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetAcl](https://help.aliyun.com/document_detail/258292.html) or [ListAcls](https://help.aliyun.com/document_detail/258291.html) operation to query the status of the ACL from which you want to delete IP entries.
   *     *   If the ACL is in the **configuring** state, it indicates that the IP entries are being deleted. In this case, you can perform only query operations.
   *     *   If the ACL is in the **active** state, it indicates that the IP entries are deleted.
   * *   The **RemoveEntriesFromAcl** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request RemoveEntriesFromAclRequest
   * @return RemoveEntriesFromAclResponse
   */
  async removeEntriesFromAcl(request: RemoveEntriesFromAclRequest): Promise<RemoveEntriesFromAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEntriesFromAclWithOptions(request, runtime);
  }

  /**
   * @summary Replaces the bandwidth plans of Global Accelerator (GA) instances.
   *
   * @description When you call this operation, take note of the following items:
   * *   The GA instance continues to forward network traffic.
   * *   **ReplaceBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the associated bandwidth plan is being replaced. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the associated bandwidth plan is replaced.
   * *   The **ReplaceBandwidthPackage** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request ReplaceBandwidthPackageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReplaceBandwidthPackageResponse
   */
  async replaceBandwidthPackageWithOptions(request: ReplaceBandwidthPackageRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceBandwidthPackageResponse> {
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

  /**
   * @summary Replaces the bandwidth plans of Global Accelerator (GA) instances.
   *
   * @description When you call this operation, take note of the following items:
   * *   The GA instance continues to forward network traffic.
   * *   **ReplaceBandwidthPackage** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) or [ListAccelerators](https://help.aliyun.com/document_detail/153236.html) operation to query the status of the GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the associated bandwidth plan is being replaced. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the associated bandwidth plan is replaced.
   * *   The **ReplaceBandwidthPackage** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request ReplaceBandwidthPackageRequest
   * @return ReplaceBandwidthPackageResponse
   */
  async replaceBandwidthPackage(request: ReplaceBandwidthPackageRequest): Promise<ReplaceBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * @summary Adds tags to Global Accelerator (GA) resources.
   *
   * @description ### Description
   * You can add up to 20 tags to each GA resource. When you call this operation, Alibaba Cloud first checks the number of existing tags attached to the resource. If the quota is reached, an error message is returned.
   *
   * @param request TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "TagResources",
      version: "2019-11-20",
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
   * @summary Adds tags to Global Accelerator (GA) resources.
   *
   * @description ### Description
   * You can add up to 20 tags to each GA resource. When you call this operation, Alibaba Cloud first checks the number of existing tags attached to the resource. If the quota is reached, an error message is returned.
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Removes tags from Global Accelerator (GA) resources.
   *
   * @param request UntagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      version: "2019-11-20",
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
   * @summary Removes tags from Global Accelerator (GA) resources.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a Global Accelerator (GA) instance.
   *
   * @description *   **UpdateAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, the GA instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the GA instance is modified.
   * *   The **UpdateAccelerator** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request UpdateAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAcceleratorResponse
   */
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

  /**
   * @summary Modifies a Global Accelerator (GA) instance.
   *
   * @description *   **UpdateAccelerator** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, the GA instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the GA instance is modified.
   * *   The **UpdateAccelerator** operation cannot be repeatedly called for the same GA instance within a specific period of time.
   *
   * @param request UpdateAcceleratorRequest
   * @return UpdateAcceleratorResponse
   */
  async updateAccelerator(request: UpdateAcceleratorRequest): Promise<UpdateAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the auto-renewal settings of a Global Accelerator (GA) instance.
   *
   * @description You cannot repeatedly call the **UpdateAcceleratorAutoRenewAttribute** operation for the same GA instance within a specific period of time.
   *
   * @param request UpdateAcceleratorAutoRenewAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAcceleratorAutoRenewAttributeResponse
   */
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

  /**
   * @summary Modifies the auto-renewal settings of a Global Accelerator (GA) instance.
   *
   * @description You cannot repeatedly call the **UpdateAcceleratorAutoRenewAttribute** operation for the same GA instance within a specific period of time.
   *
   * @param request UpdateAcceleratorAutoRenewAttributeRequest
   * @return UpdateAcceleratorAutoRenewAttributeResponse
   */
  async updateAcceleratorAutoRenewAttribute(request: UpdateAcceleratorAutoRenewAttributeRequest): Promise<UpdateAcceleratorAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Confirms the updated specification of a Global Accelerator (GA) instance.
   *
   * @description After you modify the specification of a GA instance, you must confirm the modification. The **UpdateAcceleratorConfirm** operation is used to confirm the specification of a GA instance that is modified. When you call this operation to confirm the specification of a GA instance, take note of the following items:
   * *   **UpdateAcceleratorConfirm** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the specification of the instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the specification of the instance is modified.
   * *   The **UpdateAcceleratorConfirm** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   *
   * @param request UpdateAcceleratorConfirmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAcceleratorConfirmResponse
   */
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

  /**
   * @summary Confirms the updated specification of a Global Accelerator (GA) instance.
   *
   * @description After you modify the specification of a GA instance, you must confirm the modification. The **UpdateAcceleratorConfirm** operation is used to confirm the specification of a GA instance that is modified. When you call this operation to confirm the specification of a GA instance, take note of the following items:
   * *   **UpdateAcceleratorConfirm** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of a GA instance.
   *     *   If the GA instance is in the **configuring** state, it indicates that the specification of the instance is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, it indicates that the specification of the instance is modified.
   * *   The **UpdateAcceleratorConfirm** operation cannot be called repeatedly for the same GA instance within a specific period of time.
   *
   * @param request UpdateAcceleratorConfirmRequest
   * @return UpdateAcceleratorConfirmResponse
   */
  async updateAcceleratorConfirm(request: UpdateAcceleratorConfirmRequest): Promise<UpdateAcceleratorConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorConfirmWithOptions(request, runtime);
  }

  /**
   * @summary Changes the type of transmission network for a Global Accelerator (GA) instance.
   *
   * @description You can call this operation to change the type of transmission network for a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**. Before you call this operation, make sure that the following requirements are met:
   * *   Cloud Data Transfer (CDT) is activated. When you call the [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html) operation and set **BandwidthBillingType** to **CDT** to create a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**, CDT is automatically activated. The data transfer fees are managed by CDT.
   * *   If you want to set **CrossBorderMode** to **private**, which specifies cross-border Express Connect circuit as the type of transmission network, make sure that real-name verification is complete for your enterprise account. For more information, see [Real-name verification](https://help.aliyun.com/document_detail/52595.html).
   *
   * @param request UpdateAcceleratorCrossBorderModeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAcceleratorCrossBorderModeResponse
   */
  async updateAcceleratorCrossBorderModeWithOptions(request: UpdateAcceleratorCrossBorderModeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorCrossBorderModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossBorderMode)) {
      query["CrossBorderMode"] = request.crossBorderMode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAcceleratorCrossBorderMode",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAcceleratorCrossBorderModeResponse>(await this.callApi(params, req, runtime), new UpdateAcceleratorCrossBorderModeResponse({}));
  }

  /**
   * @summary Changes the type of transmission network for a Global Accelerator (GA) instance.
   *
   * @description You can call this operation to change the type of transmission network for a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**. Before you call this operation, make sure that the following requirements are met:
   * *   Cloud Data Transfer (CDT) is activated. When you call the [CreateAccelerator](https://help.aliyun.com/document_detail/206786.html) operation and set **BandwidthBillingType** to **CDT** to create a **standard** GA instance whose bandwidth metering method is **pay-by-data-transfer**, CDT is automatically activated. The data transfer fees are managed by CDT.
   * *   If you want to set **CrossBorderMode** to **private**, which specifies cross-border Express Connect circuit as the type of transmission network, make sure that real-name verification is complete for your enterprise account. For more information, see [Real-name verification](https://help.aliyun.com/document_detail/52595.html).
   *
   * @param request UpdateAcceleratorCrossBorderModeRequest
   * @return UpdateAcceleratorCrossBorderModeResponse
   */
  async updateAcceleratorCrossBorderMode(request: UpdateAcceleratorCrossBorderModeRequest): Promise<UpdateAcceleratorCrossBorderModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorCrossBorderModeWithOptions(request, runtime);
  }

  /**
   * @summary Enables cross-border data transmission for a Global Accelerator (GA) instance.
   *
   * @description You can use this operation to enable or disable the cross-border data transmission feature for a GA instance. Before you enable the cross-border data transmission feature, make sure that the following requirements are met:
   * - **Basic GA instances**:
   * Cloud Data Transfer (CDT) is activated. When you call the CreateBasicAccelerator operation to create a basic GA instance, set BandwidthBillingType to CDT. Then, the system automatically activates CDT. The data transfer fees are managed by CDT.
   * If you want to enable the cross-border data transmission feature, make sure that the current account has completed enterprise real-name registration. For more information, see Real-name registration FAQs.
   * - **Standard GA instances**:
   * CDT is activated. When you call the CreateAccelerator operation to create a standard GA instance, set BandwidthBillingType to CDT. Then, the system automatically activates CDT. The data transfer fees are managed by CDT.
   *
   * @param request UpdateAcceleratorCrossBorderStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAcceleratorCrossBorderStatusResponse
   */
  async updateAcceleratorCrossBorderStatusWithOptions(request: UpdateAcceleratorCrossBorderStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAcceleratorCrossBorderStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossBorderStatus)) {
      query["CrossBorderStatus"] = request.crossBorderStatus;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAcceleratorCrossBorderStatus",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAcceleratorCrossBorderStatusResponse>(await this.callApi(params, req, runtime), new UpdateAcceleratorCrossBorderStatusResponse({}));
  }

  /**
   * @summary Enables cross-border data transmission for a Global Accelerator (GA) instance.
   *
   * @description You can use this operation to enable or disable the cross-border data transmission feature for a GA instance. Before you enable the cross-border data transmission feature, make sure that the following requirements are met:
   * - **Basic GA instances**:
   * Cloud Data Transfer (CDT) is activated. When you call the CreateBasicAccelerator operation to create a basic GA instance, set BandwidthBillingType to CDT. Then, the system automatically activates CDT. The data transfer fees are managed by CDT.
   * If you want to enable the cross-border data transmission feature, make sure that the current account has completed enterprise real-name registration. For more information, see Real-name registration FAQs.
   * - **Standard GA instances**:
   * CDT is activated. When you call the CreateAccelerator operation to create a standard GA instance, set BandwidthBillingType to CDT. Then, the system automatically activates CDT. The data transfer fees are managed by CDT.
   *
   * @param request UpdateAcceleratorCrossBorderStatusRequest
   * @return UpdateAcceleratorCrossBorderStatusResponse
   */
  async updateAcceleratorCrossBorderStatus(request: UpdateAcceleratorCrossBorderStatusRequest): Promise<UpdateAcceleratorCrossBorderStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAcceleratorCrossBorderStatusWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the attributes of an access control list (ACL) of a Global Accelerator (GA) instance.
   *
   * @param request UpdateAclAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAclAttributeResponse
   */
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

  /**
   * @summary Modifies the attributes of an access control list (ACL) of a Global Accelerator (GA) instance.
   *
   * @param request UpdateAclAttributeRequest
   * @return UpdateAclAttributeResponse
   */
  async updateAclAttribute(request: UpdateAclAttributeRequest): Promise<UpdateAclAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Replaces an expired additional certificate for an HTTPS listener.
   *
   * @description The UpdateAdditionalCertificateWithListener operation is used to replace an additional certificate. This operation is suitable for scenarios in which the original certificate expires and needs to be replaced with a new certificate and the associated domain name remains unchanged.
   * *   **UpdateAdditionalCertificateWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/307743.html) to query the status of the task:
   *     *   If the certificate to be replaced is in the **updating** state, the certificate is being replaced. In this case, you can only query the certificate.
   *     *   If the new certificate is in the **active** state, the new certificate is in effect.
   * *   You cannot repeatedly call the **UpdateAdditionalCertificateWithListener** operation for the same GA instance within a specific period of time.
   *
   * @param request UpdateAdditionalCertificateWithListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAdditionalCertificateWithListenerResponse
   */
  async updateAdditionalCertificateWithListenerWithOptions(request: UpdateAdditionalCertificateWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAdditionalCertificateWithListenerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceleratorId)) {
      query["AcceleratorId"] = request.acceleratorId;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
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
      action: "UpdateAdditionalCertificateWithListener",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAdditionalCertificateWithListenerResponse>(await this.callApi(params, req, runtime), new UpdateAdditionalCertificateWithListenerResponse({}));
  }

  /**
   * @summary Replaces an expired additional certificate for an HTTPS listener.
   *
   * @description The UpdateAdditionalCertificateWithListener operation is used to replace an additional certificate. This operation is suitable for scenarios in which the original certificate expires and needs to be replaced with a new certificate and the associated domain name remains unchanged.
   * *   **UpdateAdditionalCertificateWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/307743.html) to query the status of the task:
   *     *   If the certificate to be replaced is in the **updating** state, the certificate is being replaced. In this case, you can only query the certificate.
   *     *   If the new certificate is in the **active** state, the new certificate is in effect.
   * *   You cannot repeatedly call the **UpdateAdditionalCertificateWithListener** operation for the same GA instance within a specific period of time.
   *
   * @param request UpdateAdditionalCertificateWithListenerRequest
   * @return UpdateAdditionalCertificateWithListenerResponse
   */
  async updateAdditionalCertificateWithListener(request: UpdateAdditionalCertificateWithListenerRequest): Promise<UpdateAdditionalCertificateWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAdditionalCertificateWithListenerWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an origin probing task.
   *
   * @description **UpdateApplicationMonitor** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to check whether the configurations of an origin probing task are modified.
   * *   If the values of modified parameters remain unchanged, it indicates that the origin probing task is being modified. In this case, you can perform only query operations.
   * *   If the values of modified parameters change, it indicates that the origin probing task is modified.
   *
   * @param request UpdateApplicationMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApplicationMonitorResponse
   */
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

  /**
   * @summary Modifies an origin probing task.
   *
   * @description **UpdateApplicationMonitor** is an asynchronous operation. After you send a request, the system returns a request ID, but this operation is still being performed in the system background. You can call the [DescribeApplicationMonitor](https://help.aliyun.com/document_detail/408463.html) or [ListApplicationMonitor](https://help.aliyun.com/document_detail/408462.html) operation to check whether the configurations of an origin probing task are modified.
   * *   If the values of modified parameters remain unchanged, it indicates that the origin probing task is being modified. In this case, you can perform only query operations.
   * *   If the values of modified parameters change, it indicates that the origin probing task is modified.
   *
   * @param request UpdateApplicationMonitorRequest
   * @return UpdateApplicationMonitorResponse
   */
  async updateApplicationMonitor(request: UpdateApplicationMonitorRequest): Promise<UpdateApplicationMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Changes the auto-renewal status of a bandwidth plan.
   *
   * @description You cannot repeatedly call the **UpdateBandwidthPackagaAutoRenewAttribute** operation to modify the auto-renewal settings of a bandwidth plan.
   *
   * @param request UpdateBandwidthPackagaAutoRenewAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateBandwidthPackagaAutoRenewAttributeResponse
   */
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

  /**
   * @summary Changes the auto-renewal status of a bandwidth plan.
   *
   * @description You cannot repeatedly call the **UpdateBandwidthPackagaAutoRenewAttribute** operation to modify the auto-renewal settings of a bandwidth plan.
   *
   * @param request UpdateBandwidthPackagaAutoRenewAttributeRequest
   * @return UpdateBandwidthPackagaAutoRenewAttributeResponse
   */
  async updateBandwidthPackagaAutoRenewAttribute(request: UpdateBandwidthPackagaAutoRenewAttributeRequest): Promise<UpdateBandwidthPackagaAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBandwidthPackagaAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a bandwidth plan.
   *
   * @description Take note of the following items:
   * *   **UpdateBandwidthPackage** is a synchronous operation when you call the operation to modify the configuration excluding the bandwidth value of a bandwidth plan. The new configuration immediately takes effect after the operation is performed.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is not associated with a Global Accelerator (GA) instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the parameter values of the bandwidth plan remain unchanged, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the parameter values of the bandwidth plan are changed, the bandwidth plan is modified.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is associated with a GA instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **configuring** state, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the bandwidth plan is modified.
   * *   You cannot repeatedly call the **UpdateBandwidthPackage** operation for the same bandwidth plan within a specific period of time.
   *
   * @param request UpdateBandwidthPackageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateBandwidthPackageResponse
   */
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

  /**
   * @summary Modifies the configurations of a bandwidth plan.
   *
   * @description Take note of the following items:
   * *   **UpdateBandwidthPackage** is a synchronous operation when you call the operation to modify the configuration excluding the bandwidth value of a bandwidth plan. The new configuration immediately takes effect after the operation is performed.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is not associated with a Global Accelerator (GA) instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeBandwidthPackage](https://help.aliyun.com/document_detail/153241.html) operation to query the status of the task.
   *     *   If the parameter values of the bandwidth plan remain unchanged, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the parameter values of the bandwidth plan are changed, the bandwidth plan is modified.
   * *   **UpdateBandwidthPackage** is an asynchronous operation when you call the operation to modify the configuration including the bandwidth value of a bandwidth plan that is associated with a GA instance. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeAccelerator](https://help.aliyun.com/document_detail/153235.html) operation to query the status of the task.
   *     *   If the GA instance is in the **configuring** state, the bandwidth plan is being modified. In this case, you can perform only query operations.
   *     *   If the GA instance is in the **active** state, the bandwidth plan is modified.
   * *   You cannot repeatedly call the **UpdateBandwidthPackage** operation for the same bandwidth plan within a specific period of time.
   *
   * @param request UpdateBandwidthPackageRequest
   * @return UpdateBandwidthPackageResponse
   */
  async updateBandwidthPackage(request: UpdateBandwidthPackageRequest): Promise<UpdateBandwidthPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBandwidthPackageWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the name and description of a basic Global Accelerator (GA) instance.
   *
   * @param request UpdateBasicAcceleratorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateBasicAcceleratorResponse
   */
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

  /**
   * @summary Modifies the name and description of a basic Global Accelerator (GA) instance.
   *
   * @param request UpdateBasicAcceleratorRequest
   * @return UpdateBasicAcceleratorResponse
   */
  async updateBasicAccelerator(request: UpdateBasicAcceleratorRequest): Promise<UpdateBasicAcceleratorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBasicAcceleratorWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the name of an endpoint that is associated with a basic Global Accelerator (GA) instance.
   *
   * @param request UpdateBasicEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateBasicEndpointResponse
   */
  async updateBasicEndpointWithOptions(request: UpdateBasicEndpointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBasicEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointGroupId)) {
      query["EndpointGroupId"] = request.endpointGroupId;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
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
      action: "UpdateBasicEndpoint",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBasicEndpointResponse>(await this.callApi(params, req, runtime), new UpdateBasicEndpointResponse({}));
  }

  /**
   * @summary Modifies the name of an endpoint that is associated with a basic Global Accelerator (GA) instance.
   *
   * @param request UpdateBasicEndpointRequest
   * @return UpdateBasicEndpointResponse
   */
  async updateBasicEndpoint(request: UpdateBasicEndpointRequest): Promise<UpdateBasicEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBasicEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   *
   * @description *   **UpdateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. The system modifies the configurations of an endpoint group that is associated with a basic GA instance by deleting the endpoint group and creating a new endpoint group. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **configuring** state, the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the basic GA instance is in the **active** state, the configurations of the endpoint group are modified.
   * *   The **UpdateBasicEndpointGroup** operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   *
   * @param request UpdateBasicEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateBasicEndpointGroupResponse
   */
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

    if (!Util.isUnset(request.endpointSubAddress)) {
      query["EndpointSubAddress"] = request.endpointSubAddress;
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

  /**
   * @summary Modifies the configurations of an endpoint group that is associated with a basic Global Accelerator (GA) instance.
   *
   * @description *   **UpdateBasicEndpointGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. The system modifies the configurations of an endpoint group that is associated with a basic GA instance by deleting the endpoint group and creating a new endpoint group. You can call the [GetBasicAccelerator](https://help.aliyun.com/document_detail/353188.html) operation to query the status of the task.
   *     *   If the basic GA instance is in the **configuring** state, the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the basic GA instance is in the **active** state, the configurations of the endpoint group are modified.
   * *   The **UpdateBasicEndpointGroup** operation cannot be repeatedly called for the same basic GA instance within a specific period of time.
   *
   * @param request UpdateBasicEndpointGroupRequest
   * @return UpdateBasicEndpointGroupResponse
   */
  async updateBasicEndpointGroup(request: UpdateBasicEndpointGroupRequest): Promise<UpdateBasicEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBasicEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the bandwidth of an acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @description Before you call this operation, take note of the following limits:
   * *   You can modify the bandwidth of an acceleration region of a basic GA instance only if the bandwidth metering method of the basic GA instance is **pay-by-data-transfer**.
   * *   **UpdateBasicIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **updating** state, it indicates that the bandwidth of the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, it indicates that the bandwidth of the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateBasicIpSet** operation for the same basic GA instance within a specific period of time.
   *
   * @param request UpdateBasicIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateBasicIpSetResponse
   */
  async updateBasicIpSetWithOptions(request: UpdateBasicIpSetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBasicIpSetResponse> {
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
      action: "UpdateBasicIpSet",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBasicIpSetResponse>(await this.callApi(params, req, runtime), new UpdateBasicIpSetResponse({}));
  }

  /**
   * @summary Modifies the bandwidth of an acceleration region of a basic Global Accelerator (GA) instance.
   *
   * @description Before you call this operation, take note of the following limits:
   * *   You can modify the bandwidth of an acceleration region of a basic GA instance only if the bandwidth metering method of the basic GA instance is **pay-by-data-transfer**.
   * *   **UpdateBasicIpSet** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetBasicIpSet](https://help.aliyun.com/document_detail/362987.html) operation to query the status of the task.
   *     *   If the acceleration region is in the **updating** state, it indicates that the bandwidth of the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If the acceleration region is in the **active** state, it indicates that the bandwidth of the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateBasicIpSet** operation for the same basic GA instance within a specific period of time.
   *
   * @param request UpdateBasicIpSetRequest
   * @return UpdateBasicIpSetResponse
   */
  async updateBasicIpSet(request: UpdateBasicIpSetRequest): Promise<UpdateBasicIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBasicIpSetWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the name and description of an endpoint group that is associated with a custom routing listener.
   *
   * @param request UpdateCustomRoutingEndpointGroupAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCustomRoutingEndpointGroupAttributeResponse
   */
  async updateCustomRoutingEndpointGroupAttributeWithOptions(request: UpdateCustomRoutingEndpointGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomRoutingEndpointGroupAttributeResponse> {
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
      action: "UpdateCustomRoutingEndpointGroupAttribute",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomRoutingEndpointGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateCustomRoutingEndpointGroupAttributeResponse({}));
  }

  /**
   * @summary Modifies the name and description of an endpoint group that is associated with a custom routing listener.
   *
   * @param request UpdateCustomRoutingEndpointGroupAttributeRequest
   * @return UpdateCustomRoutingEndpointGroupAttributeResponse
   */
  async updateCustomRoutingEndpointGroupAttribute(request: UpdateCustomRoutingEndpointGroupAttributeRequest): Promise<UpdateCustomRoutingEndpointGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointGroupAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the mapping configurations of an endpoint group that is associated with a custom routing listener.
   *
   * @description *   **UpdateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group associated with a custom routing listener to check whether the mapping configurations of the endpoint group are modified.
   *     *   If the endpoint group is in the **updating** state, the mapping configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the mapping configurations of the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpointGroupDestinations** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateCustomRoutingEndpointGroupDestinationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCustomRoutingEndpointGroupDestinationsResponse
   */
  async updateCustomRoutingEndpointGroupDestinationsWithOptions(request: UpdateCustomRoutingEndpointGroupDestinationsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomRoutingEndpointGroupDestinationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.destinationConfigurations)) {
      query["DestinationConfigurations"] = request.destinationConfigurations;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
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
      action: "UpdateCustomRoutingEndpointGroupDestinations",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomRoutingEndpointGroupDestinationsResponse>(await this.callApi(params, req, runtime), new UpdateCustomRoutingEndpointGroupDestinationsResponse({}));
  }

  /**
   * @summary Modifies the mapping configurations of an endpoint group that is associated with a custom routing listener.
   *
   * @description *   **UpdateCustomRoutingEndpointGroupDestinations** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of an endpoint group associated with a custom routing listener to check whether the mapping configurations of the endpoint group are modified.
   *     *   If the endpoint group is in the **updating** state, the mapping configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, the mapping configurations of the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpointGroupDestinations** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateCustomRoutingEndpointGroupDestinationsRequest
   * @return UpdateCustomRoutingEndpointGroupDestinationsResponse
   */
  async updateCustomRoutingEndpointGroupDestinations(request: UpdateCustomRoutingEndpointGroupDestinationsRequest): Promise<UpdateCustomRoutingEndpointGroupDestinationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointGroupDestinationsWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the traffic policies for an endpoint that is associated with a custom routing listener.
   *
   * @description *   **UpdateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, traffic policies are being modified for endpoints in the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, traffic policies are modified for endpoints in the endpoint group.
   * *   The **UpdateCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateCustomRoutingEndpointTrafficPoliciesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async updateCustomRoutingEndpointTrafficPoliciesWithOptions(request: UpdateCustomRoutingEndpointTrafficPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomRoutingEndpointTrafficPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!Util.isUnset(request.policyConfigurations)) {
      query["PolicyConfigurations"] = request.policyConfigurations;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomRoutingEndpointTrafficPolicies",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomRoutingEndpointTrafficPoliciesResponse>(await this.callApi(params, req, runtime), new UpdateCustomRoutingEndpointTrafficPoliciesResponse({}));
  }

  /**
   * @summary Modifies the traffic policies for an endpoint that is associated with a custom routing listener.
   *
   * @description *   **UpdateCustomRoutingEndpointTrafficPolicies** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the status of the task.
   *     *   If the endpoint group is in the **updating** state, traffic policies are being modified for endpoints in the endpoint group. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, traffic policies are modified for endpoints in the endpoint group.
   * *   The **UpdateCustomRoutingEndpointTrafficPolicies** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateCustomRoutingEndpointTrafficPoliciesRequest
   * @return UpdateCustomRoutingEndpointTrafficPoliciesResponse
   */
  async updateCustomRoutingEndpointTrafficPolicies(request: UpdateCustomRoutingEndpointTrafficPoliciesRequest): Promise<UpdateCustomRoutingEndpointTrafficPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointTrafficPoliciesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the endpoints of a custom routing listener.
   *
   * @description ## Description
   * *   **UpdateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener to check whether the endpoints in the endpoint groups are modified.
   *     *   If an endpoint group is in the **updating** state, the endpoints in the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state, the endpoints in the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpoints** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateCustomRoutingEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCustomRoutingEndpointsResponse
   */
  async updateCustomRoutingEndpointsWithOptions(request: UpdateCustomRoutingEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomRoutingEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endpointConfigurations)) {
      query["EndpointConfigurations"] = request.endpointConfigurations;
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
      action: "UpdateCustomRoutingEndpoints",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomRoutingEndpointsResponse>(await this.callApi(params, req, runtime), new UpdateCustomRoutingEndpointsResponse({}));
  }

  /**
   * @summary Modifies the endpoints of a custom routing listener.
   *
   * @description ## Description
   * *   **UpdateCustomRoutingEndpoints** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeCustomRoutingEndpointGroup](https://help.aliyun.com/document_detail/449373.html) operation to query the state of the endpoint groups associated with a custom routing listener to check whether the endpoints in the endpoint groups are modified.
   *     *   If an endpoint group is in the **updating** state, the endpoints in the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If an endpoint group is in the **active** state, the endpoints in the endpoint group are modified.
   * *   The **UpdateCustomRoutingEndpoints** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateCustomRoutingEndpointsRequest
   * @return UpdateCustomRoutingEndpointsResponse
   */
  async updateCustomRoutingEndpoints(request: UpdateCustomRoutingEndpointsRequest): Promise<UpdateCustomRoutingEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomRoutingEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an accelerated domain name.
   *
   * @description You can call this operation to modify an accelerated domain name. If the new accelerated domain name is hosted in the Chinese mainland, you must obtain an Internet content provider (ICP) number for the domain name.
   * You cannot call the **UpdateDomain** operation again by using the same Alibaba Cloud account before the previous request is completed.
   *
   * @param request UpdateDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDomainResponse
   */
  async updateDomainWithOptions(request: UpdateDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetDomain)) {
      query["TargetDomain"] = request.targetDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomain",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainResponse>(await this.callApi(params, req, runtime), new UpdateDomainResponse({}));
  }

  /**
   * @summary Modifies an accelerated domain name.
   *
   * @description You can call this operation to modify an accelerated domain name. If the new accelerated domain name is hosted in the Chinese mainland, you must obtain an Internet content provider (ICP) number for the domain name.
   * You cannot call the **UpdateDomain** operation again by using the same Alibaba Cloud account before the previous request is completed.
   *
   * @param request UpdateDomainRequest
   * @return UpdateDomainResponse
   */
  async updateDomain(request: UpdateDomainRequest): Promise<UpdateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainWithOptions(request, runtime);
  }

  /**
   * @summary Updates the ICP filing status of an accelerated domain name.
   *
   * @description You can call this operation to query and update the ICP filing status of an accelerated domain name.
   * The **UpdateDomainState** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation with the same Alibaba Cloud account.
   *
   * @param request UpdateDomainStateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDomainStateResponse
   */
  async updateDomainStateWithOptions(request: UpdateDomainStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomainState",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainStateResponse>(await this.callApi(params, req, runtime), new UpdateDomainStateResponse({}));
  }

  /**
   * @summary Updates the ICP filing status of an accelerated domain name.
   *
   * @description You can call this operation to query and update the ICP filing status of an accelerated domain name.
   * The **UpdateDomainState** operation holds an exclusive lock on the GA instance. While the operation is in progress, you cannot call the same operation with the same Alibaba Cloud account.
   *
   * @param request UpdateDomainStateRequest
   * @return UpdateDomainStateResponse
   */
  async updateDomainState(request: UpdateDomainStateRequest): Promise<UpdateDomainStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainStateWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an endpoint group of a basic Global Accelerator (GA) instance.
   *
   * @description *   **UpdateEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configurations of the endpoint group are modified.
   * *   The **UpdateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateEndpointGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEndpointGroupResponse
   */
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

    if (!Util.isUnset(request.endpointProtocolVersion)) {
      query["EndpointProtocolVersion"] = request.endpointProtocolVersion;
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

  /**
   * @summary Modifies an endpoint group of a basic Global Accelerator (GA) instance.
   *
   * @description *   **UpdateEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation is still being performed in the system background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) operation to query the state of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configurations of the endpoint group are being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configurations of the endpoint group are modified.
   * *   The **UpdateEndpointGroup** operation cannot be repeatedly called for the same Global Accelerator (GA) instance within a specific period of time.
   *
   * @param request UpdateEndpointGroupRequest
   * @return UpdateEndpointGroupResponse
   */
  async updateEndpointGroup(request: UpdateEndpointGroupRequest): Promise<UpdateEndpointGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the name and description of an endpoint group.
   *
   * @param request UpdateEndpointGroupAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEndpointGroupAttributeResponse
   */
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

  /**
   * @summary Modifies the name and description of an endpoint group.
   *
   * @param request UpdateEndpointGroupAttributeRequest
   * @return UpdateEndpointGroupAttributeResponse
   */
  async updateEndpointGroupAttribute(request: UpdateEndpointGroupAttributeRequest): Promise<UpdateEndpointGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the endpoint groups that are associated with a listener.
   *
   * @description ### Description
   * *   **UpdateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configuration of the endpoint group is being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configuration of the endpoint group is modified.
   * *   The **UpdateEndpointGroups** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request UpdateEndpointGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEndpointGroupsResponse
   */
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

  /**
   * @summary Modifies the endpoint groups that are associated with a listener.
   *
   * @description ### Description
   * *   **UpdateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEndpointGroup](https://help.aliyun.com/document_detail/153260.html) or [ListEndpointGroups](https://help.aliyun.com/document_detail/153261.html) operation to query the status of an endpoint group.
   *     *   If the endpoint group is in the **updating** state, it indicates that the configuration of the endpoint group is being modified. In this case, you can perform only query operations.
   *     *   If the endpoint group is in the **active** state, it indicates that the configuration of the endpoint group is modified.
   * *   The **UpdateEndpointGroups** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request UpdateEndpointGroupsRequest
   * @return UpdateEndpointGroupsResponse
   */
  async updateEndpointGroups(request: UpdateEndpointGroupsRequest): Promise<UpdateEndpointGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEndpointGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Updates a forwarding rule.
   *
   * @description *   **UpdateForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of a forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, it indicates that the forwarding rule is being modified. In this case, you can perform only query operations.
   *     *   If the forwarding rule is in the **active** state, it indicates that the forwarding rule is modified.
   * *   The **UpdateForwardingRules** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request UpdateForwardingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateForwardingRulesResponse
   */
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

  /**
   * @summary Updates a forwarding rule.
   *
   * @description *   **UpdateForwardingRules** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListForwardingRules](https://help.aliyun.com/document_detail/205817.html) operation to query the status of a forwarding rule.
   *     *   If the forwarding rule is in the **configuring** state, it indicates that the forwarding rule is being modified. In this case, you can perform only query operations.
   *     *   If the forwarding rule is in the **active** state, it indicates that the forwarding rule is modified.
   * *   The **UpdateForwardingRules** operation holds an exclusive lock on the Global Accelerator (GA) instance. While the operation is in progress, you cannot call the same operation in the same Alibaba Cloud account.
   *
   * @param request UpdateForwardingRulesRequest
   * @return UpdateForwardingRulesResponse
   */
  async updateForwardingRules(request: UpdateForwardingRulesRequest): Promise<UpdateForwardingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateForwardingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the attributes of an acceleration region in an acceleration area for a Global Accelerator (GA) instance.
   *
   * @description *   **UpdateIpSet** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **updating** state, it indicates that the acceleration region is being modified. In this case, you can continue to perform query operations on the acceleration regions.
   *     *   If the acceleration region is in the **active** state, it indicates that the acceleration region is modified.
   * *   You cannot call the **UpdateIpSet** operation again on the same GA instance before the previous operation is complete.
   *
   * @param request UpdateIpSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateIpSetResponse
   */
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

  /**
   * @summary Modifies the attributes of an acceleration region in an acceleration area for a Global Accelerator (GA) instance.
   *
   * @description *   **UpdateIpSet** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of an acceleration region.
   *     *   If the acceleration region is in the **updating** state, it indicates that the acceleration region is being modified. In this case, you can continue to perform query operations on the acceleration regions.
   *     *   If the acceleration region is in the **active** state, it indicates that the acceleration region is modified.
   * *   You cannot call the **UpdateIpSet** operation again on the same GA instance before the previous operation is complete.
   *
   * @param request UpdateIpSetRequest
   * @return UpdateIpSetResponse
   */
  async updateIpSet(request: UpdateIpSetRequest): Promise<UpdateIpSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpSetWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the attributes of acceleration regions in an acceleration area for a Global Accelerator (GA) instance.
   *
   * @description *   **UpdateIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If an acceleration region is in the **updating** state, the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If an acceleration region is in the **active** state, the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateIpSets** operation for the same GA instance within a specific period of time.
   *
   * @param request UpdateIpSetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateIpSetsResponse
   */
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

  /**
   * @summary Modifies the attributes of acceleration regions in an acceleration area for a Global Accelerator (GA) instance.
   *
   * @description *   **UpdateIpSets** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeIpSet](https://help.aliyun.com/document_detail/153246.html) operation to query the status of the task.
   *     *   If an acceleration region is in the **updating** state, the acceleration region is being modified. In this case, you can perform only query operations.
   *     *   If an acceleration region is in the **active** state, the acceleration region is modified.
   * *   You cannot repeatedly call the **UpdateIpSets** operation for the same GA instance within a specific period of time.
   *
   * @param request UpdateIpSetsRequest
   * @return UpdateIpSetsResponse
   */
  async updateIpSets(request: UpdateIpSetsRequest): Promise<UpdateIpSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIpSetsWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a listener for a Global Accelerator (GA) instance.
   *
   * @description This operation can be called to modify the configurations such as the protocol and ports of a listener to meet your business requirements.
   * When you call this operation, take note of the following items:
   * *   **UpdateListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of a listener.
   *     *   If the listener is in the **updating** state, it indicates that its configurations are being modified. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that its configurations are modified.
   * *   The **UpdateListener** operation cannot be repeatedly called to modify listener configurations for the same GA instance within a specific period of time.
   *
   * @param request UpdateListenerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateListenerResponse
   */
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

    if (!Util.isUnset(request.httpVersion)) {
      query["HttpVersion"] = request.httpVersion;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
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

    if (!Util.isUnset(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.XForwardedForConfig)) {
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

  /**
   * @summary Modifies the configurations of a listener for a Global Accelerator (GA) instance.
   *
   * @description This operation can be called to modify the configurations such as the protocol and ports of a listener to meet your business requirements.
   * When you call this operation, take note of the following items:
   * *   **UpdateListener** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeListener](https://help.aliyun.com/document_detail/153254.html) operation to query the status of a listener.
   *     *   If the listener is in the **updating** state, it indicates that its configurations are being modified. In this case, you can perform only query operations.
   *     *   If the listener is in the **active** state, it indicates that its configurations are modified.
   * *   The **UpdateListener** operation cannot be repeatedly called to modify listener configurations for the same GA instance within a specific period of time.
   *
   * @param request UpdateListenerRequest
   * @return UpdateListenerResponse
   */
  async updateListener(request: UpdateListenerRequest): Promise<UpdateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerWithOptions(request, runtime);
  }

  /**
   * @summary Changes the control mode of a resource from managed mode to unmanaged mode.
   *
   * @description *   This operation is applicable only to **managed** Global Accelerator (GA) instances.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you cannot change the mode of the instance to managed mode.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you can obtain all operation permissions on the instance.
   *   <warning>If you change or delete a configuration of a GA instance whose control mode is changed from managed mode to unmanaged mode, the cloud services that depend on the instance may not work as expected. Proceed with caution.
   *
   * @param request UpdateServiceManagedControlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateServiceManagedControlResponse
   */
  async updateServiceManagedControlWithOptions(request: UpdateServiceManagedControlRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceManagedControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!Util.isUnset(request.serviceManaged)) {
      query["ServiceManaged"] = request.serviceManaged;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceManagedControl",
      version: "2019-11-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceManagedControlResponse>(await this.callApi(params, req, runtime), new UpdateServiceManagedControlResponse({}));
  }

  /**
   * @summary Changes the control mode of a resource from managed mode to unmanaged mode.
   *
   * @description *   This operation is applicable only to **managed** Global Accelerator (GA) instances.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you cannot change the mode of the instance to managed mode.
   * *   After you change the control mode of a GA instance from managed mode to unmanaged mode, you can obtain all operation permissions on the instance.
   *   <warning>If you change or delete a configuration of a GA instance whose control mode is changed from managed mode to unmanaged mode, the cloud services that depend on the instance may not work as expected. Proceed with caution.
   *
   * @param request UpdateServiceManagedControlRequest
   * @return UpdateServiceManagedControlResponse
   */
  async updateServiceManagedControl(request: UpdateServiceManagedControlRequest): Promise<UpdateServiceManagedControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceManagedControlWithOptions(request, runtime);
  }

}
