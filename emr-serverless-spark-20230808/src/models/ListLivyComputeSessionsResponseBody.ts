// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeSessionsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the Livy Gateway.
   * 
   * @example
   * lc-xxxxxx
   */
  computeId?: string;
  /**
   * @remarks
   * The time when the session was created. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1768213240000
   */
  createTime?: number;
  /**
   * @remarks
   * The number of compute units (CUs) consumed during the task execution. This is an estimated value. The actual value is subject to the bill.
   * 
   * @example
   * 322.5
   */
  cuHours?: number;
  /**
   * @remarks
   * The time when the session ended. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1768213240000
   */
  endTime?: number;
  /**
   * @remarks
   * The runtime information.
   * 
   * @example
   * null
   */
  info?: string;
  /**
   * @remarks
   * The total amount of memory in MB allocated to the task multiplied by the number of seconds the task has been running.
   * 
   * @example
   * 1098888
   */
  mbSeconds?: number;
  /**
   * @remarks
   * The session name.
   * 
   * @example
   * test_session
   */
  name?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queue?: string;
  /**
   * @remarks
   * The ID of the Livy Gateway session.
   * 
   * @example
   * livy-xxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The Spark job configuration.
   * 
   * @example
   * {
   *     "proxyUser": "test",
   *     "conf": {
   *         "spark.driver.cores": 1
   *     }
   * }
   */
  sparkConf?: string;
  /**
   * @remarks
   * The session state.
   * 
   * - starting: The session is starting.
   * 
   * - running: The session is running.
   * 
   * - terminating: The session is being terminated.
   * 
   * - terminated: The session is terminated.
   * 
   * - error: The session failed.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The total number of vCores allocated to the task multiplied by the number of seconds the task has been running.
   * 
   * @example
   * 343
   */
  vcoreSeconds?: number;
  /**
   * @remarks
   * The web UI URL of the session.
   * 
   * @example
   * http://emr-spark-ui-cn-hangzhou.data.aliyun.com
   */
  webUI?: string;
  static names(): { [key: string]: string } {
    return {
      computeId: 'computeId',
      createTime: 'createTime',
      cuHours: 'cuHours',
      endTime: 'endTime',
      info: 'info',
      mbSeconds: 'mbSeconds',
      name: 'name',
      queue: 'queue',
      sessionId: 'sessionId',
      sparkConf: 'sparkConf',
      state: 'state',
      vcoreSeconds: 'vcoreSeconds',
      webUI: 'webUI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeId: 'string',
      createTime: 'number',
      cuHours: 'number',
      endTime: 'number',
      info: 'string',
      mbSeconds: 'number',
      name: 'string',
      queue: 'string',
      sessionId: 'string',
      sparkConf: 'string',
      state: 'string',
      vcoreSeconds: 'number',
      webUI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLivyComputeSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FAA8EEC-3026-5D15-8733-4E2A3DD970A1
   */
  requestId?: string;
  /**
   * @remarks
   * The list of sessions.
   */
  sessions?: ListLivyComputeSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessions: 'sessions',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': ListLivyComputeSessionsResponseBodySessions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

