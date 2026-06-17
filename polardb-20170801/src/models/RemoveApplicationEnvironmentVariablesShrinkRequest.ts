// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApplicationEnvironmentVariablesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-********************
   */
  applicationId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after removing the variables. The default is `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * A list of the environment variable names to remove.
   * 
   * This parameter is required.
   */
  variableNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      restart: 'Restart',
      variableNamesShrink: 'VariableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      restart: 'boolean',
      variableNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

