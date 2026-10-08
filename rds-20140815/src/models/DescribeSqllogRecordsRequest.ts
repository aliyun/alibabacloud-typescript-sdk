// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database. By default, all databases are queried. You can also enter a database name to query. Only one database name can be entered at a time.
   * 
   * @example
   * Database
   */
  database?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time, and the interval between the start time and end time must be 7 days or less. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > If DAS Enterprise Edition V3 is activated and you use the SQL Explorer and Audit feature it provides, you can query data within the hot data storage duration. You can call [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) to query the activated Enterprise Edition information.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-06-06T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to generate an audit file or return a list of SQL records. Valid values:
   * * **File**: If you set this parameter to File, an audit file is generated. Only common parameters are returned. You must call the DescribeSQLLogFiles operation to obtain the download URL of the file.
   * * **Stream**: This is the default value. A list of SQL records is returned.
   * 
   * > If this parameter is set to **File**, only MySQL (with Premium Local SSDs) and SQL Server instances are supported, and a maximum of 1,000,000 log entries are recorded.
   * 
   * @example
   * Stream
   */
  form?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
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
   * The keywords that are used for the query.
   * 
   * - When you generate an audit file by calling this operation (the **Form** request parameter is set to **File**), keyword-based filtering is not supported.
   * 
   * - Separate multiple keywords with spaces. You can specify up to 10 keywords. The logical relationship among keywords is **and**.
   * 
   * - If a field name in the SQL statement uses backticks (\\`), you must also include the backticks when using the field name as a keyword. For example, if the field name is \\`id\\`, enter \\`id\\` instead of id.
   * 
   * > After you enter keywords, the system matches the keywords against the **Database**, **User**, and **QueryKeywords** parameters simultaneously. The logical relationship among the three request parameters is **and**.
   * 
   * @example
   * table_name
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  SQLId?: number;
  /**
   * @remarks
   * The start time of the query. You can query data within the last 7 days from the current date. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > If DAS Enterprise Edition V3 is activated and you use the SQL Explorer and Audit feature it provides, you can query data within the hot data storage duration. You can call [DescribeSqlLogConfig](https://help.aliyun.com/document_detail/2778837.html) to query the activated Enterprise Edition information.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-06-01T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username. By default, all users are queried. You can also enter a username to query. Only one username can be entered at a time.
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

