// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob extends $dara.Model {
  code?: string;
  creationTime?: string;
  fileIds?: string;
  finishTime?: string;
  fpDBId?: string;
  id?: string;
  message?: string;
  pipelineId?: string;
  status?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      creationTime: 'CreationTime',
      fileIds: 'FileIds',
      finishTime: 'FinishTime',
      fpDBId: 'FpDBId',
      id: 'Id',
      message: 'Message',
      pipelineId: 'PipelineId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      creationTime: 'string',
      fileIds: 'string',
      finishTime: 'string',
      fpDBId: 'string',
      id: 'string',
      message: 'string',
      pipelineId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList extends $dara.Model {
  fpFileDeleteJob?: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob[];
  static names(): { [key: string]: string } {
    return {
      fpFileDeleteJob: 'FpFileDeleteJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpFileDeleteJob: { 'type': 'array', 'itemType': QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob },
    };
  }

  validate() {
    if(Array.isArray(this.fpFileDeleteJob)) {
      $dara.Model.validateArray(this.fpFileDeleteJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpFileDeleteJobListResponseBodyNonExistIds extends $dara.Model {
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

export class QueryFpFileDeleteJobListResponseBody extends $dara.Model {
  fpFileDeleteJobList?: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList;
  nonExistIds?: QueryFpFileDeleteJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D127C68E-F1A1-4CE5-A874-8FF724881A12
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpFileDeleteJobList: 'FpFileDeleteJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpFileDeleteJobList: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList,
      nonExistIds: QueryFpFileDeleteJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpFileDeleteJobList && typeof (this.fpFileDeleteJobList as any).validate === 'function') {
      (this.fpFileDeleteJobList as any).validate();
    }
    if(this.nonExistIds && typeof (this.nonExistIds as any).validate === 'function') {
      (this.nonExistIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

