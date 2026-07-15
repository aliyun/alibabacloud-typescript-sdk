// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRayHistoryServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created Ray History Server.
   * 
   * @example
   * rhsxxxx
   */
  rayHistoryServerId?: string;
  /**
   * @remarks
   * The request ID of this call, used for diagnostics and troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rayHistoryServerId: 'RayHistoryServerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rayHistoryServerId: 'string',
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

