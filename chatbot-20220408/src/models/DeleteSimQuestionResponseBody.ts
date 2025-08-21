// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSimQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * 6419BA93-D111-5225-8998-13E63E6D3940
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

