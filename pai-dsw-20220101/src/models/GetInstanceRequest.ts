// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceRequest extends $dara.Model {
  fields?: string;
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
      fields: 'Fields',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
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

