// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationRequestAssistantMetaData } from "./RunContractResultGenerationRequestAssistantMetaData";


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

