// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractRuleGenerationRequestAssistantMetaData } from "./RunContractRuleGenerationRequestAssistantMetaData";


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

