// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecycleBinStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ACB5258F-25AF-4D7C-8FAA-B6FE60******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the table recycle bin. Valid values:
   * 
   * *   disable: The table recycle bin is enabled.
   * *   enable: The table recycle bin is disabled.
   * 
   * @example
   * disable
   */
  status?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

