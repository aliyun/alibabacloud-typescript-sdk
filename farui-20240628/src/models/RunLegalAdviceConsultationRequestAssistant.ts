// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLegalAdviceConsultationRequestAssistant extends $dara.Model {
  /**
   * @example
   * assitant_abc_123
   */
  id?: string;
  metaData?: { [key: string]: string };
  /**
   * @example
   * legal_advice_consult
   */
  type?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

