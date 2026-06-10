// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportMaterialFileRequest extends $dara.Model {
  /**
   * @remarks
   * Business instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * List of file IDs
   * 
   * This parameter is required.
   */
  fileIds?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileIds: 'FileIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
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

