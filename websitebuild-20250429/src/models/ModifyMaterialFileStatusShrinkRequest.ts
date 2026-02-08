// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterialFileStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS12345678
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileIdsShrink: 'FileIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileIdsShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

