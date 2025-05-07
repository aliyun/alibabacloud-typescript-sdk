// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricsCollectConfig extends $dara.Model {
  enablePushToUserSLS?: boolean;
  /**
   * @example
   * my-sls-logstorename
   */
  logstoreName?: string;
  /**
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

