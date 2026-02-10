// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultimodalLabelStudioServiceWhiteListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  whiteListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      whiteListShrink: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      whiteListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

