// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricsCollectConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to push metric data to Simple Log Service. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enablePushToUserSLS?: boolean;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service to which the metric data is pushed.
   * 
   * @example
   * my-sls-logstorename
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service to which the metric data is pushed.
   * 
   * @example
   * my-sls-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      enablePushToUserSLS: 'EnablePushToUserSLS',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePushToUserSLS: 'boolean',
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

