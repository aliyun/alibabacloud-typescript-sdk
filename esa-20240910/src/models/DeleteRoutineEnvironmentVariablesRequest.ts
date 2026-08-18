// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoutineEnvironmentVariablesRequest extends $dara.Model {
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
  environmentVariableKeys?: string[];
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
      environmentVariableKeys: 'EnvironmentVariableKeys',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      environmentVariableKeys: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environmentVariableKeys)) {
      $dara.Model.validateArray(this.environmentVariableKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

