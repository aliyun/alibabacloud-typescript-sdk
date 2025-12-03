// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCACertificateNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 139a0******-cn-east-hangzhou-01
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * The name must be 1 to 80 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * mycacert02
   */
  CACertificateName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the CA certificate.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
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
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

