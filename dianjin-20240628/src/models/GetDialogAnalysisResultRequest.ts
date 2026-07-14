// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogAnalysisResultRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to sort in ascending order. Default is true, which sorts by session creation time in ascending order. If false, sorts in descending order.
   * 
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * The end time, which must be in yyyy-MM-dd HH:mm:ss format. If sessionIds are provided, the system queries session analysis results based on these IDs.
   * 
   * @example
   * 2024-09-23 09:20:02
   */
  endTime?: string;
  /**
   * @remarks
   * Session ID list. When useUrl is true, the response includes OSS URLs. You can specify up to 1000 sessions. If you specify more than 1000, only the first 1000 are processed. When useUrl is false, the response includes full analysis results. You can specify up to 10 sessions. If you specify more than 10, only the first 10 are processed. This parameter is optional. If sessionIds is empty, the API retrieves results for sessions created between startTime and endTime. If sessionIds is not empty, the API retrieves results for the specified sessions. You cannot leave both sessionIds and the time range empty.
   */
  sessionIds?: string[];
  /**
   * @remarks
   * Start time in yyyy-MM-dd HH:mm:ss format. If sessionIds is not empty, you can query the session analysis results using the specified session IDs.
   * 
   * @example
   * 2024-09-14 09:11:00
   */
  startTime?: string;
  /**
   * @remarks
   * Whether to return an OSS URL instead of full analysis results. If true, the response includes an OSS URL that expires in one hour. Default is true. Supports up to 1000 sessions. If you specify more than 1000, only the first 1000 are processed. If false, the response includes full analysis results. Supports up to 10 sessions. If you specify more than 10, only the first 10 are processed.
   * 
   * @example
   * true
   */
  useUrl?: boolean;
  static names(): { [key: string]: string } {
    return {
      asc: 'asc',
      endTime: 'endTime',
      sessionIds: 'sessionIds',
      startTime: 'startTime',
      useUrl: 'useUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'string',
      sessionIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      useUrl: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.sessionIds)) {
      $dara.Model.validateArray(this.sessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

