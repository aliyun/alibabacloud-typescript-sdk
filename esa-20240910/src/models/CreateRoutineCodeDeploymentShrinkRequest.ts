// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration list of phased release version numbers. A maximum of two versions are supported, and the sum of the total proportions is equal to 100.
   * 
   * This parameter is required.
   */
  codeVersionsShrink?: string;
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
      codeVersionsShrink: 'CodeVersions',
      env: 'Env',
      name: 'Name',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersionsShrink: 'string',
      env: 'string',
      name: 'string',
      strategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

