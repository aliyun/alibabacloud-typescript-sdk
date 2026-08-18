// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineEnvironmentVariablesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The environment name.
   * 
   * Valid values:
   * - `staging`: staging environment
   * - `production`: production environment
   * 
   * This parameter is required.
   * 
   * @example
   * production
   */
  env?: string;
  /**
   * @remarks
   * The list of environment variable keys to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ["LOG_LEVEL"]
   */
  environmentVariableKeysShrink?: string;
  /**
   * @remarks
   * The name of the Routine function.
   * 
   * This parameter is required.
   * 
   * @example
   * my-routine
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      environmentVariableKeysShrink: 'EnvironmentVariableKeys',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      environmentVariableKeysShrink: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

