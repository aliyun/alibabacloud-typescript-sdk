// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePromoteActivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 22973492**********
   */
  aliUid?: string;
  /**
   * @remarks
   * - Chinese site: 26842
   * - International site: 26888
   * 
   * @example
   * 26888
   */
  bid?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
   * 
   * @example
   * rm-uf6wjk5******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-uf6wjk5******
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The database engine type. Valid values: 
   * * **MySQL**
   * * **PostgreSQL**
   * * **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The dynamic property of the instance. For more information, see [Instance dynamics](https://help.aliyun.com/document_detail/2391834.html).
   * 
   * @example
   * 1 (indicates that the target instance is not participating in any promotions)
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

