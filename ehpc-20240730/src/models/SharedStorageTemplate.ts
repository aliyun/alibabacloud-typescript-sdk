// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SharedStorageTemplate extends $dara.Model {
  /**
   * @example
   * 008b63****
   */
  fileSystemId?: string;
  /**
   * @example
   * /home
   */
  mountDirectory?: string;
  /**
   * @example
   * -t nfs -o vers=3,nolock,noresvport
   */
  mountOptions?: string;
  /**
   * @example
   * 008b****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @example
   * /
   */
  NASDirectory?: string;
  /**
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

