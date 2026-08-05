// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDDoSSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * CleanTraffic
   */
  DDoSBillingMode?: string;
  /**
   * @remarks
   * The instance specifications for the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn_300
   */
  DDoSBurstableDomesticProtection?: string;
  /**
   * @remarks
   * The instance specifications for regions outside China.
   * 
   * This parameter is required.
   * 
   * @example
   * overseas_300
   */
  DDoSBurstableOverseasProtection?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-ddos-9tuv*********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DDoSBillingMode: 'DDoSBillingMode',
      DDoSBurstableDomesticProtection: 'DDoSBurstableDomesticProtection',
      DDoSBurstableOverseasProtection: 'DDoSBurstableOverseasProtection',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSBillingMode: 'string',
      DDoSBurstableDomesticProtection: 'string',
      DDoSBurstableOverseasProtection: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

