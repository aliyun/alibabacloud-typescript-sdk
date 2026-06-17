// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationEnvironmentVariablesShrinkRequest extends $dara.Model {
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
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      restart: 'Restart',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      restart: 'boolean',
      variablesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

