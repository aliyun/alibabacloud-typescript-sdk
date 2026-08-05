// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the request. A value of ok indicates that the request was successful. An error message is returned if the request failed.
   * 
   * @example
   * ok
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B908FF89-B03C-4831-B55B-48D2A7DA0A68
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * - ok: Success.
   * 
   * - fail: Failure.
   * 
   * > The status is ok only if all tasks succeeded.
   * 
   * @example
   * ok
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

