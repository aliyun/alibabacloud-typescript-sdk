// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPodLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to download the log file. Default value: false. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  downloadToFile?: boolean;
  /**
   * @remarks
   * The end time of the query. Default value: current time.
   * 
   * @example
   * 2020-11-08T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of log entries. Default value: 2000.
   * 
   * @example
   * 100
   */
  maxLines?: number;
  /**
   * @remarks
   * The node UID. For more information about how to obtain a node UID, see [GetJob](https://help.aliyun.com/document_detail/459677.html).
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57****
   */
  podUid?: string;
  /**
   * @remarks
   * The start time of the query. Default value: 7 days ago.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      downloadToFile: 'DownloadToFile',
      endTime: 'EndTime',
      maxLines: 'MaxLines',
      podUid: 'PodUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadToFile: 'boolean',
      endTime: 'string',
      maxLines: 'number',
      podUid: 'string',
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

