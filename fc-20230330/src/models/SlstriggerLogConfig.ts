// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SLSTriggerLogConfig extends $dara.Model {
  /**
   * @example
   * my-sls-logstore-name
   */
  logstore?: string;
  /**
   * @example
   * my-sls-project-name
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

