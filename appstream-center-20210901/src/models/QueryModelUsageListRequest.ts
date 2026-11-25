// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModelUsageListRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. This parameter is required and has no default value. The mapping between business types and values is as follows:
   * 
   * - 1: Enterprise Edition.
   * - 10: Personal Edition.
   * - 20: Commercial Edition.
   * - 70: Agentic Computer.
   * 
   * **The API directly queries the model usage of the current account based on the passed BizType and does not automatically convert or replace the business type.** When querying the usage of the Agentic Computer business, you must explicitly pass BizType=70. Usage of different business types is counted separately.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The end date of the custom query. The format is yyyy-MM-dd. It is interpreted as a natural day in Asia/Shanghai (UTC+8) and includes the current day. This value is a date string and does not contain hours, minutes, seconds, or time zone suffixes.
   * 
   * **This parameter can be passed only when StatDateType=1d, and it must be passed or omitted together with StartDate.** The end date cannot be earlier than the start date. The total number of days, including the start and end dates, cannot exceed 90. When custom dates are not used, omit these two parameters directly. Do not pass empty strings or pure spaces.
   * 
   * @example
   * 2026-08-07
   */
  endDate?: string;
  /**
   * @remarks
   * The keyword for the model name or model code. After removing leading and trailing spaces, a case-insensitive inclusion match is performed. It is not a regular expression. If this parameter is not passed or is completely blank, no filtering by keyword is performed. If it is passed together with ModelType, both conditions take effect simultaneously.
   * 
   * The translated display names of some models do not participate in name matching. To stably locate a model, we recommend that you use the returned LlmCode as the keyword.
   * 
   * @example
   * qwen
   */
  keyword?: string;
  /**
   * @remarks
   * The model display language. Valid values:
   * 
   * - zh-CN: Simplified Chinese.
   * - en-US: English.
   * - ja-JP: Japanese.
   * - zh-TW: Traditional Chinese.
   * 
   * If this parameter is not passed, is blank, or has an unsupported value, zh-CN is used. It is also compatible with zh_CN, en_US, ja_JP, zh_TW, en, and ja. Case and leading or trailing spaces are ignored.
   * 
   * The returned content is not guaranteed to be entirely in the selected language. Some model names and descriptions are provided in Japanese or Traditional Chinese. For other model information, brands, and capability tags, English is used when ja-JP is selected, and Simplified Chinese is used when zh-TW is selected. If the corresponding translation is missing, the existing content is retained. If the model name is missing, the model code is returned.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The model type filter condition. If this parameter is not passed or an empty string is passed, no filtering by type is performed. The value is case-insensitive:
   * 
   * - LLM: Large language model.
   * - IMAGE: Image model.
   * - VIDEO: Video model.
   * - AUDIO: Audio model.
   * - EMBEDDING: Embedding model.
   * 
   * Non-empty values do not support leading or trailing spaces. Other non-empty values besides the preceding ones cause parameter validation to fail.
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * The page number. It starts from 1 and the default value is 1. It must be an integer greater than or equal to 1. It is used together with PageSize for pagination. If the page number exceeds the range of the filtered results, an empty list is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of models returned per page. The default value is 10. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. If this parameter is not passed or is blank, the default value is CALL_COUNT_DESC. The value is case-sensitive, and non-empty values do not support leading or trailing spaces:
   * 
   * - CALL_COUNT_DESC: Sort by call count in descending order.
   * - POINTS_CONSUMPTION_DESC: Sort by consumed points in descending order.
   * - SUCCESS_RATE_ASC: Sort by call success rate in ascending order. Models with unavailable success rates are ranked last.
   * - AVG_TTFT_DESC: Sort by average time to first token latency in descending order. Models with unavailable latency are ranked last.
   * 
   * When sort values are the same, sort by model code LlmCode in ascending order. Filter and sort first, then paginate. Other non-empty values besides the preceding ones cause parameter validation to fail.
   * 
   * @example
   * CALL_COUNT_DESC
   */
  sortType?: string;
  /**
   * @remarks
   * The start date of the custom query. The format is yyyy-MM-dd. It is interpreted as a natural day in Asia/Shanghai (UTC+8) and includes the current day. This value is a date string and does not contain hours, minutes, seconds, or time zone suffixes.
   * 
   * **This parameter can be passed only when StatDateType=1d, and it must be passed or omitted together with EndDate.** The start date cannot be later than the end date. The total number of days, including the start and end dates, must be between 1 and 90. If both are omitted, the cumulative usage for today is queried. When custom dates are not used, omit these two parameters directly. Do not pass empty strings or pure spaces.
   * 
   * @example
   * 2026-08-01
   */
  startDate?: string;
  /**
   * @remarks
   * The statistical window. This parameter is required, has no default value, is case-sensitive, and does not support leading or trailing spaces. Time boundaries are calculated based on **Asia/Shanghai (UTC+8)**.
   * 
   * - 24h: The last 24 hours up to the most recent available statistical cutoff time. The statistical cutoff time corresponds to the current hour or the previous hour.
   * - 1d: If no start and end dates are passed, the cumulative usage for today is queried. If both StartDate and EndDate are passed, the specified natural day range is queried.
   * - 1w: The last 7 days up to the day of the request. If the statistical results for the current day are unavailable, the results from the previous day are not used.
   * - 30d: The last 30 days up to the day of the request. If the statistical results for the current day are unavailable, the results from the previous day are not used.
   * - 1y: The statistical results for the last 365 days. If the results for the current year are unavailable, the statistical results for the previous year may be returned. The actual coverage range may be earlier than the day of the request. This API does not return the statistical cutoff time for this result, so you cannot use it to confirm whether the data has been updated to the current day.
   * 
   * **Only 1d supports custom date ranges**. Do not pass start and end dates for other windows.
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
      keyword: 'Keyword',
      language: 'Language',
      modelType: 'ModelType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortType: 'SortType',
      startDate: 'StartDate',
      statDateType: 'StatDateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      endDate: 'string',
      keyword: 'string',
      language: 'string',
      modelType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortType: 'string',
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

