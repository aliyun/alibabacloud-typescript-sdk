// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SharedStorageTemplate extends $dara.Model {
  /**
   * @remarks
   * The ID of the mounted file system.
   * 
   * @example
   * 008b63****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The local mount directory of the attached file system.
   * 
   * @example
   * /home
   */
  mountDirectory?: string;
  /**
   * @remarks
   * The storage mount options of the mounted file system.
   * 
   * @example
   * -t nfs -o vers=3,nolock,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * The address of the mount point of the file system.
   * 
   * @example
   * 008b****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The remote mount directory of the mounted file system.
   * 
   * @example
   * /
   */
  NASDirectory?: string;
  /**
   * @remarks
   * The protocol type of the mounted file system. Valid values:
   * 
   * *   NFS
   * *   SMB
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTargetDomain: 'MountTargetDomain',
      NASDirectory: 'NASDirectory',
      protocolType: 'ProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTargetDomain: 'string',
      NASDirectory: 'string',
      protocolType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

