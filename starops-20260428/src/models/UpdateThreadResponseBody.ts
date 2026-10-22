// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateThreadResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * thread-12313
   */
  threadId?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 123123
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      threadId: 'threadId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threadId: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

