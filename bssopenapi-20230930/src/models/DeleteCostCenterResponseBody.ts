// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostCenterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cost center ID.
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The metadata of the response struct.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The ID of the user who owns the cost center.
   * 
   * @example
   * 1314839403940987
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The request ID.
   * 
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

