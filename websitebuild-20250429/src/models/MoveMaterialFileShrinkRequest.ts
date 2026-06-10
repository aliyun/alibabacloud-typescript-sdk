// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveMaterialFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Folder ID
   * 
   * This parameter is required.
   * 
   * @example
   * 68157a0a-769a-4364-bbdc-a0e2cf3d5ad
   */
  directoryId?: string;
  /**
   * @remarks
   * List of file IDs
   * 
   * This parameter is required.
   */
  fileIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      directoryId: 'DirectoryId',
      fileIdsShrink: 'FileIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      directoryId: 'string',
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

