// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  codeVersionsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * production
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
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

