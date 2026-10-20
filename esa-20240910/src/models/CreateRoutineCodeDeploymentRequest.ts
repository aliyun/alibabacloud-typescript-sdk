// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentRequestCodeVersions extends $dara.Model {
  /**
   * @remarks
   * The code version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1723599747213377175
   */
  codeVersion?: string;
  /**
   * @remarks
   * The traffic percentage for the canary release of the code version. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineCodeDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of code version configurations for the percentage-based canary release. You can specify up to two code versions, and the sum of the percentages must be equal to 100.
   * 
   * This parameter is required.
   */
  codeVersions?: CreateRoutineCodeDeploymentRequestCodeVersions[];
  /**
   * @remarks
   * The environment name. Valid values:
   * - `staging`: the staging environment.
   * - `production`: the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @remarks
   * The name of the Edge Routine.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The deployment strategy. Valid values:
   * - `percentage`: percentage mode.
   * 
   * This parameter is required.
   * 
   * @example
   * percentage
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersions: 'CodeVersions',
      env: 'Env',
      name: 'Name',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersions: { 'type': 'array', 'itemType': CreateRoutineCodeDeploymentRequestCodeVersions },
      env: 'string',
      name: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codeVersions)) {
      $dara.Model.validateArray(this.codeVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

