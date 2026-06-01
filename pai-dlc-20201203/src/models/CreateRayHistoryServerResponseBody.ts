// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRayHistoryServerResponseBody extends $dara.Model {
  /**
   * @example
   * rhsxxxx
   */
  rayHistoryServerId?: string;
  /**
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

