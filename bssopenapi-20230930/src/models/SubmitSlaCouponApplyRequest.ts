// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSlaCouponApplyRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * List of accounts to access. If empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * Enterprise entity ID.
   * 
   * @example
   * 1501603440974415
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSlaCouponApplyRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Damaged record IDs.
   */
  damagedIds?: string[];
  /**
   * @remarks
   * Enterprise and account list. If empty, the current account itself is queried.
   */
  ecIdAccountIds?: SubmitSlaCouponApplyRequestEcIdAccountIds[];
  /**
   * @remarks
   * Required. Application month in the yyyyMM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 202603
   */
  month?: number;
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
      damagedIds: 'DamagedIds',
      ecIdAccountIds: 'EcIdAccountIds',
      month: 'Month',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      damagedIds: { 'type': 'array', 'itemType': 'string' },
      ecIdAccountIds: { 'type': 'array', 'itemType': SubmitSlaCouponApplyRequestEcIdAccountIds },
      month: 'number',
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.damagedIds)) {
      $dara.Model.validateArray(this.damagedIds);
    }
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

