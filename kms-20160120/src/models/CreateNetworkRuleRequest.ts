// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * networkrule description
   */
  description?: string;
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * This parameter is required.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  /**
   * @remarks
   * The private IP address or private CIDR block. Separate multiple items with commas (,).
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Only private IP addresses are supported. Set the value to Private.
   * 
   * This parameter is required.
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

