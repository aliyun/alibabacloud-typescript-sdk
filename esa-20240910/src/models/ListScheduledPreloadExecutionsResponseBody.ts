// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadExecutionsResponseBodyExecutions extends $dara.Model {
  aliUid?: string;
  endTime?: string;
  id?: string;
  interval?: number;
  jobId?: string;
  sliceLen?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      interval: 'Interval',
      jobId: 'JobId',
      sliceLen: 'SliceLen',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'string',
      id: 'string',
      interval: 'number',
      jobId: 'string',
      sliceLen: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledPreloadExecutionsResponseBody extends $dara.Model {
  executions?: ListScheduledPreloadExecutionsResponseBodyExecutions[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListScheduledPreloadExecutionsResponseBodyExecutions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

