// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingInstanceRequestClientInfo extends $dara.Model {
  /**
   * @example
   * 172.21.128.110
   */
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

