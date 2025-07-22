// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResourceRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
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
   * @example
   * 123456
   */
  costCenterId?: number;
  ecIdAccountIds?: QueryCostCenterResourceRequestEcIdAccountIds[];
  /**
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * CAESEgoQCg4KCmd
   */
  nextToken?: string;
  /**
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

