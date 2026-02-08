// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterialFileRequest extends $dara.Model {
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
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileId: 'FileId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

