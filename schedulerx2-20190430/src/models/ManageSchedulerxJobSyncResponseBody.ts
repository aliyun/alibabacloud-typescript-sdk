// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageSchedulerxJobSyncResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

