// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveStreamBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result description.
   * - Success: ok.
   * - Failure: failure details.
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
   * 3be7ade8-d907-483c-b24a-0dad4595beaf
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - ok: succeeded.
   * - fail: failed.
   * 
   * > The task is considered failed if any single subtask fails to be created.
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

