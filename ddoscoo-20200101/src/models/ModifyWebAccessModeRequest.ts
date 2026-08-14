// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessMode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'number',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

