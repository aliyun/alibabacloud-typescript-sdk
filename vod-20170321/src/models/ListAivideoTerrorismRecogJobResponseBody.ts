// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJobListAIVideoTerrorismRecogJob extends $dara.Model {
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

export class ListAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJobList extends $dara.Model {
  AIVideoTerrorismRecogJob?: ListAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJobListAIVideoTerrorismRecogJob[];
  static names(): { [key: string]: string } {
    return {
      AIVideoTerrorismRecogJob: 'AIVideoTerrorismRecogJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTerrorismRecogJob: { 'type': 'array', 'itemType': ListAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJobListAIVideoTerrorismRecogJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIVideoTerrorismRecogJob)) {
      $dara.Model.validateArray(this.AIVideoTerrorismRecogJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIVideoTerrorismRecogJobResponseBodyNonExistTerrorismRecogJobIds extends $dara.Model {
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

export class ListAIVideoTerrorismRecogJobResponseBody extends $dara.Model {
  AIVideoTerrorismRecogJobList?: ListAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJobList;
  nonExistTerrorismRecogJobIds?: ListAIVideoTerrorismRecogJobResponseBodyNonExistTerrorismRecogJobIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIVideoTerrorismRecogJobList: 'AIVideoTerrorismRecogJobList',
      nonExistTerrorismRecogJobIds: 'NonExistTerrorismRecogJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIVideoTerrorismRecogJobList: ListAIVideoTerrorismRecogJobResponseBodyAIVideoTerrorismRecogJobList,
      nonExistTerrorismRecogJobIds: ListAIVideoTerrorismRecogJobResponseBodyNonExistTerrorismRecogJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIVideoTerrorismRecogJobList && typeof (this.AIVideoTerrorismRecogJobList as any).validate === 'function') {
      (this.AIVideoTerrorismRecogJobList as any).validate();
    }
    if(this.nonExistTerrorismRecogJobIds && typeof (this.nonExistTerrorismRecogJobIds as any).validate === 'function') {
      (this.nonExistTerrorismRecogJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

