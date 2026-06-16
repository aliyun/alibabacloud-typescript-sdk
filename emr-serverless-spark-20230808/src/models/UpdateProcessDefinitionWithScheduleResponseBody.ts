// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProcessDefinitionWithScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The email address for alerts.
   * 
   * @example
   * foo_bar@spark.alert.invalid.com
   */
  alertEmailAddress?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * alicloud_ack_one_cluster
   */
  bizId?: string;
  /**
   * @remarks
   * The workflow definition ID.
   * 
   * @example
   * 12***********
   */
  code?: string;
  /**
   * @remarks
   * The time when the workflow definition was created.
   * 
   * @example
   * 2024-09-05T02:03:19Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cron expression for scheduling.
   * 
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @remarks
   * The description of the workflow definition.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The end time of the schedule.
   * 
   * @example
   * 1710432000000
   */
  endTime?: string;
  /**
   * @remarks
   * The execution policy.
   * 
   * @example
   * SERIAL
   */
  executionType?: string;
  /**
   * @remarks
   * The workflow definition number.
   * 
   * @example
   * 123223
   */
  id?: string;
  /**
   * @remarks
   * The name of the workflow definition.
   * 
   * @example
   * ods_batch_workflow
   */
  name?: string;
  /**
   * @remarks
   * The name of the project to which the workflow belongs.
   * 
   * @example
   * w-********
   */
  projectName?: string;
  /**
   * @remarks
   * The release state of the workflow.
   * 
   * @example
   * ONLINE
   */
  releaseState?: string;
  /**
   * @remarks
   * The start time of the schedule.
   * 
   * @example
   * 0
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone ID.
   * 
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  /**
   * @remarks
   * The time when the workflow definition was updated.
   * 
   * @example
   * 2024-03-05T06:24:27Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user who scheduled the workflow.
   * 
   * @example
   * 113*********
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user who scheduled the workflow.
   * 
   * @example
   * w-********
   */
  userName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The hash code of the version.
   * 
   * @example
   * dwerf*********
   */
  versionHashCode?: string;
  static names(): { [key: string]: string } {
    return {
      alertEmailAddress: 'alertEmailAddress',
      bizId: 'bizId',
      code: 'code',
      createTime: 'createTime',
      crontab: 'crontab',
      description: 'description',
      endTime: 'endTime',
      executionType: 'executionType',
      id: 'id',
      name: 'name',
      projectName: 'projectName',
      releaseState: 'releaseState',
      startTime: 'startTime',
      timezoneId: 'timezoneId',
      updateTime: 'updateTime',
      userId: 'userId',
      userName: 'userName',
      version: 'version',
      versionHashCode: 'versionHashCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEmailAddress: 'string',
      bizId: 'string',
      code: 'string',
      createTime: 'string',
      crontab: 'string',
      description: 'string',
      endTime: 'string',
      executionType: 'string',
      id: 'string',
      name: 'string',
      projectName: 'string',
      releaseState: 'string',
      startTime: 'string',
      timezoneId: 'string',
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
      version: 'number',
      versionHashCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProcessDefinitionWithScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code from the backend API.
   * 
   * @example
   * 1400009
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateProcessDefinitionWithScheduleResponseBodyData;
  /**
   * @remarks
   * The number of failed operations.
   * 
   * @example
   * false
   */
  failed?: string;
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
   * The detailed description that corresponds to the return code.
   * 
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateProcessDefinitionWithScheduleResponseBodyData,
      failed: 'string',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

