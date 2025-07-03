// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateBackupPolicyResponseBodyData } from "./UpdateBackupPolicyResponseBodyData";


export class UpdateBackupPolicyResponseBody extends $dara.Model {
  data?: UpdateBackupPolicyResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
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
      data: UpdateBackupPolicyResponseBodyData,
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

