// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The UID of the destination Alibaba Cloud account.
   * 
   * @example
   * ****
   */
  destAliyunUid?: string;
  /**
   * @remarks
   * The primary vSwitch of the destination for VPC NAT.
   * 
   * @example
   * ****
   */
  destPrimaryVswId?: string;
  /**
   * @remarks
   * The name of the destination role.
   * 
   * @example
   * ram-for-dts-sq
   */
  destRoleName?: string;
  /**
   * @remarks
   * The secondary vSwitch of the destination for VPC NAT.
   * 
   * @example
   * ****
   */
  destSecondaryVswId?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * @example
   * ****
   */
  destVpcId?: string;
  /**
   * @remarks
   * The region ID of the destination instance. For details, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * > -  If the destination instance is a self-managed database with a public IP address or a third-party ApsaraDB database, you can set this parameter to **ap-southeast-1** or the area ID that is geographically closest to the database.
   * -  This parameter is required when the DTS task is a data migration or data synchronization task.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The region ID of the source instance. For details, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the source instance is a self-managed database with a public IP address or a third-party ApsaraDB database, you can set this parameter to **ap-southeast-1** or the area ID that is geographically closest to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region to which the DTS instance belongs. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek26mat2ldb4oy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The UID of the source Alibaba Cloud account.
   * 
   * @example
   * 1971721963139419
   */
  srcAliyunUid?: string;
  /**
   * @remarks
   * The primary vSwitch of the source for VPC NAT.
   * 
   * @example
   * ****
   */
  srcPrimaryVswId?: string;
  /**
   * @remarks
   * The name of the source role.
   * 
   * @example
   * ram-for-dts
   */
  srcRoleName?: string;
  /**
   * @remarks
   * The secondary vSwitch of the source for VPC NAT.
   * 
   * @example
   * ****
   */
  srcSecondaryVswId?: string;
  /**
   * @remarks
   * The ID of the source VPC.
   * 
   * @example
   * ****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The connection method of the self-managed database or third-party ApsaraDB database. Valid values:
   * - **internet**: connected over the Internet.
   * - **vpc**: connected over Express Connect, VPN Gateway, or Smart Access Gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * - **true**: The node is a seamless integration (Zero-ETL) node.
   * - **false**: The node is not a seamless integration (Zero-ETL) node.
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      destAliyunUid: 'DestAliyunUid',
      destPrimaryVswId: 'DestPrimaryVswId',
      destRoleName: 'DestRoleName',
      destSecondaryVswId: 'DestSecondaryVswId',
      destVpcId: 'DestVpcId',
      destinationRegion: 'DestinationRegion',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      srcAliyunUid: 'SrcAliyunUid',
      srcPrimaryVswId: 'SrcPrimaryVswId',
      srcRoleName: 'SrcRoleName',
      srcSecondaryVswId: 'SrcSecondaryVswId',
      srcVpcId: 'SrcVpcId',
      type: 'Type',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destAliyunUid: 'string',
      destPrimaryVswId: 'string',
      destRoleName: 'string',
      destSecondaryVswId: 'string',
      destVpcId: 'string',
      destinationRegion: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      srcAliyunUid: 'string',
      srcPrimaryVswId: 'string',
      srcRoleName: 'string',
      srcSecondaryVswId: 'string',
      srcVpcId: 'string',
      type: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

