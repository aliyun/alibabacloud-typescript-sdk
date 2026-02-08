// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterialFileStatusRequest extends $dara.Model {
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
  fileIds?: string[];
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
      fileIds: 'FileIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

