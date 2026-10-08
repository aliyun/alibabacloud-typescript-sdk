// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskValidationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * {"ValidateAction": "Detail"}
   */
  detail?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3E36DB6E-AE3B-53B6-A703-85F883FD1B2C
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. This parameter is invalid.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      requestId: 'string',
      status: 'string',
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

