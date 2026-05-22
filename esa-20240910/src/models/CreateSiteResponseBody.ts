// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteResponseBody extends $dara.Model {
  nameServerList?: string;
  requestId?: string;
  siteId?: number;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      nameServerList: 'NameServerList',
      requestId: 'RequestId',
      siteId: 'SiteId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServerList: 'string',
      requestId: 'string',
      siteId: 'number',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

