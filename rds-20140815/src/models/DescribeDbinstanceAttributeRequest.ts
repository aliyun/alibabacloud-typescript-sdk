// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * >Notice: Do not query the details of multiple instances at a time by using multiple instance IDs. Otherwise, the query times out and fails.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the instance expires. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * False
   */
  expired?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      expired: 'Expired',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      expired: 'string',
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

