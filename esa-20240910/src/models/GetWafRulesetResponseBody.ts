// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class GetWafRulesetResponseBody extends $dara.Model {
  /**
   * @remarks
   * Ruleset ID.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Ruleset name.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The WAF operation phase applicable to the ruleset.
   * 
   * This parameter is required.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * List of rule configurations in the ruleset.
   */
  rules?: WafRuleConfig[];
  /**
   * @remarks
   * Shared configurations for the rules in the ruleset.
   */
  shared?: WafBatchRuleShared;
  /**
   * @remarks
   * Ruleset status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The last modified time of the ruleset.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      requestId: 'RequestId',
      rules: 'Rules',
      shared: 'Shared',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      phase: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': WafRuleConfig },
      shared: WafBatchRuleShared,
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.shared && typeof (this.shared as any).validate === 'function') {
      (this.shared as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

