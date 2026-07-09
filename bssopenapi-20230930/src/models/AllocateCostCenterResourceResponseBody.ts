// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostCenterResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cost center ID.
   * 
   * @example
   * 640403
   */
  costCenterId?: number;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
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
   * The owner of the cost center.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * UUID
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

