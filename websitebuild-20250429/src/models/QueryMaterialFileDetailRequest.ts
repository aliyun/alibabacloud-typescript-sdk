// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMaterialFileDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WD20250814102215000001
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
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

