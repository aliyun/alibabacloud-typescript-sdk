// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCpfsAccessPointRequestRootDirectory extends $dara.Model {
  /**
   * @remarks
   * The root directory of the access point. The value must start and end with a forward slash (/).
   * 
   * @example
   * /test/
   */
  rootPath?: string;
  static names(): { [key: string]: string } {
    return {
      rootPath: 'RootPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCpfsAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the access point.
   * 
   * Limits:
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter.It cannot start with http:// or https://.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The root directory of the access point. Default value: "/".
   */
  rootDirectory?: CreateCpfsAccessPointRequestRootDirectory;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
      rootDirectory: 'RootDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      regionId: 'string',
      rootDirectory: CreateCpfsAccessPointRequestRootDirectory,
    };
  }

  validate() {
    if(this.rootDirectory && typeof (this.rootDirectory as any).validate === 'function') {
      (this.rootDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

