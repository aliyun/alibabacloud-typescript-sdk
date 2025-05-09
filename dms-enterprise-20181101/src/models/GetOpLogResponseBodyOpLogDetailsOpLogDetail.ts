// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpLogResponseBodyOpLogDetailsOpLogDetail extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the database instance.
   * 
   * > 
   * 
   * *   This parameter is valid only for database instances of the LocalInstance type.
   * 
   * *   This parameter is valid only for operations on the functional modules related to tasks.
   * 
   * @example
   * dmstest_prod_database@dmstest.rds... [Test instance]
   */
  database?: string;
  /**
   * @remarks
   * The functional module for which the operation log is queried.
   * 
   * @example
   * SECURITY_RULE
   */
  module?: string;
  /**
   * @remarks
   * The details of the operation.
   * 
   * @example
   * SELECT * FROM `orders` \\n LIMIT 20
   */
  opContent?: string;
  /**
   * @remarks
   * The time when the operation was performed.
   * 
   * @example
   * 2022-03-28 16:45:19
   */
  opTime?: string;
  /**
   * @remarks
   * The ID of the user who performed the operation.
   * 
   * @example
   * 51****
   */
  opUserId?: number;
  /**
   * @remarks
   * The ID of the ticket or task.
   * 
   * >  This parameter is valid only for operations on the functional modules related to tasks and the task management module in system management.
   * 
   * @example
   * 509****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 22275482072787****
   */
  userId?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * test_name
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      module: 'Module',
      opContent: 'OpContent',
      opTime: 'OpTime',
      opUserId: 'OpUserId',
      orderId: 'OrderId',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      module: 'string',
      opContent: 'string',
      opTime: 'string',
      opUserId: 'number',
      orderId: 'number',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

