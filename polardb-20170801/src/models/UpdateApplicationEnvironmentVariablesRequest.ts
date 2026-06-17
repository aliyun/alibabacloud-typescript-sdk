// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationEnvironmentVariablesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the update. The default value is true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * A mapping from environment variable names to values.
   * 
   * @example
   * {
   *     "ENV_TEST": "test-value"
   * }
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      restart: 'Restart',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      restart: 'boolean',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

