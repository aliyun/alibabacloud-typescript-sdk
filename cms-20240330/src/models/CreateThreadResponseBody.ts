// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * thread_id01
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

