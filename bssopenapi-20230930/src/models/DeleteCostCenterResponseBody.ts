// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostCenterResponseBody extends $dara.Model {
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
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @example
   * C1BD134E-D914-6AE0-1901-AEB2A99FA205
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      isSuccess: 'IsSuccess',
      metadata: 'Metadata',
      ownerAccountId: 'OwnerAccountId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      isSuccess: 'boolean',
      metadata: 'any',
      ownerAccountId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

