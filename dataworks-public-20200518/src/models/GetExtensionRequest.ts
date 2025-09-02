// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExtensionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique code of the extension.
   * 
   * This parameter is required.
   * 
   * @example
   * ce4*********086da5
   */
  extensionCode?: string;
  static names(): { [key: string]: string } {
    return {
      extensionCode: 'ExtensionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

