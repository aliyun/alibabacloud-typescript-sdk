// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeylessServerResponseBody extends $dara.Model {
  caCertificate?: string;
  clientCertificate?: string;
  clientPrivateKey?: string;
  createTime?: string;
  host?: string;
  id?: string;
  name?: string;
  port?: number;
  requestId?: string;
  siteId?: number;
  siteName?: string;
  updateTime?: string;
  verify?: boolean;
  static names(): { [key: string]: string } {
    return {
      caCertificate: 'CaCertificate',
      clientCertificate: 'ClientCertificate',
      clientPrivateKey: 'ClientPrivateKey',
      createTime: 'CreateTime',
      host: 'Host',
      id: 'Id',
      name: 'Name',
      port: 'Port',
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      updateTime: 'UpdateTime',
      verify: 'Verify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificate: 'string',
      clientCertificate: 'string',
      clientPrivateKey: 'string',
      createTime: 'string',
      host: 'string',
      id: 'string',
      name: 'string',
      port: 'number',
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
      updateTime: 'string',
      verify: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

