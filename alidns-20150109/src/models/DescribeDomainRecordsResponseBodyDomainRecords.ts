// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRecordsResponseBodyDomainRecordsRecord } from "./DescribeDomainRecordsResponseBodyDomainRecordsRecord";


export class DescribeDomainRecordsResponseBodyDomainRecords extends $dara.Model {
  record?: DescribeDomainRecordsResponseBodyDomainRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeDomainRecordsResponseBodyDomainRecordsRecord },
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

