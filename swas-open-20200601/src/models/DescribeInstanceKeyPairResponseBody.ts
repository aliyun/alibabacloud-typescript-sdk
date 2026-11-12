// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * 4f:70:62:e9:0c:72:f7:ee:74:ce:e3:bf:e0:82:**:**
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      keyPairName: 'string',
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

