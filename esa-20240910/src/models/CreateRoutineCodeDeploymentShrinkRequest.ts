// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineCodeDeploymentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of percentage-based canary release version configurations. A maximum of two versions are supported, and the total percentage must equal 100.
   * 
   * This parameter is required.
   */
  codeVersionsShrink?: string;
  /**
   * @remarks
   * The environment name.  
   * Valid values:
   * - `staging`: staging environment 
   * - `production`: production environment
   * 
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @remarks
   * The name of the Edge Function Routine.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The deployment strategy.  
   * Valid values:
   * - `percentage`: percentage mode
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

