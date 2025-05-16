// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachSharedStoragesRequestSharedStorages extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system to be attached.
   * 
   * This parameter is required.
   * 
   * @example
   * 0bd504b0**
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The storage location of the file system to be attached. Valid values:
   * 
   * *   OnPremise: The file system is deployed on a hybrid cloud.
   * *   PublicCloud: The file system is deployed on a public cloud.
   * 
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * The local mount directory of the file system that you want to attach.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  /**
   * @remarks
   * The attaching options of the file system to be attached. Valid values:
   * 
   * *   \\-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * *   \\-t nfs -o vers=4.0,noresvport
   * 
   * Default value:-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * 
   * >  The v3 version is recommended for higher performance if multiple Elastic Compute Service (ECS) instances do not edit the same file at the same time.
   * 
   * @example
   * -t nfs -o vers=3,nolock,proto=tcp,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * The address of the mount point of the file system to be attached.
   * 
   * This parameter is required.
   * 
   * @example
   * 0bd504b***-ngq26.cn-hangzhou.nas.aliyuncs.com
   */
  mountTarget?: string;
  /**
   * @remarks
   * The protocol type of the file system to be attached. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage directory of the file system. You can mount any directory in the file system to the specified cluster directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /testehpc
   */
  storageDirectory?: string;
  /**
   * @remarks
   * The type of the file system to be attached. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * This parameter is required.
   * 
   * @example
   * nas
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      location: 'Location',
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTarget: 'MountTarget',
      protocolType: 'ProtocolType',
      storageDirectory: 'StorageDirectory',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      location: 'string',
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTarget: 'string',
      protocolType: 'string',
      storageDirectory: 'string',
      volumeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

