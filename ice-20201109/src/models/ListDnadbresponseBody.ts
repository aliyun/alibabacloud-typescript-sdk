// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDNADBResponseBodyDBList } from "./ListDnadbresponseBodyDblist";


export class ListDNADBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried media fingerprint libraries.
   */
  DBList?: ListDNADBResponseBodyDBList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBList: 'DBList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBList: { 'type': 'array', 'itemType': ListDNADBResponseBodyDBList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBList)) {
      $dara.Model.validateArray(this.DBList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

