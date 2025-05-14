// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatQuestionRespRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1869307330227937280
   */
  batchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 237645726354
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

