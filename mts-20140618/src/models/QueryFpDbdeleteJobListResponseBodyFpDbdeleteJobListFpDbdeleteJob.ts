// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * ServiceUnavailable
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2020-06-30T00:33:18Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The type of the operation.
   * 
   * @example
   * Purge
   */
  delType?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2020-06-30T00:34:02Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 25bacf2824614bcf9273dc0744db****
   */
  id?: string;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The request has failed due to a temporary failure of the server.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the job was submitted.
   * 
   * @example
   * fb712a6890464059b1b2ea7c8647****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Queuing**: The job is waiting in the queue.
   * *   **Analysing**: The job is in progress.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * example data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      delType: 'DelType',
      finishTime: 'FinishTime',
      fpDBId: 'FpDBId',
      id: 'Id',
      message: 'Message',
      pipelineId: 'PipelineId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      delType: 'string',
      finishTime: 'string',
      fpDBId: 'string',
      id: 'string',
      message: 'string',
      pipelineId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

