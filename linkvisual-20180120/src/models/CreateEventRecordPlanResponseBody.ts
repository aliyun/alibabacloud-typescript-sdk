// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRecordPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. Valid values:
   * - **200**: The call was successful.
   * - Other values: an error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the recording plan.
   * 
   * @example
   * fc82774fa749485bad7d719f9670****
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * product is not active.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * a195f615-8c64-4cc6-af57-2f42c6cca15c
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
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

