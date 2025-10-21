// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWordGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of keyword strategy IDs.
   */
  groupIdListShrink?: string;
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
      groupIdListShrink: 'GroupIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdListShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

