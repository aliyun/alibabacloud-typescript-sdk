// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostCenterResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 640403
   */
  costCenterId?: number;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  /**
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

