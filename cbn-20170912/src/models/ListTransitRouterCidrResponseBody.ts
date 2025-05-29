// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterCidrResponseBodyCidrLists } from "./ListTransitRouterCidrResponseBodyCidrLists";


export class ListTransitRouterCidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the CIDR block.
   */
  cidrLists?: ListTransitRouterCidrResponseBodyCidrLists[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0876E54E-3E36-5C31-89F0-9EE8A9266F9A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrLists: 'CidrLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrLists: { 'type': 'array', 'itemType': ListTransitRouterCidrResponseBodyCidrLists },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrLists)) {
      $dara.Model.validateArray(this.cidrLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

