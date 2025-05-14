// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The sharing token information.
   * 
   * @example
   * WUzWCMr325LV0bH2JH4C4HoDaKIU6C4S
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

