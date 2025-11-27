// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem extends $dara.Model {
  /**
   * @remarks
   * The endpoints of the instance.
   * 
   * @example
   * rm****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.71.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The type of the IP address. Valid values:
   * 
   * *   **Public**: Internet
   * *   **Private**: internal network
   * 
   * @example
   * Private
   */
  ipType?: string;
  /**
   * @remarks
   * The port number of the endpoint.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp12u14ecz****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp17xdic25d****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      ipAddress: 'IpAddress',
      ipType: 'IpType',
      port: 'Port',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      ipAddress: 'string',
      ipType: 'string',
      port: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems extends $dara.Model {
  addressItem?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem[];
  static names(): { [key: string]: string } {
    return {
      addressItem: 'AddressItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItem: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem },
    };
  }

  validate() {
    if(Array.isArray(this.addressItem)) {
      $dara.Model.validateArray(this.addressItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-u****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rn-****13p6tum4289h
   */
  nodeId?: string;
  /**
   * @remarks
   * The weight of the node. Read requests are distributed based on the weight.
   * 
   * Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItems extends $dara.Model {
  nodeItem?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem[];
  static names(): { [key: string]: string } {
    return {
      nodeItem: 'NodeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeItem: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem },
    };
  }

  validate() {
    if(Array.isArray(this.nodeItem)) {
      $dara.Model.validateArray(this.nodeItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints extends $dara.Model {
  DBInstanceEndpoint?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceEndpoint: 'DBInstanceEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceEndpoint: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceEndpoint)) {
      $dara.Model.validateArray(this.DBInstanceEndpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information of the endpoints of the instance.
   */
  DBInstanceEndpoints?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-u****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The version of the IP protocol. Valid values:
   * 
   * *   **ipv4**
   * *   **ipv6**
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceEndpoints: 'DBInstanceEndpoints',
      DBInstanceName: 'DBInstanceName',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceEndpoints: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints,
      DBInstanceName: 'string',
      ipVersion: 'string',
    };
  }

  validate() {
    if(this.DBInstanceEndpoints && typeof (this.DBInstanceEndpoints as any).validate === 'function') {
      (this.DBInstanceEndpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDBInstanceEndpointsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 777C4593-8053-427B-****105593277CAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceEndpointsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

