// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostCenterRequestCostCenterEntityList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  costCenterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  parentCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterName: 'CostCenterName',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterName: 'string',
      ownerAccountId: 'number',
      parentCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

