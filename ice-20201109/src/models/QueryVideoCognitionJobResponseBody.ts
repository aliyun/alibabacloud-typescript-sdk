// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobResponseBodyResultsResult extends $dara.Model {
  /**
   * @example
   * {"title":"example-title-****"}
   */
  data?: string;
  /**
   * @example
   * ASR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class QueryVideoCognitionJobResponseBodyResults extends $dara.Model {
  result?: QueryVideoCognitionJobResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryVideoCognitionJobResponseBodyResultsResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoCognitionJobResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  jobStatus?: string;
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  results?: QueryVideoCognitionJobResponseBodyResults;
  /**
   * @example
   * {"userId":"123432412831"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      results: 'Results',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      requestId: 'string',
      results: QueryVideoCognitionJobResponseBodyResults,
      userData: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

