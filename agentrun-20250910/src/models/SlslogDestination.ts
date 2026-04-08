// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SLSLogDestination extends $dara.Model {
  /**
   * @remarks
   * SLS日志库名称
   * 
   * @example
   * my-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * SLS项目名称
   * 
   * @example
   * my-sls-project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'logStore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
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

