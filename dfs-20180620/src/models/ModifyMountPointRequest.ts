// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMountPointRequest extends $dara.Model {
  /**
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
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
   */
  mountPointId?: string;
  /**
   * @example
   * Inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

