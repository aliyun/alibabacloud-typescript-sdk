// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGadInstanceNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: number;
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace **%s** in the **ErrMessage** parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified request parameter **DtsJobId** is invalid.
   * 
   * @example
   * present environment is not support,so skip.
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
   * The ID of the active-active instance group.
   * 
   * @example
   * rm-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-2zehh163694qs5c3v
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. For more information, see the supported regions.
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
   * 4D0ADAD5-DD97-41B6-B78F-D1961AB1****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

