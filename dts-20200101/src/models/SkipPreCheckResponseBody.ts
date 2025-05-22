// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipPreCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter will be removed in the future.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace %s in ErrMessage.
   * 
   * > If JobId is invalid, JobId is returned for DynamicMessage, and the following message is returned for ErrMessage: The Value of Input Parameter %s is not valid.
   * 
   * @example
   * JobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status codes returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The precheck task ID.
   * 
   * @example
   * b4my3zg929a****
   */
  migrationJobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C498360-7892-433C-847A-BA71A850****
   */
  requestId?: string;
  /**
   * @remarks
   * The precheck task ID.
   * 
   * @example
   * b4my3zg929a****
   */
  scheduleJobId?: string;
  /**
   * @remarks
   * The shortened name of the precheck item.
   * 
   * @example
   * CHECK_SAME_OBJ
   */
  skipItems?: string;
  /**
   * @remarks
   * The precheck item name.
   * 
   * @example
   * CHECK_SAME_OBJ_DETAIL
   */
  skipNames?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      migrationJobId: 'MigrationJobId',
      requestId: 'RequestId',
      scheduleJobId: 'ScheduleJobId',
      skipItems: 'SkipItems',
      skipNames: 'SkipNames',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      migrationJobId: 'string',
      requestId: 'string',
      scheduleJobId: 'string',
      skipItems: 'string',
      skipNames: 'string',
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

