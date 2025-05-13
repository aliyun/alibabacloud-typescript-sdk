// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEcsInstancesResponseBodyResultCollectorsConfigs } from "./ListEcsInstancesResponseBodyResultCollectorsConfigs";
import { ListEcsInstancesResponseBodyResultCollectorsExtendConfigs } from "./ListEcsInstancesResponseBodyResultCollectorsExtendConfigs";


export class ListEcsInstancesResponseBodyResultCollectors extends $dara.Model {
  collectorPaths?: string[];
  /**
   * @remarks
   * The content of the file.
   */
  configs?: ListEcsInstancesResponseBodyResultCollectorsConfigs[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Whether Monitoring is enabled. This field is displayed when the **configType** is **collectorTargetInstance** and the **instanceType** is **Elasticsearch**. Valid values:
   * 
   * *   true
   * *   false
   */
  extendConfigs?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigs[];
  /**
   * @remarks
   * The status of the collector. Valid values:
   * 
   * *   activating: The project is taking effect.
   * *   active: The instance has taken effect.
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * Specifies whether to verify and create a crawer. Valid values:
   * 
   * *   true: only verifies and does not create a
   * *   false: verifies and creates a
   * 
   * @example
   * 2020-06-20T07:26:47.000+0000
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The configuration file information of the collector.
   * 
   * @example
   * ct-testAbc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud to which the collector belongs.
   * 
   * @example
   * 16852***488*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The time when the collector was updated.
   * 
   * @example
   * ct-cn-0v3xj86085dvq****
   */
  resId?: string;
  /**
   * @remarks
   * The version of the collector. If the machine type of the collector is ECS, only **6.8.5_with_community** is supported.
   * 
   * @example
   * fileBeat
   */
  resType?: string;
  /**
   * @remarks
   * The time when the crawl collector was created.
   * 
   * @example
   * 6.8.5_with_community
   */
  resVersion?: string;
  /**
   * @remarks
   * The name of the collector.
   * 
   * @example
   * activing
   */
  status?: string;
  /**
   * @remarks
   * The type of the collector. FileBeat, metricBeat, heartBeat, and auditBeat are supported.
   * 
   * @example
   * vpc-bp16k1dvzxtm******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.collectorPaths)) {
      $dara.Model.validateArray(this.collectorPaths);
    }
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

