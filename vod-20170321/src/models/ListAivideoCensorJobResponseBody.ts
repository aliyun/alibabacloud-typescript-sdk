// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoCensorJobResponseBodyAIVideoCensorJobListAIVideoCensorJob extends $dara.Model {
  code?: string;
  creationTime?: string;
  data?: string;
  jobId?: string;
  mediaId?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      data: 'string',
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

export class ListAIVideoCensorJobResponseBodyAIVideoCensorJobList extends $dara.Model {
  AIVideoCensorJob?: ListAIVideoCensorJobResponseBodyAIVideoCensorJobListAIVideoCensorJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoCensorJob: 'AIVideoCensorJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCensorJob: { 'type': 'array', 'itemType': ListAIVideoCensorJobResponseBodyAIVideoCensorJobListAIVideoCensorJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoCensorJob)) {
      $dara.Model.validateArray(this.AIVideoCensorJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoCensorJobResponseBodyNonExistAIVideoCensorJobIds extends $dara.Model {
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

export class ListAIVideoCensorJobResponseBody extends $dara.Model {
  AIVideoCensorJobList?: ListAIVideoCensorJobResponseBodyAIVideoCensorJobList;
  nonExistAIVideoCensorJobIds?: ListAIVideoCensorJobResponseBodyNonExistAIVideoCensorJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCensorJobList: 'AIVideoCensorJobList',
      nonExistAIVideoCensorJobIds: 'NonExistAIVideoCensorJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCensorJobList: ListAIVideoCensorJobResponseBodyAIVideoCensorJobList,
      nonExistAIVideoCensorJobIds: ListAIVideoCensorJobResponseBodyNonExistAIVideoCensorJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoCensorJobList && typeof (this.AIVideoCensorJobList as any).validate === 'function') {
      (this.AIVideoCensorJobList as any).validate();
    }
    if(this.nonExistAIVideoCensorJobIds && typeof (this.nonExistAIVideoCensorJobIds as any).validate === 'function') {
      (this.nonExistAIVideoCensorJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

