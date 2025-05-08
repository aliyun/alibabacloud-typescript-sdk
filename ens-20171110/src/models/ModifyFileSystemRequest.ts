// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * fileSystemTest
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * c50f8*****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ensRegionId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

