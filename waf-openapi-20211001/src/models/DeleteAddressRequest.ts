// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addressList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-wwo36****0i
   */
  instanceId?: string;
  /**
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      instanceId: 'InstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

