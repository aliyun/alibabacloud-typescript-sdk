// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Body } from "./Body";


export class DetectImageBodiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The human bodies.
   */
  bodies?: Body[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 501339F9-4B70-0CE2-AB8C-866C********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bodies: 'Bodies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodies: { 'type': 'array', 'itemType': Body },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bodies)) {
      $dara.Model.validateArray(this.bodies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

