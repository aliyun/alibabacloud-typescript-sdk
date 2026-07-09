// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResourceRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accessed accounts. An empty value indicates that all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
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
   * The ID of the cost center.
   * 
   * @example
   * 123456
   */
  costCenterId?: number;
  /**
   * @remarks
   * The list of enterprises and accounts. An empty value indicates querying the current account.
   */
  ecIdAccountIds?: QueryCostCenterResourceRequestEcIdAccountIds[];
  /**
   * @remarks
   * The maximum number of records per query.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The first-level marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The token for the next query. An empty NextToken indicates that there are no more results.
   * 
   * @example
   * CAESEgoQCg4KCmd
   */
  nextToken?: string;
  /**
   * @remarks
   * The owner user ID of the cost center.
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

