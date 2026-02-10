// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeTranscodeJobResponseBodyJobListJob extends $dara.Model {
  createTime?: string;
  jobId?: string;
  lastStartAt?: string;
  lastStopAt?: string;
  name?: string;
  status?: string;
  streamInput?: string;
  streamOutput?: string;
  templateId?: string;
  templateName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      lastStartAt: 'LastStartAt',
      lastStopAt: 'LastStopAt',
      name: 'Name',
      status: 'Status',
      streamInput: 'StreamInput',
      streamOutput: 'StreamOutput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      lastStartAt: 'string',
      lastStopAt: 'string',
      name: 'string',
      status: 'string',
      streamInput: 'string',
      streamOutput: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeTranscodeJobResponseBodyJobList extends $dara.Model {
  job?: ListEdgeTranscodeJobResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListEdgeTranscodeJobResponseBodyJobListJob },
    };
  }

  validate() {
    if(Array.isArray(this.job)) {
      $dara.Model.validateArray(this.job);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeTranscodeJobResponseBody extends $dara.Model {
  jobList?: ListEdgeTranscodeJobResponseBodyJobList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: ListEdgeTranscodeJobResponseBodyJobList,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.jobList && typeof (this.jobList as any).validate === 'function') {
      (this.jobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

