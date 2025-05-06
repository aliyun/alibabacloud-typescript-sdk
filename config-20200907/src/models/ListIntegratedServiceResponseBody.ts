// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIntegratedServiceResponseBodyData } from "./ListIntegratedServiceResponseBodyData";


export class ListIntegratedServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the cloud service that can be integrated.
   */
  data?: ListIntegratedServiceResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86DB52A5-0C25-505A-96D5-9BAE1EFA00B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIntegratedServiceResponseBodyData },
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

