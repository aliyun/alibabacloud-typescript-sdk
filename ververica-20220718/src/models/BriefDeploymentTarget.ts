// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BriefDeploymentTarget extends $dara.Model {
  /**
   * @remarks
   * The deployment mode.
   * 
   * @example
   * PER_JOB
   */
  mode?: string;
  /**
   * @remarks
   * The name of the queue used for the deployment.
   * 
   * @example
   * vvp-workload
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

