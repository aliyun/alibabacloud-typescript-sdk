// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database. You can enter only one database name. If you specify this parameter, this operation returns the logs that are generated only for the specified database. If you do not specify this parameter, this operation returns the logs that are generated for all databases on the instance.
   * 
   * @example
   * Database
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time span between the start time and the end time must be less than 15 days. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-06-11T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to generate an SQL audit log file or return SQL audit logs. Valid values:
   * 
   * *   **File**: If you set this parameter to File, this operation generates an SQL audit log file and returns only common response parameters. After you call this operation, you must call the DescribeSQLLogFiles operation to obtain the download URL of the SQL audit log file.
   * *   **Stream** (default): If you set this parameter to Stream, this operation returns SQL audit logs.
   * 
   * >  If you set this parameter to **File**, only ApsaraDB RDS for MySQL instances that use local disks and ApsaraDB RDS for SQL Server instances are supported, and a maximum of 1 million logs are returned.
   * 
   * @example
   * Stream
   */
  form?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30** to **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * *   When you call this operation and set the **Form** parameter to **File** to generate an audit file, you cannot filter log entries by keyword.
   * *   You can specify up to 10 keywords. The keywords are evaluated by using the **AND** operator. Separate multiple keywords with spaces.
   * *   If a field name in the specified SQL statement is enclosed in grave accents (\\`) and you want to use the field name as a keyword, you must enter the grave accents (\\`) as part of the field name. For example, if the field name is \\`id\\`, enter \\`id\\` instead of id.
   * 
   * >  After you enter a keyword, the system matches the keyword based on the **Database**, **User**, and **QueryKeywords** parameters. The parameters are evaluated by using the **AND** operator.
   * 
   * @example
   * table_name
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the SQL statement.
   * 
   * @example
   * 25623548
   */
  SQLId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. You can query data in the last 15 days before the current date. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-06-01T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username of the account. You can enter only one username. If you specify this parameter, this operation returns the logs that are generated only for the specified account. If you do not specify this parameter, this operation returns the logs that are generated for all accounts on the instance.
   * 
   * @example
   * user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      form: 'Form',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      form: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQLId: 'number',
      startTime: 'string',
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

