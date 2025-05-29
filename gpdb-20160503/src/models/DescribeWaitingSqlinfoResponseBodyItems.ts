// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWaitingSQLInfoResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The application that sent the query.
   * 
   * @example
   * DataGrip 2022.1.5
   */
  application?: string;
  /**
   * @remarks
   * The application that sent the blocking query.
   * 
   * @example
   * DataGrip 2022.1.5
   */
  blockedByApplication?: string;
  /**
   * @remarks
   * The process ID of the blocking query.
   * 
   * @example
   * 110
   */
  blockedByPID?: string;
  /**
   * @remarks
   * The SQL statement of the blocking query.
   * 
   * @example
   * Select * from t1;
   */
  blockedBySQLStmt?: string;
  /**
   * @remarks
   * The database account that is used to perform the blocking query.
   * 
   * @example
   * testUser1
   */
  blockedByUser?: string;
  /**
   * @remarks
   * The authorized locks.
   * 
   * @example
   * ShareLock,AccessExclusiveLock
   */
  grantLocks?: string;
  /**
   * @remarks
   * The unauthorized locks.
   * 
   * @example
   * AccessShareLock
   */
  notGrantLocks?: string;
  /**
   * @remarks
   * The ID of the process that uniquely identifies the query.
   * 
   * @example
   * 100
   */
  PID?: string;
  /**
   * @remarks
   * The SQL statement of the query.
   * 
   * @example
   * Select * from t1,t2 where t1.id=t2.id;
   */
  SQLStmt?: string;
  /**
   * @remarks
   * The database account that is used to perform the query.
   * 
   * @example
   * testUser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      blockedByApplication: 'BlockedByApplication',
      blockedByPID: 'BlockedByPID',
      blockedBySQLStmt: 'BlockedBySQLStmt',
      blockedByUser: 'BlockedByUser',
      grantLocks: 'GrantLocks',
      notGrantLocks: 'NotGrantLocks',
      PID: 'PID',
      SQLStmt: 'SQLStmt',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      blockedByApplication: 'string',
      blockedByPID: 'string',
      blockedBySQLStmt: 'string',
      blockedByUser: 'string',
      grantLocks: 'string',
      notGrantLocks: 'string',
      PID: 'string',
      SQLStmt: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

