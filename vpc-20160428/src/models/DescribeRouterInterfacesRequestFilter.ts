// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can specify up to five filter conditions. The following filter conditions are supported:
   * 
   * *   **RouterInterfaceId**: the ID of the router interface.
   * *   **RouterId**: the ID of the router.
   * *   **RouterType**: the router type. Valid values: **VRouter** and **VBR**.
   * *   **RouterInterfaceOwnerId**: the ID of the Alibaba Cloud account to which the router interface belongs.
   * *   **OppositeInterfaceId**: the ID of the peer router interface.
   * *   **OppositeRouterType**: the type of the peer router interface. Valid values: **VRouter** and **VBR**.
   * *   **OppositeRouterId**: the ID of the peer router.
   * *   **OppositeInterfaceOwnerId**: the ID of the Alibaba Cloud account to which the peer router interface belongs.
   * *   **Status**: the status of the router interface.
   * *   **Name**: the name of the router interface.
   * 
   * >  The logical operator among multiple values in a filter condition is OR. In this case, the filter condition is met if one of the values is matched. The logical operator among filter conditions is AND. Only routers that meet all the filter conditions are queried.
   * 
   * @example
   * Filter.1.Status
   */
  key?: string;
  /**
   * @remarks
   * Specifies the value in the filter condition based on the key. You can specify multiple filter values for one key. The logical operator among filter values is OR. If one filter value is matched, the filter condition is matched.
   * 
   * @example
   * Filter.1.Active 1
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

