// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance state table](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > : Pay-as-you-go instances never expire.
   * 
   * @example
   * 2019-03-27T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked after it expires.
   * *   **LockByRestoration**: The instance is automatically locked before it is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked after its storage capacity is exhausted.
   * *   **LockReadInstanceByDiskQuota**: The instance is a read-only instance and is automatically locked after its storage capacity is exhausted.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      expireTime: 'string',
      lockMode: 'string',
      payType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

