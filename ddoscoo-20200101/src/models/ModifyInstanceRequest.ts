// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Address type. Values:
   * - **Ipv4**: IPv4.
   * - **Ipv6**: IPv6.
   * 
   * @example
   * Ipv4
   */
  addressType?: string;
  /**
   * @remarks
   * Elastic protection bandwidth (Mainland China). Unit: Gbps.
   * 
   * @example
   * 30
   */
  bandwidth?: string;
  /**
   * @remarks
   * Guaranteed protection bandwidth (Mainland China). Unit: Gbps.
   * 
   * @example
   * 30
   */
  baseBandwidth?: string;
  /**
   * @remarks
   * Number of protected domains.
   * 
   * @example
   * 50
   */
  domainCount?: string;
  /**
   * @remarks
   * Protection package (Mainland China). Values:
   * 
   * - **coop**: Indicates the DDoS High Defense (Mainland China) Professional Edition.
   * - **advance**: Indicates the DDoS High Defense (Mainland China) Professional Edition.
   * 
   * @example
   * coop
   */
  editionSale?: string;
  /**
   * @remarks
   * Function version, with values:
   * 
   * - **0**: Standard function.
   * - **1**: Enhanced function.
   * 
   * @example
   * 0
   */
  functionVersion?: string;
  /**
   * @remarks
   * The ID of the DDoS High Defense instance.
   * > You can call [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) to query the ID information of all DDoS High Defense instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-6ja1y6p5****
   */
  instanceId?: string;
  /**
   * @remarks
   * Adjustment type, with values
   * - UPGRADE: Upgrade.
   * - DOWNGRADE: Downgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * Upgrade
   */
  modifyType?: string;
  /**
   * @remarks
   * Business bandwidth (outside Mainland China). Unit: Mbps.
   * 
   * @example
   * 200
   */
  normalBandwidth?: string;
  /**
   * @remarks
   * Business QPS. Unit: Mbps.
   * 
   * @example
   * 100
   */
  normalQps?: string;
  /**
   * @remarks
   * Number of protected ports.
   * 
   * @example
   * 50
   */
  portCount?: string;
  /**
   * @remarks
   * Protection package (outside Mainland China). Values:
   * 
   * - **0**: Indicates the DDoS High Defense (outside Mainland China) Insurance Edition.
   * - **1**: Indicates the DDoS High Defense (outside Mainland China) Worry-Free Edition.
   * - **2**: Indicates the DDoS High Defense (outside Mainland China) Acceleration Line.
   * - **3**: Indicates the DDoS High Defense (outside Mainland China) Secure Acceleration Line.
   * 
   * @example
   * 0
   */
  productPlan?: string;
  /**
   * @remarks
   * Product type.
   * Values:
   * 
   * - **ddoscoo**: Indicates that the DDoS High Defense (Mainland China) instance is being adjusted for a China site account.
   * - **ddoscoo_intl**: Indicates that the DDoS High Defense (Mainland China) instance is being adjusted for an international site account.
   * - **ddosDip**: Indicates that the DDoS High Defense (outside Mainland China) instance is being adjusted for either a China or international site account.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo
   */
  productType?: string;
  /**
   * @remarks
   * Business bandwidth (Mainland China). Unit: Mbps.
   * 
   * @example
   * 300
   */
  serviceBandwidth?: string;
  /**
   * @remarks
   * Line resources of the instance (Mainland China). Values:
   * 
   * - **coop-line-001**: Indicates the DDoS High Defense (Mainland China) 8-line BGP line.
   * 
   * @example
   * coop-line-001
   */
  servicePartner?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      bandwidth: 'Bandwidth',
      baseBandwidth: 'BaseBandwidth',
      domainCount: 'DomainCount',
      editionSale: 'EditionSale',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      normalBandwidth: 'NormalBandwidth',
      normalQps: 'NormalQps',
      portCount: 'PortCount',
      productPlan: 'ProductPlan',
      productType: 'ProductType',
      serviceBandwidth: 'ServiceBandwidth',
      servicePartner: 'ServicePartner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      bandwidth: 'string',
      baseBandwidth: 'string',
      domainCount: 'string',
      editionSale: 'string',
      functionVersion: 'string',
      instanceId: 'string',
      modifyType: 'string',
      normalBandwidth: 'string',
      normalQps: 'string',
      portCount: 'string',
      productPlan: 'string',
      productType: 'string',
      serviceBandwidth: 'string',
      servicePartner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

