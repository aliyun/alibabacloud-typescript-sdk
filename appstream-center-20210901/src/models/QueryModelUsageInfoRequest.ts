// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModelUsageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. This parameter is required and has no default value. The mapping between business types and valid values is as follows:
   * 
   * - `1`: Enterprise Edition.
   * - `10`: Personal Edition.
   * - `20`: Commercial Edition.
   * - `70`: Agentic Computer.
   * 
   * **The API directly queries the model usage of the current account based on the specified `BizType` and does not automatically convert or replace the business type.** To query the usage of the Agentic Computer business, you must explicitly set `BizType` to `70`. The usage of different business types is calculated separately.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The end date of the custom query. The format is `yyyy-MM-dd`. The date is interpreted as a calendar day in the Asia/Shanghai (UTC+8) time zone and includes the current day. The value is a date string and does not include hours, minutes, seconds, or a time zone suffix.
   * 
   * **This parameter can be specified only when `StatDateType` is set to `1d`, and it must be specified or omitted together with `StartDate`.** The end date cannot be earlier than the start date. The total number of days, including the start and end dates, cannot exceed 90. If you do not use a custom date, omit these two parameters directly. Do not pass empty strings or pure whitespace.
   * 
   * @example
   * 2026-08-07
   */
  endDate?: string;
  /**
   * @remarks
   * The model type filter. If this parameter is not specified or an empty string is passed, no filtering by type is performed. The value is case-insensitive:
   * 
   * - `LLM`: Large language model.
   * - `IMAGE`: Image model.
   * - `VIDEO`: Video model.
   * - `AUDIO`: Audio model.
   * - `EMBEDDING`: Embedding model.
   * 
   * Non-empty values do not support leading or trailing spaces. Other non-empty values besides the preceding ones will cause parameter validation to fail.
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * The start date of the custom query. The format is `yyyy-MM-dd`. The date is interpreted as a calendar day in the Asia/Shanghai (UTC+8) time zone and includes the current day. The value is a date string and does not include hours, minutes, seconds, or a time zone suffix.
   * 
   * **This parameter can be specified only when `StatDateType` is set to `1d`, and it must be specified or omitted together with `EndDate`.** The start date cannot be later than the end date. The total number of days, including the start and end dates, must be between 1 and 90. If both parameters are omitted, the cumulative usage for today is queried. If you do not use a custom date, omit these two parameters directly. Do not pass empty strings or pure whitespace.
   * 
   * @example
   * 2026-08-01
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical window. This parameter is required and has no default value. The value is case-sensitive and does not support leading or trailing spaces. Time boundaries are calculated based on **Asia/Shanghai (UTC+8)**.
   * 
   * - `24h`: The last 24 hours up to the most recent available statistical cutoff time. The statistical cutoff time corresponds to the current hour or the previous hour.
   * - `1d`: If the start and end dates are not specified, the cumulative usage for today is queried. If both `StartDate` and `EndDate` are specified, the specified calendar day range is queried.
   * - `1w`: The last 7 days up to the day of the request. If the statistical results for the current day are unavailable, the results from the previous day are not used.
   * - `30d`: The last 30 days up to the day of the request. If the statistical results for the current day are unavailable, the results from the previous day are not used.
   * - `1y`: The statistical results for the last 365 days. If the results for the current year are unavailable, the statistical results for the previous year may be returned, and the actual coverage may be earlier than the day of the request. This API does not return the statistical cutoff time for this result, and you cannot use it to confirm that the data has been updated to the current day.
   * 
   * **Only `1d` supports custom date ranges**. Do not specify start and end dates for other windows.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d
   */
  statDateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      modelType: 'ModelType',
      startDate: 'StartDate',
      statDateType: 'StatDateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      endDate: 'string',
      modelType: 'string',
      startDate: 'string',
      statDateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

