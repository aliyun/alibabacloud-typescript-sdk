// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountPayRelationRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * List of Alibaba Cloud accounts for delegated payment.
   * 
   * This parameter is required.
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

export class CreateFundAccountPayRelationRequest extends $dara.Model {
  /**
   * @remarks
   * List of enterprises and accounts.
   * 
   * This parameter is required.
   */
  ecIdAccountIds?: CreateFundAccountPayRelationRequestEcIdAccountIds[];
  /**
   * @remarks
   * Fund account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @remarks
   * Primary marketplace ID. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIds: 'EcIdAccountIds',
      fundAccountId: 'FundAccountId',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIds: { 'type': 'array', 'itemType': CreateFundAccountPayRelationRequestEcIdAccountIds },
      fundAccountId: 'string',
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

