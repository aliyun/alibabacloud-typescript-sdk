// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * 22/04/22 15:30:49 INFO Utils: Start the dump task because s202206061441hz22a35ab000****-0001 app end, the interval is 238141ms;22/04/22 15:30:49 INFO AbstractConnector: Stopped Spark@5e774d9d{HTTP/1.1, (http/1.1)}{0.0.0.0:4040}
   */
  logContent?: string;
  /**
   * @remarks
   * The number of log lines. A value of 0 indicates that no valid logs exist.
   * 
   * @example
   * 3517972480
   */
  logSize?: number;
  /**
   * @remarks
   * The alert information, such as task execution failure or insufficient resources. If no alerts are triggered, an empty value is returned.
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

export class GetSparkAppLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log details.
   */
  data?: GetSparkAppLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppLogResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

