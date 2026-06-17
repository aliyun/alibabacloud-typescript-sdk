// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * > You can invoke the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view the instance IDs of all AnalyticDB for PostgreSQL instances in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp13ue79qk8y1****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

