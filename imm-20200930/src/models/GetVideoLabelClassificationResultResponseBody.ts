// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class GetVideoLabelClassificationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code of the task.
   * 
   * @example
   * ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-12-24T03:00:42.134971294Z
   */
  endTime?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 2F6-1Bz99Xi93EnRpNEyLudILJm****
   */
  eventId?: string;
  /**
   * @remarks
   * The labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The error message of the task.
   * 
   * @example
   * The specified resource project is not found.
   */
  message?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F84C6D9-5AC0-49F9-914D-F02678E3****
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2021-12-24T03:00:38.892462383Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * VideoLabelClassification-2f157087-91df-4fda-8c3e-232407ec****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * VideoLabelClassification
   */
  taskType?: string;
  /**
   * @remarks
   * The custom information.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      labels: 'Labels',
      message: 'Message',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      eventId: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      message: 'string',
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

