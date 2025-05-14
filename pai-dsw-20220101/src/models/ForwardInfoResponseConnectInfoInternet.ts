// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardInfoResponseConnectInfoInternet extends $dara.Model {
  /**
   * @example
   * 47.111.119.114
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

