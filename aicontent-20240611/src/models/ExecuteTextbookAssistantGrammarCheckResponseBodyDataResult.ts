// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantGrammarCheckResponseBodyDataResult extends $dara.Model {
  analysis?: string;
  /**
   * @example
   * I am you.
   */
  correction?: string;
  /**
   * @example
   * Has_Error
   */
  correctionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      correction: 'correction',
      correctionStatus: 'correctionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      correction: 'string',
      correctionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

