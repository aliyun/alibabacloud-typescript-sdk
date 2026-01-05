// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IpPort extends $dara.Model {
  /**
   * @example
   * 10.0.0.5
   */
  ip?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
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

