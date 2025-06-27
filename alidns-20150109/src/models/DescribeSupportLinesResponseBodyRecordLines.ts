// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSupportLinesResponseBodyRecordLinesRecordLine } from "./DescribeSupportLinesResponseBodyRecordLinesRecordLine";


export class DescribeSupportLinesResponseBodyRecordLines extends $dara.Model {
  recordLine?: DescribeSupportLinesResponseBodyRecordLinesRecordLine[];
  static names(): { [key: string]: string } {
    return {
      recordLine: 'RecordLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLine: { 'type': 'array', 'itemType': DescribeSupportLinesResponseBodyRecordLinesRecordLine },
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

