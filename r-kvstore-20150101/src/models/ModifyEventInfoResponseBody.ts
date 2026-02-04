// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * mst.errorcode.success.errormessage
   */
  errorCode?: string;
  /**
   * @remarks
   * The error ID.
   * 
   * @example
   * 12343
   */
  errorEventId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6C9E114C-217C-4118-83C0-B4070222****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful records.
   * 
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @remarks
   * The ID of the successful event.
   * 
   * @example
   * 234221
   */
  successEventId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorEventId: 'ErrorEventId',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successEventId: 'SuccessEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorEventId: 'string',
      requestId: 'string',
      successCount: 'number',
      successEventId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

