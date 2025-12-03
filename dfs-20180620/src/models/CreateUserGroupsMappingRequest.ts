// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupsMappingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  fileSystemId?: string;
  /**
   * @example
   * ["group1","group2"]
   */
  groupNames?: string[];
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
   * user1
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      groupNames: 'GroupNames',
      inputRegionId: 'InputRegionId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      groupNames: { 'type': 'array', 'itemType': 'string' },
      inputRegionId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupNames)) {
      $dara.Model.validateArray(this.groupNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

