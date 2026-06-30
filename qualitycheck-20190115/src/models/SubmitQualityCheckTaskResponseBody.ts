// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. **200** indicates success. Any other value indicates failure. Use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * F6C2B68F-2311-4495-82AC-DAE86C9****
   */
  data?: string;
  /**
   * @remarks
   * Error details if the request failed. Returns "successful" on success.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 00A044A2-D59B-4104-96BA-84060AE8345F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. false or null means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

