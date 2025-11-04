// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * A JSON string containing the detailed analysis data. The structure of this data depends on the Type field. For details, see the Result parameters section below.
   * 
   * @example
   * {"title":"example-title-****"}
   */
  data?: string;
  /**
   * @remarks
   * The type of analysis result. Valid values:
   * 
   * 1.  TextLabel: Tags from text content.
   * 2.  VideoLabel: Tags from video content.
   * 3.  ASR: Raw speech recognition results. Not returned by default.
   * 4.  OCR: Raw text recognition results. Not returned by default.
   * 5.  NLP: Natural Language Processing results. Not returned by default.
   * 6.  Process: URL to the raw algorithm output. Not returned by default.
   * 
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * An array of analysis result objects.
   */
  results?: QueryVideoCognitionJobResponseBodyResults;
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

