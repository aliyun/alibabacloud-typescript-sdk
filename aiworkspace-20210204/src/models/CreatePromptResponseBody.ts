// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The prompt ID.
   * 
   * @example
   * pmt-axbxtc****xxx
   */
  promptId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      promptId: 'PromptId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

