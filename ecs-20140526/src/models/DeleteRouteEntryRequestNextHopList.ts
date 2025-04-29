// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntryRequestNextHopList extends $dara.Model {
  nextHopId?: string;
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

