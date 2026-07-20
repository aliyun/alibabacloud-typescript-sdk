// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardRelateAddRequestAddList extends $dara.Model {
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

export class TravelStandardRelateAddRequest extends $dara.Model {
  addList?: TravelStandardRelateAddRequestAddList[];
  /**
   * @example
   * false
   */
  fromGroup?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6516571
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      addList: 'add_list',
      fromGroup: 'from_group',
      ruleId: 'rule_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addList: { 'type': 'array', 'itemType': TravelStandardRelateAddRequestAddList },
      fromGroup: 'boolean',
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addList)) {
      $dara.Model.validateArray(this.addList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

