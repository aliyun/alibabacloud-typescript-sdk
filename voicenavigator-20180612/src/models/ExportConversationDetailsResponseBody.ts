// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportConversationDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous export task.
   * 
   * @example
   * 6203fc87271a420c98eab6c2bbc2d856
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75BAAB9B-40B2-5FF5-A59A-7BCF8154C6EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
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

