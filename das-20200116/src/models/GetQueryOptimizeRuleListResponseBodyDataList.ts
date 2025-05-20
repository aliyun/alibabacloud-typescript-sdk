// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeRuleListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * LARGE_ROWS_EXAMINED
   */
  name?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  ruleId?: string;
  /**
   * @remarks
   * The type of the tag. **Predefined** is returned, which indicates that the tag is added by the system.
   * 
   * @example
   * Predefined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'string',
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

