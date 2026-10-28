// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobMonitorRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is scheduled for deprecation.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace **%s** in the **ErrMessage** parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified **DtsJobId** request parameter is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * 403
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
   * The request ID.
   * 
   * @example
   * 8C498360-7892-433C-847A-BA71A850****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

