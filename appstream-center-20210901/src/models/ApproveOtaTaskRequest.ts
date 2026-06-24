// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOtaTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. You can call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The region ID of the delivery group. You can call [ListRegions](~~ListRegions~~) to query the list of regions supported by Wuying Cloud Application.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The over-the-air upgrade task type.
   * 
   * This parameter is required.
   * 
   * @example
   * Fota
   */
  otaType?: string;
  /**
   * @remarks
   * The start time of the over-the-air upgrade task. Specify the time in ISO 8601 format.
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
   * The over-the-air upgrade task ID. You can call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the ID.
   * 
   * > Each successful call of `ApproveOtaTask` causes the `TaskId` to change. Therefore, before calling this operation again, call `ListAppInstanceGroup` again to obtain the latest `TaskId`.
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

