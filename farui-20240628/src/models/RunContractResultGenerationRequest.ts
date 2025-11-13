// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules extends $dara.Model {
  /**
   * @example
   * high
   */
  riskLevel?: string;
  ruleDesc?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleDesc: 'ruleDesc',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleDesc: 'string',
      ruleTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class RunContractResultGenerationRequestAssistantMetaDataRules extends $dara.Model {
  /**
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @example
   * 2.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class RunContractResultGenerationRequestAssistant extends $dara.Model {
  metaData?: RunContractResultGenerationRequestAssistantMetaData;
  /**
   * @example
   * contract_examime
   */
  type?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: RunContractResultGenerationRequestAssistantMetaData,
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractResultGenerationRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunContractResultGenerationRequestAssistant;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunContractResultGenerationRequestAssistant,
      stream: 'boolean',
    };
  }

  validate() {
    if(this.assistant && typeof (this.assistant as any).validate === 'function') {
      (this.assistant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

