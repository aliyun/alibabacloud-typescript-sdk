// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainInfoResponseBodyRecordLinesRecordLine } from "./DescribeDomainInfoResponseBodyRecordLinesRecordLine";


export class DescribeDomainInfoResponseBodyRecordLines extends $dara.Model {
  recordLine?: DescribeDomainInfoResponseBodyRecordLinesRecordLine[];
  static names(): { [key: string]: string } {
    return {
      recordLine: 'RecordLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLine: { 'type': 'array', 'itemType': DescribeDomainInfoResponseBodyRecordLinesRecordLine },
    };
  }

  validate() {
    if(Array.isArray(this.recordLine)) {
      $dara.Model.validateArray(this.recordLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

