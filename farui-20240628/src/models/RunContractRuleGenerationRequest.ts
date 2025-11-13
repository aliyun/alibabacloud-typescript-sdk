// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractRuleGenerationRequestAssistantMetaData extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      position: 'position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      position: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunContractRuleGenerationRequestAssistant extends $dara.Model {
  metaData?: RunContractRuleGenerationRequestAssistantMetaData;
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
      metaData: RunContractRuleGenerationRequestAssistantMetaData,
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

export class RunContractRuleGenerationRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunContractRuleGenerationRequestAssistant;
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
      assistant: RunContractRuleGenerationRequestAssistant,
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

