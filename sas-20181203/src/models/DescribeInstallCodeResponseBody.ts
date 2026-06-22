// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstallCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB393****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

