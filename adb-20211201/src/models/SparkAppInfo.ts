// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Detail } from "./Detail";


export class SparkAppInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * @example
   * s202207151211hz0c****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the Spark application.
   * 
   * @example
   * SparkTest
   */
  appName?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * amv-23xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about the Spark application.
   */
  detail?: Detail;
  /**
   * @remarks
   * The alert message returned, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * WARN: Disk is full.
   */
  message?: string;
  /**
   * @remarks
   * The priority of the Spark application.
   * 
   * @example
   * NORMAL
   */
  priority?: string;
  /**
   * @remarks
   * The state of the Spark application. Valid values:
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
      DBClusterId: 'DBClusterId',
      detail: 'Detail',
      message: 'Message',
      priority: 'Priority',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      DBClusterId: 'string',
      detail: Detail,
      message: 'string',
      priority: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

