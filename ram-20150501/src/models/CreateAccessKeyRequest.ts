// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM user. If a RAM user calls this operation and does not specify this parameter, an AccessKey pair is created for the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

