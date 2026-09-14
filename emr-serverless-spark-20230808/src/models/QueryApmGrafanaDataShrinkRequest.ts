// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryApmGrafanaDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring dashboard.
   * 
   * @example
   * spark-all
   */
  componentName?: string;
  /**
   * @remarks
   * The dashboard ID.
   * 
   * @example
   * ex2tTKoNz
   */
  dashboardId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1697033783
   */
  end?: string;
  /**
   * @remarks
   * The datasource provider.
   * 
   * @example
   * spark
   */
  provider?: string;
  /**
   * @remarks
   * The PromQL query expression.
   * 
   * @example
   * bizType:
   */
  query?: string;
  /**
   * @remarks
   * The panel-level query parameters.
   */
  queryParamsShrink?: string;
  /**
   * @remarks
   * The Grafana datasource proxy path.
   * 
   * This parameter is required.
   * 
   * @example
   * /api/datasources/proxy/1/api/v1/query_range
   */
  queryUrl?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1697030183
   */
  start?: string;
  /**
   * @remarks
   * The query step, in seconds.
   * 
   * @example
   * 15
   */
  step?: string;
  /**
   * @remarks
   * The time point for an instant query. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1697033783
   */
  time?: string;
  /**
   * @remarks
   * The dashboard variables, as a JSON string.
   * 
   * @example
   * {"fenix_job_runId":"jr-b5059689bb50f360"}
   */
  variables?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      dashboardId: 'dashboardId',
      end: 'end',
      provider: 'provider',
      query: 'query',
      queryParamsShrink: 'queryParams',
      queryUrl: 'queryUrl',
      regionId: 'regionId',
      start: 'start',
      step: 'step',
      time: 'time',
      variables: 'variables',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      dashboardId: 'string',
      end: 'string',
      provider: 'string',
      query: 'string',
      queryParamsShrink: 'string',
      queryUrl: 'string',
      regionId: 'string',
      start: 'string',
      step: 'string',
      time: 'string',
      variables: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

