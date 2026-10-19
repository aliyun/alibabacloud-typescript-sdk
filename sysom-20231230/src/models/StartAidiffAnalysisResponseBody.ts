// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIDiffAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If code is Success, the authorization is successful.
   * - Other status codes indicate that the authorization has failed. Check the message field for the detailed fault information.
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
   *       name: "xxx", # Operator name
   *       before_time: 2, # Total time of the former
   *       after_time: 4, # Total time of the latter
   *       time_diff: 2,  # Time difference
   *       before_time_perc: "80%", # Total time percentage of the former
   *       after_time_perc: "23%", # Total time percentage of the latter
   *       time_perc_diff: "-54%",  # Time percentage difference
   *       before_count: 1, # Total call count of the former
   *       after_count: 2,  # Total call count of the latter
   *       count_diff: 1,   # Call count difference
   *       before_count_perc: "56%", # Total call percentage of the former
   *       after_count_perc: "32%",  # Total call percentage of the latter
   *       count_perc_diff: "44%",   # Call percentage difference
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

