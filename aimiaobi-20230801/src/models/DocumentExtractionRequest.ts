// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentExtractionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

