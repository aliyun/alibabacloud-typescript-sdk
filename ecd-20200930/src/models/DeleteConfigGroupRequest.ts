// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of configuration group IDs to delete.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The region ID. This operation is not region-specific. Set this parameter to `cn-shanghai`.
   * 
   * @example
   * cn-shanghai
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

