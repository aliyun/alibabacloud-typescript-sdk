// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledSQLConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * log2log
   */
  dataFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  destEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dest-logstore-demo
   */
  destLogstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-demo
   */
  destProject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  destRoleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1712592000
   */
  fromTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * @m-1m
   */
  fromTimeExpr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enhanced
   */
  resourcePool?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  script?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * source-logstore-demo
   */
  sourceLogstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * searchQuery
   */
  sqlType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
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
      fromTime: 'fromTime',
      fromTimeExpr: 'fromTimeExpr',
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
      fromTime: 'number',
      fromTimeExpr: 'string',
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

