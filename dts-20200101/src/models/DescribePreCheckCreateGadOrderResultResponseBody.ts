// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems } from "./DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems";


export class DescribePreCheckCreateGadOrderResultResponseBody extends $dara.Model {
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
   * gad-bp1i99e8l7913****
   */
  instanceId?: string;
  preCheckItems?: DescribePreCheckCreateGadOrderResultResponseBodyPreCheckItems;
  /**
   * @example
   * True
   */
  preCheckResult?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 92E1E99D-5224-4AD3-8C94-23A3516B****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
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

