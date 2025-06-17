// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFCTriggerResponseBodyFCTriggers } from "./ListFctriggerResponseBodyFctriggers";


export class ListFCTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Function Compute triggers that are set for Alibaba Cloud CDN events.
   */
  FCTriggers?: ListFCTriggerResponseBodyFCTriggers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FCTriggers: 'FCTriggers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCTriggers: { 'type': 'array', 'itemType': ListFCTriggerResponseBodyFCTriggers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.FCTriggers)) {
      $dara.Model.validateArray(this.FCTriggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

