// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 2135342
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the cost center. A value of -1 indicates the root cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 376348
   */
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

