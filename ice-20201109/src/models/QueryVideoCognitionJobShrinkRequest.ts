// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the full algorithm results in the response.
   */
  includeResultsShrink?: string;
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

