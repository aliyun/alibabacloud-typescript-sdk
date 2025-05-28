// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResponseBodyCostCenterDtoList extends $dara.Model {
  /**
   * @example
   * 15945703968#
   */
  costCenterCode?: string;
  /**
   * @example
   * 485938
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * loose
   */
  level?: number;
  /**
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @example
   * -1
   */
  parentCostCenterId?: number;
  /**
   * @example
   * 485996
   */
  prevCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'CostCenterCode',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      level: 'Level',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
      prevCostCenterId: 'PrevCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterCode: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      level: 'number',
      ownerAccountId: 'number',
      parentCostCenterId: 'number',
      prevCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

