// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAckOperatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFA88951-7A6F-4A8E-AB8F-2BB7132BA751
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. Valid values:
   * 
   * - true: The installation was successful.
   * - false: The installation failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

