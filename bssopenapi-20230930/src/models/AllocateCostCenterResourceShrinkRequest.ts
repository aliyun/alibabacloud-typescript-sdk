// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostCenterResourceShrinkRequest extends $dara.Model {
  /**
   * @example
   * 637180
   */
  fromCostCenterId?: number;
  /**
   * @example
   * 1529600453335198
   */
  fromOwnerAccountId?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceInstanceListShrink?: string;
  /**
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

