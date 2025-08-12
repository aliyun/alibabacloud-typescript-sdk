// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableActiveMetricRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service for which you want to disable proactive alerting. Valid values:
   * 
   * *   ECS: Elastic Compute Service (ECS)
   * *   rds: ApsaraDB RDS
   * *   slb: Server Load Balancer (SLB)
   * *   redis_standard: Redis Open-Source Edition (standard architecture)
   * *   redis_sharding: Redis Open-Source Edition (cluster architecture)
   * *   redis_splitrw: Redis Open-Source Edition (read/write splitting architecture)
   * *   mongodb: ApsaraDB for MongoDB of the replica set architecture
   * *   mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
   * *   hbase: ApsaraDB for HBase
   * *   elasticsearch: Elasticsearch
   * *   opensearch: OpenSearch
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

