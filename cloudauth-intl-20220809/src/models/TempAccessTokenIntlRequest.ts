// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempAccessTokenIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Type.
   * 
   * @example
   * none
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

