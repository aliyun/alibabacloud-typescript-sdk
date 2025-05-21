// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries } from "./DescribeDbclusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries";


export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_pool
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The sequential monitoring information about the resource groups.
   */
  resourcePoolSeries?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries[];
  static names(): { [key: string]: string } {
    return {
      resourcePoolName: 'ResourcePoolName',
      resourcePoolSeries: 'ResourcePoolSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePoolName: 'string',
      resourcePoolSeries: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePoolSeries)) {
      $dara.Model.validateArray(this.resourcePoolSeries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

