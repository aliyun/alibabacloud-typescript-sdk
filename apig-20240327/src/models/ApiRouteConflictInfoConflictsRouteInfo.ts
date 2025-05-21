// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiRouteConflictInfoConflictsRouteInfo extends $dara.Model {
  name?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

