// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IPConfig extends $dara.Model {
  /**
   * @example
   * 办公网出口地址
   */
  description?: string;
  /**
   * @example
   * 203.0.113.25/32
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      ipAddress: 'ipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

