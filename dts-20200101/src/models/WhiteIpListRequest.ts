// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the destination.
   * 
   * @example
   * ****
   */
  destAliyunUid?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch for the destination VPC NAT gateway.
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
   * The ID of the secondary vSwitch for the destination VPC NAT gateway.
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
   * The region ID of the destination instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * > - If the destination instance is a self-managed database or a third-party cloud database that has a public IP address, you can specify **cn-hangzhou** or the ID of the region that is geographically closest to the database.
   * - This parameter is required when the DTS task is a data migration or data synchronization task.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The region ID of the source instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the source instance is a self-managed database or a third-party cloud database that has a public IP address, you can specify **cn-hangzhou** or the ID of the region that is geographically closest to the database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek26mat2ldb4oy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the source.
   * 
   * @example
   * 1971721963139419
   */
  srcAliyunUid?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch for the source VPC NAT gateway.
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
   * The ID of the secondary vSwitch for the source VPC NAT gateway.
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
   * The connection method of the self-managed database or third-party cloud database. Valid values:
   * - **internet**: connected over the Internet.
   * - **vpc**: connected over an Express Connect circuit, a VPN gateway, or a Smart Access Gateway (SAG).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether the task is a zero-ETL task. Valid values:
   * - **true**: yes.
   * - **false**: no.
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

