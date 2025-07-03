// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityIpsResponseBodyData } from "./DescribeSecurityIpsResponseBodyData";


export class DescribeSecurityIpsResponseBody extends $dara.Model {
  data?: DescribeSecurityIpsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 14036EBE-CF2E-44DB-ACE9-AC6157D3A6FC
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
      data: DescribeSecurityIpsResponseBodyData,
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

