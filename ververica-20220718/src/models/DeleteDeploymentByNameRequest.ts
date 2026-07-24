// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDeploymentByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the deployed job, which is typically specified by the user when submitting the job.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  deploymentName?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentName: 'deploymentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

