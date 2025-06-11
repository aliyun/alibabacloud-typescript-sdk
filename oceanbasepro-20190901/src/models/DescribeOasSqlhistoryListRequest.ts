// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasSQLHistoryListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * Specifies whether the SQL statement is a dynamic SQL statement.
   * 
   * @example
   * false
   */
  dynamicSql?: boolean;
  /**
   * @remarks
   * The end time of querying the execution history of the SQL statement.   
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
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * i-bp19y05uq6x*********
   */
  nodeIp?: string;
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
   * The start time of querying the execution history of the SQL statement.   
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
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeIp: 'NodeIp',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      nodeIp: 'string',
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

