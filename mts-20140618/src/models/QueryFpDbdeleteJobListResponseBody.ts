// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob extends $dara.Model {
  code?: string;
  creationTime?: string;
  delType?: string;
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
      delType: 'DelType',
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
      delType: 'string',
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

export class QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList extends $dara.Model {
  fpDBDeleteJob?: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob[];
  static names(): { [key: string]: string } {
    return {
      fpDBDeleteJob: 'FpDBDeleteJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBDeleteJob: { 'type': 'array', 'itemType': QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob },
    };
  }

  validate() {
    if(Array.isArray(this.fpDBDeleteJob)) {
      $dara.Model.validateArray(this.fpDBDeleteJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFpDBDeleteJobListResponseBodyNonExistIds extends $dara.Model {
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

export class QueryFpDBDeleteJobListResponseBody extends $dara.Model {
  fpDBDeleteJobList?: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList;
  nonExistIds?: QueryFpDBDeleteJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4247B23C-26DE-529F-8D9F-FD6811AE979B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBDeleteJobList: 'FpDBDeleteJobList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBDeleteJobList: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList,
      nonExistIds: QueryFpDBDeleteJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpDBDeleteJobList && typeof (this.fpDBDeleteJobList as any).validate === 'function') {
      (this.fpDBDeleteJobList as any).validate();
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

