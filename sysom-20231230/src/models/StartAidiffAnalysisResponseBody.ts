// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates that authorization succeeded.  
   * - Other status codes indicate that authorization failed. When authorization fails, view the `message` field to obtain detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * AI differential analysis result data
   * 
   * @example
   * "[
   *   {
   *       name: "xxx", #算子名称
   *       before_time: 2, # 前者总耗时
   *       after_time: 4, # 后者总耗时
   *       time_diff: 2,  # 耗时差异
   *       before_time_perc: "80%", # 前者总耗时百分比
   *       after_time_perc: "23%", # 后者总耗时百分比
   *       time_perc_diff: "-54%",  # 耗时差异
   *       before_count: 1, # 前者总调用差异
   *       after_count: 2,  # 后者总调用差异
   *       count_diff: 1,   # 调用差异
   *       before_count_perc: "56%", # 前者总调用差异
   *       after_count_perc: "32%",  # 后者总调用差异
   *       count_perc_diff: "44%",   # 调用差异
   *   },
   *   {...}
   * ]"
   */
  data?: string;
  /**
   * @remarks
   * Error message description; empty if no error occurred
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

