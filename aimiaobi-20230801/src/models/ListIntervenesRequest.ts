// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervenesRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identity of the workspace. For more information, see [AgentKey]().
   * 
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The intervention type.
   * 
   * @example
   * 干预类型
   */
  interveneType?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query.
   * 
   * @example
   * 小猫
   */
  query?: string;
  /**
   * @remarks
   * The rule ID.
   * 
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

