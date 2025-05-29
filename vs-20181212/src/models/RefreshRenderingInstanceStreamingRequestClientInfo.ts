// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshRenderingInstanceStreamingRequestClientInfo extends $dara.Model {
  /**
   * @example
   * 172.21.128.110
   */
  clientIp?: string;
  /**
   * @example
   * true
   */
  newClient?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      newClient: 'NewClient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      newClient: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

