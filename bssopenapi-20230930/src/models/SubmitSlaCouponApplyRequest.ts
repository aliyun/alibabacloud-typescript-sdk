// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSlaCouponApplyRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is left empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
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
   * The IDs of the damaged records. This parameter is optional.
   */
  damagedIds?: string[];
  /**
   * @remarks
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIds?: SubmitSlaCouponApplyRequestEcIdAccountIds[];
  /**
   * @remarks
   * The claim month. This parameter is required. Format: yyyyMM.
   * 
   * This parameter is required.
   * 
   * @example
   * 202603
   */
  month?: number;
  /**
   * @remarks
   * The primary marketplace ID. If this parameter is left empty, the marketplace ID of the current user is used by default.
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

