// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskValidationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Job details.
   * 
   * @example
   * {"ValidateAction": "Detail"}
   */
  detail?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 3E36DB6E-AE3B-53B6-A703-85F883FD1B2C
   */
  requestId?: string;
  /**
   * @remarks
   * Job status. The parameter is invalid.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. The values have the following meanings:
   * 
   * - **true**: Succeeded
   * - **false**: Failed
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

