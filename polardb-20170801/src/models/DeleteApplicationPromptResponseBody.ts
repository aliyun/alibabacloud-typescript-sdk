// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationPromptResponseBody extends $dara.Model {
  /**
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  /**
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
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

