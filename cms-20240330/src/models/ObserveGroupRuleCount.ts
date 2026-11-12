// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupRuleCount extends $dara.Model {
  /**
   * @remarks
   * The number of deduplicated primary entities.
   * 
   * @example
   * 3
   */
  mainCount?: number;
  /**
   * @remarks
   * The number of deduplicated associated child entities.
   * 
   * @example
   * 9
   */
  relatedCount?: number;
  /**
   * @remarks
   * The stable ID of the managed rule.
   * 
   * @example
   * rule-rocketmq-prod
   */
  ruleId?: string;
  /**
   * @remarks
   * The total number of deduplicated entities.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mainCount: 'mainCount',
      relatedCount: 'relatedCount',
      ruleId: 'ruleId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainCount: 'number',
      relatedCount: 'number',
      ruleId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

