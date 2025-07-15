// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the ADB key pair was created.
   * 
   * @example
   * 2023-03-05T10:29:22Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3*****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the ADB key pair.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that is returned.
   */
  data?: ImportKeyPairResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
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
      data: ImportKeyPairResponseBodyData,
      requestId: 'string',
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

