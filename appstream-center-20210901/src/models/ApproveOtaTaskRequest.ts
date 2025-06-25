// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOtaTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. You can call the [ListRegions](https://help.aliyun.com/document_detail/428500.html) operation to query the list of regions supported by App Streaming.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The type of the OTA update task.
   * 
   * Valid values:
   * 
   * *   Fota: update of the system components of Alibaba Cloud Workspace
   * *   AppUpdate
   * *   ImageUpdate
   * 
   * This parameter is required.
   * 
   * @example
   * Fota
   */
  otaType?: string;
  /**
   * @remarks
   * The start time of the OTA update task. The time follows the ISO 8601 standard.
   * 
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the OTA update task. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the ID.
   * 
   * >  Each successful call to the `ApproveOtaTask` operation causes a value change of this parameter.`` Before you call this operation, call the `ListAppInstanceGroup` operation again to obtain the latest value of this parameter.``
   * 
   * This parameter is required.
   * 
   * @example
   * ota-be7jzm29wrrz5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      otaType: 'OtaType',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      otaType: 'string',
      startTime: 'string',
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

