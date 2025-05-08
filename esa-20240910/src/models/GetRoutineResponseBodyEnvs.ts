// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineResponseBodyEnvs extends $dara.Model {
  /**
   * @remarks
   * The regions for canary release.
   */
  canaryAreaList?: string[];
  /**
   * @remarks
   * The version number for canary release.
   * 
   * @example
   * 1710120201067577628
   */
  canaryCodeVersion?: string;
  /**
   * @remarks
   * The version number of the code in the environment.
   * 
   * @example
   * 1710120201067577628
   */
  codeVersion?: string;
  /**
   * @remarks
   * The environment type.
   * 
   * @example
   * production
   */
  env?: string;
  static names(): { [key: string]: string } {
    return {
      canaryAreaList: 'CanaryAreaList',
      canaryCodeVersion: 'CanaryCodeVersion',
      codeVersion: 'CodeVersion',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canaryAreaList: { 'type': 'array', 'itemType': 'string' },
      canaryCodeVersion: 'string',
      codeVersion: 'string',
      env: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canaryAreaList)) {
      $dara.Model.validateArray(this.canaryAreaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

