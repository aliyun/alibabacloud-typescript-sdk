// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostUnitRequestUnitEntityList extends $dara.Model {
  /**
   * @remarks
   * The new name of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * newTest
   */
  newUnitName?: string;
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 1321312312
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 2524352
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      newUnitName: 'NewUnitName',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUnitName: 'string',
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The cost centers to be modified.
   */
  unitEntityList?: ModifyCostUnitRequestUnitEntityList[];
  static names(): { [key: string]: string } {
    return {
      unitEntityList: 'UnitEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitEntityList: { 'type': 'array', 'itemType': ModifyCostUnitRequestUnitEntityList },
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

