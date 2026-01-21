// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutoProtectNewAssetsResponseBody extends $dara.Model {
  /**
   * @example
   * api_server
   */
  module?: string;
  /**
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
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

