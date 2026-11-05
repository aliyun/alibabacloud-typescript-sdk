// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVscMountPointAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The mount point alias.
   * 
   * This parameter is required.
   * 
   * @example
   * sdfe
   */
  aliasPrefix?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e389e5c7-bcb4-4558-846a-e5afc444****
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
  inputRegionId?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-037cb49e1d-c****.dfs.aliyuncs.com
   */
  mountPointId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasPrefix: 'AliasPrefix',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasPrefix: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

