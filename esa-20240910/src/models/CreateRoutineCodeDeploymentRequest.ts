// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentRequestCodeVersions extends $dara.Model {
  /**
   * @remarks
   * The version of the code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1723599747213377175
   */
  codeVersion?: string;
  /**
   * @remarks
   * The phased release ratio of the code version. Valid values: 1 to 100.
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
   * The configuration list of phased release version numbers. A maximum of two versions are supported, and the sum of the total proportions is equal to 100.
   * 
   * This parameter is required.
   */
  codeVersions?: CreateRoutineCodeDeploymentRequestCodeVersions[];
  /**
   * @remarks
   * The name of the environment. Only supports test environment `staging` or production environment `production`.
   * 
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @remarks
   * The function name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The deployment policy. Valid value: percentage.
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

