// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * 22/04/22 15:30:49 INFO Utils: Start the dump task because s202206061441hz22a35ab000****-0001 app end, the interval is 238141ms;22/04/22 15:30:49 INFO AbstractConnector: Stopped Spark@5e774d9d{HTTP/1.1, (http/1.1)}{0.0.0.0:4040}
   */
  logContent?: string;
  /**
   * @remarks
   * The number of log entries. A value of 0 indicates that no valid logs are returned.
   * 
   * @example
   * 3517972480
   */
  logSize?: number;
  /**
   * @remarks
   * The alert message returned for the request, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * WARNING:  log file maybe deleted, please check oss path: oss://TestBucketName/applog/
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logContent: 'LogContent',
      logSize: 'LogSize',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logContent: 'string',
      logSize: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

