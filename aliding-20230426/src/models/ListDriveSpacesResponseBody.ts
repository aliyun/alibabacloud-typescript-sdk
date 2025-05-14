// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDriveSpacesResponseBodySpaces } from "./ListDriveSpacesResponseBodySpaces";


export class ListDriveSpacesResponseBody extends $dara.Model {
  /**
   * @example
   * fekaf
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  spaces?: ListDriveSpacesResponseBodySpaces[];
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
      nextToken: 'nextToken',
      requestId: 'requestId',
      spaces: 'spaces',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      spaces: { 'type': 'array', 'itemType': ListDriveSpacesResponseBodySpaces },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.spaces)) {
      $dara.Model.validateArray(this.spaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

