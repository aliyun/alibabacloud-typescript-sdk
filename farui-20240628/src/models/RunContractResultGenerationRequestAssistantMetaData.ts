// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig } from "./RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig";
import { RunContractResultGenerationRequestAssistantMetaDataRules } from "./RunContractResultGenerationRequestAssistantMetaDataRules";


export class RunContractResultGenerationRequestAssistantMetaData extends $dara.Model {
  customRuleConfig?: RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig;
  /**
   * @example
   * 9a6b1ba60d9944249363ec3cc1529b7b
   */
  fileId?: string;
  /**
   * @example
   * 1
   */
  position?: string;
  /**
   * @example
   * b265b416-ca1f-425d-9340-c968f39624e1
   */
  ruleTaskId?: string;
  rules?: RunContractResultGenerationRequestAssistantMetaDataRules[];
  static names(): { [key: string]: string } {
    return {
      customRuleConfig: 'customRuleConfig',
      fileId: 'fileId',
      position: 'position',
      ruleTaskId: 'ruleTaskId',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRuleConfig: RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig,
      fileId: 'string',
      position: 'string',
      ruleTaskId: 'string',
      rules: { 'type': 'array', 'itemType': RunContractResultGenerationRequestAssistantMetaDataRules },
    };
  }

  validate() {
    if(this.customRuleConfig && typeof (this.customRuleConfig as any).validate === 'function') {
      (this.customRuleConfig as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

