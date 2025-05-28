// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavingPlanShareAccountsResponseBodyDataShareTimeList extends $dara.Model {
  shareEndTime?: string;
  shareStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      shareEndTime: 'ShareEndTime',
      shareStartTime: 'ShareStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareEndTime: 'string',
      shareStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

