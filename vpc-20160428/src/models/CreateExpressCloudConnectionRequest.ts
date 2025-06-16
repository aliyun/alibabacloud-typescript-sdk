// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressCloudConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth for ECC, which corresponds to the bandwidth for the underlying circuit.
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
   * The email address of the contact who applies for ECC.
   * 
   * @example
   * XX@example.com
   */
  contactMail?: string;
  /**
   * @remarks
   * The phone number of the contact who applies for ECC.
   * 
   * @example
   * 132*********
   */
  contactTel?: string;
  /**
   * @remarks
   * The description of ECC.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * ECC
   */
  description?: string;
  /**
   * @remarks
   * The ID card number of the contact who applies for ECC.
   * 
   * @example
   * 32*****************
   */
  IDCardNo?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) for the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * CU
   */
  idcSP?: string;
  /**
   * @remarks
   * The name of the ECC instance.
   * 
   * The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The city where the data center is located.
   * 
   * @example
   * Hangzhou
   */
  peerCity?: string;
  /**
   * @remarks
   * The geographical location of the data center.
   * 
   * > It must be accurate to house number-floor-room number-server rack number.
   * 
   * This parameter is required.
   * 
   * @example
   * \\*\\*city\\*\\*district/county\\*\\*road\\*\\*number\\*\\*property or building name\\*\\*building\\*\\*floor\\*\\*room number\\*\\*server rack number\\*\\*server rack name\\*\\*device\\*\\*port
   */
  peerLocation?: string;
  /**
   * @remarks
   * The port of the Express Connect circuit. Valid values:
   * 
   * *   100Base-T
   * *   1000Base-T
   * *   1000Base-LX
   * *   10GBase-T
   * *   10GBase-LR
   * 
   * @example
   * 100Base-T
   */
  portType?: string;
  /**
   * @remarks
   * The ID of the standby Express Connect circuit.
   * 
   * @example
   * ecc-d****
   */
  redundantEccId?: string;
  /**
   * @remarks
   * The region ID of the ECC instance.
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

