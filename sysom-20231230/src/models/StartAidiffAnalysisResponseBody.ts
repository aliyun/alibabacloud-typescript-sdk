// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that authorization is successful.
   * - Other status codes indicate authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The AI differential analysis result data.
   * 
   * @example
   * "[
   *   {
   *       name: "xxx", #operator name
   *       before_time: 2, # total time of the former
   *       after_time: 4, # total time of the latter
   *       time_diff: 2,  # time difference
   *       before_time_perc: "80%", # total time percentage of the former
   *       after_time_perc: "23%", # total time percentage of the latter
   *       time_perc_diff: "-54%",  # time percentage difference
   *       before_count: 1, # total call count of the former
   *       after_count: 2,  # total call count of the latter
   *       count_diff: 1,   # call count difference
   *       before_count_perc: "56%", # total call percentage of the former
   *       after_count_perc: "32%",  # total call percentage of the latter
   *       count_perc_diff: "44%",   # call percentage difference
   *   },
   *   {...}
   * ]"
   */
  data?: string;
  /**
   * @remarks
   * The error code description. This field is empty if no error occurs.
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

