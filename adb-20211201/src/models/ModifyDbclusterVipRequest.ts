// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterVipRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * @example
   * amv-2ze8mbuai974s4y2500000169.ads.aliyuncs.com
   */
  connectString?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2ze8mbuai97*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > 
   * 
   * *   The new **VPC** must reside in the same region as the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > 
   * 
   * *   The new vSwitch must reside in the same zone as the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      DBClusterId: 'DBClusterId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      DBClusterId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

