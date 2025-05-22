// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpListRequest extends $dara.Model {
  /**
   * @remarks
   * destination aliyun uid
   * 
   * @example
   * ****
   */
  destAliyunUid?: string;
  /**
   * @remarks
   * VPCNAT destination main VSW
   * 
   * @example
   * ****
   */
  destPrimaryVswId?: string;
  /**
   * @remarks
   * destination role name
   * 
   * @example
   * ram-for-dts-sq
   */
  destRoleName?: string;
  /**
   * @remarks
   * VPCNAT destination backup VSW
   * 
   * @example
   * ****
   */
  destSecondaryVswId?: string;
  /**
   * @remarks
   * source vpc id
   * 
   * @example
   * ****
   */
  destVpcId?: string;
  /**
   * @remarks
   * The region ID to which the target instance belongs, please refer to the supported region list for details.
   * >>If the target instance is a self built database or third-party cloud database with a public IP address, you can pass in the cn Hangzhou or the region ID closest to the physical distance of the database.
   *  - When the DTS task is migration or synchronization, this parameter must be passed in.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The region ID of the change tracking instance. The region ID is the same as that of the source instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek26mat2ldb4oy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * source aliyun uid
   * 
   * @example
   * 1971721963139419
   */
  srcAliyunUid?: string;
  /**
   * @remarks
   * VPCNAT source end main VSW
   * 
   * @example
   * ****
   */
  srcPrimaryVswId?: string;
  /**
   * @remarks
   * source role Name
   * 
   * @example
   * ram-for-dts
   */
  srcRoleName?: string;
  /**
   * @remarks
   * VPCNAT source backup VSW
   * 
   * @example
   * ****
   */
  srcSecondaryVswId?: string;
  /**
   * @remarks
   * source vpc id
   * 
   * @example
   * ****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The access method for self built databases or third-party cloud databases, with a value of
   *  - Internet: accessed through the public network.
   *  - VPC: Connected through dedicated line/VPN gateway/intelligent gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
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

