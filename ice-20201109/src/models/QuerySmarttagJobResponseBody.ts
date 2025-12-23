// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobResponseBodyResultsResult extends $dara.Model {
  /**
   * @remarks
   * The details of the analysis result. The value is a JSON string. For more information about the parameters of different result types, see the "Parameters of different result types" section of this topic.
   * 
   * @example
   * {"title":"example-title-****"}
   */
  data?: string;
  /**
   * @remarks
   * The type of the analysis result.
   * 
   * *   The type of the analysis result based on Smart tagging V1.0. Valid values:
   * 
   * 1.  TextLabel: the text tag.
   * 2.  VideoLabel: the video tag.
   * 3.  ASR: the original result of automatic speech recognition (ASR). By default, this type of result is not returned.
   * 4.  OCR: the original result of optical character recognition (OCR). By default, this type of result is not returned.
   * 5.  NLP: the natural language processing (NLP)-based result. By default, this type of result is not returned.
   * 
   * *   The type of the analysis result based on Smart tagging V2.0. Valid values:
   * 
   * 1.  CPVLabel
   * 2.  Meta: the information about the video file, such as the title of the video. By default, this type of information is not returned.
   * 
   * *   The type of the analysis result based on Smart tagging V2.0-custom. Valid values:
   * 
   * 1.  CPVLabel
   * 2.  Meta: the information about the video file, such as the title of the video. By default, this type of information is not returned.
   * 
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

export class QuerySmarttagJobResponseBodyUsagesUsage extends $dara.Model {
  quota?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
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

export class QuerySmarttagJobResponseBodyUsages extends $dara.Model {
  usage?: QuerySmarttagJobResponseBodyUsagesUsage[];
  static names(): { [key: string]: string } {
    return {
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usage: { 'type': 'array', 'itemType': QuerySmarttagJobResponseBodyUsagesUsage },
    };
  }

  validate() {
    if(Array.isArray(this.usage)) {
      $dara.Model.validateArray(this.usage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Success**: The job was successful.
   * *   **Fail**: The job failed.
   * *   **Processing**: The job is in progress.
   * *   **Submitted**: The job is submitted and waiting to be processed.
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
   * The analysis results of the smart tagging job. The value is an array.
   */
  results?: QuerySmarttagJobResponseBodyResults;
  usages?: QuerySmarttagJobResponseBodyUsages;
  /**
   * @remarks
   * The content of callback messages that are sent to Simple Message Queue (SMQ) when the information of the smart tagging job changes. For more information about the parameters contained in the callback message, see the "Callback parameters" section of this topic.
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
      usages: 'Usages',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      requestId: 'string',
      results: QuerySmarttagJobResponseBodyResults,
      usages: QuerySmarttagJobResponseBodyUsages,
      userData: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    if(this.usages && typeof (this.usages as any).validate === 'function') {
      (this.usages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

