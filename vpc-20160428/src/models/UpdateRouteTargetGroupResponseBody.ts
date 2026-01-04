// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteTargetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

