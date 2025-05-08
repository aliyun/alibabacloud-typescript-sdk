// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonRouteIndependentPercentageList extends $dara.Model {
  percentage?: number;
  routeId?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      routeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

