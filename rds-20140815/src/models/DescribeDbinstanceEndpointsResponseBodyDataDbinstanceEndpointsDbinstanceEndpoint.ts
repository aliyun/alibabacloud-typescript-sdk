// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems } from "./DescribeDbinstanceEndpointsResponseBodyDataDbinstanceEndpointsDbinstanceEndpointAddressItems";
import { DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems } from "./DescribeDbinstanceEndpointsResponseBodyDataDbinstanceEndpointsDbinstanceEndpointNodeItems";


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoint.
   */
  addressItems?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems;
  /**
   * @remarks
   * The user-defined description of the endpoint.
   * 
   * @example
   * for readonly business
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The endpoint ID of the instance.
   * 
   * @example
   * ep-****
   */
  endpointId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Primary**: the read/write endpoint of the instance
   * *   **Readonly**: the read-only endpoint of the instance
   * 
   * @example
   * Readonly
   */
  endpointType?: string;
  /**
   * @remarks
   * The information about the node that is configured for the endpoint.
   */
  nodeItems?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      endpointDescription: 'EndpointDescription',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      nodeItems: 'NodeItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems,
      endpointDescription: 'string',
      endpointId: 'string',
      endpointType: 'string',
      nodeItems: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems,
    };
  }

  validate() {
    if(this.addressItems && typeof (this.addressItems as any).validate === 'function') {
      (this.addressItems as any).validate();
    }
    if(this.nodeItems && typeof (this.nodeItems as any).validate === 'function') {
      (this.nodeItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

