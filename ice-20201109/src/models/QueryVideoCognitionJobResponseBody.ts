// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobResponseBodyInput extends $dara.Model {
  /**
   * @remarks
   * The URL of the input file.
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid value: OSS.
   */
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
  /**
   * @remarks
   * The input file.
   */
  input?: QueryVideoCognitionJobResponseBodyInput;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **Success**: The job succeeded.
   * 
   * - **Fail**: The job failed.
   * 
   * - **Processing**: The job is in progress.
   * 
   * - **Submitted**: The job has been submitted and is awaiting processing.
   * 
   * @example
   * Success
   */
  jobStatus?: string;
  /**
   * @remarks
   * The request parameters.
   */
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
  /**
   * @remarks
   * The template ID.
   */
  templateId?: string;
  /**
   * @remarks
   * The user data.
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

