// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthorizationResponseBodyResult extends $dara.Model {
  aliyunUid?: number;
  authorizeCode?: string;
  authorizeStatus?: boolean;
  authorizeTime?: string;
  productCode?: string;
  unAuthorizeTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      authorizeCode: 'AuthorizeCode',
      authorizeStatus: 'AuthorizeStatus',
      authorizeTime: 'AuthorizeTime',
      productCode: 'ProductCode',
      unAuthorizeTime: 'UnAuthorizeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      authorizeCode: 'string',
      authorizeStatus: 'boolean',
      authorizeTime: 'string',
      productCode: 'string',
      unAuthorizeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

