// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiModelKnowledgeBaseRequest extends $dara.Model {
  adbInstanceName?: string;
  /**
   * @remarks
   * The instance cluster ID.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  dbClusterAcu?: number;
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
  resourceAcuMax?: number;
  resourceAcuMin?: number;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      adbInstanceName: 'AdbInstanceName',
      DBClusterId: 'DBClusterId',
      dbClusterAcu: 'DbClusterAcu',
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

