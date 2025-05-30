// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppStateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202204191546hzpread6a896000****
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
   * amv-clusterxxx
   */
  DBClusterId?: string;
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

