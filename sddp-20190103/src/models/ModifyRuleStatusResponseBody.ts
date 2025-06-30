// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of sensitive data detection rules whose status failed to be changed. Multiple IDs are separated with commas (,).
   * 
   * @example
   * 1,2,3,4
   */
  failedIds?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: 'string',
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

