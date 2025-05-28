// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFundAccountResponseBodyData } from "./ListFundAccountResponseBodyData";


export class ListFundAccountResponseBody extends $dara.Model {
  data?: ListFundAccountResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFundAccountResponseBodyData },
      metadata: 'any',
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

