// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePromoteActivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 22973492**********
   */
  aliUid?: string;
  /**
   * @remarks
   * *   China site: 26842
   * *   International site: 26888
   * 
   * @example
   * 268**
   */
  bid?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The activity information about the instance. For more information, see [Instance activities](https://help.aliyun.com/document_detail/2391834.html).
   * 
   * @example
   * 1
   */
  isActivity?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94CB8D93-017A-5AE7-A118-6E0F89D93C0A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBType: 'DBType',
      isActivity: 'IsActivity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBType: 'string',
      isActivity: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

