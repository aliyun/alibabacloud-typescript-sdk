// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFundAccountPayRelationRequestEcIdAccountIds } from "./CreateFundAccountPayRelationRequestEcIdAccountIds";


export class CreateFundAccountPayRelationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ecIdAccountIds?: CreateFundAccountPayRelationRequestEcIdAccountIds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
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

