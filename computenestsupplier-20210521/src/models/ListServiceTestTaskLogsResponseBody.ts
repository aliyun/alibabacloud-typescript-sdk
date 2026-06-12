// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestTaskLogsResponseBodyTaskLogs extends $dara.Model {
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * log content
   */
  content?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-12-12T20:00:09Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceTestTaskLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDEE055B-D5F4-5B92-8F21-999D408F1214
   */
  requestId?: string;
  /**
   * @remarks
   * The log entries.
   */
  taskLogs?: ListServiceTestTaskLogsResponseBodyTaskLogs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskLogs: 'TaskLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskLogs: { 'type': 'array', 'itemType': ListServiceTestTaskLogsResponseBodyTaskLogs },
    };
  }

  validate() {
    if(Array.isArray(this.taskLogs)) {
      $dara.Model.validateArray(this.taskLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

