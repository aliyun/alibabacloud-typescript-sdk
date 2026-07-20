// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardRelateDeleteRequestRemoveList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 667104628
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardRelateDeleteRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  fromGroup?: boolean;
  removeList?: TravelStandardRelateDeleteRequestRemoveList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6523763
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      removeList: 'remove_list',
      ruleId: 'rule_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      removeList: { 'type': 'array', 'itemType': TravelStandardRelateDeleteRequestRemoveList },
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.removeList)) {
      $dara.Model.validateArray(this.removeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

