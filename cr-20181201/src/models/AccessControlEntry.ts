// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessControlEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the whitelist entry.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The IP address or CIDR block that is allowed to access the public endpoint of the instance.
   * 
   * @example
   * 192.168.1.1/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

