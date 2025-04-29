// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskRequestContents extends $dara.Model {
  /**
   * @example
   * id-xxxxx
   */
  id?: string;
  /**
   * @example
   * xxxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

