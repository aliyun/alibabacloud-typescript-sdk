// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLSamplesRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The end time of querying the slow query execution.
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-12T05:38:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to return the SQL text.
   * 
   * @example
   * true
   */
  returnSqlText?: boolean;
  /**
   * @remarks
   * SQL ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  /**
   * @remarks
   * The start time of querying the slow query execution.
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-12T04:38:38Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      returnSqlText: 'ReturnSqlText',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      instanceId: 'string',
      returnSqlText: 'boolean',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

