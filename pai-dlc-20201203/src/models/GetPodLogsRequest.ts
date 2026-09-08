// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPodLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters logs by specified containers. Separate multiple container names with commas (,).
   * 
   * @example
   * pytorch,aimaster-worker
   */
  containers?: string;
  /**
   * @remarks
   * Specifies whether to download the log file. Valid values:
   * - false (default): The log file is not downloaded.
   * - true: The log file is downloaded.
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
   * The maximum number of log lines to return. Default value: 2000.
   * 
   * @example
   * 100
   */
  maxLines?: number;
  /**
   * @remarks
   * The node UID. For information about how to obtain the node UID, see [GetJob](https://help.aliyun.com/document_detail/459677.html).
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
      containers: 'Containers',
      downloadToFile: 'DownloadToFile',
      endTime: 'EndTime',
      maxLines: 'MaxLines',
      podUid: 'PodUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: 'string',
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

