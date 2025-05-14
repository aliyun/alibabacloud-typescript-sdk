// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMessageResponseBodyData } from "./ListMessageResponseBodyData";


export class ListMessageResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ListMessageResponseBodyData[];
  /**
   * @example
   * list
   */
  object?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      object: 'object',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMessageResponseBodyData },
      object: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

