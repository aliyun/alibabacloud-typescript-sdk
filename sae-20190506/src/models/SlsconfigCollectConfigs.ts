// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SLSConfigCollectConfigs extends $dara.Model {
  logPath?: string;
  logType?: string;
  logstoreName?: string;
  logtailName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logPath: 'logPath',
      logType: 'logType',
      logstoreName: 'logstoreName',
      logtailName: 'logtailName',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logPath: 'string',
      logType: 'string',
      logstoreName: 'string',
      logtailName: 'string',
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

