// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkList extends $dara.Model {
  waterMark?: SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark[];
  static names(): { [key: string]: string } {
    return {
      waterMark: 'WaterMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      waterMark: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputWaterMarkListWaterMark },
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

