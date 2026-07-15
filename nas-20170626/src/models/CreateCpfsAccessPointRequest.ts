// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCpfsAccessPointRequestRootDirectory extends $dara.Model {
  /**
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
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

