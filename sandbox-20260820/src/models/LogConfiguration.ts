// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogConfiguration extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore that receives sandbox runtime logs.
   * 
   * @example
   * sandbox-runtime
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project that receives sandbox runtime logs.
   * 
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

