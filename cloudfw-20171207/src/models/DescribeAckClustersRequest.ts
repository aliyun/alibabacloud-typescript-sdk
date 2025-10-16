// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClustersRequest extends $dara.Model {
  /**
   * @example
   * cb0f5640b1b2d404cad6ba21509d7847b
   */
  clusterId?: string;
  /**
   * @example
   * ack-cluster-name
   */
  clusterName?: string;
  /**
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @example
   * ready
   */
  connectorStatus?: string;
  /**
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      connectorStatus: 'ConnectorStatus',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      connectorStatus: 'string',
      memberUid: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

