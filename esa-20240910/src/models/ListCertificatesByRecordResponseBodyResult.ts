// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCertificatesByRecordResponseBodyResultCertificates } from "./ListCertificatesByRecordResponseBodyResultCertificates";


export class ListCertificatesByRecordResponseBodyResult extends $dara.Model {
  applylingCount?: number;
  certificates?: ListCertificatesByRecordResponseBodyResultCertificates[];
  count?: number;
  recordName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applylingCount: 'ApplylingCount',
      certificates: 'Certificates',
      count: 'Count',
      recordName: 'RecordName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applylingCount: 'number',
      certificates: { 'type': 'array', 'itemType': ListCertificatesByRecordResponseBodyResultCertificates },
      count: 'number',
      recordName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

