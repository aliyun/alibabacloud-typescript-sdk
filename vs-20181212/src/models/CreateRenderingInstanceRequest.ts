// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingInstanceRequestAttributes extends $dara.Model {
  /**
   * @remarks
   * Streaming service.
   * 
   * @example
   * ON
   */
  edgeMediaService?: string;
  /**
   * @remarks
   * Inbound access configuration.
   * 
   * @example
   * ON
   */
  inAccess?: string;
  /**
   * @remarks
   * Outbound access configuration.
   * 
   * @example
   * ON
   */
  outAccess?: string;
  /**
   * @remarks
   * Resource domain.
   * 
   * @example
   * Public
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      edgeMediaService: 'EdgeMediaService',
      inAccess: 'InAccess',
      outAccess: 'OutAccess',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMediaService: 'string',
      inAccess: 'string',
      outAccess: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceRequestClientInfo extends $dara.Model {
  /**
   * @remarks
   * Client IP address.
   * 
   * @example
   * 172.21.128.110
   */
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * > Unless you have specific requirements, keep the default values. For customers with special requirements, fill in the relevant parameters after communication and confirmation.
   * 
   * Attribute information.
   */
  attributes?: CreateRenderingInstanceRequestAttributes;
  /**
   * @remarks
   * > This value is valid only when `InstanceChargeType` is `PrePaid` (subscription).
   * 
   * Enable or disable auto-renewal. Values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Client information.
   */
  clientInfo?: CreateRenderingInstanceRequestClientInfo;
  /**
   * @remarks
   * > This value is valid only when `InstanceChargeType` is `PostPaid` (pay-as-you-go).
   * 
   * Billing type. Valid values:
   * 
   * - Hour: Hourly.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The billing method for the instance. Valid values:
   * 
   * - PrePaid (default): Subscription.
   * 
   * - PostPaid: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * > Only one billing method is allowed. If a billing method already exists, the new value is invalid by default, and the existing one prevails. Note that this field is required when a user makes the first purchase.
   * 
   * Network billing type. Value:
   * 
   * - 95BandwidthByMonth: Monthly 95th percentile bandwidth.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * Maximum bandwidth, in Mbps. Default is 10.
   * 
   * @example
   * 10
   */
  internetMaxBandwidth?: number;
  /**
   * @remarks
   * > This value is valid only when `InstanceChargeType` is `PrePaid` (subscription).
   * 
   * The subscription period. Valid values (Note: 12 is converted to one year; other values are in months):
   * 
   * - 1 (default)
   * 
   * - 2
   * 
   * - 3
   * 
   * - 4
   * 
   * - 5
   * 
   * - 6
   * 
   * - 7
   * 
   * - 8
   * 
   * - 9
   * 
   * - 12
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * Cloud application service instance specifications.
   * 
   * - For crs.cp.\\* series specifications, choose between subscription or pay-as-you-go billing.
   * 
   * - For crs.vm.\\* series specifications, choose between subscription or pay-as-you-go billing.
   * 
   * - For other series, only subscription billing is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The cloud storage capacity used by the cloud application service instance (Note: not local storage).
   * 
   * @example
   * 20
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoRenew: 'AutoRenew',
      clientInfo: 'ClientInfo',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidth: 'InternetMaxBandwidth',
      period: 'Period',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: CreateRenderingInstanceRequestAttributes,
      autoRenew: 'boolean',
      clientInfo: CreateRenderingInstanceRequestClientInfo,
      instanceBillingCycle: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidth: 'number',
      period: 'string',
      renderingSpec: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    if(this.attributes && typeof (this.attributes as any).validate === 'function') {
      (this.attributes as any).validate();
    }
    if(this.clientInfo && typeof (this.clientInfo as any).validate === 'function') {
      (this.clientInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

