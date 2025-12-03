// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVscMountPointAliasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdfe
   */
  aliasPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 037****e1d
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 037cb49e1d-c***5
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

