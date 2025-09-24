// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostUnitRequestUnitEntityList extends $dara.Model {
  /**
   * @remarks
   * The user ID of the owner of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 982375623
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cost centers.
   */
  unitEntityList?: CreateCostUnitRequestUnitEntityList[];
  static names(): { [key: string]: string } {
    return {
      unitEntityList: 'UnitEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitEntityList: { 'type': 'array', 'itemType': CreateCostUnitRequestUnitEntityList },
    };
  }

  validate() {
    if(Array.isArray(this.unitEntityList)) {
      $dara.Model.validateArray(this.unitEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

