// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockUnbindRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server from which you want to remove the protection directories.
   * > Call [DescribeWebLockBindList](~~DescribeWebLockBindList~~) to obtain the UUID of the server.
   * 
   * @example
   * 8d217d3f-6999-43a6-a435-c7a6854180e9
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

