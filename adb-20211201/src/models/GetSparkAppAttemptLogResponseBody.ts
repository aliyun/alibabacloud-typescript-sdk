// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppAttemptLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * s202204132018hzprec1ac61a000****
   */
  appId?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp1bg858bo8c****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * 22/04/22 15:30:49 INFO Utils: Start the dump task because s202207151211hz****-0001 app end, the interval is 238141ms;22/04/22 15:30:49 INFO AbstractConnector: Stopped Spark@5e774d9d{HTTP/1.1, (http/1.1)}{0.0.0.0:4040}
   */
  logContent?: string;
  /**
   * @remarks
   * The number of log lines. A value of 0 indicates that no valid logs exist.
   * 
   * @example
   * 775946240
   */
  logSize?: number;
  /**
   * @remarks
   * The alert message, such as task execution failure or insufficient resources. This parameter is empty if no alert is generated.
   * 
   * @example
   * WARNING: log file maybe deleted, please check oss path: oss://TestBucketName/applog/
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      logContent: 'LogContent',
      logSize: 'LogSize',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

export class GetSparkAppAttemptLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppAttemptLogResponseBodyData;
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
      data: GetSparkAppAttemptLogResponseBodyData,
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

