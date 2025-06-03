// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSummaryByStatusAndGroupRequest extends $dara.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

