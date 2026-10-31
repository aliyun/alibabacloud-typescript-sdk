// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamOpsRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deployment ID of the task. This ID is used to identify the deployment and is different from the specific running instance ID deploymentInstanceId.
   * 
   * @example
   * ac6e5a34bbd44d7f8b7851ef28c90d12
   */
  deploymentId?: string;
  /**
   * @remarks
   * The deployment instance ID associated with this operation. This ID corresponds to the DeploymentInstanceId request parameter in the log and TaskManager query operations.
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
  /**
   * @remarks
   * The end time of the operation. The time is in the yyyy-MM-dd HH:mm:ss format. If the operation has not ended, this parameter may be null.
   * 
   * @example
   * 2026-10-15 13:46:40
   */
  endTime?: string;
  /**
   * @remarks
   * The operation logs. In the ListStreamOpsRecords operation, this parameter may be a log storage identity. After you invoke the GetStreamOpsRecord operation, the log content or operation information is returned.
   * 
   * @example
   * 2026-10-15 13:46:26 INFO Starting Flink deployment
   */
  logContent?: string;
  /**
   * @remarks
   * The operation type. Valid values: START, PAUSE, RESUME, and STOP. This parameter does not indicate the running status of the task.
   * 
   * @example
   * START
   */
  operate?: string;
  /**
   * @remarks
   * The ID of the operation record. This ID corresponds to the OpsRecordId request parameter in the GetStreamOpsRecord operation.
   * 
   * @example
   * 646
   */
  opsRecordId?: string;
  /**
   * @remarks
   * The start time of the operation. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-10-15 13:46:26
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      deploymentInstanceId: 'DeploymentInstanceId',
      endTime: 'EndTime',
      logContent: 'LogContent',
      operate: 'Operate',
      opsRecordId: 'OpsRecordId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      deploymentInstanceId: 'string',
      endTime: 'string',
      logContent: 'string',
      operate: 'string',
      opsRecordId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStreamOpsRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The start or stop operation record of the real-time task. You can call the GetStreamOpsRecord operation to query the log content by using the log storage identifier in the list.
   */
  data?: GetStreamOpsRecordResponseBodyData;
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
   * The details of the backend response exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetStreamOpsRecordResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

