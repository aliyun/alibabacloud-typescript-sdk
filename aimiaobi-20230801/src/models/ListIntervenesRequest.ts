// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervenesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  interveneType?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  query?: string;
  /**
   * @example
   * mqtt_outRule_1679019634514
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneType: 'InterveneType',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      query: 'Query',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneType: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      query: 'string',
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

