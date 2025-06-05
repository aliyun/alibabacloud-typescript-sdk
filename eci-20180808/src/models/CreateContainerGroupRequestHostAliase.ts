// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestHostAliase extends $dara.Model {
  /**
   * @remarks
   * The hostnames of the elastic container instance.
   * 
   * @example
   * hehe.com
   */
  hostname?: string[];
  /**
   * @remarks
   * The IP address of the elastic container instance.
   * 
   * @example
   * 1.1.1.1
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostname)) {
      $dara.Model.validateArray(this.hostname);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

