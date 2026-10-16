// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The handshake ID.
   * 
   * This parameter is required.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

