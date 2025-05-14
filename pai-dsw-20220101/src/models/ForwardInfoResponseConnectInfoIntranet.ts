// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardInfoResponseConnectInfoIntranet extends $dara.Model {
  /**
   * @example
   * dsw-notebook-22-urz3u6cnu0uts7ej9r.dsw-5cc6083084818f60.dsw.pai.alibaba.com
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

