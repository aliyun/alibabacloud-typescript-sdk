// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSharedStoragesResponseBodySharedStoragesMountInfo } from "./ListSharedStoragesResponseBodySharedStoragesMountInfo";


export class ListSharedStoragesResponseBodySharedStorages extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached file system.
   * 
   * @example
   * 08c7f4b***
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The protocol used by the attached file system. Valid values:
   * 
   * *   nfs3
   * *   nfs4
   * *   cpfs
   * 
   * @example
   * nfs4
   */
  fileSystemProtocol?: string;
  /**
   * @remarks
   * The type of the attached file system. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * @example
   * nas
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The mount information.
   */
  mountInfo?: ListSharedStoragesResponseBodySharedStoragesMountInfo[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemProtocol: 'FileSystemProtocol',
      fileSystemType: 'FileSystemType',
      mountInfo: 'MountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemProtocol: 'string',
      fileSystemType: 'string',
      mountInfo: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStoragesMountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.mountInfo)) {
      $dara.Model.validateArray(this.mountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

