// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSimQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * DFB71B34-4188-4EA2-9988-EF3014E75910
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

