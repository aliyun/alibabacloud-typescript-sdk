// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportMaterialFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileIdsShrink: 'FileIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

