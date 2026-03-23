// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationPromptResponseBody extends $dara.Model {
  /**
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  /**
   * @example
   * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
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

