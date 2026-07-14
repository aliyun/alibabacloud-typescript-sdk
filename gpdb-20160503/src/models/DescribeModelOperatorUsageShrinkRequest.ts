// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of API key IDs. Separate multiple IDs with commas (,). If this parameter is not specified, all API key IDs under the instance ID are used by default.
   * 
   * > The list can contain up to 50 items.
   */
  apiKeyIdsShrink?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the <i>YYYY-MM-DDThh:mmZ</i> format (UTC).
   * 
   * > The end time must be later than the start time, and the interval between the start time and end time cannot exceed 7 days.
   * 
   * @example
   * 2026-06-02T00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The dimension by which to split the series. Separate multiple dimensions with commas (,). The order is not significant. Valid values:
   * 
   * - model (default): splits by model.
   * - api_key: splits by API key.
   * - model,api_key: splits by model and API key.
   * 
   * @example
   * model
   */
  groupBy?: string;
  /**
   * @remarks
   * The list of metrics. Separate multiple metrics with commas (,). Valid values:
   * 
   * - request_count: the number of requests.
   * - success_count: the number of successful requests.
   * - error_count: the number of failed requests.
   * - success_rate: the request success rate.
   * - input_token: the number of input tokens.
   * - output_token: the number of output tokens.
   * - total_token: the total number of tokens.
   */
  keysShrink?: string;
  /**
   * @remarks
   * The list of model names. Separate multiple names with commas (,).
   */
  modelNamesShrink?: string;
  /**
   * @remarks
   * The time bucket size in seconds. Valid values: 1, 5, 15, 60, 300, and 3600.
   * 
   * >
   * > - 1. If Period is not specified, the default value is determined by the following rules:
   * > - - Window range ≤ 1 hour: Period = 1.
   * > - - Window range ≤ 1 day: Period = 60.
   * > - - Window range ≤ 7 days: Period = 60.
   * > - 2. When Period is set to 1, the window must be ≤ 1 day.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>YYYY-MM-DDThh:mmZ</i> format (UTC).
   * 
   * > Only metrics within the last 30 days can be queried.
   * 
   * @example
   * 2026-06-01T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyIdsShrink: 'ApiKeyIds',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      keysShrink: 'Keys',
      modelNamesShrink: 'ModelNames',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyIdsShrink: 'string',
      endTime: 'string',
      groupBy: 'string',
      keysShrink: 'string',
      modelNamesShrink: 'string',
      period: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

