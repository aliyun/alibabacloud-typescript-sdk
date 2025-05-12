// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark } from "./ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark";


export class ListJobResponseBodyJobListJobOutputWaterMarkList extends $dara.Model {
  waterMark?: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark },
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

