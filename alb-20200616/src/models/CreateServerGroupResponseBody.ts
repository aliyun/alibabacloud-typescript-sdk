// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF******
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-8ilqs4axp6******
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

