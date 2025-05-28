// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostCenterResponseBodyCostCenterOperateDto extends $dara.Model {
  /**
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      isSuccess: 'IsSuccess',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      isSuccess: 'boolean',
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

