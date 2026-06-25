// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlConsoleOperationLogRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the logs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The database schema.
   * 
   * @example
   * mysql
   */
  schema?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the logs.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schema: 'Schema',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      schema: 'string',
      sqlType: 'string',
      startTime: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

