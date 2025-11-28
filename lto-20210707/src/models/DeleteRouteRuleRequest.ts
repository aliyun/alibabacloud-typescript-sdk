// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteRuleRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routeRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      routeRuleId: 'RouteRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      routeRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

