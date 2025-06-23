// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSchedulerRulesResponseBodySchedulerRules } from "./DescribeSchedulerRulesResponseBodySchedulerRules";


export class DescribeSchedulerRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 11C55595-1757-4B17-9ACE-4ACB68C2D989
   */
  requestId?: string;
  schedulerRules?: DescribeSchedulerRulesResponseBodySchedulerRules[];
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schedulerRules: 'SchedulerRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedulerRules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRules },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.schedulerRules)) {
      $dara.Model.validateArray(this.schedulerRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

