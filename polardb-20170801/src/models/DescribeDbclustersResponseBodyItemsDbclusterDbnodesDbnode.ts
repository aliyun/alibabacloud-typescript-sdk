// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Writer**: primary node
   * *   **Reader**: read-only node
   * *   **ColumnReader**: column store read-only node
   * *   **AI**: AI node
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * Indicates whether the hot standby feature is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * OFF
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * OFF
   */
  imciSwitch?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the serverless feature is enabled for the node.
   * 
   * *   **ON** indicates that the serverless feature is enabled.
   * *   No value is returned if the serverless feature is disabled.
   * 
   * @example
   * ON
   */
  serverless?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      hotReplicaMode: 'HotReplicaMode',
      imciSwitch: 'ImciSwitch',
      regionId: 'RegionId',
      serverless: 'Serverless',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      hotReplicaMode: 'string',
      imciSwitch: 'string',
      regionId: 'string',
      serverless: 'string',
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

