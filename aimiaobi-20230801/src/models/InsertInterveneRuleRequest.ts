// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertInterveneRuleRequestInterveneRuleConfig } from "./InsertInterveneRuleRequestInterveneRuleConfig";


export class InsertInterveneRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  interveneRuleConfig?: InsertInterveneRuleRequestInterveneRuleConfig;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfig: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfig: InsertInterveneRuleRequestInterveneRuleConfig,
    };
  }

  validate() {
    if(this.interveneRuleConfig && typeof (this.interveneRuleConfig as any).validate === 'function') {
      (this.interveneRuleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

