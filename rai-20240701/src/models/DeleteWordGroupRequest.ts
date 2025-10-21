// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWordGroupRequest extends $dara.Model {
  /**
   * @remarks
   * List of keyword strategy IDs.
   */
  groupIdList?: number[];
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdList: 'GroupIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

