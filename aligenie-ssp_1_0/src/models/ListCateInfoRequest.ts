// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCateInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Default value is song (the extension field currently only supports song)
   * 
   * This parameter is required.
   * 
   * @example
   * song
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

