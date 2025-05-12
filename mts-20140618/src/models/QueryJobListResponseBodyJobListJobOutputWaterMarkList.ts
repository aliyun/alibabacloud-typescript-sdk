// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark } from "./QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark";


export class QueryJobListResponseBodyJobListJobOutputWaterMarkList extends $dara.Model {
  waterMark?: QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputWaterMarkListWaterMark },
    };
  }

  validate() {
    if(Array.isArray(this.waterMark)) {
      $dara.Model.validateArray(this.waterMark);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

