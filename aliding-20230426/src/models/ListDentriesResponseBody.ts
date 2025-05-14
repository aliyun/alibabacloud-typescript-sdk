// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDentriesResponseBodyDentries } from "./ListDentriesResponseBodyDentries";


export class ListDentriesResponseBody extends $dara.Model {
  dentries?: ListDentriesResponseBodyDentries[];
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      dentries: 'dentries',
      nextToken: 'nextToken',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentries: { 'type': 'array', 'itemType': ListDentriesResponseBodyDentries },
      nextToken: 'string',
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dentries)) {
      $dara.Model.validateArray(this.dentries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

