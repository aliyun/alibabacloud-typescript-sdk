// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoPornRecogJobResponseBodyAIVideoPornRecogJobListAIVideoPornRecogJob extends $dara.Model {
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

export class ListAIVideoPornRecogJobResponseBodyAIVideoPornRecogJobList extends $dara.Model {
  AIVideoPornRecogJob?: ListAIVideoPornRecogJobResponseBodyAIVideoPornRecogJobListAIVideoPornRecogJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoPornRecogJob: 'AIVideoPornRecogJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoPornRecogJob: { 'type': 'array', 'itemType': ListAIVideoPornRecogJobResponseBodyAIVideoPornRecogJobListAIVideoPornRecogJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoPornRecogJob)) {
      $dara.Model.validateArray(this.AIVideoPornRecogJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoPornRecogJobResponseBodyNonExistPornRecogJobIds extends $dara.Model {
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

export class ListAIVideoPornRecogJobResponseBody extends $dara.Model {
  AIVideoPornRecogJobList?: ListAIVideoPornRecogJobResponseBodyAIVideoPornRecogJobList;
  nonExistPornRecogJobIds?: ListAIVideoPornRecogJobResponseBodyNonExistPornRecogJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoPornRecogJobList: 'AIVideoPornRecogJobList',
      nonExistPornRecogJobIds: 'NonExistPornRecogJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoPornRecogJobList: ListAIVideoPornRecogJobResponseBodyAIVideoPornRecogJobList,
      nonExistPornRecogJobIds: ListAIVideoPornRecogJobResponseBodyNonExistPornRecogJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoPornRecogJobList && typeof (this.AIVideoPornRecogJobList as any).validate === 'function') {
      (this.AIVideoPornRecogJobList as any).validate();
    }
    if(this.nonExistPornRecogJobIds && typeof (this.nonExistPornRecogJobIds as any).validate === 'function') {
      (this.nonExistPornRecogJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

