// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstancePortRequest extends $dara.Model {
  /**
   * @example
   * 443
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

