// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCostCenterResourceRequestEcIdAccountIds } from "./QueryCostCenterResourceRequestEcIdAccountIds";


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

