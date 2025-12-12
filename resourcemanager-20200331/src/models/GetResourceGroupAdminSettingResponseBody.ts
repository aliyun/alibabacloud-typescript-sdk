// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupAdminSettingResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  creatorAsAdmin?: boolean;
  /**
   * @example
   * 776B05B3-A0B0-464B-A191-F4E1119A94B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorAsAdmin: 'CreatorAsAdmin',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorAsAdmin: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

