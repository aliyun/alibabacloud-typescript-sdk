// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true.
   * *   false.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to find logs and troubleshoot issues.
   * 
   * @example
   * 5710C923-AD09-4293-9E11-DCBE3D15F8D4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

