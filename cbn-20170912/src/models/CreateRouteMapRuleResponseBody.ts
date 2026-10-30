// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteMapRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF44D7B7-6248-5A60-8A4C-A92388605A57
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the route map rule.
   * 
   * @example
   * rmr-3dm13f66wtctcnydup
   */
  routeMapRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeMapRuleId: 'RouteMapRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeMapRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

