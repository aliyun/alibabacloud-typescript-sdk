// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressCloudConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the Express Cloud Connection instance, which corresponds to the bandwidth of the underlying physical connection.
   * 
   * Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The email address of the contact person for the Express Cloud Connection application.
   * 
   * @example
   * XX@example.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The phone number of the contact person for the Express Cloud Connection application.
   * 
   * @example
   * 132*********
   */
  contactTel?: string;
  /**
   * @remarks
   * The description of the Express Cloud Connection instance.
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character, but cannot start with `http://` or `https://`.
   * 
   * @example
   * 高速上云服务
   */
  description?: string;
  /**
   * @remarks
   * The ID card number of the contact person for the Express Cloud Connection application.
   * 
   * @example
   * 32*****************
   */
  IDCardNo?: string;
  /**
   * @remarks
   * The network service provider of the IDC.
   * 
   * This parameter is required.
   * 
   * @example
   * CU
   */
  idcSP?: string;
  /**
   * @remarks
   * The name of the Express Cloud Connection instance.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-), but cannot start with `http://` or `https://`.
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The city where the on-premises IDC is located.
   * 
   * @example
   * 杭州
   */
  peerCity?: string;
  /**
   * @remarks
   * The geographic location of the on-premises data center.
   * 
   * >The location must be accurate to the street number, floor, room number, and rack number.
   * 
   * This parameter is required.
   * 
   * @example
   * **市**区/县**路**号**物业或楼宇名称**座**楼层**房间号**机柜号**机柜名称**设备**端口
   */
  peerLocation?: string;
  /**
   * @remarks
   * The port type of the Express Connect circuit. Valid values:
   * 
   * * 100Base-T: 100M Ethernet port
   * 
   * * 1000Base-T (default): GE electrical port
   * 
   * * 1000Base-LX: GE single-mode optical port (10 km)
   * 
   * * 10GBase-T: 10 GE electrical port
   * 
   * * 10GBase-LR: 10 GE single-mode optical port (10 km)
   * 
   * @example
   * 100Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The instance ID of the redundant Express Cloud Connection circuit.
   * 
   * @example
   * ecc-d****
   */
  redundantEccId?: string;
  /**
   * @remarks
   * The region ID of the Express Cloud Connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      contactMail: 'ContactMail',
      contactTel: 'ContactTel',
      description: 'Description',
      IDCardNo: 'IDCardNo',
      idcSP: 'IdcSP',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerCity: 'PeerCity',
      peerLocation: 'PeerLocation',
      portType: 'PortType',
      redundantEccId: 'RedundantEccId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      contactMail: 'string',
      contactTel: 'string',
      description: 'string',
      IDCardNo: 'string',
      idcSP: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerCity: 'string',
      peerLocation: 'string',
      portType: 'string',
      redundantEccId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

