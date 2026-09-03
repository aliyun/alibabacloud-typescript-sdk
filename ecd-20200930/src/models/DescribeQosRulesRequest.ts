// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The premium Internet bandwidth ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np-cxj99qb8d34vo****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The name of the QoS rule.
   * 
   * @example
   * Office network QoS rule
   */
  qosRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      qosRuleName: 'QosRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      qosRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

