// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApplicationEnvironmentVariablesRequest extends $dara.Model {
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
  variableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      restart: 'Restart',
      variableNames: 'VariableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      restart: 'boolean',
      variableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.variableNames)) {
      $dara.Model.validateArray(this.variableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

