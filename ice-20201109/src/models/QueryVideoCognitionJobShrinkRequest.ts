// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A container for parameters that determine which algorithm results to include in the response.
   */
  includeResultsShrink?: string;
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
      includeResultsShrink: 'IncludeResults',
      jobId: 'JobId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeResultsShrink: 'string',
      jobId: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

