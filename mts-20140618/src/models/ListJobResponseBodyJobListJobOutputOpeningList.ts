// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputOpeningListOpening } from "./ListJobResponseBodyJobListJobOutputOpeningListOpening";


export class ListJobResponseBodyJobListJobOutputOpeningList extends $dara.Model {
  opening?: ListJobResponseBodyJobListJobOutputOpeningListOpening[];
  static names(): { [key: string]: string } {
    return {
      opening: 'Opening',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opening: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputOpeningListOpening },
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

