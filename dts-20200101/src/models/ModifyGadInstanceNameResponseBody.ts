// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGadInstanceNameResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-06-28 17:34:53.0
   */
  createTime?: number;
  /**
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * rm-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @example
   * rm-2zehh163694qs5c3v
   */
  instanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 4D0ADAD5-DD97-41B6-B78F-D1961AB1****
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
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

