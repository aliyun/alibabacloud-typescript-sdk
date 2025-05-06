// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules } from "./RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules";


export class RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfig extends $dara.Model {
  customRules?: RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules[];
  static names(): { [key: string]: string } {
    return {
      customRules: 'customRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules },
    };
  }

  validate() {
    if(Array.isArray(this.customRules)) {
      $dara.Model.validateArray(this.customRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

