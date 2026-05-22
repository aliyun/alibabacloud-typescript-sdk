// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class GetWafRuleResponseBody extends $dara.Model {
  config?: WafRuleConfig;
  /**
   * @remarks
   * 自定义响应页面ID
   * 
   * @example
   * 2000001
   */
  id?: number;
  /**
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * 自定义响应页面内容类型
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rulesetId?: number;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      requestId: 'string',
      rulesetId: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

