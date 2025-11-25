// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKyuubiServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Kyuubi Service ID。
   * 
   * @example
   * kb-f99935b350fb4****7ef700b8b4197a3
   */
  kyuubiServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      kyuubiServiceId: 'kyuubiServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kyuubiServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKyuubiServiceResponseBody extends $dara.Model {
  data?: CreateKyuubiServiceResponseBodyData;
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
      data: CreateKyuubiServiceResponseBodyData,
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

