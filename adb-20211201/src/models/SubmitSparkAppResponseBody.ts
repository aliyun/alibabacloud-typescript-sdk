// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSparkAppResponseBodyData extends $dara.Model {
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
   * The name of the application.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @remarks
   * The alert message returned for the operation, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * Insufficient resources.
   */
  message?: string;
  /**
   * @remarks
   * The execution state of the application. Valid values:
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
   * SUBMITTED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
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

export class SubmitSparkAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: SubmitSparkAppResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
      data: SubmitSparkAppResponseBodyData,
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

