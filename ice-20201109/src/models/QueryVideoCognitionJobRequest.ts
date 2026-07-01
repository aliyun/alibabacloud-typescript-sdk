// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobRequestIncludeResults extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the ASR results.
   * 
   * @example
   * true
   */
  needAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to return the OCR results.
   * 
   * @example
   * true
   */
  needOcr?: boolean;
  /**
   * @remarks
   * Specifies whether to return a link to the raw operator results.
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
   * A container for parameters that determine which algorithm results to include in the response.
   */
  includeResults?: QueryVideoCognitionJobRequestIncludeResults;
  /**
   * @remarks
   * The ID of the intelligent tagging job. You can obtain this ID from the response of the [SubmitIntelligentTaggingJob](https://help.aliyun.com/document_detail/478786.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * Additional request parameters, specified as a JSON string.
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

