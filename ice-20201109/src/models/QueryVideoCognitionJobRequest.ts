// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobRequestIncludeResults extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include Automatic Speech Recognition (ASR) results.
   * 
   * @example
   * true
   */
  needAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to include Optical Character Recognition (OCR) results.
   * 
   * @example
   * true
   */
  needOcr?: boolean;
  /**
   * @remarks
   * Specifies whether to include the URL to the raw output of the algorithm.
   * 
   * @example
   * true
   */
  needProcess?: boolean;
  static names(): { [key: string]: string } {
    return {
      needAsr: 'NeedAsr',
      needOcr: 'NeedOcr',
      needProcess: 'NeedProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needAsr: 'boolean',
      needOcr: 'boolean',
      needProcess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoCognitionJobRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the full algorithm results in the response.
   */
  includeResults?: QueryVideoCognitionJobRequestIncludeResults;
  /**
   * @remarks
   * The ID of the task to query. It is returned when you call the [SubmitSmarttagJob](https://help.aliyun.com/document_detail/478786.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * Additional request parameters, provided as a JSON string.
   * 
   * @example
   * {}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      includeResults: 'IncludeResults',
      jobId: 'JobId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeResults: QueryVideoCognitionJobRequestIncludeResults,
      jobId: 'string',
      params: 'string',
    };
  }

  validate() {
    if(this.includeResults && typeof (this.includeResults as any).validate === 'function') {
      (this.includeResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

