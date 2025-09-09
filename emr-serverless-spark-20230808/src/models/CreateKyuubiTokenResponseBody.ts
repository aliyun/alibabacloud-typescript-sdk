// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKyuubiTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Token ID。
   * 
   * @example
   * tk-zpi0*****hdv4y
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKyuubiTokenResponseBody extends $dara.Model {
  data?: CreateKyuubiTokenResponseBodyData;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateKyuubiTokenResponseBodyData,
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

