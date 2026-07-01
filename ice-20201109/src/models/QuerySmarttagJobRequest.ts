// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the smart tagging job. You can obtain this ID from the response to the [SubmitSmarttagJob](https://help.aliyun.com/document_detail/478786.html) call.
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2****
   */
  jobId?: string;
  /**
   * @remarks
   * Additional request parameters, formatted as a JSON string. For example: `{"labelResultType":"auto"}`. The `labelResultType` parameter supports the following values:
   * 
   * - `auto`: machine-generated tagging results
   * 
   * - `hmi`: human-in-the-loop tagging results
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

