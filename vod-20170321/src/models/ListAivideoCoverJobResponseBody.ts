// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoCoverJobResponseBodyAIVideoCoverJobListAIVideoCoverJob extends $dara.Model {
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

export class ListAIVideoCoverJobResponseBodyAIVideoCoverJobList extends $dara.Model {
  AIVideoCoverJob?: ListAIVideoCoverJobResponseBodyAIVideoCoverJobListAIVideoCoverJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoCoverJob: 'AIVideoCoverJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCoverJob: { 'type': 'array', 'itemType': ListAIVideoCoverJobResponseBodyAIVideoCoverJobListAIVideoCoverJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoCoverJob)) {
      $dara.Model.validateArray(this.AIVideoCoverJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoCoverJobResponseBodyNonExistAIVideoCoverJobIds extends $dara.Model {
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

export class ListAIVideoCoverJobResponseBody extends $dara.Model {
  AIVideoCoverJobList?: ListAIVideoCoverJobResponseBodyAIVideoCoverJobList;
  nonExistAIVideoCoverJobIds?: ListAIVideoCoverJobResponseBodyNonExistAIVideoCoverJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCoverJobList: 'AIVideoCoverJobList',
      nonExistAIVideoCoverJobIds: 'NonExistAIVideoCoverJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCoverJobList: ListAIVideoCoverJobResponseBodyAIVideoCoverJobList,
      nonExistAIVideoCoverJobIds: ListAIVideoCoverJobResponseBodyNonExistAIVideoCoverJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoCoverJobList && typeof (this.AIVideoCoverJobList as any).validate === 'function') {
      (this.AIVideoCoverJobList as any).validate();
    }
    if(this.nonExistAIVideoCoverJobIds && typeof (this.nonExistAIVideoCoverJobIds as any).validate === 'function') {
      (this.nonExistAIVideoCoverJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

