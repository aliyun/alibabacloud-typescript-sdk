// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the configuration groups that you want to delete.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-shanghai`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

