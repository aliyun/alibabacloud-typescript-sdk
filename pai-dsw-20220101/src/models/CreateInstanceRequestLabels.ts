// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The custom label key.
   * 
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @remarks
   * The custom label value.
   * 
   * @example
   * 123xxxxxxxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

