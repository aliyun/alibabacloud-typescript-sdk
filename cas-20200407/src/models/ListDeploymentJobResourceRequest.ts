// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

