// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeSessionsResponseBodySessions extends $dara.Model {
  /**
   * @example
   * lc-xxxxxx
   */
  computeId?: string;
  /**
   * @example
   * 1768213240000
   */
  createTime?: number;
  /**
   * @example
   * 322.5
   */
  cuHours?: number;
  /**
   * @example
   * 1768213240000
   */
  endTime?: number;
  /**
   * @example
   * null
   */
  info?: string;
  /**
   * @example
   * 1098888
   */
  mbSeconds?: number;
  /**
   * @example
   * test_session
   */
  name?: string;
  /**
   * @example
   * root_queue
   */
  queue?: string;
  /**
   * @example
   * livy-xxxxxx
   */
  sessionId?: string;
  /**
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
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * 343
   */
  vcoreSeconds?: number;
  /**
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
   * @example
   * 8FAA8EEC-3026-5D15-8733-4E2A3DD970A1
   */
  requestId?: string;
  sessions?: ListLivyComputeSessionsResponseBodySessions[];
  /**
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

