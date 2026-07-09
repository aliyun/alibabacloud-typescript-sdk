// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostCenterResponseBodyCostCenterDtoList extends $dara.Model {
  /**
   * @remarks
   * Cost center ID
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @remarks
   * Cost center name (must be unique within the same account)
   * 
   * @example
   * 资源组
   */
  costCenterName?: string;
  /**
   * @remarks
   * Owner user ID of the cost center
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * Parent cost center ID
   * 
   * @example
   * -1
   */
  parentCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      ownerAccountId: 'OwnerAccountId',
      parentCostCenterId: 'ParentCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
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

export class CreateCostCenterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data list
   */
  costCenterDtoList?: CreateCostCenterResponseBodyCostCenterDtoList[];
  /**
   * @remarks
   * Response metadata
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C1BD134E-D914-6AE0-1901-AEB2A99FA205
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterDtoList: 'CostCenterDtoList',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterDtoList: { 'type': 'array', 'itemType': CreateCostCenterResponseBodyCostCenterDtoList },
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterDtoList)) {
      $dara.Model.validateArray(this.costCenterDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

