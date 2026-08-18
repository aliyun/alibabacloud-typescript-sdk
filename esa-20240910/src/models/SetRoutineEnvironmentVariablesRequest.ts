// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentVariablesValue } from "./EnvironmentVariablesValue";


export class SetRoutineEnvironmentVariablesRequest extends $dara.Model {
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
  environmentVariables?: { [key: string]: EnvironmentVariablesValue };
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
      environmentVariables: 'EnvironmentVariables',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': EnvironmentVariablesValue },
      name: 'string',
    };
  }

  validate() {
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

