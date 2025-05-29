// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntriesPathAttributes extends $dara.Model {
  /**
   * @remarks
   * The route AS path.
   */
  asPaths?: string[];
  /**
   * @remarks
   * The route community.
   */
  communities?: string[];
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * vbr-m5ent6du8deaq5*****
   */
  originInstanceId?: string;
  /**
   * @remarks
   * The source instance type. Valid values:
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **TR**
   * *   **VPN**
   * *   **CCN**
   * 
   * @example
   * VBR
   */
  originInstanceType?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **System**
   * *   **Custom**
   * *   **static**
   * *   **BGP**
   * *   **BlackHole**
   * 
   * @example
   * BGP
   */
  originRouteType?: string;
  /**
   * @remarks
   * The route priority.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 50
   */
  preference?: number;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      communities: 'Communities',
      originInstanceId: 'OriginInstanceId',
      originInstanceType: 'OriginInstanceType',
      originRouteType: 'OriginRouteType',
      preference: 'Preference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: { 'type': 'array', 'itemType': 'string' },
      communities: { 'type': 'array', 'itemType': 'string' },
      originInstanceId: 'string',
      originInstanceType: 'string',
      originRouteType: 'string',
      preference: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asPaths)) {
      $dara.Model.validateArray(this.asPaths);
    }
    if(Array.isArray(this.communities)) {
      $dara.Model.validateArray(this.communities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

