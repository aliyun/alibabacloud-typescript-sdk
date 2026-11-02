// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoCognitionJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the complete algorithm results in the query results.
   */
  includeResultsShrink?: string;
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

