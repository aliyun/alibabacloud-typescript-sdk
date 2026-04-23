// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIJobResponseBodyAIJobListAIJob extends $dara.Model {
  jobId?: string;
  mediaId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
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

export class SubmitAIJobResponseBodyAIJobList extends $dara.Model {
  AIJob?: SubmitAIJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': SubmitAIJobResponseBodyAIJobListAIJob },
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

export class SubmitAIJobResponseBody extends $dara.Model {
  AIJobList?: SubmitAIJobResponseBodyAIJobList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D73936****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIJobList: 'AIJobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJobList: SubmitAIJobResponseBodyAIJobList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIJobList && typeof (this.AIJobList as any).validate === 'function') {
      (this.AIJobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

