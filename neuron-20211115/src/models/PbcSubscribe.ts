// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcSubscribe extends $dara.Model {
  developerId?: string;
  id?: number;
  pbcName?: string;
  purpose?: string;
  subPbcName?: string;
  static names(): { [key: string]: string } {
    return {
      developerId: 'developerId',
      id: 'id',
      pbcName: 'pbcName',
      purpose: 'purpose',
      subPbcName: 'subPbcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerId: 'string',
      id: 'number',
      pbcName: 'string',
      purpose: 'string',
      subPbcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

