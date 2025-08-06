// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoCategoryJobResponseBodyAIVideoCategoryJobListAIVideoCategoryJob extends $dara.Model {
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

export class ListAIVideoCategoryJobResponseBodyAIVideoCategoryJobList extends $dara.Model {
  AIVideoCategoryJob?: ListAIVideoCategoryJobResponseBodyAIVideoCategoryJobListAIVideoCategoryJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoCategoryJob: 'AIVideoCategoryJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCategoryJob: { 'type': 'array', 'itemType': ListAIVideoCategoryJobResponseBodyAIVideoCategoryJobListAIVideoCategoryJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoCategoryJob)) {
      $dara.Model.validateArray(this.AIVideoCategoryJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoCategoryJobResponseBodyNonExistAIVideoCategoryJobIds extends $dara.Model {
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

export class ListAIVideoCategoryJobResponseBody extends $dara.Model {
  AIVideoCategoryJobList?: ListAIVideoCategoryJobResponseBodyAIVideoCategoryJobList;
  nonExistAIVideoCategoryJobIds?: ListAIVideoCategoryJobResponseBodyNonExistAIVideoCategoryJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoCategoryJobList: 'AIVideoCategoryJobList',
      nonExistAIVideoCategoryJobIds: 'NonExistAIVideoCategoryJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoCategoryJobList: ListAIVideoCategoryJobResponseBodyAIVideoCategoryJobList,
      nonExistAIVideoCategoryJobIds: ListAIVideoCategoryJobResponseBodyNonExistAIVideoCategoryJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoCategoryJobList && typeof (this.AIVideoCategoryJobList as any).validate === 'function') {
      (this.AIVideoCategoryJobList as any).validate();
    }
    if(this.nonExistAIVideoCategoryJobIds && typeof (this.nonExistAIVideoCategoryJobIds as any).validate === 'function') {
      (this.nonExistAIVideoCategoryJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

