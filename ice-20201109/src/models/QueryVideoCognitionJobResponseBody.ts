// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobResponseBodyInput extends $dara.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

export class QueryVideoCognitionJobResponseBodyResultsResult extends $dara.Model {
  data?: string;
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
  input?: QueryVideoCognitionJobResponseBodyInput;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **Success**
   * *   **Fail**
   * *   **Processing**
   * *   **Submitted**
   * 
   * @example
   * Success
   */
  jobStatus?: string;
  params?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  results?: QueryVideoCognitionJobResponseBodyResults;
  templateId?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"userId":"123432412831"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      jobStatus: 'JobStatus',
      params: 'Params',
      requestId: 'RequestId',
      results: 'Results',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: QueryVideoCognitionJobResponseBodyInput,
      jobStatus: 'string',
      params: 'string',
      requestId: 'string',
      results: QueryVideoCognitionJobResponseBodyResults,
      templateId: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

