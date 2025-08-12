// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupServersAttributeResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
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

