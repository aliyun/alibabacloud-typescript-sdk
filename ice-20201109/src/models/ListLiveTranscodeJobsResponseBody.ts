// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos extends $dara.Model {
  /**
   * @remarks
   * The output stream URL.
   * 
   * @example
   * rtmp://mydomain/app/mytranscode1
   */
  outputUrl?: string;
  /**
   * @remarks
   * The output stream protocol type. Currently, only the RTMP protocol is supported.
   * 
   * @example
   * rtmp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputUrl: 'string',
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

export class ListLiveTranscodeJobsResponseBodyJobListOutputStream extends $dara.Model {
  /**
   * @remarks
   * The list of playback URLs.
   */
  streamInfos?: ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfos: { 'type': 'array', 'itemType': ListLiveTranscodeJobsResponseBodyJobListOutputStreamStreamInfos },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfos)) {
      $dara.Model.validateArray(this.streamInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBodyJobListStreamInput extends $dara.Model {
  /**
   * @remarks
   * The input stream URL.
   * 
   * @example
   * rtmp://mydomain/app/stream1
   */
  inputUrl?: string;
  /**
   * @remarks
   * The input stream type.
   * 
   * @example
   * rtmp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputUrl: 'InputUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUrl: 'string',
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

export class ListLiveTranscodeJobsResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-07-20T02:48:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the transcoding task.
   * 
   * @example
   * mytask
   */
  name?: string;
  /**
   * @remarks
   * The output stream information.
   */
  outputStream?: ListLiveTranscodeJobsResponseBodyJobListOutputStream;
  /**
   * @remarks
   * The start mode.
   * 
   * @example
   * 0
   */
  startMode?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The input stream information.
   */
  streamInput?: ListLiveTranscodeJobsResponseBodyJobListStreamInput;
  /**
   * @remarks
   * The template ID corresponding to the transcoding task.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287666****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the transcoding template corresponding to the transcoding task.
   * 
   * @example
   * normal
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      name: 'Name',
      outputStream: 'OutputStream',
      startMode: 'StartMode',
      status: 'Status',
      streamInput: 'StreamInput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      name: 'string',
      outputStream: ListLiveTranscodeJobsResponseBodyJobListOutputStream,
      startMode: 'number',
      status: 'number',
      streamInput: ListLiveTranscodeJobsResponseBodyJobListStreamInput,
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(this.outputStream && typeof (this.outputStream as any).validate === 'function') {
      (this.outputStream as any).validate();
    }
    if(this.streamInput && typeof (this.streamInput as any).validate === 'function') {
      (this.streamInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveTranscodeJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of transcoding tasks.
   */
  jobList?: ListLiveTranscodeJobsResponseBodyJobList[];
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
   * The total number of entries.
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
      jobList: { 'type': 'array', 'itemType': ListLiveTranscodeJobsResponseBodyJobList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

