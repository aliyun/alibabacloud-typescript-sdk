// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDNADBResponseBodyDBInfo } from "./CreateDnadbresponseBodyDbinfo";


export class CreateDNADBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media fingerprint library.
   */
  DBInfo?: CreateDNADBResponseBodyDBInfo;
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
      DBInfo: 'DBInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInfo: CreateDNADBResponseBodyDBInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInfo && typeof (this.DBInfo as any).validate === 'function') {
      (this.DBInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

