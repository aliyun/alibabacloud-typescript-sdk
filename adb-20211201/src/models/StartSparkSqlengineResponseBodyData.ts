// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSparkSQLEngineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark job.
   * 
   * @example
   * s202301xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the Spark application.
   * 
   * @example
   * SQLEngine1
   */
  appName?: string;
  /**
   * @remarks
   * The state of the Spark SQL engine. Valid values:
   * 
   * *   SUBMITTED
   * *   STARTING
   * *   RUNNING
   * *   FAILED
   * 
   * @example
   * SUBMITTED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
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

