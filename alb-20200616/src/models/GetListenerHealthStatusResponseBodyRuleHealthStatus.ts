// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos } from "./GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos";


export class GetListenerHealthStatusResponseBodyRuleHealthStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-hp34s2h0xx1ht4nwo****
   */
  ruleId?: string;
  /**
   * @remarks
   * The server groups.
   */
  serverGroupInfos?: GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      serverGroupInfos: 'ServerGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      serverGroupInfos: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyRuleHealthStatusServerGroupInfos },
    };
  }

  validate() {
    if(Array.isArray(this.serverGroupInfos)) {
      $dara.Model.validateArray(this.serverGroupInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

