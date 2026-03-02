// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceGroupForServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  serviceIds?: number[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

