// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The network package ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np-cxj99qb8d34vo****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The QoS rule name.
   * 
   * @example
   * test
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

