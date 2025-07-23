// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

