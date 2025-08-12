// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventRuleTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of event-triggered alert rules.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ids?: string[];
  regionId?: string;
  /**
   * @remarks
   * The name of the event-triggered alert rule.
   * 
   * For information about how to obtain the name of an event-triggered alert rule, see [DescribeEventRuleList](https://help.aliyun.com/document_detail/114996.html).
   * 
   * This parameter is required.
   * 
   * @example
   * testRule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

