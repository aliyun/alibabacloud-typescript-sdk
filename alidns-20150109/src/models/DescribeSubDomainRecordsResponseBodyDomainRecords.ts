// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubDomainRecordsResponseBodyDomainRecordsRecord } from "./DescribeSubDomainRecordsResponseBodyDomainRecordsRecord";


export class DescribeSubDomainRecordsResponseBodyDomainRecords extends $dara.Model {
  record?: DescribeSubDomainRecordsResponseBodyDomainRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeSubDomainRecordsResponseBodyDomainRecordsRecord },
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

