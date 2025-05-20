// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDentriesInfoResponseBodyDentry } from "./QueryDentriesInfoResponseBodyDentry";


export class QueryDentriesInfoResponseBody extends $dara.Model {
  dentry?: QueryDentriesInfoResponseBodyDentry;
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
      dentry: 'Dentry',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentry: QueryDentriesInfoResponseBodyDentry,
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.dentry && typeof (this.dentry as any).validate === 'function') {
      (this.dentry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

