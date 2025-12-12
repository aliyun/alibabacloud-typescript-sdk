// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * You can call the [ListHandshakesForAccount](https://help.aliyun.com/document_detail/160006.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * h-Ih8IuPfvV0t0****
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

