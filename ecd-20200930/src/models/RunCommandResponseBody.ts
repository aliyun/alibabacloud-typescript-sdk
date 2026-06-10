// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The script execution ID. You can use this ID with the [DescribeInvocations](~~DescribeInvocations~~) operation to query the script\\"s execution status.
   * 
   * @example
   * t-hz01qgsqj2n****
   */
  invokeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
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

