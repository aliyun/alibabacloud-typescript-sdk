// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The list of directories or file paths to retrieve. You can specify up to 10 paths.
   * 
   * This parameter is required.
   * 
   * @example
   * Paths.1=/pathway/doc1,Paths.2=/pathway/doc2
   */
  paths?: string[];
  /**
   * @remarks
   * The storage class. Valid values:
   * - InfrequentAccess (default): IA storage class.
   * - Archive: Archive storage class.
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

