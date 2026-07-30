// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNASFileSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The NAS file system ID.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The NAS file system name.
   * 
   * @example
   * testNAS
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The mount target domain name.
   * 
   * @example
   * 04f314****-at***.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      mountTargetDomain: 'MountTargetDomain',
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemName: 'string',
      mountTargetDomain: 'string',
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

