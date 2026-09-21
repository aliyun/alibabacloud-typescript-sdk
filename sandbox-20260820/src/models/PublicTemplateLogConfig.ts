// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateLogConfig extends $dara.Model {
  /**
   * @example
   * sandbox-runtime
   */
  logstore?: string;
  /**
   * @example
   * sandbox-log-cn-hangzhou
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

