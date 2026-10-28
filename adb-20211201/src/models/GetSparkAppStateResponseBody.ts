// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppStateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * s202204191546hzpread6a896000****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp1h405854m****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The alert message returned, such as task execution failure or insufficient resources. This parameter is empty if no alerts are generated.
   * 
   * @example
   * Insufficient resources.
   */
  message?: string;
  /**
   * @remarks
   * The execution status of the application. Valid values:
   * - **SUBMITTED**: Submitted.
   * - **STARTING**: Starting.
   * - **RUNNING**: Running.
   * - **FAILING**: Failing. The task failed and the environment is being cleaned up.
   * - **FAILED**: Failed.
   * - **KILLING**: Killing. The task is being terminated and the environment is being cleaned up.
   * - **KILLED**: Killed.
   * - **SUCCEEDING**: Succeeding. The task execution is complete and the environment is being cleaned up.
   * - **COMPLETED**: Completed.
   * - **FATAL**: Fatal error.
   * - **UNKNOWN**: Unknown error.
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      DBClusterId: 'DBClusterId',
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      DBClusterId: 'string',
      message: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppStateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
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
      data: GetSparkAppStateResponseBodyData,
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

