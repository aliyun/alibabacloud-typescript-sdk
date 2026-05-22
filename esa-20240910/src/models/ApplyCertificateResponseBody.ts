// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateResponseBodyResult extends $dara.Model {
  domain?: string;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      id: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCertificateResponseBody extends $dara.Model {
  requestId?: string;
  result?: ApplyCertificateResponseBodyResult[];
  siteName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ApplyCertificateResponseBodyResult },
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

