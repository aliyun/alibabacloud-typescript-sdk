// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostCenterResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source cost center. This parameter is required.
   * 
   * - 0 indicates that the cost center is unallocated.
   * - A value greater than 0 indicates an allocated cost center ID.
   * 
   * @example
   * 637180
   */
  fromCostCenterId?: number;
  /**
   * @remarks
   * The ID of the owner of the source cost center.
   * 
   * @example
   * 1529600453335198
   */
  fromOwnerAccountId?: number;
  /**
   * @remarks
   * The primary sales channel ID. If this parameter is left empty, the sales channel ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The list of resource instances.
   * 
   * This parameter is required.
   */
  resourceInstanceListShrink?: string;
  /**
   * @remarks
   * The ID of the destination cost center. Valid values:
   * 
   * - -1: moves the allocated resource to the unallocated state.
   * - A value greater than 0: allocates the resource to the specified cost center.
   * 
   * @example
   * 638288
   */
  toCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      fromCostCenterId: 'FromCostCenterId',
      fromOwnerAccountId: 'FromOwnerAccountId',
      nbid: 'Nbid',
      resourceInstanceListShrink: 'ResourceInstanceList',
      toCostCenterId: 'ToCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromCostCenterId: 'number',
      fromOwnerAccountId: 'number',
      nbid: 'string',
      resourceInstanceListShrink: 'string',
      toCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

