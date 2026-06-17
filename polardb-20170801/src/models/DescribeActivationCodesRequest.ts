// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActivationCodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud order (including virtual orders) used to purchase the activation codes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2233****445566
   */
  aliyunOrderId?: string;
  /**
   * @remarks
   * Filters the list to return only the activation code matching the specified MAC address.
   * 
   * @example
   * aa:bb:cc:dd:ee:ff
   */
  macAddress?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records to return per page
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Filters the list to return only the activation code matching the specified system identifier.
   * 
   * @example
   * 3312548696141831911
   */
  systemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunOrderId: 'AliyunOrderId',
      macAddress: 'MacAddress',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      systemIdentifier: 'SystemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunOrderId: 'string',
      macAddress: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      systemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

