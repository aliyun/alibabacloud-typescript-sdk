// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlsStatusNewResponseBody extends $dara.Model {
  authorizeStatus?: boolean;
  openStatus?: boolean;
  prodCode?: string;
  requestId?: string;
  saveTime?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeStatus: 'AuthorizeStatus',
      openStatus: 'OpenStatus',
      prodCode: 'ProdCode',
      requestId: 'RequestId',
      saveTime: 'SaveTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeStatus: 'boolean',
      openStatus: 'boolean',
      prodCode: 'string',
      requestId: 'string',
      saveTime: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

