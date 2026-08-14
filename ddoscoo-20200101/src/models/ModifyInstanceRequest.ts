// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRequest extends $dara.Model {
  addressType?: string;
  bandwidth?: string;
  baseBandwidth?: string;
  domainCount?: string;
  editionSale?: string;
  functionVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifyType?: string;
  normalBandwidth?: string;
  normalQps?: string;
  portCount?: string;
  productPlan?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productType?: string;
  serviceBandwidth?: string;
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

