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
   * LAKEHOUSE-1-1
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp1c3em7b2e****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * [Advisor] Advisor feature is not available for instance: am-2ze292w4fyglwxxxx
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
   * running
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

