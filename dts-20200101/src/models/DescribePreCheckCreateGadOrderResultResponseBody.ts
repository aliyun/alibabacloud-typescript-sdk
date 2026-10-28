// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems extends $dara.Model {
  code?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems extends $dara.Model {
  preCheckItems?: DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems[];
  static names(): { [key: string]: string } {
    return {
      preCheckItems: 'PreCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckItems: { 'type': 'array', 'itemType': DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItemsPreCheckItems },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckItems)) {
      $dara.Model.validateArray(this.preCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckCreateGadOrderResultResponseBody extends $dara.Model {
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
   * The dynamic error message, which is used to replace **%s** in the error message of the **ErrMessage** parameter.
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
   * The instance ID of the global active database (GAD) instance group.
   * 
   * @example
   * gad-bp1i99e8l7913****
   */
  instanceId?: string;
  preCheckItems?: DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems;
  /**
   * @remarks
   * The overall result of the precheck.
   * 
   * @example
   * True
   */
  preCheckResult?: boolean;
  /**
   * @remarks
   * The region ID. You can set this parameter to specify the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * 92E1E99D-5224-4AD3-8C94-23A3516B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
   * 11****
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
      preCheckItems: 'PreCheckItems',
      preCheckResult: 'PreCheckResult',
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
      preCheckItems: DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems,
      preCheckResult: 'boolean',
      regionId: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.preCheckItems && typeof (this.preCheckItems as any).validate === 'function') {
      (this.preCheckItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

