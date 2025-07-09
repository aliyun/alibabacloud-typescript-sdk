// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleSqlRawTextsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  dynamicSql?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-12T05:38:38Z
   */
  endTime?: string;
  /**
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * SQL ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-04-12T04:38:38Z
   */
  startTime?: string;
  /**
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @example
   * YB420A700EFB-00060D53E42D0C61-0-0
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      limit: 'Limit',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      limit: 'number',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

