// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIJobResponseBodyAIJobListAIJob extends $dara.Model {
  code?: string;
  completeTime?: string;
  creationTime?: string;
  data?: string;
  jobId?: string;
  mediaId?: string;
  message?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      data: 'string',
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
      status: 'string',
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

export class ListAIJobResponseBodyAIJobList extends $dara.Model {
  AIJob?: ListAIJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': ListAIJobResponseBodyAIJobListAIJob },
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

export class ListAIJobResponseBodyNonExistAIJobIds extends $dara.Model {
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

export class ListAIJobResponseBody extends $dara.Model {
  AIJobList?: ListAIJobResponseBodyAIJobList;
  nonExistAIJobIds?: ListAIJobResponseBodyNonExistAIJobIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8233A0E4-E112-44*****58-2BCED1B88173
   */
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
      AIJobList: ListAIJobResponseBodyAIJobList,
      nonExistAIJobIds: ListAIJobResponseBodyNonExistAIJobIds,
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

