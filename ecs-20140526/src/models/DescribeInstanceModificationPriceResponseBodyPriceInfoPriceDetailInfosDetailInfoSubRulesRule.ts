// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule extends $dara.Model {
  /**
   * @remarks
   * The description of the pricing rule.
   * 
   * @example
   * If you subscribe to an instance for one year, you can receive a 15% discount off the list price.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the pricing rule.
   * 
   * @example
   * 315716429631488
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

