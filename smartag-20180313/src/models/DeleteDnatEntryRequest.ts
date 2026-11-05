// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * fwd-kxe4fq3xuzczze****
   */
  dnatEntryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * >  Only SAG instances used to manage SAG devices support DNAT.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-jfh*********
   */
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      dnatEntryId: 'DnatEntryId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntryId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

