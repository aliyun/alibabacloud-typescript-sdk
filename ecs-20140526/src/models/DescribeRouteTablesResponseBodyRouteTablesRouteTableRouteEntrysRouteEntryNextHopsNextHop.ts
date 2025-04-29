// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop extends $dara.Model {
  enabled?: number;
  nextHopId?: string;
  nextHopType?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'number',
      nextHopId: 'string',
      nextHopType: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

