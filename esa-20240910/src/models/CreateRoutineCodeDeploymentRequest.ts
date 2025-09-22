// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentRequestCodeVersions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1723599747213377175
   */
  codeVersion?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  codeVersions?: CreateRoutineCodeDeploymentRequestCodeVersions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
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

