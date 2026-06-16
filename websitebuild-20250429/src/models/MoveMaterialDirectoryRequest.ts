// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveMaterialDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The application instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * The parent folder ID after the move.
   * 
   * This parameter is required.
   * 
   * @example
   * 58157a0a-769a-4364-bbdc-a0e2cf3d5a2
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The sort number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sortNum?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      parentDirectoryId: 'ParentDirectoryId',
      sortNum: 'SortNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
      parentDirectoryId: 'string',
      sortNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

