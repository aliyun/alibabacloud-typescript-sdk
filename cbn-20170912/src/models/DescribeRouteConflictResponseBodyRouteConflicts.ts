// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteConflictResponseBodyRouteConflictsRouteConflict } from "./DescribeRouteConflictResponseBodyRouteConflictsRouteConflict";


export class DescribeRouteConflictResponseBodyRouteConflicts extends $dara.Model {
  routeConflict?: DescribeRouteConflictResponseBodyRouteConflictsRouteConflict[];
  static names(): { [key: string]: string } {
    return {
      routeConflict: 'RouteConflict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeConflict: { 'type': 'array', 'itemType': DescribeRouteConflictResponseBodyRouteConflictsRouteConflict },
    };
  }

  validate() {
    if(Array.isArray(this.routeConflict)) {
      $dara.Model.validateArray(this.routeConflict);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

