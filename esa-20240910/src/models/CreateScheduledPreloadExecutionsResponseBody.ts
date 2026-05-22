// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledPreloadExecutionsResponseBodyFailedExecutions extends $dara.Model {
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

export class CreateScheduledPreloadExecutionsResponseBodySuccessExecutions extends $dara.Model {
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

export class CreateScheduledPreloadExecutionsResponseBody extends $dara.Model {
  failedExecutions?: CreateScheduledPreloadExecutionsResponseBodyFailedExecutions[];
  failedMessages?: string[];
  requestId?: string;
  successCount?: number;
  successExecutions?: CreateScheduledPreloadExecutionsResponseBodySuccessExecutions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedExecutions: 'FailedExecutions',
      failedMessages: 'FailedMessages',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successExecutions: 'SuccessExecutions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodyFailedExecutions },
      failedMessages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      successExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodySuccessExecutions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedExecutions)) {
      $dara.Model.validateArray(this.failedExecutions);
    }
    if(Array.isArray(this.failedMessages)) {
      $dara.Model.validateArray(this.failedMessages);
    }
    if(Array.isArray(this.successExecutions)) {
      $dara.Model.validateArray(this.successExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

