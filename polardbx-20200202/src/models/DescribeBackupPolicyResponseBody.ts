// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupPolicyResponseBodyData } from "./DescribeBackupPolicyResponseBodyData";


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  data?: DescribeBackupPolicyResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B87E2AB3-B7C9-4394-9160-7F639F732031
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeBackupPolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

