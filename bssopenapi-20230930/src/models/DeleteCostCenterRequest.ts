// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostCenterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
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
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      nbid: 'string',
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

