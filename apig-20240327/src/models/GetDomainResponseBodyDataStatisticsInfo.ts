// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceStatistic } from "./ResourceStatistic";


export class GetDomainResponseBodyDataStatisticsInfo extends $dara.Model {
  /**
   * @remarks
   * The resource statistics.
   */
  resourceStatistics?: ResourceStatistic[];
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      resourceStatistics: 'resourceStatistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceStatistics: { 'type': 'array', 'itemType': ResourceStatistic },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceStatistics)) {
      $dara.Model.validateArray(this.resourceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

