// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamInstanceRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deployment ID of the task. A single deployment can be associated with multiple running instances.
   * 
   * @example
   * ac6e5a34bbd44d7f8b7851ef28c90d12
   */
  deploymentId?: string;
  /**
   * @remarks
   * The instance ID of the deployment running instance. This value corresponds to the DeploymentInstanceId request parameter in the log and TaskManager query operations.
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
  /**
   * @remarks
   * The relative path for dirty data storage in this run, excluding the storage service domain name. A value of null indicates that no dirty data path exists.
   * 
   * @example
   * dirty-data/7333610201479808/7db678957dc449aab0086b931c9f8218/error.log
   */
  errorDataPath?: string;
  /**
   * @remarks
   * The start time of this run. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-10-15 13:46:26
   */
  startTime?: string;
  /**
   * @remarks
   * The running instance status returned by the engine, such as RUNNING, FINISHED, and TRANSITIONING. This status uses a different enumeration from the TaskStatusEnum returned by the GetStreamTask operation.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      deploymentInstanceId: 'DeploymentInstanceId',
      errorDataPath: 'ErrorDataPath',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      deploymentInstanceId: 'string',
      errorDataPath: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamInstanceRecordsResponseBody extends $dara.Model {
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
   * The historical running instance records of the real-time task. You can use the deploymentInstanceId to query the logs of a specific run.
   */
  data?: ListStreamInstanceRecordsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListStreamInstanceRecordsResponseBodyData },
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

