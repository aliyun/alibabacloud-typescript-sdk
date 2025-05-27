// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable } from "./GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable";


export class GetTopicStatusResponseBodyTopicStatusOffsetTable extends $dara.Model {
  offsetTable?: GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable[];
  static names(): { [key: string]: string } {
    return {
      offsetTable: 'OffsetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetTable: { 'type': 'array', 'itemType': GetTopicStatusResponseBodyTopicStatusOffsetTableOffsetTable },
    };
  }

  validate() {
    if(Array.isArray(this.offsetTable)) {
      $dara.Model.validateArray(this.offsetTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

