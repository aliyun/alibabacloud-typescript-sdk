// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the smart tagging job that you want to query. You can obtain the job ID from the response parameters of the SubmitSmarttagJob operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2****
   */
  jobId?: string;
  /**
   * @remarks
   * The extra parameters that you want to query in the request. The value is a JSON string. Example: {"labelResultType":"auto"}. The value of labelResultType is of the STRING type. Valid values:
   * 
   * *   auto: machine tagging
   * *   hmi: tagging by human and machine
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

