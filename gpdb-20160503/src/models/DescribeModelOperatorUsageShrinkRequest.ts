// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of API key IDs. Separate multiple IDs with commas (,). If this parameter is not specified, all API key IDs under the instance ID are used by default.
   * 
   * > A maximum of 50 items can be included in the list.
   */
  apiKeyIdsShrink?: string;
  /**
   * @remarks
   * The end time of the query. The format is <i>YYYY-MM-DDThh:mmZ</i> (UTC time).
   * 
   * > The end time must be later than the start time, and the interval between the start time and the end time cannot exceed 7 days.
   * 
   * @example
   * 2026-06-02T00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The dimension for splitting series. Separate multiple dimensions with commas (,). The order does not matter. Valid values:
   * 
   * - model (default): Splits by model.
   * - api_key: Splits by API key.
   * - model,api_key: Splits by model and API key.
   * 
   * @example
   * model
   */
  groupBy?: string;
  /**
   * @remarks
   * The list of metrics. Separate multiple metrics with commas (,). Valid values:
   * 
   * - request_count: The number of requests.
   * - success_count: The number of successful requests.
   * - error_count: The number of failed requests.
   * - success_rate: The request success rate.
   * - input_token: The number of input tokens.
   * - output_token: The number of output tokens.
   * - total_token: The total number of tokens.
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
   * > - 1. If Period is not specified, the default value is selected based on the following rules:
   * > - - If the time window is less than or equal to 1 hour, Period is set to 1.
   * > - - If the time window is less than or equal to 1 day, Period is set to 60.
   * > - - If the time window is less than or equal to 7 days, Period is set to 60.
   * > - 2. If Period is set to 1, the time window must be less than or equal to 1 day.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The start time of the query. The format is <i>YYYY-MM-DDThh:mmZ</i> (UTC time).
   * 
   * > You can query only metrics from the last 30 days.
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

