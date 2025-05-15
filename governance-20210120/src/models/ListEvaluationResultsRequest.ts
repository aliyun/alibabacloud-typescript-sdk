// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationResultsRequestFilters } from "./ListEvaluationResultsRequestFilters";


export class ListEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: ListEvaluationResultsRequestFilters[];
  lensCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  scope?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      filters: 'Filters',
      lensCode: 'LensCode',
      regionId: 'RegionId',
      scope: 'Scope',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      filters: { 'type': 'array', 'itemType': ListEvaluationResultsRequestFilters },
      lensCode: 'string',
      regionId: 'string',
      scope: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

