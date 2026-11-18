// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDistributeCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: an integer greater than **0** and up to the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The instance ID of the child instance.
   * 
   * @example
   * gr-bp1zcjlobkyrq****
   */
  subInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      globalInstanceId: 'GlobalInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      subInstanceId: 'SubInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      subInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

