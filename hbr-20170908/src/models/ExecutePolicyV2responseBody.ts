// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecutePolicyV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code, 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Backup job ID.
   * 
   * @example
   * job-*********************
   */
  jobId?: string;
  /**
   * @remarks
   * Description of the return message, usually returns \\"successful\\" on success, and corresponding error messages on failure.
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
   * F4EEB401-DD21-588D-AE3B-1E835C7655E1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
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

