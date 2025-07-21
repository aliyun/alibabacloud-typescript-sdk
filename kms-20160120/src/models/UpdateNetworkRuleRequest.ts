// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description after the update.
   * 
   * @example
   * Creat by kst-hzz62ee817bvyyr5****
   */
  description?: string;
  /**
   * @remarks
   * The name of the access control rule that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  /**
   * @remarks
   * The private IP address or CIDR block after the update. Separate multiple items with commas (,).
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sourcePrivateIp: 'SourcePrivateIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sourcePrivateIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

