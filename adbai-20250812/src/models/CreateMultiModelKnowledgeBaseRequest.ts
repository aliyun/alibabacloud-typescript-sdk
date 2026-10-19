// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiModelKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * None
   */
  adbInstanceName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of ACUs for the AnalyticDB for MySQL instance resources.
   * 
   * @example
   * 24
   */
  dbClusterAcu?: number;
  /**
   * @remarks
   * The description of the multimodal knowledge base instance.
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * None
   */
  lakeStorageBucketName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the DescribeRegions operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum number of ACUs for the multimodal knowledge base resources.
   * 
   * @example
   * 128
   */
  resourceAcuMax?: number;
  /**
   * @remarks
   * The minimum number of ACUs for the multimodal knowledge base resources.
   * 
   * @example
   * 32
   */
  resourceAcuMin?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1ak7shaq72ywiah****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf66oesmrqge1t2gs****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone to which the instance belongs.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adbInstanceName: 'AdbInstanceName',
      DBClusterId: 'DBClusterId',
      dbClusterAcu: 'DbClusterAcu',
      description: 'Description',
      lakeStorageBucketName: 'LakeStorageBucketName',
      regionId: 'RegionId',
      resourceAcuMax: 'ResourceAcuMax',
      resourceAcuMin: 'ResourceAcuMin',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbInstanceName: 'string',
      DBClusterId: 'string',
      dbClusterAcu: 'number',
      description: 'string',
      lakeStorageBucketName: 'string',
      regionId: 'string',
      resourceAcuMax: 'number',
      resourceAcuMin: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

