// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOtaTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the region to which the delivery group belongs. You can call the [ListRegions](~~ListRegions~~) operation to query the regions supported by Wuying Cloud Application.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The type of the OTA upgrade task.
   * 
   * This parameter is required.
   * 
   * @example
   * Fota
   */
  otaType?: string;
  /**
   * @remarks
   * The start time of the OTA upgrade task. Specify the time in the ISO 8601 format.
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
   * The ID of the OTA upgrade task. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID.
   * 
   * > After you successfully call `ApproveOtaTask`, the `TaskId` changes. Therefore, before you call this operation again, call `ListAppInstanceGroup` to obtain the latest `TaskId`.
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

