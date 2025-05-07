// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeExtraDbinstanceIds";


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra extends $dara.Model {
  /**
   * @remarks
   * The group policy of the instance account.
   * 
   * *   MaximumPasswordAge: maximum use time
   * *   MinimumPasswordAge: minimum use time
   * 
   * @example
   * {"MaximumPasswordAge": 42,"MinimumPasswordAge": 30}
   */
  accountSecurityPolicy?: string;
  /**
   * @remarks
   * The instance IDs.
   */
  DBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds;
  /**
   * @remarks
   * The recovery model. Valid values: Simple and Full.
   * 
   * @example
   * Simple
   */
  recoveryModel?: string;
  static names(): { [key: string]: string } {
    return {
      accountSecurityPolicy: 'AccountSecurityPolicy',
      DBInstanceIds: 'DBInstanceIds',
      recoveryModel: 'RecoveryModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityPolicy: 'string',
      DBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds,
      recoveryModel: 'string',
    };
  }

  validate() {
    if(this.DBInstanceIds && typeof (this.DBInstanceIds as any).validate === 'function') {
      (this.DBInstanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

