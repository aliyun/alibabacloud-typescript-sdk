// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The username. If a Resource Access Management (RAM) user calls this operation without specifying this parameter, the AccessKey pairs of the RAM user are listed.
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

