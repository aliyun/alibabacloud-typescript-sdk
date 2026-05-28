// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertQuery extends $dara.Model {
  /**
   * @remarks
   * The name of the chart.
   * 
   * @example
   * chartExmaple
   */
  chartTitle?: string;
  /**
   * @remarks
   * The ID of the dashboard.
   * 
   * @example
   * dashboardExample
   */
  dashboardId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * now
   */
  end?: string;
  /**
   * @remarks
   * Specifies whether to enable Dedicated SQL.
   * 
   * @example
   * auto
   */
  powerSqlMode?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * projectExample
   */
  project?: string;
  /**
   * @remarks
   * The query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   */
  roleArn?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * -5m
   */
  start?: string;
  /**
   * @remarks
   * The name of the storage.
   * 
   * This parameter is required.
   * 
   * @example
   * store Example
   */
  store?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  storeType?: string;
  /**
   * @remarks
   * The type of the time span.
   * 
   * This parameter is required.
   * 
   * @example
   * Relative
   */
  timeSpanType?: string;
  /**
   * @remarks
   * The page on which you can record frontend configurations in specified scenarios.
   */
  ui?: string;
  static names(): { [key: string]: string } {
    return {
      chartTitle: 'chartTitle',
      dashboardId: 'dashboardId',
      end: 'end',
      powerSqlMode: 'powerSqlMode',
      project: 'project',
      query: 'query',
      region: 'region',
      roleArn: 'roleArn',
      start: 'start',
      store: 'store',
      storeType: 'storeType',
      timeSpanType: 'timeSpanType',
      ui: 'ui',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartTitle: 'string',
      dashboardId: 'string',
      end: 'string',
      powerSqlMode: 'string',
      project: 'string',
      query: 'string',
      region: 'string',
      roleArn: 'string',
      start: 'string',
      store: 'string',
      storeType: 'string',
      timeSpanType: 'string',
      ui: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

