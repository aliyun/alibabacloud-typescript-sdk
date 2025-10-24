// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobResponseBodyResultsResult extends $dara.Model {
  /**
   * @example
   * {"title":"example-title-****"}
   */
  data?: string;
  /**
   * @example
   * Meta
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

export class QuerySmarttagJobResponseBodyResults extends $dara.Model {
  result?: QuerySmarttagJobResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QuerySmarttagJobResponseBodyResultsResult },
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

export class QuerySmarttagJobResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  jobStatus?: string;
  message?: string;
  /**
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  results?: QuerySmarttagJobResponseBodyResults;
  /**
   * @example
   * example UserData ****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      message: 'string',
      requestId: 'string',
      results: QuerySmarttagJobResponseBodyResults,
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

