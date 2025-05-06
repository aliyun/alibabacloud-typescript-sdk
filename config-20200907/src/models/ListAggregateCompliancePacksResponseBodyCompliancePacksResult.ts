// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks } from "./ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks";


export class ListAggregateCompliancePacksResponseBodyCompliancePacksResult extends $dara.Model {
  /**
   * @remarks
   * The compliance packages.
   */
  compliancePacks?: ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of compliance packages returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compliancePacks)) {
      $dara.Model.validateArray(this.compliancePacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

