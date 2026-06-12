// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertQuery extends $dara.Model {
  /**
   * @remarks
   * Chart name
   * 
   * @example
   * chartExmaple
   */
  chartTitle?: string;
  /**
   * @remarks
   * Dashboard ID
   * 
   * @example
   * dashboardExample
   */
  dashboardId?: string;
  /**
   * @remarks
   * End time
   * 
   * This parameter is required.
   * 
   * @example
   * now
   */
  end?: string;
  /**
   * @remarks
   * Whether to enable Dedicated SQL
   * 
   * @example
   * auto
   */
  powerSqlMode?: string;
  /**
   * @remarks
   * Project name
   * 
   * This parameter is required.
   * 
   * @example
   * projectExample
   */
  project?: string;
  /**
   * @remarks
   * Query and analysis statement
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * Region
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Role ARN
   */
  roleArn?: string;
  /**
   * @remarks
   * Start time
   * 
   * This parameter is required.
   * 
   * @example
   * -5m
   */
  start?: string;
  /**
   * @remarks
   * Store name
   * 
   * This parameter is required.
   * 
   * @example
   * store Example
   */
  store?: string;
  /**
   * @remarks
   * Store type
   * 
   * This parameter is required.
   * 
   * @example
   * log
   */
  storeType?: string;
  /**
   * @remarks
   * Time span type
   * 
   * This parameter is required.
   * 
   * @example
   * Relative
   */
  timeSpanType?: string;
  /**
   * @remarks
   * Used by the frontend for specific-scenario alerts
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

