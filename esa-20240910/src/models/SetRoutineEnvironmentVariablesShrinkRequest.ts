// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRoutineEnvironmentVariablesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The environment name. Valid values:
   * - `staging`: staging environment.
   * - `production`: production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * production
   */
  env?: string;
  /**
   * @remarks
   * The dictionary of environment variables. The key is the environment variable name, and the value is the environment variable value.
   * 
   * This parameter is required.
   * 
   * @example
   * "EnvironmentVariables": {
   *         "Env_Key_1": {
   *             "Type": "plain_text",
   *             "Value": "value"
   *         },
   *         "PASSWORD": {
   *             "Type": "secret_text",
   *             "Value": "secret-password"
   *         }
   *     }
   */
  environmentVariablesShrink?: string;
  /**
   * @remarks
   * The function name.
   * 
   * This parameter is required.
   * 
   * @example
   * er_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      environmentVariablesShrink: 'EnvironmentVariables',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      environmentVariablesShrink: 'string',
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

