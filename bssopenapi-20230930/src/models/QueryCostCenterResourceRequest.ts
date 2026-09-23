// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResourceRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of account IDs to access. If this parameter is empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The ID of the enterprise entity.
   * 
   * This parameter is required.
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

export class QueryCostCenterResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the financial unit.
   * 
   * @example
   * 123456
   */
  costCenterId?: number;
  /**
   * @remarks
   * The list of enterprises and accounts. If this parameter is empty, the current account is queried.
   */
  ecIdAccountIds?: QueryCostCenterResourceRequestEcIdAccountIds[];
  /**
   * @remarks
   * The maximum number of records to return in a single query.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the primary marketplace. If this parameter is empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The token for the next query. If this parameter is empty, no more results exist.
   * 
   * @example
   * CAESEgoQCg4KCmd
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the owner of the financial unit.
   * 
   * @example
   * 1234567812345678
   */
  ownerAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      ecIdAccountIds: 'EcIdAccountIds',
      maxResults: 'MaxResults',
      nbid: 'Nbid',
      nextToken: 'NextToken',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': QueryCostCenterResourceRequestEcIdAccountIds },
      maxResults: 'number',
      nbid: 'string',
      nextToken: 'string',
      ownerAccountId: 'number',
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

