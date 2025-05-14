// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitChatQuestionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1869307330227937280
   */
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

