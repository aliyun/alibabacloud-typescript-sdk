// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaDNADeleteJobResponseBodyAIJobListAIJob extends $dara.Model {
  code?: string;
  fpDBId?: string;
  jobId?: string;
  mediaId?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fpDBId: 'FpDBId',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fpDBId: 'string',
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
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

export class ListMediaDNADeleteJobResponseBodyAIJobList extends $dara.Model {
  AIJob?: ListMediaDNADeleteJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': ListMediaDNADeleteJobResponseBodyAIJobListAIJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIJob)) {
      $dara.Model.validateArray(this.AIJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNADeleteJobResponseBodyNonExistAIJobIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaDNADeleteJobResponseBody extends $dara.Model {
  AIJobList?: ListMediaDNADeleteJobResponseBodyAIJobList;
  nonExistAIJobIds?: ListMediaDNADeleteJobResponseBodyNonExistAIJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIJobList: 'AIJobList',
      nonExistAIJobIds: 'NonExistAIJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJobList: ListMediaDNADeleteJobResponseBodyAIJobList,
      nonExistAIJobIds: ListMediaDNADeleteJobResponseBodyNonExistAIJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIJobList && typeof (this.AIJobList as any).validate === 'function') {
      (this.AIJobList as any).validate();
    }
    if(this.nonExistAIJobIds && typeof (this.nonExistAIJobIds as any).validate === 'function') {
      (this.nonExistAIJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

