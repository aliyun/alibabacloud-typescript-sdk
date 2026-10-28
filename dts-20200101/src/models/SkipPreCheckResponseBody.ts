// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipPreCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter will be deprecated.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the %s variable in the error message returned by the ErrMessage parameter.
   * 
   * > If the ErrMessage parameter returns The Value of Input Parameter %s is not valid and the DynamicMessage parameter returns JobId, the specified JobId request parameter is invalid.
   * 
   * @example
   * JobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the precheck task.
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
   * The ID of the precheck task.
   * 
   * @example
   * b4my3zg929a****
   */
  scheduleJobId?: string;
  /**
   * @remarks
   * The abbreviations of the precheck items to skip or unskip.
   * 
   * @example
   * CHECK_SAME_OBJ
   */
  skipItems?: string;
  /**
   * @remarks
   * The names of the precheck items to skip or unskip.
   * 
   * @example
   * CHECK_SAME_OBJ_DETAIL
   */
  skipNames?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

