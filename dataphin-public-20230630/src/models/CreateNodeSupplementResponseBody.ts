// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeSupplementResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. A value of OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code returned by the backend
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * - Standard mode: the FlowId is returned.
   * - Bulk mode: the submitted JobId is returned. You can call GetOperationSubmitStatus to query the task submission status. After the submission succeeds, the FlowId is returned.
   * 
   * @example
   * f_2264518792396800000_20210223_2329354897145659392
   */
  submitId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true/false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitId: 'SubmitId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

