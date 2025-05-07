// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SLSCollectConfig extends $dara.Model {
  logPath?: string;
  logType?: string;
  logstoreName?: string;
  logtailName?: string;
  machineGroup?: string;
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

