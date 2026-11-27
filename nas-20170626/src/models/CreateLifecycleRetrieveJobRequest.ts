// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The list of paths of the directories or files to retrieve. You can specify up to 10 paths.
   * 
   * This parameter is required.
   * 
   * @example
   * Paths.1=/pathway/doc1,Paths.2=/pathway/doc2
   */
  paths?: string[];
  /**
   * @remarks
   * The tiered storage type. Valid values:
   * - InfrequentAccess (default): IA storage class.
   * - Archive: Archive storage.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      paths: 'Paths',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      storageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

