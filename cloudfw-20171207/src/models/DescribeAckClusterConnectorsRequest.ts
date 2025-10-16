// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorsRequest extends $dara.Model {
  /**
   * @example
   * 0E0C30C977463****
   */
  clusterId?: string;
  /**
   * @example
   * test
   */
  connectorName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
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
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectorName: 'ConnectorName',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectorName: 'string',
      lang: 'string',
      memberUid: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

