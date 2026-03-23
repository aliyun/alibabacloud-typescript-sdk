// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationPromptResponseBody extends $dara.Model {
  /**
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  /**
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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

