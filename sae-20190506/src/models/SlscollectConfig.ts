// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SLSCollectConfig extends $dara.Model {
  /**
   * @remarks
   * The log path.
   * 
   * @example
   * /test
   */
  logPath?: string;
  /**
   * @remarks
   * The log type. The following types of logs are supported:
   * 
   * *   File collection logs
   * *   Standard output logs
   * 
   * @example
   * file_log
   */
  logType?: string;
  /**
   * @remarks
   * The name of the Logstore. The name must meet the following requirements:
   * 
   * *   The name must be unique in a project.
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * @example
   * sag-shanghai
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name for the Logtail configuration.
   * 
   * @example
   * ******-access-log-collector
   */
  logtailName?: string;
  /**
   * @remarks
   * The name of the machine group of Simple Log Service.
   * 
   * @example
   * Log Service Group
   */
  machineGroup?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * test
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logPath: 'LogPath',
      logType: 'LogType',
      logstoreName: 'LogstoreName',
      logtailName: 'LogtailName',
      machineGroup: 'MachineGroup',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logPath: 'string',
      logType: 'string',
      logstoreName: 'string',
      logtailName: 'string',
      machineGroup: 'string',
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

