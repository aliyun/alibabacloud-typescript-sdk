// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaterialDirectoryRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

