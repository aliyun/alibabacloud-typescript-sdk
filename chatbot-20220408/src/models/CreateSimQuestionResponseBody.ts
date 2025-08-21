// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * 16AC1B3C-66E0-438B-BB7C-71B692407B67
   */
  requestId?: string;
  /**
   * @example
   * 1000002788
   */
  simQuestionId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      simQuestionId: 'SimQuestionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      simQuestionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

