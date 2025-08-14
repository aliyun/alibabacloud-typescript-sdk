// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobRequestIncludeResults extends $dara.Model {
  /**
   * @example
   * true
   */
  needAsr?: boolean;
  /**
   * @example
   * true
   */
  needOcr?: boolean;
  /**
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
  includeResults?: QueryVideoCognitionJobRequestIncludeResults;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
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

