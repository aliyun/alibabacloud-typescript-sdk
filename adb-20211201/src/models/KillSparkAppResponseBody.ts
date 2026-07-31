// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillSparkAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202204132018hzprec1ac****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
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
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * [Advisor] Advisor feature is not available for instance: amv-bp11q28kvl688****
   */
  message?: string;
  /**
   * @remarks
   * The execution state of the Spark application. Valid values:
   * 
   * *   **SUBMITTED**
   * *   **STARTING**
   * *   **RUNNING**
   * *   **FAILING**
   * *   **FAILED**
   * *   **KILLING**
   * *   **KILLED**
   * *   **SUCCEEDING**
   * *   **COMPLETED**
   * *   **FATAL**
   * *   **UNKNOWN**
   * 
   * @example
   * KILLED
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

export class KillSparkAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: KillSparkAppResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69D0810B-F9F5-5F4C-A57F-DF36133B63C9
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
      data: KillSparkAppResponseBodyData,
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

