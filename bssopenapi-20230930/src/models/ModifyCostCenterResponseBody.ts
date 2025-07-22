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

export class ModifyCostCenterResponseBody extends $dara.Model {
  costCenterOperateDto?: ModifyCostCenterResponseBodyCostCenterOperateDto[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterOperateDto: 'CostCenterOperateDto',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterOperateDto: { 'type': 'array', 'itemType': ModifyCostCenterResponseBodyCostCenterOperateDto },
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterOperateDto)) {
      $dara.Model.validateArray(this.costCenterOperateDto);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

