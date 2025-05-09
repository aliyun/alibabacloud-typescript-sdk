// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOpsItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of O\\&M items.
   */
  opsItemIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItemIds: 'OpsItemIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItemIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.opsItemIds)) {
      $dara.Model.validateArray(this.opsItemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

