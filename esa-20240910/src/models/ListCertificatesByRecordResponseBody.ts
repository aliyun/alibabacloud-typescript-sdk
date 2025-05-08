// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCertificatesByRecordResponseBodyResult } from "./ListCertificatesByRecordResponseBodyResult";


export class ListCertificatesByRecordResponseBody extends $dara.Model {
  requestId?: string;
  result?: ListCertificatesByRecordResponseBodyResult[];
  siteId?: number;
  siteName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCertificatesByRecordResponseBodyResult },
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

