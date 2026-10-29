// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableActiveMetricRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value of this parameter on the client side. Make sure that the value is unique across different requests. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 00000-xxxx-xxxxx--xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the availability of the webhook.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the Alibaba Cloud service that supports one-click alert rules. Valid values:
   * 
   * * ecs: Elastic Compute Service (ECS).
   * * rds: ApsaraDB RDS.
   * * slb: Server Load Balancer (SLB).
   * * redis_standard: Standard architecture of open-source Redis.
   * * redis_sharding: Cluster architecture of open-source Redis.
   * * redis_splitrw: Read/write splitting architecture of open-source Redis.
   * * mongodb: ApsaraDB for MongoDB (replica set).
   * * mongodb_sharding: ApsaraDB for MongoDB (sharded cluster).
   * * hbase: ApsaraDB for HBase.
   * * elasticsearch: Elasticsearch.
   * * opensearch: OpenSearch.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

