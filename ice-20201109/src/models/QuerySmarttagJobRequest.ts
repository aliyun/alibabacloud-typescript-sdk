// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the smart tag job to query. You can obtain the ID from the response parameters of the [SubmitSmarttagJob](https://help.aliyun.com/document_detail/478786.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2****
   */
  jobId?: string;
  /**
   * @remarks
   * The additional request parameters, represented as a JSON string. Example: {"labelResultType":"auto"}. The labelResultType parameter is of the String type. Valid values:
   * 
   * - auto: machine tagging results.
   * 
   * - hmi: human-machine collaboration results.
   * 
   * @example
   * {"labelResultType":"auto"}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

