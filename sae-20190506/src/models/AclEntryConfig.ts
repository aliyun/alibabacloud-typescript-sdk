// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AclEntryConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.2.3.4/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

