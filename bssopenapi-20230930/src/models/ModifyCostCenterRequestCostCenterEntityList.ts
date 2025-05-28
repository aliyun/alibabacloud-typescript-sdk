// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostCenterRequestCostCenterEntityList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
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
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      ownerAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

