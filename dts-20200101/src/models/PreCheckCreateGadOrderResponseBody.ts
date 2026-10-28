// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckCreateGadOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dynamic error code. This parameter is deprecated and will be phased out.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace %s in the error message returned by the ErrMessage parameter.
   * 
   * > If the ErrMessage parameter returns The Value of Input Parameter %s is not valid and the DynamicMessage parameter returns JobId, the JobId request parameter is invalid.
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
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the global active instance group.
   * 
   * @example
   * rm-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. For more information, see the list of supported regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C166D79D-436B-45F0-B5A5-25E1959F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true: The call was successful. false: The call failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The ID of the precheck task.
   * 
   * @example
   * z2v12jfo309****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      instanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

