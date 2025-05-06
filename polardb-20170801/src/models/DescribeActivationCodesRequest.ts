// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActivationCodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud order. The value can be the ID of a virtual order.
   * 
   * This parameter is required.
   * 
   * @example
   * 2233****445566
   */
  aliyunOrderId?: string;
  /**
   * @example
   * aa:bb:cc:dd:ee:ff
   */
  macAddress?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
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

