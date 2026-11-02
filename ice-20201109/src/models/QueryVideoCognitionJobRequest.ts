// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobRequestIncludeResults extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the automatic speech recognition (ASR) results.
   * 
   * @example
   * true
   */
  needAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to display the optical character recognition (OCR) results.
   * 
   * @example
   * true
   */
  needOcr?: boolean;
  /**
   * @remarks
   * Specifies whether to display the links to the original results of the operators.
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
   * Specifies whether to include the complete algorithm results in the query results.
   */
  includeResults?: QueryVideoCognitionJobRequestIncludeResults;
  /**
   * @remarks
   * The ID of the intelligent tagging job to query. You can obtain the ID from the response parameters of the [Submit a smart tagging job](https://help.aliyun.com/document_detail/478786.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The additional request parameters, represented as a JSON string.
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

