// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningList extends $dara.Model {
  opening?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputOpeningListOpening },
    };
  }

  validate() {
    if(Array.isArray(this.opening)) {
      $dara.Model.validateArray(this.opening);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

