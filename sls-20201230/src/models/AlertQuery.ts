// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertQuery extends $dara.Model {
  /**
   * @example
   * chartExmaple
   */
  chartTitle?: string;
  /**
   * @example
   * dashboardExample
   */
  dashboardId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * now
   */
  end?: string;
  /**
   * @example
   * auto
   */
  powerSqlMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * projectExample
   */
  project?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -5m
   */
  start?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * store Example
   */
  store?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * log
   */
  storeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Relative
   */
  timeSpanType?: string;
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

