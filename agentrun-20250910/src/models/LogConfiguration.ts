// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogConfiguration extends $dara.Model {
  /**
   * @remarks
   * SLS日志库名称
   * 
   * @example
   * agent-runtime-logs
   */
  logstore?: string;
  /**
   * @remarks
   * SLS项目名称
   * 
   * @example
   * agent-runtime-logs
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

