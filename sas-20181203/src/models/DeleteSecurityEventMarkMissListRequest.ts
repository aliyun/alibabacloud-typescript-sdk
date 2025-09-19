// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityEventMarkMissListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of custom defense rule.
   */
  ids?: number[];
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

