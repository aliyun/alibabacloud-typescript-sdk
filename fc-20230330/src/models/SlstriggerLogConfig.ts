// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SLSTriggerLogConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore. Exceptions and function execution statistics during function triggering are recorded in the Logstore.
   * 
   * @example
   * my-sls-logstore-name
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project. Exceptions that occur during function triggering and execution statistics are recorded in the Logstore under the project.
   * 
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

