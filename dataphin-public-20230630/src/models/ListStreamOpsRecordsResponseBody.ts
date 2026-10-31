// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamOpsRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * deploymentId
   * 
   * @example
   * ac6e5a34bbd44d7f8b7851ef28c90d12
   */
  deploymentId?: string;
  /**
   * @remarks
   * deploymentInstanceId
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-10-15 13:46:40
   */
  endTime?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * 2026-10-15 13:46:26 INFO Starting Flink deployment
   */
  logContent?: string;
  /**
   * @remarks
   * The instance status. Valid values: START, PAUSE, RESUME, and STOP. Displayed as Start, Pause, Recover, or Stop.
   * 
   * @example
   * START
   */
  operate?: string;
  /**
   * @remarks
   * opsRecordId
   * 
   * @example
   * 646
   */
  opsRecordId?: string;
  /**
   * @remarks
   * The start time.
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

export class ListStreamOpsRecordsResponseBody extends $dara.Model {
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
   * The start and stop operation records of real-time tasks.
   */
  data?: ListStreamOpsRecordsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListStreamOpsRecordsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

