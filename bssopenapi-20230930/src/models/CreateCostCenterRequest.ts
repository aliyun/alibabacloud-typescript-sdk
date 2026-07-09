// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostCenterRequestCostCenterEntityList extends $dara.Model {
  /**
   * @remarks
   * Cost center name (must be unique within the same account)
   * 
   * This parameter is required.
   * 
   * @example
   * 资源组
   */
  costCenterName?: string;
  /**
   * @remarks
   * Owner user ID of the new cost center
   * 
   * This parameter is required.
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * Parent cost center ID. A value of -1 indicates the root cost center.
   * 
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

export class CreateCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * Cost center entity list
   * 
   * This parameter is required.
   */
  costCenterEntityList?: CreateCostCenterRequestCostCenterEntityList[];
  /**
   * @remarks
   * Primary marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2084210001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterEntityList: 'CostCenterEntityList',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterEntityList: { 'type': 'array', 'itemType': CreateCostCenterRequestCostCenterEntityList },
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterEntityList)) {
      $dara.Model.validateArray(this.costCenterEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

