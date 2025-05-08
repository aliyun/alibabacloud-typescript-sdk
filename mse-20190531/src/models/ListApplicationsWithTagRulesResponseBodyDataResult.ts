// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsWithTagRulesResponseBodyDataResultRouteRules } from "./ListApplicationsWithTagRulesResponseBodyDataResultRouteRules";


export class ListApplicationsWithTagRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * daqijp6c31@xxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * service-lottery-core
   */
  appName?: string;
  /**
   * @remarks
   * The MSE namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The queried rules.
   */
  routeRules?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRules[];
  /**
   * @remarks
   * The route state. Valid values:
   * 
   * *   0: disabled
   * *   1: enabled
   * 
   * @example
   * 1
   */
  routeStatus?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      routeRules: 'RouteRules',
      routeStatus: 'RouteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      routeRules: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRules },
      routeStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeRules)) {
      $dara.Model.validateArray(this.routeRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

