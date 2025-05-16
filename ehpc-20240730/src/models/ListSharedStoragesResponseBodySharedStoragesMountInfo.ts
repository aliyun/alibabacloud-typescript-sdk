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

