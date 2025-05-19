// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics } from "./ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics";


export class ListDatasourceFeatureViewsResponseBodyFeatureViews extends $dara.Model {
  /**
   * @example
   * {"shard_count":5,"replication_count":1}
   */
  config?: string;
  /**
   * @example
   * user
   */
  featureEntityName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * fv1
   */
  name?: string;
  /**
   * @example
   * p1
   */
  projectName?: string;
  /**
   * @example
   * 86400
   */
  TTL?: number;
  /**
   * @example
   * Batch
   */
  type?: string;
  usageStatistics?: ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityName: 'FeatureEntityName',
      featureViewId: 'FeatureViewId',
      name: 'Name',
      projectName: 'ProjectName',
      TTL: 'TTL',
      type: 'Type',
      usageStatistics: 'UsageStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityName: 'string',
      featureViewId: 'string',
      name: 'string',
      projectName: 'string',
      TTL: 'number',
      type: 'string',
      usageStatistics: ListDatasourceFeatureViewsResponseBodyFeatureViewsUsageStatistics,
    };
  }

  validate() {
    if(this.usageStatistics && typeof (this.usageStatistics as any).validate === 'function') {
      (this.usageStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

