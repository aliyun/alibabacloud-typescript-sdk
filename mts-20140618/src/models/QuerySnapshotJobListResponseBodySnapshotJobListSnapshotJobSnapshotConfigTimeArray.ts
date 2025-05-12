// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJobSnapshotConfigTimeArray extends $dara.Model {
  timePointList?: number[];
  static names(): { [key: string]: string } {
    return {
      timePointList: 'TimePointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timePointList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.timePointList)) {
      $dara.Model.validateArray(this.timePointList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

