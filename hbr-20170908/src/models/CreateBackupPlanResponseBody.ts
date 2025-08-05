// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPlanResponseBody extends $dara.Model {
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
   * Description of the return message, usually returns \\"successful\\" upon success, and corresponding error messages in case of failure.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Backup plan ID.
   * 
   * @example
   * plan-*********************
   */
  planId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * - true: Success.
   * - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      planId: 'PlanId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      planId: 'string',
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

