// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSharedStoragesResponseBodySharedStoragesMountInfo extends $dara.Model {
  /**
   * @remarks
   * The local mount directory of the attached file system.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  /**
   * @remarks
   * The mount options for the attached file system. Valid values:
   * 
   * *   \\-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * *   \\-t nfs -o vers=4.0,noresvport
   * 
   * @example
   * -t nfs -o vers=4.0,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * The mount target of the attached file system.
   * 
   * @example
   * 0bd504b***-ngq26.cn-hangzhou.nas.aliyuncs.com
   */
  mountTarget?: string;
  /**
   * @remarks
   * The protocol used by the mount target of the attached file system. Valid values:
   * 
   * *   nfs3
   * *   nfs4
   * *   cpfs
   * 
   * @example
   * nfs3
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage directory of the attached file system.
   * 
   * @example
   * /testehpc
   */
  storageDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTarget: 'MountTarget',
      protocolType: 'ProtocolType',
      storageDirectory: 'StorageDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTarget: 'string',
      protocolType: 'string',
      storageDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListSharedStoragesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C084****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the attached shared storage.
   */
  sharedStorages?: ListSharedStoragesResponseBodySharedStorages[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sharedStorages: 'SharedStorages',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStorages },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sharedStorages)) {
      $dara.Model.validateArray(this.sharedStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

