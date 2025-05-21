// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances } from "./DescribeDbclusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances";


export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The metric of the resource group.
   * 
   * @example
   * AnalyticDB_RP_CPU
   */
  key?: string;
  /**
   * @remarks
   * The queried monitoring information about the resource groups.
   */
  resourcePoolPerformances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances[];
  /**
   * @remarks
   * The unit of the metric value.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      resourcePoolPerformances: 'ResourcePoolPerformances',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      resourcePoolPerformances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePoolPerformances)) {
      $dara.Model.validateArray(this.resourcePoolPerformances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

