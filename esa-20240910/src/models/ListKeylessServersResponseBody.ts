// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeylessServersResponseBodyResult extends $dara.Model {
  caCertificate?: string;
  clientCertificate?: string;
  clientPrivateKey?: string;
  createTime?: string;
  host?: string;
  id?: string;
  name?: string;
  port?: number;
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

export class ListKeylessServersResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  result?: ListKeylessServersResponseBodyResult[];
  siteId?: number;
  siteName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListKeylessServersResponseBodyResult },
      siteId: 'number',
      siteName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

