// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledSQLConfiguration extends $dara.Model {
  /**
   * @remarks
   * The data format. Valid values: log2log, log2metric, and metric2metric.
   * 
   * This parameter is required.
   * 
   * @example
   * log2log
   */
  dataFormat?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  destEndpoint?: string;
  /**
   * @remarks
   * The destination Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * dest-logstore-demo
   */
  destLogstore?: string;
  /**
   * @remarks
   * The destination project.
   * 
   * This parameter is required.
   * 
   * @example
   * project-demo
   */
  destProject?: string;
  /**
   * @remarks
   * The ARN of the RAM role that is assumed to write data to the destination Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  destRoleArn?: string;
  /**
   * @example
   * true
   */
  forceComplete?: boolean;
  /**
   * @remarks
   * The start time. For more information, see [Process and store data from a Logstore to a Metricstore](https://help.aliyun.com/document_detail/286459.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1712592000
   */
  fromTime?: number;
  /**
   * @remarks
   * The start time of the SQL time window.
   * 
   * This parameter is required.
   * 
   * @example
   * @m-1m
   */
  fromTimeExpr?: string;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The maximum number of SQL timeouts allowed. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * The maximum timeout period of SQL analysis. Unit: seconds. Valid values: 60 to 1800.
   * 
   * This parameter is required.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * The SQL configurations. For more information, see [Process and store data from a Logstore to a Metricstore](https://help.aliyun.com/document_detail/286459.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   addLabels: "{}",
   *   hashLabels: "[]",
   *   labelKeys: "[\\"your label1\\",\\"your label2\\"]",
   *   metricKeys: "[\\"your Indicator1\\",\\"your Indicator2\\"]",
   *   metricName: "",
   *   timeKey: ""
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The type of the resource pool. The value enhanced specifies an enhanced resource pool.
   * 
   * This parameter is required.
   * 
   * @example
   * enhanced
   */
  resourcePool?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that is assigned to the Scheduled SQL job.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The query statement of the Scheduled SQL job.
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  script?: string;
  /**
   * @remarks
   * The source Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * source-logstore-demo
   */
  sourceLogstore?: string;
  /**
   * @remarks
   * The type of the query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * searchQuery
   */
  sqlType?: string;
  /**
   * @remarks
   * The end time. For more information, see [Process and store data from a Logstore to a Metricstore](https://help.aliyun.com/document_detail/286459.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * The end time of the SQL time window.
   * 
   * This parameter is required.
   * 
   * @example
   * @m
   */
  toTimeExpr?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'dataFormat',
      destEndpoint: 'destEndpoint',
      destLogstore: 'destLogstore',
      destProject: 'destProject',
      destRoleArn: 'destRoleArn',
      forceComplete: 'forceComplete',
      fromTime: 'fromTime',
      fromTimeExpr: 'fromTimeExpr',
      maxConcurrency: 'maxConcurrency',
      maxRetries: 'maxRetries',
      maxRunTimeInSeconds: 'maxRunTimeInSeconds',
      parameters: 'parameters',
      resourcePool: 'resourcePool',
      roleArn: 'roleArn',
      script: 'script',
      sourceLogstore: 'sourceLogstore',
      sqlType: 'sqlType',
      toTime: 'toTime',
      toTimeExpr: 'toTimeExpr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      destEndpoint: 'string',
      destLogstore: 'string',
      destProject: 'string',
      destRoleArn: 'string',
      forceComplete: 'boolean',
      fromTime: 'number',
      fromTimeExpr: 'string',
      maxConcurrency: 'number',
      maxRetries: 'number',
      maxRunTimeInSeconds: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourcePool: 'string',
      roleArn: 'string',
      script: 'string',
      sourceLogstore: 'string',
      sqlType: 'string',
      toTime: 'number',
      toTimeExpr: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

