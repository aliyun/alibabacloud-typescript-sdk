// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledSQLConfiguration extends $dara.Model {
  /**
   * @remarks
   * The write mode. Three configurations are supported: log2log, log2metric, and metric2metric.
   * 
   * This parameter is required.
   * 
   * @example
   * log2log
   */
  dataFormat?: string;
  /**
   * @remarks
   * The destination endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  destEndpoint?: string;
  /**
   * @remarks
   * The destination logstore.
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
   * The ARN of the role used to write data to the destination.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  destRoleArn?: string;
  /**
   * @remarks
   * Specifies whether to ensure accurate computation results.
   * 
   * @example
   * true
   */
  forceComplete?: boolean;
  /**
   * @remarks
   * The start time. For more information, see [From Logstore to MetricStore](https://help.aliyun.com/document_detail/286459.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1712592000
   */
  fromTime?: number;
  /**
   * @remarks
   * The start of the SQL time window.
   * 
   * This parameter is required.
   * 
   * @example
   * @m-1m
   */
  fromTimeExpr?: string;
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The maximum number of retries upon SQL timeout. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * The maximum timeout period for SQL execution. Unit: seconds. Valid values: 60 to 1800.
   * 
   * This parameter is required.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * The SQL configuration. For more information, see [From Logstore to MetricStore](https://help.aliyun.com/document_detail/286459.html).
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
   * The resource pool type. A value of enhanced indicates the enhanced resource pool.
   * 
   * This parameter is required.
   * 
   * @example
   * enhanced
   */
  resourcePool?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role used to execute the SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The analytic statement of the scheduled query.
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  script?: string;
  /**
   * @remarks
   * The source logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * source-logstore-demo
   */
  sourceLogstore?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * This parameter is required.
   * 
   * @example
   * searchQuery
   */
  sqlType?: string;
  /**
   * @remarks
   * The end time. For more information, see [From Logstore to MetricStore](https://help.aliyun.com/document_detail/286459.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * The end of the SQL time window.
   * 
   * This parameter is required.
   * 
   * @example
   * @m
   */
  toTimeExpr?: string;
  /**
   * @remarks
   * Specifies whether to use the Exactly-Once write protocol.
   */
  usingExactlyOnce?: boolean;
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
      usingExactlyOnce: 'usingExactlyOnce',
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
      usingExactlyOnce: 'boolean',
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

