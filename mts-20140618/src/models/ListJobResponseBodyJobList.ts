// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJob } from "./ListJobResponseBodyJobListJob";


export class ListJobResponseBodyJobList extends $dara.Model {
  job?: ListJobResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJob },
    };
  }

  validate() {
    if(Array.isArray(this.job)) {
      $dara.Model.validateArray(this.job);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

