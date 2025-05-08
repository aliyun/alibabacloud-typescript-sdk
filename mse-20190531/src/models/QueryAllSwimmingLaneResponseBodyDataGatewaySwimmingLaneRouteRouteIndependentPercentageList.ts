// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteRouteIndependentPercentageList extends $dara.Model {
  percentage?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

