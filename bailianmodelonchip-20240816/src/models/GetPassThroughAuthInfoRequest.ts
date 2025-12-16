// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPassThroughAuthInfoRequest extends $dara.Model {
  /**
   * @example
   * mm_2b7d37b695fb44faa983e5fbb032
   */
  appId?: string;
  /**
   * @example
   * 35f9ed99b27a1e8374f6593bf969f7d6
   */
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      deviceName: 'deviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

