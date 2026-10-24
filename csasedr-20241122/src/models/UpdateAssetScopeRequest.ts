// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssetScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The asset scope ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1932
   */
  id?: number;
  /**
   * @remarks
   * The effective scope mode. Valid values:
   * 
   * - **UserGroupAll**: All user groups.
   * - **UserGroupNormal**: Specified user groups.
   * - **DeviceGroupNormal**: Specified device groups.
   * - **DevTagNormal**: Specified device tags.
   * 
   * This field determines the meaning of MatchTargetIds.
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The IDs of the user groups, device tags, or tag groups.
   */
  matchTargetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      matchMode: 'MatchMode',
      matchTargetIds: 'MatchTargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      matchMode: 'string',
      matchTargetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.matchTargetIds)) {
      $dara.Model.validateArray(this.matchTargetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

