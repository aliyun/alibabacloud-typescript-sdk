// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Maximum value: **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * *   Separate multiple QoS polices with commas (,).
   * *   If you do not specify this parameter, all QoS policies in the region are queried.
   * 
   * @example
   * qos-oek3r2cmvk7m8q****
   */
  qosIds?: string;
  /**
   * @remarks
   * The name of the QoS policy.
   * 
   * The name must be 2 to 100 characters in length and can contain letters, digits, periods (.), underscores (_),and hyphens (-). The name must start with a letter.
   * 
   * @example
   * zxtest
   */
  qosName?: string;
  /**
   * @remarks
   * The ID of the region where the QoS policy is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosIds: 'QosIds',
      qosName: 'QosName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      qosIds: 'string',
      qosName: 'string',
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

