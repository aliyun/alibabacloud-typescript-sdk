// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * IP protection switch, On: 1 Off: 0
   * 
   * @example
   * 0
   */
  ipProtection?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B30E5A62-2E64-577D-A70E-8C6781D6C975
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtection: 'IpProtection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtection: 'string',
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

